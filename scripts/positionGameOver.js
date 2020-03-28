function GameOverPosition() {

}
GameOverPosition.prototype.draw = function(play) {
    ctx.clearRect(0, 0, play.width, play.height);
    ctx.font = "40px Comic Sans MS";
    ctx.textAlign = "center"; 
    ctx.fillStyle = '#ffffff';
    ctx.fillText("Game Over!", play.width / 2, play.height / 2 - 120); 
	ctx.font = "36px Comic Sans MS";
    ctx.fillStyle = '#D7DF01';
    if (play.level < 11) {
        ctx.fillText("You've reached level " + play.level + " and your score is " + play.score + ".", play.width / 2, play.height/2 - 40);
    }
    else {
        ctx.fillText("You've finished all 10 levels and your score is " + play.score + ".", play.width / 2, play.height/2 - 40);
    }
    ctx.font = "36px Comic Sans MS";
    ctx.fillStyle = '#D7DF01';
    ctx.fillText("Press 'Space' to continue.", play.width / 2, play.height / 2 + 40);
    if (play.level > 10) {
        ctx.fillStyle = '#FF0000';
        ctx.fillText("You are a hero for destroying every UFO!", play.width / 2, play.playBoundaries.bottom);
    }
}
GameOverPosition.prototype.keyDown = function(play, keyboardCode) {
    if(keyboardCode == 32)  {
        play.goToPosition(new OpeningPosition());
    }
}