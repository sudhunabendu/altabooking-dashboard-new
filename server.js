const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require('dotenv').config()
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const port = process.env.PORT || 8000;

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse form data client

app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload());

// Models
const db = require("./app/Models");

// db.mongoose.connect(`mongodb+srv://NodeClass:Goodtime2323%40@cluster0.fwvqxqi.mongodb.net/altabookingTest`, {

db.mongoose.connect(`mongodb://127.0.0.1:27017/altabooking-dashboard`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connect to MongoDB.");
    // initial();
}).catch(err => {
    console.error("Connection error", err);
    process.exit();
});


app.get("/", (req, res) => {
    res.json({ message: "Welcome to NodeJS with mongoose application." });
});

require("./routes/auth.routes")(app);


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
