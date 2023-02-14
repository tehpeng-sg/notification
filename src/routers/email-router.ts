const { Router } = require('express');
const Email = require('../email/controller/email-controller');

const r = Router();

r.get('/email', Email);

module.exports = r;
