// importe module
require('dotenv').config()
const mysql = require('mysql');

// initialise la connection entre server et base de donnée
const base = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASS,
    port: process.env.MYSQLPORT,
    database: process.env.MYSQLDATABASE
});
console.log(process.env)
// essaie de connecter la base de donnée
base.connect((error) => {
    if (error) throw error;
    console.log('[+] Database connected...');
});

function postData(firstname, lastname, avis, note, formation) {
    let form = {
        firstname,
        lastname,
        avis,
        note,
        formation
    };

    base.query('INSERT INTO contact SET ?', form, (error, result) => {
        if (error) throw error;
        console.log('[+] Values inserted...');
    });

}

function getData2(resultat){
    base.query('SELECT * FROM contact WHERE formation = "backend"', (error, result) => {
        if (error) throw error;
        resultat.json(result);
    })
}



function getData1(resultat){
    base.query('SELECT * FROM contact order by note desc', (error, result) => {
        if (error) throw error;
        resultat.json(result)
    })
    
}

function getData3(resultat){
    base.query('SELECT * FROM contact WHERE formation="Frontend"', (error, result) => {
        if (error) throw error;
        resultat.json(result)
    })
    
}

function getData4(resultat){
    base.query('SELECT * FROM contact WHERE formation = "Marketing-Digital"', (error, result) => {
        if (error) throw error;
        resultat.json(result)
    })
    
}

function getData5(resultat){
    base.query('SELECT * FROM contact WHERE formation = "ux-ui"', (error, result) => {
        if (error) throw error;
        resultat.json(result)
    })
    
}


module.exports = {
    postData,
    getData1,
    getData2,
    getData3,
    getData4,
    getData5
   
};
