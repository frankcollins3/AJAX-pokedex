const data = require("../models");
// const data = require('...../models' realizing you can accidentally go to 711 LS'ing back far enough.)
const axios = require("axios");
var express = require("express"); // or express = require('express')() but wed like app. available to us.
const db = require("../models");
// const { map } = require("jquery");
var router = express.Router();

const gimme = require('node-fetch') // downversioning to avoid ESM-import-errors. we dont need this: we can use axios.get() or $.ajax({'GET'}) 

// router.use( (req, res, next) => {   // doing last. Might sound small but went to go use router.use on index.js before not doing-so in realizing there's no context of router anywhere within the app.use. If this code works its the reason why pokemon/show/.ejs & /pokemon don't get the req.flash()....
//   res.locals.infoHelp = "press h for help"    // dont tell the user {i: info || h: for help}        // wont do i. S-I sign-in S-O sign-out. can't use I\
//   res.locals.alerts = req.flash()
//   res.locals.currentUser = req.user
//   res.locals.infoHelp = "press h for help"    // dont tell the user {i: info || h: for help}        // wont do i. S-I sign-in S-O sign-out. can't use I\
//   res.locals.fakeCookies = ""; // maybe render this, .css('size', '100px 100px')      // my first flash message had trouble so just sent an empty string to decorate with cookie-suggestive icon
//   next()
// })
  

// npm i json-server --write db.json       http://localhost:3000/rootpokemon   http://localhost:3000       http://localhost:3000/burgers [burgers from https://www.youtube.com/watch?v=FLnxgSZ0DG4]

const fs = require('fs')        // slight non-funny joke: realized instead of using fs w/ .json file I should make an API!!!!             ----> an API will be still be a .json file
// https://github.com/PokeAPI/pokeapi/issues/107 wow spent 2 hours trying to use fsync deciding to throw in an ["id":"correspondingIdToPokedexID"], then woke up and thought i'd do an API instead of use: [db.json&&fs.readSync] which doesn't make any sense as they'd be the same thing. This issuesUrl is directly to the pokeapi github page from 2016. They suggest it was in v1, not v2. But it is in V2 under: 
// console.log('fs')    // goal is to fs.write(poke.json)&send an object through the route for the show.ejs. cons.log(fs)->we'll use:  readFileSync: [Function: readFileSync],  writeFileSync: [Function: writeFileSync], & maybe---->> truncate: [Function: truncate],
// all this Fs stuff bcuz i didn't see:  1st: I forgot these even existed and saw them on a pokemoncard from google. Plan was to just look up every card and write it down. 2) I then found from [pokemon.com/pokedex/bulbausaur] and copy-pasted the so-called flavor_text
// * flavor_text_entries: [] 134 items ----------> flavor_text:"When several of these POKéMON gather, their electricity could build and cause lightning storms." 






let nameArray = [];
let objectArray2 = new Array();
let duplicateArray = [];

