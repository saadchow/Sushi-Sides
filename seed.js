require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// Pattern: IIFE (Immediately Invoked Function Expression)
(async function() {
  console.log('🍣 Seeding Sushi & Sides database...');

  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Rolls', sortOrder: 10 },
    { name: 'Nigiri', sortOrder: 20 },
    { name: 'Bowls & Bento', sortOrder: 30 },
    { name: 'Sides', sortOrder: 40 },
    { name: 'Desserts', sortOrder: 50 },
    { name: 'Drinks', sortOrder: 60 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    // Rolls
    { name: 'California Roll', emoji: '🍣', category: categories[0], price: 6.95 },
    { name: 'Spicy Tuna Roll', emoji: '🌶️', category: categories[0], price: 7.95 },
    { name: 'Salmon Avocado Roll', emoji: '🥑', category: categories[0], price: 8.95 },
    { name: 'Dragon Roll', emoji: '🐉', category: categories[0], price: 12.95 },
    { name: 'Rainbow Roll', emoji: '🌈', category: categories[0], price: 11.95 },
    
    // Nigiri
    { name: 'Salmon Nigiri', emoji: '🍣', category: categories[1], price: 4.50 },
    { name: 'Tuna Nigiri', emoji: '🍣', category: categories[1], price: 4.95 },
    { name: 'Shrimp Nigiri', emoji: '🍤', category: categories[1], price: 4.25 },
    { name: 'Eel Nigiri', emoji: '🐟', category: categories[1], price: 5.25 },
    { name: 'Yellowtail Nigiri', emoji: '🍣', category: categories[1], price: 5.50 },
    
    // Bowls & Bento
    { name: 'Chicken Teriyaki Bowl', emoji: '🍱', category: categories[2], price: 11.95 },
    { name: 'Salmon Poke Bowl', emoji: '🍚', category: categories[2], price: 12.95 },
    { name: 'Beef Bulgogi Bowl', emoji: '🥩', category: categories[2], price: 13.95 },
    { name: 'Chirashi Bowl', emoji: '🍣', category: categories[2], price: 15.95 },
    
    // Sides
    { name: 'Miso Soup', emoji: '🥣', category: categories[3], price: 2.50 },
    { name: 'Edamame', emoji: '🫛', category: categories[3], price: 3.95 },
    { name: 'Seaweed Salad', emoji: '🥗', category: categories[3], price: 3.95 },
    { name: 'Gyoza (6pc)', emoji: '🥟', category: categories[3], price: 5.95 },
    { name: 'Tempura Vegetables', emoji: '🥦', category: categories[3], price: 6.95 },
    
    // Desserts
    { name: 'Mochi Ice Cream', emoji: '🍡', category: categories[4], price: 3.95 },
    { name: 'Dorayaki', emoji: '🥞', category: categories[4], price: 4.50 },
    { name: 'Matcha Cheesecake', emoji: '🍰', category: categories[4], price: 5.95 },
    
    // Drinks
    { name: 'Green Tea', emoji: '🍵', category: categories[5], price: 1.95 },
    { name: 'Ramune', emoji: '🧋', category: categories[5], price: 2.95 },
    { name: 'Sake', emoji: '🍶', category: categories[5], price: 6.95 },
    { name: 'Japanese Beer', emoji: '🍺', category: categories[5], price: 4.95 },
  ]);

  console.log(`✅ Created ${categories.length} categories`);
  console.log(`✅ Created ${items.length} menu items`);
  console.log('🍣 Sushi & Sides database seeded successfully!');

  process.exit();
})();
