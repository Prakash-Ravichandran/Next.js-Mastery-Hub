import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve,2000)) // a simple arbitrary delay - just to simulate an action that takes longer.
    return db.prepare('SELECT * FROM meals').all();
}