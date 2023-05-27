var scores, roundScore, activePlayer,gamePlaying;

gamePlaying = true;

function init () {
    scores = [0,0] ;
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current_score-0').textContent = '0';
    document.getElementById('current_score-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('player_name-0').textContent = 'Player 1';
    document.getElementById('player_name-1').textContent = 'Player 2';
    document.querySelector('.player0_panel').classList.remove('winner');
    document.querySelector('.player1_panel').classList.remove('winner');
    document.querySelector('.player0_panel').classList.remove('active');
    document.querySelector('.player1_panel').classList.remove('active');
    document.querySelector('.player0_panel').classList.add('active');
}

init();

//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current_score-' + activePlayer).textContent = dice;

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current_score-0').textContent = '0';
    document.getElementById('current_score-1').textContent = '0';

    document.querySelector('.player0_panel').classList.toggle('active');
    document.querySelector('.player1_panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.roll_dice_button').addEventListener('click', function() {
    if(gamePlaying === true) {
        //1.Random Number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2.Displaying dice acc to number
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = './img/' +'dice-' + dice + '.png';

        //3.Update the round score if 1 has not appeared and if 1 has appeared then change player
        if(dice !== 1) {
            //Add
            roundScore += dice;
            document.getElementById('current_score-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
    
});

document.querySelector('.load_button').addEventListener('click', function() {
    if(gamePlaying === true) {
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        
        if (scores[activePlayer] >= 100) {
            document.getElementById('player_name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player' + activePlayer + '_panel').classList.remove('active');
            document.querySelector('.player' + activePlayer + '_panel').classList.add('winner');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.new_game_button').addEventListener('click', init);

var line1 = "GAME RULES :";
var line2 = "1. The game has 2 players, playing in rounds";
var line3 = "2. In each turn a player rolls a dice as many times as he wishes. Each result gets added to the ROUND Score";
var line4 = "3. BUT IF the player rolls a 1, all his ROUND Score gets lost. After that it's the next player's turn";
var line5 = "4. The player can choose to HOLD, which means that his ROUND Score gets added to his GLOBAL Score. After that, it's the next player's turn";
var line6 = "5. The first one to score 100 points wins the game";
var line7 = "GLOBAL SCORE is the score below the PLAYER TAGS";
var line8 = "ROUND SCORE is the score in the yellow box";
var line9 = "6. Once the game is over click on the NEW GAME Button to start a new game";

var rules = line1 + "\n" + line2 + "\n" + line3 + "\n" + line4 + "\n" + line5 + "\n" + line6 + "\n" + line9 + "\n" + line7 + "\n" + line8 ;

function rulesAlert() {
    alert(rules);
}
