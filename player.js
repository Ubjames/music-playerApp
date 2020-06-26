const playBtn = document.querySelector(".big");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const playAndPauseBtnToggle = document.querySelector("#toggle");
const togglePoster = document.querySelector("#poster-shadow");
const playList = document.querySelector(".play-list");
const songMenu = document.querySelector(".song-menu");
const shuffleBtn = document.querySelector(".shuffle");

//variables
let posters = ["cat.gif", "Desert.jpg","Koala.jpg","Lighthouse.jpg","Penguins.jpg", "ubong1.jpg"]
let songtitle = document.querySelector("marquee");
let song = new Audio();
let currentSong = 0;

shuffleBtn.addEventListener("click", shuffleMusic);

// const songs = ["beStill.mp3","Mercy Chinwo - Akamdinelu.mp3", "Chris Morgan ft Mercy ChinwoAMANAMO.mp3", "idi-mma by Emoss.mp3", "Imenem  by Mercy Chinwo.mp3",]

const songs = [
	{
		name: "Be Still",
		artist:"Travis Greene",
		src:"songs/s1.mp3"
	},
	{	name:"ChinwoAMANAMO",
		artist:"Chris Morgan ft Mercy",
		src:"songs/s2.mp3"
	}
	/*,
	{
		name:"idi-mma",
		artist:"Emoss",
		src:"songs/idi-mma by Emoss.mp3"
	},

	{
		name:"Imenem",
		artist:"Mercy-Chinwo",
		src:"songs/Imenem  by Mercy Chinwo.mp3"
	},
	{
		name:"Akamdinelu",
		artist:"Mercy Chinwo",
		src:"songs/Mercy Chinwo - Akamdinelu.mp3"
	},
	{
		name:"OKEMMUO",
		artist:"Chioma Jesus Ft. Mercy Chinwo",
		src:"songs/Chioma Jesus Ft. Mercy Chinwo - OKEMMUO.mp3"
	},
*/
];
	

/*
function playMusic(){
for(i=currentSong; i<songs.length; i++){
	//console.log(songs[i].name)
	songMenu.innerHTML=`<ul><li>${songs[i].name}</li></ul>`
}

	

  
	// console.log(songs[i].name);

	// // songMenu.innerHTML = songs[currentSong]
	// // alert(`song No.: ${currentSong} is running now` )
	// // break;
	// }
	// songs.map((song, i) => {
	// 	songMenu.innerHTML = <ul><li>${song.name}</li></ul>`
	// 	console.log(song.name);
	// })
	// song.src = "songs/"+songs[i].src;
	// songtitle.innerHTML = songs[i].name;
	// playingIndicator()
	// song.play();
}

playBtn.addEventListener('click', playBtnfun);
nextBtn.addEventListener('click', nextBtnfun);
previousBtn.addEventListener('click', preBtnfun);



/**************************************************
  function on button to trigger the player event and toggle btw play/pause icons
 **************************************************/
 
 function shuffleMusic(){
   song.src = songs[Math.floor(Math.random() * songs.length)].src;
   song.play();
 }

function playBtnfun(){
	if(song.paused){
		
			playAndPauseBtnToggle.getAttribute('src');
			playAndPauseBtnToggle.setAttribute("src","icons/pause.png");
      song.src = songs[currentSong].src;
      console.log(songs[currentSong].src);
			playingIndicator();
			song.play();
		
		
	}else{
			song.pause();
			noIndicator();
			playAndPauseBtnToggle.getAttribute('src');
			playAndPauseBtnToggle.setAttribute("src","icons/play.png");

		}
	}

function nextBtnfun(){ 
	currentSong++;
 	
	//to switch btw posters
	togglePoster.getAttribute('src');
	togglePoster.setAttribute("src","posters/" + posters[currentSong]);

	if(currentSong > songs.length - 1){
		currentSong = 0;
	}
  song.src = songs[currentSong].src;
	songtitle.innerHTML = songs[currentSong].name;
	console.log(song.src);

	//console.log(currentSong)
song.play();	
}
function preBtnfun(){ 
	currentSong--;
 	
	if(currentSong < 0){
		currentSong = songs.length - 1;
	}
  song.src = songs[currentSong].src;
	songtitle.innerHTML = songs[currentSong].name;

song.play();	
}

function playingIndicator(){
	playBtn.getAttribute("class");
	playBtn.setAttribute("class", "big border1");

}
function noIndicator(){
	playBtn.setAttribute("class", "big ");

}
 /*function switchPosters(){
 	posters = currentSong
	togglePoster.getAttribute('src');
	togglePoster.setAttribute("src","posters[currentSong]")
	
}console.log(posters[currentSong])
*/

// to display song lists
// playList.addEventListener("click",function(){

// 	songMenu.innerHTML="";
// 	songMenu.innerHTML=songs;
// })

playAndPauseBtnToggle.addEventListener("click", playBtnfun);

nextBtn.addEventListener('click', nextBtnfun);
previousBtn.addEventListener('click', preBtnfun);