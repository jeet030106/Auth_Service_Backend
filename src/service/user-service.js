const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_KEY } = require('../config/serverConfig');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data) {
        try {
            const userData = await this.userRepository.createUser(data);
            return userData;
        } catch (error) {
            console.error('Error in Service Layer:', error);
            throw error;
        }
    }

    async signIn(email, plainPassword){
        const user = await this.userRepository.getUserByEmail(email);

        const passwordMatch = this.checkPassword(
            plainPassword,
            user.password
        );

        if(!passwordMatch){
            throw new Error('Invalid credentials');
        }

        const newJWT= this.createToken({id: user.id, mail: user.mail});

        return newJWT;
    }

    async deleteUser(userId) {
        try {
            const isDeleted = await this.userRepository.deleteUser(userId);
            return isDeleted;
        } catch (error) {
            console.error('Error in Service Layer:', error);
            throw error;
        }
    }

    createToken(user) {
        try{
            const response = jwt.sign(user, JWT_KEY, { expiresIn: '1h' });
            return response;
        } catch (error) {
            console.error('Error in Service Layer:', error);
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.error('Error in Service Layer:', error);
            throw error;
        }
    }


    checkPassword(plainPassword, encryptedPassword) {
        const isMatch = bcrypt.compareSync(plainPassword, encryptedPassword);
        return isMatch;
    }
    
}

module.exports = UserService;