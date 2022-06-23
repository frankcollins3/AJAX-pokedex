# unanticipated learnings: // for 1 wrapping this app up & seeing: 6/6/2022.     
# two sixes... &  3 twos = 2...triplesequence. strange, 1:13am 6/7/2022 also posting the 669sequelizeId into the database. 
function parameters and forEach placeholders(poke) boosting eyepower. Boosting ability to see things not there kind of. 
*** [doing] [what][You][PLAN][IMAGINE] [YOUR] [app] [to] [do]***
<!-- wow after doing module.exports and doing type table am realizing user deserves to be called pokemon trainer. maybe for a quick react pokedex. Really have spent enough time on this that the canvas starts announcing things to you. It would be strange to say I thought of it, but the random idea popping out of nowhere to change user to pokemon trainer is the same kind of thing going on when coming up with the /pokemon.ejs page, and the damage_relations,apiEndpoints.increment container toggle becoming super obvious. There's a million ways to do a great, well themed pokedex app. -->

**lastly noticed**: I do wish I was more in the habit of doing kanban while doing this. 
I also noticed I benefitted from not doing wireframes: I only wanted to have 2 pages and didn't even mean to do the login/signup/show.ejs pages. 
I even tried to do the pokemon.ejs page as an actual pokedex as it is now and I wasn't able to do it how I saw it in my head. Only after getting better with flexbox/intersection did i give it 1 more try.
Wireframes super effective && can see why they count hvy on  typical full stack application where there wouldn't be so many possibilities in the features (poke/img/front_def) / data.sprites
Kanban & wireframes very valuable and lucked out with a seemingly perceively/loose/figure-as-you-go approach. 
                                                                            ***[   x   ] ***

1) randomInterval + randomLocation headScratch. 
almost forgot: had a huge problem w/ ajax and the random pokemon $(pokedex).click function
* 3 random pokemon 1 dataFetch.sprites.front_def. 
* the no-control-problem:  of successfully grabbing a random pokemon, successfully finding random location..
and a successfully-newRandom pokemon being stacked ontop of each other at the same random location that wasn't updating itself 
Can realize that even if you're doing random functions... + setInterval...:
#  using .css('') can output based on randomVariables, but be applied once in a very sticky way  

