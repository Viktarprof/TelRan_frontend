//Вопросы и правильные ответы
const questions = [
  {
    imagepath: "images/biker.jpg",
    question: "Сколько байкеров ты видишь на картинке??",
    answers: [
      "Я не вижу здесь байкеров",
      "Тут все байкеры", 
      "Один справа в третьем ряду",
      "Байкеры - козлы!!!"],
    correct: 3,
  },
  {
    imagepath: "images/money.jpg",
    question: "Сколько у тебя денег?",
    answers: [
      "Столько, сколько звезд на небе",
      "Меньше, чем хотелось бы",
      "С какой целью интересуетесь?",
      "Вы бутылочку не выбрасывайте!",
    ],
    correct: 2,
  },
  {
    imagepath: "images/programming.jpg",
    question: "Какой предмет вам зашел лучше всех?",
    answers: [
      "Джаз",
      "QA Тестирование",
      "FrontRose",
      "Linux",
    ],
    correct: 1,
  },
  {
    imagepath: "images/watch.jpg",
    question: "Который час?",
    answers: [
      "What time is it now?",
      "Która jest teraz godzina?",
      "Wie spät ist es?", "現在幾點了？"],
    correct: 2,
  },
];

//======================== Находим элементы =========================
const quizImage = document.querySelector("#quizimage"); // картинка
const headerContainer = document.querySelector("#header"); //хедер
const listContainer = document.querySelector("#list"); //список с ответами
const submitBtn = document.querySelector("#submit"); //Кнопка ответить

//Переменные игры
let score = 0; //Кол-во правильных ответов
let questionIndex = 0; //Текущий вопрос
let imageIndex = 0; //Текущая картинка
//===================================================================

clearPage();
showQuestions();
submitBtn.onclick = checkAnswer;

//=========== Функиця очистки HTML страницы ========================
function clearPage() {
  //Очищаем хедер и список с ответами
  quizImage.innerHTML = ``;
  headerContainer.innerHTML = ``;
  listContainer.innerHTML = ``;
}
//===================================================================

//=========== Функиця отображения текущего вопроса ==================
function showQuestions() {
  //Картинка:
  //Получаем разметку картинки:
  const imageTemplate = `<img class="quiz-image" src=%path% alt="">`
  //Перезаписываем картинку в разметке с path на картинку из массива
  const path =imageTemplate.replace(
    "%path%",
    questions[imageIndex]["imagepath"]
  );
  //Перезаписываем картинку с разметкой
  quizImage.innerHTML = path;
  //Вопрос:
  //Получаем разметку вопроса
  const headerTemplate = `<h2 class="title">%title%</h2>`;

  //Перезаписываем текст в разметке с title на текст вопроса из массива
  const title = headerTemplate.replace(
    "%title%",
    questions[questionIndex]["question"]
  );

   //Перезаписываем картинку в разметке
   quizImage.innerHTML = path;
  //Перезаписываем текст на вопрос с разметкой
  headerContainer.innerHTML = title;

  //Варианты ответов:
  //Определяем некий номер ответа (Ид)
  let answerNumber = 1;
  //Перебираем массив ответов на вопросы и получаем каждый вопрос отдельно
  for (item of questions[questionIndex]["answers"]) {
    //Получаем разметку вопроса
    const questionTemplate = `<li>
		
			<input value="%number%" type="radio" class="answer" name="answer" />
			<span>%answer%</span>
		
	</li>`;

    //перезаписываем текст в разметке на нужный нам ответ
    let answerHTML = questionTemplate.replace("%answer%", item);

    //Перезаписываем value и присваеваем каждому свой id
    answerHTML = answerHTML.replace("%number%", answerNumber);
    //вставляем в html разметку
    listContainer.innerHTML += answerHTML;
    //Очищаем выделение кнопки
    submitBtn.blur();
    //увеличиваем id каждого эл. на 1
    answerNumber++;
  }
}
//===================================================================

//=========== Функиця проверки правильности ответа ==================
function checkAnswer() {
  //Находим нажатую радиокнопку в родителе листконтейнер, нажата ли она или нет
  const checkRadio = listContainer.querySelector('input[type="radio"]:checked');

  //Если радиокнопка не выбрана, то возвращаем функцию (Будет повторяться заного), ничего не делаем и убираем темный цвет кнопки
  if (!checkRadio) {
    submitBtn.blur();
    return;
  }

  //Узнаем номер ответа пользователя
  //Превращаем выбранный элемент value - (Его id) в число
  const userAnswer = parseInt(checkRadio.value);

  //Если ответ верен, увеличиваем счет
  if (userAnswer === questions[questionIndex]["correct"]) {
    score++;
  }

  //Проверка, мы находились на последнем вопросе или нет?
  //Если это НЕ последний вопрос, то
  if (questionIndex !== questions.length - 1) {
    //Увеличиваем индекс, очищаем страницу и показ. след. вопрос
    questionIndex++;
    imageIndex++;
    clearPage();
    showQuestions();
    return;
  } else {
    //если это последний вопрос, то очищаем стр., показ. результаты, меняем кнопку на "Играть снова" и при нажатии обновляем стр
    clearPage();
    showResults();
  }
}
//===================================================================

//=========== Функиця отображения результатов ======================
function showResults() {
  //Разметка для вывода результатов
  const resultsTemplate = `
            <h2 class="title">%title%</h2>
            <h3 class="summary">%message%</h3>
            <p class="result">%result%</p>
            `;

  //Если кол-во набранных вопросов = всем вопросам, то.. Если кол-во вопросов = половине, то... Иначе..
  //Варианты заголовка и текста
  let title, message;
  if (score === questions.length) {
    title = `Поздравляем! 🔥`;
    message = `Вы ответили на все вопросы верно! 😊✨`;
  } else if ((score * 100) / questions.length >= 50) {
    title = `Неплохо! 💪`;
    message = `Вы ответили больше чем на половину вопросов верно! 🎖️`;
  } else {
    title = `Стоит постараться... 😞`;
    message = `Вы ответили на меньше половины вопросов верно! 🎭`;
  }

  //Результат записываем
  let result = `${score} из ${questions.length}`;

  //Финальный ответ в шаблон
  const finalMessage = resultsTemplate
    .replace("%title%", title)
    .replace("%message%", message)
    .replace("%result%", result);

  //Вставляем шаблон в хедер
  headerContainer.innerHTML = finalMessage;

  //Меняем кнопку на "Менять снова"
  //Снимаем выделение, меняем текст и при клике на кнопку, обновляем стр
  submitBtn.blur();
  submitBtn.innerHTML = `Играть снова`;
  submitBtn.onclick = function () {
    history.go();
  };
}
//===================================================================
