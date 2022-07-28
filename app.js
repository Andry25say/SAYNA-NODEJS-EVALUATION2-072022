//importations commonjs
require('dotenv').config();
const express = require('express');
const routeEtudiants = require('./routes/etudiantsRoutes');
const mysql = require('./bd/mysql');


//instancier express
const app = express();
const port = 5000;
//middlewares
app.use(express.static('IHM'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(routeEtudiants);

//importation ejs
app.set('view engine', 'ejs');
app.set('views', 'IHM');

//Les routes vers les pages 
app.get('/signup', (req, res) => {
    res.status(200).render('signup')
})
app.get('/contact', (req, res) => {
    res.status(200).render('contact')
})
app.use((req, res) => {
    res.status(500).render('erreur',{err:'erreur survenue!!!'});
})
//Le serveur ecoute
app.listen(port, () => {
    console.log(`En attente sur le port ${port}`)})
