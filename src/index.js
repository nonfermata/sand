import '../index.css';
import img1 from '../assets/img1.png';

const main = document.querySelector('main');
const jsImage = document.createElement('img');
jsImage.className = 'js-image';
jsImage.src = img1;
main.append(jsImage);

console.log(isPalindrome('потоп'))
console.log(isPalindrome('поток'))
console.log(isPalindrome('kararak'))


function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
