# Car Data Import and Sanity Integration

This project demonstrates how to import external API data into Sanity CMS, create a schema for the imported data, and display it in a React-based frontend. The project was implemented as part of a provided hackathon template.

---

## Features
- Import data from an external API.
- Define and use a `cars` schema in Sanity CMS.
- Upload images to Sanity CMS and link them with the imported data.
- Display data dynamically on a frontend using React and Next.js.
- Provide a clean UI for displaying cars with details like name, brand, price, and type.

---

## Project Structure
### Backend
1. **Sanity Schema (`car.ts`)**
   - The schema defines the structure for the `cars` document in Sanity.
   - Fields include car name, brand, type, fuel capacity, transmission, seating capacity, pricing, tags, and image.

2. **Data Import Script**
   - Fetches car data from an external API.
   - Uploads car images to Sanity CMS using the `uploadImageToSanity` function.
   - Creates car documents in Sanity using the fetched data and links uploaded images.

### Frontend
1. **CarGrid Component**
   - Dynamically fetches all car data from Sanity CMS using GROQ queries.
   - Displays car details in a grid format.
   - Includes a "View All" link and a "Show more cars" button.

2. **ProductCard Component**
   - A reusable component that displays details of each car in a card layout.
   - Shows car name, image, price, and other details.

---

## Code Breakdown

### Backend Code
1. **Sanity Schema**
   ```typescript
   export const cars = {
     name: 'cars',
     type: 'document',
     title: 'Cars',
     fields: [
       { name: 'name', type: 'string', title: 'Car Name' },
       { name: 'brand', type: 'string', title: 'Brand', description: 'Brand of the car (e.g., Nissan, Tesla, etc.)' },
       { name: 'type', type: 'string', title: 'Car Type', description: 'Type of the car (e.g., Sport, Sedan, SUV, etc.)' },
       { name: 'fuelCapacity', type: 'string', title: 'Fuel Capacity', description: 'Fuel capacity or battery capacity (e.g., 90L, 100kWh)' },
       { name: 'transmission', type: 'string', title: 'Transmission', description: 'Type of transmission (e.g., Manual, Automatic)' },
       { name: 'seatingCapacity', type: 'string', title: 'Seating Capacity', description: 'Number of seats (e.g., 2 People, 4 seats)' },
       { name: 'pricePerDay', type: 'string', title: 'Price Per Day', description: 'Rental price per day' },
       { name: 'originalPrice', type: 'string', title: 'Original Price', description: 'Original price before discount (if applicable)' },
       { name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }], options: { layout: 'tags' } },
       { name: 'image', type: 'image', title: 'Car Image', options: { hotspot: true } }
     ]
   };

   export default cars;
