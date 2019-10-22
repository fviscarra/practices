let i;

if (localStorage.getItem('count')) {
 i = localStorage.getItem('count');
} else {
    i = 0;
}
//count contador 
//localStorage sirve para almacenar los resultados 

const submitForm = (ev) => {
    ev.preventDefault();    
    const members = [];
    for (let j = 0; j < i; j++) {
        const name = document.getElementById('name_' + j).value;
        const lastname = document.getElementById('lastname_' + j).value;
        members.push({
            name: name,
            lastname: lastname
        });
    }
    console.log(members);
}

const addMember = () => {
    const familyContainer = document.getElementById('family-info');
    const group = createGroup(i);
    familyContainer.appendChild(group);
    i++;
    localStorage.setItem('count', i);
}

const createElement = (type, className, innerText, id, onClick) => {
    const element = document.createElement(type);
    element.className = className;
    if(type === 'input') {
        element.placeholder = innerText;
    } else if (type === 'button') {
        element.type = 'button';
    }
    if(innerText) {
        element.innerHTML = innerText;
    }
    if (onClick) {
        element.onclick = onClick;
    }
    if (id) {
        element.id = innerText.toLowerCase() + '_' + id;
    }
    return element;
} 

const createGroup = id => {
    const row = createElement('div', 'row mb-2', '', 'row_' + id);
    const col1 = createElement('div', 'col');
    const col2 = createElement('div', 'col');
    const col3 = createElement('div', 'col-2');
    const input1 = createElement('input', 'form-control', 'Name', id);
    const input2 = createElement('input', 'form-control', 'Lastname', id);
    const removeBtn = createElement('button', 'btn btn-danger', 'Delete', '', () => deleteElement(id));
    col1.appendChild(input1);
    col2.appendChild(input2);
    col3.appendChild(removeBtn);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    return row;
}

const deleteElement = id => {
    const removeItem = confirm('Realmente deseas eliminar el registro?');
    if (removeItem) {
        const row = document.getElementById('_row_' + id);
        const parent = row.parentNode;
        parent.removeChild(row);
        localStorage.setItem('count', localStorage.getItem('count') - 1);
    }
}

const renderElements = () => {
    for (let j = 0; j < i; j++) {
        const familyContainer = document.getElementById('family-info');
        const group = createGroup(j);
        familyContainer.appendChild(group);
    }
}
renderElements();
//las promesas es un objeto de javascript que se va a resolver mas adelante
// las promesas se representan con un objeto mas promesa ej "const p = new Promese() => {}"
// "resolve" usame si fue resuleta la promesa y "rejet" si hay un error.
//para guatrdar u obtener la respuesta de la promesa vamos a usar p.then().cath(); que va a recibir la informacon si el resultado de la promesa es resolve (resolve es cuando la promesa ya esta resuelta). catch() => {} se usa catch cuando la promesa es rejet (rejet es igual a un error de promesa). 
// const timer2 = () => {
    // const p = new Promise (resolv => {
    //    set
  //  })
//}
//cuando usamos un archivo utilizamos la etiqueta "blob" archivos como imagenes 
// para darle el tiempo de respuesta a las respuesta de la promesa podemos utilizar
// al usar fetch ... const loquesea = fetch(url) => {caracteres de la funcion} 
//window.addEventListener('focus', doFocus);
//el add.EventListener sirve para agregar los eventos de forma dinamica en el javascrit y no en el html 
