import eatButtons from '../helpers/eat';
import fightButtons from '../helpers/fight';
import funButtons from '../helpers/play';
import sleepButtons from '../helpers/sleep';

const domEvents = () => {
  document.querySelector('#eat').addEventListener('click', eatButtons);
  document.querySelector('#fight').addEventListener('click', fightButtons);
  document.querySelector('#play').addEventListener('click', funButtons);
  document.querySelector('#sleep').addEventListener('click', sleepButtons);
};

export default domEvents;
