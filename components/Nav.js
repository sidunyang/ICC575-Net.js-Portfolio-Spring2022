import styles from './nav.module.scss'
import Link from 'next/link'

const navItems = [
    {
        label:"Work",
        slug:"work"
    },
    {
        label:"About",
        slug:"about"
    },
    {
        label:"Contact",
        slug:"contact"
    },
]

const Nav = () => {
    return <nav className={styles.nav}>
        <ul className={styles.list}>
            {navItems.map((navItems, index) => {
                const { label, slug } = navItems;
                return <li 
                key ={index} 
                className={styles.listItem}>
                    <Link href={`/${slug}`}>
                        <a>
                            {label}
                        </a>
                    </Link>
                </li>
            })}
        </ul>
        </nav>
}
export default Nav