'use strict';
const bcrypt = require('bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: {
     type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 99],
          msg: 'Name must be between 1 and 99 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {            // type in me@whoops.oops and see the isEmail flag it away
          msg: 'Invalid Email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 99],
          msg: 'Password must be between 8 and 99 character'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });

  user.addHook('beforeCreate', function(pendingUser) {
    // Bcrypt hashes a password
    let hash = bcrypt.hashSync(pendingUser.password, 12)
    // Set password to the hash
    pendingUser.password = hash
    console.log(pendingUser)
})

user.prototype.validPassword = function(passwordTyped) {
    // Compare what was typed with what is stored
    let correctPassword = bcrypt.compareSync(passwordTyped, this.password)
    console.log('Inside of validPassword', correctPassword)
    // Return true or false based on match
    return correctPassword
}

// Remove password before it gets serialized
user.prototype.toJSON = function() {
    let userData = this.get()
    // Deletes password from request but not from database
    delete userData.password
    console.log(userData)
    // Return userData without the password typed in
    return userData
}
  return user;
};

// models.user.hasMany(models.pet)   
// models.user.hasMany(models.pokemon)
// * models.user.hasMany(models.pokemon) // really trying to find a use case for join tables right here. perhaps on a react.JS app. proof of concept.   
// db.user.findOne({
//   where: { firstName: 'spongebob'}
// }).then((sb) => {
//   console.log(sb)
//   console.log(sb.get().last)
//   sb.createPokemon({
//       name: 'sandy cheeks'
//   }).then( (sandy) => {
//       console.log(sandy)
//       console.log(sandy.get().name)
//   })
// })






// 
// user.init({              random excerpt while considering joins [though I think they'll mess the flow up of pokemon.types on the /pokemon.ejs page:]
//   firstName: DataTypes.STRING,      //now more clear why {user:'name'}='firstName  .. not user.name
// pet.init({ 
//   name: DataTypes.STRING,      pet.name is made not to have any association/attribute collision with .belongsTo(user)

// toy.init({
//   type: DataTypes.STRING,    // was instinct-ing towards toy.name over and over and realized it makes total sense for all 3: {user:name}{toy:name}{pet:name} to have a similar row and its purposely des
// * [11][Error: Naming collision between attribute 'name' and association 'name'] this line of code is the reason why they are abstractly named to avoid collisions/association hiccups. It's a very minimum viability muscle memory thing to get some baby steps in [all opinion] w/o being crass this is in line with the fact that you can be very good post-bootcamp but those who say you may or may not be a very strong developer could have merit in their words.


// 
// class User extends Model {}
// User.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     age: DataTypes.INTEGER,
//     email: DataTypes.STRING
// }, { sequelize, modelName: 'user' });

// (async () => {                                   // from the https://devdocs.io/sequelize/ example. I did not know you can throw async like that and have it run. This seems even more anonymous than a regular anonymous function because we're not invoking it afterwards. OOPS! this is called an immediately invoked function
//   await sequelize.sync();
//   const guy = await User.create({
//     firstName: 'good',
//     lastName: 'guy',
//     age: 75,
//     email: 'dontuseyourownemail@iusedmyownemail.com'
//   });
//   console.log(guy.toJSON());         // check the .toJSON.. that and pushing outward from this tableDeclaration scope into the realm of normal javascript: [arrays] even a map object
//   userObjectHolder.push(guy)         (sequelizeObjects are cluttery so use row/tableData.toJSON() which, by the way, automatically guarantees the instances to be JSON.stringify-ed well). 
// })();

// setTimeout( () => console.log('hey here you go'), "2000")
// setTimeout( () => console.log(userObjectHolder), "3000")       // would be cool to make an app using the .js version of declaring tables.

// db.user.findOne({ where: { age: 44 }
// }).then(brucie => {
//     console.log(brucie)
//     console.log(brucie.firstName)
//     console.log(brucie.lastName)
//     for (info in brucie) {            // not iterable through for of loop. update:  its for in. && yeah they are iterable. 
//         // console.log(`${info}`)
//         console.log(`${brucie[info]}`)
//     }
//     console.log(Object.keys(brucie))
//     // console.log(Object.values(brucie))
// })
// function() { probably wont be doing any                .for in looping through keys 
//   var chainAll = this.__chain__;
//   if (chain || chainAll) {
//     var result = object(this.__wrapped__),
//         actions = result.__actions__ = copyArray(this.__actions__);

//     actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
//     result.__chain__ = chainAll;
//     return result;
//   }
//   return func.apply(object, arrayPush([this.value()], arguments));
// }

// db.user.findAll({
//   where: { id: `${!1}` }  !sqlize.do($(this))
// }).then(user => {
//   console.log(user)
// })

// let test = () => new Promise((resolve, reject) => {
//   throw new Error('Random Error'); // same as "reject(new Error('Random Error'));"
// });

// test();

// * db.user.findOrCreate({      can not use findOrCreate with the table.createTable/createPet>
//     where: {
//          firstName: 'whatAbout', 
//          lastName: "Bob",
//          age: 51,
//          email: 'imOnVacation@camelCase.com'
// db.user.findOne({ where: { lastName: 'bob'}})
// .then( (babySteps) => {
//         babySteps.createPet({
//             name: 'fluffy',
//             species: "hairy dog",
//             description: 'friends dog'
//         }).then((newDog) => {
//             console.log(newDog)
//             console.log(newDog.get().description)
//             console.log(newDog.get().species)
//         })
//     })
