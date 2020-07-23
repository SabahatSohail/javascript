// ---------------- Q1 Ch # 21-25 ----------------
// var firstname = prompt("Enter your First Name")
// var lastname = prompt("Enter your Last Name")
// var fullname = firstname + " " + lastname
// alert ("Hi! " + fullname + "Welcome to our website..." )


// ---------------- Q2 Ch # 21-25 ----------------
// var mobilemodel = prompt("Enter your favourite mobile phone model")
// var charc = mobilemodel.length
// document.write("Your favourite mobile phone model is: " + mobilemodel + "<br>")
// document.write("Length of string is: " + charc)

// ---------------- Q3 Ch # 21-25 ----------------
// var a = "Pakistani"
// var b = a.indexOf("n")
// document.write("String is: " + a + "<br>" + "index of n: " + b)

// ---------------- Q4 Ch # 21-25 ----------------
// var a = "Hello World"
// var b = a.lastIndexOf("l")
// document.write("String is: " + a + "<br>" + "index of l: " + b)

// ---------------- Q5 Ch # 21-25 ----------------
// var a = "Pakistani"
// var b = a.slice(3,4)
// document.write("String is: " + a + "<br>" + "Character at index 3: " + b)


// ---------------- Q6 Ch # 21-25 ----------------
// var firstname = prompt("Enter your First Name")
// var lastname = prompt("Enter your Last Name")
// var fullname = firstname.concat(lastname)
// alert ("Hi! " + fullname + "Welcome to our website..." )

// ---------------- Q7 Ch # 21-25 ----------------
// var city = "Hyderabad"
// var afterreplace = city.replace("Hyder","Islam")
// document.write("City = " + city + "<br>" + "After Replacement = " + afterreplace)

// ---------------- Q8 Ch # 21-25 ----------------
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var afterreplace = message.replace(/and/g, "&")
// document.write("Message = " + message + "<br>" + "After Replacement = " + afterreplace)

// ---------------- Q9 Ch # 21-25 ----------------
// var stringvalue = "472"
// var numbervalue = parseInt(stringvalue)
// document.write("Value: " + stringvalue + "<br>" + "Type: " + typeof(stringvalue) + "<br>" + "Value: " + numbervalue + "<br>" + "Type: " + typeof(numbervalue))


// ---------------- Q10 Ch # 21-25 ----------------
// var input = prompt("Enter anything")
// var caps = input.toUpperCase()
// document.write("Input: " + input + "<br>" + "UpperCase: " + caps)

// ---------------- Q11 Ch # 21-25 ----------------
// var input = prompt("Enter anything")
// var firstword = input.slice(0,1)
// var otherwords = input.slice(1)
// firstword = firstword.toUpperCase()
// otherwords = otherwords.toLowerCase()
// document.write("Input: " + input + "<br>" + "TitleCase: " + firstword + otherwords)


// ---------------- Q12 Ch # 21-25 ----------------
// var num = 35.36
// var string = num.toString()
// document.write( "Number: " + num + "<br>" + "Result: " + string.slice(0,2) + string.slice(3))

// ---------------- Q13 Ch # 21-25 ----------------
// var a = prompt("Enter Username")
// for ( i = 0; i < a.length; i++) 
// {if (a.charAt(i) === "!") { alert("Please enter a valid username")}
// else if (a.charAt(i) === ",") { alert("Please enter a valid username")}
// else if (a.charAt(i) === ".") { alert("Please enter a valid username")}
// else if (a.charAt(i) === "@") { alert("Please enter a valid username")}}


// ---------------- Q14 Ch # 21-25 ----------------
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var b = prompt("welcome to ABC Bakery! What do you want to order sir/maam??")
// b = b.toLowerCase()
// var c = a.indexOf(b);
// if (c = a){document.write( b + " is avaialable at index " + a.indexOf(b) + " in our Bakery")}
// else {document.write("We are sorry! " + b + " is not available in our bakery" )}


// ---------------- Q15 Ch # 21-25 ----------------


// ---------------- Q16 Ch # 21-25 ----------------
// var university = "University of Karachi" 
// var b = university.split("")
// for(var i = 0; i<b.length; i++)
// {document.write(b[i] + "<br>")}

