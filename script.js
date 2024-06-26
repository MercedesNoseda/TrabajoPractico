// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
<<<<<<< Updated upstream
    if (name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        event.preventDefault();
    }
});
=======
    
  ];
  
  let currentQuestionIndex = 0;
  let correctAnswers = 0;

// Elementos HTML
const trivia = document.getElementById('trivia');
const questionElement = document.getElementById('question');
const trueBtn = document.getElementById('trueBtn');
const falseBtn = document.getElementById('falseBtn');
const salirBtn = document.getElementById('salirBtn');
const result = document.getElementById('result');
const contenedorMenu = document.getElementById('contenedorMenu');
const contenedorMensaje = document.getElementById('contenedorMensaje');
const contenedorTrivia = document.getElementById('contenedorTrivia');
const contenedorMeme = document.getElementById('contenedorMeme');
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector ('.toggle_btn i');
const respMenu = document.querySelector('.responsive_navbar');
const contenedorLogin = document.getElementById('login');
const contenedorRegistro = document.getElementById('registro');
const loginBtn = document.getElementById('loginBtn');
const newUsuario = document.getElementById('nuevoUsu');
const meme =document.getElementById('meme');
const regBtn = document.getElementById('regBtn');
const inicioBtn = document.getElementById('inicioBtn');
// Inicio de la trivia al hacer click en la imagen de Lisa
trivia.addEventListener('click', function(event) {
    event.preventDefault(); 
    startTrivia();
});

// Función para iniciar la trivia
function startTrivia() {
    contenedorMenu.style.display = 'none';
    contenedorMensaje.style.display = 'none';
    contenedorTrivia.style.display = 'block';
    showQuestion();
}

// Función que muestra las preguntas
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    toggleButtons(true); // Mostrar botones de respuesta
    result.style.display = 'none'; // Ocultar mensaje de resultado
}

// Función para comprobar las respuestas
function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (userAnswer === currentQuestion.answer) {
        displayResult("¡Correcto!", 'green');
        correctAnswers++;
    } else {
        displayResult("¡Incorrecto!", 'red');
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        setTimeout(showQuestion, 1000);
    } else {
        endTrivia();
    }
}

// Función para mostrar el resultado
function displayResult(message, color) {
    result.textContent = message;
    result.style.color = color;
    result.style.display = 'block';
    toggleButtons(false); 
}

// Función para mostrar u ocultar los botones de respuesta
function toggleButtons(show) {
    trueBtn.style.display = show ? 'inline-block' : 'none';
    falseBtn.style.display = show ? 'inline-block' : 'none';
    salirBtn.style.display = show ? 'inline-block' : 'none';
}

// Función para terminar la trivia
function endTrivia() {
    let message = "";

    if (correctAnswers === 10) {
        message = "¡Estás en el olimpo de los fans!";
    } else if (correctAnswers >= 7 && correctAnswers <= 9) {
        message = "¡Eres un gran fan!";
    } else if (correctAnswers >= 5 && correctAnswers <= 6) {
        message = "Te faltan varios capítulos para ser un buen fan.";
    } else {
        message = "Parece que no eres tan fan de la serie.";
    }

    questionElement.textContent = "¡Has completado la trivia!";
    result.textContent = message;
    result.style.color = 'rgb(187, 200, 7)'; 
    result.style.display = 'block';
    toggleButtons(false); 

}



// Función para reiniciar la trivia
function restartTrivia() {
    
    currentQuestionIndex = 0;
    correctAnswers = 0;
    showQuestion();
    result.style.display = 'none'
    toggleButtons(true);
}

//Función para la barra de navegación responsiva

toggleBtn.onclick = function (event) {
    event.preventDefault();
    respMenu.classList.toggle('open')
    const isOpen = respMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
};

// Manejadores de eventos para botones
trueBtn.addEventListener('click', () => checkAnswer(true));
falseBtn.addEventListener('click', () => checkAnswer(false));
salirBtn.addEventListener('click', () => {
    restartTrivia();
    contenedorMenu.style.display = 'block';
    contenedorMensaje.style.display = 'block';
    contenedorTrivia.style.display = 'none';
});
closeBtn.addEventListener('click', () => {
    contenedorMenu.style.display = 'block';
    contenedorMensaje.style.display = 'block';
    contenedorMeme.style.display = 'none';
});
loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    contenedorMenu.style.display = 'none';
    contenedorMensaje.style.display = 'none';
    contenedorLogin.style.display = 'block';
    loginBtn.style.display = 'none';
    
});
newUsuario.addEventListener('click', function(event) {
    event.preventDefault();
    contenedorLogin.style.display = 'none';
    contenedorRegistro.style.display = 'block';
    
});
meme.addEventListener('click', function(event) {
    event.preventDefault();
    contenedorMenu.style.display = 'none';
    contenedorMensaje.style.display = 'none';
    contenedorMeme.style.display = 'block';
    
<<<<<<< Updated upstream
=======
});

regBtn.addEventListener('click', function(event) {
    event.preventDefault();
    contenedorLogin.style.display = 'none';
    contenedorRegistro.style.display = 'none';
    contenedorMenu.style.display = 'block';
    contenedorMensaje.style.display = 'block';

});

inicioBtn.addEventListener('click', function(event) {
    event.preventDefault();
    contenedorLogin.style.display = 'none';
    contenedorRegistro.style.display = 'none';
    contenedorMenu.style.display = 'block';
    contenedorMensaje.style.display = 'block';

});





>>>>>>> Stashed changes
});

regBtn.addEventListener('click', function(event) {
    event.preventDefault();
    contenedorLogin.style.display = 'none';
    contenedorRegistro.style.display = 'none';
    contenedorMenu.style.display = 'block';
    contenedorMensaje.style.display = 'block';

});

inicioBtn.addEventListener('click', function(event) {
    event.preventDefault();
    contenedorLogin.style.display = 'none';
    contenedorRegistro.style.display = 'none';
    contenedorMenu.style.display = 'block';
    contenedorMensaje.style.display = 'block';

});





});

>>>>>>> Stashed changes
