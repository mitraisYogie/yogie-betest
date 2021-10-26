// import models
import User from "../models/User.js";
 
// function get All Products
export const getUserData = async (req, res) => {
    try {
        const products = await User.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     
}
 
// function get single Product
export const getUserDataById = async (req, res) => {
    try {
        const product = await User.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
     
}
 
// function Create Product
export const createUserData = async (req, res) => {
    const product = new User(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// function Update Product
export const updateUserData = async (req, res) => {
    const cekId = await User.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedProduct = await User.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// function Delete Product
export const deleteUserData = async (req, res) => {
    const cekId = await User.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedProduct = await User.deleteOne({_id: req.params.id});
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}