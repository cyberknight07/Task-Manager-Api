import User from "../model/User.js"

export const signup = async (req, res) => {

    try{
        const user = new User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        await user.save();
        res.status(200).json({
            success: true,
            message: "User created successfully.",
            data: user
    })
    } catch(e) {
        res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: e.message
    })  
    }


}

export const signin = async  (req, res) => {
    try {

        const {email, password} = req.body;

        const existingUser = User.find(email);
        if(!existingUser){
            res.status(404).json({message: "User does not exist"})
        }

        if(password !== existingUser.password){
            res.status(201).json({message: "Incorrect password"})
        }

        
        res.status(200).json({
            message: "User sign in successfully",
            data: existingUser
        })
        
    } catch (error) {
        res.status(500).json({message: "Internal Server error", error: error.message});
    }
}

export const getUserById = async (req, res) => {
    try{

        const user = User.findById(req.params.id);

        if(!user) {
            throw new Error("User with id do not exist.");
        }

        res.status(200).json({
            message:    `User found with id ${req.params.id}`,
            data: user
        })

    } catch (error) {
        res.status(500).json({message: "Internal Server error", error: error.message});
    }
}


export const deleteUserById = async (req, res) => {
    try{

        const user = User.findByIdAndDelete(req.params.id);

        if(!user) {
            throw new Error("User with id do not exist.");
        }

        res.status(200).json({
            message:    `User deleted with id ${req.params.id}`,
            data: user
        })

    } catch (error) {
        res.status(500).json({message: "Internal Server error", error: error.message});
    }
}

export const updateUserDetails = async(req, res) => {
    try{

        const user = User.findById(req.params.id);

        if(!user) {
           res.status(404).json({message: "User does not exist"})
        }
        const updatedUser = new User({...user})
        if(req.body.name !== user.name){
            updatedUser.name = req.body.name;
        } 
        else if( req.body.password !== user.password) {
            updatedUser.password = req.body.password;
        } 
        else if(req.body.role !== user.role) {
            updatedUser.role = req.body.role;
        } 
        else if( req.body.email !== user.email){
            updatedUser.email = req.body.email;
        }

        // user  = updatedUser;
        // await user.save();

        await User.findByIdAndUpdate(req.params.id, updatedUser);

        res.status(200).json({message: "User Details updated successfully."})


    } catch(e) {
        res.status(500).json({message: "Internal Server Error", error: e.message})

    }
}