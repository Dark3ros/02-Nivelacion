const empleados = [//Mini BD para Ejercicio Asynv-Await
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


const getEmpleadoById = async (id) => {

        try{
            const empleado = empleados.find ((e) => e.id === id);
            if(empleado){
                return(empleado);
            }
            throw new Error(`El Empleado con Id: ${id} No Existe`) 

        } catch (Error) {

            throw Error;
        }
}

const getSueldoById = async (id) => {

    try{
        const sueldo = sueldos.find ((s) => s.id === id);
        if(sueldo){
            return(sueldo);
        } 
        throw new Error(`El Sueldo para el Id: ${id} No Existe`) 

    } catch (Error) {

        throw Error;
    }
}
    const id = 3;
        
    const getDatosCompletosEmpleado = async (id) => {

        const empleado = await getEmpleadoById(id);
        const sueldo = await getSueldoById(id);
        console.log(`El Empleado con Id: ${id} es ${empleado.nombre} ${empleado.apellido} y Tiene un Sueldo de: ${sueldo.sueldo}`);

    }
   getDatosCompletosEmpleado (id)
   .then(mensaje => console.log(mensaje))
   .catch(error => console.log(error.message));