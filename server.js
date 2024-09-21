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





app.listen(3000, () => {
    console.log('Listening on port 3000')
});