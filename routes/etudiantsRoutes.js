const express = require('express');
const router = express.Router();
const db = require('../bd/mysql');

//les differents routes verbes
router.get('/home', (req, res) => {
    db.query(`SELECT formation,note,avis FROM etudiants GROUP BY formation ORDER BY note DESC limit 4 `,
        (err, result) => {
            if (err) {
                res.status(500).render('erreur',{err:'erreur survenue!!!'});
            } else {
                res.status(200).render('index', { result });
            }
        })
})
//routes Ajouter les étudiants dans la base de données
router.post('/etudiants', (req, res) => {
    let data = req.body;
    db.query('INSERT INTO etudiants SET ?',
        data,
        (err, result) => {
            if (err) {
                res.status(500).render('erreur',{err:'erreur survenue!!!'});
            } else {
                res.status(300).redirect('home');
            }
        })
})

//avis backend
router.get('/backend', (req, res) => {
    let formation = req.params.formation;
    db.query(`SELECT avis FROM etudiants WHERE formation = 'Backend'`, [formation],
        (err, result) => {
            if (err) {
                res.status(500).render('erreur',{err:'erreur survenue!!!'});
            } else {
                res.status(200).render('backend', { result });
            }
        })
})
//avis frontend
router.get('/frontend', (req, res) => {
    let formation = req.params.formation;
    db.query(`SELECT avis FROM etudiants WHERE formation = 'Frontend'`, [formation], (err, result) => {
        if (err) {
            res.status(500).render('erreur',{err:'erreur survenue!!!'});
        } else {
            res.status(200).render('frontend', { result })
        }
    })
})

//avis marketing
router.get('/marketing', (req, res) => {
    let formation = req.params.formation;
    db.query(`SELECT avis FROM etudiants WHERE formation = 'Marketing'`, [formation], (err, result) => {
        if (err) {
            res.status(500).render('erreur',{err:'erreur survenue!!!'});
        } else {
            res.status(200).render('Marketing', { result})
        }

    })
})

//avis ux/ui
router.get('/uxui', (req, res) => {
    let formation = req.params.formation;
            db.query(`SELECT avis FROM etudiants WHERE formation = 'UX-UI'`, [formation], (err, result) => {
                if (err) {
                    res.status(500).render('erreur',{err:'erreur survenue!!!'});
                } else {
                    res.status(200).render('uxui', { result})
                }
            })
        })
//routes recupérer les étudiants dans la base de données
module.exports = router;