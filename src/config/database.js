require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    host: process.env.HST,
    username: process.env.USR,
    password: process.env.PSS,
    database: process.env.DTBS,
    define: {
        timestamps: true,
        underscored: true,
    }
};