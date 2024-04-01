const quizList = [
  {
    question: "Какая команда выиграла Чемпионат мира по футболу 2018 года?",
    answers: [
      { text: "Франция", correct: true },
      { text: "Бразилия", correct: false },
      { text: "Аргентина", correct: false },
      { text: "Германия", correct: false },
    ],
  },
  {
    question: "Какая страна является рекордсменом по количеству побед на Летних Олимпийских играх?",
    answers: [
      { text: "Россия", correct: false },
      { text: "США", correct: true, isUserCorrect: false },
      { text: "Китай", correct: false },
      { text: "Великобритания", correct: false },
    ],
  },
  {
    question: "Какая команда выиграла Лигу чемпионов УЕФА в футболе в сезоне 2020-2021?",
    answers: [
      { text: "Челси", correct: true },
      { text: "Манчестер Сити", correct: false },
      { text: "Пари Сен-Жермен", correct: false },
      { text: "Бавария Мюнхен", correct: false },
    ],
  },
  {
    question: "Какая страна является рекордсменом по количеству побед на Чемпионатах мира по хоккею?",
    answers: [
      { text: "Канада", correct: false },
      { text: "Чехия/Чехословакия", correct: false },
      { text: "Швеция", correct: false },
      { text: "СССР/Россия", correct: true },
    ],
  },
  {
    question: "Кто является обладателем наибольшего количества побед в Гран-при Формулы-1?",
    answers: [
      { text: "images/sport/Hamilton.jpg", correct: true },
      { text: "images/sport/Vettel.jpeg", correct: false },
      { text: "images/sport/Senna.jpg", correct: false },
      { text: "images/sport/Schumacher.jpg", correct: false },
    ],
  },
  {
    question:
      "Кто является обладателем наибольшего количества побед на турнирах 'Уимблдон' в мужском одиночном разряде?",
    answers: [
      { text: "images/sport/Nadal.jpg", correct: false },
      { text: "images/sport/Djokovic.jpg", correct: false },
      { text: "images/sport/Federer.jpg", correct: true },
      { text: "images/sport/Murray.jpg", correct: false },
    ],
  },
  {
    question:
      "Какой баскетболист является рекордсменом по наибольшему количеству набранных очков в Национальной баскетбольной ассоциации (НБА)?",
    answers: [
      { text: "images/sport/MichaelJordan.jpg", correct: false },
      { text: "images/sport/LeBronJames.jpg", correct: false },
      { text: "images/sport/Abdul-Jabbar.jpg", correct: true },
      { text: "images/sport/Malone.jpg", correct: false },
    ],
  },
  {
    question: "Сколько раз (число) Футбольная сборная Бразилии становилась чемпионом мира по футболу?",
  },
  {
    question:
      "Какой результат (число в сантиметрах) является мировым рекордом по прыжкам в высоту в лёгкой атлетике среди мужчин?",
    // answers: [{}, {}, {}, {}],
  },
  {
    question: "Напишите фамилию спортсмена, чья запись голоса представлена ниже",
    // answers: [{}, {}, {}, {}],
  },
  {
    question: "Кто исполняет песню 'Shape of You'?",
    answers: [
      { text: "Justin Bieber", correct: false },
      { text: "Bruno Mars", correct: false },
      { text: "Taylor Swift", correct: false },
      { text: "Ed Sheeran", correct: true },
    ],
  },
  {
    question: "Какая группа исполняет песню 'Bohemian Rhapsody'?",
    answers: [
      { text: "The Beatles", correct: false },
      { text: "Queen", correct: true },
      { text: "Led Zeppelin", correct: false },
      { text: "AC/DC", correct: false },
    ],
  },
  {
    question: "Какой музыкальный стиль ассоциируется с исполнителями Elvis Presley и Jerry Lee Lewis?",
    answers: [
      { text: "Джаз", correct: false },
      { text: "Регги", correct: false },
      { text: "Рок-н-ролл", correct: true },
      { text: "Кантри", correct: false },
    ],
  },
  {
    question: "На каком инструменте виртуозно играл певец и композитор Джими Хендрикс?",
    answers: [
      { text: "Гитара", correct: true },
      { text: "Барабаны", correct: false },
      { text: "Бас-гитара", correct: false },
      { text: "Саксофон", correct: false },
    ],
  },
  {
    question: "Кто является автором песни 'Imagine'?",
    answers: [
      { text: "images/music/DavidBowie.jpg", correct: false },
      { text: "images/music/BobDylan.jpg", correct: false },
      { text: "images/music/Lennon.jpg", correct: true },
      { text: "images/music/FreddieMercury.jpg", correct: false },
    ],
  },
  {
    question: "Какая из этих рок-групп является автором хита 'Moscow Calling'?",
    answers: [
      { text: "images/music/scorpions.jpg", correct: false },
      { text: "images/music/DeepPurple.jpg", correct: false },
      { text: "images/music/ACDC.jpg", correct: false },
      { text: "images/music/GorkyPark.jpg", correct: true },
    ],
  },
  {
    question: "Кто является самым награждаемым артистом премии «Грэмми»?",
    answers: [
      { text: "images/music/Beyonce.jpg", correct: true },
      { text: "images/music/StevieWonder.jpg", correct: false },
      { text: "images/music/MichaelJackson.jpg", correct: false },
      { text: "images/music/Madonna.jpg", correct: false },
    ],
  },
  {
    question: "В каком веке (число) родился композитор Вольфганг Амадей Моцарт?",
  },
  {
    question: "Какой инструмент является основным в оркестре симфонической музыки?",
  },
  {
    question: "Напишите жанр песни, отрывок которой представлен ниже",
  },
  {
    question: "Кто написал картину 'Мона Лиза'?",
    answers: [
      { text: "Винсент Ван Гог", correct: false },
      { text: "Пабло Пикассо", correct: false },
      { text: "Леонардо да Винчи", correct: true },
      { text: "Микеланджело", correct: false },
    ],
  },
  {
    question: "Кто написал пьесу 'Гамлет'?",
    answers: [
      { text: "Шекспир", correct: true },
      { text: "Мольер", correct: false },
      { text: "Чехов", correct: false },
      { text: "Ибсен", correct: false },
    ],
  },
  {
    question: "Какой скульптор создал статую 'Думающий'?",
    answers: [
      { text: "Роден", correct: true },
      { text: "Дега", correct: false },
      { text: "Морис Ришар", correct: false },
      { text: "Карл Брилл", correct: false },
    ],
  },
  {
    question: "Кто написал книгу 'Преступление и наказание'?",
    answers: [
      { text: "Лев Толстой", correct: false },
      { text: "Федор Достоевский", correct: true },
      { text: "Марк Твен", correct: false },
      { text: "Оскар Уайльд", correct: false },
    ],
  },
  {
    question: "Кто написал картины 'Звездная ночь' и 'Поле пшеницы с кипарисами'?",
    answers: [
      { text: "images/art/GustavKlimt.jpg", correct: false },
      { text: "images/art/EdouardManet.jpg", correct: false },
      { text: "images/art/VincentVanGogh.jpg", correct: true },
      { text: "images/art/Monet.jpg", correct: false },
    ],
  },
  {
    question: "Кто является автором картины 'Тайная вечеря'?",
    answers: [
      { text: "images/art/Kandinsky.jpg", correct: false },
      { text: "images/art/Munch.jpg", correct: false },
      { text: "images/art/LeonardoDaVinci.jpg", correct: true },
      { text: "images/art/Rembrandt.jpg", correct: false },
    ],
  },
  {
    question: "Кто является автором картины 'Танец багровых попугаев'?",
    answers: [
      { text: "images/art/SalvadorDali.jpg", correct: false },
      { text: "images/art/Matisse.jpg", correct: false },
      { text: "images/art/Picasso.jpg", correct: true },
      { text: "images/art/FridaKahlo.jpg", correct: false },
    ],
  },
  {
    question: "Сколько скульптурных фигур находится на Арке Триумфа в Париже?",
  },
  {
    question: "Назовите фамилию художника, который создал серию картин под названием 'Слепые часы'?",
  },
  {
    question: "Отгадайте фильм по его саундтреку, который представлен ниже",
  },
  {
    question: "Кто был первым президентом России после распада СССР?",
    answers: [
      { text: "Михаил Горбачев", correct: false },
      { text: "Борис Ельцин", correct: true },
      { text: "Владимир Путин", correct: false },
      { text: "Дмитрий Медведев", correct: false },
    ],
  },
  {
    question: "В каком году произошло открытие Америки Колумбом?",
    answers: [
      { text: "1612", correct: false },
      { text: "1530", correct: false },
      { text: "1492", correct: true },
      { text: "1703", correct: false },
    ],
  },
  {
    question: "Кто был первым президентом США?",
    answers: [
      { text: "Томас Джефферсон", correct: false },
      { text: "Джордж Вашингтон", correct: true },
      { text: "Авраам Линкольн", correct: false },
      { text: "Джон Адамс", correct: false },
    ],
  },
  {
    question: "Кто был правителем Древнего Египта во времена строительства пирамид?",
    answers: [
      { text: "Клеопатра", correct: false },
      { text: "Рамзес II", correct: false },
      { text: "Хеопс", correct: false },
      { text: "Рамзес I", correct: true },
    ],
  },
  {
    question: "Кто был последним императором России?",
    answers: [
      { text: "images/history/AlexanderII.jpg", correct: false },
      { text: "images/history/NikolayII.jpg", correct: true },
      { text: "images/history/AlexanderIII.jpg", correct: false },
      { text: "images/history/PeterI.jpg", correct: false },
    ],
  },
  {
    question: "Кто был основателем Советского Союза?",
    answers: [
      { text: "images/history/Stalin.jpg", correct: false },
      { text: "images/history/Kolchak.jpg", correct: false },
      { text: "images/history/Lenin.jpg", correct: true },
      { text: "images/history/Mikoyan.jpg", correct: false },
    ],
  },
  {
    question: "Кто был лидером Кубинской революции?",
    answers: [
      { text: "images/history/Batista.jpg", correct: false },
      { text: "images/history/Chavez.jpeg", correct: false },
      { text: "images/history/CheGuevara.jpg", correct: false },
      { text: "images/history/Castro.jpg", correct: true },
    ],
  },
  {
    question: "В каком году произошёл первый космический полет человека?",
  },
  {
    question: "Какая страна совершила нападение на Перл-Харбор во время Второй мировой войны?",
  },
  {
    question: "Аудиозапись голоса какого политического деятеля представлена ниже?",
  },
];
