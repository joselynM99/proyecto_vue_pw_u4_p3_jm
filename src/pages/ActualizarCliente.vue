<template>
    <div>
        <h1>Actualizar Cliente</h1>
        <h4>Ingresar el id del cliente que desea actualizar</h4>
        <input v-model="id" type="text">
        <button @click="buscar">Buscar</button>

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
        <button @click="actualizarCliente">Actualizar</button>

    </div>
</template>
<script>
import { actualizarFachada, obtenerPorIdFachada } from '@/js/api_facturacion/ProcesarCliente'

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
        actualizarCliente() {
            const miCliente = {
                nombre: this.nombre,
                apellido: this.apellido,
                fechaNacimiento: this.fechaNacimiento,
                cedula: this.cedula,
                genero: this.genero,
                email: this.email
            }

            actualizarFachada(this.id, miCliente)
        },
        async buscar() {
            const { nombre, apellido, cedula, fechaNacimiento, genero, email } = await obtenerPorIdFachada(this.id)
            this.cedula = cedula
            this.nombre = nombre
            this.apellido = apellido
            this.fechaNacimiento = fechaNacimiento
            this.genero = genero
            this.email = email
        },

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