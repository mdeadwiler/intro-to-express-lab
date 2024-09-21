import express from "express";

const app = express();

//1
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}!`);
});


//2
app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number);
    if (isNaN(number)) {
        res.send('Specify a number');
    } else {
        const rolledNumber = Math.floor(Math.random() * (number + 1));// any random num between 0 and given num
        res.send(`You rolled a ${rolledNumber}.`);
    }
    });
    


    //3

    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ]
 app.get('/collectibles/:index', (req,res) => {
    const index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 ) {
     res.send("not a valid entry");
    }
    if (index >= collectibles.length) {
     res.send("This item is not yet in stock. Check back soon!");
    } else {
        let item = collectibles[index];
        res.send(`So, you want the ${item.name} ? For ${item.price} it can be yours`);
    }
 });

//4
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

//app.get takes on two parameters. the first one ('/shoes', (req, res) => {this is where you are writing the code})

app.get('/shoes', (req, res) => {

    const type = req.query.type;
    const minPrice = parseInt(req.query['min-price']);
    const maxPrice = parseInt(req.query['max-price']);

    //step 1: create an empty new array where in the future, it will accept the shoes you are trying to filter.
    //step 2: create an if statement that IF the query they provided matches the parameters they want (i.e. if they only want sneaker as type)
    // then we are going to reassign the  array of filtered shoes to that criteria and that is what we are going to respond with in a json format
    app.get('/shoes', (req, res) => {
        res.send(`Hello there, ${req.query.maxPrice}! I hear min-price ${req.query.minPrice} looking for max-price!`);
    });
    


//if the price is less than the lowest price then exclude the shoe
// if the price is greater than the highest price then exclude the shoe
// if the type of shoes are specified then return the shoe
// return full list 
});

/*shoes.forEach((name) => {
    console.log(name.type);
});*/


app.listen(3000, () => {
    console.log('Listening on port 3000')
});