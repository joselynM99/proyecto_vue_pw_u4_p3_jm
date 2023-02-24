<template>
    <div>
        <h1>Buscar por cédula</h1>
        <input v-model="cedula" type="text">
        <button @click="consultarClientePorCedula">Consultar</button>
        <button @click="insertar">Insertar</button>
    </div>
</template>
<script>
import { obtenerPorCedulaFachada, insertarFachada } from '@/js/api_facturacion/ProcesarCliente';
export default {
    data() {
        return {
            cedula: null
        }
    },

    methods: {
        async consultarClientePorCedula() {
            const { nombre, apellido, id } = await obtenerPorCedulaFachada(this.cedula)
            console.log(nombre);
            console.log(apellido);
            console.log(id);
        },

        insertar() {
            const miCliente = {
                nombre: "Juana",
                apellido: "Lopez",
                fechaNacimiento: "2003-02-23T18:17:45",
                cedula: "17574638843",
                genero: "FEMENINO",
                email: "jajshlkd@jjada"
            }

            insertarFachada(miCliente)
        }
    },
}
</script>
<style></style>