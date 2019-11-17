function createCreateGenerator(lim) {
	return function() {
		var _state = 0;
		return {
			next: function () {
				return {
					value: _state,
					done: _state++ >= lim
				}
			}
		}
	}
}


var foo = {
	[Symbol.iterator]: createCreateGenerator(30)
};
for (var f of foo)
	console.log(f);