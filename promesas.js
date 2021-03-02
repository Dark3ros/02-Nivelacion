const empleados = [//Mini BD para Ejercicio Promesas
    {
        id:1,
        nombre:`Pepe`,
        apellido:`Argento`
    },
    {
        id:2,
        nombre:`Jose`,
        apellido:`Sojo`    
    },
    {
        id:3,
        nombre:`Manuel`,
        apellido:`Sojo`
    }
]
const sueldos = [
    {
        id:1,
        sueldo:1500
    },
    {
        id:2,
        sueldo:2500
    }


]

//Funcion Retornando un Promesa
const getEmpleadoById = (id) => {

    return new Promise((resolve,reject) => {

        const empleado = empleados.find ((e) => e.id === id);
    
        if(empleado){
            resolve(empleado);
            return;
        }
        reject(`El Empleado con ${id} no Existe`);

    });

}

const getSueldoById = (id) => {

    return new Promise((resolve,reject) => {

        const sueldo = sueldos.find ((s) => s.id === id);
    
        if(sueldo){
            resolve(sueldo);
            return;
        }
        reject(`El Empleado con Id:${id} no Tiene Sueldo`);

    });
}

const id = 4;
let nombre;
let apellido;

getEmpleadoById(id)
    .then( empleado => {
        nombre = empleado.nombre;
        apellido = empleado.apellido;
        return getSueldoById(id);
    })
    
    .then( sueldo => console.log(`El empleado con Id: ${id} es ${nombre} ${apellido} y Tiene un Sueldo de: ${sueldo.sueldo}`))
    
    .catch(Error => console.log(Error));