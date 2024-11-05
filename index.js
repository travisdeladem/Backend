const express = require('express');
const  HomePage = (req, res) => {
    res.send('<h1>Hello World</h1>');
}
const  AboutPage = (req, res) => {
    res.send('<h1>About Page</h1>');
}
const  ContactPage = (req, res) => {
    res.send('<h1>Contact Page</h1>');
}
const  Delete= (req, res) => {
    res.send('<h1>About Page</h1>');
}
const Server = express();
Server.delete('/delete', Delete),
Server.put('/about', ContactPage),
Server.post('/contactPage', AboutPage),
Server.get('/', HomePage);
Server.listen(3114,"localhost", () => {
    console.log('Server is running on port 3000');
});




