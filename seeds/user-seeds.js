const { User } = require('../models');

const userData = [{
    username: 'Tony Stark',
    password: 'Stark'

},
{
    username: 'John Titor',
    password: 'Titor'
},
{
    username: 'Spider Man',
    password: 'Man'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;