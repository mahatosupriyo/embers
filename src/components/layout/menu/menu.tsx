import React from 'react'
import styles from './menu.module.scss'

const Menu = () => {
    return (
        <div className={styles.menucontainer}>

            <div className={styles.menu}>
                <div className={styles.bannercontainer}>
                    <span className={styles.tag}>#1 most liked</span>
                    <img
                        src="https://images.unsplash.com/photo-1518290943012-2c2bec0e54d2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        draggable="false"
                        className={styles.banner}
                    />
                </div>

                <div className={styles.detailscontainer}>
                    <h2 className={styles.dishname}>
                        Mozzarella Sticks <span className={styles.calories}>• 34 Cal.</span>
                    </h2>

                    <h4 className={styles.price}>
                        <span className={styles.rupeesymbol}>₹</span>
                        349
                    </h4>
                </div>



            </div>

            <div className={styles.menu}>
                <div className={styles.bannercontainer}>
                    <span className={styles.tag}>#2 most liked</span>
                    <img
                        src="https://images.unsplash.com/photo-1734771146123-b3bfa6e0fdd0?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        draggable="false"
                        className={styles.banner}
                    />
                </div>

                <div className={styles.detailscontainer}>
                    <h2 className={styles.dishname}>
                        Whopper <span className={styles.calories}>• 34 Cal.</span>
                    </h2>

                    <h4 className={styles.price}>
                        <span className={styles.rupeesymbol}>₹</span>
                        249
                    </h4>
                </div>



            </div>

            <div className={styles.menu}>
                <div className={styles.bannercontainer}>
                    <span className={styles.tag}>#3 most liked</span>
                    <img
                        src="https://images.unsplash.com/photo-1668724776334-548671c13751?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        draggable="false"
                        className={styles.banner}
                    />
                </div>

                <div className={styles.detailscontainer}>
                    <h2 className={styles.dishname}>
                    Chicken Sandwich
                    <span className={styles.calories}>• 24 Cal.</span>
                    </h2>

                    <h4 className={styles.price}>
                        <span className={styles.rupeesymbol}>₹</span>
                        449
                    </h4>
                </div>



            </div>

        </div>

    )
}

export default Menu