<!-- I am  -->
  // const { localStorage } = require('node-localstorage')
   <!-- dont wanna complain but i feel lucky for even console.logging(theDependencyImportingVariable) the first one i ever console.logged was app.use(pass-->

<!-- whole app is done. just put this last learning up while doing keyup functions: putting a semantic input tag to create another layer of reference one of the more creative solutions on this app.  -->
***without being overly cheesy i do appreciate pokedex/pokeapi for its whimsical-side because: where else would it be relevant to share an ajax post route with form <submit> data. ***
#  update! sharing that post route between ajax and form <submit> is an exciting challenge and feels similar to getting snagged by losing context of $(this) or $(event.target) 
#   [pokemon.ejs]->if (req.body.ajax == 'false') { this is the code that allows us to separate and create 2 contexts:
#   1) code that falls under this conditional. ajax is the <input name="ajax"> from our <input type="hidden">
# creating this semantic input that we can have alongside req.body.name req.body.id... we can have a tag that pinpoints us to the form <submit> button. Never been so excited to see green object data non caughtInPromiseError gray node 

  * even finding out like a month and a half after fixing it that you could've appending your specifiedRandomLocation into an array and done some conditionals around that array to make sure the next randomLocation wouldn't be any of the locations in the arry/locations we had used before.

  * feeling stuck and outOfTheLoopOnLoops wondering how to make expressions within a loop without having that expression run (2,3/nloop#ofTimes). You wouldn't run an expression in a loop. You'd have an array, push values to that, 
   realize jumping right into doing functions while waiting on loopedElements/.push to check for the array you can create an asynchronous situation of waiting for the for loop and the other js trying to handle conditional logic with values in an array that have yet to be filled, while waiting for the looping to finish. 
   It's like dealing with a ghost you look for console.log(typeArray) you .push a value into an array. you run conditionals based on that value. and since you're waiting on the loop you're hunting for a ghost

<!-- handling the last function of the project: (index.ejs)->randomPokeAjax(): this func now $.ajax({'POST'})posts the randomPokemon that is appended on openPokedex.click    -->
<!-- i believe using a map to check object keys/occurences against each other is called a hashmap. it's a small learning but I see a lot of the hate that white board interviews get: -->
<!-- if i'm interpreting it correctly: they're seen as semantic/arbitrary-Test.. that they're problems you won't see in the real world. 
It seems that using a hashmap like this/ & (seeing another stackoverflower mention big(O) solutions... It seems a lot of these whiteboard puzzles come from real world use cases?  -->

# req.flash() but more so res.locals.success/.locals.failure storing messages. 

<!-- seeing the freak exception to the rule that a variable can only have 1 variable. 1 variable can have different values if the variable is linked to event.target because each var is linked to different target. you can have let background = /bckground/fire & one background = /bck/grass and have 1 conditional checking for grass; with both of the backgrounds popping up under the conditional-->
that a variable can only have 1 value. was getting seriously check-mated
within a hoverEvent and seleting $(event.target) creating a variable within an event 
$(event.target) can create this insane freak problem where you have let background = 'value'
since you're in $(event.target).. this variable is actually tied to a particular element.
so if we're giving this element (the .energyCard .hover,)
each $(energyCard) can have their own background = 'fireBackground' with a different value for the same variable.
its like looking for a ghost if you craft conditionals around (event.target) having a certain background 
and you totally swear you just set it to psychic and now there's a run-Around.

my favorite part about the ghost is that:  ***the closer you get a way to the ghost the closer it gets to going away***
***mirage/charade*** there's something frustrating about 
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


<!-- quicker reflex for turning array data to str and back and forth and drilling string and array methods back and forth back to back. faster cycling
no need to look stuff up as huge amount of basics ingrained. Lot of thanks to $(event.target) and objects/api over and over.
-->
container3.on('mouseenter', async (event) => {
*** // console.log('event') l i t t l e s h o r t c u t s    // string to label the thing under it.  *** 
// console.log(event)

no DOM/require in EJS. cant loop through objects and automatically set all their images in the rendering object from index.ejs like we did in show.ejs  jq and ajax. specifically learned ajax for this. A good bit of:
 1) $(event.target) $(this).. losing reference of $(event.target) and having to respecificy it. // also no localStorage. 

?! ?! ?! as person whose cleaning up project that should've been done before: i can't relate to asking these questions. glad i was looking to search up a question on event.target like almost 30-40 days after using it for hours every day. no brag, i'm cleaning up a project as i said, but i can't believe these kind of questions are being asked.    
its almost like looking at a rake or a shovel and being confused. i see what ppl say when they say wanting to learn to code is like saying wanting to get good with a wrench. They're tools. It seems so obvious but these questions tell you someone has tool in hand hasn't even put material in tool/ put effort in. can understand that reddit-advice saying its insulting to ask a question without having tried some stuff / having examples of output of attempts
# 
How to use JavaScript EventTarget? - Stack Overflow
which values are available in event.target and how to access it
using event.target vs selecting the element - Stack Overflow
How do you use event.target outside addEventListner? - Stack ...
More results from stackoverflow.com
***innerText:"electric\ngrass"*** look for that thats how you use $(event.target) / console.log(mutationRecord) if (mutationRecord.target.innertext...)
#
 2)if you do an event within event: the $(event.target) gets lost without its own declared variable name. 
*** a little bit of context and slightly-higher understanding of where in the process you'd like to clean data / not-so-pretty strings/currentSrc ***

if ($('#dblFrom li').html() != `${doubleFrom[2].name}`) { if this code works we wouldn't have have to use mutationobserver
        dblFrom.append(dmgFromLi)
      }

* if (!$('#dblFrom').children().text().includes(`${doubleFrom[0].name}`)) {

# this code thats a line above checks the parents().children().text() to see if we appendTo() that exact same dataEndpoint (damage Relation) onto .container3
# we had another huge one where.. I got the idea while wrapping up the app to have the 3 randomAjaxPoke save to psql-db. Once I got it working, for some reason we were able to post the same pokemon twice. maybe because of the specie[0].type[0].name.type type url, but something was bypassing pokeid, name, or type, and allowing vaporeon to be water type twice with same id.
# did a mini-Deep-Dive on map: tool/bridge from array-to-object and was bouncing b/w many forEach, forloop, object.values() checking keys against each other.

b/w this being the very very last thing, with the <form> <input name="ajax" tag>  that changes the /pokemon.post/ to share it with the $.ajax({'POST'}) route.
w/ show.ejs problems: parsing the [moves] array (adding a <br > after .split(', <br>')) and dealing with similar damageRelations container3.onhover keep data from appending 2x.
Seemingly more mature problems as we go deeper into using the api 

  <!-- this is the code that solves the problem of being able to append the same data to the container over and over. 3 hours down. The mutation observer was a great way to get the toppestTobottomest scope of element-Access inMyopinion. nice to see $(document.body).children().html() work same as $('#dbl li).html()  -->

# the other problem of parsing the characters out of the array, setting the newline between the:
 .replace(/g, br>'newEmptyString') challenge was that the moves data came enclosed in [brackets that were rendered] and that everything was scrunched between a commma and then again with no space. 

# show.ejs the other huge problem was how to append data to a container upon behavior, but have a ceiling in place to limit the data being appended. 
# basically checking a parent element/containers if (parent.children().text()  )
      if (!$('#noneTo').children().text().includes(`${noneTo[5].name}`)) { 
         just check for the same bit of text/data ${half_damage_from[5]} youre about to append  
  name: `${name}`,
  img: `${image}`,
  type: dbResponse.type,        
  id: dbResponse.pokeid,          
  # move: `[${moves}]`     // separately from array-HTML-parse: getting this key value pair to work correctly was like a 4 hour ordeal tbh.
  # easy to see that digging very hard for this key-value-pair to work. helped lead to this: [newObject[`${startPoint++}`]] code that newObject[n] increments the bracket up. 


i see why people want to make frameworks and the almost-moments of logic . i dont feel super proficient but feel like i could teach someone all of this in like 30 days from no knowledge of js. esp with the mysterymaze first app. 
VERY: 1) maze game based on DOM 2) server-side pokeApi->psql .slice() .includes() you want to teach someone to want to dig as ferociously as possible for that tiny thing whether it's /fireBackground.jpg or 
$(event.target).target.innerText / mutationObserver 
esp having that zoom-out type thinking of knowing it makes total sense to call the mutation observer 
everything scroll-centric intersectionObserver. get down to eventObject entries.target. blabla API grinding.
  
  having a heads up that .slice(will be extracting/pulling characters from strings.) originally i heard of the tool and don't really feel like its obvious why you would use .slice and once you show someone: 

  i feel like:
  loops, objects, functions sound like three separate confusing things at first.
  and if you knew:
  * poke api deals with ApiEndpoint->pokemonData objects. 
  * we use loops to flip through our data. 
  * we use functions 
  could be said that if every node is a noun  functions are the verb

  ***have been same person/you-can-totally-see:
  the frustrated culture someone spending 2 weeks theorizing about loops, never trying anything in terminal. 

   heard of ajax and regex on ytube never paid attention 
  but ajax came to mind while wanting to hover on .pokecardImg and do a data fetch and change background to shiny pokemon.
  Any1 who gets some verb/hands-dirty around ajax and deepening into a scope/ losing reference of $(event.target) unless specified $(fakeThis) = $(event.target)
  start wrestling for control 

  * i see why in bootcamp they tell you: by the time the bootcamp is soon-to-end, you'll really feel like you just put it all together:
  I just found out that you can find the evolutionChain member of the pokemon from the /api/v2/pokemon/

  i recall a reddit comment of someone saying:
  "computers is a fair fight"
  another redditor quipped and said its nice the computer follows you since the "kind of code" they do makes the computer do dumb stuff.
    it's just a gentle sneer: but I see where the "humblebrag" could come from:

        the farther you get pushing boundaries: like i.e.
        using an ajax call $(event.target) and using an event to trigger a change
        and using that same event to trigger a new change on a new element while leaving first element out of picture...
        you can see points where computer wrestles(and has favor) against you in controlling whatever you're trying to do. 
        Thats also a situation where it made sense to just throw an id onto the .energyCard from pokemon.ejs 
        and using the  if$(element.id) and doing anything within an event to trigger some kind of change to 
        release the mutation observer/have some $(jqObject)

# signup.ejs page CSS: I wanted to also have a few messages pop up as well from .flash() someone mentioned their favorite part of playing pokemon was there was no internet and it was a rush to explore and find more of the pokemon that you didn't know existed. Maybe it's a stretch, but I like how the signup.ejs page doesn't tell you to fill out the form and you can pretty easily see there is something on the screen and some kind of text-Field. I wouldn't say its redundant to tell you to fill it in, but it doesn't seem too crazy to leave the advice out. I also think this page (did it last after show.ejs) really lucked out in how some of the stuff going on was annoying/semi-logical to set up. They're really calm pages that stay out of the way of the 2 screens with intersectionObserver and a pokedex screen layout.



  <!-- i see why the reddit comment of saying you better have a good reason of why you're using jquery being a thing. funny as a non-documentation reader it says right on jquery.com that it'll make learninng javascript harder if you don't do them 1 at a time. I bet many ppl dive jq js same time so stuck. having no NODE / DOM in the app was a major eureka  -->

// this app made me see the culture of why computer folks are/prefer-to-try-to-be fast. 
<!-- Fairly quickly on this app, using all the basics: looping through object, object-property based conditionals, & so on was very easy/low-thought/low-frustration-impact -->  -->
Even fact that  sitting for longer time is more easy because it causes less excitement/annoyance in / seems to cost less work and thought
  * the faster you get. the longer you want to do it (to an extent) but you're always a step away from realizing you're like 4-6hours down the hill on some unexpected obstacle. 

  a lot of my knowledge was spent totally stuck and trying over and over other tools to make it work and the everything-baseline-tide just rising slowly higher from all the error-reps. So much familiarity and quickness out of trying trying trying until you realize there's a super simpler solution in your face.

  Especially using mutation observer. since tbh i still had trouble targeting 1 element if you can't see me going through $(document.body) preferred method.
  if i was better with mutation observer some of this would've been more precise and clean and less antiDry huge function.

  <!-- i still credit that ole' wd40 trick of counter="" wholeCounter.length its the forForagingSquirrel trait of searching for 1 acorn and that 1 little nudge of any squeakiest-tiny detail giving you full chance to pounce with all you've got: .slice() jqObject[0].parameter.  -->
  *update* using splice now like: if (wholeCounter.length > 4) { wholeCounter.splice(0, wholeCounter.length)} is very reflex now and feels like opposite of using slice. it's easy to remember when it'd be such a hard tool to pinpoint when to use. 

  everything is layer-like. losing context of $(event.target) in ajax calls.
  start with cd change direct ls go one level in on the terminal
  thinking of (..require)the ..dots going back. 
   thought i'd get most api experience from pokeApi it really came from entries.target $(this).target &friends
  the assumed files of /views/ + assumed public.join /css/img   

        its not a coincidence/accident. that I tried to get the pokedex screen to work with a regular background and couldn't get it to work. As I was got better with the intersection observer. I tried again a month later with the background on pokemon.ejs with the pokedex screen and it worked perfectly. I can see the baseline of flex-end/center using flex to really control the screen.
          I didn't anticipate when trying to set the background that I"d have a more reflexive, don't-have-to-think-of-it control of the screen and that the screen could sit right center just as it was imagined mentally.

* another learning: javascript promises/setTimeout + .hide() .show() very easy to do visual toggles and have timing functions behave undisturbed... 
!!!! SIMILAR TO HOW AJAX LETS YOU GO BEHIND THE SCENES AND FETCH DATA/MAKE CHANGES WITHOUT ALTERING BROWSER LOCATION.... 
* its (cool?) to toggle the containers in/out of visibility and the promise to do as promises 

# the only only only code i completely ctrl-c copied was for the regeX to pull the ints from the character.
# about 4 months/4hrs a day since jan1/2022: 
<!-- i never really wondered if all of those little ajax based features were gonna work or not but everything worked out 100% 100% as imagined. 


<!-- PROBLEM: just like our append damageRelations to container on hover (/show.ejs): we're having trouble with the database:  our 3 random pokemon from closePokedex.click are appending, amd adding to the psqldb... but somehow (and i suspect it has to be do ${pokeType} being like: $[species[0].name)) being able to slide through findOrCreate({ somehow vaporean was added 2x }) -->
<!-- 1) If we can setour randomPoke $.ajax to not include the type, and have it only check up against findOrCreate({ name: ${pokeName}}) instead of against name, type, and pokeid, (with more to squeeze by on)-->
<!-- 2) maybe we can grab the randomPokemon from .closePokedex.Click, append to page, add to db only by name, and have an update route later that eliminates dbPokemon from the database if they dont have values for type= or pokeid  -->
    // hmm, thinking now on it: this solution (if it works) is similar to the idea of adding the <input name="ajax" on index.ejs pokemon.forEach(=> <form><input type="name" type="id"> </form>)
    // if we can save these new pokemon from this randomPokeAjax method w/ a detail that stands them out from the rest:   like no pokeid no type... we can do conditionals on the exceptions.
    
patterns in using css / theme-ing :
* while wrapping this up tbh, this has more of a mysterymaze type feel to it than i thought.
my vanilla javascript projects:
* rockPaperScissors/sockApronSlippers   the ticTacTicTacToe Game,   kinda Skyfight but not so much but especially the scooby doo maze...
there's a certain kind of luckiness with the theme-ing in mostly: sockApronSlippers and the scoobyDooMysterymaze
 is aiming for creativity that could spite a lack/gap in the logic.

 This very App totally piggyBacks off of the easily explored infinity of pokeApi (apiData for images) and receives the same luck in theme-ing being accidentally tuned up to 1000% and finally with some logic to back it up. Lastly, I remember a reddit post asking others when they got into coding?
      it was interesting seeing some1 say they got into HTML with geocities and making random websites.
      definitely not getting into computers early, but I feel i've satisfied a huge itch of taking some extra months on really refining something as whimsical yet basics-boosting as pokeApi. Nice to have a project that 

      and it was nice on this .show.ejs page to work with $(document.href) and trying to link port:8888 from urlHref with the /serverPort. To feel in the brain the same excitement while looking for the "8888" numbers. It was nice to feel an inner passion of hunt searching for this arbitrary 8888 

  *** I love love love how gently boundary-skirting this app took itself, while not being all over the place with any weird things going all over. It's fairly neat & non-obnoxious. 
  sockApronSlippers was an app that showed me an obvious change can be right there in your face and 
  ***

      have super simple journal course site setup and 
      i super appreciate knowing that with github you can make a repo to store apiEndpoints for icons. to make little icons that 
        but I'd also like to do a simpl
Good night Good day. Pretty simple app. Pokedex enough for most. 

while i'm not saying i'm an expert...  using the observers makes me think of this article from long ago:
https://zerotomastery.io/blog/learn-to-code-for-free/ (not the original but thats okay)
using mutat.Observ.+interSecObserv. makes the part about catching up to "top-performers"/have realistic place of closing gap to senior level (not that this project does)
  But the part about learning tools at the same time as other people who have longer time+morexp.. and that there is a hidden equalizer/fairness in learning new tools.
Personally, as said b4: $(this)/$(event.target) taught me way more on object/api than pokemonApi did.
IntersectionObserver is a great place to learn about: a configuration/optionObject (since dbConfig can be object)
with entry.target.parameter, callback functions, and data->Container control

recall another reddit comment as well of a person saying: pay super extra attention during all language surrounding "this". excuse me for all of these. This app made me understand many of those little cliches people speak in when trying to help new self-studiers avoid pitfalls, especially the hugest of them found in perspective
especially since promises/this /constructors can come at a time you might accurately say you have a confident grasp of javascript.
-->


# CHECKLIST!!!!!!!!!
navbar with randomizer function gastly, haunter, gengar onhover with ajax [x] 

app.get('/') regular index use req.query open pokeball for details. pokeball routes header

app.get('/pokemon/index'): ORGANIZE the page by pokemon type. Each pokemon has a type as well. pokemon search random pokemon by type []

app.get('/pokemon/show') access evolve form on hover.[X] <!--used keyup instead -->



optional music [] // <!-- nevermind dont want anything else in the way. -->s

energy card favicon [x] <!-- >  
Eevee Randomizer []
Pokeball Home Routes [x]
<!-- DayCare/Trading/Give Berries    nevermind. Dont want to do this -->


"where to place common functions in express js/node" important functions  function common() { common.prototype.method1 = function() {}   }  IMPORTANT FUNCTION
<!-- POKEMON.JS  accesses data.pokemon.findAll().then(response/pokeInfo => { for (const pokemons in pokeInfo) { console.log(`${pokeInfo[pokemons]})`) raw:true } can't access sequelize object from pokemon.findAll() without raw:true being in the response/pokeInfo as a key:value/raw:true pair              }-->
                Pokemon energy cards that classify all of the pokemon by type. The pokemon themselves also have types. https://github.com/ManzDev/twitch-solar-system.git this repo has animated solar system 
                DESIGN ->  have the pokemon types laid out. model.Type.hasMany(model.Pokemon) model.Pokemon.hasMany(model.Type)
                pokeball post route [] that accesses currentPokeObject. does findOrCreate. references its own place in currentPokeObject by name or id, and calls axios with that axios.get(`/api/pokemon/${pokeInfo[pokemons].name}`) can't reference no DOM will have to use Jquery. can't use axios has to use AJAX.        


<!-- POKECENTER.JS -->
                DESIGN -> 
<!-- give pokemon berries pokemonsBerries[] nope didn't go with.
access API for evolve form [] on hover. PUT A FUNCTION  in the onclick = "checkAxios" in the pokeball  --- pokeball is post route that findOrCreate({ check Object for pokemon and push to currentPokeObject}) -->


# CHECKLIST**********
*******************************************************


# GOTCHAS!!
biggest Gotcha is Javascript context. 
$(event.target) becoming unaccessible within a function, if you go deeper into an ajax call, without respecifying $(event.target) at the top. 

not as much a gotcha but a learning point of: 
1) I thought the only barrier to javascript in .ejs was <% let hi = 'hi' %> icecreamtags/ejs tags
2) you can do vanilla js in the <scrpt> tags.
 more importantly, the res.render('index', {pokemon})


// methodOverride no native delete data: <form action = "/pokemon/<?_method="DELETE"method="POST"> v.s. <input type="hidden" name="name" value="<%= pokemon.name %>"
// check the dom/console & the actual elements to see the forms individually moving elements. 
params: { name: 'bulbasaur' }
query:  { _method: 'DELETE' }
// thought you'd need a route for delete.
#                if (newPoke[0].count > 1) {
#               const dupe = await data.pokemon.findOne({      // i hope findOne() is a literal thing because I only want this to delete the extras.  * also was worried as I typed this that 
                if (dupe) { // love to see that. if (dupe > 0) / if (!dupe = null) / if (dupe !== null) all the same thing.
#                  await dupe.destroy(); // deletes the row
                }
<!--   < % for (let i = 0; i < pokemon.length; i++) { %>
  // interesting you can do console.log('hi') here.
  // but the context of the javascript up there is lost. pokemon.forEach from res.render('index', { pokemon }) is lost.
  // context is also lost in jq doing $(event.target) unless you respecify $(event.target)... you can no longer access event.target while in an ajax call unles it's declared within top level of function: clickedElement = $(event.target)
< %    }   %> -->



<!-- 1) trying to loop through db.pokemon.findAll(response and for in loop, and putting res.render in to work with the for in loop... you can only call 1 res.render though, and the loop would call it multiple times, but then you can't access the for in loop with rendering object. I was trying to loop through the pokemon response and create variables from the object keys. I wanted to use a conditional statement to evaluate which data had evolve forms, but it wasn't directly accessible from the main response object. I was going to grab the pokemon, and use their object keys to create automatic, from-the-loop, independent variables from the:

   pokemonapi.response.data.results.name and to recheck the pokemonapi/evolution-chain endpoint so that, while still in the for(in) we can res.render 1 set of pokemon objects for pokemon with no evolve form, and the second pokemon object with an evolve form so that when you hover them, they will use ajax to access the api and show the evolve form on hover. NO DOM point of object reference in express/nodejs+ as far as I can tell. 1 res.render per route makes for a thumpin' good challenge. 


    2) I checked Simone's/Another example to see a specific-details object for res.render and it was for /:id route for 1 poke (details page) with axios call
    details = {
        name: response.data.results.name // axios call for 1 pokemon        V.S. 
    }

    3) Use data.pokemon.findAll and then lose access to the axios.get(data.results.sprites)

    4) pokeball post route idea but then the post route crashes the page with no res.redirect / res.render
    creating ajax call to interact with axios.get(data.results.sprites)

    5) how to do onclick function with ejs variable. (PROBLEM: no dom ejs)

    6) similar to the no DOM + only 1 res.render issue FROM number 1 where you access pokemon api

    7) $('#h1').hover(()=> { let pokeName = $('#h1).html()  }) 
    $.ajax({
      method: 'GET', url: `pokeApi/pokemon/${pokeName}` is returning
      https://pokeapi.co/api/v2/pokemon/%20bulbasaur    %20 
    })

    8) doing URL chopping and rebuildiing line 540 - 630...
    Breaking down the github.com/sprites url to get the id out of the end of it by cutting .png off both with slice 
    rebuilding (with that id taken from the github sprites url) the poke.api/pokemon/${githubUrlId} poke api from the main res.render('index')
    Taking nthat new api endpoint and accessing with ajax,... .. doing MVP ('.card').css('border', '2px solid green')...
              ***** SETTING THE POKEMON TO BE SHINY WHEN YOU HOVER ON THEM ON THE MAIN INDEX.EJS res.render('index') all of them become shiny. 
              plan is to use it on the show route. 
  MAJOR VICTORY specifying: let clickedELem = $(event.target), since event.target itself was losing context/targetability within $.ajax({. using .slice and cleaning up URLs/string was pretty difficult and I learned AJAX/jquery almost entirely for this sole feature of rendering the shiny pokemon on hover. The problem was that all of the ('.card') would turn shiny and how to seperate and apply changes only to the selected element took a bit of time and a lot of firing away with MVP basic changes 

      how to access <link rel="icon" = "*nodeAssumesPublicFromExpressEncoded*/css/.energy-card.png
      wanted to create:
      let leaf = <link rel="icon" href="/css/leaf.png"> let fire = <href="/fire-card.png"> let thunder = ...
      but there is no point of constancy/no way to access the link rel once they are established.
      You can't re-access the <link rel> or call it in function or use string interpolation or anything to sneak a way of referencing it as far as I can see. I see why React/Components/ is popular.
      I think a project/copy-cat-language of expressJS+DOM would be super neat. I wonder how much node itself would get in the way of that or if you could make an express Javascript with document object window points of reference. 
) -->


<!-- setting the poke form up and using name="<%= renderPokemon.name %> instead of name="name"  value="<%=renderPokemon.name%>-->

# LEARNING RESOURCES!
<!-- favicon:

                    https://stackoverflow.com/questions/11658035/unable-to-change-favicon-with-express-js   * favicons aren't stored in cache
1) Open Chrome/the problematic browser
2) Navigate to the favicon.ico file directly, e.g. http://localhost:3000/favicon.ico
3) Refresh the favicon.ico URL by pressing F5 or the appropriate browser Refresh (Reload) button
4) Close the browser and open your website - voila, your favicon has been updated!

