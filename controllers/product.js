
const Product = require('../models/Product')

exports.createProduct = async (req, res) => {
    const newProduct = new Product(req.body);

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
    const newAdvertisement = new Advertisement(req.body);
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