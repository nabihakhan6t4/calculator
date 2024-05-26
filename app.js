document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box');
    const buttons = document.querySelectorAll('button');
  
    let currentInput = '';
    let resultDisplayed = false;
  
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        const buttonValue = event.target.innerText;
  
        if (buttonValue === 'AC') {
          currentInput = '';
          inputBox.value = '0';
          resultDisplayed = false;
        } else if (buttonValue === 'DEL') {
          currentInput = currentInput.slice(0, -1);
          inputBox.value = currentInput || '0';
        } else if (buttonValue === '=') {
          try {
            currentInput = eval(currentInput).toString();
            inputBox.value = currentInput;
            resultDisplayed = true;
          } catch (e) {
            inputBox.value = 'Error';
            currentInput = '';
          }
        } else if (buttonValue === '%') {
          if (currentInput !== '') {
            currentInput = (parseFloat(currentInput) / 100).toString();
            inputBox.value = currentInput;
          }
        } else {
          if (resultDisplayed && !['+', '-', '*', '/'].includes(buttonValue)) {
            currentInput = '';
            resultDisplayed = false;
          }
          currentInput += buttonValue;
          inputBox.value = currentInput;
        }
      });
    });
  
    inputBox.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('.equal-btn').click();
      } else if (event.key === 'Backspace') {
        event.preventDefault();
        document.querySelector('.operators:nth-child(2)').click();
      }
    });
  });
  