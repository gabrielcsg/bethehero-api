const { Router } = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes = Router();

routes.get('/', (req, res) => res.json({ ok: true }));

// Login
routes.post('/sessions', SessionController.create);

// ONGs
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.list);

// Profile
routes.get('/profile', ProfileController.index);

// Incident
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.list);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;