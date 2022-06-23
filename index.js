// ✧*｡٩(ˊᗜˋ*)و✧*｡  from npm i -json-server     --watch db.json         funfact: [npm i prettier]&&[npm i json-server] each take up 1/2 available localhost: slots
require("dotenv").config(); // console.log(process.env);
const express = require("express"); // import express from 'express'      // nevermind on going into package.json and adding          "type": "modules" / using npm i esm for this.  ReferenceError: require is not defined in ES module scope, you can use import instead
const app = express();
const axios = require("axios"); // require is the CommonJS convention and is also the pattern of importing dependencies of native node
const session = require("express-session");
const flash = require("connect-flash");
const SECRET_SESSION = process.env.SECRET_SESSION
app.use(flash())
const passport = require('./config/ppConfig')
const db = require("./models");
const methodOverride = require("method-override");
// const ejsLayouts = require("express-ejs-layouts"); ended up not going with ejsLayouts because of our background changing around.
let localStorage

if (!localStorage) {          // getting an undefined error makes if(!currentUser)... currentUser looks like it is just a random part of the internet or something. You declare currentUser with req.user     i might be wrong but i'm guessing req.user is an http endpoint. if you might not have known res.locals."currentUser" is a very declared thing, you might walk right into thinking you can work conditionals around localStorage, which is a native-browser-method not a part of node. this comment is one of the last things to be written.
  var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');   // LocalStorage {  _location: '/Users/medium/Desktop/pokedex2/scratch',  // can see scratch mentioned here 
// _metaKeyMap: Map <[Object: null prototype] {}> {}, this cons.log(localStorage) object:key (map) just like the object-occurence algorithm that checks for duplicates.      that code has an array with object as the key. this code: {}> {} like creating a config object.      ... I saw this style of code for the first time on 'npm i prettier' Someone who hasn't seen this could easily see this code and think its just weird localStorage syntax. It is a map! An array that gets turned into an object! 
}





// app.use(flash());

// app.get('/', (req, res) => {
//   req.flash('message', 'This is a message from the "/" endpoint');
//   res.redirect('/contact');
// });

// app.get('/contact', (req, res) => {
// 	res.send(req.flash('message'));
// });
// * I want to: 1) store invisible flash message 2) render the flash message on closePokedex.click(=> .cookieFlashMessage().css('size 150px' bacakground: `url('${/img/cookiePlateIcon.png}')`))        .... also doing this last after the databaseObject occurence check + ajax<form>submit sharedRoute functions.
const port = process.env.PORT || 7777;  // fun fact: the process object is a global object, which can be accessed anywhere without requiring it.

const sessionObject = {
  secret: SECRET_SESSION, // dont forget to use process.env.SECRET_SOMETHING     notSOSecretnow'
  resave: false, // for every request to the server begin a new session.
  saveUninitialized: true, // keeps browser from using empty sessions ... if we haven't changed anything in the session, save another one anyway!
  // cookie: {
  //   name: "chocolate-chip", // domain ---> [cookie.domain] encode --> [cookie.encode] maxAge ----> [cookie.maxAge] understanding more about options objects. First found out about those from the: mutate/inters. Observer
  //   maxAge: 60 * 60 * 24 * 7,
  //   domain: "www.fakeGoogle.com",
  // },
};

app.set('view engine', 'ejs')
app.use(session(sessionObject));      
app.use(passport.initialize())
app.use(passport.session())
// i believe you could do the: $('h1').css().css().css() type syntax and use app.use once. shall check.

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false })); // this allows us to receive form data.
// app.use(express.urlencoded({ extended: true })); // this allows us to receive form data.
// allows you to use layout.ejs as main template for whole site.
// app.use(ejsLayouts); doing this without ejsLayouts
// const serveStatic = require('serve-static') // serve static for optional random favicon of energy card from pokemon.
const path = require("path");
app.use("/", express.static(path.join(__dirname, "public")));

