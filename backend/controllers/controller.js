const Cat = require("../models/cat");
const Breed = require("../models/breed");
const catImages = [
  "cat-tile1.jpg",
  "cat-tile2.jpg",
  "cat-tile3.jpg",
  "cat-tile4.jpg",
  "cat-tile5.jpg",
  "cat-tile6.jpg",
  "cat-tile7.jpg",
  "cat-tile8.jpg",
  "cat-tile9.jpg",
  "cat-tile10.jpg",
  "cat-tile11.jpg",
  "cat-tile12.jpg",
  "cat-tile13.jpg",
  "cat-tile14.jpg",
  "cat-tile15.jpg",
];

function pickRandomFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const breeds = {
  Persian: 1,
  Siamese: 2,
  Burese: 3,
  Scottish: 4,
  ShortHair: 5,
};

const getAllCats = async (req, res) => {
  const cats = await Cat.findAll({
    include: {
      model: Breed,
      attributes: ["name"],
    },
  });
  res.status(200).json(cats);
};

const getAllAdoptedCats = async (req, res) => {
  const adoptedCats = await Cat.findAll({
    include: {
      model: Breed,
      attributes: ["name"],
    },
    where: {
      is_adopted: true,
    },
  });
  res.status(200).json(adoptedCats);
};

const getBreedById = async (req, res) => {
  const breed_name = req.params.id;
  const breed_id = breeds[breed_name];
  const cats = await Cat.findAll({
    where: {
      breed_id,
    },
    include: {
      model: Breed,
      attributes: ["name"],
    },
  });
  res.status(200).json(cats);
};

const getCatById = async (req, res) => {
  try {
    const cat = await Cat.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Breed,
        attributes: ["name"],
      },
    });
    return res.json(cat);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const updateCatStatus = async (req, res) => {
  try {
    const cat = await Cat.findByPk(req.params.id);
    const adoptedStatus = cat.is_adopted;
    const updatedCat = await Cat.update(
      { is_adopted: !adoptedStatus },
      {
        where: { id: req.params.id },
        returning: true, // Return the updated cat object
      }
    );

    if (updatedCat[0] === 0) {
      // Cat with the given ID does not exist
      throw new Error("Cat not found");
    }

    const updatedCatObject = updatedCat[1][0]; // Get the updated cat object

    console.log("Updated Cat:", updatedCatObject);
    return res.json(updatedCatObject);
  } catch (error) {
    console.error("Error updating cat:", error);
  }
};

const createCat = async (req, res) => {
  try {
    const image = pickRandomFromArray(catImages);
    let catData = { ...req.body };
    catData["image"] = image;
    catData["is_adopted"] = false;
    const newCat = await Cat.create(catData);
    return res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
    console.error("Error creating cat:", error);
  }
};

const deleteCat = async (req, res) => {
  try {
    await Cat.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
    console.error("Error deleting cat:", error);
  }
};

module.exports = {
  getAllCats,
  getAllAdoptedCats,
  getBreedById,
  getCatById,
  createCat,
  updateCatStatus,
  deleteCat,
};
