<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="title title-background">Funcionalidades para las transacciones</h1>
      </v-col>
    </v-row>

    <!-- Primera fila de botones -->
    <v-row align="center" justify="center" class="button-row">
      <v-col cols="12" sm="4" class="text-center">
        <v-icon large color="black">mdi-cash-plus</v-icon>
        <v-btn color="primary" class="ma-2 custom-btn" @click="navigateTo('deposito-colones')">
          Depósito ₡
        </v-btn>
      </v-col>
      <v-col cols="12" sm="4" class="text-center">
        <v-icon large color="black">mdi-cash-plus</v-icon>
        <v-btn color="primary" class="ma-2 custom-btn" @click="navigateTo('deposito-dolares')">
          Depósito $
        </v-btn>
      </v-col>
      <v-col cols="12" sm="4" class="text-center">
        <v-icon large color="black">mdi-cash-minus</v-icon>
        <v-btn color="primary" class="ma-2 custom-btn" @click="navigateTo('retiro-colones')">
          Retiro ₡
        </v-btn>
      </v-col>
    </v-row>

    <!-- Segunda fila de botones -->
    <v-row align="center" justify="center" class="button-row">
      <v-col cols="12" sm="4" class="text-center">
        <v-icon large color="black">mdi-cash-minus</v-icon>
        <v-btn color="primary" class="ma-2 custom-btn" @click="navigateTo('retiro-dolares')">
          Retiro $
        </v-btn>
      </v-col>
      <v-col cols="12" sm="4" class="text-center">
        <v-icon large color="black">mdi-transfer</v-icon>
        <v-btn color="primary" class="ma-2 custom-btn" @click="navigateTo('transferencia')">
          Transferencia
        </v-btn>
      </v-col>
      <v-col cols="12" sm="4" class="text-center">
        <v-icon large color="black">mdi-file-document-outline</v-icon>
        <v-btn
          color="primary"
          class="ma-2 custom-btn"
          @click="navigateTo('consultar-transacciones')"
        >
        Transacciones hechas
        </v-btn>
      </v-col>
    </v-row>

    <!-- Tercera fila de botones -->
    <v-row align="center" justify="center" class="button-row">
      <v-col cols="12" sm="5" class="text-center">
        <v-icon large color="black">mdi-currency-eur</v-icon>
        <v-btn
          color="primary"
          class="ma-2 custom-btn"
          @click="navigateTo('consultar-saldo-colones')"
        >
          Consultar saldo ₡
        </v-btn>
      </v-col>
      <v-col cols="12" sm="5" class="text-center">
        <v-icon large color="black">mdi-currency-usd</v-icon>
        <v-btn
          color="primary"
          class="ma-2 custom-btn"
          @click="navigateTo('consultar-saldo-dolares')"
        >
          Consultar saldo $
        </v-btn>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="button-row">
      <v-col cols="12" sm="8" class="text-center">
        <v-icon large color="black">mdi-arrow-left-bold</v-icon>
        <v-btn color="primary" class="ma-2 custom-btn" @click="navigateTo('atras')"> Atrás </v-btn>
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

.v-btn {
  width: 100%;
  max-width: 300px;
  font-size: 1.25rem;
  padding: 15px;
  white-space: normal;
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
  font-size: 3rem;
}
</style>
