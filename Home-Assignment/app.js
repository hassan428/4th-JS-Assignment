// Chapter 17 - 20 (for Loops)

// Question No. 1

for(var i = 0; i < 10; i++){
    console.log();
}


// Question No. 2

for(var i = 0; i <= 12; i++){
    console.log();
}


// Question No. 3

// for var i = 0 i <= 4 i++

for( var i = 0; i <= 4; i++){
    console.log();
}



// Question No. 4

for(var anyWord = 0; anyWord < 100; anyWord++){
    console.log();
}


// Question No. 5

for(var i =3; i > 0; i--){
    console.log();
}


// Question No. 6

var myArray = [1, 2, 3, 4, 123, 1234,];

console.log(myArray.length);



// Question No. 7

var flag = true;



// Question No. 8

var pets = ["Cat", "Dog", "Horse", "Fish", "Chicken"];

for(var i = 0; i < pets.length; i++){
    console.log();
}



// Question No. 9

for(var i =0; i <= 10; i++){
    if(i === 2){
        alert("The counter is 1 (second iteration)");
    }
}



// Question No. 10

var userNames = ["Hassan", "Waseem", "Anees", "Qasim", "Asad"];

var firstName = prompt("Enter First Name");

for(var i = 0; i < userNames.length; i++){
    if(firstName === userNames[i]){
        alert("Welcome "+ firstName);
        break;
    }
    if(i === userNames.length -1){
        alert("Please write correct user name");
}
}



// Question No. 11

var matchFound = false;

var list = ["Match 1", "Match 2", "Match 3", "Match 4", "Match 5"];

var userInput = prompt("Enter Match");

for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
 }

 if(i === list.length - 1){
    alert("Match not found");
 }
}; 



// Question No. 12

var firstArr = ["a", "b", "c", "d", "e", "f"]; 
var secondArr = [1, 2, 3, 4, 5, 6]; 

for(var i = 0; i < firstArr.length; i++){
    
    for(var j = 0; j < secondArr.length; j++){
        document.write( firstArr[i] , secondArr[j] ,"<br>");
    }
}


// Chapter 17 - 20 (for Loops) Completed

     // ================= THE END ================= 

