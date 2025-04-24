import React from 'react'
import styles from './menusection.module.scss'
import Menu from '../../layout/menu/menu';
import Link from 'next/link';

const MenuSection = () => {
    return (
        <div className={styles.quickmenusection}>

            <div className={styles.menucard}>


                <h1 className={styles.bighead}>
                    Top of the Grill
                </h1>
                <Menu />
                <Link href="/menu" target="_blank" className={styles.menubutton}>
                    full menu
                </Link>
            </div>

        </div>
    )
}

export default MenuSection;
