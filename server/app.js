require("dotenv").config();
let express = require('express'); 
let app = express();
const sequelize = require('./db') // where database from 

let journal = require('./controllers/journalcontroller')
let user = require('./controllers/usercontroller')

// let about = require('./controllers/aboutcontroller')
sequelize.sync(); 

app.use(express.json()) // turn the json into a regular javascript object 

// exposed route 
app.use('/user', user)

// protected route
app.use(require('./middleware/validate-session')); // validate session (gatekeeper)
app.use('/journal', journal)



app.listen(3000, function(){
    console.log('App is listening on port 3000')
})