const nameMap = new Map();
nameMap.set("famous", "cookies"); // Map(1) { 'famous' => 'cookies' }             actual terminal output  using map ... // kind of funny that js sounds so confusing at first with arrays, objects, functions... and then you have things like map that sound more confusing. In the end it's kind of funny that map turns an array into an object pretty much. Everything seems so much less tall after a while.
// console.log('nameMap')
router.get("/", async (req, res) => {  
  req.flash('success')
  // this database function is one of the last ones im writing.
  data.pokemon.findAll().then(async (dbPokemon) => {
    nameArray.splice(0, nameArray.length); // glad to get another use case out of this. Comment-out nameArray.splice() and see what happens to all the map: count.     They keep increasing as the browser gets refreshed, and then every pokemon has an artificially high enough count to be wiped away with dupe.destroy()
    //if you take out nameArray.splice we get an inaccurate count
    // if (!$('#dblFrom').children().text().includes(`${doubleFrom[2].name}`)) {  this solution comes out of a similar problem as this piece of code from show.ejs where container3.hover.append(damageRelations[0[.endpoint]])   What we were doing was referencing parent().children().text() to make sure we couldn't append the data to the container twice. Spent pretty much 11am-11pm today checking object keys against each other. Just about the last function I did.
    // went from: index.ejs   --> /pokemon/index.ejs ----> show.ejs -----> back to index.ejs to add $.ajax({ randomPoke.post findOrCreate({req.$ajaxBody.post})}. Adding to the database allowed us to to now save multiples and it was a great problem to create. I was able to set up map a few times and couldn't get it to sort. referenced stackoverflow for the sort. bringing us to: regex + .map() + redis/dbCacheing()/res.locals to work on
    // this mapping and checking for object keys is very last thing I did and took over 10 hours.
    // await  checkObjArr()
    let loopCounter = 0;
    const keyCount = {};
    let keys = Object.keys(dbPokemon);
    let values = Object.values(dbPokemon);
    for (let i = 0; i < values.length; i++) {
      // didn't seem to need object.keys / object.values once these past 4 months. Nice to get a refresher on object.()
      if (values[i].name) {
        loopCounter++;
        nameArray.push(values[i].name);
      }
    }
    // console.log(nameArray)
    let reducedArray = nameArray.reduce((acc, curr, _, arr) => {
      if (acc.length == 0) acc.push({ item: curr, count: 1 });
      else if (acc.findIndex((f) => f.item === curr) === -1)
        acc.push({ item: curr, count: 1 });
      else ++acc[acc.findIndex((f) => f.item === curr)].count;
      return acc;
    }, []);
    // console.log("reducedArray");
    // console.log(reducedArray);
    let newObject = reducedArray.sort((a, b) => b.count - a.count);
    //   console.log(`${newObject[item].count}`) //   console.log(`${newObject[item].name}`) flavor_text:"When several of these POKéMON gather, theirelectricity could build and cause lightning storms."
    let length = newObject.length;
    let startPoint = length - length++; // this is to 0 us out since the objectArray starts from 0.
    const loopThrough = async () => {             // console.log(objectArray[`${startPoint++}`])  // this is the incrementing code that I wanted the .energyCard.css('order', '$(this).css().flexOrder++`) setInterval("3000") it would've caused them to move slowly and travel circularly. Instead i put the hover on the pokeballs and i think there's less motion but I was having trouble getting this working with a css property incrementing.
      let newPoke = [newObject[`${startPoint++}`]]; // thought it had to be ${newPoke} 10:00pm been here since about 11:00am wow.              // newNameArray.push(objectArray[`${startPoint++}`].toString())
      // let newPoke = [newObject[`${startPoint++}`]]       // console.log(newPoke[0].item)    // wow apparently have to work with maps like we've got to work with jquery Objects w/ the [0]?
      if (newPoke[0].count > 1) {
        const dupe = await data.pokemon.findOne({
          where: { name: newPoke[0].item },
        });
        if (dupe) {           // love to see that. if (dupe > 0) / if (!dupe = null) / if (dupe !== null) all the same thing.
          await dupe.destroy(); // deletes the row
        }
        duplicateArray.push(newPoke[0].item); // pretty much 10 hours for this line of code
      }
    };
    loopThrough();
    // if (newPoke[0].count > 1) {
    // console.log(newPoke.count)
    // if ([newPoke.count] > 1) {
    //   console.log("got a verified greater than one")
    //     duplicateArray.push(newPoke.name)
    // }
    // console.log(duplicateArray)
    // setInterval(loopThrough, "1000")
    // for (let i = 0; i < newObject.length; i++) {
    //   console.log(newObject[i].name)
    //   console.log(newObject[i].count)
    //   if (newObject[i].count > 3) {
    //     console.log(newObject[i].name)
    //   } else {
    //     // console.log('hey whatchu doin')
    //   }
    // }
    // for (const [key, value] of Object.entries(newObject)) {
    //   console.log(`${key}`)
    //   console.log(`${value}`)
    //   console.log(`${newObject[value]}`)
    //   if (`${newObject[value]}` > 1 ) {
    //     console.log(`${newObject[value]}`)
    //   }
    // }
    console.log(newObject);
    for (let i = 0; i < values.length; i++) {
      const newObject = {
        name: values[i].name,
        sqlid: values[i].id,
      };
      objectArray2.push(newObject.name);
    }
    // let startPoint = length - length++    // this is to 0 us out since the objectArray starts from 0.                // love to see that. if (dupe > 0) / if (!dupe = null) / if (dupe !== null) all the same thing.
    // const loopThrough = () => {           // love to see that. if (dupe > 0) / if (!dupe = null) / if (dupe !== null) all the same thing.
    //   // console.log(objectArray[`${startPoint++}`])  // this is the incrementing code that I wanted the .energyCard.css('order', '$(this).css().flexOrder++`) setInterval("3000") it would've caused them to move slowly and travel circularly. Instead i put the hover on the pokeballs and i think there's less motion but I was having trouble getting this working with a css property incrementing.
    //   let newPoke = objectArray[`${startPoint++}`]           // love to see that. if (dupe > 0) / if (!dupe = null) / if (dupe !== null) all the same thing.
    // // loopThrough()
    // setInterval(loopThrough, "1000")
    // if (!$('#dblFrom').children().text().includes(`${doubleFrom[2].name}`)) { what we are trying to do is similar to this where we are checking the dbPokemon elements against the other elements for duplicates to be deleted. This line of code from show.ejs just "validates" (parent()children().text()) against its own textContent literally as you'd append it to the container: as a catch against posting duplicates.
    // console.log(dbPokemon.map(getPokemonNames))
    let pokeNameMap = dbPokemon.map(getPokemonNames); //
    function getPokemonNames(item) {            // callback function for pokeNameMap = dbPokemon.map up ahead.              // return [item.firstname,item.lastname].join(" ");
      return [item.name];
    }
    res.render("pokemon", { dbPokemon }); // was going for "pokemon", {dbPoke}, numbOfPokemon
  });
});       // doing an axios .get within a       sequelizeModel/db .findOne({(get)

