const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); 

// Spajanje na MongoDB bazu
mongoose.connect('mongodb://localhost:27017/filmovi').then(() => {
  console.log('Uspješno povezan s bazom podataka');
}).catch((err) => {
  console.error('Greška prilikom povezivanja s bazom podataka', err);
});

// Definiranje modela filmovi
const Film = mongoose.model('filmovi', new mongoose.Schema({
  ime: String,
  slika: String,
  rating: String
}, { collection: 'filmovi' }));

// GET ruta za dohvaćanje svih filmova
app.get('/filmovi', async (req, res) => {
  try {
    const filmovi = await Film.find();

    res.json(filmovi);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Definiranje modela serija
const Serija = mongoose.model('serije', new mongoose.Schema({
  ime: String,
  slika: String,
  rating: String
}, { collection: 'serije' }));

// GET ruta za dohvaćanje svih serija
app.get('/serije', async (req, res) => {
  try {
    const serije = await Serija.find();

    res.json(serije);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Definiranje modela glumca
const Glumac = mongoose.model('glumci', new mongoose.Schema({
  ime: String,
  slika: String,
  rating: String
}, { collection: 'glumci' }));

// GET ruta za dohvaćanje svih glumaca
app.get('/glumci', async (req, res) => {
  try {
    const glumci = await Glumac.find();

    res.json(glumci);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server sluša na portu ${port}`);
});