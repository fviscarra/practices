
// window.alert('Hell World!');
// window.prompt('Hell World!');
// window.open('http://www.google.com', '', 'width=500, height=400');
// window.print();
/*
window.onresize = () => {
    console.log('Hola', window.innerWidth);
}
*/

// document.documentElement.childNodes[2].childNodes[3].childNodes[1].childNodes[5].childNodes[1].childNodes[1].innerText

const li = document.getElementsByTagName('li');
li[2].innerHTML = 'Mi nuevo valor';
li[0].innerHTML = 'Primer valor';

const app = document.getElementById('app');
app.className = 'card';
app.innerHTML = '<h3>Hola a todos</h3>';
console.log(app);

const title = document.createElement('h1');
title.innerText = 'Soy un title';
app.appendChild(title);

const p = document.createElement('p');
p.innerText ='Hola, soy un parrafo';
p.className = 'small';
app.appendChild(p);

const d1 = document.createElement('div');
const d2 = document.createElement('div');
const d3 = document.createElement('div');
const d4 = document.createElement('div');
const d5 = document.createElement('div');
const d6 = document.createElement('div');
d6.innerHTML = '<p>alkdlksahdlsahdlsahdsad</p>';

d5.appendChild(d6);
d4.appendChild(d5);
d3.appendChild(d4);
d2.appendChild(d3);
d1.appendChild(d2);

app.appendChild(d1);

const container = document.createElement('div');
container.className = 'container';

const row = document.createElement('div');
row.className = 'row';

const col1 = document.createElement('div');
col1.className = 'col-sm-6';
col1.innerText = 'Col 1';
const col2 = document.createElement('div');
col2.className = 'col-sm-6';
col2.innerText = 'Col 2';

row.appendChild(col2);
row.appendChild(col1);

container.appendChild(row);

app.appendChild(container);


