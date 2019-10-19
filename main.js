function generateALL() {
    // Arrays for the four types of characters //
    const array__lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const array__upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const array__numerical = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const array__symbolic = ['!', '@', '#', '$', '%', '&', '*'];

    // PASSWORD 8 CHARACTERS //
    var display__output = "";
    for (var i = 0; i < 8; i++) {
        //choose number 0 to 3 - relates to 4 array//
        var rnd__chooseArray = Math.floor(Math.random() * 4 - 0);
        if (rnd__chooseArray == 0) { var pwchar = array__lowerCase[Math.floor(Math.random() * array__lowerCase.length)] }
        if (rnd__chooseArray == 1) { var pwchar = array__upperCase[Math.floor(Math.random() * array__upperCase.length)] }
        if (rnd__chooseArray == 2) { var pwchar = array__numerical[Math.floor(Math.random() * array__numerical.length)] }
        if (rnd__chooseArray == 3) { var pwchar = array__symbolic[Math.floor(Math.random() * array__symbolic.length)] }
        display__output = display__output + pwchar;
        document.getElementById('Password_8').innerText = display__output
    }

    // PASSWORD 12 CHARACTERS //
    var display__output = "";
    for (var i = 0; i < 12; i++) {
        //choose number 0 to 3 - relates to 4 array//
        var rnd__chooseArray = Math.floor(Math.random() * 4 - 0);
        if (rnd__chooseArray == 0) { var pwchar = array__lowerCase[Math.floor(Math.random() * array__lowerCase.length)] }
        if (rnd__chooseArray == 1) { var pwchar = array__upperCase[Math.floor(Math.random() * array__upperCase.length)] }
        if (rnd__chooseArray == 2) { var pwchar = array__numerical[Math.floor(Math.random() * array__numerical.length)] }
        if (rnd__chooseArray == 3) { var pwchar = array__symbolic[Math.floor(Math.random() * array__symbolic.length)] }
        display__output = display__output + pwchar;
        document.getElementById('Password_12').innerText = display__output
    }

    // PASSWORD 15 CHARACTERS //
    var display__output = "";
    for (var i = 0; i < 15; i++) {
        //choose number 0 to 3 - relates to 4 array//
        var rnd__chooseArray = Math.floor(Math.random() * 4 - 0);
        if (rnd__chooseArray == 0) { var pwchar = array__lowerCase[Math.floor(Math.random() * array__lowerCase.length)] }
        if (rnd__chooseArray == 1) { var pwchar = array__upperCase[Math.floor(Math.random() * array__upperCase.length)] }
        if (rnd__chooseArray == 2) { var pwchar = array__numerical[Math.floor(Math.random() * array__numerical.length)] }
        if (rnd__chooseArray == 3) { var pwchar = array__symbolic[Math.floor(Math.random() * array__symbolic.length)] }
        display__output = display__output + pwchar;
        document.getElementById('Password_15').innerText = display__output
    }

    // PASSWORD 24 CHARACTERS //
    var display__output = "";
    for (var i = 0; i < 24; i++) {
        //choose number 0 to 3 - relates to 4 array//
        var rnd__chooseArray = Math.floor(Math.random() * 4 - 0);
        if (rnd__chooseArray == 0) { var pwchar = array__lowerCase[Math.floor(Math.random() * array__lowerCase.length)] }
        if (rnd__chooseArray == 1) { var pwchar = array__upperCase[Math.floor(Math.random() * array__upperCase.length)] }
        if (rnd__chooseArray == 2) { var pwchar = array__numerical[Math.floor(Math.random() * array__numerical.length)] }
        if (rnd__chooseArray == 3) { var pwchar = array__symbolic[Math.floor(Math.random() * array__symbolic.length)] }
        display__output = display__output + pwchar;
        document.getElementById('Password_24').innerText = display__output
    }
}
    /////////// END FUNCTION ///////////
