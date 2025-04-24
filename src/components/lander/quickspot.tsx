"use client"

import { useEffect, useState } from "react"
import styles from "./quickspot.module.scss"
import { X } from 'lucide-react'
import { menuItems } from "./menulist"

// // Define the menu types and their corresponding data
type MenuType = "snack" | "breakfast" | "lunch" | "dinner"

// Define the menu item type
type MenuItem = {
  id: number
  name: string
  price: number
  calories: number
  image: string
  category: MenuType
}

// Menu data for background images
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
    image: "https://images.unsplash.com/photo-1626323107927-008ae2828ab6?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Only run the interval if the menu overlay is not open
    if (isMenuOpen) return

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
  }, [currentMenu, isMenuOpen])

  const currentMenuData = menuData[currentMenu]

  const handleMainTextClick = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className={styles.hero}>
      {/* Background image */}
      <div
        className={`${styles.background} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
        style={{ backgroundImage: `url(${currentMenuData.image})` }}
      />

      {/* Text overlay */}
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <span className={`${styles.prefix} ${isTextVisible ? styles.visible : styles.hidden}`}>It's</span>

          <div
            className={styles.mainTextWrapper}
            onClick={handleMainTextClick}
            role="button"
            tabIndex={0}
            aria-label={`Open ${currentMenuData.text} menu`}
          >
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

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.menuOverlay}>
          <div className={styles.menuContainer}>
            <div className={styles.menuHeader}>
              <h2>Menu</h2>
              <button className={styles.closeButton} onClick={closeMenu} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <div className={styles.menuContent}>
              {["breakfast", "lunch", "dinner", "snack"].map((category) => (
                <div key={category} className={styles.menuSection}>
                  <h3 className={styles.categoryTitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <div className={styles.menuItems}>
                    {menuItems
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <div key={item.id} className={styles.menuItem}>
                          <div className={styles.menuItemImage}>
                            <img draggable="false" src={item.image || "/placeholder.svg"} alt={item.name} />
                          </div>
                          <div className={styles.menuItemInfo}>
                            <h4 className={styles.itemname}>{item.name}</h4>
                            <div className={styles.menuItemDetails}>
                              <span className={styles.price}><span style={{fontWeight: 400, fontSize: '1.2rem', margin: '0rem 0.2rem'}}>₹</span>{item.price}</span>
                              <span className={styles.calories}>{item.calories} Cal.</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
