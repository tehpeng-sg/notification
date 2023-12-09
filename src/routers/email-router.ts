import { Router } from 'express';
const { getTest, getTest2 } = require('../platform/email/controller/email-controller');

const route = Router();

route.get('/test1', getTest);
route.get('/test2', getTest2);

module.exports = route;
