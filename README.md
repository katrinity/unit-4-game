# unit-4-game

![](Oct 20, 2019 11_58 PM.webm)


Here is how my game looks
<img width="1050" alt="Screen Shot 2019-10-20 at 11 19 53 PM" src="https://user-images.githubusercontent.com/42060484/67181034-416ccb80-f390-11e9-92d9-943f4854cae3.png">


I copied reset styles  for my reset.css here: https://meyerweb.com/eric/tools/css/reset/

I obtained background image for my game  here: https://www.toptal.com/designers/subtlepatterns/

Images of the crystal was downloaded from google images.

After I  completed tis game, I wend back and added function ```play ```

```play = () => {
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
```

This way I didn't have to rewright the same code over and over again after every ```$('.button1').on("click", event => ```

Deployed project link https://katrinity.github.io/unit-4-game/
