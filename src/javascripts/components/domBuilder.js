const domBuilder = () => {
  document.querySelector('#eat').innerHTML += `<div class="card" style="border: none; background-color: rgb(57, 204, 77); color: rgb(240, 221, 58); text-shadow: .5px .5px blue;">
  <div class="card-body" style="height: 90px; background-color: rgb(57, 204, 77);">
        <h1 style="background-color: rgb(57, 204, 77); font-size: x-large;">Eat</h1>
        <hr>
        <h5 style="background-color: rgb(57, 204, 77);">Fullness</h5>
        <h4 id='fullNumber' style="background-color: rgb(57, 204, 77);">100</h4>
        <div class="card-body" style="height: 90px; background-color: rgb(57, 204, 77);">
        <button class="btn btn-info goodFood" id="goodFood">Yummy!</button>
        <button class="btn btn-info badFood" id="badFood">One More Bite</button>
        </div>
      </div>`;

  document.querySelector('#play').innerHTML += `<div class="card" style="border: none; text-shadow: .5px .5px white;">
      <div class="card-body" style="height: 90px; background-color: rgb(240, 221, 58);">
      <h1 style="background-color: rgb(240, 221, 58); font-size: x-large;">Play!</h1>
      <hr>
      <h5 style="background-color: rgb(240, 221, 58);">How Fun IS It?</h5>
      <h4 id='funNumber' style="background-color: rgb(240, 221, 58);">50</h4>
      <button class="btn btn-info" id="reallyFun">Oh WOW!</button>
      <button class="btn btn-info" id="sortaFun">Meh</button>
      </div>
    </div>`;

  document.querySelector('#fight').innerHTML += `<div class="card" style="border: none; color: rgb(59, 103, 224); text-shadow: .5px .5px blue;">
    <div class="card-body" style="height: 90px; background-color: rgb(243, 58, 58);">
    <h1 style="background-color: rgb(243, 58, 58); font-size: x-large;">Fight!</h1>
      <hr>
      <h5 style="background-color: rgb(243, 58, 58);">Be Like Water - Bruce Lee</h5>
      <h4 id='strengthNumber' style="background-color: rgb(243, 58, 58);">100</h4>
    <button class="btn btn-info" id="runAway">RUN!</button>
    <button class="btn btn-info" id="violence">Cobra Kai</button>
    </div>
  </div>`;

  document.querySelector('#sleep').innerHTML += `<div class="cards d-flex" style="border: none;text-shadow: .5px .5px black;">
  <div class="card-body" style="height: 90px; background-color: rgb(59, 103, 224);">
  <h1 style="background-color: (59, 103, 224); font-size: x-large;">Sleep Zzz</h1>
    <hr>
    <h5 style="background-color: (59, 103, 224);">Get Some Rests</h5>
    <h4 id='sleepNumber' style="background-color: rgb(59, 103, 224);">50</h4>
  <button class="btn btn-info" id="quickNap">Rest Eyes</button>
  <button class="btn btn-info" id="deepSleep">Out Cold</button>
  </div>
</div>`;
};

export default domBuilder;
