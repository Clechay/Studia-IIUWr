class Stack{
	array = [];
	constructor(){}
	push(el){
		this.arr.push(el);
	}
	pop(){
		const first = arr[0];
		this.arr = this.arr.slice(1);
		return first;
	}
	empty(){
		return !this.array.length;
	}
	top(){
		return this.array[0];
	}
}

function Tree(value, left, right) {
	this.value = value;
	this.left = left;
	this.right = right;
}
Tree.prototype.iter = function* () {
	const stack = new Stack();
	stack.push(this);
	while(!stack.empty()){
		if(this.left)
	}
}


const tree = new Tree("im on the top of the world",
	new Tree("random leaf", null, null),
	new Tree(41, null, 
		new Tree(7, null, null)
	)
)