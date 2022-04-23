// ----- ----- accion de flechas ----- ---- 

const fila = document.querySelectorAll('.contenedor_carousel')[0];
const elementos = document.querySelectorAll('.elementos');

const flechaIzquierda = document.getElementById('flecha_izquierda');
const flechaDerecha = document.getElementById('flecha_derecha');

const filaTestimonio = document.querySelectorAll('.contenedor_carousel')[1];
const testimonios = document.querySelectorAll(".testimonie-container");

const flechaIzquierdaTestimonios = document.querySelector("#flecha_izquierda_testimonio");

const flechaDerechaTestimonio = document.querySelector("#flecha_derecha_testimonio");

var posTestimonio = 0;

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



flechaDerechaTestimonio.addEventListener('click', () => {
    (posTestimonio == testimonios.length - 1)? posTestimonio : posTestimonio +=1;
    filaTestimonio.scrollLeft = posTestimonio * filaTestimonio.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores-testimonio .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo')
    }
});

flechaIzquierdaTestimonios.addEventListener('click', () => {
    (posTestimonio == 0)? posTestimonio : posTestimonio -=1;
    filaTestimonio.scrollLeft = posTestimonio * filaTestimonio.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores-testimonio .activo');
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

    document.querySelectorAll('.indicadores')[0].appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

const numeroPaginasTestimonios = Math.ceil(testimonios.length);
for (let i = 0; i < numeroPaginasTestimonios; i ++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores-testimonio').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        filaTestimonio.scrollLeft = i * filaTestimonio.offsetWidth;

        document.querySelector('.indicadores-testimonio .activo').classList.remove('activo');
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

function scrollItemLeft(item, scroll){
    item.scrollLeft += scroll
}

window.addEventListener('resize', ()=>{
    filaTestimonio.scrollLeft = posTestimonio * filaTestimonio.offsetWidth;
})

