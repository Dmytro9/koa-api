const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// pretend db
const users = [
  {
    name: 'Dima',
    email: 'dpoliuliuk@gmail.com',
  },
  {
    name: 'Inna',
    email: 'dpoliuliuk@gmail.com',
  },
  {
    name: 'Vasia',
    email: 'dpoliuliuk@gmail.com',
  },
]

// routes
router.get('/user/:id', ctx => {
  ctx.body = users[ctx.params.id];
});

router.post('/user/:id', ctx => {
  ctx.body = Object.assign(users[ctx.params.id], ctx.request.body);
});

app
  .use(require('koa-body')())
  .use(router.allowedMethods())
  .use(router.routes())


app.listen(1337);