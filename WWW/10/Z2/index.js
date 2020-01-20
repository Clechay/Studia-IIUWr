const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();
const find = require('./model');

function stripMetadata(movie) {
	return movie.title;
}

router.get('/api', (ctx, next) => {
	const query = ctx.request.query.q;
	ctx.body = find(query).map(stripMetadata).slice(0,10);
	next();
});

app
  .use(require('koa-static')('./static', {}))
  .use(router.routes())
  .use(router.allowedMethods());

console.log('will listen on localhost:3000');
app.listen(3000);