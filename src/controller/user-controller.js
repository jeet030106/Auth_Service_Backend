const UserService = require('../service/user-service');

const userService = new UserService();

const createUser = async (req, res) => {
    try {
        const userData = await userService.createUser(req.body);
        res.status(201).json({
            data:userData,
            message: 'User created successfully',
            error:{},
            success: true

        });
    } catch (error) {
        console.error('Error in Controller Layer:', error);
        res.status(500).json({ 
            data:null,
            message: 'Error creating user',
            error:{},
            success: false
        });
    }
}

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(req.body.mail, req.body.password);
        return res.status(200).json({
            data: response,
            message: 'Signed In Successfully',
            error: {},
            success: true
        });
    } catch (error) {
        console.error('Error in Controller Layer:', error);
        res.status(500).json({ 
            data:null,
            message: 'Error signing in user',
            error:{},
            success: false
        });
    }
}

module.exports = {
    createUser,
    signIn
};