<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <h1>Bienvenido a página CACTEC</h1>
        <v-btn color="primary" class="ma-2" @click="navigateTo('clientes')">Clientes</v-btn>
        <v-btn color="primary" class="ma-2" @click="navigateTo('cuentas')">Cuentas</v-btn>
        <v-btn color="primary" class="ma-2" @click="navigateTo('transferencias')"
          >Transferencias</v-btn
        >
        <v-btn color="primary" class="ma-2" @click="navigateTo('tipo-de-cambio')"
          >Tipo de cambio</v-btn
        >
        <v-btn color="primary" class="ma-2" @click="navigateTo('estado-de-cuenta')"
          >Estado de cuenta</v-btn
        >
        <v-btn color="primary" class="ma-2" @click="navigateTo('salir')">Salir</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (route) => {
  router.push({ name: route })
}
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

.v-btn {
  width: 100%;
  max-width: 300px;
}
</style>
