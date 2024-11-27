import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';


const db = sql('meals.db');

export async function getMeals() {
    /* this below line is responsible for  creating a delay while we reload the browser refresh*/
    await new Promise((resolve) => setTimeout(resolve,2000)) // a simple arbitrary delay - just to simulate an action that takes longer.
    return db.prepare('SELECT * FROM meals').all();
}


export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal){
   meal.slug = slugify(meal.title, { lower: true});
   meal.instructions = xss(meal.instructions); // to protect from harmful attacks

   const extension = meal.image.name.split('.').pop();
   const fileName = `${meal.slug}.${extension}`;

   const stream = fs.createWriteStream(`public/images/${fileName}`);
   const BufferedImage = await meal.image.arrayBuffer();
   stream.write(Buffer.from(BufferedImage), (error) => {
     if(error){
        throw new Error('Saving Image Failed');
     }
   });

   meal.image = `/images/${fileName}`;

   let existingMeal = db.prepare(`SELECT slug FROM meals WHERE slug = ?`).get(meal.slug);
    if (existingMeal) {
        // Generate a new unique slug
        meal.slug = `${meal.slug}-${Date.now()}`;
    }

   db.prepare(`
    INSERT INTO meals ('title', 'summary', 'instructions', 'creator', 'creator_email', 'image', slug)
    VALUES (   
         @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @image,
         @slug
         )
    `).run(meal);
}