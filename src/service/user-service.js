const UserRepository = require('../repository/user-repository');

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

    async deleteUser(userId) {
        try {
            const isDeleted = await this.userRepository.deleteUser(userId);
            return isDeleted;
        } catch (error) {
            console.error('Error in Service Layer:', error);
            throw error;
        }
    }
}

module.exports = UserService;