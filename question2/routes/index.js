const express = require('express');

const router = express.Router();

const { ajouterLieu, ajouterUser, ajouterFavori } = require('../models/Models');

router.post('/', (req, res) => {
  const nom = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const libelle = req?.body?.description?.length !== 0 ? req.body.description : undefined;

  if (!nom || !libelle) return res.sendStatus(400);
  const idLieu = ajouterLieu(nom, libelle);

  if (!idLieu) return res.send('ce lieu est déjà présent !').status(400);

  return res.json({ idLieu });
});

router.post('/addUser', (req, res) => {
  const nom = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const mail = req?.body?.email?.length !== 0 ? req.body.email : undefined;

  if (!nom || !mail) return res.sendStatus(400);
  const idUser = ajouterUser(nom, mail);
  if (!idUser) return res.send('utilisateur déjà présent !').status(400);

  return res.json({ idUser });
});

// eslint-disable-next-line consistent-return
router.post('/addfav', (req, res) => {
  const idLieu = req?.body?.idL.length !== 0 ? req.body.idL : undefined;
  const idUser = req?.body?.idU.length !== 0 ? req.body.idU : undefined;

  if (!idLieu || !idUser) return res.sendStatus(400);
  const id = ajouterFavori(idLieu, idUser);
  if (!id) return res.sendStatus(400);

  return res.json(id);
});

module.exports = router;
