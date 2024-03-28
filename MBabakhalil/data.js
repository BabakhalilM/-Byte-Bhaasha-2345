const fs = require('fs');

// Define the categories
const categories = [
    "Islands", "Design", "Arctic", "Luxe", "Earth homes", "Top of the world", "Treehouses",
    "Tiny homes", "Beach", "Caves", "OMG!", "Historical homes", "Rooms", "Castles", "National parks",
    "Camper vans", "Amazing pools", "Cabins", "Surfing", "Camping", "Trending", "Tropical",
    "Bed & breakfasts", "New", "Golfing", "Countryside", "Mansions", "Iconic cities", "Amazing views",
    "Farms", "A-frames", "Lake", "Vineyards", "Hanoks", "Windmills", "Skiing", "Cycladic homes",
    "Lakefront", "Chef's kitchens", "Minsus", "Barns", "Shepherd's huts", "Towers", "Ryokans", "Yurts",
    "Domes", "Casas particulares", "Desert", "Off-the-grid", "Play", "Adapted", "Ski-in/out", "Boats",
    "Houseboats", "Containers", "Beachfront", "Grand pianos", "Creative spaces", "Riads", "Trulli", "Dammusi"
];

// Function to generate random date within a range
// function randomDate() {
//     const start = new Date();
//     const end = new Date(start.getTime() + (365 * 24 * 60 * 60 * 1000)); // Add one year
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }
function randomDateRange() {
    const start = new Date();
    const end = new Date(start.getTime() + (365 * 24 * 60 * 60 * 1000)); // Add one year
    const startDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const endDate = new Date(startDate.getTime() + Math.random() * (end.getTime() - startDate.getTime()));
    return `${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}`;
}

// Generate random data for each category
const data = { categories: [] };
categories.forEach(category => {
    const categoryData = { name: category, cards: [] };
    for (let i = 0; i < 70; i++) { // Generate 100 cards for each category
        const card = {
            images: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-852899544635683289/original/c627f47e-8ca9-4471-90d4-1fd987dd2362.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-852929652016621394/original/49a9a199-6d71-4504-87fa-a95fe818e44f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-852929652016621394/original/49610013-776d-4061-9c58-8e5a3c1e9314.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-852929652016621394/original/e9c6f8d0-83f3-46d7-b2e2-b9d66bf079ce.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/397ed026-16a9-4418-af19-1d2b31fe0aa8.jpg?im_w=720"
            ],
            place_name: `Place${i} in ${category}`,
            Ratting:((Math.random()*4)+1).toFixed(2),
            distance_away_km: Math.floor(Math.random() * 5000) + 1,
            date_available: randomDateRange(),

            // date_available: randomDateRange().toISOString().split('T')[0] + "from"+ randomDate().toISOString().split('T')[0],
            price_per_night: Math.floor(Math.random() * 9001) + 1000, // Random price between 100 and 1000
            
        };
        categoryData.cards.push(card);
    }
    data.categories.push(categoryData);
});

// Save data to JSON file
fs.writeFileSync('cards_data.json', JSON.stringify(data, null, 2));
console.log('Data generated and saved to cards_data.json');
