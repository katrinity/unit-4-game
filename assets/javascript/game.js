let NUMBER = Math.floor((Math.random() * 120) + 19);
let CRYSTALVALUE = Math.floor((Math.random() * 12) + 1);

let NUM_WINS = 0;
let NUM_LOSES = 0;


const reset = () => {
    NUM_WINS = 0;
    NUM_LOSES = 0;
    NUMBER = Math.floor((Math.random() * 120) + 19);
    CRYSTALVALUE = Math.floor((Math.random() * 12) + 1);
    
    $('#wins').html('Wins: ' + NUM_WINS);
    $('#losses').html(`Losses: ${NUM_LOSES}`);
    $('#randomnumber').html('' + String.fromCharCode(NUMBER));
};

reset();

