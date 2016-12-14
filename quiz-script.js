var currentQuestion = 0; // Starts the quiz from scratch - begins with the first question 
var score = 0; // Starts the counting of points from zero 
var totQuestions = questions.length; // The length of the questions 

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
// Connects quiz-script.js with the HTML-file (Quiz-html), the js-file (question.js) and the css-file (quiz.css)
// The different elements gets connected through the use of the variable 

function loadQuestion (questionIndex) { // Function that loads the next question from question.js
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question; // Pushes the next question, when the one before is answered
	opt1.textContent = q.option1; // Linked to the HTML-file and the question.js-file
	opt2.textContent = q.option2; 
	opt3.textContent = q.option3; 
	opt4.textContent = q.option4; 
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked'); // Linked to the HTML-file and the question.js-file
	if(!selectedOption && currentQuestion == 0){ 
		loadQuestion(currentQuestion);
		resultCont.style.display = 'none'; // Removes the background, when the quiz is finished and only leaves the scoreboard
		return;
	} else if(!selectedOption){
		alert('Please select your answer!'); // Pop-up window when no answer is picked
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){ // Linked to the HTML-file and the question.js-file
		score += 10; // Adds 10 points to the score, when the correct answer is chosen 
	}
	selectedOption.checked = false; // When the selected answer is wrong
	currentQuestion++; 
	if(currentQuestion == totQuestions - 1){ // Changes the next-button in the last question, so it says "Finish" instead of "Next Question"
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){ 
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score; // Shows the final score of the quiz 
		nextButton.textContent = 'Retake'; // Changes the next-button when the scoreboard is showed, so it says "Retake" instead of "Finished". When the button is pressed, the quiz starts all over.
		currentQuestion = 0; 
		return; 
	}
	loadQuestion(currentQuestion);	
}

loadQuestion(currentQuestion);