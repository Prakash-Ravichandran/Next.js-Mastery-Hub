import Link from "next/link";
import Image from "next/image";
import classes from "@/components/main-header/main-header.module.css";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "@/components/main-header/main-header-background";
 
export default function MainHeader(){
    return (
    <>
    <MainHeaderBackground />
        <header className={classes.header}>
            <Link className={classes.logo} href='/'>
            {/* <img src={logoImg.src} alt="A Plate with food on it"/> */}
            <Image src={logoImg} alt="A Plate with food on it" priority/>
            Next level Food
            </Link>
            <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/ssg">SSG route</Link>
                </li>
                <li>
                    <Link href="/ssr">SSR route</Link>
                </li>
                <li>
                    <Link href="/ssr">CSR route</Link>
                </li>
            </ul>
         </nav>
        </header>
    </>
    );
}