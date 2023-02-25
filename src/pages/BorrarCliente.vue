<template>
    <div>
        <h1>Borrar por cédula</h1>
        <input v-model="cedula" type="text">
        <button @click="borrarCedula">Borrar</button>

        <h1>Borrar por id</h1>
        <input v-model="id" type="text">
        <button @click="borrarId">Borrar</button>
    </div>
</template>
<script>
import { borrarPorIdFachada, borrarPorCedulaFachada } from '@/js/api_facturacion/ProcesarCliente';
export default {
    data() {
        return {
            id: null,
            cedula: null,
        }
    },

    methods: {

        borrarCedula() {
            borrarPorCedulaFachada(this.cedula)
        },
        borrarId(){
            borrarPorIdFachada(this.id)
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