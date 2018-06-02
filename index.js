import Koa from 'koa'
import Router from 'koa-router'

// const Koa = require('koa');
const app = new Koa()

app.use(function* () {
  this.body = 'Hello World';
});

app.listen(1337);