https://mobiforge.com/design-development/adding-favicons-in-a-multi-browser-multi-platform-world  *** BROWSERS CACHE THE FAVICON. if you want multiple favicons you have to prevent this.

https://www.geeksforgeeks.org/how-to-change-favicon-dynamically/       ** button to change favicon from red to green

app.use(express.static) is based on  :    NPM I SERVE STATIC

<!--  -->

MORE STATIC FILE info but w/ importing CSS:

    <link rel="stylesheet" type="text/css" href="css/style.css"> we don't need href 'public' because its static in the express.static code.




 -->

<!-- SCROLLING implement a scroll-to-load-more data. to have 1 pokemon on the pokedex at one time from the array of pokemon objects fetched from axios.  -->
https://stackoverflow.com/questions/61708424/how-to-implement-a-scroll-to-load-more-using-node-js-and-mongodb
<!-- pokemon page big array of a punch of pokemon:  click or hover on a pokemon and show its evolve form in its place.
linking API to psql data table so that on the res.render('index', { pokemon }) we can click or hover on a pokemon and show its evolve form in its place and possibly have a transition animation that will accomodate that. 
 -->
<!-- WEBKIT and SCROLLBAR -->
 https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar

<!-- dynamic variable... looping through object and to try assigning variable to every key -->
for (let i = 0; i < response.length; i++) {
        //  console.log(response[i])
      newPokemon[ "pokemon" + pokeinfo[i] ] = [i]
      
      console.log(newPokemon);
      console.log(newPokemon.name);
      }
