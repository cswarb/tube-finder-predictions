var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require("mongoose"),
    Task = require("./tube-data/model"), //created model loading here
    bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/tubefinderpredictions");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(function (req: any, res: any) {
//     res.status(404).send({ url: req.originalUrl + " not found" })
// });


var routes = require("./tube-data/route"); //importing route
routes(app); //register the route


app.listen(port);


console.log("todo list RESTful API server started on: " + port);