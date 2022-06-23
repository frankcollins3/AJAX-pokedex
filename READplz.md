step 1 to initialize:

NPM INIT! it's easy to FORGET npm init-y &&               npm i to install dependencies: express,axios, psql etc.

SESSION_OBJECT / .env file hiccup. 
* npm start/nodemon doesn't work right away. When you see error: 
<!--  if err: express-session deprecated req.secret; provide secret option -->
use terminal [ touch/echo .env ] /  vs code + file / text editor add file HAS TO BE A .env file
* this line of code lets us know to set a SECRET SESSION = 'yourstringhere' (you dont need let/const/var mystr = '...' to set a .env string)
const sessionObject = {
  secret: SECRET_SESSION,           
  <!-- set your SECRET SESSION variable here and run nodemon/npm start.  -->

<!--line of code 37 LET PORT = 7777 YOU CAN CHANGE PORT AT line 37 YOU SHOULD/COULD then change it on line 292 bottom in the logical or statement o  -->
<!-- line of code 292-294:                  ** you can change port here.-->
const server = app.listen(process.env.PORT || 7777/yourSpecifiedPORT*, ()=> console.log(`server wont stop yelling on port #: ${server.address().port || process.env.PORT}`)) 
server.on('listening', () => console.log('shhhhhhh!'))
module.exports = server;

1) add/touch/echo file   | .env | a .env file into VS code please and create a SESSION_OBJECT variable. then RUN nodemon/npm 
                                                            2) psql commands:
<!--:CREATE DATABASE pokedex;             -->
CREATE TABLE pokemons (
    pokeid INT PRIMARY KEY, // integer 
    name STRING,
    type STRING
);

CREATE TABLE users (
    id INTEGER,
    name STRING,
    email STRING
);
<!--                                    PSQL COMMANDS END -->
npm i / npm i sequelize / npm i --save sequelize
1)sequelize init // creates migrations folder and seeders folder
2) sequelize db:create // this syncs up the database and allows:
 SELECT * FROM pokemons     // SELECT * FROM users;     in-terminal psql commands after syncing sequelize/express with psql
3) sequelize db:migrate
<!-- if you're coding along from scratch.  -->
4) sequelize model:generate --name pokemon --attributes pokeid:integer,name:string,type:string;             // no spaces & semicolon needed
    sequelize model:generate --name user --attributes id:integer,name:string,email:string;

