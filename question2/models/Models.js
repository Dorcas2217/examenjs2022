/* eslint-disable no-param-reassign */
const { randomUUID } = require('node:crypto');
const path = require('node:path');

const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/lieux.json');
const jsonDbPath1 = path.join(__dirname, '/../data/users.json');

function ajouterLieu(nom, libelle) {
  const tabLieux = parse(jsonDbPath, []);
  const nextId = tabLieux?.length !== 0 ? randomUUID.apply(tabLieux.length) : randomUUID.apply(1);

  if (tabLieux.find((elt) => elt.name === nom)) return undefined;
  const newLieu = {
    id: nextId,
    name: nom,
    description: libelle,
  };
  tabLieux.push(newLieu);

  serialize(jsonDbPath, tabLieux);

  return nextId;
}

function ajouterUser(nom, mail) {
  const users = parse(jsonDbPath1, []);
  const nextId = users?.length !== 0 ? randomUUID.apply(users.length) : randomUUID.apply(1);

  if (users.find((elt) => elt.email === mail)) return undefined;

  const nextUser = {
    id: nextId,
    name: nom,
    email: mail,
    favoris: [],
  };

  users.push(nextUser);
  serialize(jsonDbPath1, users);

  return nextId;
}

function ajouterFavori(idLieu, idUser) {
  const lieux = parse(jsonDbPath, []);
  const users = parse(jsonDbPath1, []);

  if (!lieux.find((unlieu) => unlieu.id === idLieu)) return undefined;

  if (!users.find((elt) => elt.id === idUser)) return undefined;

  const lieufind = lieux.find((unlieu) => unlieu.id === idLieu);

  if (users[idUser].favoris.find((elt) => elt.lieu === lieufind)) return undefined;

  const idFav = randomUUID.apply(users.favoris.length !== 0 ? users.favoris.length : 1);

  const nextFav = {
    id: idFav,
    lieu: lieufind,
  };

  users[idUser].favoris.push(nextFav);

  serialize(jsonDbPath1, users);

  return idFav;
}

module.exports = { ajouterLieu, ajouterUser, ajouterFavori };
