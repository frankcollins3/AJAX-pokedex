'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pokemon.init({
    pokeid: {
    type:  DataTypes.INTEGER,
      validate: {                   // objectKey.on('hover',()=>{parameterMessageFromSettings.show() *press[escape]*-> parameterMsg.hide()    })
        isInt: true,              // checks for valid strings. This does not affect our constraint because they'll all be valid strings / ints 100%. Another one i was mistaken on assuming that: isInt: false will make any int sent to the post route (mistakingly thinking any int sent down the pipe would fail and fall under the constraint, preventing the db save)
        max: 151,             // nice, just like args[1,11] This works. This (maxKey:) is essentially the [ ,11] #11 in our args arrayOfArgs    (max: 2 means #3 venusaur fails and bulbasaur/ivysaur pass #1 - #2 ids under the max: constraint.x
        min: 1,
        notEmpty: true, // if you look too: don't allow empty strings: whether true or false are going to not interrupt our findOrCreate({ command.})
        // isAlphanumeric: false,      // i now understand why this is doing nothing for any normal strings that don't have a ! or a _ or .  this won't constraint any db.pokemon.Create as long as we have non-special-characters strings which we do. 'charmander' 'bulbasaur' etc. Took like 20 minutes to understand that tbh
      },
      // unique: true
      // allowNull: false,
    },

    // *****************
    name: {
      type: DataTypes.STRING,   
      validate: {
        // isNumeric: true,
        len: {
          args: [1, 11],          // validate: length: arguments/range[from 1 character to 99 characters]    [5, 99] i.e. will not psqlCreate mew but will work to store mewtwo.
          // isIn: [['fat', 'ass']]
        }
      }
    },

    // *****************

    type: {
      type: DataTypes.STRING,
      validate: {
        // isNumeric: true,         // this only allows numeric values so this prevents our db.pokemon.findOrCreate({ because it satisfies the constraint which could be a behind-the-scenes conditional.})
        len: {
          args: [1, 11],          // for example [5, 20]: b/w 5-20 characters: water bypasses this constraint w/ 6 characters. fire fails on no psql-store .charLength(4)
          notNull: true,
          msg: 'nice dataType type'
        }
      }
      
      
    }
    // unique: true         // try putting pokemon in: SequelizeUniqueConstraintError.        unique: true        is NO GOOD for what we're doing. One of our functions: (pokemon.js route checking for duplicate keys in psql pokemon model) Is doing what this line of code does. I suppose the Most refactored version is more ideal but we learned more with a different way of using the tools. feels better to have spent 10am-11pm hrs on the workAround-function.
  }, {
    sequelize,
    modelName: 'pokemon',
  });
  return pokemon;
};



// db.pet.findOrCreate({
//     where: { name: 'scruffy', species: 'chihuahua', description: 'black, loves to be picked up' }
// }).then(newDog => console.log(newDog.get()))   
      // this .then does not work with findOrCreate     

// db.pet.create({
//   name: 'king',
//   species: 'doberman',
//   description: 'very big'
// }).then(bigDog => console.log(bigDog.get()))
    // but this .then does work with db.