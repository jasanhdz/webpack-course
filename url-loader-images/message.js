const renderToDOM = require('./render-to-dom.js');
const makeMessage = require('./make-message').default;

const waitTime = new Promise((todoOk, todoMal) => {
  setTimeout(()=> {
    todoOk('Han pasado 3 segundos, omg');
    todoMal('Ha ocurrido un error');
  }, 3000)
});

module.exports = {
  firstMessage: 'Hola Mundo desde un Modulo',
  delayedMessage: async ()=> {
    const message = await waitTime;
    console.log(message);
    // const element = document.createElement('p');
    // element.textContent = message;
    renderToDOM(makeMessage(message));
  },
}