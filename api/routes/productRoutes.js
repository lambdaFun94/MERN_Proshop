import express from "express";
import asyncHandler from "express-async-handler";

import Product from "../models/Product.js";

const router = express.Router();

// @desc    Fetch All Products
// @route   GET  /api/products
// @access  Public
router.route("/").get(
  asyncHandler(async (req, res, next) => {
    const products = await Product.find({});
    res
      .status(200)
      .json({ success: true, count: products.length, data: products });
  })
);

// @desc    Fetch All Products
// @route   GET  /api/products/:id
// @access  Public
router.route("/:id").get(
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (product) {
      res
        .status(200)
        .json({ success: true, count: product.length, data: product });
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
