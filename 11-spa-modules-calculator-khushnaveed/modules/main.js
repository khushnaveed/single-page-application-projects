import { difference } from './percentage.js';

const percentageChangeForm = document.querySelector('#percentage-change-form');
const userInput1 = document.querySelector('#change_1');
const userInput2 = document.querySelector('#change_2');
const result = document.querySelector('#change_result');

percentageChangeForm.addEventListener('change', () => {
    const value1 = userInput1.value;
    const value2 = userInput2.value;

    const calculatedResult = difference(value1, value2);

    result.value = calculatedResult;
});
