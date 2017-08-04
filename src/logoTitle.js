import catIconSrc from '../public/img/cat-grumpy-icon.png'
import '../public/css/style.css'

function titleCompnent () {
  let element = document.createElement('div');
  let imgSpan = document.getElementById('titleImage');
  console.log(imgSpan.innerHTML)
  // acc css
  element.classList.add('hello');

  // add img
  let catIcon = new Image();
  catIcon.src = catIconSrc;
  imgSpan.appendChild(catIcon);

  // add innerHtml
  element.innerHTML = "Qill's 体育";
  return element;
}

document.body.appendChild(titleCompnent());