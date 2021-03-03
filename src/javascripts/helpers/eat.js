let full = 100;

const goodFood = () => {
  full += 10;
  return full;
};

const badFood = () => {
  full -= 3;
  return full;
};

const eatButtons = (e) => {
  const button = e.target.id;
  if (button === 'goodFood') {
    document.querySelector('#fullNumber').innerHTML = `<h4>${goodFood()}</h4>`;
  } else if (button === 'badFood') {
    document.querySelector('#fullNumber').innerHTML = `<h4>${badFood()}</h4>`;
  }
};

export default eatButtons;
