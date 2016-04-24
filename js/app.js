var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/kitty.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nicknames: ['Tabby', 'Mitzie', 'Cutie', 'Princess']
	}, 
	{
        clickCount : 0,
        name : 'Tiger',
        imgSrc : 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
		nicknames: ['Tikka', 'Murka', 'Lofty', 'Pipi']
    },
    {
        clickCount : 0,
        name : 'Scaredy',
        imgSrc : 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
		nicknames: ['Tucky', 'Mimi', 'Cupie', 'Ponscho']
    },
    {
        clickCount : 0,
        name : 'Shadow',
        imgSrc : 'img/1413379559_412a540d29_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
		nicknames: ['Tracko', 'Mumie', 'Coolcat', 'Paow-Wow']
    },
    {
        clickCount : 0,
        name : 'Sleepy',
        imgSrc : 'img/9648464288_2516b35537_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
		nicknames: ['Trunks', 'Mindi', 'Coolio', 'Rakoon']
    }
]

var Cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.nicknames = ko.observableArray(data.nicknames);
	this.imgSrc = ko.observable(data.imgSrc);
	this.ImgAttribution = ko.observable(data.imgAttribution);
	
	this.level = ko.computed(function() {
		var level;
		var clicks = this.clickCount();
		if (clicks > 20) {
			level = 'Grown Up';
		} else if (clicks > 15) {
			level = 'Teen';
		} else if (clicks > 5) {
			level = 'Infant';
		} else {
			level = 'Baby Kitten';
		}
		return level;
	}, this);
}


var ViewModel = function () {
	var that = this;
	
	this.catList = ko.observableArray([]);
	
	initialCats.forEach(function(catItem){
		that.catList.push( new Cat(catItem) );
	});
	
	this.currentCat = ko.observable( this.catList()[0] );
	
	this.incrementCounter = function() {
		that.currentCat().clickCount (that.currentCat().clickCount() + 1);
	};
	
	this.setCat = function(clickedCat) {
		that.currentCat(clickedCat);
	};
	
};

ko.applyBindings(new ViewModel());