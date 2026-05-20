const {User} = require('../models/index');
const {Role} = require('../models/index');

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

    async isAdmin(userId) {
        try{
            const user = await User.findByPk(userId);
            if (!user) {
                throw new Error('User not found');
}
            const roles = await Role.findOne({
                where:{
                    name: 'admin'
                }
            });
            return user.hasRole(roles);
        } catch (error) {
            if(error.name=='SequelizeValidationError'){
                throw new Error(error.errors[0].message);
            }
            console.error('Error in Repository Layer:', error);
            throw error;
        }
    }

}

module.exports = UserRepository;