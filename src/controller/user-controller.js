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

module.exports = {
    createUser
}