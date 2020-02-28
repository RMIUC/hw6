var video;

function getVid(){
	video = document.querySelector("#myVideo");
	var playButton = document.querySelectorAll('button');
	console.log(playButton[0]);
	playButton[0].innerHTML ='<img src="./images/play.png" alt="play" width=20>';
	console.log(playButton[1]);
	playButton[1].innerHTML ='<img src="./images/pause.png" alt="pause" width=20>';

}

function playVid() {
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	video.play();
	console.log(video);
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
		video.playbackRate = (0.8);
  	console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
		video.playbackRate = (1.5);
		console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	console.log("Current location is "+ video.currentTime);
}

function mute() {
	if(video.muted){
			document.querySelector('#mute').innerHTML='Mute';
			video.muted =false;
			console.log("Unmuted");

	}

	else {
			document.querySelector('#mute').innerHTML='Unmute';
			video.muted=true;
			console.log("Muted");
	}

}

function changeVolume() {
		video.volume = document.getElementById("volumeSlider").value / 100;
		document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
		console.log("Volume is " + video.volume * 100 + '%');
}


function gray() {
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	video.style.filter = "grayscale(0%)";
	console.log("In color")
}
