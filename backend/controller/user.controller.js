import prisma from "../db/db.config.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { generateUserTokenAndSetCookie } from "../lib/utils/generateUserToken.js";

export const signup = async(req,res)=>{
try {
const {fname,mname,lname,email,password} = req.body;

if(!fname || !lname || !email || !password){
  res.status(400).json({message:"Fill All The Fields"})
}

const existingUser = await prisma.user.findUnique({
  where:{
    email: email
  }
})

if(existingUser){
  res.status(400).json({message:"User Already Exists"});
}

if(password.length < 6){
  return res.status(400).json({message:"Password must be atleast 6 digit"})
}

const saltRounds = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,saltRounds);

const newUser = await prisma.user.create({
  data:{
    fname,
    mname,
    lname,
    email,
    password: hashedPassword
  }
})

if(newUser){
  generateUserTokenAndSetCookie(newUser.id,res);
  return res.status(201).json({
    id:newUser.id,
    fname:newUser.fname,
    mname:newUser.mname,
    lname:newUser.lname,
    email:newUser.email,
  })
}else{
  res.status(400).json({error:"Invalid Admin Data"})
 }

} catch (error) {
  console.log("Error in signup", error);
    res.status(500).json({error: "Internal server error"});
}
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    const user = await prisma.user.findUnique({
      where:{
        email
      }
    })

    if (!user) {
      return res.status(400).json({ error: "Invalid Email or Password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Password" });
    }

    generateUserTokenAndSetCookie(user.id, res);
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '15d'
    });
    
    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token,
    });

  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = async (req,res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({message:"Logged Out Successfully"})
  } catch (error) {
    console.log("Error in logout", error);
    res.status(500).json({error: "Internal server error"});
  }
}