router.get(`/show/:name`, async (req, res) => {
  console.log(gimme)  // Response: [class Response],   actual terminal output for only method well be needing. Doing this last btw. 

    const jsonpoke = fs.readFileSync('./JSON/pokeinfo.json') // w/o <Buffer 5b 7b 22 6e 61 6d 65 22 3a 22 42 69 67 46 6f 6f 74 22 2c 22 74 79 70 65 22 3a 22 41 70 61 74 6f 73 61 75 72 75 73 22 7d 2c 7b 22 6e 61 6d 65 22 3a 22 ... 142 more bytes>
    // i think what I'd rather have instead of jsonpoke is a self made api for these:  https://product-images.tcgplayer.com/fit-in/437x437/107044.jpg       {belowWeak&&Resistance: "Digglet lives about three feet underground"...}
    let cleanpoke = JSON.parse(jsonpoke)  // im doing this fs stuff last, i saw a pokemon card that has these descriptions on them & found the quotes from [https://www.pokemon.com/us/pokedex/dragonite]
    // console.log(cleanpoke)      // sort of a coding solution. been at this 90 minutes: organize the JSON by the pokemons ID
    let fromUrlName = req.params.name;
    // let name = fromUrlName          // console.log(cleanpoke["pokemon"]["bulbasaur"])
    let fetchUrl = `https://pokeapi.co/api/v2/pokemon/${fromUrlName}`
    // gimme(fetchUrl).then(response => { <{promisepending}> error doing it this way. })
  
    gimme(fetchUrl)         // console.log(cleanpoke.rootpokemon[1])  //     console.log(cleanpoke[rootpokemon][1]) first try after a night of 2hrs trying.
    .then(res => res.json())        // this is refactored, !{noBracket}code str8 from 2.6.7 node-fetch documentation    
    .then( (json) => {      //  when you set this code up to be a few lines nvm you can see how easily it shows res now be called json.. it doesn't look as much like that when you've got 3 lines.
      let fetchData = json
      cleanpoke.rootpokemon.forEach( (fsdata, i) => {
        if (!fsdata) {
          console.log('weve got an error')
        } else {
          // console.log('fsdata')
          // console.log(fsdata)
          descriptionBin = []
          if (fsdata.name == fromUrlName) {
            console.log('description1')
            console.log(fsdata.description1)
            let secondInfo = fsdata.description2 || 'maybe'       // this throw fs.data.description2 or maybe. surprised after 5 months these solutions are starting to get automatic. Probably could've helped so many undefined error type problems. Probably shouldn't admit this but for this simple thing to be reflexive feels very programmy. Now we can check on the other side from the jquery object (or if it was under inters.Observer's watch): for the textContent. if(text=='maybe'){$(this).style.opacity='0.0'/jquery.hide()}
            if (fsdata.description2) {
              console.log("description2")
              console.log(fsdata.description2)
              console.log("see the number 2")
              console.log(descriptionBin[0])
              console.log(descriptionBin)
              // console.log(fsdata.description2) 
            } else {
              // descriptionBin.push('null') && descriptionBin.push('undefined')  //                             kinda&&kindaNot{surprised:thisWorks}
              descriptionBin.push("hey")
            }
            db.pokemon                    // i set the fs.readFilesync after I was done. I looked at a pokemon card on google and saw it had a description and I picked a page that this was: [mostCongruent&& mostOutOfWayDuringUse (of the description1)] I was originally going to have the "login" sneak its way between the show.ejs page somehow but it looks best at the beginning and this code makes most sense in the show.ejs page.
            .findOne({
              where: { name: fromUrlName },
            })
            .then((dbResponse) => {
              let name = dbResponse.name;
              // console.log(dbResponse)
              // console.log(dbResponse.name)
              let axiosUrlPokeName = `https://pokeapi.co/api/v2/pokemon/${fromUrlName}`;
              axios.get(axiosUrlPokeName).then((response) => {
                // quick digging into the pokemon API to hook the data.sprites.front_default image sent over when we response/res with dbResponse.name + urlResponse.img    We can also just grab it from the view side with jquery and AJAX/XML/process-data-without-redirect/refresh
                const axiosResponse = response.data;
                // console.log('weight')
                // console.log(axiosResponse.weight)
                // console.log(axiosResponse.height)
                let image = axiosResponse.sprites.front_default;
                // console.log(axiosResponse.data.sprites.front_default)
                let apiMoves = axiosResponse.moves;
                let moves = [];
                let updatedMoves = []
                for (move in axiosResponse.moves) {     // technically this isn't too DRY repeating axiosResponse.moves .. feels more readable and followable this way.             // console.log(`${move.name}`)        // console.log(`${move}`)
                  // console.log(apiMoves[move].move)  // wow this took 30 minutes alone
                  moves.push(apiMoves[move].move.name); // 30 minute brute-force-code      ...name is the missing piece. Might be embarassing I sunk like 4hours easy in trying this out. It's easy to see why digging here helped me a lot later with the mmap () and checking current object with keys.
                }        


                
                // moveString = moves[0].textContent.toString().replace(/[[\]]/g,'')  // this is taking that textContent and turning into a string. reflex after all that id .slice() from pokemon/index.ejs       
                // console.log('apiMoves')
                // console.log(apiMoves)
                // console.log('moveString')
                // console.log(moveString)
                moveBucket = [];
                
                // const commaBucket = moveString.match(commaCount);
                // const moveAmount = `${commaBucket.length+1}`
                
                // let subStr = moveString.split(','); // this took a good hour; didn't know you could work with substrings. 
                // let str = $('subStr')
                // subStr.forEach( (move) => {
                  //  moveBucket.push((move));
                  //  $('#container1').prepend(move)
                  // });
                  const secondTime = () => {
                  // const commaCount = /[,]/gi;     
                  // console.log("know dat")
                  // let moveString = (apiMoves[move].move.name.toString().replace(/[[\]]/g, ''))
                  // console.log('moveString')
                
                  // let commaBucket = moveString.match(commaCount)
                  // console.log('commaBucket')
                  // console.log(commaBucket)
                  // const moveAmount = `${commaBucket.length+1}`
                  // console.log('moveAmount')
                  // console.log(moveAmount)


                  // moveString = moves.replace(/[[\]]/g, '')
                  // console.log('moveString')
                  // console.log(moveString)
                }
                setTimeout(secondTime, "1000")

                const description2 = descriptionBin[0]
                const check = () => {
                  console.log(description2)
                }
                setTimeout(check, "2000")
                let pokeObject = {
                  // this was one of the chief daywasters at the start of doing this:     thinking that for index.ejs we can just loop and create pokemon objects based on dynamic variables created from looping (for in ) through an object and setting let pokeName = .... like let slowpoke = let raichu = ... to loop through objects and set the object keys as variables.. Can't be done and as far as I know we can't create this similar renderingObject for different sets of data that have different paremeters.
                  name: `${name}`, // hello. that line of code above is me not knowing what a:    let map = new Map()can do.     i tried to declare let pokeObject = {}
                  img: `${image}`,
                  type: dbResponse.type,
                  id: dbResponse.pokeid, // chuckle out of using id and seeing them all be wrong because its registering postgres database entry id vs pokeid. 3 double-Checks and it clicked -5 or so minutes.
                  // move: `[${moves}]`, //  was stuck trying to do it this way. If I couldn't get it working i would've done res.render('pokeon/show', { pokeObject },{ moves: moves })   would've put moves into its an object and handled it here. on the ejs file I remove the brackets and do .split() .join() to get rid of the commas. I agree with stackoverflow that you're better off cleaning it up in the routeHandler before sending off. I was thinking the same but from a place of doing a whole separate moves object so we weren't digging through 1 renderingObject with all these differences.
                  move: `[${moves}]`, // surprise. this works.     looking at the: (pokemon.ejs clickEvent$(event.target) ---> housing a mouseEvent$(this) within the clickEvent) ... (doing an ajax call within an ajax call) is announcing to me this object value might be better off at its own object to throw into the res.render WOW AGAIN
                  // move: moves, // surprise. this works.     looking at the: (pokemon.ejs clickEvent$(event.target) ---> housing a mouseEvent$(this) within the clickEvent) ... (doing an ajax call within an ajax call) is announcing to me this object value might be better off at its own object to throw into the res.render WOW AGAIN

                  description: fsdata.description1,
                  description2: secondInfo,       // we can do conditionals on this side, or .hide() append them and clean them up on client/.ejs side
                  height: axiosResponse.height,
                  weight: response.data.weight
                };
                // console.log(pokeObject.move)
                // const checkThis = () => console.log(pokeObject.move[0])  // one line no parenthesis. takes some getting used to.
                // setTimeout(checkThis, "2000")
                
                res.render("pokemon/show", 
                { pokeObject, 
                  // cleanpoke: cleanpoke
                }, );
              });
            }); // db.findOne parenthesis
      
          // {recreation: re-creation}
        }    // if fs.data == urlFromname
      }   // else
    }) // forEach
  })  //.thenjson
  loopBucket = [];      // for (let i = 0; i < cleanpoke.length; i++) {     // Object.entries(cleanpoke.forEach(poke => {       //   loopBucket.push(cleanpoke[i][`${urlName}`])        // for(i in data){           //   loopBucket.push(cleanpoke[i][`${urlName}`])
})






















            
  


  
// post route! this is the receive-box for the pokeball-post-route from index.ejs.    When you click the pokeball... console.log('hey wow') can come up and you can begin working on the logic for handling the <3 pokemon.name %> <3 pokemon.type %> (from pokeAPI)  data that will be funnelled into the psql database we have specified as pokedex from config.json
router.post("/", async (req, res) => {
  // this is the route handler for the pokeball that saves the pokemon to the database
  // HUGE VICTORY TO PUT AN INPUT onto the form data so that we can separate logic being associated with the ajax postData and the form<submit> button .on(click) postData
  console.log("hey wow");
  // console.log('req.body')
  // console.log(req.body)
  console.log(req.body)
  if (req.body.ajax == null) {
    // this code distinguishes AJAX from form <submit>
    // console.log("yeah its NULL")
    // console.log(req.body)
    db.pokemon
      .findOrCreate({         // [$(this)!= db.table.create] from sequelize docs: There is table.build() which doesn't table.save() and there is table.create() which is build and create.
        where: {
          pokeid: `${req.body.pokeid}`,
          name: `${req.body.name}`,
          type: `${req.body.type}`,
        },
      })
      .catch((err) => {
        console.info("gotta catch em all"); // wow kind of embarassed i first thought of this while
      });
  }

  // was getting a reference error on the ajax function and was trying to separate the ajax from the rest of the post behavior.
  if (req.body.ajax == "false") {
    console.log("yeah this isn't from");
    let id = req.body.pokeid; // we are testing out the ability to use just the req.body.name body.id so when we save the pokemon to the database we can get the type using just the id or name so we can get rid of the hidden input that pops up when you hover on the pokeball.
    let pokeName = req.body.name;
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );
    let pokemon = response.data;
    // ***UPDATE was having problems with this post route. so i created a little input tag so we can get a yes/no/true&false that identifies which method of post being used (ajax vs form <submit>)
    // console.log('req.body.ajax')
    // console.log(req.body.ajax)

    let type = response.data.types[0].type.name;

    // aw man... 6/6 as I type this up I realize we can do this over somewhat: and include both types into the database
    // we would access the type which would be data.type = ["water', 'psychic"] and we can check for: if data.type.includes('water') if data.type.includes(')

    if (pokemon.types[1] != null) { 
      console.log("we have two types here");
      let type2 = pokemon.types[1].type.name; // without this conditional statement this is a non-page directing  uncatched promise error.
      console.log(`this is type2 ${type2}`);
      // const checkTypes = () => {  // this function is to favor birds like pidgey (type1 normal type2 flying) and anyone type1 normal type2 fighting or something. It'll save the pokemon as having their non normal type.
      //   // psychic seniority. slowpoke comes up for water but makes more sense as psychic. come to think of it. I was surprised there was only 3 ghosts in original game and cant think of another double psychic type atm.
      //   if (pokemon.types[1] != null) {     // might have to see this code a few times.
      //     if (type == 'psychic') {
      console.log("this is the type");
      console.log(type);

      if (type == "normal") {   
        // this code is saying: if we have two types, and type 1 is normal...:
        db.pokemon.findOrCreate({
          where: { pokeid: `${id}`, name: `${pokeName}`, type: type2 },
        });
      }
      if (type == "water" || type2 == "water") {
        db.pokemon.findOrCreate({
          where: { pokeid: `${id}`, name: `${pokeName}`, type: "water" },
        });
      }
                              
      if (type2 == "flying" || type == "flying") {    
        if (type2 == 'flying') {
          try{
            db.pokemon.findOrCreate({
              where: { pokeid: `${id}`, name: `${pokeName}`, type: "flying" },
            });
          }
          catch {
            console.info('error. no flying type but were trying somehow')
          }
        } else {
          db.pokemon.findOrCreate({
            where: { pokeid: `${id}`, name: `${pokeName}`, type: "flying" },
          });
        }
        // show the opposite of flying please.
      }

      if (type2 == "fire" || type == "fire") {
        if (type2 == 'fire') {
          try{
            db.pokemon.findOrCreate({
              where: { pokeid: `${id}`, name: `${pokeName}`, type: "fire" },
            });
          }
          catch (err) {
            console.error('error. no fire type, but 1 of our types is fire.')
          }
        } else {
          db.pokemon.findOrCreate({
            where: { pokeid: `${id}`, name: `${pokeName}`, type: "fire" },
          });
        }
        // show the opposite of flying please.
      }
      if (type == "poison" || type2 == "poison") { // can swap this order of poison/grass and see bulbasaur being saved as both, w/ the object-Occurency-Algorithm wiping out the grass type. Charizard saving as flying. No Fun. 
        db.pokemon.findOrCreate({
          where: { pokeid: `${id}`, name: `${pokeName}`, type: "poison" }, // can throw the actual string in there too at thisp oint. for some reason i had an if (type === type) down there but it seems to have broken somehow moving it back and forth from laptop.
        });
      }

      if (type == "grass" || type2 == "grass") {
        db.pokemon.findOrCreate({
          where: { pokeid: `${id}`, name: `${pokeName}`, type: "grass" }, // can throw the actual string in there too at thisp oint. for some reason i had an if (type === type) down there but it seems to have broken somehow moving it back and forth from laptop.
        });
      }
      // if (type == 'fire' || type2 == 'fire') {
      //   db.pokemon.findOrCreate({
      //     where: {pokeid: `${id}`, name: `${pokeName}`, type: 'fire'}  // can throw the actual string in there too at thisp oint. for some reason i had an if (type === type) down there but it seems to have broken somehow moving it back and forth from laptop.
      //   })
      // }
      if (type == "ghost" || type2 == "ghost") {
        // i broke this by accident and then had to fix it. i like the idea of the ghosts also showing up for poison since the ghost type blanks out the pokemon from being seen on the pokeDisplay2.
        if (type == "ghost") {
          db.pokemon.findOrCreate({
            where: { pokeid: `${id}`, name: `${pokeName}`, type: type2 },
          });
          db.pokemon.findOrCreate({
            where: { pokeid: `${id}`, name: `${pokeName}`, type: type },
          });
        } else {
          db.pokemon.findOrCreate({
            where: { pokeid: `${id}`, name: `${pokeName}`, type: type2 },
          });
        }
      }

      



      // line 78 this code here was really goaled to be: which type contains psychic. return the variable that stores the desired set of characters.        if (type == 'psychic' || type2 == 'psychic')
      if (type == "psychic") {
        // console.log("weve got a psychic type as type 1")
        db.pokemon.findOrCreate({
          // can see where we'd look into refactoring. Knowing during 1line type expressions we can get rid of redundant parenthesis... we wouldn't do that on this case because this is the where object. object is always going to have the parenthesis.
          where: { pokeid: `${id}`, name: `${pokeName}`, type: type },
        });
      } else if (type2 === "psychic") {
        console.log("type2 we have a psychic type here it is");
        db.pokemon.findOrCreate({
          where: { pokeid: `${id}`, name: `${pokeName}`, type: type2 },
        });

      } //else {
      // console.log('what is really going on');
      // }
      if (type == "fairy") {
        try {
          console.log("post route is sending a data with type fairy");
          db.pokemon.findOrCreate({
            where: { pokeid: `${id}`, name: `${pokeName}`, type: "normal" },
          });
        } catch {
          console.log("or not");
        }
      }
      if (type == "normal" || type2 == "normal") {
        // ...  still in the overarching:  if (type2 != null)..   so this lineOfCode says:    if(pokemon.types[1] != null) if we have 2 different types and the first one of them is normal:
        console.log("weve got a normal type");
        try {
          if (type == "normal") {
            // charizard being normal type and popping up is not gonna look feel correct on that .pokedexScreen
            db.pokemon
              .findOrCreate({
                where: {
                  pokeid: `${id}`,
                  name: `${pokeName}`,
                  type: `${type2}`,
                }, // this is done in case normal is the first type. its not foolproof but itll do a dumb-default down to logging the non-normal pokemon type
              })
              .then((response) => {
                console.log("this is our normal response");
                console.log(response);
              });
          }
        } catch {
          //return stops the function forgot. thats why you wouldn't be able to check the console after the return statement.
          console.log("not normal type.");
          db.pokemon
            .findOrCreate({
              where: { pokeid: `${id}`, name: `${pokeName}`, type: `${type2}` }, // this is done in case normal is the first type. its not foolproof but itll do a dumb-default down to logging the non-normal pokemon type.
            })
            .then((response) => {
              // console.log('this is our normal response');
              // console.log(response);
            });
        }
      } else {
        // console.log('sure')
      }
    } else {
      console.log("we have only one type");
      try {
        db.pokemon.findOrCreate({
          where: { pokeid: `${id}`, name: `${pokeName}`, type: `${type}` },
        });
        console.log(`weve successfully created: ${id} ${pokeName} ${type} `);
      } catch {
        console.log("couldn't save it correctly we have a problem");
      }
    }
    if (type == "fairy") {
      try {
        console.log("weve got a fairy type");
        db.pokemon.findOrCreate({
          where: { pokeid: `${id}`, name: `${pokeName}`, type: "normal" },
        });
      } catch {
        console.log("now");
      }
    }
  } else {
    console.log("no request body");
  }
  // checkTypes
  // const checkTypeThenSaveData =  () => {
  //    setTimeout(checkTypes, 1000)
  //   setTimeout(savePoke, 1000) // i originally had a try()catch() to see if the data/pokemon being posted was a normal type, and to use await/setTimeout to have the checkType function run before the savePoke function. It'll save pidgeotto first as flying type, and then the second savePoke type will save pidgeotto as normal type.
  // }
  // checkTypeThenSaveData()
  res.redirect("/");
});