// app.use(serveStatic(path.join(__dirname, 'public2')))
// app.use(express.static('public'))
// app.use(express.static('files'))
  
// jquery init so we can access DOM
var jsdom = require("jsdom");
const { CONNREFUSED } = require("dns");
const { router } = require("json-server");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;
var $ = (jquery = require("jquery")(window));



app.use((req, res, next) => {                               // hm one of last codes I'm writing: through this app i realize a big stumper for a long time (for me and i'd suppose some others) is the confusion of not seeing .css() as an invoked method w/ objectOptions. In the same way: req.flash() is very similar. it seems just like its node syntax after a while, but we are storing flash messages in the request cycle. Kind of easy to forget and to let these words sit. didn't even raelize process was an objecty but when you're importing dependencies what else would they be? Found out while doing req.flash() that even process [for process.env] is a global object.
  // res.locals.fakeflashMsg = "Looks like you could use some pokemon!"
  
  req.flash("newPoke", "Catch Em All!") // originally said "Heres A pokemon!" theme theme theme theme theme
  // req.flash('error', 'i dont mind if we have an error')
  // req.flash('hover', "thats fine by me")
  // req.flash('signinsuccess', 'Welcome! Hover & Discover Around!')
  // Before every route, we attach a user to res.local
  res.locals.alerts = req.flash()
  res.locals.robot = req.flash('robot', 'are you a robot?')   // if this is being a little funny plz press refresh on the /auth/signup page they come up! same with show.ejs page, if the animated:   ".pokeID" && "Press1" string comes up as a big UNDEFINE  gray text: plz press refresh browser and it comes up proper
  res.locals.currentUser = req.user
    res.locals.infoHelp = "press h for help"    // dont tell the user {i: info || h: for help}        // wont do i. S-I sign-in S-O sign-out. can't use I\
    res.locals.fakeCookies = ""; // maybe render this, .css('size', '100px 100px')      // my first flash message had trouble so just sent an empty string to decorate with cookie-suggestive icon
  next()
})



// app.use(function (req, res, next) {     // understanding res.locals a little bit; wondered if you can put a function in here, you would just export/import the function.
//   // Set a flash message by passing the key, followed by the value, to req.flash().
//   // req.flash("info", "Flash is back!");
//   // req.flash("pokemsg", "Looks like you could use some Pokemon!");
//   res.locals.fakefailMsg = "Theres been a problem";
//   res.locals.infoHelp = "press h for help"    // dont tell the user {i: info || h: for help}        // wont do i. S-I sign-in S-O sign-out. can't use I\
//   res.locals.alerts = req.flash()
//   res.locals.currentUser = req.user
//   // res.redirect('/'); // this'll cause an infinite loop: too many redirects. This route is always running every second for all these routes. similar to app.listen how it's always listening.
//   next();
// });


