const Photo = ('../models/photo');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(mongoURI, {useNewURLParser: true });

let photos = [
	new Photo({
		img: "https://i.imgur.com/AKqOIl1.jpg"
	}),

	new Photo({
		img: "https://i.imgur.com/ethjgOP.jpg"
	}),

	new Photo({
		img: "https://i.imgur.com/XPOdqR9.jpg"
	}),

	new Photo({
		img: "https://i.imgur.com/Axz2WkB.jpg"
	}),

	new Photo({
		img: "https://i.imgur.com/WCovSSX.jpg"
	}),

	new Photo({
		img: "https://i.imgur.com/2j82qxl.jpg"
	}),

	new Photo({
		img: "https://i.imgur.com/vXCLuPW.jpg"
	}),

	new Photo({
		img: "https://i.imgur.com/Cdi6z9S.jpg"
	}),

];

const done = 0; 
for(let i = 0; i < photos.length; i++ ) {
	photos[i].save((error, result)=>{
		done++
		if(done === photos.length){
			exit()
		}
	});
}

function exit(){
	mongoose.disconnect();
}