const bkColor = document.querySelector('#bkColorInput');
const btnBkColor = document.querySelector('#btnBkColor');
const fontColor = document.querySelector('#colorInput');
const btnFontColor = document.querySelector('#btnFontColor');
const btnUpFont = document.querySelector('#upFont');
const btnUpHeight = document.querySelector('#upHeight');
const btnDownHeight = document.querySelector('#downHeight');
const btnDownFont = document.querySelector('#downFont')
let comun = 16;
let height = 18;
const fontArial = document.querySelector('#arial');
const fontTimes = document.querySelector('#times');
const fontMono = document.querySelector('#monospace');
const bodyWay = document.getElementsByTagName('body');

function changeBkColor() {
  bodyWay[0].style.backgroundColor = localStorage.getItem('background');
  btnBkColor.addEventListener('click', function() {
    bodyWay[0].style.backgroundColor = bkColor.value;
    localStorage.setItem('background', bodyWay[0].style.backgroundColor);
  })
}

function changeFontColor() {
  bodyWay[0].style.color = localStorage.getItem('fontColor')
  btnFontColor.addEventListener('click', function() {
    bodyWay[0].style.color = fontColor.value;
    localStorage.setItem('fontColor', bodyWay[0].style.color);
  })
}

function changeFontSize() {
  bodyWay[0].style.fontSize = localStorage.getItem('fontSize')
  btnUpFont.addEventListener('click', function() {
    comun += 1;
    bodyWay[0].style.fontSize = `${comun}px`;
    localStorage.setItem('fontSize', bodyWay[0].style.fontSize)
  })
  btnDownFont.addEventListener('click', function() {
    comun -= 1;
    bodyWay[0].style.fontSize = `${comun}px`;
    localStorage.setItem('fontSize', bodyWay[0].style.fontSize)
  })
}

function changeLineHeigth() {
  bodyWay[0].style.lineHeight = localStorage.getItem('lineHeight');
  btnUpHeight.addEventListener('click', function() {
    let aument = height + 2;
    height = aument;
    bodyWay[0].style.lineHeight = `${aument}px`;
    localStorage.setItem('lineHeight', bodyWay[0].style.lineHeight);
  })
  btnDownHeight.addEventListener('click', function() {
    let dimin = height - 2;
    height = dimin;
    bodyWay[0].style.lineHeight = `${dimin}px`;
    localStorage.setItem('lineHeight', bodyWay[0].style.lineHeight);
  })
}

function changeFonteFamily() {
  bodyWay[0].style.fontFamily = localStorage.getItem('fontFamily');
  fontArial.addEventListener('click', function() {
    bodyWay[0].style.fontFamily = 'arial';
    localStorage.setItem('fontFamily', bodyWay[0].style.fontFamily);
  })
  fontTimes.addEventListener('click', function() {
    bodyWay[0].style.fontFamily = 'Times New Roman';
    localStorage.setItem('fontFamily', bodyWay[0].style.fontFamily);
  })
  fontMono.addEventListener('click', function() {
    bodyWay[0].style.fontFamily = 'monospace';
    localStorage.setItem('fontFamily', bodyWay[0].style.fontFamily);
  })
}

changeBkColor();
changeFontColor();
changeFontSize();
changeLineHeigth();
changeFonteFamily();
