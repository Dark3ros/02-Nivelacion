const empleados = [//Mini BD Callbasks Hell
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
//Funcion llamando a Callbacks
const getEmpleadoById = (id,callback) => {

    const empleado = empleados.find ((e) => e.id === id);

    if(empleado){
        callback(null,empleado);
        return;
    }
    callback("El Empleado no Existe")
}
const getSueldoById = (id,callback) => {

    const sueldo = sueldos.find ((s) => s.id === id);

    if(sueldo){
        callback(null,sueldo);
        return;
    }
    callback("Manuel No tiene Sueldo")
}

const id = 2;

getEmpleadoById(id, (error,empleado) => {
    if(error){
        console.log(`ERROR!!!!.....`);
        console.log(error);
        return;
    }
    getSueldoById (id,(error1,sueldo) => {
        if(error1){
            console.log(`ERROR!!!!....`);
            console.log(error1);
            return;
        }
        console.log(`El Empleado: ${empleado.nombre} ${empleado.apellido} Tiene un Sueldo de:${sueldo.sueldo}`);
    })    
});
