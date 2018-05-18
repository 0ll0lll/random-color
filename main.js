function color() {
  let input = document.getElementsByTagName('input')[0].value;
  let page = document.getElementsByClassName('page')[0];
  page.style.backgroundColor = input;
}

function randomColor() {
  let page = document.getElementsByClassName('page')[0];
  let rgb = 'rgb(';

  for (i = 0; i < 3; i++) {
    let ranNum = Math.floor((Math.random() * 256) + 0);
    rgb = rgb + ranNum + ','
  }
  rgb = rgb.substring(0, rgb.length - 1);
  rgb = rgb + ')';
  page.style.backgroundColor = rgb;
}

function baz() {
  let x = window.innerWidth;
  let y = window.innerHeight;
  let text = document.getElementById('txt');
  let res = x + ' x ' + y;
  text.innerHTML = res;
}

baz()
