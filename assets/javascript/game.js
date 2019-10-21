let number ;//= Math.floor((Math.random() * 101) + 19);
let crystalvalue1;// = Math.floor((Math.random() * 11) + 1);
let crystalvalue2;// = Math.floor((Math.random() * 11) + 1);
let crystalvalue3;// = Math.floor((Math.random() * 11) + 1);
let crystalvalue4;// = Math.floor((Math.random() * 11) + 1);

let num_wins = 0;
let num_losses = 0;
let score_counter = 0;


const reset = () => {
    score_counter = 0;
    number = Math.floor((Math.random() * 101) + 19);
    crystalvalue1 = Math.floor((Math.random() * 11) + 1);
    crystalvalue2 = Math.floor((Math.random() * 11) + 1);
    crystalvalue3 = Math.floor((Math.random() * 11) + 1);
    crystalvalue4 = Math.floor((Math.random() * 11) + 1);

    $('#wins').html('Wins: ' + num_wins);
    $('#losses').html(`Losses: ${num_losses}`);
    $('#randomnumber').html(number);
    $('#score_counter').html("");
    //$('.button1').html(crystalvalue1);
    //$('.button2').html(crystalvalue2);
    //$('.button3').html(crystalvalue3);
    //('.button4').html(crystalvalue4);
    
    
};

 play = () => {
    if (number === score_counter) {
        num_wins += 1;
        $('#wins').html(`Wins: ${num_wins}`);
        $('#message').html ('You won!');
        reset();
    } else if (number < score_counter) {
        num_losses += 1;
        $('#losses').html(`Losses: ${num_losses}`);
        $('#message').html ('You lost!');
        reset();
    } 
        
};

$(document).ready(() => {
    reset();
   // $('.button1').html(crystalvalue1);
   // $('.button2').html(crystalvalue2);
    //$('.button3').html(crystalvalue3);
   // $('.button4').html(crystalvalue4);
    
    $('.button1').on("click", event => {
        score_counter+=crystalvalue1;
        $('#score_counter').html(score_counter);
        play();
        
    });
    $('.button2').on("click", event => {
        score_counter+=crystalvalue2;
        $('#score_counter').html(score_counter);
        play ();
            
    });
    $('.button3').on("click", event => {
        score_counter+=crystalvalue3;
        $('#score_counter').html(score_counter);
        play ();
            
    });
    $('.button4').on("click", event => {
        score_counter+=crystalvalue4;
        $('#score_counter').html(score_counter);
        play ();
    });

});


