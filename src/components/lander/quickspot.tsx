"use client"

import { useEffect, useState } from "react"
import styles from "./quickspot.module.scss"
import { X } from 'lucide-react'

// Define the menu types and their corresponding data
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

// Unified menu data
const menuItems: MenuItem[] = [
  // Snacks
  {
    id: 1,
    name: "Crispy Fries",
    price: 597,
    calories: 370,
    image: "https://images.unsplash.com/photo-1691410065039-25bdbb56c23b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "snack",
  },
  {
    id: 2,
    name: "Onion Rings",
    price: 499,
    calories: 320,
    image: "https://images.unsplash.com/photo-1625944227313-4f7f68e6b3fa?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "snack",
  },
  {
    id: 3,
    name: "Mozzarella Sticks",
    price: 649,
    calories: 410,
    image: "https://images.unsplash.com/photo-1626005601500-44a5cf788c0d?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "snack",
  },
  {
    id: 4,
    name: "Chicken Nuggets",
    price: 739,
    calories: 290,
    image: "https://images.unsplash.com/photo-1633683789259-c1694c3bd4ed?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "snack",
  },
  // Breakfast
  {
    id: 5,
    name: "Croissanwich",
    price: 729,
    calories: 520,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "breakfast",
  },
  {
    id: 6,
    name: "Breakfast Burrito",
    price: 829,
    calories: 650,
    image: "https://images.unsplash.com/photo-1529262365544-55d1707e64e6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "breakfast",
  },
  {
    id: 7,
    name: "Pancake Stack",
    price: 699,
    calories: 580,
    image: "https://images.unsplash.com/photo-1626203313658-886791f37e46?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "breakfast",
  },
  {
    id: 8,
    name: "Hash Browns",
    price: 428,
    calories: 540,
    image: "https://images.unsplash.com/photo-1602216475919-37336ceb4ad3?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "breakfast",
  },
  // Lunch
  {
    id: 9,
    name: "Whopper",
    price: 165,
    calories: 670,
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "lunch",
  },
  {
    id: 10,
    name: "Chicken Sandwich",
    price: 999,
    calories: 550,
    image: "https://images.unsplash.com/photo-1739869503097-af2b02ffb23b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "lunch",
  },
  {
    id: 11,
    name: "Caesar Salad",
    price: 829,
    calories: 380,
    image: "https://images.unsplash.com/photo-1642689690500-f429a042cad1?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "lunch",
  },
  {
    id: 12,
    name: "Burger Combo",
    price: 129,
    calories: 920,
    image: "https://images.unsplash.com/photo-1719784540611-34a785c5d9b5?q=80&w=2380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "lunch",
  },
  // Dinner
  {
    id: 13,
    name: "Steak Dinner",
    price: 189,
    calories: 780,
    image: "https://images.unsplash.com/photo-1700325337519-82cc88547ae9?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "dinner",
  },
  {
    id: 14,
    name: "Pasta Primavera",
    price: 149,
    calories: 650,
    image: "https://images.unsplash.com/photo-1628430044262-fb84cffbb744?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "dinner",
  },
  {
    id: 15,
    name: "Grilled Salmon",
    price: 179,
    calories: 520,
    image: "https://images.unsplash.com/photo-1627435602002-745922e7221c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "dinner",
  },
  {
    id: 16,
    name: "Chicken Parmesan",
    price: 159,
    calories: 720,
    image: "https://plus.unsplash.com/premium_photo-1663840345068-6a1032b26742?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "dinner",
  },
]

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
                            <img src={item.image || "/placeholder.svg"} alt={item.name} />
                          </div>
                          <div className={styles.menuItemInfo}>
                            <h4 className={styles.itemname}>{item.name}</h4>
                            <div className={styles.menuItemDetails}>
                              <span className={styles.price}><span style={{fontWeight: 400, fontSize: '1.2rem', margin: '0rem 0.2rem'}}>₹</span>{item.price.toFixed(2)}</span>
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
