var panel = $("#quiz-area");
$(document).ready(function() {
  $("#remaining-time").hide();
  $("#start").on("click", trivia.startGame);
});
var questions = [
  {
    question: "color of sky?",
    answers: ["gree", "blue", "red", "yellow"],
    correctAnswer: "blue"
  },
  {
    question: "color of sky?",
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
}
var trivia = {
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 20,
  timerOn: false,
  timerId: " ",

  questions: {
    q1: "In season 3 of Rick and Morty, what is the first episode called?",
    q2: "In which episode do Rick and Morty go to Atlantis?",
    q3: "Which episode do go back into the memories of Rick and Morty?"
  },
  options: {
    q1: [
      "The Whirly Dirly",
      "Pickle Rick",
      "The Rickshank Redemption",
      "OOOOWEEE Rick, how should I know??"
    ],
    q2: [
      "Rickmancing the Stone",
      "Ahhh jeez I don't know Morty, what do you think I know everything about everything?",
      "Vindicators 3: The Return of WorldEnder",
      "The Ricklantis Mixup"
    ],
    q3: [
      "Morty's Mind Blowers",
      "The Rickchurian MortyDate",
      "Ask Mr Poopybutthole, he was there the whole time!",
      "Rest and Ricklaxation"
    ]
  },
  answers: {
    q1: "The RickShank Redemption",
    q2: "The Ricklantis Mixup",
    q3: "Morty's Mind Blowers"
  },
  startGame: function() {
    trivia.correct = 0;
    trivia.incorrect = 0;

    clearInterval(trivia.timerId);

    $("#game").show();
    $("#results").html("");
    $("#timer").text(trivia.timer);
    $("#start").hide();
    $("#remaining-time").show();

    trivia.nextQuestion();
  },

  nextQuestion: function() {
    trivia.timer = 20;
    $("#timer").removeClass("last-seconds");
    $("#timer").text(trivia.timer);

    if (!trivia.timerOn) {
      trivia.timerId = setInterval(trivia.timerRunning, 1000);
    }
    var questionContent = Object.values(trivia.questions)[trivia.currentSet];
    $("#question").text(questionContent);

    var questionOptions = Object.values(trivia.options)[trivia.currentSet];

    $.each(questionOptions, function(index, key) {
      $("#options").append(
        $('<button class="option btn">' + key + "</button>")
      );
    });
  }
};
