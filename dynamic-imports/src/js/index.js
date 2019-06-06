// console.log("Hola mundo, desde Webpack!");
import '../css/estilos.css';
import {firstMessage, delayedMessage} from './message';
import platziImg from '../images/platzi.png';
import data from './teachers.json';
import renderToDom from './render-to-dom';
import React from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers';
import '../css/main.less';

const $button = document.getElementById('dynamic-import');
$button.addEventListener('click', async (event) => {
  console.log('Haz hecho un click');
  const { default: alerta } = await import('./alerta.js');
  alerta();
});
render(<Teachers data={data}/>, document.getElementById('app'));

console.log(data);
data.teachers.forEach(teacher => {
  const element = document.createElement('li');
  element.textContent = teacher.name;
  renderToDom(element);
});

document.write(firstMessage);
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('heigth', 50);
document.body.append(img);
// console.log("Hola mundo, desde Webpack en un Webpack.config!");