'use strict';

const fs = require('fs');
// console.log(fs)
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs    
  .readdirSync(__dirname)           
  // WOW 'fs' like readFilesync // console.log(fs)      can see javascript everywhere [if statements, object.keys, filter, dependencyImports] and missed this fs part. 
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;      // {exporting functions: darn difficult} as far as i know you can only do one module.exports per page too? Either way models are a very single-responsibility thing like functions.
// fair page to mention too i see why people offer opinions on leaving bootcamp and not being especially proficient. While you can leave bootcamp and be darn good, Doing CLI migrations + simple queries you can almost build an entire app and not even read the documentation really.