
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            // id: {
            //     allowNull: false,
            //     autoIncrement: true,
            //     primaryKey: true,
            //     type: Sequelize.INTEGER
            // },
            // first_name: {
            //     type: Sequelize.STRING
            // },
            // last_name: {
            //     type: Sequelize.STRING
            // },
            // bio: {
            //     type: Sequelize.TEXT
            // },
            avatarurl: Sequelize.STRING,
            county_count: Sequelize.INTEGER,
            city_count: Sequelize.INTEGER,
            step_count: Sequelize.INTEGER,
            defeat_scale: Sequelize.STRING,
            nickname: Sequelize.STRING,
            user_id: Sequelize.INTEGER,

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('users');
    }
};
