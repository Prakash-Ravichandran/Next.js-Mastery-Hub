import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading-out";
import classes from "./page.module.css";

async function Meals() {
  const meals = await getMeals();

  console.log("fetching");

  return (
    <>
      <MealsGrid meals={meals} />
    </>
  );
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun !
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe.</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
