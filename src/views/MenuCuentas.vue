<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="title title-background">Funcionalidades para las cuentas</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="space-between" class="button-row">
      <v-col cols="12" sm="4">
        <v-icon large color="black">mdi-account-plus</v-icon>
        <v-btn color="primary" class="ma-2 custom-btn" @click="navigateTo('crear-cuenta')"
          >Crear cuenta</v-btn
        >
      </v-col>
      <v-col cols="12" sm="4">
        <v-icon large color="black">mdi-currency-eur</v-icon>
        <v-btn color="primary" class="ma-2 custom-btn" @click="navigateTo('consultar-estado-crc')"
          >Consultar estado ₡</v-btn
        >
      </v-col>
      <v-col cols="12" sm="4">
        <v-icon large color="black">mdi-currency-usd</v-icon>
        <v-btn color="primary" class="ma-2 custom-btn" @click="navigateTo('consultar-estado-usd')"
          >Consultar estado $</v-btn
        >
      </v-col>
    </v-row>

    <v-row align="center" justify="space-between" class="button-row">
      <v-col cols="12" sm="4">
        <v-icon large color="black">mdi-key-change</v-icon>
        <v-btn color="primary" class="ma-2 custom-btn" @click="navigateTo('cambiar-pin')"
          >Cambiar pin</v-btn
        >
      </v-col>
      <v-col cols="12" sm="4">
        <v-icon large color="black">mdi-account-remove</v-icon>
        <v-btn
          color="primary"
          class="ma-2 custom-btn long-btn"
          @click="navigateTo('eliminar-cuenta')"
          >Eliminar cuenta</v-btn
        >
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="button-row">
      <v-col cols="12" sm="4">
        <v-icon large color="black">mdi-arrow-left-bold</v-icon>
        <v-btn color="primary" class="ma-2 custom-btn long-btn" @click="navigateTo('atras')"
          >Atrás</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { VIcon } from 'vuetify/components'

const router = useRouter()

const navigateTo = (route) => {
  router.push({ name: route })
}
</script>

<style scoped>
.fill-height {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #c2cee0, #2867cc);
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 40px;
}

.title-background {
  background-color: #74b2e7;
  padding: 10px;
  border-radius: 5px;
}

.button-row {
  margin-bottom: 40px;
}

.v-col {
  margin-bottom: 20px;
}

.v-btn {
  width: 100%;
  max-width: 700px;
  font-size: 1.2rem;
  padding: 25px;
  white-space: normal;
  word-wrap: break-word;
  text-overflow: ellipsis;
}

.long-btn {
  max-width: 700px;
}

.custom-btn {
  color: #2c3e50;
  transition:
    transform 0.3s,
    background-color 0.3s;
}

.custom-btn:hover {
  transform: scale(1.05);
  background-color: #1e88e5;
}

.custom-btn:active {
  transform: scale(0.95);
  background-color: #1565c0;
}

.v-icon {
  margin-bottom: 10px;
  color: #000000;
  font-size: 4rem;
}
</style>
