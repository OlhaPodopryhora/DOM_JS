(function(){
	'use strict';

		var playList = [
	 {
	  author: "LED ZEPPELIN",
	  song:"STAIRWAY TO HEAVEN"
	 },
	 {
	  author: "QUEEN",
	  song:"BOHEMIAN RHAPSODY"
	 },
	 {
	  author: "LYNYRD SKYNYRD",
	  song:"FREE BIRD"
	 },
	 {
	  author: "DEEP PURPLE",
	  song:"SMOKE ON THE WATER"
	 },
	 {
	  author: "JIMI HENDRIX",
	  song:"ALL ALONG THE WATCHTOWER"
	 },
	 {
	  author: "AC/DC",
	  song:"BACK IN BLACK"
	 },
	 {
	  author: "QUEEN",
	  song:"WE WILL ROCK YOU"
	 },
	 {
	  author: "METALLICA",
	  song:"ENTER SANDMAN"
	 }
	];

	(function createOl(){
		let OrderedList = document.createElement('ol');
		let body = document.querySelector('body');
		OrderedList.setAttribute('id', 'list');
		body.appendChild(OrderedList);
	})();

	(function getPlaylist(){
		let list = document.getElementById('list');
			for(let i=0; i < playList.length; i++){
				let listItem = document.createElement('li');
				listItem.innerText = playList[i].author + ' \- ' + playList[i].song;
				listItem.classList.add('point');
				list.appendChild(listItem);
			}

	})();




})();