//  ** here lies all the efforts from checking object keys against each other and module.exports = router
//  .map() and
// console.log('nameArray')
// console.info([map.keys()])
// console.info([map.values()])
// console.log('iteratorObject')
// const hash = Object.fromEntries([ ...nameArray.reduce((map, key) => map.set(key, (map.get(key) || 0) + 1), new Map()) ]);
// const map = nameArray.reduce((newMap, e) => newMap.set(e, (newMap.get(e) || 0) + 1), new Map());
// console.log(hash)
// first, we use reduce to generate a map with values and the amount of times they appear
// const map = nameArray.reduce((map, key) => map.set(key, (map.get(key) || 0) + 1), new Map())
// // next, we spread this map into an array
// const table = [ ...map ];
// // finally, we use Object.fromEntries to generate an object based on this entry table
// const result = Object.fromEntries(table);
// console.log('result')
// console.log([result])
// console.log(reducedArray.sort((a,b) => b.count - a.count ))
// console.log('nameArray')
// console.info([map.keys()])
// console.info([map.values()])
// console.log('iteratorObject')
// const hash = Object.fromEntries([ ...nameArray.reduce((map, key) => map.set(key, (map.get(key) || 0) + 1), new Map()) ]);
// const map = nameArray.reduce((newMap, e) => newMap.set(e, (newMap.get(e) || 0) + 1), new Map());
// console.log(hash)
// first, we use reduce to generate a map with values and the amount of times they appear
// const map = nameArray.reduce((map, key) => map.set(key, (map.get(key) || 0) + 1), new Map())
// // next, we spread this map into an array
// const table = [ ...map ];
// // finally, we use Object.fromEntries to generate an object based on this entry table
// const result = Object.fromEntries(table);
// console.log('result')
// console.log([result])
// console.log(reducedArray.sort((a,b) => b.count - a.count
//     res.render('pokemon/index', { pokeFavoriteObject })
//   }
// })
// * fs attempt code
  // for (let i = 0; i < cleanpoke.length; i++) {
      // Object.entries(cleanpoke.forEach(poke => {       //   loopBucket.push(cleanpoke[i][`${urlName}`])
