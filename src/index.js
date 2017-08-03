import _ from 'lodash';
import Icon from '../public/img/cat-grumpy-icon.png'

function sample() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], '  ');
  element.style.height = '300px';
  let catIcon = new Image();
  catIcon.src = Icon;
  element.appendChild(catIcon);
  return element;
}

document.body.appendChild(sample());