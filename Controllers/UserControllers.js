const User = require('../models/UserSchema.js')
const bcrypt = require("bcryptjs");

const UserControllers={
    register : async (req, res) => {
const {Name,email,password} = req.body

if (!Name || !email || !password)
{res.status(400).json({message:'Fll all the Blanks Please'})}
else{
const Salt = bcrypt.genSaltSync(10)
const hashedPassword = await bcrypt.hash(password,Salt)

if (await User.findOne({email}))
{
res.status(401).json({message:'email is already registered'})
}

else{
const user= await User.create({Name:Name,email:email,password:hashedPassword})
if (user) {
    res
      .status(200)
      .json({
        _id: user._id,
        Name: user.Name,
        email: user.email,
        role:user.role,
        
      });
  }}}
},
Login : async(req,res)=>{

    const {email,password} = req.body

    if ( !email || !password)
    res.status(400).json('Invalid')
    
    const user =await User.findOne({email})
    if(!user)
    res.status(400).json({ message :"incorrect email or wrong password" })
    if(user)
    {
        const isMatch = await bcrypt.compare(password,user.password)
        if(isMatch)
        {
            res.status(200).json({ id:user._id,
               Name:user.Name,
               email:user.email,
               role:user.role })
        }
        else res.status(400).json({ message :"incorrect email or wrong password" }) 
    }
}


}



module.exports = UserControllers 