## dynamic variable ... 2
  data.pokemon.findAll().then(response => {
    <!-- // let newPokemon = [];    or letnewPokemon = array() -->
   let pokeinfo = response
      // for (let i = 0; i < pokeinfo.length; i++) {
      //   //  console.log(response[i])
      // // newPokemon[ "pokemon" + pokeinfo[i] ] = [i]  this creates dynamic variable which don't have console.log(values)
   
# while loop
    let index = 0;
    while (index < pokeinfo.length) {
      console.log(pokeinfo[index]);
      index += 1;
      let 
    }
<!-- // messageArray = ["hello","how are you?",
//                 "how's the weather",
//                 "how's the family?",
//                 "Where do you live?"];
// let index = 0;
// while(index < messageArray.length){
//   console.log(messageArray[index]);
//   index += 1;
// }
// OUTPUT:
// “hello”
// “how are you?”
// “how’s the weather”
// “how’s the family?” -->

# for in
<!-- for in in a sentence -->
  const restaurants = { burger: wendys, taco: tacobell, fries: checkers };

for(const food in restaurants) {
  console.log(`${food}: ${restaurants[food]}`)
}

   for (const pokemon in pokeinfo) {
      console.log(`${pokemon}`);
      console.log(`${pokemon}: ${pokeinfo} ${pokeinfo[pokemon].name}`)

    }    
<!-- let currentPokeObject is reference to double have a way to access names. you can make an array to push new entries into and a button to automatically check & update the list.
  -->
let currentPokeObject = [
        blastoise = { response: 0, name: 'blastoise' },
        pidgeotto = { response: 1, name: 'pidgeotto' },
        rattata = { response: 2, name: 'rattata' },
        pikachu = { response: 3, name: 'pikachu' },
        pichu = { response: 4, name: 'pichu' },
        machop = { response: 5, name: 'machop' }
      ]
      for (const pokeNames in currentPokeObject) {
        console.log(`${pokeNames}: ${currentPokeObject[pokeNames].name}`);
      }
                        <!-- this is the terminal output for (const pokemon in pokeinfo) showing the pokemon objects from data.pokemon.findAll().then(response => 
                        pokeinfo = response

    for (const pokemon in response) {
        console.log( ${pokemon} : ${response} ${response.name})
    }                    
     ) -->
<!-- 0: [object: sequelizeInstance:pokemon],[object: sequelizeInstance:pokemon],  -->
<!-- 1: [object: sequelizeInstance:pokemon],[object: sequelizeInstance:pokemon],  -->
<!-- 2: [object: sequelizeInstance:pokemon],[object: sequelizeInstance:pokemon],  -->
<!-- 3: [object: sequelizeInstance:pokemon],[object: sequelizeInstance:pokemon],  -->
# raw: true THIS KEY VALUE PAIR GETS RID OF [object sequelizeinstance] AND ALLOWS YOU TO USE console.log(`${response[i].name} is Number ${response[i].id}`);
<!-- 
                    data.pokemon.findAll().then(response => {
                        raw: true;
                    })
 -->
Can I apply that to all queries globally? – 
You can define it while creating the connection. Something like const sequelize = new Sequelize('connectionUri', {   define: {     raw: true    } });. From the docs here – 
Please not this does not work with eager loading nested entities. – 
Sanket Berde
To apply to all queries, use var sequelize = new Sequelize('database', 'username', 'password', {query:{raw:true}}) as mentioned in stackoverflow.com/a/26228558/1802726. – 
<!-- 
Model.findById(1).then(data => {
  console.log(data.get({ plain: true }));
});
Additionally if you just want to print out the object you can use the .toJSON method.
Model.findById(1).then(data => {
  console.log(data.toJSON());
});
 -->
     for (const pokemons in pokeInfo) {
      console.log(`${pokemons}: ${pokeInfo[pokemons].name}`)
    } 
    console.log(`${response[i].name} is Number ${response[i].id}`);
# TO ACKNOWLEDGE ALL THE response/pokeInfo.name.... to access the object with for in:           FOR IN with response/pokeInfo
for (const pokemons in pokeInfo) {
      // console.log(`${pokemons}: ${pokeInfo[pokemons].name}`)        
 <!-- object template to render data.pokemon.findAll(response => .. won't work because it's an ARRAY! of (response/pokeInfo objects  res.render needs OBJECT --> 
    let renderingObject = [         
      pokemon = {
        name: `${pokeInfo[pokemons].name}`,
        id: `${pokeInfo[pokemons].id}`,
        /*                                      
        showName: () => {             //was going to use a function to data.toJSON
          // data.get({plain:true})
        }
   <!--     -->
      }
    ]
    console.log(renderingObject)
    
    }
router.get('/', async (req, res) => {
    const pokeFavorite = await data.pokemon.findAll(    // need await to (for in) loop can have material to work through. for in will start looping without the data available.
      {order: [['"createdAt"', 'DESC']]}  
    ).catch(() => null);
    // console.log(pokeFavorite)
    if (!pokeFavorite) {
      res.render('error')
    } else {
      for (const pokemons in pokeFavorite) {
        // console.log(`${pokemons}: here we are again with ${pokeFavorite[pokemons].name}`)
       preRenderObject = {
        // name: `${pokeFavorite[pokemons].name}`
        name: `${pokeFavorite[pokemons].name}`,
        id: `${pokeFavorite[pokemons].id}`
      } 
      //  axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeFavorite[pokemons].name}`).then(response => {
      //     console.log(response)
      //   })
      // console.log(preRenderObject);
      let renderObject = {
        name: `${preRenderObject.name}`,
        id: `${preRenderObject.id}`
      }
    console.log(renderObject)
      }
      let pokeFavoriteObject = {
        name: `${pokeFavorite.name}`,
        id: `${pokeFavorite.id}`
      }

      res.render('pokemon/index', { pokeFavoriteObject })
    }
  })
<!-- console.log single object variable v.s. in a for in loop with `${pokeResponse[poke].name`} -->
router.get('/', async (req, res) => {
   await data.pokemon.findAll().then(pokeResponse => {
      // console.log(pokeResponse);
      const renderObject = {
        // name: `${pokeResponse.name}`,
        // id: `${[pokeResponse.id]}`
        name: pokeResponse[1].name,
        id: pokeResponse[1].id
      }
      for (const poke in pokeResponse) {
        // console.log(`${poke} ${pokeResponse[poke].name}`)
        let loopedObject = {
          name: `${pokeResponse[poke].name}`,
          idd: `${pokeResponse[poke].id}`
        }
        console.log(loopedObject)
      }

      res.render('pokemon/index')
    })
})
# post request and staying on same page. AJAX! .. ran into problem using pokeball post route to access axios api. no res.redirect and the page crashes eventually. I wanted to change the pokeball to a function that would .class.addClass/.removeClass to make an axios.get('/pokemon => response.data.sprites.front_default call)            ***** AJAX is a tool thatll let you make a simple request while not loading the whole page. 
https://stackoverflow.com/questions/50702693/how-to-stay-at-the-same-page-after-submitting-post-request-with-express

https://www.youtube.com/watch?v=wdvruTuWvW8 -> ania kubow explains the twitter notification updating without page reloading as example for AJAX html requeset.
<script>    // this is an example of a working ajax call. cons.log(this.response); didn't work 
    const showCountries = () => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://restcountries.com/v3.1/all', true)

        xhr.onload = function() {
            if (xhr.status == 200) {
                // console.log(xhr.responseText);
                let countries = JSON.parse(xhr.responseText)
                console.log(countries);  
                // for (let i = 0; i < countries.length; i++) {
                //     consol
                // }
            }
        }
        xhr.send();   //this won't work unless the xhr.send() / request.send() is on there.
    }
</script>  
* trying over n over to get the button to reference its <%=renderPokemon.name>. <button>Enter/button> set renderPoke -> text 
  Going to try console.log(req.body) and see if the renderPokemon.name / text of button is referenced by the object sent on submit.
# importing functions


# ejs can't access DOM for .classList.Add
in node, global scope is referred to as global. in a web browser javascript global scope is window.document.html.body
https://stackoverflow.com/questions/41419658/ejs-conditional-statement-change-css
<%
let cssClass = {
    funny: {
        Yes: "success",
        No: "a"
    },
    happy: {
        No: "b"   
    }
} 
%>
Then you should just output value in template:

<% dummies.forEach(function(dummy) { %>
   <div class="panel panel-<%= cssClass[dummy.type][dummy.sure] %>">
   </div>
<% }) %>

# dont forget about back-to-basics/inline-styling:
  <li class="list-inline-item h6" style="color: red"> // thisll turn the pokemon text card from app.get('index')
<!-- https://www.npmjs.com/package/inline-css NPM inline-css always use new code. -->

# object iterables    [Symbol.iterator]
    let tempArray = [60, 69, 77, 99]
    for (let numero of tempArray) {
      console.log(numero);
    }   

let tempObj = {burger:'wendys', taco:'taco bell', fries:'checkers'}    
    for (let numero of tempObj) {
      console.log(numero);
    }   // ERROR tempObj is not iterable

tempObj[Symbol.iterator] = () => ({
  next: function next () {
      return {
          done: Object.keys(this).length === 0,
          value: Object.keys(this).shift()
          }
          }
        })
      for(key in tempObj){
      console.log(key)
  }
   <!-- pokemon[Symbol.iterator] = () => ({
      next: next = () => {
        return {
          done: Object.keys(this).length === 0,
          value: Object.keys(this).shift()
        }
      }
    }) -->

for (let[key, value] of Object.entries(pokemon)) {
      console.log(key, value);
    }

    // myNewObj = ((k,v)=>{o={};o[k]=v;return o;})(myKey,myValue); stack overflow suggested arrow funcs with anonymous evaluation. ((k, v) => {o={};o[k]=v;return o;}  )


<!-- random cards -->
const cards = ['king', 'joker', 'queen']

    function getCard(){
  const randomIndex = getRandom(cards.length);
  return cards[randomIndex]
}
console.log(getCard());
//'Queen
console.log(getCard());
//'Ace
console.log(getCard());
//'Ace'

<!-- random pokemon THIS IS FOR EEVEE randomizer--> 
router.get('/', async (req, res) => {
    const pokemon = await data.pokemon.findAll(
    {order: [['"id"', 'DESC']]}
    ).catch(() => null);

  if (!pokemon) { // if NO pokemon:
    res.render("error");
  } else {
  const getRandom = (max) => {
    return Math.floor(Math.random() * max) // more of a template function vs specifying pokemon
  }
  function getPokemon() {
    // console.log(pokemon)    // MVP out and find out why await db.pokemon.findAll() was being weird. is it even necessary with the overarching app.get(pokemon/response => ) reference
    const randomIndex = getRandom(pokemon.length) //get random function x  pokemon.length
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`).then(response => {
      // console.log(response.data.results.name);
      console.log(response);
      // const name = response.data.name

    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      console.log(name);

    })
    return pokemon[randomIndex]
  }
  getPokemon()


  # CSS 
  <!-- BEM naming conventions -->
    .layout { -webkit-column-count layout!
      width: 50%;
    /* -webkit-column-count: 1 !important;
    -moz-column-count: 1 !important;
    column-count: 1 !important; */
THIS APP LOOKS GOOD AT SCREEN FULL SIZE or even 1000 pixels flat. 

  # CSS END 
  # NO DOM ! shall have to use npm i jquery
  <!-- Jquery and JSDOM bootstrap/init   npm i jquery / npm i jsdom      -->
var jsdom = require("jsdom");      
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);
         THIS IS THE CODE TO ACCESS A PIECE OF DATA AND BREAK IT DOWN BIT BY BIT TO RENDER
$.ajax({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
    dataType: 'json',
}).done(function(data) {
    // console.log(data);
    // console.log(data.name);
   console.log(data);
   $('#result').css('border', '8x solid pink');

//    $('#result').html(data.name)
const dittoName = data.name
    let doThat = $('#result').append('<p>' + dittoName + '</p>');
    doThat.css('color', 'orange');
    //    $('#result').append('<h3>' +data+ '</h3>')
    // $.map(data, (ditto) => {
    //     // (ditto, i) hol'up
    //     console.log(ditto[1]);
    //     // $('#result').append('<h3>' +post.name+ '</h3>  ')
    // })
    // console.log(pokemon);
})

# $('.card-img-top').on('mouseenter', (e) => { // this is targeting the imgicon
  // $('.card-img-top').hover( (e) => {
// $(this).css('border', '8px solid green');
let clickedElem = $(event.target)             // if i'm not mistaken I was losing the event.target context within the ajax call. only when specifying it like this was I able to access this code and apply changes only to the selected element. every $('.card') was turning shiny.
// $(event.target).css('border', '2px solid black');
// bullseye.slideUp()
# $(event.target).hover( () => {
  // $(event.target).css('border', '5px solid orange');
  let pokeName = JSON.stringify(name); // this will pop up as " ivysaur"/" charmander" with trailing white space
  let imgUrl = e.currentTarget.currentSrc // this digs into the event object/parameter amd returns the URL from github.com/sprites api NOT POKEAPI!
  let idOfUrl = imgUrl.slice(73)  // this starts and includes the URL right after /pokemon/#3.png this starts slice at 73rd character. leaving /#3.png
  let urlNoId = imgUrl.slice(0, 73) //this code starts the extracted string from 0 and ends at 73 so we have the slash.
  var numberPattern = /\d+/g;   // https://stackoverflow.com/questions/1183903/regex-using-javascript-to-return-just-numbers regex code from this question
  cleanId = idOfUrl.match( numberPattern ).join([]);  //this code joins the regex and takes all characters besides ints out and returns int.
  // console.log(`this is the ${cleanId}`);
  // let pokeUrl = `check out ${urlNoId}${cleanId}` // this will make the exact url we had before without .png
  let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${cleanId}`
  // console.log(`dont forget this is the ${pokeUrl}`);
  # $.ajax({
    method: 'GET',
    url: pokeUrl,
    dataType: 'json'
  }).done((data) => {
    pokemon = data
    // console.log(pokemon);
    let shinyImg = pokemon.sprites.front_shiny    
    // console.log(shinyImg)
    clickedElem.attr('src', shinyImg); // this is accessing that image that renders < % = sprite/image %> and setting <img SRC = " ... "
    // this is accessing that image that renders < % = sprite/image %> and setting <img SRC = " ... "
  })
})


<!-- SERVER SIDE ^^ CLIENT SIDE vvvv -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script>
console.log( $("p").get(1) );
</script>

  https://stackoverflow.com/questions/14264429/how-to-use-jquery-installed-with-npm-in-express-app
   For generating HTML, manipulating DOM inside a String, etc.Take a look at this lib if you want to know more, it is a implementation of JQuery for the server side:
                  *********github.com/cheeriojs/cheerio*************
https://medium.com/fbdevclagos/how-to-use-jquery-on-node-df731bd6abc7

npm i jsdom -> node debugging https://nodejs.org/en/docs/guides/debugging-getting-started/ 
<!-- JQUERY commands and changings -->
//     // $(".card-title").css( "border", "10px solid brown" );
//     // $( ".card-title").innerHTML.get();
//         // $( "ul.topnav > li").css( "border", "3px solid green");
//         $("card-img-top").css( "border", "5px solid orange");


jsonplaceholder.typicode.com // placeholder for JSON

ACTUAL WORKING XML / AJAX CALLS.
 const showCountries = () => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://restcountries.com/v3.1/all', true)
        xhr.onload = function() {
            if (xhr.status == 200) {
                // console.log(xhr.responseText);
                let countries = JSON.parse(xhr.responseText)
                console.log(countries);  
                // for (let i = 0; i < countries.length; i++) {
                //     consol
                // }
            }
        }
        xhr.send();
    }
    const openPokeBall = () => {
        // if (renderPokemon) {
        //     console.log(renderPokemon.name);
        // }
        // let pokeRequest = new XMLHttpRequest()
        // pokeRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/squirtle', true)
        console.log(req.body)
        pokeRequest.onload = () => {
            if (pokeRequest.status == !null) {
                console.log(pokeRequest.responseText);
            }
            pokeRequest.send()
        }
    
        // access the pokemon api and render a <div class="pokeImage" with renderPokemon.data.results.sprite
    }
                        JQUERY SUPER GREAT!
                        
                        
    $.ajax({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
    dataType: 'json',
}).done(function(data) {
    // console.log(data);
    // console.log(data.name);
   console.log(data);
   $('#result').css('border', '8x solid pink');  
   <!-- checking CSS is a gr8 way to see if we're still targeting correctly. -->
trying encodeURI 
    $.ajax({
      method:'GET',
    url: encodeURI(`${pokeUrl}`),
    })

  # 2 AJAX CALLS in 1!!!! /pokemon/ivysaur works but /pokemon/${$(this).html() DOESNT!}\
  # $(this).text() or $(this).html() v.s.        let name = $('#card-title').html().trim()   / $(this).html().trim() 
  # this.html() adds trailing white spaces to the string. "venosaur" becomes " venosaur" I was trying to use slice or replace to get rid of the
  # "trailing white space" %20 was making slice harder to use because it looks like 2 characteres. when you JSON.stringify(name) you'll see " venosaur"
  # the next step if trim() didn't work was to set up a post ajax call and a get ajax call to receive a "clean, trailing-white-space-free piece of data"
  let titleId = $('.id')
  titleId.css('border', '5px solid brown');
  titleId.on('hover', (e) => {

    console.log(e);
    let pokeName = (e.view.window.name)
    let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    // console.log(e.view.window.name); 
  $.ajax({
      method: 'GET',
      url: pokeUrl,
      dataType: 'json'
    }).done(function(data) {
      // console.log(data)
      let pokemon = data.results
      let ivysaur = pokemon[1].name
      console.log(ivysaur);
      // console.log(pokemon[1].name)
      $.ajax({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${ivysaur}`,  // this works/
        dataType: 'json'
      }).done( (pokemon2) => {
        console.log(pokemon2)
      })
    })
    // console.log(pokeName.slice(5));
  })

