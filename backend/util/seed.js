const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const Breed = require("../models/breed");
const Cat = require("../models/cat");
const breedsData = require("./breedsSampleData");
const catsData = require("./catsSampleData");

async function seed() {
  try {
    await Breed.sync({ force: true }); // Drops the existing table and recreates it
    await Breed.bulkCreate(breedsData);
    console.log("Breeds Database seeded successfully!");

    await Cat.sync({ force: true }); // Drops the existing table and recreates it
    await Cat.bulkCreate(catsData);
    console.log("Cats Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

seed();
