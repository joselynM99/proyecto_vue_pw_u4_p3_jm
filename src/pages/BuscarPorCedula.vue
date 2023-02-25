<template>
    <div>
        <h1>Buscar por cédula</h1>
        <h2>{{ id }}</h2>
        <h2>{{ id2 }}</h2>
        <button @click="procesarGuardado">Procesar</button>
        <input v-model="cedula" type="text">
        <button @click="consultarClientePorCedula">Consultar</button>
        <label for="">Id:</label>
        <input v-model="id" type="text">
        <label for="">Nombre:</label>
        <input v-model="nombre" type="text">
        <label for="">Apellido:</label>
        <input v-model="apellido" type="text">
        <label for="">Fecha de nacimiento:</label>
        <input v-model="fechaNacimiento" type="datetime-local">
        <label for="">Genero:</label>
        <input v-model="genero" type="text">
        <label for="">Email:</label>
        <input v-model="email" type="text">
        <button @click="borrar">Borrar</button>
    </div>
</template>
<script>
import { obtenerPorCedulaFachada, borrarPorCedulaFachada } from '@/js/api_facturacion/ProcesarCliente';
export default {
    data() {
        return {
            id: null,
            nombre: null,
            apellido: null,
            fechaNacimiento: null,
            cedula: null,
            genero: null,
            email: null,
            id2: this.$route.params.idCliente
        }
    },

    mounted() {
        console.log('Entró a la pagina buscar')
        console.log(this.$route);
        console.log(this.$route.params);

        const { idCliente } = this.$route.params
        console.log(idCliente);
        this.id = idCliente
        console.log('La provincia es: ');
        console.log(this.$route.query.provincia);
    },

    methods: {
        async consultarClientePorCedula() {
            const { nombre, apellido, id, fechaNacimiento, genero, email } = await obtenerPorCedulaFachada(this.cedula)
            this.id = id
            this.nombre = nombre
            this.apellido = apellido
            this.fechaNacimiento = fechaNacimiento
            this.genero = genero
            this.email = email
        },

        borrar() {
            borrarPorCedulaFachada(this.cedula)
        },

        procesarGuardado() {
            console.log(this.id);
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