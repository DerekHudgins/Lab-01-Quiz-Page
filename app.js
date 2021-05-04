import { checkForYes } from './utills.js';
import { checkForNo } from './utills.js';
const startQuiz = document.getElementById ('start-quiz');
const showResult = document.getElementById ('display-results');
// initialize state

// set event listeners to update state and DOM

startQuiz.addEventListener('click', () => {
    alert('you are about to take a quiz!');
    const userQuiz = confirm('Are you ready to take the quiz?');
    if (userQuiz === false){
        return;
    }
    const first = prompt('whats your first name??');
    const last = prompt('whats your last name??');
    const name = first + last;
    let correct = 0;
    const answer1 = prompt('Do I like to skateboard?');
    if (checkForYes(answer1)){
        correct = correct + 1;}
    const answer2 = prompt('Have I been to Germany?');
    if (checkForYes(answer2)){
        correct = correct + 1;}
  
    const answer3 = prompt('Have I been to Canada?');
    if (checkForNo(answer3)){
        correct = correct + 1;
    }

    const percent = (Math.floor((correct / 3) * 100));
    showResult.textContent = `Congratulations ${name}! You got ${correct} out of 3! you got ${percent}%`;
});