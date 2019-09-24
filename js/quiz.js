// IIFE - Immediately Invoked Function Expression

//IIFE run as soon as they are defined. (don't have to be called)

//IIFE are commonly used to keep variables/functions outside of the global scope and they tend to work better if you're running multiple scripts

//This variable exists in the global scope, which means it's less secure and can be accessed by anything
var global;

(function() {
    //Because this variable is inside of an IIFE, it is not in the global scope
    var variable =10;

    //Make references to our elements that we're going to interact with
    var quiz = document.getElementById('quiz');
    var submit = document.getElementById('submit');
    var reset = document.getElementById('reset');
    var results = document.getElementById('results');

    var myQuestions = []

    //What does a question consist of?
    //Question text
    //Answer choices
    //Correct answer

    var question1 = {
        question: 'What color is the sky?',
        answers: {
            a: 'Blue',
            b: 'Brown',
            c: 'Green'
        },
        correctAnswer: 'a'

    }

    var question2 = {
        question: 'How many licks does it take to get to the center of a tootsie-pop?',
        answers: {
            a: '3000',
            b: '0',
            c: 'The world may never know'
        },
        correctAnswer: 'c'
    }

    var question3 = {
        question: 'The more you take, the more you leave behind. What am I?',
        answers: {
            a: 'space',
            b: 'footsteps',
            c: 'time'
        },
        correctAnswer: 'b'
    }

    myQuestions.push(question1, question2, question3); //Add the question objects to our array

    //Function to build a quiz that goes through our question objects and generates HTML for each question
    function buildQuiz() {

    }


    //Function to show the results of the quiz
    function showResults() {

    }


    // function to reset the quiz
    function resetQuiz() {
        
    }
}());