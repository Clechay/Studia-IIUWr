const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser());
const router = new Router();

const loginRegex = /^[a-zA-Z0-9]{5,15}$/;
const passwordRegex = /^[a-zA-Z0-9]{8,40}$/;
const birthdateRegex = /^(19[6789]\d|20\d\d)-(0\d|11|12)-[123]\d$/;

router.post('/api', (ctx, next) => {
	ctx.body = {
		login: loginRegex.test(ctx.request.body.login),
		password: passwordRegex.test(ctx.request.body.password),
		passwordRep: ctx.request.body.password===ctx.request.body.passwordRep,
		birthdate: birthdateRegex.test(ctx.request.birthdate)
	}
	console.log(ctx.request.body)
	next();
});

app
  .use(require('koa-static')('./static', {}))
  .use(router.routes())
  .use(router.allowedMethods());

console.log('will listen on localhost:3000');
app.listen(3000);