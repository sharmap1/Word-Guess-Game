// <!-- Instructions display on the screen -->                                         
var gamewords = [  // Create an array of words
  "bryan adams",
  "madonna",
  "queen",
  "bon jovi"
  ];
        
 var htmlword       // variables       
 var answerArray = [];
 var userGuess  
 var correctGuess = 0    
 var losses = 0
 var guessesLeft = 19
 var alreadyGuessed = [];

 function start () {
     htmlword = gamewords[Math.floor(Math.random() * gamewords.length)]; // generates one gameword variable in htmlword div
     for (var i = 0; i < htmlword.length; i++) {    // iterate  underscore in ans array
         answerArray[i] = "_";  // display it like this when the game starts: `_ _ _ _ _ _ _`.  
     }
     var htmlwordDisplay = answerArray.join(" ")  //As the user guesses the correct letters, reveal them m_ _ _ e y.
     document.getElementById("htmlword").innerHTML = htmlwordDisplay
 }
 start()

 document.addEventListener("keypress", handleGuess) // 3. on key press to listen for the letters that your players will type.
 function handleGuess (event) {
     var userGuess = event.key   
 console.log(event.key)  
     for (var j = 0; j < htmlword.length; j++) {
         if (htmlword[j] === userGuess) {
             answerArray[j] = userGuess;                                         
         }                                       
         
         }
     
 var htmlwordDisplay = answerArray.join(" ")
 document.getElementById("htmlword").innerHTML = htmlwordDisplay
                 // Show the player their progress 
                //  document.getElementById("letterguessed").innerHTML = Display
 }
 $(document).ready(function() {

 var htmlword = $("#htmlword");
 $("#button").on("click", function() { 
  htmlword.start({ height: "500px" });
 });
    //Output:
 display()
  
  //set the inner HTML contents of the respective div to our HTML string
function display() {
document.querySelector("#wins").innerHTML ="Wins: " + correctGuess; 
document.querySelector("#lose").innerHTML = "Losses: " + losses;
document.querySelector("#guessesLeft").innerHTML = "guess left: " + guessesLeft;
document.querySelector("#letterguessed").innerHTML = "Your guess so far: " + alreadyGuessed;
 }
 });   

