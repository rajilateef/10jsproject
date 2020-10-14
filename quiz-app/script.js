const quizData = [
    {
        question: 'How are you',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2020',
        a: 'java',
        b: 'c',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'

    },
    {
        question: 'Who is the president of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'helicopter Terminals Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was javascript launched',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    }
];

const quizData = [];
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
        currentQuestion++;
}