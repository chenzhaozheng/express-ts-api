module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('Users', [{
            avatarurl: 'http://test.com',
            country_count: 1,
            city_count: 1,
            step_count: 1,
            defeat_scale: 1,
            nickname: 'nickname',
            user_id: 1,
            datet: '2020-12-12',
            muid: 'a1'
        }], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
