// import models
import User from "../models/User.js";
import redis from 'redis';

const client = redis.createClient({
    host : "redis-12542.c292.ap-southeast-1-1.ec2.cloud.redislabs.com",
    port : 12542,
    password : 'wGkCHDObZo6oyKGDGTE7h6znvyFW0F1a'
})

client.on("error", (error) => {
    console.error(error);
});

// function get All users
export const getUserData = async (req, res) => {
    try {
        client.get("all_user", async (err, data) => {
            if(data){
                return res.status(200).json(JSON.parse(data))
            } else {
                const users = await User.find();
                client.setex("all_user", 1800, JSON.stringify(users));
                return res.status(200).json(users);
            }
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     
}
 
// function get single user
export const getUserDataById = async (req, res) => {
    try {
        client.get(req.params.id, async (err, data) => {
            if(data){
                return res.status(200).json(JSON.parse(data))
            } else {
                const user = await User.findById(req.params.id);
                client.setex(req.params.id, 1800, JSON.stringify(user))
                return res.status(200).json(user);
            }
        })
    } catch (error) {
        res.status(404).json({message: error.message});
    }
     
}

export const getUserDataByIdentityNumber = async (req, res) => {
        try {
            client.get(req.params.identityNumber, async (err, data) => {
                if(data){
                    return res.status(200).json(JSON.parse(data));
                } else {
                    const user = await User.find({identityNumber : req.params.identityNumber});
                    client.setex(req.params.identityNumber, 1800, JSON.stringify(user))
                    return res.status(200).json(user);
                }
            });
        } catch (error) {
            res.status(404).json({message: error.message});
        }

    }
export const getUserDataByAccountNumber = async (req, res) => {
    try {
        client.get(req.params.accountNum, async (err, data) => {
            if(data){
                return res.status(200).json(JSON.parse(data));
            } else {
                const user = await User.find({accountNumber : req.params.accountNum});
                client.setex(req.params.accountNum, 1800, JSON.stringify(user));
                return res.status(200).json(user)
            }
        });
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
// function Create user
export const createUserData = async (req, res) => {
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).json({
            message : "success",
            ...savedUser
        });
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

export const updateUserDataByIdentityNumber = async (req, res) => {
    const checkedUser = await User.find({identityNumber : req.params.identityNumber});
    if(!checkedUser) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const updatedUser = await User.updateOne({identityNumber : req.params.identityNumber}, {$set: req.body});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateUserDataByAccountNum = async (req, res) => {
    const checkedUser = await User.find({accountNumber : req.params.accountNum});
    if(!checkedUser) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const updatedUser = await User.updateOne({accountNumber : req.params.accountNum}, {$set: req.body});
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

export const deleteUserDataByIdentityNumber = async (req, res) => {
    const checkedUser = await User.find({identityNumber : req.params.identityNumber});
    if(!checkedUser) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedUser = await User.deleteOne({identityNumber : req.params.identityNumber});
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteUserDataByAccountNum = async (req, res) => {
    const checkedUser = await User.find({accountNumber : parseInt(req.params.accountNum)});
    if(!checkedUser) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedUser = await User.deleteOne({accountNumber : req.params.accountNum});
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}