import Link from "next/link";
import logoImg from "@/assets/logo.png";
 
export default function MainHeader(){
    return (
    <>
        <header>
            <Link href='/'>
            <img src={logoImg.src} alt="A Plate with food on it"/>
            Next level Food
            </Link>
        </header>
        <nav>
            <ul>
                <li>
                    <Link href="/meals">Browser meals</Link>
                </li>
                <li>
                    <Link href="/community">Food Community</Link>
                </li>
            </ul>
        </nav>
    </>
    );
}