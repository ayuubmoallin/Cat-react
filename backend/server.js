const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { PORT } = process.env;

const express = require("express");
const app = express();
const cors = require("cors");

const { sequelize } = require("./util/database");
const Cat = require("./models/cat");
const Breed = require("./models/breed");
const {
  getAllCats,
  getAllAdoptedCats,
  getBreedById,
  getCatById,
  createCat,
  updateCatStatus,
  deleteCat,
} = require("./controllers/controller");

app.use(express.json()); // to parse & read req.body
app.use(cors());

Cat.belongsTo(Breed, { foreignKey: "breed_id" });
Breed.hasMany(Cat, { foreignKey: "breed_id" });

app.get("/api/cats", getAllCats);
app.get("/api/cats/adopted", getAllAdoptedCats);

app.get("/api/cats/breed/:id", getBreedById);

app.get("/api/cat/:id", getCatById);

app.patch("/api/cat/:id", updateCatStatus);
app.delete("/api/cat/:id", deleteCat);


app.post("/api/cat", createCat);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Unable to connect to the database:", error);
  });
