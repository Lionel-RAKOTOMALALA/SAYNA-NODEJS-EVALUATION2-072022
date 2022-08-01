// importe module express
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const lien = require('./database/api');

// port utilisé pour l'écoute
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost/api/form' }));
app.use(express.static(path.join(__dirname, 'public')));


// obtient le chemin vers index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// obtient chemin vers backend.html
app.get('/backend', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'backend.html'));
});

// obtient chemin vers frontend.html
app.get('/frontend', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'frontend.html'));
});

// obtient chemin vers marketing.html
app.get('/marketingDigital', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'marketing.html'));
});

// obtient chemin vers uxui.html
app.get('/uxui', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'uxui.html'));
});

// obtient chemin vers frontend.html
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// obtient chemin vers signup.html
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// poste les informations réçu par Client
app.post('/api/form', (req, res) => {
    const clients = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        avis: req.body.avis,
        note: req.body.note,
        formation: req.body.formation
    };

    // insère donnée dans la base de donnée
    lien.postData(
        clients.firstname,
        clients.lastname,
        clients.avis,
        parseInt(clients.note),
        clients.formation
    );

    // const final_data = JSON.parse(clients);
    console.log(clients);
});

app.get("/recupere", (req,res)=>{
   lien.getData1(res);
    
})

app.get("/back", (req, res) =>{
    lien.getData2(res);
})

app.get("/front", (req, res) =>{
    lien.getData3(res);
})

app.get("/mark", (req, res) =>{
    lien.getData4(res);
})

app.get("/ux", (req, res) =>{
    lien.getData5(res);
})
// app écoute sur le port spécifié
app.listen(PORT, () => {console.log('[+] Listening on port: ', PORT, '...')});