// ---------------- Q17 Ch # 21-25 ----------------
// var input = prompt("Enter anything")
// var b = input.lastIndexOf()
// var c = input.slice(b)
// document.write("User input: " + input + "<br>" + "Last character of input: " + c)

// ---------------- Q18 Ch # 21-25 ----------------
// var text = "The quick brown fox jumps over the lazy dog"


// ---------------- Q1 Ch # 26-30 ----------------
// var num = prompt("Enter any positive integer")
// document.write("input: " + num + "<br>")
// var round = Math.round(num)
// document.write("Round off value: " + round + "<br>")
// var floor = Math.floor(num)
// document.write("floor value: " + floor + "<br>")
// var ceil = Math.ceil(num)
// document.write("Ceil value: " + ceil + "<br>")

// ---------------- Q2 Ch # 26-30 ----------------
// var num = prompt("Enter any negative integer")
// document.write("input: " + num + "<br>")
// var round = Math.round(num)
// document.write("Round off value: " + round + "<br>")
// var floor = Math.floor(num)
// document.write("floor value: " + floor + "<br>")
// var ceil = Math.ceil(num)
// document.write("Ceil value: " + ceil + "<br>")


// ---------------- Q3 Ch # 26-30 ----------------
// var num = prompt("Enter any negative number")
// var a = Math.abs(num)
// document.write("The absoulte value of " + num + " is " + a)


// ---------------- Q4 Ch # 26-30 ----------------
// var a = Math.random()
// var b = Math.round(a*6)
// document.write("Random dice value: " + b + "<br>")


// ---------------- Q5 Ch # 26-30 ----------------
// var a = Math.random()
// var b = Math.round(a*2)
// if (b === 2){document.write("Random coin value: Heads")}
// else{document.write("Random coin value: Tails")}

// ---------------- Q6 Ch # 26-30 ----------------
// var a = Math.random()
// var b = Math.round(a*100)
// document.write("Random value between 1 and 100: " + b)

// ---------------- Q7 Ch # 26-30 ----------------
// var a = prompt("Enter your weight")
// var b = parseFloat(a)
// document.write("The weight of user is " + b + " kilograms")

// ---------------- Q8 Ch # 26-30 ----------------
// var a = 5
// var b = prompt("Enter any number from 1-10")
// if (parseInt(b) === a){document.write("Congratulations")}
// else{document.write("Try again")}

// ---------------- Q1 Ch # 31-34 ----------------
// var now = new Date()
// document.write(now)

// ---------------- Q2 Ch # 31-34 ----------------
// var monthnames = ["January", "Feburary","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var now = new Date()
// var month = now.getMonth()
// var a = monthnames[month]
// document.write("Current Month: " + a)

// ---------------- Q3 Ch # 31-34 ----------------
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var now = new Date()
// var day = now.getDay()
// var a = dayNames[day]
// document.write("Today is " + a)


// ---------------- Q4 Ch # 31-34 ----------------
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var now = new Date()
// var day = now.getDay()
// var a = dayNames[day]
// if (a === "sat"){
// document.write("Today is fun day")}
// else if (a === "sun"){
// document.write("Today is fun day")}
// else {document.write("Today is " + a)}


// ---------------- Q5 Ch # 31-34 ----------------
// var now = new Date()
// var date = now.getDate()
// if (date <= 15){document.write("First fifteen days of the month")}
// else{document.write("Last fifteen days of the month")}


// ---------------- Q6 Ch # 31-34 ----------------
// var now = new Date()
// document.write("Current Date: " + now + "<br>")
// var time = now.getTime()
// document.write("Elapsed milliseconds since  Jan. 1, 1970: " + time + "<br>")
// var mins = time * 1000 * 60
// document.write("Elapsed minutes since  Jan. 1, 1970: " + mins + "<br>")


// ---------------- Q7 Ch # 31-34 ----------------
// var now = new Date()
// var hour = now.getHours()
// if (hour >= 12){document.write("It's P.M")}
// else{document.write("It's A.M")}

// ---------------- Q8 Ch # 31-34 ----------------
// var laterdate = new Date("Dec 31, 2020")
// document.write(laterdate)

