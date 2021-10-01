const quiz = [{
        'question': 'Who is the richest man in the world ?',
        'a': 'Bill Gates',
        'b': 'Elon Musk',
        'c': 'Jeff Bezos',
        'd': 'Donald Trump',
        'correct': 'b'
    },
    {
        'question': 'Which is the happiest country in the world ?',
        'a': 'Finland',
        'b': 'Somali',
        'c': 'U.S.A',
        'd': 'Sweden',
        'correct': 'a'
    },
    {
        'question': 'How old i am ?',
        'a': '16',
        'b': '20',
        'c': '15',
        'd': '18',
        'correct': 'c'
    }
]
const answerEls = document.querySelectorAll('.answer');

const questionEl = document.getElementById('question');

const quizHtml = document.getElementById('quiz');

const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');

const submitBtn = document.getElementById('submit');


let currentQuestion = 0;

let score = 0;

function loadQuiz() {
    deselectAnswer();


    const currentQuiz = quiz[currentQuestion];
    questionEl.innerHTML = currentQuiz.question;

    aText.innerHTML = currentQuiz.a;
    bText.innerHTML = currentQuiz.b;
    cText.innerHTML = currentQuiz.c;
    dText.innerHTML = currentQuiz.d;
}

loadQuiz();

function getSelected() {


    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }

    });
    return answer;

}


function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener(('click'), () => {


    const answer = getSelected();

    if (answer) {
        if (answer === quiz[currentQuestion].correct) {
            score++;
        };
        currentQuestion++;


        if (currentQuestion < quiz.length) {
            loadQuiz();


        } else {
            quizHtml.innerHTML = '<h2>Congrats! You scored ' + score + '/3<h2><button onClick = "location.reload()">Reload</button>';
        }
    }
});