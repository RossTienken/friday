import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const members = [
  {
    "id": 1,
    'name': 'Ross'
    'nickname': 'Rosstifari',
    'img': '../public/images/ross.gif'
  },
  {
    "id": 2,
    'name': 'Frederick',
    'nickname': 'Drop Dead Fred',
    'img': '../public/images/frederick.png'
  },
  {
    "id": 3,
    'name': 'Bishal',
    'nickname': 'Bitchin\' Bishal',
    'img': '../public/images/bishal.png'
  },
  {
    "id": 4,
    'name': 'Melissa',
    'nickname': 'Mastermind Melissa',
    'img': '../public/images/melissa.jpg'
  },
  {
    "id": 5,
    'name': 'Tracey',
    'nickname': 'Without a Tracey',
    'img': '../public/images/tracy.jpg'
  },
  {
    "id": 6,
    'name': 'Tim',
    'nickname': 'Timbo Slice',
    'img': '../public/images/tim.png'
  },
  {
    "id": 7,
    'name': 'Eddie'
    'nickname': 'Spiggy6'
    'img': '../public/images/eddie.jpg'
  }

]

ReactDOM.render(<App members = {members}/>, document.getElementById('root'));
registerServiceWorker();
