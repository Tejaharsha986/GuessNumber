var guess = Math.floor( Math.random() *100) + 1

    
    /*
    math.random we give number between 0 and 1 by multiplying with
    100 we will get no from 0 to 99 to get no from 1 to 100 we are
    adding +1 at the end */
function cal()
{
    if(document.getElementById('teja').value == "")
    {
        document.getElementById('out').innerHTML = "Enter a number"
        return
    }
    var n = parseInt(document.getElementById('teja').value)
    if(n == guess)
    {
        document.getElementById('out').innerHTML = 'Congarts You Got it'
    }
    else if(n > guess)
    {
        document.getElementById('out').innerHTML = 'Guess the Smaller Number'
    }
    else{
        document.getElementById('out').innerHTML = 'Guess the larger number'
    }
}