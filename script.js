const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
  let div = document.createElement('div');
  div.setAttribute('class', 'row')
  div.setAttribute('id', `${i+1}`);
  container.appendChild(div);
  for (let j = 0; j < 16; j++) {
    div.appendChild(document.createElement('div'));
  }
}