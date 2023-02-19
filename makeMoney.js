
(function() {

    const makeMoneyButton = document.getElementById('button');
    // console.log(makeMoneyButton);
    makeMoneyButton.addEventListener('click', () => {
        const totalCoins = document.getElementById('howManyInput').value;
            console.log(totalCoins);
        let whichCoinsInput = document.getElementById('whichCoinsSelection').value;
        // console.log(whichCoinsInput);
            if (whichCoinsInput === 'penny') {
                const pennies = document.getElementById('penny').value;
                // console.log(pennies);
                    document.getElementById('pennyCircle').style.visibility = "visible";
                    document.getElementById('dimeCircle').style.visibility = "hidden";
                    document.getElementById('nickelCircle').style.visibility = "hidden";
                    document.getElementById('quarterCircle').style.visibility = "hidden";
                
            } else if (whichCoinsInput === 'nickel') {
                const nickels = document.getElementById('nickel').value;
                // console.log(nickels);
                    document.getElementById('pennyCircle').style.visibility = "hidden";
                    document.getElementById('dimeCircle').style.visibility = "hidden";
                    document.getElementById('nickelCircle').style.visibility = "visible";
                    document.getElementById('quarterCircle').style.visibility = "hidden";
            } else if (whichCoinsInput === 'dime') {
                const dimes = document.getElementById('dime').value;
                // console.log(dimes);
                    document.getElementById('pennyCircle').style.visibility = "hidden";
                    document.getElementById('dimeCircle').style.visibility = "visible";
                    document.getElementById('nickelCircle').style.visibility = "hidden";
                    document.getElementById('quarterCircle').style.visibility = "hidden";
            } else if (whichCoinsInput === 'quarter') { 
                const quarters = document.getElementById('quarter').value;
                // console.log(quarters);
                    document.getElementById('pennyCircle').style.visibility = "hidden";
                    document.getElementById('dimeCircle').style.visibility = "hidden";
                    document.getElementById('nickelCircle').style.visibility = "hidden";
                    document.getElementById('quarterCircle').style.visibility = "visible";
            } else {
                // alert("Invalid selection!  Please choose a coin type."); <== uncomment this!!
            }
                //The above logs as it should - right now.
    
    })
    
    
    }())