// for(i in data){           //   loopBucket.push(cleanpoke[i][`${urlName}`])

// * from join table practice
// function randomRange(min, max) { // min and max included 
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
//   const pokemonGO = async () => {
//       let randomPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomRange(1,151)}`)
//       // console.log(randomPoke)
//       // console.log(randomPoke.name)
//       let axiosid = randomPoke.data.id
//       let axiosname = randomPoke.data.name
//       console.log("id and name")
//       console.log(axiosid)
//       console.log(axiosname)
//       db.pokemon.create({
//           pokeid: `${axiosid}`,
//           name: `${axiosname}`
//       }).then(newPokemon => {
//           console.log(newPokemon)
//           console.log(`id with the .get() since were in .create not findOrCreate${newPokemon.get().axiospokeid}`)
//           console.log(`just the name no .get() ${axiosname}`)
//           setTimeout(async () =>{ await newPokemon.destroy(), "2000"})    
//       })
//       // console.log() && data clear add pokemon to the database and await newPoke.destroy()
//   }
//   pokemonGO()  



// router.get('/', async (req, res) => {
//    await data.pokemon.findAll().then(pokeResponse => {
//       // console.log(pokeResponse);
//       const renderObject = {
//         // name: `${pokeResponse.name}`,
//         // id: `${[pokeResponse.id]}`
//         name: pokeResponse[1].name,
//         id: pokeResponse[1].id
//       }
//       for (const poke in pokeResponse) {
//         // console.log(`${poke} ${pokeResponse[poke].name}`)
//         let loopedObject = {
//           name: `${pokeResponse[poke].name}`,
//           id: `${pokeResponse[poke].id}`
//         }
//         console.log(loopedObject)
//       }
//       console.log(items);
//       res.render('pokemon/index', { pokeResponse })
//     })
// })
// THIS ROUTER IS respitting out the form from index.ejs with inboundName attached to api call to re-render the pokemon.forEach(res.render({pokemon{}}))
// router.post('/', async (req, res) => {
//       let inboundId = req.body.id   // .id is the name="id" input that holds the sliced url <%= pokeid %> which comes from pokemon.forEach(pokemon) pokemon.url
//        let inboundName = req.body.name // .name is the input it corresponds to in hidden pokeball form that was originally the star.
//         // let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${inboundName}` //storing req.body.name as the API endpoint. The pokemon is originally listed on .ejs as an array of spit out object data from pokemon API fetch
//         let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${inboundId}`
//         axios.get(urlPokemon).then(response => {
//           console.log(response)
//           const id = response.data.id
//           const name = response.data.name
//           console.log(id)
//           console.log(name)
//           db.pokemon.findOrCreate({
//             where: { id: id, name: name }
//           }).then(pokemon => {
//             console.log('wow it looks like we found' + pokemon)
//           })
//         })
//   res.render('pokemon') // of course is the response. the request is everything thats handled with the incoming logic.
//   })
//

