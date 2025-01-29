import User from "../models/user.model.js";
import { createToken } from "../utilities/jwt.js";


const register = async( req, res) =>{

    try{
        const  { name , email, password} = req.body
        console.log("check point",req.body)
        const user = await User.create({
            name,
            email,
            password
        }
        )
      
        return res.status(201).send({message:"Account has been created"})


    } catch(error){
            return res.status(500).send({message:"error resgistering", error: error.message})

    }
}

const login = async( req,res)=>{
    try{
        const { email, password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).send({message: " invalid credential"})
        }
        const matchPassword = await user.matchPassword(password)
        if(!matchPassword){
         res.status(400).send({message:"invalid credential"})
        }
        const token = createToken({id: user._id})
        res.cookie("authToken", token, {
            path: "/", // Cookie is available site-wide
            expires: new Date(Date.now() + 36000000), // Corrected Date syntax
            secure: true, // Ensures the cookie is sent over HTTPS only
            httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
            sameSite: "None" // Corrected property name
        });
        console.log("check point1 ")
     return res.status(200).send({message: "login successfully",   email: user.email, token,})


    }catch(error){
        return res.status(500).send({message: "error in the login user", error: error.message})
    }
}


//////optional in your project
const logOut = async (req,res) => {
    res.clearCookie("authToken");
    return res.status(200).send({message:"user logOut successfully"})
}

const deleteUser = async(req, res) =>{
try{
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id)
    if(!user){
         return res.status(404).send({message:"User not fond"})
    }
    return res.status(200).send({message:"User delete successfully"})
} catch(error){
    return res.status(200).send({message: "Error  in  deleting the user", error: error.message})
}

}
 export{
    register,
    login,
    logOut,
    deleteUser
 }