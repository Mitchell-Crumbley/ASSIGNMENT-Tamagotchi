let energy = 50;

const takeNap = () => {
  energy += 50;
  return energy;
};

const deepSleep = () => {
  energy += 60;
  return energy;
};

const sleepButtons = (e) => {
  const targetId = e.target.id;

  if (targetId === 'quickNap') {
    document.querySelector('#sleepNumber').innerHTML = `<h4>${takeNap()}</h4>`;
  } else if (targetId === 'deepSleep') {
    document.querySelector('#sleepNumber').innerHTML = `<h4>${deepSleep()}</h4>`;
  }
};

export default sleepButtons;
