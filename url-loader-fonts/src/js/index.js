// console.log("Hola mundo, desde Webpack!");
import '../css/estilos.css';
import {firstMessage, delayedMessage} from './message';
import platziImg from '../images/platzi.png';

document.write(firstMessage);
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('heigth', 50);
document.body.append(img);
// console.log("Hola mundo, desde Webpack en un Webpack.config!");