let strength = 100;

const addStrength = () => {
  strength += 1;
  return strength;
};

const minusStrength = () => {
  strength -= 10;
  return strength;
};

const fightButtons = (e) => {
  const button = e.target.id;
  if (button === 'runAway') {
    document.querySelector('#strengthNumber').innerHTML = `<h4>${addStrength()}</h4>`;
  } else if (button === 'violence') {
    document.querySelector('#strengthNumber').innerHTML = `<h4>${minusStrength()}</h4>`;
  }
};

export default fightButtons;
