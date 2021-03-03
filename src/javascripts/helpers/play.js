let fun = 50;

const addFun = () => {
  fun += 50;
  return fun;
};

const minusFun = () => {
  fun -= 2;
  return fun;
};
const funButtons = (e) => {
  const button = e.target.id;
  if (button === 'reallyFun') {
    document.querySelector('#funNumber').innerHTML = `<h4>${addFun()}</h4>`;
  } else if (button === 'sortaFun') {
    document.querySelector('#funNumber').innerHTML = `<h4>${minusFun()}</h4>`;
  }
};

export default funButtons;
