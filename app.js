// otetaan express käyttöön
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//otetaan mongoose käyttöön
const mongoose = require('mongoose')

//otetaan malli käyttöön erillisestä modules kansiosta
const Track = require("./modules/model") 

// otetaan bodyparser käyttöön
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// uri mogoDB tietokantaan
const uri = "mongodb+srv://Oonuliina:testisalis@democluster.mc7drmb.mongodb.net/testi?retryWrites=true&w=majority"

// yhdistetään mongoDB tietokantaan
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

// Haetaan kaikki kappaleet tietokannasta
app.get('/api/getall', async (req, res) => { 
    try {
        const tracks = await Track.find();
        res.status(200).json(tracks);
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

// Haetaan kappale ID:n perusteella tietokannasta
app.get('/api/:id', async (req, res) => {
    try {
        const track = await Track.findById(req.params.id);
        res.status(200).json(track); 
    } catch (err) {
        res.status(500).json({ message: err })
    } 
})

// Lisätään kappale tietokantaan
app.post('/api/add', async (req, res) => { 
    const track = new Track({
        name: req.body.name,
        artist: req.body.artist,
        album: req.body.album,
        year: req.body.year
    })
    
    try {
        const savedTrack = await track.save()
        res.status(201).json(savedTrack)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

// Päivitetään olemassa olevan kappaleen tietoja
app.put('/api/update/:id', async (req, res) => {
    try {
        const track = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(track);
    } catch (err) {
        res.status(405).json({ message: err })
    } 
    
})

// Poistetaan kappale tietokannasta
app.delete('/api/delete/:id', async (req, res) => { 
    try {
        const track = await Track.findByIdAndRemove(req.params.id);
        res.status(200).json(track);
    } catch (err) {
        res.status(405).json({ message: err })
    } 
})

// vihreilmoitus, jos jokin menee pieleen reittejä haettaessa
app.get('*', (req, res) => {
    res.status(404).send('Cant find the requested page')
})
// kuunnellaan porttia 3000
app.listen(3000, () => {
    console.log('Server listening on port 3000');
})