// GET DETAILS OF A POKEMON
// set the url entry as a variable
// let id = req.params.id
// CHECK THE API BETTER NEXT TIME! you can use the id of a pokemon to access the data so we can throw the id as string interpolation into the api call with axios.get
// let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${id}`
// axios.get(urlPokemon).then(pokeData => {
// console.log(pokeData) always log the data to see what we have before proceeding.
// pokeDeets = {
//  name: pokeData.data.name,
//  image: pokeData.data.sprites.front_default
// }
// res.render('pokemon/show', { pokeDeets })
// set the data as a pokeDetails object. whats on the pokemon card?

// render the show page with the
// })

//checking API conditional statements API object keys with .exists
// router.get('/new/:name', async (req, res) => { just warm up
//   let pokeName = req.params.name
//   // console.log(pokeName)
//   let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
//   axios.get(pokeUrl).then(response => {
//     const pokeid = response.data.id
//     const name = response.data.name
//     let pokemon = response.data
//     db.pokemon.findOrCreate({
//       where: { id: pokeid, name: name }
//     }).then(newPokemon => {

//       res.render('pokemon/new', { pokemon })
//     })
//     // console.log(response)
//   })
// })

// router.get('/show/:name', async (req, res) => {    // req.params.name grab pokemon by the URL.
//   let pokeName = req.params.name
//     await data.pokemon.findOne({
//       where: {
//         name: pokeName
//       }
//     }).then(pokemon => {
//       console.log(pokemon)

//       res.render('pokemon/show', { pokemon })
//     })
// })

// router.get('/:id', (req, res) => {  //
//   let pokeid = req.params.id  // accessing the
//   db.pokemon.findOne({
//     where: {
//       id: pokeid
//     }
//   }).then(pokemon => {
//     console.log(pokemon)
//     res.render('pokemon/show', { pokemon: pokemon })
//   })
// })
module.exports = router;
