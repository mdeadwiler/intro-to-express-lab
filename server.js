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
        const rolledNumber = Math.floor(Math.random() * (number + 1));
        res.send(`You rolled a ${rolledNumber}.`);
    }
    });
    


    //3

    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ]
 app.get('collectibles/:index', (req,res) => {
    const index = parseInt(req.params.index, 10);
    if (isNaN(index)) {
        return res.send("This item is not yet in stock. Check back soon!");
    } else if  (index < 0) {
        return res.send("This item is not yet in stock. Check back soon!");
    } else if (index >= collectibles.length) {
        return res.send("This item is not yet in stock. Check back soon!");
    } else {
        let item = collectibles[index];
        res.send("This item is not yet in stock. Check back soon!");
        console.log(item);
    }
 });





app.listen(3000, () => {
    console.log('Listening on port 3000')
});