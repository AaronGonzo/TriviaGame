var panel = $("#quiz-area");

var questions = [
  {
    question: "In season 3 of Rick and Morty, what is the first episode called?",
    answers: ["green", "blue", "red", "yellow"],
    correctAnswer: "blue"
  },
  {
    question: "In which episode do Rick and Morty go to Atlantis?",
    answers: ["green", "blue", "red", "yellow"],
    correctAnswer: "blue"
  },
  {
    question: "Which episode do go back into the memories of Rick and Morty?",
    answers: ["gree", "blue", "red", "yellow"],
    correctAnswer: "blue"
  }
];
$(document).on("click", "#start", function() {
  trivia.start();
});
var trivia = {
  correct = 0,
  incorrect = 0,
  counter = 120,
  countdown: function(){
    game.counter--;
    $("#counter-number").html(game.counter);
    if(game.counter == 0){
      console.log("Time up");
      game.done();
    }
  },
  start: function(){
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    $("#start").remove();
    for(var i=0; i<questions.length;i++){
      panel.append("<h2>"+questions[i].question +"</h2>");
      for(var j=0; j<questions[i].answers.length; j++){
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append()
  }
};