
const hayInterseccion = (entry: any) => {
    return entry.isIntersecting;
    // true - dentro de la pantalla
    // false - fuera de la pantalla
}

const loadImage = (entry: any) => {
    const imagen = entry.target;

    const img = imagen.lastChild;

    const url = img.src;
    img.src = url;
}

const observador = new IntersectionObserver((entradas) => {
    entradas
        .filter(hayInterseccion)
        .forEach(loadImage)
})

export const registrarImagen = (imagen: any) => {
    observador.observe(imagen);
}