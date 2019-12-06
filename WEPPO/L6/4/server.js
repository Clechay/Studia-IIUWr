const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug');

const renderForm = (req,res,err) => {
	res.render('form', { 
		err:err,
		...req.query
	})
}

const renderPrintout = (req,res,err) => {
	res.render('result', req.query)
}

app.get('/', function (req, res) {
	renderForm(req,res);
})

app.get('/print', (req,res)=>{
	if(!req.query.name || !/[A-Z][a-z]+ [A-Z][a-z]+/.test(req.query.name.trim()))
		renderForm(req,res,"Popraw imię");
	if(!req.query.name || !/[A-Z][a-z]+/.test(req.query.name.trim()))
		renderForm(req,res,"Popraw przedmiot");

	req.query.task1 = req.query.task1 || 0;
	req.query.task2 = req.query.task2 || 0;
	req.query.task3 = req.query.task3 || 0;
	req.query.task4 = req.query.task4 || 0;
	req.query.task5 = req.query.task5 || 0;
	req.query.task6 = req.query.task6 || 0;
	req.query.task7 = req.query.task7 || 0;
	req.query.task8 = req.query.task8 || 0;
	req.query.task9 = req.query.task9 || 0;
	req.query.task0 = req.query.task0 || 0;

	renderPrintout(req,res);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))