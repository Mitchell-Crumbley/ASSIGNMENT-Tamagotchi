import '../styles/main.scss';
import domBuilder from './components/domBuilder';
import domEvents from './components/domEvents';

const init = () => {
  domBuilder();
  domEvents();
};

init();
