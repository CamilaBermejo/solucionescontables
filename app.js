// ----- ----- accion de flechas ----- ---- 

const fila = document.querySelector('.contenedor_carousel');
const elementos = document.querySelectorAll('.elementos');

const flechaIzquierda = document.getElementById('flecha_izquierda');
const flechaDerecha = document.getElementById('flecha_derecha');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo')
    }
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo')
    }
});

const numeroPaginas = Math.ceil(elementos.length / 5);
for (let i = 0; i < numeroPaginas; i ++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

elementos.forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        const elem = e.currentTarget;
        setTimeout(() =>{
            elementos.forEach(elemento => elemento.classList.remove('hover'));
            elem.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    elementos.forEach(elemento => elemento.classList.remove('hover'));
})

