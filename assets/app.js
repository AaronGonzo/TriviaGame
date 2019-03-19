$(document).ready(function() {
  $("#remaining-time").hide();
  $("#start").on("click", trivia.startGame);
});

var trivia = {
  correct: 0,
  incorrect: 0,
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
    $("#timer").text(trivia.timer);
    $("#start").hide();
    $("#remaining-time").show();

    trivia.nextQuestion();
  },

  nextQuestion: function() {
    trivia.timer = 20;
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
