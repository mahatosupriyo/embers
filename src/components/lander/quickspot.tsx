"use client"

import { useEffect, useState } from "react"
import styles from ".//quickspot.module.scss"

type MenuType = "snack" | "breakfast" | "lunch" | "dinner"

const menuData = {
    snack: {
        text: "Snack",
        image: "https://images.unsplash.com/photo-1741606552241-fbd67e574f7f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    breakfast: {
        text: "Breakfast",
        image: "https://images.unsplash.com/photo-1741606090938-7a238d2eff3b?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    lunch: {
        text: "Lunch",
        image: "https://plus.unsplash.com/premium_photo-1672976129906-5982aa060951?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    dinner: {
        text: "Dinner",
        image: "https://images.unsplash.com/photo-1697724830729-59a0353b31e5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
}

export default function QuickMenu() {
    const [currentMenu, setCurrentMenu] = useState<MenuType>("snack")
    const [nextMenu, setNextMenu] = useState<MenuType>("breakfast")
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [isTextVisible, setIsTextVisible] = useState(true)

    // Cycle through menu types
    useEffect(() => {
        const menuTypes: MenuType[] = ["snack", "breakfast", "lunch", "dinner"]

        const interval = setInterval(() => {
            setIsTextVisible(false) // Start text exit animation

            // After text exit animation completes, change background
            setTimeout(() => {
                setIsTransitioning(true)

                const currentIndex = menuTypes.indexOf(currentMenu)
                const nextIndex = (currentIndex + 1) % menuTypes.length
                setNextMenu(menuTypes[nextIndex])

                // After background transition starts, update current menu
                setTimeout(() => {
                    setCurrentMenu(menuTypes[nextIndex])
                    setIsTransitioning(false)
                    setIsTextVisible(true) // Start text entrance animation
                }, 300) // Faster background transition time
            }, 250) // Faster text exit animation duration
        }, 4000)

        return () => clearInterval(interval)
    }, [currentMenu])

    const currentMenuData = menuData[currentMenu]
    const nextMenuData = menuData[nextMenu]

    return (
        <div className={styles.hero}>
            {/* Current background */}
            <div
                className={`${styles.background} ${isTransitioning ? styles.fadeOut : ""}`}
                style={{ backgroundImage: `url(${currentMenuData.image})` }}
            />

            {/* Next background (for transition) */}
            {isTransitioning && (
                <div
                    className={`${styles.background} ${styles.fadeIn}`}
                    style={{ backgroundImage: `url(${nextMenuData.image})` }}
                />
            )}

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
