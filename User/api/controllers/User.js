const User = require('../models/User');
const Product = require('../models/Product');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try{
        const {name, email, password, confirmPassword} = req.body;

        if(!name || !email || !password || !confirmPassword){
            return res.status(401).json({
                success: false,
                message: "Fill All the Details"
            })
        }

        if(password!==confirmPassword){
            return res.status(401).json({
                success: false,
                message: "Password must be Same"
            })
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(401).json({
                success: false,
                message: "User Already Exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await User.create({name, email, password: hashedPassword});
        return res.status(200).json({
            success: true,
            message: "User Registered Successfully",
        })

    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                success: false,
                message: "Please Fill All the Details"
            })
        }

        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(401).json({
                success: false,
                message: "User Doesn't Exist, Please Register"
            })
        }

        const hashedPassword = await bcrypt.compare(password, existingUser.password);
        if(!hashedPassword){
            return res.status(401).json({
                success: false,
                message: "Invalid Email Id or Password"
            })
        }
        else{
            return res.status(200).json({
                success: true,
                message: "Login Successful",
                name: existingUser.name
            })
        }
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


exports.getProducts = async (req, res) => {
    try{
        const product = await Product.find({});
        return res.status(200).json({
            success: true,
            message: "Products Fetched",
            data: product
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

exports.getProduct = async (req, res) => {
    try{
        const {id} = req.body;

        const product = await Product.findOne({_id: id});
        return res.status(200).json({
            success: true,
            message: "Products Fetched",
            data: product
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}