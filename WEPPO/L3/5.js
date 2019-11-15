function sum(...rest) {
	return rest.reduce( (prev,curr)=>prev+curr , 0);
}