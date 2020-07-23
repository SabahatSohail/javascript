// ========== Q1 CH # 39-42 ==========
// function power(){
// var a = prompt ("Enter your base")
// var b = prompt("Enter your power")
// var c = Math.pow(a,b)
// document.write("The result is " + c)
// }

// power()

// ========== Q2 CH # 39-42 ==========

// function leapyear(){
//     var year = prompt("Enter any year")
//     let answer
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         answer = "This year is leap year";
//     } else {
//         answer = "This year is not a leap year";
//     }
//     document.write(answer)}
// leapyear()

// ========== Q3 CH # 39-42 ==========
// function area(){
//     var a = prompt("Enter length of first side of triangle")
//     var b = prompt("Enter length of second side of triangle")
//     var c = prompt("Enter length of third side of triangle")
//     var s = (parseInt(a) + parseInt(b) + parseInt(c) )/2
//     var area = s * (s-parseInt(a))*(s-parseInt(b))*(s-parseInt(c))
// document.write (area)
// }

// function call(){ 
//     document.write("The area of triangle is " )
// area()
// }

// call()


// ========== Q4 CH # 39-42 ==========
// var a = prompt("Enter marks in first subject")
// var b = prompt("Enter marks in second subject")
// var c = prompt("Enter marks in third subject")
// function average(){ 
//     var av = (parseInt(a) + parseInt(b) + parseInt(c) )/ 3
//     document.write(av)
// }

// function percentage(){
//     var per = (parseInt(a) + parseInt(b) + parseInt(c)) /300 * 100
// document.write (per)
// }

// function main(){
//     document.write ("Your average marks are ");
//     average();
//     document.write ("<br>" + "Your percentage is ")
//     percentage();
// }

// main()

// ========== Q5 CH # 39-42 ==========
// var a = "My name is Sabahat Sohail"
// var b = a.indexOf('o')
// document.write(a +"<br>"+"The index of o in the above string is " + b)

// ========== Q6 CH # 39-42 ==========

// var strings = "A quick brown fox jumps over the lazy dog";                          

//    string = strings.replace( /[aeiouAEIOU]/g, '' );              

//   document.write( "Sentence with vowels: " + strings + "<br>" + "Sentence without vowels: " + string); 

// ========== Q7 CH # 39-42 ==========
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var chars = str.toLowerCase().split("");
//     var count = 0;
    
//     for(let i = 0; i < chars.length - 1; i++) 
//     { var char = chars[i];
//       var next = chars[i + 1];
//       if(isCorrectCharacter(char) && isCorrectCharacter(next))
//         {count++}
//     }
//     return count;
//   }
  
//   function isCorrectCharacter(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }
  
//   var found = findOccurrences();
  
//   document.write(found);

// ========== Q8 CH # 39-42 ==========
// var value = prompt("Enter distance between any two cities (in km.)")
// document.write("The distance in Km = " + parseInt(value) + " Km." + "<br>")
// function meters(){
//     document.write("Distance in Meter = " + parseInt(value) * 1000 + " m." + "<br>")
    
// }
// meters()

// function feet(){
//     document.write("Distance in Feet = " + parseInt(value) * 3280.84 + " ft." + "<br>")
    
// }
// feet()

// function inches(){
//     document.write("Distance in Inches = " + parseInt(value) * 39370 + " inches." + "<br>")
    
// }
// inches()

// function centimeters(){
//     document.write("Distance in Centimeter = " + parseInt(value) * 100000 + " cm.")
    
// }
// centimeters()


// ========== Q9 CH # 39-42 ==========
// var input = prompt("Enter no. of hours worker work in a month")
// function overtime(){
//     if (parseInt(input) < 40)
//     {document.write("Total no. of hours:  " + parseInt(input) + " hrs." + "<br>" )
//     var overtimehrs = parseInt(input) - 40
//     document.write("No. of hours of overtime: " + overtimehrs + " hrs." + "<br>" + 
//     "Rate for each hour of overtime: Rs.12.00" + "<br>" +
//     "Payment of overtime: Rs.0" )}
//     else{
//     document.write("Total no. of hours:  " + parseInt(input) + " hrs." + "<br>" )
//     var overtimehrs = parseInt(input) - 40
//     document.write("No. of hours of overtime: " + overtimehrs + " hrs." + "<br>")
//     var pay = overtimehrs * 12
//     document.write("Rate for each hour of overtime: Rs.12.00" + "<br>" +
//     "Payment of overtime: Rs." + pay )}

// }
// overtime()


// ========== Q10 CH # 39-42 ==========
// var amount = prompt("Enter amount to withdraw(in hundreds)!!")
// function withdraw(){
//     var hun = parseInt(amount / 100)
//     var tens =parseInt(amount % 100 / 50)
//     var unit =parseInt( amount %100 % 50/ 10)
//     document.write("You will have " + hun + " hundreds notes " + tens + " fifty notes " + unit + " ten notes")
// }
// withdraw()


// ========== Q3 CH # 43-48 ==========
// function del(){
//     var td = event.target.parentNode; 
//     var tr = td.parentNode;
//     tr.parentNode.removeChild(tr);
// }


// ========== Q5 CH # 43-48 ==========
// var clicks = 0;
//     function increase() {
//         clicks += 1;
//         document.getElementById("clicks").innerHTML = clicks;
//     };
// function decrease(){
//     clicks -= 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }

// ========== Q1 CH # 49-52 ==========
// function checkvalue(){
//     var fn = document.getElementById('fn').value
//     if( fn === ""){alert("First Name Required")}
//     var ln = document.getElementById('ln').value
//     if( ln === ""){alert("Last Name Required")}
//     var email = document.getElementById('email').value
//     if( email === ""){alert("Email Address Required")}
//     var password = document.getElementById('password').value
//     if( password === ""){alert("Password Required")}
//     var cpass = document.getElementById('cpass').value
//     if( cpass === ""){alert("Please confirm your password")}
// }

// ========== Q2 CH # 49-52 ==========
// function details(){
//     var detail = "<h4>" + "Details" + "</h4>" + "<li>" + "3 layers" + "</li>" + "<li>" + "Red & Black color" + "</li>"
//     + "<li>" + " Teddy bear" + "</li>" + "<li>" + "Approx 25 chocolates" + "</li>"
// document.getElementById('detail').innerHTML = detail
// }

// ========== Q1 CH # 58-67 ==========
var a = document.getElementById("main-content");
var b = a.childNodes[1];
var c = b.innerHTML
console.log(c)

