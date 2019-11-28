/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
document.getElementById("btn__reset").addEventListener("click", function(){
	game = new Game();
	game.startGame();
});

// Part II

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("click", function(e){
	game.handleInteraction(e.target);
}))