<!-- {          //
  "development": {
    "database": "pokedex",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }, -->
The app is all initialized and runs on your browser when you type/access:
https://localhost:7777          *** nodemon+localhost:7777 after SESSION_object&.env config will take you to the home route ***

1) This app uses a very basic app.get('/', (req, res) => 
CONSUME POKE API w/ :axios.get('pokeapi') and uses .splice to extract the id from the url on pokeapi
index.js
res.render('index', {pokemon})
index.ejs 
pokemon.forEach()       consumes pokeapi and uses <input type="hidden"> hidden forms to regurgitate our consumed API info directly into the PSQL database exactly as it appears in pokeapi and is specified in our database string to string.

<!-- DID NOT know there is no DOM/document object model point of reference for styling beyond <h1 <3 pokeresponse.name %>  -->

App uses a ton of Jquery only because there is no other way to get a context/reference of anything once rendered onto the ejs template.
The intro: close pokedex.click()=>    openPokedex: .click() => 
<!-- You can see the icon informing us of expressSession/cookies -->
<!-- if the req.flash() msgs are out of sight: you can ctrl-f see on browser refresh the messages encouraging to hover around and explore-->
<!-- you can press h to see a simple proof of concept display: grid that setTimeout(()>.hide,"1000") quickly hides. -->
there is a const randomPokeAjax()=> function that uses ajax to access pokeapi, grab a random pokemon based on $.ajax(data.length[i]), and appends it onto the screen while the $('.nav') nav bar (3 pokeball routes) waits to come up. This function also gives us pokemon/data as db.seederJr() to work with / have data in database with. This helps later on with /pokemon.ejs where we see all the types up onto another intsersectionObserver based, entry.target jQ-manipulated .
<!-- long story those 3 random pokemon popping up on the screen are also saved to database. -->

lastly theres a little gengar based game up top: 
The .ghostBtn /ghastly||haunter||pokeapi.sprite.front_gengar function is a game where:
We access the ghost types from the pokeapi.co/api/v2/type/ghost endpoint              (not pokemon)

<!-- barely-important but relevant to function: There are about 990 total pokemon There are 79 ghosts. -->
typeData.length = 79 original game ghosts: gengar/haunter/ghastly bring us to 3/79 pokemon. 
so $(document).on('mousemove') Every time you move the mouse, it is accsessing the type endpoint for ghosts, looping through a .length=79 length array, and pulling back a random value. Everytime an original pokemon comes up,  which you have  3/79 chance for [#82 #83 #pokeid84] our original ghosts.
The way higher probability (76/99), is another .onmousemove event for us to travel towards the ghost on the safety of us not hitting typePokemon[83] number 82/83/84. So every non-original ghost is another safe onmousemove event, until ghastly/haunter/gengar is picked and it activates the random left location and relocates itself, changing between .img from either 3 ghosts.
The closer you get to the ghost the closer it gets to going away pretty much

Click the ghost and it creates a class that hides all the <h1><3 pokeresponse.img ></h1> home-made pokemon cards with a ghost background.
Using $(event.target)+entry.target [intersectionObserver object] we target some logic to the entry.target/pokeApiDataElements adjustedby threshold: argument of observer.observe('target') & trigger the class on click to toggle jquery .hide() && .show() 

The first page consumes the api and renders the data

    .get(`https://pokeapi.co/api/v2/pokemon?limit=${luckynumber777}/`) You can see the limit specification in the axios.get URL probably best to leave it alone but if you want to extend/limit the amount of pokemon/data rendered onto the screen it is possible given the poke API 
Once rendered, this serversideJS/basic "full stack" app makes use of JS semi new intersection observer 
which gives us many options later with the reference point of: entry.target     
<!-- entry.target.style.border = "2px solid red" |for example|  -->
Upon hover over the pokemonCard sprite image, we access the pokemon/sprites/front_shiny endpoint and swap out the regular img for the shiny one.
It also alternates back and forth between img.faceForward && img.faceBackwards

The pokeball is our <submit> button/hidden input form that handles our  to the 




we only have 1 post route splits between:
1)
they are separated by conditional logic: isolating the <form>submissionData w/ an <input name="ajax=False"> semantic input tag to have its own logic within its own conditional scope. So the index.ejs res.render{pokeApipokemon}/pokemon.forEach intersectionObserver Screen Uses the pokeball.click form 

2) the randomPokeAjax that appends 3 50px sprites in the beginning and saves them to the database its its own source of data submission totally separate from the <form> that uses the same post route. ignored by the condition for the form above. It's in-lineHTML under the [governed by <input name="ajax" condition above>] form.

