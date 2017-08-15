// ==============================================================
// Data

var friends = [
	{
		"name": "Arthur Dent",
		"photo": "https://vignette4.wikia.nocookie.net/disney/images/8/84/Arthurdent.jpg/revision/latest?cb=20130416065941",
		"scores":[],
	},
	{
		"name": "Ford Perfect",
		"photo": "https://betweenhimandher.files.wordpress.com/2011/09/mos-def-as-ford.jpg",
		"score":[],
	},
	{
		"name": "Trillian",
		"photo": "http://68.media.tumblr.com/318c41d11fee1d0b7efc3919458ffe46/tumblr_inline_mfep2aT1DJ1qbg6u8.jpg",
		"scores": [],
	},
	{
		"name": "Zaphod Beeblebrox",
		"photo": "https://pp.userapi.com/c621423/v621423299/18a56/JMX1_zFQh4E.jpg",
		"scores": []
	},
	{
		"name": "Marvin",
		"photo": "https://s-media-cache-ak0.pinimg.com/originals/a5/43/3d/a5433dd4448949a9c85c790dd4b29df8.jpg",
		"scores": []
	}
];

module.exports = friends;

// Determine the user's most compatible friend:

// Convert each user's results into a simple array of numbers 

// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on. 
// The closest match will be the user with the least amount of difference.



// Once you've found the current user's most compatible friend, display the result as a modal pop-up.


// The modal should display both the name and picture of the closest match.