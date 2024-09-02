import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    /* this below line is responsible for  creating a delay while we reload the browser refresh*/
    await new Promise((resolve) => setTimeout(resolve,2000)) // a simple arbitrary delay - just to simulate an action that takes longer.
    throw new Error("Failed in fetching the meals ...")
    return db.prepare('SELECT * FROM meals').all();
}