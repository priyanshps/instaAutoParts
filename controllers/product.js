
const Product = require('../models/Product')
const Advertisement = require('../models/Advertisement')
const Review = require('../models/Review')

exports.createProduct = async (req, res) => {
  const {title, desc, color, price} = req.body
    const newProduct = new Product({
      userId: req.user.id,
      title,
      desc,
      color,
      price
    });
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProduct);
      } catch (err) {
        res.status(500).json(err);
      }
}

exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
}

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json(err);
      }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({userId: req.params.id});
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.createAdvertisement = async (req, res) => {
  const {title, offerDesc, productId} = req.body
    const newAdvertisement = new Advertisement({
      userId: req.user.id,
      title,
      offerDesc,
      productId
    });
    try {
        const savedAdvertisement = await newAdvertisement.save();
        res.status(200).json(savedAdvertisement);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.getAdvertisement = async (req, res) => {
    try {
        const advertisement = await Advertisement.findById(req.params.id);
        res.status(200).json(advertisement);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.getAllAdvertisement = async (req, res) => {
    try {
        const advertisements = await Advertisement.find({userId: req.params.id});
        res.status(200).json(advertisements);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.updateAdvertisement = async (req, res) => {
    try {
        const updatedAdvertisement = await Advertisement.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedAdvertisement);
      } catch (err) {
        res.status(500).json(err);
      }
}

exports.addReview = async (req, res) => {
    const {desc, title} = req.body
    const newReview = new Review({
      userId: req.user.id,
      desc,
      title,
      productId: req.params.id
    });
    try {
        const savedReview = await newReview.save();
        res.status(200).json(savedReview);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.getReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        res.status(200).json(review);
    }catch(err){
        res.status(500).json(err);
    }
}


exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({productId: req.params.id});
        res.status(200).json(reviews);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.deleteReview = async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
        res.status(200).json("Review has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
}

exports.updateReview = async (req, res) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedReview);
      } catch (err) {
        res.status(500).json(err);
      }
}