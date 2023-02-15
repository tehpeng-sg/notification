import { Router } from 'express';
const { getTest, getTest2 } = require('../email/controller/email-controller.ts');

const route = Router();

route.get('/test1', getTest);
route.get('/test2', getTest2);

module.exports = route;
