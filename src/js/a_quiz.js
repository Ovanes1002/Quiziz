  // buttons
const 
  nextButton          = document.querySelector(".nextButton"),
  backButton          = document.querySelector(".backButton"),
  backButtonSport     = document.querySelector(".backButtonSport"),
  backButtonMusic     = document.querySelector(".backButtonMusic"),
  backButtonArt       = document.querySelector(".backButtonArt"),
  backButtonHistory   = document.querySelector(".backButtonHistory"),
  menuButton          = document.querySelector(".menuButton"),
  launchButton        = document.querySelector(".launchButton"),
  quitQuiz            = document.querySelector(".quitQuiz"),
  endButton           = document.querySelector(".endButton"),
  finishQuiz          = document.querySelector(".finishQuiz"),
  playerResult        = document.querySelector(".playerResult"),

  // card
  header              = document.getElementById("header"),
  footer              = document.getElementById("footer"),
  exitNext            = document.querySelector(".exitNext"),
  main                = document.querySelector(".card"),
  questionElement     = document.querySelector(".question"),
  answerButtons       = document.querySelector(".answer-buttons"), // не используется
  buttons             = document.querySelectorAll(".button"),
  count               = document.querySelector(".questionNumber"),
  points              = document.querySelector(".points"),
  progress            = document.getElementById("progressBar"),
  max                 = 100, // максимальное значение
  firstWriteAnswer    = document.querySelector(".firstWriteAnswer"),
  secondWriteAnswer   = document.querySelector(".secondWriteAnswer"),
  thirdWriteAnswer    = document.querySelector(".thirdWriteAnswer"),
  audioSport          = document.querySelector(".audioSport"),
  audioMusic          = document.querySelector(".audioMusic"),
  audioArt            = document.querySelector(".audioArt"),
  audioHistory        = document.querySelector(".audioHistory"),

  // score
  scoreButton         = document.querySelector(".score__button"),
  scoreSport          = document.querySelector(".score__sport"),
  scoreMusic          = document.querySelector(".score__music"),
  scoreArt            = document.querySelector(".score__art"),
  scoreHistory        = document.querySelector(".score__history"),

  // start
  startPage           = document.querySelector(".startPage"),
  // startQuiz           = document.querySelector(".startQuiz"),
  playerName          = document.getElementById("playerName"), // не используется
  nameInput           = document.querySelector(".nameInput"), // не используется




  // table
  tableSport          = document.querySelector(".tableSport"),
  tableMusic          = document.querySelector(".tableMusic"),
  tableArt            = document.querySelector(".tableArt"),
  tableHistory        = document.querySelector(".tableHistory"),


  // topics
  chooseScoreTopic    = document.querySelector(".choose_score_topic"),
  chooseTopic         = document.querySelector(".choose_topic"),
  topics              = document.querySelectorAll(".topic"),
  scoreTopics         = document.querySelectorAll(".score_topic"),
  sportTopic          = document.querySelector(".score_sport_topic"), // не используется
  musicTopic          = document.querySelector(".score_music_topic"), // не используется
  artTopic            = document.querySelector(".score_art_topic"), // не используется
  historyTopic        = document.querySelector(".score_history_topic"); // не используется



let currentQuestionIndex,
    i                 = 0,
    result            = 0, // начальное значение счетчика
    lastClickedButton = null, // переменная для хранения последней кликнутой кнопки
    lastClickedTopic  = null,
    clck              = null,
    userName          = "",
    current           = 0; // текущее значение


