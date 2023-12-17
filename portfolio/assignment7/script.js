document.getElementById('crushForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const crushName = document.getElementById('crushName').value;
    const resultElement = document.getElementById('result');
    
    const randomNumber = Math.random();
    const result = randomNumber < 0.5 ? 'Yes' : 'No';
  
    resultElement.textContent = `Does ${crushName} like you back? ${result}`;
  });
  