const {User} = require('../models/index');

class UserRepository {

    async createUser(data) {
        try {
            const userData = await User.create(data);
            return userData;
        } catch (error) {
            console.error('Error in Repository Layer:', error);
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            const deletedCount = await User.destroy({ where: { id: userId } });
            return deletedCount > 0;
        } catch (error) {
            console.error('Error in Repository Layer:', error);
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const userData = await User.findOne({
                where: {
                         mail: email 
                        }
                });
            return userData;
        } catch (error) {
            console.error('Error in Repository Layer:', error);
            throw error;
        }
    }

}

module.exports = UserRepository;