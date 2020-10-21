require('dorenv').config();

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: process.env.PSS,
    database: 'smartphone',
    define: {
        timestamps: true,
        underscored: true,
    }
};