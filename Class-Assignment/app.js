// Chapter 17 to 20

// "ARRAYS" AND "LOOP"


// Question No. 3


for(var i = 1; i <= 10; i++){
    document.write(i,"<br>");
};



// Question No. 4

var userTable = prompt("Enter a number to show it's multiplication table");
var userTableLength = prompt("Enter a length multiplication table");

    document.write("<br>Multiplication table of "+ userTable + 
                "<br>"+ "Length "+ userTableLength + "<br>");

for(var i = 1; i <= userTableLength; i++ ){
    document.write(userTable + " x " + i + " = " + i*userTable + "<br>");
};



// Question No. 5


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(var i = 0; i <= 4; i++){
    document.write(fruits[i] + "<br>");           
};

for(var i = 0; i <= 4; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");           
};



// Question No. 6

//a
document.write("<h3>Counting:</h3>");

for(var i = 1; i <= 15; i++){
    document.write(i,", ");
};



//b
document.write("<h3>Reverse Counting:</h3>");

for(var i = 10; i >= 1; i--){
    document.write(i,", ");
};


//c
document.write("<h3>Even Number Counting:</h3>");

for(var i = 0; i <= 20; i +=2){
    document.write(i, ", ");
};


//d 
document.write("<h3>Odd Number Counting: </h3>");

for(var i = 1; i <= 19; i += 2 ){
    document.write(i, ", ");
};



//e
document.write("<h3>Series:</h3>");

for(var i = 2; i <= 20; i +=2){
    document.write(i, "k, ");
};



// Question No. 7


var A = ["cake", "apple pie", "cookie", "chips", "patties"];


 var userOrder = prompt('"Welcom to My Bakery"\n' + "What do you want to order Sir/Ma'am");

 if(userOrder == A[0] ||
    userOrder == A[1] ||
    userOrder == A[2] ||
    userOrder == A[3] ||
    userOrder == A[4] ){
    document.write("<br>",userOrder, " is <b>available</b> at index ", A.indexOf(userOrder), " in our bakery");
}
else(document.write("<br> We are sorry. ",userOrder," is <b>not available</b> in our bakery" ));



// Question No. 8

var num = [24, 53, 78, 91, 12];
var largest = num[0];

for(var i = 0; i < num.length; i++){
    if (num[i] > largest){
        largest = num[i];
    };
};
document.write( "<br><br>Array items: ",num
,"<br>The largest number is ",largest);




// Question No. 9

var num = [24, 53, 78, 91, 12];
var smallest = num[0];

for(var i = 0; i < num.length; i++){
    if (num[i] < smallest){
        smallest = num[i];
    };
};
document.write( "<br><br><br>Array items: ",num,
"<br>The smallest number is ",smallest, "<br><br>");



// Question No. 10

for(var i =5; i <= 100; i+= 5){
    document.write(i, ", ");
};
