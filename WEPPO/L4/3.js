function Foo() {
	const qux = function(){
		console.log("ojej, znalazłeś sekretną funkcję!")
	}
	this.__proto__.bar = function(){
		qux();
	}
}