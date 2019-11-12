function Tree(value, left, right) {
	this.value = value;
	this.left = left;
	this.right = right;
}

const tree = new Tree("im on the top of the world",
	new Tree("random leaf", null, null),
	new Tree(41, null, 
		new Tree(7, null, null)
	)
)