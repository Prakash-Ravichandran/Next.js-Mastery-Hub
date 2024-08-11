import Link from "next/link";
import classes from "@/components/main-header.module.css";
import logoImg from "@/assets/logo.png";
 
export default function MainHeader(){
    return (
    <>
        <header className={classes.header}>
            <Link className={classes.logo} href='/'>
            <img src={logoImg.src} alt="A Plate with food on it"/>
            Next level Food
            </Link>
            <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browser meals</Link>
                </li>
                <li>
                    <Link href="/community">Food Community</Link>
                </li>
            </ul>
         </nav>
        </header>
    </>
    );
}