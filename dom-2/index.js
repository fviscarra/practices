const row = document.createElement('div');
row.className= 'row';
const col1 = document.createElement('div');
col1.className = 'col-6';
    const col1_container = document.createElement('div');
    col1_container.className = 'row';
    const d1 = document.createElement('div');
    d1.className = 'col';
    d1.innerHTML= '<p>credito y tarjetas</p>';
    const d2 = document.createElement('div');
    d2.className = 'col';
    d2.innerHTML= '<p>venta a empresas</p>';
    const d3 = document.createElement('div');
    d3.className = 'col';
    d3.innerHTML= '<p>seguros</p>';
    const d4 = document.createElement('div');
    d4.className = 'col';
    d4.innerHTML= '<p>lista de regalos</p>';
    const d5 = document.createElement('div');
    d5.className = 'col';
    d5.innerHTML= '<p>logistica</p>';
    const d6 = document.createElement('div');
    d6.className = 'col';
    d6.innerHTML= '<p>viajes</p>';

    col1.appendChild(col1_container);
    col1_container.appendChild(d1);
    col1_container.appendChild(d2);
    col1_container.appendChild(d3);
    col1_container.appendChild(d4);
    col1_container.appendChild(d5);
    col1_container.appendChild(d6);
    console.log(header);
const col2 = document.createElement('div');
col2.className = 'col-6';
    const container2= document.createElement('div');
    container2.className= 'row';
        const dv1= document.createElement('div');
        dv1.className= 'col-3';

        const dv2= document.createElement('div');
        dv2.className='col-3';
        dv2.innerHTML= '<p>venta telefonica</p>';

        const dv3= document.createElement('div');
        dv3.className= 'col-3';
        dv3.innerHTML= '<p>sucursales</p>';

        const dv4= document.createElement('div');
        dv4.className='col-3';
        dv4.innerHTML= '<p>centro de ayuda</p>';

        col2.appendChild(container2);
        container2.appendChild(dv1);
        container2.appendChild(dv2);
        container2.appendChild(dv3);
        container2.appendChild(dv4);

row.appendChild(col1);
row.appendChild(col2);
header.appendChild(row);