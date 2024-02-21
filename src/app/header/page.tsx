import classes from './header.module.css'
import Image from "next/image";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';

function Header(){
    return(
        <header className={classes.header}>
        <Image className={classes.logo} src="/images/logo.jpg" alt="" width={100} height={100} />
            <ul>
                <Link className={classes.link} href="home"><li>Home</li></Link>
                <Link className={classes.link} href="men"><li>Men</li></Link>
                <Link className={classes.link} href="women"><li>Women</li></Link>
                <Link className={classes.link} href="kids"><li>kids</li></Link>
                <Link className={classes.link} href="men"><li>About Us</li></Link>
                <Link className={classes.link} href="men"><li>Contact Us</li></Link>
                
            </ul>
            <div className={classes.icon}>
                <FavoriteBorderIcon/>
                <div className={classes.icon2}>
                <ShoppingCartIcon/>
                </div>
            </div>
    </header>
    )
}

export default Header;