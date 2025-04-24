type MenuType = "snack" | "breakfast" | "lunch" | "dinner"
type MenuItem = {
  id: number
  name: string
  price: number
  calories: number
  image: string
  category: MenuType
}


export const menuItems: MenuItem[] = [
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