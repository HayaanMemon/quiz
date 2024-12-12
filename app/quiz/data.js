export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: ['scripting', 'script', 'js', 'javascript'],
        correctAnswer: 'script',
      },
      {
        id: 2,
        question: 'What is the correct syntax for referring to an external script called xxx.js',

        answers: ['<script name="xxx.js">', '<script href="xxx.js">', '<script src="xxx.js">', ],
        correctAnswer: '<script src="xxx.js">',
      },
      {
        id: 3,
        question: 'How do you write "Hello World" in an alert box?',
        answers: ['msgBox("Hello World")', 'msg("Hello World")', 'alertBox("Hello World")', 'alert("Hello World")'],
        correctAnswer: 'alert("Hello World")',
      },
      {
        id: 4,
        question: 'How do you create a function in JavaScript?',
        answers: ['function:myFunction()', 'function = myFunction()', 'function myFunction()' ],
        correctAnswer: 'function myFunction()',
      },
      {
        id: 5,
        question: 'What is the correct way to write a JavaScript array?',
        answers: ['var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = ["red", "green", "blue"]', 'var colors = "red", "green", "blue"', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'],
        correctAnswer: 'var colors = ["red", "green", "blue"]',
      },
    ],
  };
  