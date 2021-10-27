// import models
import User from "../models/User.js";

// function get All users
export const getUserData = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     
}
 
// function get single user
export const getUserDataById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
     
}

export const getUserDataByIdentityNumber = async (req, res) => {
        try {
            // const user = await User.findById(req.params.id);
            const user = await User.find({userId : req.params.userId});
            res.json(user);
        } catch (error) {
            res.status(404).json({message: error.message});
        }

    }
export const getUserDataByAccountNumber = async (req, res) => {
    try {
        const user = await User.find({accountNumber : req.params.accountNum});
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
// function Create user
export const createUserData = async (req, res) => {
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// function Update user
export const updateUserData = async (req, res) => {
    const cekId = await User.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedUser = await User.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// function Delete user
export const deleteUserData = async (req, res) => {
    const cekId = await User.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedUser = await User.deleteOne({_id: req.params.id});
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}