# THIS IS THE ROUTE THAT BREAKS DOWN THE GITHUB.COM/SPRITES URL AND REBUILDS POKEAPI REQUEST. all $('card).hover($('.card').attr('src', 'sprites.front_shiny') all of the cards turn shiny instead of just the element that was highlighted.
$('.card-img-top').on('mouseenter', (e) => { // this is targeting the imgicon
  // console.log(e)     THIS IS THE EVENT. it's a great way to dig into the object we are interacting with.
  // console.log(e.currentTarget.currentSrc); // this api call works and shows the pokemon/4 pokemon/10 id # correctly, but e.view.window.name returns bulbasaur automatically every time.
 
//   let name = e.view.window.name.trim()  // e.view.window.name is digging into the event object/parameters hmmm this doesn't work.
  let pokeName = JSON.stringify(name); // this will pop up as " ivysaur"/" charmander" with trailing white space

  let imgUrl = e.currentTarget.currentSrc // this digs into the event object/parameter amd returns the URL
  let idOfUrl = imgUrl.slice(73)  // this starts and includes the URL right after /pokemon/#3.png 
  let urlNoId = imgUrl.slice(0, 73) //this code starts the extracted string from 0 and ends at 73 so we have the slash.
  var numberPattern = /\d+/g;   // https://stackoverflow.com/questions/1183903/regex-using-javascript-to-return-just-numbers regex code from this question
  cleanId = idOfUrl.match( numberPattern ).join([]);  //this code joins the regex 
  // console.log(`this is the ${cleanId}`);
  // let pokeUrl = `check out ${urlNoId}${cleanId}` // this will make the exact url we had before without .png
  let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${cleanId}`
  console.log(`dont forget this is the ${pokeUrl}`);
  $.ajax({
    method: 'GET',
    url: pokeUrl,
    dataType: 'json'
  }).done((data) => {
    pokemon = data
    console.log(pokemon);
    console.log(pokemon.sprites.front_shiny);
    let shinyImg = pokemon.sprites.front_shiny;
    if ($(e.currentTarget)) {
      // for (let i = pokemon.length; i = 0; i++) {
        console.log(e.target.nodeName);
      // }
      $('.card-img-top').css('border', '5px solid orange'); 
    }

//    $('#result').html(data.name)
const dittoName = data.name
    let doThat = $('#result').append('<p>' + dittoName + '</p>');
    doThat.css('color', 'orange');
    //    $('#result').append('<h3>' +data+ '</h3>')
    // $.map(data, (ditto) => {
    //     // (ditto, i) hol'up
    //     console.log(ditto[1]);
    //     // $('#result').append('<h3>' +post.name+ '</h3>  ')
    // })
    // console.log(pokemon);
})

    let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${name}`
    $.ajax({
      method: 'GET',
      url: `${pokeUrl}`,
    })
# REGEX/ .match() / .replace()
https://regexr.com/
https://regex101.com/
https://www.youtube.com/watch?v=EkluES9Rvak&list=FL0ZhvQ7SctxAARWSk4jXuBg&index=2 regular expression youtube 101    
  
# scrolling
closePokedex.on('click', (e) => { was starting to practice regular event based scrolling.
  // wow crazy to see:
   e.offsetX e.offsetY + e.screenX / e.screenY 
   e.pageX / e.pageY + e.clientY / enc.ientX 
} // ALL ON THE SAME CLICK EVENT SAYING PAGE COORDINATES.
$(document).on('mousemove', () => {     document.mousemove + e.clientX
   x = $('#xcoords')
   x.html('X coordinates' + e.clientX)
}
$(window).on('scroll') / 
$(window).scroll(function() {
  console.log(pageYOffset) console.log(pageXOffset)
})
SCROLL TO LOAD MORE DATA/
# # # # # # intersection observer # # # # # # 
var observer = new IntersectionObserver(callback, options_dict);
observer.observe(target);


intersection Observer gotchas:
*should have done this earlier for the other functions / feature implementations

# Problem losing the viewport and only the first 3 elements falling within intersectionObserver (iO)
<!--  -->
? trying to set the viewport to be more specific since its only grabbing and interacting with the first piece of data in the row of elements 
#1) Uncaught DOMException: Failed to construct 'IntersectionObserver': rootMargin must be specified in pixels or percent 
let options = {
  <!-- root: null, --> CHECK THE COMMAS
  <!-- threhold: 0.5, --> 
rootMargin: '40%',   ez to think it would be '40' or 40em..                   see error #1) 
}

#2) (index):1268 Uncaught TypeError: Failed to construct 'IntersectionObserver': Failed to read the 'root' property from 'IntersectionObserverInit': The provided value is not of type '(Document or Element)'.
<!-- error 2 comes from:
const cardDeck = $('.card-deck') this is technically not an Element. it needs to be cardDeck = $('.card-deck')[0]           
and options = { root: null }  { root: cardDeck }          
---------> 
the problem is it only observes 1 image without letting go.
trying to adjust the body to see if there's anything offsetting the stock position of root element for inspecObserv. 

<!-- validations[ actual terminal output ] -->
<!-- *(property) ModelValidateOptions.isAlphanumeric?: boolean | {    
    msg: string;
}
* will only allow alphanumeric characters, so "_abc" will fail -->
  <!-- * // hover over the objectKey and -->


*** super lucked out on the signup.ejs page after getting basic proof of concept login done. I was going to use a gray gear from flaticon.com but then went with the red one ***
*      1) animation lucked out, but even more so on the: pokemon.ejs page: 7 different icons to select, and on the captcha: 9 grid items. which is 7, consisting of 1 electric plus 2 more = 9
<!-- got so lucky on every idea. its a super simple project anyone could do. very luck theming. so many chances to push bounds a little. -->
# pokemon.js / energy card Section
  # I also wanted the top .energyCard to increment by order: +1 from flex but think there'd be too much going on. Gave pokeballs a little motion on hover
  # You can also see in the public folder several other pokedex backgrounds. Cut some up as well by taking 2 pictures of same pokemon background from google. this page carries apps design imo and also paves the way for a need for a last page to be very simple and definitely not red; probably not so screen like/pokedex like.

#  the navBar is really complimented by how this pokedex is cartoony but not as juvenile seeming as 1st page. the juvenile style i think goes okay with 1st page and is thankfully abandoned asap. The same pokeball that looks kindof cheesy doesn't look nearly as cheesy in the 2nd one; &is distracted by the alternating-gr8ball vanishingCss
* problem: using :before to transform a block set of divs into a circle arrangement but not having the <div class="energyCard id="fire"> be able to set in a circle. only a new set of divs.
Attempting solution of getting the id="fire" id="electric" "leaf" "psychic"... etc.   in a circle by establishing the divs. setting the backgrounds for energyCards as variables to be randomly applied to the divs.



<!-- IGNORE IF NEEDED please -->
# show.ejs      sorry for ramble. almost got rid of this page in favor of the first 2 pages being more than expected them to be.
# the second page started taking an unexpected turn for better: 
  # Even tried using the pokemon-energy-cards pictures from google that were 4k/modern/really nice. this is only my noob-designer-opinion but they made it look unfluid. The bright, cartoony icons really maximize the redness. (id think)

  # I credit luckily learning sound through covid as hobby as it made it really obvious to use the same top screen for the bottom one. I spent a few hours thinking about how to make the Top screen look in sync to something and can picture it being easier to want to out-do it with something different than the same-screen but only smaller for the pokemon (the way i used it). This random turn of events made the /pokemon.ejs page seem like an actual handheld pokedex. I credit using intersectionObserver a few times because honestly I wasn't as good at getting things evenly set around. 
  # I tried to take a: screenLess-pokedexBackground   and find a screen and figure a way to make it work. Out of nowhere display: flexbox intersectionObserver + appending data to container just became more natural and easier to translate ideas from head onto canvas/app. excuse paragraph would like to have the full truth documented in case questioned.
  #  It was easy to want to call it quits since a 3rd page could've easily killed how simple but pokedex-like how the 1st day pages flow back n' forth. 

// kind of easy to want to throw overflow-y: hidden; overflow-x: scroll for some variety but it truly looks best as simple and expected and plain and uniform as can be. Wanted to throw this page away, am glad to have cleaned up that array of object data from the moves api thats in the move: `[${moves}]` key and to have used this page to balance out the light eccentricities.  only wanted to use this page for the :name req.params.name url conditional. It's a very simple 1 and done check like the non-relevant port conditional down there. This cleaning up of raw data makes use of the api and some good js b


//better practices: you can do
# let axiosUrl = `https://pokeapi.co/api/v2/pokemon?limit=151/`    // i verified that the .slice is working by setting limit=333 and checking index.ejs intersectionObserver end is: #151 mew. success.
axios.get(axiosUrl)
  axios.get('http://pokeapi.co/api/v2/pokemon?limit=151/').then(response => {      // this is the way i had the api doing the limit before. 
res.render('index', { pokemon: pokemon.slice(0, 151), success: `${successValue}`, failure: res.locals.fakefailMsg})  these are pulled from app.use up there 
   <!-- still want to do rendering objects like this for some reason. -->
<!-- res.render('index', { pokemon: pokemon.slice(0, 151) }, {success: `${successValue}`, failure: res.locals.fakefailMsg}) -->


********************** ********************** ********************** ********************** ********************** ********************** **********************
* 1 fave part of this app: every feature successfully was built (besides the fact that the .energyCards from pokemon.ejs i originally wanted to have them form a circle and was so insanely wrong that thinking: container.style.border-radius = '50%' would append separate elements in a container into a circle.  I could get a version of it working now i'm sure but it looks better i think with the bar spanned still at the top of the page with the pokeball route buttons at the bottom. it looks more like legit app structure.)

      there were times, like making ***gengar button/.card$(this).toggle ghostBackground***   working. That I really wanted to make a section of bonus/goal things to do. instead I just silently dealt with every function as long as it took to complete it.
# 1) i would love to make an httpserver with native node -------> https://github.com/jshttp/cookie#readme only because I saw this version of firing up a server.    same .listen(`${port}`)

CommonJs/require('dependency') storing dependencies on strings v.s. ES Modules. definitely an unexpected learning. wow node has a native module loader that follows commonJs convention.

//besides having an eye on where you would make certain wrong assumptions about javascript that could inspire a new tool/frame.. 
*** it would be neat, since taking these notes, to make an .ejs clone that also has all of the colored commented out sections from readme.MD      ... like this!***
<3 like these <3 <3<3 >>

***[these]***         ... on ejs you can highlight comments w/:             // * heres my new color.
# this
<!-- // this i guess  -->       
<!-- plain comments too -->

| Column Name | Data Type | Notes |         database column-maker         // some of these learnings are: shortcut based, visual-presentation based, psychological-organization based...
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |
#                                                                       // can also see where a person would come from in terms of having keyboard/chrome/desktops shortcuts in mind:
# i.e. (desktop-> folder/file.onHover()=> { keyup'n' ----> rename folder/file  }) 
# if(location=='desktop'{keyup:'g' open google chrome keyup:'shift'+'g' open google chrome incognito })
#                   vs/code || desktop || googleChrome:           keyup:'shift'+'delete' (DELETE whole word  || 5-10 characters) 
# 6/8: take for example, "thoughts.md/codeJournal.md"    ... to set up the desktop/terminal so: all you'd have to write is "open thoughts" and it infers file.
    // esp v.s.Code: if you click once on a file that can be opened by vs code.
<!--canSee(subconscious?) || passive daily living have more computer/programmatic/parameter element to it. imagination/relevant-wonder taking mind of its own as all-stat-baseline++     -->

<!-- ? migrations/20220619225440-create-user.js    good call this is a date and time stamp-->

<!--  ** we can only have 2 localhost: running at the same time..         tried cleaning up pokedex real quick: localhost:6666, 7777, 8888.. can only run two at the same time. -->
<!-- i found this out after the app was done:       after the $.ajax({'POST' }[POST-ROUTE]<form>submit puzzle.          the object-key-occurence-algorithm/puzzle & after flash messages. -->
<!-- it was <script type="module" breaking the pokemon.ejs pokedexScreen app, where only the names of the type would show up with no image on .pokedexScreen2.> -->
* host:8888 works.      host:7777 works.      host:6666'The webpage at http://localhost:6666/ might be temporarily down or it may have moved permanently to a new web address.'
psychological: not a big tip but I was stuck trying to fix my final model against an older one and was getting stuck clicking back and forth between:
 # 2 vs code copies and 2 chrome browser        it was a quick 5 minute fix to put one localhost:8888 favicon as .fireEnergy  and one localhost:4444favicon as .electricEnergy
<!-- it could be a stretch to say they're of similar mind-modes but using 2 favicons (takes 5 mins) to help clearly separate browser tabs while doing 90-120mins of work....
postRoute->shared b/w Ajax and <form>submit.  The goal is to keep the contexts away from each other with something that distincts one from the other.   -->
<!-- also semantic psychology/perspective based stuff but it's helpful to imagine that: it's difficult/unfamiliar to navigate huge walls of code on an app you didn't create. -->
<!-- its nice to see a reflex/change-in-thinking/passive-adaptation -->

<!-- ** separating things by color, markings, ***** ****** ****** ***** ||  --------- ---------- ---------  many little tricks to do. i thought this'd be a 4hr fix it was a 40min -->

<!-- little to-do list right here.  -->
<!-- the goal is to take the pokemon.show.ejs container1 (moves api intersection observer that we parsed ) from here.--> 
# const pokeObject = { move: `[${moves}]`} 

The goal with putting an intersection observer on the *${moves}container1 is:*   (& this may be the reason why it is emphasized that map=newMap() keeps the original array in order)
*    we can set up an array pokeBucket.     findAll().then(response =>    name = response.name pokeBucket.push(name)) <!-- ** this will create an array in order as it appears --> 
<!-- did a terminal-test to see if findAll() appears in order of psql ... they come in the same order so we can -->
* let  lastPokemon = pokeBucket.length-1          this will give us the name value of the last one.
* if (entry.target.innerText.slice(slice/parseForNameOnly)) === lastPokemon         ----> moves.hide()        newDataEndpoint: (possibly pokemon.height/weight /locations to catch)...
<!-- if you'd like to be obnoxious can use intersectionObserver to slice for the id, do an $.ajax({'GET'}) let ajaxName = ajaxResponseFromId.name if ajaxName === lastPokemon --> 
# 1)  Scrolling through intersectionObserver, matching the lastElement by entry.target with the last value in the pokeBucket array
# 2) applying conditional logic based on a match for entry.target.last and the last value in pokeBucket means that when we scroll to the bottom our trigger will hide :
* parent().children()   and allow us to have a *.hide()/hidden* dataEndpoint that *.show()/unhides/appears* when conditional is met. 


* 
 I already tossed a daycare/heldItems/berries page idea) --> 
<!-- Coming from show.ejs almost being a page i didn't begin/tossedOutIdea because of the pokemon.ejs CSSreally taking a turn for the maybe-better(just imo) from those 2 screens possibly looking like something you'd actually hold in your hand (like real pokedex/hand-heldGameboy/nintendoDS)... I really didn't want the show.ejs page to ruin the css-luck/possibleJuJu and is also the reason why i was fiddling with:          if($(location) == 'show/${showPokemon}) and doing random conditional logic based on url. -->
        I lucked out huge on: pokemon/show.ejs:
                *pokeId that alternates to say *press1* x4 that stops    this timing is synced very luckily with the ${pokeImg.front_default}/sprites.shiny_front swap. Press 1 
                * these animations are also synced decently with the pokeball. total accident. 
<!-- might be overly personal I notice that a childhood-season of really being into skateboarding -->
<!-- and accidentally getting into sound-Design/mixing during covid  --> i notice these 2 activities being based on lots of spinning, flipping, sliding into pocket, like gymnastics landing. 
All that is done is hoped to be seen with a sticky, graceful, battery ending. 
extended-fasting too is very cyclical and flippy, and pockety, and very stick-the-landing. 
bounce-in-place for soundFiles, push-to-production in code, and the fast-breaking-meal of a 2-3+ day fast, all share that same kind of last part is the most important. 
<!-- These comments can be ignored but i'd love to do this same pokedex in react/graphql possibly as an icebreaker for languageLearning. and would like to know every useful thought/connection  -->
* 

<!-- oh wow found out on pokemonCards: under the moves, under the (weakness || resistance) part on bottom: there's: a description:  -->
* pikachu: *when several of these pokemon gather, their electricity can cause lightning storms* if I can't find an endpoint on pokeapi.co, it'd be cool to
* put an api/jsonFile up ---> use fs.readFileSync to grab the data and do some mini-magic.
<!-- semantic info: as I'm seeing: -->
1) the v2/pokemon/ability.pokemon endpoint stores all pokemon that have that ability.
2) the /pokemon/machine.item can organize all pokemon that can hold that machine.     <!-- officially reconsidering putting up a daycare/ berries endpoint / held items / extra info page>
<!-- I now believe id fully be able to render pretty much any data from the api to the page and I'm glad its all done at this very point. I wouldn't want to add too much to it. 
thinking now on it i'm super glad for the check object-key-occurences function/algo and that $.ajax({'POST'})/<form>submit. it was nice to up the difficulty behind the scenese without more stuff going on. 
 -->

// unrelated but looking at lodash it may have been a help; thought it was only a PHP tool. Looks easy to use. 

<!-- putting a try-catch after an else block seems like a double catch
} else {    // already kind of a cathc. if (this) else (that) { try { those  } catch { these } }
try {

}
catch {

} -->

*** wow you dont need three of these asterisks for this ***

  genSaltSync: [Function: genSaltSync],
  genSalt: [Function: genSalt],
  hashSync: [Function: hashSync],           // wow you literally see hashSync and hash and (all?) of the methods you'd use for this. I only imported bcrypt into models at first 
  hash: [Function: hash],
  compareSync: [Function: compareSync],
  compare: [Function: compare],
  getRounds: [Function: getRounds]
}
<!-- REMEMBER WHEN YOU CHANGE A MODEL TO: 1)  db:migrate:undo   2) db:migrate -->
*[6/7]*         *4/4[]*           *8/8[]*     *[12/12][]* easy way to stay on top of goals. Just stopped working door2door new daily milestones   
<!-- mocha -->
******************** ******************** ******************** ******************** ******************** ********************
npm install node-gyp -g     && npm install bcrypt -g      &&        npm install bcrypt -save
 <!--*[npm rebuild] --> // needed to install mocha and bcrypt to even run "mocha"  OUCH!! dont use mocha and nodemon at the same time!     
  #   BEFORE NODEMON EXIT             // ... it says mocha(node) right on the iterm
            * 0 passing (2ms)   
            *   1 failing
