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
  btnBkColor.addEventListener('click', function() {
    bodyWay[0].style.backgroundColor = bkColor.value;
  })
}

function changeFontColor() {
  btnFontColor.addEventListener('click', function() {
    bodyWay[0].style.color = fontColor.value;
  })
}

function changeFontSize() {
  btnUpFont.addEventListener('click', function() {
    let atual = comun + 1
    comun = atual;
    bodyWay[0].style.fontSize = `${atual}px`;
  })
  btnDownFont.addEventListener('click', function() {
    let decre = comun - 1;
    comun = decre;
    bodyWay[0].style.fontSize = `${decre}px`;
  })
}

function changeLineHeigth() {
  btnUpHeight.addEventListener('click', function() {
    let aument = height + 2;
    height = aument;
    bodyWay[0].style.lineHeight = `${aument}px`;
  })
  btnDownHeight.addEventListener('click', function() {
    let dimin = height - 2;
    height = dimin;
    bodyWay[0].style.lineHeight = `${dimin}px`;
  })
}

function changeFonteFamily() {
  fontArial.addEventListener('click', function() {
    bodyWay[0].style.fontFamily = 'arial';
  })
  fontTimes.addEventListener('click', function() {
    bodyWay[0].style.fontFamily = 'Times New Roman';
  })
  fontMono.addEventListener('click', function() {
    bodyWay[0].style.fontFamily = 'monospace';
  })
}

function addMemrise() {

}

changeBkColor();
changeFontColor();
changeFontSize();
changeLineHeigth();
changeFonteFamily();
