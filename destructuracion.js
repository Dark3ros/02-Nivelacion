const personaje = {
    nombre: `pepe`,
    apellido: `argento`,
    profesion: `zapatero`,

    getDescripcion() {
        return `${nombre} ${apellido} es ${profesion}`
    }
}

/*const nombre = personaje.nombre;
const apellido = personaje.apellido;
const profesion = personaje.profesion;*/

/*const {nombre,apellido,profesion} = personaje;/*Destructuramos*/ 

/*const imprimirPersonaje = ({nombre,apellido,profesion,edad = 50}) => {
    console.log(nombre,apellido,profesion,edad)
}//se destrucuta siempre con llaves, destruct in funtion
imprimirPersonaje(personaje);*/

const personajes = [`Tigro`,`Rayo de Plata`,`Pantro`];

/*const p1 = personajes[0];
const p2 = personajes[1];
const p3 = personajes[2];*/
const [p1,p2,p3]= personajes;//Destruct in Array
console.log(p1,p2,p3);