const createElement = (elementType, id, className, events, placeholder, content ) => {
    const element = document.createElement(elementType);
    element.innerText= content;
    if (events.length) {
        for (let i = 0; i < events.length; i++) {
            const event = events[i];
            element[event.type] = event.method;
        }
    }
    if (placeholder) {
        element.placeholder = placeholder;
    }
    if (id) {
        element.id = id;
    }
    if (className) {
        element.className = className;
    }
    if (elementType === 'input') {
        element.placeholder = placeholder ;
        element.id = id;
    } else if (elementType === 'label') {
        element.for = id;
    }
    if (elementType === 'p' || elementType === 'h1' || elementType === 'h2' || elementType === 'h3' ||
         elementType === 'h4' || elementType === 'h5' || elementType === 'h6' || elementType === 'a') {
        element.innerHTML = content;
    }
    return element;
}
// elemnetType , id , className , onclick, placeholder, content
const label = createElement('label', 'nombre', false , false , false, 'nombre');
const input = createElement ('input', 'nombre', 'form-control', false, 'escribir su nombre', ' ' );
const container = createElement ('div', false , 'container', false, false , '' );
const button = createElement ('button', 'button', 'btn btn-success', [{type: 'onclick', method: () => console.log('onClick ejecutado')}, {type: 'onmouseover', method: () => console.log('OnMouseOver')}, {type: 'onmouseleave', method: () => console.log('onMouseLeave')}], false, 'enviar' );
const form = createElement ('div', 'formulario', 'form', false , false, ' ' );
container.appendChild(label);
container.appendChild(input);
container.appendChild(button);
form.appendChild(container);
console.log(form);
document.getElementById(fer);
fer.appendChild(form)
