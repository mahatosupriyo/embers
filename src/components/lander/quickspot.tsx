"use client"

import { useEffect, useState } from "react"
import styles from "./quickspot.module.scss"

// Define the menu types and their corresponding data
type MenuType = "snack" | "breakfast" | "lunch" | "dinner"

const menuData = {
    snack: {
        text: "Snack",
        image: "https://images.unsplash.com/photo-1626323109697-df55d20f06a8?q=80&w=2487&auto=format&fit=crop",
    },
    breakfast: {
        text: "Breakfast",
        image: "https://images.unsplash.com/photo-1741606090938-7a238d2eff3b?q=80&w=2487&auto=format&fit=crop",
    },
    lunch: {
        text: "Lunch",
        image: "https://plus.unsplash.com/premium_photo-1672976129906-5982aa060951?q=80&w=2488&auto=format&fit=crop",
    },
    dinner: {
        text: "Dinner",
        image: "https://images.unsplash.com/photo-1697724830729-59a0353b31e5?q=80&w=2340&auto=format&fit=crop",
    },
}

export default function QuickMenu() {
    const [currentMenu, setCurrentMenu] = useState<MenuType>("snack")
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [isTextVisible, setIsTextVisible] = useState(true)

    useEffect(() => {
        const menuTypes: MenuType[] = ["snack", "breakfast", "lunch", "dinner"]

        const interval = setInterval(() => {
            setIsTextVisible(false) // Start text exit animation

            setTimeout(() => {
                setIsTransitioning(true) // Start background transition

                const currentIndex = menuTypes.indexOf(currentMenu)
                const nextIndex = (currentIndex + 1) % menuTypes.length
                setCurrentMenu(menuTypes[nextIndex]) // Update current menu

                setTimeout(() => {
                    setIsTransitioning(false) // End background transition
                    setIsTextVisible(true) // Start text entrance animation
                }, 300) // Background transition duration
            }, 250) // Text exit animation duration
        }, 4000) // Interval for cycling through menus

        return () => clearInterval(interval) // Cleanup interval on component unmount
    }, [currentMenu])

    const currentMenuData = menuData[currentMenu]

    return (
        <div className={styles.hero}>
            {/* Background image */}
            <div
                className={`${styles.background} ${isTransitioning ? styles.fadeOut : ""}`}
                style={{ backgroundImage: `url(${currentMenuData.image})` }}
            />

            {/* Text overlay */}
            <div className={styles.textContainer}>
                <div className={styles.textWrapper}>
                    <span className={`${styles.prefix} ${isTextVisible ? styles.visible : styles.hidden}`}>It's</span>

                    <div className={styles.mainTextWrapper}>
                        <h1 className={`${styles.mainText} ${isTextVisible ? styles.visible : styles.hidden}`}>
                            {currentMenuData.text.split("").map((letter, index) => (
                                <span key={index} className={styles.letter} style={{ animationDelay: `${index * 0.03}s` }}>
                                    {letter}
                                </span>
                            ))}
                        </h1>
                        <div className={`${styles.underline} ${isTextVisible ? styles.visible : styles.hidden}`}></div>
                    </div>

                    <span className={`${styles.suffix} ${isTextVisible ? styles.visible : styles.hidden}`}>o' clock</span>
                </div>
            </div>
        </div>
    )
}