// ---------------- Q9 Ch # 31-34 ----------------
// var now = new Date()
// var previous = new Date("Jun 18, 2015")
// var diff = now - previous
// var day = diff/(1000*60*60*24)
// document.write(Math.floor(day) + " days has passed since 1st Ramadan, 2015.")

// ---------------- Q10 Ch # 31-34 ----------------
// var now = new Date("Dec 05, 2015 22:50:60")
// var previous = new Date("Dec 01, 2015")
// var diff = now - previous
// var seconds = diff/(1000)
// document.write("On reference date " + now + " " + Math.floor(seconds) + "," + " seconds had passed since beginning of 2015.")

// ---------------- Q11 Ch # 31-34 ----------------
// var date = new Date("June 23, 2020 12:56:00")
// document.write("Current Date: " + date + "<br>")
// var hours = date.getHours()
// var laterdate = new Date("June 23, 2020 11:56:00")
// document.write("1 hour ago the date was: " + laterdate)


// ---------------- Q12 Ch # 31-34 ----------------
// var date = new Date("June 23, 2020 12:56:00")
// document.write("Current Date: " + date + "<br>")
// var hours = date.getFullYear()
// var earlyyear = new Date("June 23, 1920 12:56:00")
// document.write("100 years back, it was: " + earlyyear)


// ---------------- Q13 Ch # 31-34 ----------------
// var age = prompt('Enter your age')
// var date = new Date()
// var currentyear = date.getFullYear()
// var dateofbirth = currentyear - parseInt(age)
// document.write("Your age is: " + age + "<br>" + "Your Date of Birth is: " + dateofbirth)

// ---------------- Q14 Ch # 31-34 ----------------
// document.write("<h1>" + "K-Electric Bill" + "</h1>" + "<br>")
// var consumername = "Sabahat Sohail"
// document.write("Consumer Name: " + consumername + "<br>")
// var month = "Feburary"
// document.write("Month: " + month + "<br>")
// var noofunits = 410
// document.write("No. of units: " + noofunits + "<br>")
// var charges = 16
// document.write("Charges: " + charges + "<br>" + "<br>")
// var netamount = noofunits*charges
// document.write("Net amount payable within due date: " + netamount + "<br>")
// var latecharges = 350
// document.write("Late payment subcharges: " + latecharges + "<br>")
// var payment = netamount + latecharges
// document.write("Gross amount payment (After due date): " + payment )

// ---------------- Q1 Ch # 35-38 ----------------
// function time(){
//     var now = new Date();
//     document.write (now)
// }
// time()

// ---------------- Q2 Ch # 35-38 ----------------
// function fullname(){
//     var firstname = prompt("Enter first name")
//     var lastname = prompt("Enter last name")
//     var full = firstname + " " + lastname
//     document.write("Hello " + full)
// }
// fullname()

// ---------------- Q3 Ch # 35-38 ----------------
// function addition(){
//     var firstnum = prompt("Enter first number")
//     var secondnum = prompt("Enter second number")
//     var add = parseInt(firstnum) + parseInt(secondnum)
//     document.write(add)
// }addition()

// ---------------- Q4 Ch # 35-38 ----------------
// function calculator(){
//     var firstnum = prompt("Enter first number")
//     var secondnum = prompt("Enter second number")
//     var operator = prompt("Enter operator")
//     var add = parseInt(firstnum) + parseInt(secondnum)
//     var sub = parseInt(firstnum) - parseInt(secondnum)
//     var mul = parseInt(firstnum) * parseInt(secondnum)
//     var div = parseInt(firstnum) / parseInt(secondnum)
//     if (operator === "+"){document.write(add)}
//     else if (operator === "-"){document.write(sub)}
//     else if (operator === "*"){document.write(mul)}
//     else if (operator === "/"){document.write(div)}
//     else{document.write()}

// }
// calculator()

// ---------------- Q5 Ch # 35-38 ----------------
// function squaring(){
// var a = prompt("Enter any number")
// var square = parseInt(a) * parseInt(a)
//  document.write("The square of " + a + " is " + square)}
//  squaring()


