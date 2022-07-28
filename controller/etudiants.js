const { Etudiants } = require("../model/etudiants");
const client = require('../bd/connect');

const ajouterEtudiants = async (req, res) => {
    try {
        let data = [req.body.id, req.body.firstname, req.body.lastname, req.body.avis, req.body.note, req.body.formation]
        let etudiants = new Etudiants(data);
        let result = await client.bd().collection('etudiants').insertOne(etudiants);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports ={ajouterEtudiants}