// var cas = prompt("Enter name to convert it into upper case")
// var upper = cas.toUpperCase()
// alert(upper)


// var letter = prompt("Enter name to convert  First Letter in upper case")
// var case1 = letter.charAt(0).toUpperCase()
// var withoutfirst = letter.slice(1)
// alert(case1+withoutfirst)


// var length = prompt("Enter Your Favorite Mobile Phone")
// var Str = length.length
// alert("Your Entered Mobile Name has "+Str+" Characters")


// var Last = prompt("Enter Any Thing to Extract Last Character of you input");
// var extracted = Last.charAt(Last.length-1);
// alert(extracted);


// var findingSeg1 = "Pakistani"
// alert("The Word Which We are find in is "+findingSeg1+"\nPress OK to Find")
// var find = findingSeg1.indexOf("n")
// alert("We have found the word in "+find+"th Index of the String")




// var userName1 = prompt("Enter User Name")
// var text = userName1

// for (var i = 0; i <text.length;i++){
//    if(text.charAt(i)==="@" || text.charAt(i)==="!"|| text.charAt(i)===","|| text.charAt(i)==="."){
//     alert("Error! Please Enter a valid Email Address")
//     break;
// }
// else{
//     var nam = prompt("Enter A valid Username (Without Symbols)")
//     alert(nam)
//     break;
// }
// }


// var para = "The quick brown fox jumps over the lazy dog";
// var wordsCount = 0
// var words = para.split(" "); 
//  for (i=0 ; i < words.length ; i++){
//     if (words[i] != " ")
//     wordsCount += 1; 
//  }
// alert(wordsCount)


// var citizen = "karachi"
// var inde = citizen.charAt(3)
// alert("The 3rd Index character is "+inde)


// var city = "Hyderabad"
// alert("Your Current City is "+city)

// var toislama = city.replace(/Hydera/g,"Islama")
// alert("Now your City is "+toislama)


// var text = "Ali and Sami are best friends"
// alert("This is the text which will change from and to & :-\n"+text)
// var replaced = text.replace(/and/g,"&")
// alert(replaced)


// var PositVal = +prompt("Enter Your Value in Negative example:-\n20.89646")

// var roundPositval = Math.round(PositVal)
// alert(roundPositval)

// var floorPositval = Math.floor(PositVal)
// alert(floorPositval)

// var ceilPositval = Math.ceil(PositVal)
// alert(ceilPositval)


// var minusVal = +prompt("Enter Your Value in Negative example:-\n-26.89646","-")

// var roundMinusval = Math.round(minusVal)
// alert(roundMinusval)

// var floorMinusval = Math.floor(minusVal)
// alert(floorMinusval)

// var ceilMinusval = Math.ceil(minusVal)
// alert(ceilMinusval)


// var dice = Math.random()
// var dite = dice*6
// var disp = Math.round(dite)

// if(disp==0){
//     alert("Please reload your page")
// }

// alert(disp)


// var user1 = prompt("Enter First User Name Who is Taking Head")
// var user2 = prompt("Enter Second User Name Who is Taking Tail")

// var ran = Math.random()
// var car = ran*1
// var sar = Math.round(car)

// Head = 1
// Tail = 0

// if(sar===0){
//     alert(user2 + " Wins !")
// }
// else{
//     alert(user1 + " Wins !")
// }


// var oneToten = +prompt("Enter Your Number to Start Game\n1 to 10")
// var random = Math.random()
// var toTen = random*10
// var round = Math.round(toTen)
// console.log(round)

// if(oneToten===round){
//     alert("Congratulations! You Win")
// }
// else{
//     alert("Sorry! Please Try Again")
// }


// var weight = prompt("Enter Your Weight")

// if(weight>65){
//     alert("Oh My God! You need to do exercise")
// }
// else{
//     alert("Wow! you have maintained yourself\nKeep it up")
// }


// var String = "472"
// var int = Number(String)
// alert(int)


// var num = 35.36
// var str = num.toString()
// var spl = String.replace('.','')
// alert(spl)


// var percentage = 30 / 45 * 100
// var conrolled = percentage.toFixed(2)
// alert(conrolled) 