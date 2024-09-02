"use client"


export default function Error({error}){
    return (
    <>
        <main className="error">
            <h1>An error occurred !</h1>
            <p>Failed in Fecthing the meals... please try again later.</p>
        </main>
    </>);
}