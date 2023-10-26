///
const question = document.querySelector('.question');
const optionGroup = document.querySelector('.options-group');

const optionA = document.querySelector('.option-a');
const optionB = document.querySelector('.option-b');
const optionC = document.querySelector('.option-c');
const optionD = document.querySelector('.option-d');
///
const quetionsList = [
  {
    queNum: 1,
    que: 'Javascript is an _______ language?',
    optionA: 'Object-Oriented',
    optionB: 'Object-Based',
    optionC: 'Procedural',
    optionD: 'None of the above',
    corect: 'a',
  },
  {
    queNum: 2,
    que: 'Which of the following keywords is used to define a variable in Javascript?',
    optionA: 'var',
    optionB: 'let',
    optionC: 'Both A and B',
    optionD: 'None of the above',
    corect: 'c',
  },
];

let currentQue = 0;
let score = 0;

optionGroup.addEventListener(
  'click',
  function (e) {
    const selectedOption = e.target;

    /// color correct item
    for (let child of optionGroup.children) {
      if (child.value === quetionsList[currentQue].corect) {
        child.style.backgroundColor = 'green';
        child.style.color = '#efefef';
        child.style.borderColor = '#fff';
      }

      /// after selecting any option
      child.style.cursor = 'not-allowed';
    }

    /// color user selected item
    if (selectedOption.value === quetionsList[currentQue].corect) {
      selectedOption.style.backgroundColor = 'green';
      selectedOption.style.color = '#efefef';
      selectedOption.style.borderColor = '#fff';
      score += 1;
      console.log(score);
    } else {
      selectedOption.style.backgroundColor = 'red';
      selectedOption.style.color = '#efefef';
      selectedOption.style.borderColor = '#fff';
    }
  },
  { once: true }
);
