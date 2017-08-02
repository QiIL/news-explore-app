import _ from 'lodash';
import Icon from '../img/cat-grumpy-icon.png'
function sample() {
  let element = document.createElement('div');
  element.style.height = '300px';
  let catIcon = new Image();
  catIcon.src = Icon;
  element.appendChild(catIcon);
}

document.body.appendChild(sample());