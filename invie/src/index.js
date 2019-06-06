import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './invie.js';
import './css/invie.css';
import './css/animations.css';
// import * as serviceWorker from './serviceWorker';
import cheet from 'cheet.js';
import logoPortada from './images/invie.png';
import logoPlatzi from './images/platzi.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import easterA from './images/easter-a.png';
import easterB from './images/easter-b.png';
// alert("hola mundo");
const initialState = {
  isAnimated: false,
  menu: [
    {
      href: 'index.html',
      title: 'Home'
    },
    {
      href: '#guitarras',
      title: 'Guitarras',
    },
    {
      href: 'precios.html',
      title: 'Precios',
    },
    {
      href: 'hola.html',
      title: "Don't Click me!"
    }
  ],
  logoPortada: logoPortada,
  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie acustica',
      features: [
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio',
      ]
    },
    {
      image: classic,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
        'Estilo vintage',
        'Liviana',
        'Empieza tu camino como rockstart',
      ]
    },
  ]
}

function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props
      return {...state, ...newProps}
    }
    default:
    return state
  }
}

const store = createStore(reducer, initialState);

const easter = {
  isAnimated: 'is-animated',
  menu: [
    
  ],
  logoPortada: logoPlatzi,
  guitarras: [
    {
      image: easterA,
      alt: 'Guitarra padre de familia',
      name: 'Invie Familiar',
      features: [
        'Listo para copiar a los Simpsons',
        'Aire puro',
        'Chistes malos',
      ]
    },
    {
      image: easterB,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
        'Estilo vintage',
        'Liviana',
        'Empieza tu camino como rockstart',
      ]
    },
  ]
}

cheet('i n v i e', () => {
  // console.log('lo lograste, descubriste el easter egg');
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  });
});

cheet('g o b a c k', () => {
  // console.log('regresaste al estado inicial');
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState
    }
  });
});

ReactDOM.render(
  <Provider store={store}>
    <Invie/> 
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
