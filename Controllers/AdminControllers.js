const Admin = require('../models/AdminSchema.js')
const bcrypt = require("bcryptjs");


const AdminControllers = {

        Login : async(req,res)=>{
        
            const {email,password} = req.body
        
            if ( !email || !password)
            res.status(400).json('Invalid')
            
            const admin =await Admin.findOne({email})
            if(!admin)
            res.status(400).json({ message :"incorrect email or wrong password" })
            if(admin)
            {
                const isMatch = await bcrypt.compare(password,admin.password)
                
                if(isMatch ){
                                                    
                    res.status(200).json({ id:admin._id,
                        username:admin.username,
                       email:admin.email})
                           
                
            }
                else res.status(400).json({ message :"incorrect email or wrong password" }) 
            }
        } 
        
}

module.exports =  AdminControllers