//  did sink 15 full minutes frantically checking back and forth. if you read this error msg its square-peg:square-hole telling you exactly how to fix its
  <!-- 1) Uncaught error outside test suite:   
     Uncaught Error: listen EADDRINUSE: address already in use :::3000 -->
# AFTER NODEMON EXIT
     6 passing (313ms)    after    ctrl-c/exitNodemon
     12 failing
<!-- mocha -->
******************** ******************** ******************** ******************** ******************** ********************
# prettier 
npm i --save-dev --save-exact prettier              // npx lets us run local files
echo {}> prettierrc.json              // hmm... making an empty config file. 
echo {}> .prettierignore        <!-- creating an empty config object  -->
<!-- $iterm:     prettier --write app         ||               prettier --write app/server.js  both not correct!  -->
<!-- npx prettier --write server.js, /models/user.js --> 
#                                         // echo < config/ppConfig.js        

<!--*  }).then(([user, created]) => { -->  kinda surprised i'm shocked you can throw ([user, created]) in there like that. Almost hypnotized into assuming you'd store everything as an object. 



passport.use(new LocalStrategy({          <!-- we're invoking LocalStrategy right here  -->
 <!-- invoke + passObject: i didn't realize youre invoking these as you're opening the object. Kind of just thought that was the syntax of doing this.  -->
}))

<!-- app.get('/profile', isLoggedIn, async (req, res) => {    // isLoggedIn is a callback function.
// what next() seems loosely like await: what is doing is: isLogggedIn gets run first, then next() moves on to next step
// next in this case is the [async (req, res)] function.
  res.render('profile');
}); -->
* another small problem/solve frame: 
have been [obviously] using .md files to store notes. I didn't know there was a way to have code render as code during markdown. Found out while doing associations + captcha at end.
My inner solution was to store comments in functions and collapse them or just have an .ejs file to store functions and have a [notes.md] file to hold notes for the functions. Can just render the code with a <>?<> type format or even just backticks apparently.

<!-- never thought about it but foodfasting seems to have its own immediate short-term-scope. Everything about learning computers while doing so seems very:
 let computerXP = new Array() 
let fast = ()=> {body.on('DayBehavior'=>>>computerXP.push( {day.session}) )}   ..if ur this far might be into personal excerpts enough to care.-->
<!-- thinking accidentally/passively/jokingly about scope and behavior -->

* hmmm... connor mcgregor mentioned he does 6hrs of training and tries to keep it loose and move in all the ways that the body can move.
Not saying I'm superProficient: but I notice that this app has been a doorway to pop out of the other side as the everything man: 
Done-Everything-Once: ajax, .slice(), simple validations based on args[], uservalidation, res.render({data})data.forEach(), thinking-in-theming, random location appending, 
* got  working 1:M pokemon->type JOIN assocation and also see th

granted of course full-stack and server code goes hundreds of miles out from this point, but its a decent start. I also felt like my game "skyfight/battleship" Didn't teach me as much about regular javascript as this did, even though this emphasis is on basic psql/sequelize/user type stuff. 