3) There is also an intersectionObserver based simple algorithm that, as you scroll down the intersectionObserver:
<!-- its not a 1/10 1/5 1/7 ratio -->
Algorithmfunction that grabs a random value, either [ % 10 == 0 || % 4 == 0 ] and checks if its divisible by the randomValue that is chosen to be the operator in the modulo comparison. 
* note: It's not an even probability thing though because you could get 5 in-a-row: % 10 == 0 % 10 == 0 % 10 == 0 .. i.e.:  and never even hit % 5 == 0
and not have the comparison ever satisfied with the % 5.
It also flashes an above the .intersectionObserver container: a color:white req.flash('catch em all') message gently/nonDistractfully informs you there's data going into your database as well. 
(if you'd like a lot of database pokemon to have for the next page you can just scroll up and down really fast. Or even change the $ `#{randomNumber} eqiatopm to % 2 == 0 and they'll load up super fast. I originall had it res.rendered out to work if ( db.findAll().length == '84' ) // =84/true

ajax data handler
randompokeajax
form submit data
ajax data

The next page pokemon.ejs Is our database page organized by types. 
So firstly there can be seen above the center screen: an: .energyCard[()()()()()()] container to .on('mouseenter') hover onto:
let firebackground = '/img/fireBack.png'    let grass ='/img/grassbg.png' etc.
 strings for urls added onto the energyCards once we hover. At that same time, we access   
 (As we used entry.target for .shiny_front/img.on('hover'))       
    $(event.target) is used for the .energyCards to append a background, and simultaneously check for and splice the .type (/fire /'ghost' /'grass') etc.
    And to softly validate against the pokemon coming in from the database, by getting the [from psqlDB] db.findOne({where:{type:water}} and taking the name & type against an $.ajax({ call to pokemon api }) and evaluating for a match on: 
    
    $('.energyCard').attr(id) // id set by .splice value: '/fire', 'ghost', 'grass' from the /public/img background pictures. 
    $('db.findOne().type = 'water')
    and $.ajax with the pokemon.name 
    A pretty annoying to set up but simple kind of triple-check, done super-specifically-so enough to exclude all other types.
    There was kind of a judgment system for aesthetics:
    If (background == 'psychic') { if (background == 'psychic' && entry.target.innerText.sliceForpokeNameOrIDfromThisObjectEndpoint)}
    Psychic: 'ghost', 'poison', 'psychic'
* CONTINUING the GHOST theme: having a ghostType that validates the conditional (.energyCardBg='psychic' &&entry.target.sliceType ='ghost') triggers a gengar button to $.animate down the page. If it reaches the bottom. The page res.redirect('/') back home. All 3 satisfy it.
    Normal Type includes flying type and dragon and has a fairy renaming .catch() for jigglypuff/clefairy, etc. pokeApiType='fairy' saves psql='normal'
    Fighting background: Allows intersectionObserver to reveal: FIGHTING, GROUND, ROCK pokemon.

    As you hover onto the energyCards, the value is popped off of an array, allowing us to empty the array without repeating Types being applied as backgrounds. 
<!-- ORIGINALLY: --> i didn't want a pokedex screen: and wanted all of the .energyCard to be a giant circle, until realizing the .energyCardContainer.style.borderRadius='50%' didn't put all of the data elements into a circle.
<!-- id say I lucked out a good bit because I tried to use more HD4k/very nice & more modern icons. They seemed to ruin the red of the pokemon.ejs pokedex background and maybe ruin the whole whimsical cheesiness/lighthearted-Cartoon Style of the video game theme. -->
    While in the entry.target intersectionObserver observer.observe('db.pokemon.find()where:type='background'):
    We slice for pokemon name/url && hit: $.ajax('GET') let $(pokeImg) = document.createElement('div') $(pokedexScreen2).append($(pokeImg))
* We append the pokeApiImgData onto the pokedexScreen2, and trigger a jquery $(pokeImg).on('mouseenter') location.href = 'pokemon/show/#{name} // 
Does a non http request browser change. To take us to our pokemon/show route.

Might not need the history but didn't want a 3rd page and wanted this very out of the way, I also didn't want another big square screen staring back at us like index.ejs && /pokemon.ejs
<!-- localhost:7777/pokemon/show/magmar --> //if /show/POKEMON pokemon is in the database
we create a renderingObject:
<!-- let renderingObject = {
 name: `${name}`
img: `${image}`,
move: `[${moves}]`,
} -->
We first render with ejs templating: let pokemon = <3= renderingObject.name %> and get using ajax with our rendered elements $('.class') 
Parsing the move: `[${moves}]`, and cleaning up the data [removing brackets, spacing, adding .splice() .join()]
Theres a % 2 == 0 $(container).click that toggles between 2 containers being split and 1.
The left container has the moves api data, and the right container has the renderingObject.pokeData from the  pokedex2screen.hover
<!-- You can notice the pokeapi/pokemon/sprites.front_default&&.sprites_shiny_front toggle.  -->
Upon click, it shows a container with appended data from the /types/Damage_relations api.
The other Big challenge besides parsing .movedata was getting data to append once, while catching itself if you try to append the data twice.
It does this by accessing the .length of /damageRelations api and using an incrementing counter that resets at the equality of the damageRelations.length, allowing the array to reIncrement through until the .lengthCondition does: damageArray.splice(0, damageArray.length)

The timing functionality on this page is done within promises and isn't bothered by the container1 &&  .pokeContainer $('.container3') toggling. In fact going back and forth to damageRelations 

If you scroll the movesApi container to its offsetHeight -offSetTop limit, 
we access an fs.readFileSync() home made file with fsdata.description with data taken from pokemon/pokedex.com with the pokemon information. Scrolling up and down on the container appends that information onto the bottom

The routes/pokeballs are done non non statically as to kind of time in with the show.ejs pokemon [ front_default && shiny_front ] data toggle.

If you see <3 pokemon.id come up as UNDEFINED 3> ctrl-r / browserRefresh please and you can see it correctly:
There is also an .onkeydown function on the localhost:7777/pokemon/show/pokemonName page. 
WHen you press 1, it accesses the species/evolution chain API and appends it, alongside the from-the-game rareCandyItem, on the bottom of the page controlled by flex-display: center
If pressing 1 doesn't bring the pokemon up, you the browser refresh fixes that sorry :)

I wanted a proof of concept login, using passport.js/localStrategy to authenticate a user.
 the user data as said before is handled with app.use() right above the main-home-route: app.get('/').
The app is shown a little life, with the res.locals.currentUser thrown underneath, also said above.

<!-- arguably anecdotal but the 1st page with gengarButton and randomPokeDataSprites flying around the screen, The intersectionObserver and $(pokeImg)hover.res.redirectJr function: -->
<!-- localhost:7777/pokemon/show/i.e.Charizard is a could-be-called-calm & non-Obnoxious Very quaint and expecte design. -->
The auth/signup & auth/login were created with goal of staying equally non-obnoxious and calm 

<!-- index.ejs can .onkeydown 'keyH' H:         helpMenu suggestions:  -->
You can press I to sign in && O to sign out || index.ejs has a        entryGuard() function with a localStorage based conditional that sneaks you to res.redirect('/auth/signup')


<!-- 1 day before pushing the app: [thought of] -->
 .on('hover'()=> .hide() && .show() based captcha that uses ajax and does a similar localhost:pokemon/show/-> damageRelations dataAppend non dataAppendDuplicate conditional
 To unlock the .gear('hover') event that brings up the also hover based form: You hover onto the grid Container, append a pokeApi/pokemon.length-${n} randomPokemon within small range onto grid. 
 If a ghost is added onto the grid, It stays theme-consistent to the ghost from the beginning, and .detach() all of the appended data with the $('gridContainer').children().detach() // children being $('gridBox')
 If you click wrong, the req.flash('') changes according to the guesses, with the capcha goal being for the user/human to click onto an electric pokemon:

 'electric': being $('gridBox').src='github.com/sprites/url/pokemon/id/        .sliceforId $.ajax('GET')->pokemon[types].types.name = 'electric' conditional.

 /auth/signup Went with a nontraditional form since we have a lot of hovering going on, it seemed out of the way, and again we had our 2 screen pages so a page with a giant plain form seemed
 a little wiggle-roomly/things-unexplored for the theme. It's annoying to use and can easily skip an input, but you can hover onto the pokemon and see the $('input').hide()&&.show() toggling 

    localhost:7777/auth/login


 Can press O to logout mostly just to see the $(res.locals.currentUser).userName index.ejs->currUser.req.body.userName.$('pokedexContainer).append(userObject) User info disappearing and for the app.get('/')
 logout req.flash() message to come in through alerts. Also use alerts.ejs jquery to verify app.use() being triggered through every page on app.

    Have got a very basic if (e.clientY < 700) conditional that scales the form and friends up a notch. This page as well has some very subtle CSS'ing, with the form and pokeball getting a box-shadow that gently setTimeout('.box-shadow', '') // clear boxShadow
    The auth/login page was very calm

    Really appreciate the 3am thought of the CAPCHA 1 day before the app was being done. Totally brings lots of life back into it imo. Double So when mid-way through rushing through the captcha to add the 'ghost' type to the array.
<!-- I originally had the array for the captcha $('dataGrid').append(randomPoke)  as only having the names of the .energyCard from pokemon.ejs, so psychic. No poison or 'ghost' then I realized the 'ghost' would make sense if we could trigger the infamous 'haunter'.png back for a hello/farewell -->
    


  basic 1:M pokemon->type JOIN i wanted to re-work back into pokemon.ejs but didn't see it as being out-of-the-way. WOrked on capcha instead.

<!-- probably excerpt heavy but exercpts&learnings.md has lots of little findings  -->
Obviously a decent bit of object/api, but some javascript tooling / especially .slice() based URL/targeting/ thinking perspectives: 
# THESE FEW ARE SMALL BUT HUGE
* .slice and .includes() gr8 for setting conditionals around the two as seen with the checking background in id (i.e.): energyCardPsy = imgSrcPsy
* .split() .join() .replace. hunting&hunting&hunting like above for id parameters etc. jq & ajax and digging hard to reference jQ object. digging.

* almost forgot .push() and .pop()... because i didn't know/use map, which saves original order of array, My random function to pick .energyCard /background/fire (/grass): random function couldn't remember the order of the arrays so I ended up going with a system of:
1) .push()ing the element we just used to the end of the array. 2)  using the exactness of .pop() removing the very LAST element, as a way of clearing our array. 
This problem with the .energyCards came about from thinking i can specify which element to .splice(/background/fire) out of the array. incorrect.
  <!-- let removed = myFish.splice(2, 0, 'drum') as i triple check splice now i didn't know you could specify items at the end of it but thats to add into a new array.  -->

* didnt use as much as: { .slice('34')//urlId } but using elementCount.splice(0, elementCount.length) *** .splice() and .length to "truncate" an array.   
*               1) add to array upon behavior (scroll or click)*** 
*               2) conditional logic around our changes --->  possibly especially w/ $(this) / $(event.target)
*               3) truncate array can almost give us a setTimeout effect where if we can control the frequency of our array being interacted with, we can get an exactness out of it: 
                <!-- can see this being done in show.ejs where the hover damageRelations is based on a 7 count, which is restarted w/ truncate to loop through the damage relations again --> 
# ... logical tools that dont seem to have too much punch to them as you first step into javascript. especially arrays and truncate
