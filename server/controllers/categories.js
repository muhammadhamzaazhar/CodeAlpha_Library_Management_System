import BookCategory from "../models/BookCategory.js";

export const allCategories = async (req, res) => {
  try {
    const categories = await BookCategory.find({});
    if (categories.length === 0) {
      return res.status(404).json({ message: "No categories found." });
    }

    res.status(200).json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err.message);

    return res.status(500).json({
      message:
        "An error occurred while retrieving categories. Please try again later.",
      error: err.message,
    });
  }
};

export const addCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    if (!categoryName) {
      return res.status(400).json({ message: "Category name is required." });
    }

    const existingCategory = await BookCategory.findOne({ categoryName });
    if (existingCategory) {
      return res.status(409).json({ message: "Category already exists." });
    }

    const newCategory = new BookCategory({ categoryName });
    const category = await newCategory.save();

    res.status(201).json({
      message: "Category added successfully.",
      category,
    });
  } catch (err) {
    console.error("Error adding category:", err.message);

    return res.status(500).json({
      message:
        "An error occurred while adding the category. Please try again later.",
      error: err.message,
    });
  }
};
