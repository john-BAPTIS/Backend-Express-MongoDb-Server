
*Set autocorrection whilst typing in React field.

passwordFor2022@me

/***************************************/
node
git
mongodb
express-generator
express
React
nodemon
heroku
firebase
set time to automatic


*Videos on harriet laptop about Web Development
*Design from MongoDB +Add, Update, Delete & Search+


npm i cors dotenv express express-generator mongoose --save

use yarn for the project because of the redux-form

send mail to Ana.


server.js
/****************************************/
const cors = require('cors');

//Connecting to the databse over the internet.
const mongoose.

//After the middelwares to where the console is log to the Database.

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, () => { useNewUrlParser: true, useCreateIndex: true });
const connection.once('open', () => { console.log('Database connected'); });

//Between Database conection and app.listen
const exerciseRouter = require('exercise', exerciseRouter');
const userRouter = require('exercise', userRouter');


app.use('/exercise', exerciseRouter );
app.use('/user', userRouter );

//Connecting for localhost. Before middlewares.
const url = 'mongodb:localhost:27017';

mongoose.connect(url);
console.log('connection succesfully lauch to the Database');

/***********************/


.//MODELS/
/**************************************************/
//User Schema

/models/user.models.js
const mongoose = require('mongoose');

mongoose Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String
		required: true,
		trim: true,
	}
},
{timestamp: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;

.................................................
Exercise Schema

/models/exercise.models.js
mongoose Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	username: { type: String, required: true }
	description{ type: String, required: true }
	duration{ type: Number, required: true }
	date{ type: Date, required: true }
},
{timestamp: true});
			
const Exercise =  mongoose.model('Exercise', ExerciseSchema);

module.export = Exercise;

/*************************************************/

./ROUTES/
/*************************************************/



/*************************************************/



-----------------------------------------------------------------------------
ana.guersi@comercio.mineco.es (Ana Guersi - Economic and Commercial Office of the Embassy of Spain).

Hello Ana.

Why Warehouse Ghana cannot participate in the upcoming delegation.

Upon several confrontation and meetings with the procurement, logistics, sales & marketing, and operations department,
it has become inconvienence for our team to engage in the upcoming delegation meeting though we have interest in it.

We are sorry for every inconvenience this may cause and look forward for more future deals.

Thank you.

----------
(-----)
Akweter James.
Procurement Department.
---------------------------------------------------------------------------------



{
  "dishes": [
    {
      "name": "Uthappizza",
      "image": "images/uthappizza.png",
      "category": "mains",
      "label": "Hot",
      "price": "4.99",
      "featured": "true",
      "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon",
          "date": "2012-10-16T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites",
          "date": "2014-09-05T17:57:28.556094Z"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan",
          "date": "2015-02-13T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry",
          "date": "2013-12-02T17:57:28.556094Z"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent",
          "date": "2011-12-02T17:57:28.556094Z"
        }
      ]
    },
    {
      "name": "Zucchipakoda",
      "image": "images/zucchipakoda.png",
      "category": "appetizer",
      "label": "",
      "price": "1.99",
      "featured": "false",
      "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon",
          "date": "2012-10-16T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites",
          "date": "2014-09-05T17:57:28.556094Z"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan",
          "date": "2015-02-13T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry",
          "date": "2013-12-02T17:57:28.556094Z"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent",
          "date": "2011-12-02T17:57:28.556094Z"
        }
      ]
    },
    {
      "name": "Vadonut",
      "image": "images/vadonut.png",
      "category": "appetizer",
      "label": "New",
      "price": "1.99",
      "featured": "false",
      "description": "A quintessential ConFusion experience, is it a vada or is it a donut?",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon",
          "date": "2012-10-16T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites",
          "date": "2014-09-05T17:57:28.556094Z"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan",
          "date": "2015-02-13T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry",
          "date": "2013-12-02T17:57:28.556094Z"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent",
          "date": "2011-12-02T17:57:28.556094Z"
        }
      ]
    },
    {
      "name": "ElaiCheese Cake",
      "image": "images/elaicheesecake.png",
      "category": "dessert",
      "label": "",
      "price": "2.99",
      "featured": "false",
      "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon",
          "date": "2012-10-16T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites",
          "date": "2014-09-05T17:57:28.556094Z"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan",
          "date": "2015-02-13T17:57:28.556094Z"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry",
          "date": "2013-12-02T17:57:28.556094Z"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent",
          "date": "2011-12-02T17:57:28.556094Z"
        }
      ]
    }
  ],
  "promotions": [
    {
      "name": "Weekend Grand Buffet",
      "image": "images/buffet.png",
      "label": "New",
      "price": "19.99",
      "featured": "true",
      "description": "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person "
    }
  ],
  "leaders": [
    {
      "name": "Peter Pan",
      "image": "images/alberto.png",
      "designation": "Chief Epicurious Officer",
      "abbr": "CEO",
      "featured": "false",
      "description": "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
    },
    {
      "name": "Dhanasekaran Witherspoon",
      "image": "images/alberto.png",
      "designation": "Chief Food Officer",
      "abbr": "CFO",
      "featured": "false",
      "description": "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
    },
    {
      "name": "Agumbe Tang",
      "image": "images/alberto.png",
      "designation": "Chief Taste Officer",
      "abbr": "CTO",
      "featured": "false",
      "description": "Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."
    },
    {
      "name": "Alberto Somayya",
      "image": "images/alberto.png",
      "designation": "Executive Chef",
      "abbr": "EC",
      "featured": "true",
      "description": "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"
    }
  ],
  "feedback": []
}


*All the pages will have a navbar and a footer.


save 
delete
search
update

/PAGES
*seacrh will have an autocomplete form together with update.
*Save button under a renderpage.



