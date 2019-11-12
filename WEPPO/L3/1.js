const car = {
	lights:false,
	toggleLights:()=>this.lights = !this.lights,
	_mileage:0
}
Object.defineProperty(car, 'mileage', {
	enumerable: false, 
	configurable: false,
	get: function(){
		return this._mileage;
	},
	set:function(value){
		if(value<=this._mileage) throw new Error("Nie ma cofnaia liczników!");
		this._mileage = value;
	}
 });