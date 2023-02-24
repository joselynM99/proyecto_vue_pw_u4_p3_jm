import axios from "axios";

//Metodos fachada debe tener export para exportar los metodos
export const obtenerPorCedulaFachada = async (cedula) => {
    return await obtenerPorCedula(cedula);
}

export const insertarFachada = async(body) => {
    await insertar(body);
}

export const actualizarFachada = async(id, body) => {
    await  actualizar(id, body);
}

export const buscarTodosFachada = () => {
    return buscarTodos();
}

export const borrarPorIdFachada = (id) => {
    borrarPorId(id);
}

export const borrarPorCedulaFachada = (cedula) => {
    borrarPorCedula(cedula);
}

//Metodos de consumos CRUD
//No hace falta el await pero sí el async
const obtenerPorCedula = async (cedula) => {
    const data = axios.get(`http://localhost:8081/API/Facturacion/V1/clientes/porCedula/${cedula}`).then(r => r.data)
    return data
}

const insertar = async(body) => {
    axios.post(`http://localhost:8081/API/Facturacion/V1/clientes`, body).then(r=>r.data)
    
}

const actualizar = async(id, body) => {
    axios.put(`http://localhost:8081/API/Facturacion/V1/clientes/${id}`, body).then(r=>r.data)
   
}

const buscarTodos = () => {

}

const borrarPorId = async (id) => {
    axios.delete(`http://localhost:8081/API/Facturacion/V1/clientes/${id}`).then(r=>r.data)
   
}
const borrarPorCedula = (cedula) => {
    console.log(cedula)
}
//Expone un solo método
//export default obtenerPorCedulaFachada;

