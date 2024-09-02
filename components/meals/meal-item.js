import classes from './meal-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function MealItem ({title, slug, image, summary, creator }){
    return (
     <article>
        <header>

            <Image src={image} alt={title} fill/>
            <div> 
              <h2>{title}</h2>
               <p>{creator} </p>
            </div>
        </header>
        <div className={classes.content}>
            <p className={classes.summary}>{summary}</p>
            <div className={classes.actions}>
                <Link href={`/meals/${slug}`}></Link>
            </div>
        </div>
     </article>
    )
}