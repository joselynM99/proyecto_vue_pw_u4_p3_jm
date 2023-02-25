<template>
    <div>
        <h1>Insertar Cliente</h1>

        <label for="">Nombre:</label>
        <input v-model="nombre" type="text">
        <label for="">Apellido:</label>
        <input v-model="apellido" type="text">
        <label for="">Cedula:</label>
        <input v-model="cedula" type="text">
        <label for="">Fecha de nacimiento:</label>
        <input v-model="fechaNacimiento" type="datetime-local">
        <label for="">Genero:</label>
        <input v-model="genero" type="text">
        <label for="">Email:</label>
        <input v-model="email" type="text">
        <button @click="insertarCliente">Insertar</button>

    </div>
</template>
<script>
import { insertarFachada } from '@/js/api_facturacion/ProcesarCliente'

export default {

    data() {
        return {
            id: null,
            nombre: null,
            apellido: null,
            fechaNacimiento: null,
            cedula: null,
            genero: null,
            email: null
        }
    },

    methods: {
        insertarCliente() {
            const miCliente = {
                nombre: this.nombre,
                apellido: this.apellido,
                fechaNacimiento: this.fechaNacimiento,
                cedula: this.cedula,
                genero: this.genero,
                email: this.email
            }

            insertarFachada(miCliente)
        }

    },

}
</script>
<style>
div {
    display: grid;
    width: 300px;
    margin: 15px auto;
}

label {
    margin-top: 15px;
}

button {
    margin: 10px auto;
    height: 25px;
    width: 100px;
}
</style>