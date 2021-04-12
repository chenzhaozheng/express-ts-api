/*
 * @Author: chenzhaozheng
 * @Date: 2019-09-18 14:36:00
 * @LastEditors: chenzhaozheng
 * @LastEditTime: 2019-12-16 17:33:42
 * @Description: file content
 */
import Model from '../../../lib/model';
const Models = Model.initDb('postgres');

const User = (sequelize: any, DataTypes: any) => {
    const User = (table: string = 'users') => {
        const User = sequelize.define(table, {
            avatarurl: DataTypes.STRING,
            country_count: DataTypes.INTEGER,
            city_count: DataTypes.INTEGER,
            step_count: DataTypes.INTEGER,
            defeat_scale: DataTypes.STRING,
            nickname: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
            datet: DataTypes.STRING,
            muid: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        }, {
        });

        return User;
    };

    return User;
};

export default User(Models.sequelize, Models.DataTypes);