app.get("/", (req, res) => {
  req.flash("pokeInfo", "Catch Em All!")
  req.flash('signinsuccess', 'Welcome! Hover & Discover Around!')
  const userBin = [];


  setTimeout( () => {
    console.log(userBin)
    console.log(userBin.values())
  }, "2000")

  

  let cookieJar = ['chocchip', 'oatraisin', 'redvelv', 'pb']
  let plate = new Array()
  const takeCookie = () => {
    let randomCookie = cookieJar[Math.floor(Math.random() * cookieJar.length)]
    cookieJar.push(randomCookie)
    cookieJar.pop()
    return randomCookie
  }

  
  // localStorage.clear() // this line of code toggles the [ctrl-f x2 res.redirect()=>'/auth/signup'] refresh-redirect behavior. To restart the behavior localStorage needs to be clear.
  // console.log(localStorage)
        const demKeys = () => {  // i need the return statement so we can chain some ifs and not proceed through the return statement if it is satisfied! Kind of crazy to first ever use "return" keyword solely for its way of: stopping all code in the function
          if (localStorage.getItem('cookie1') == null || localStorage.getItem('cookie1') == undefined) {
              // just like arr.truncate(0, arr.len)   we are only using localStorage because it allows us to create the scope of (browser refresh). browserRefresh is the ultimate arrayBucket truncate 
              console.log('#0!!!!')
              console.log(`before length: ${localStorage.length}`)
              localStorage.setItem('cookie1', takeCookie)   
              console.log(`after length: ${localStorage.length}`)
              return //  (!return.value) -> never needed the [return] keyword for anything besides returning a value. 
                                            // here we dont need to return anything since our conditionals revolve around localStorage. We do need the return because we dont want our second if statement, (based on a second .setItem('key')) to be trippd up by first block of conditional code: ('cookie1' == undefined) and our second to be included in our first.
              // [localStorage].keys.length and localStorage.length are at a (0 / 1 value respective gap) When you add a key... now your  .keys.length = 1 and .length = 1 with the new key. 
          }
          if (localStorage.getItem('cookie1') !== null) {
            console.log('#1!!!!')
            console.log(`before length: ${localStorage.length}`)
            localStorage.setItem('cookie2', takeCookie)   
            console.log(`after length: ${localStorage.length}`)
            if (localStorage.getItem('lock') == null || localStorage.getItem('lock') == undefined) {  
              localStorage.setItem('lock', 'shut')
              res.redirect('/auth/signup')
            }
          }
        }
        demKeys()

          // wow you dont even need to do a third click but doing a third check makes the conditional difficult to create. It's a puzzle to find a key that isCheckable that doesn't trip the second statement up. 
          // if (localStorage.getItem('cookie1') !== null && localStorage.getItem('cookie2')) {   // if you dont .getItem('cookie1') != null this'll trip up first with the first refresh with nothing in localStorage.
          //   console.log('#2!!!!')
          //   console.log(`before length: ${localStorage.length}`)
          //   // localStorage.setItem('cookie2', takeCookie)   
          //   console.log(`after length: ${localStorage.length}`)
          //   localStorage.setItem('lock', 'shut')
          //       res.redirect('/auth/signup')
          //   return
          // }
    // res.localStorage.setItem('1', `${req.sessionID}`) feel silly trying localStorage if there's no alerts in node js. was going to give a localStorage.setItem('${intIncrement++}', req.session.id)
      
  let luckynumber777 = 333;
  // alert(location) no alert in node? interesting. Was going to use location = window.location to slice up the port/origin/href from browser location.
  axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${luckynumber777}/`)
    .then((response) => {
      // this is the way i had the api doing the limit before.       //peek the limit :)slice is working.  2)  !! that's fun. set limit='1,000,000' and we broke it. hopefully only on our side.
      // axios.get('http://pokeapi.co/api/v2/pokemon').then(response => {
      let pokemon = response.data.results; // console.log(response.data.results)
      // console.log('req.flash info and pokemsg')
      // console.log(req.flash('info'))
      // console.log(req.flash('pokemsg'))

      // db.pokemon.findAll().then((dbResponse) => {
      //   // console.log('response')
      //   // console.log(dbResponse)
      // });
      // if (!db.pokemon.findAll()) {
      //   // same as if (db.pokemon.findALl().length > 0)
      //   // console.log('if we dont have shiiiit')
      // } else {
      //   // console.log('nope we do')
      // }
      
      if ('.alert-sign-in-success') {
        console.log('yeah weve got the hover tag')
      }
      // get an array, push an object into it, and have either res.locals.currentUser or {currentUser: res.locals.currentUser || 'noUser'} // if you can't do it that way we can store the returned value in a function to put into the array/object. We want to send a 
      if (res.locals.currentUser) {
        console.log(res.locals.currentUser) // goal is to get the [currentUser]objectData(k && v) up from out of this functionalscope with an array.push     ... ultimate goal is to have a userObject with either user data or an arbitrary string to defeat any possible undefined errors from having sent an empty arrayMadeWithUserobject into res.render()
        const newUser = [res.locals.currentUser]    // this is so not needed.     // console.log('res.locals.currentUser.name') // this object endpoint works but it doesn't work for map.
        // can guess when this solution came [{near: start}   or {near: end}] into the app.
        const hideComments = () => {
          console.info('hey')
          // array.prototype.map[map() as a method] vs new Map object({}) very big difference.
        // const userObject2 = newUser.map(({ key, value}) => ({     //[did this userData functionality last] oops nevermind all of that.. it has to be an array from the start. Just bookmarking thought process a little surprised you can't do res.locals.currentUser.map  || res.locals.currentUser.user.dataValues.map... hmmmm: just like splitting a post-route-handler between .ajax({'GET'.data()}) && <form>submit</form>   i am not seeing too many questions about res.locals.currentUser.map   [uninformed] but seems map could be a useful tool for user data.
        // const userObject2 = newUser.map(({ key, value}) => ({     //[did this userData functionality last] oops nevermind all of that.. it has to be an array from the start. Just bookmarking thought process a little surprised you can't do res.locals.currentUser.map  || res.locals.currentUser.user.dataValues.map... hmmmm: just like splitting a post-route-handler between .ajax({'GET'.data()}) && <form>submit</form>   i am not seeing too many questions about res.locals.currentUser.map   [uninformed] but seems map could be a useful tool for user data.
          // email: res.locals.currentUser.email  \n || <br/>    name: res.locals.currentUser.name,   }))
        // res.locals.currentUser.user.dataValues.map
        // console.log([{userObject2}]) // thx node localStorage for this being familiar. ([{userObject2}]) ([{userObject2.name}])
        // console.log(userObject2.get('name'))    // this feels way more in line with data, "fullstack", actual API work.   1) first tried accessing 'name' without a string.
        // console.log([userObject2].name) // error treating the mapped object like userObject2.name regular endpoints  
          // dataValues: {          obv doing this very last.
          //   id: 30,
          //   name: 'Telekinetic1',
          //   email: 'fwc3rd@yahoo.com',  
          //   password: '$2b$12$Ew0XQgppnryElAIO.DEn5.stsn36Ncg6Uexc87gIvDo3bE1WLL2.u',
          //   createdAt: 2022-06-16T05:24:28.370Z,
          //   updatedAt: 2022-06-16T05:24:28.370Z
          // },
        }
        const userObject = new Map([
            ['name', res.locals.currentUser.name],
            ['email', res.locals.currentUser.email]
        ])
        console.log(userObject)
        let name = userObject.get('name')
        console.log('name')
        console.log(name)
        res.render("index", {
          alerts: res.locals.alerts,
          pokemon: pokemon.slice(0, 151),
          // success: `${successValue}`, 
          failure: res.locals.fakefailMsg,
          cookies: res.locals.fakeCookies,
          infoHelp: res.locals.infoHelp,
          localStorage: [localStorage],    //  last bit of code (locStor+browser/redirect): This code seems nothing/verySmall but it feels very programmatic 
          // currentUser: userObject
        }); // these are pulled from app.use up there



      } else {
        const userObject = new Map([
          ['name', ''],   // emptyString
          ['email', 'there is no email']
        ])
        console.log("no current user")
        let useer = { user: 'r'}
        console.log(useer)
        console.log(useer.user)
        // let successValue = res.locals.fakeflashMsg;
        res.render("index", {
          alerts: res.locals.alerts,
          pokemon: pokemon.slice(0, 151),
          failure: res.locals.fakefailMsg,
          cookies: res.locals.fakeCookies,
          infoHelp: res.locals.infoHelp,
          localStorage: [localStorage],    //  last bit of code (locStor+browser/redirect): This code seems nothing/verySmall but it feels very programmatic 
          currentUser: userObject
        }); // these are pulled from app.use up there
        // res.render('index', { pokemon: pokemon, success: res.locals.fakeflashMsg, failure: res.locals.fakefailMsg}) // these are pulled from app.use up there
      }
      });
  });







    
    
// res.render("index", { pokemon: pokemon.slice(0, 151)})

// Imports all routes from the pokemon routes file
app.use("/auth", require('./routes/auth'))
app.use("/pokemon", require("./routes/pokemon"))
// app.use('/', routes()) // can also set page up this way and call routes() instead of just referencing them by fileUrlStr




// const server = app.listen(process.env.PORT, () => {
//   console.log(`Can Smell the server on: ${process.env.PORT}`);
//   // rowdyResults.print()
// });

// const server = app.listen(process.env.PORT, ()=> console.log(`server wont stop yelling on port #: ${server.address().port || process.env.PORT}`))
const server = app.listen(process.env.PORT, ()=> console.log(`server wont stop yelling on port #: ${server.address().port || process.env.PORT}`)) 
server.on('listening', () => console.log('shhhhhhh!'))

// server.on('listening', () => {
//   log.info(
//     `Hi there! I'm listening on port ${server.address().port} in ${app.get('env')} mode.`,
//   );
// });

module.exports = server;



// export default app; for res.locals?

  // * the same reason i didn't see that this 1 line of code wouldn't have multiple optects after ('index',)
  
// app.get('/api', async (req, res) => {            just promises / res.write() res.end()
//   let nameBucket = new Array()   // always using arrays to defeat function/ajax scope
//   let randomBucket = []
//   const antiDryBucket = [];
//   let url = `https://pokeapi.co/api/v2/pokemon/`
//   const findPokemon = setTimeout(async () => {
//     let response = await axios.get(url) // ouch was moving a little quick and getting stuck on forgetting the await
//     let data = response.data.results
//     data.forEach( (d, phil) => {     // nice that you can abbreviate index as i, I'm guessing the 2nd argument would be the index anyway and you could name it what you want.
//         console.log(d)
//         console.log('d')
//         if (nameBucket) {nameBucket.push(d.name) || nameBucket.push('gotta do something')}
//         console.log("findPokemon")
//     })
//   }, "1000")
//   const flipThrough = setTimeout(async () => {
//     console.log('lets see them thangs')
//     let randomName = nameBucket[Math.floor(Math.random() * nameBucket.length)]
//     console.info(randomName);
//     randomBucket.push(randomName)
//     console.info(flipThrough)
//     return randomName
//   }, "2000")
//   const appendBucketItem = SetTimeout(async function() {
//     let bucketItem = randomBucket[0]
//     console.log(bucketItem)
//     let ajaxURL = `https://pokeapi.co/api/v2/pokemon/${bucketItem}`
//     $.ajax({
//       method: 'GET',
//       url: ajaxURL,
//       // data: {
//       //   name:
//       // }
//       dataTypes: 'json'
//     }).then(randomPoke => {
//        let apiTest = { name: `${randomPoke.name}`, image: `${randomPoke.sprites.front_default}`}
//       antiDryBucket.push(apiTest)
//        console.log('antiDryBucket in appendBucketItem')
//        console.log(antiDryBucket)
//     } )    // i think i see a reason to use lodash already. becaues of our ajax call scope, a lot of our functions do more than 1 thing per function which is definitely not best practice. As I see more single-responsibility-functions in our face w/ this route right here: I see the redundancy of pushing all these values over and over into an array. Given all of the bells-and-whistles w/ poke api. especially the images... I can see this being a weird case. But lodash seems like it could tackle all those weird redundancies: w/       ._chunk[size = 3] splitting up arrays.. etc.

//   }, "3000")
//   const pokemon = () => {
//     console.log("hello")
//   }
//   const randomPromise = async (req, res) => {
//       // return new Promise ( function(resolve, reject) {
//         return new Promise(async (self) => {
//           await findPokemon,
//           await flipThrough,
//           await appendBucketItem,
//           await pokemon
//         });
//         // return new Promise (setTimeout(async (resolve, reject) => {     // mentioning this being last because its nice to explore and see (setTImeout(async)) like that. s
//         //   resolve (
//           //     await findPokemon,    // easy to forget the commas good thing that was recent.
//           //     await flipThrough
//           //   // setTimeout(findPokemon, "1000"),    // easy to forget the commas good thing that was recent.
//           //   // setTimeout(flipThrough, "2000")
//           //   )
//           reject (
//             console.log('we failed at life')
//             )
//             // }, "2000")
//             // )
//           }
//           const render = async () => {
//             await randomPromise()
//             await res.write(`<div> <img src='${image}'> </div>`)    //                        W                O                 W        take the divs out if you wish!!!!!!!!!!
//             res.end()     // dont need this but its nice to know whats going on with it. s
//           }
//           render()
//   //   let url2 = `https://pokeapi.co/api/v2/pokemon/geodude`
//   //   let response2 = await axios.get(url2)
//   //   let image = response2.data.sprites.front_default
// })

  // res.render('index', { pokemon: pokemon.slice(0, 151) }, {success: `${successValue}`, failure: res.locals.fakefailMsg}) //   still want to do rendering objects like this for some reason. spent like a full 10 minutes on this. WOW i feel snailPace for just figuring out:
                // res.render("index", {
  //   pokemon: pokemon.slice(0, 151),
  //   success: `${successValue}`,
  //   // failure: res.locals.fakefailMsg,
  //   cookies: res.locals.fakeCookies,
  // }); // these are pulled from app.use up there
            // didn't realize you could use the syntax like this. Probably would find that out by back to front looking at express documentation.
            // 

          //   db.pokemon.findOrCreate({      // same here i almost feel like its easy to miss that you're using a: [sequelizeTable/pokemon.invokeMethod/findOrCreate() and you set an object within the table.method() invoke. its easy to think its just weird node/express syntax and that they're part of the express:response/request or also the sequelize table.method()syntax. It's literal javascript: still methods and objects.]
          //     where: { pokeid: `${id}`, name: `${pokeName}`, type: type2 },
          //   });
          // }

// const cookieArray = [1, 2, 3, 4]
// const cookieArray = ['choc', 'pb', 'sugar', 'oatraisin']
// const arrayToPop = []
// let length = cookieArray.length
// let startPoint = length - length++

//   const iterateThroughCookie = async (req, res) => {
//     console.log([cookieArray[`${startPoint++}`]]) // doesnt take hours anymore.
//     let cookieRightNow = [cookieArray[`${startPoint++}`]]
//     console.log(cookieRightNow)
//     cookieArray.push(cookieRightNow)
//     cookieArray.pop()
//   }
//   console.log(cookieArray)
// setInterval(iterateThroughCookie, "1000")

// const pretty = require("prettier") there's enough code on here... using CLI vs API. .format() etc.

// var rowdy = require('rowdy-logger') no thanks for now not too many routes all over the place but its a nice reminder.
// rowdyResults = rowdy.begin()

// const fetch = require('node-fetch')
// const passport = require('./config/ppConfig');
  // const SECRET_SESSION = process.env.SECRET_SESSION;

// const isLoggedIn = require('./middleware/isLoggedIn.js') // going one step back away from server into the same scope where you'd choose either server.js or middleware/isLoggedIn.js
// const cookie = require("cookie")        // npm i cookie.    i like this nodepackage but their documentations run using: npm i url  & npm i http. 'http' is deprecated. I'd like to try firing up a native node server at a different time. Removing from package.json for now to avoid clutter. totally glad i read the documentation because i'm getting more reflexively-familiar with optionsObjects.