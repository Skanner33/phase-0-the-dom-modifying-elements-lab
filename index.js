// Write your code here!
const rmMain = document.querySelector('main#main');
rmMain.remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute('id','victory');

newHeader.textContent = 'Mathew is the champion';