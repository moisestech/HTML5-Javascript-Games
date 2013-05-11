console.log("stuff!");

//Create an array of Natural Wonders
var wonderImages = [
	"1001/wonders/0001_wonders.jpg",
	"1001/wonders/0002_wonders.jpg",
	"1001/wonders/0003_wonders.jpg",
	"1001/wonders/0004_wonders.jpg",
	"1001/wonders/0005_wonders.jpg"
]

//Create an array of Dream Cars
var carImages = [
	"1001/cars/cars_png/0001_cars.png",
	"1001/cars/cars_png/0002_cars.png",
	"1001/cars/cars_png/0003_cars.png",
	"1001/cars/cars_png/0004_cars.png",
	"1001/cars/cars_png/0005_cars.png",
	"1001/cars/cars_png/0006_cars.png",
	"1001/cars/cars_png/0007_cars.png",
	"1001/cars/cars_png/0008_cars.png",
	"1001/cars/cars_png/0009_cars.png",
	"1001/cars/cars_png/0010_cars.png"
]

//Create an array of Songs
var audioSongs = [
	"1001/songs/0001_songs.mp3",
	"1001/songs/0002_songs.mp3",
	"1001/songs/0003_songs.mp3",
	"1001/songs/0004_songs.mp3",
	"1001/songs/0005_songs.mp3"
]

//Create an array of Movies
var videoMovies = [
	"1001/movies/0001_movies.mp4",
	"1001/movies/0002_movies.mp4",
	"1001/movies/0003_movies.mp4",
	"1001/movies/0004_movies.mp4",
	"1001/movies/0005_movies.mp4"
]

//Select a random item from each array list
var randomWonderImage = wonderImages[Math.floor(Math.random()* 5)];
var randomCarImage = carImages[Math.floor(Math.random()* 11)];
var randomAudioSong = audioSongs[Math.floor(Math.random()* 5)];
var randomVideoMovie = videoMovies[Math.floor(Math.random()* 5)];


//Select the image templates from the dom tree
// and replace with random item 

		// wonder Image
		var wonderImage = document.getElementById("wonders");
		wonderImage.src = randomWonderImage;

		// car Image
		var carImage = document.getElementById("cars");
		carImage.src = randomCarImage;

		
		/* -- audio video -- */
		// audio song
		var audioSong = document.getElementById("songs");
		audioSong.src = randomAudioSong;

		var videoMovie = document.getElementById("videos");
		var videoMovieSrc = document.getElementById("source");
		videoMovieSrc.src = randomVideoMovie;
		videoMovie.load();

		console.log(videoMovie);
		console.log(videoMovie.src);








