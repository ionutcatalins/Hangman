    var wordReceived;
    var lengthString;
    let life = 7;
    let counterLetter;

function word() { // sohw word hidden and change button function 
    wordReceived = document.getElementById("in").value
    document.getElementById("in").value = ""
    lengthString = wordReceived.length
   
    for (let i = 0; i < lengthString; ++i) {
        let generate = document.createElement(type="text")
        generate.id = i;        
        if(i == 0) {
            $('#words').append('<text id=' + i +' > ' + wordReceived[i] + ' ' + '</text>');
        } else if (i < lengthString - 1) {
            $('#words').append('<text id=' + i +'> _</text>');
        } else if (i == lengthString - 1) {
            $('#words').append('<text id=' + i +' > ' + wordReceived[i] + '</text>');
        }
    }   
    counterLetter = lengthString - 2;
    document.getElementById("btn").innerHTML = "Incearca litera";
    document.getElementById("btn").setAttribute("onclick","letter()");
    document.getElementById("life").innerHTML = "Numar vieti: " + life;
}

function letter() { // check every letter and letter completion
    let letter = document.getElementById("in").value;
    let lengthLetter = letter.length;
    if(letter == "" || lengthLetter != 1) {
        alert("Nu ati introdus litera sau s-a introdus mai mult de o litera");
    } else {
        let check = 0;   
        document.getElementById("in").value = ""  
        for (let i = 1; i < lengthString - 1; ++i) {
            if (letter == wordReceived[i]) {
                document.getElementById(i).innerHTML = letter + " "
                check = 1;
                --counterLetter;
            }          
        }  
        if (check == 0) {
            --life;
        }        
        if (counterLetter == 0) {
            document.getElementById("endGame").innerHTML = "Felicitari ai castigat!"
        }
        if (life == 0) {
            document.getElementById("endGame").innerHTML = "Ai pierdut."
        }
        document.getElementById("life").innerHTML = "Numar vieti: " + life;
    }
}