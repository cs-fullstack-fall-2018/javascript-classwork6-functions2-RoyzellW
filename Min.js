function main() {

    var userInput = parseInt(prompt("Enter your favorite number: "));
    aboveOrBelow100(userInput);
}

main();


function aboveOrBelow100(userInput) {
    if (userInput < 100) {
        alert("Below 100!");
    }
    else if (userInput === 100) {
        alert("Equals 100!")
    }
}




