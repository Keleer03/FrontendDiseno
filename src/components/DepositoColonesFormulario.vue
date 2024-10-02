<template>
  <v-form ref="formDeposito" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3 blue lighten-2">
            <h1 class="white--text">Realizar Depósito en Colones</h1>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Número de cuenta"
            v-model="deposito.numeroCuenta"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Monto del depósito"
            v-model="deposito.monto"
            :rules="[rules.required]"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6" class="pa-2">
          <v-btn color="blue" @click="irAtras">Atrás</v-btn>
        </v-col>
        <v-col cols="6" class="pa-2">
          <v-btn color="primary" @click="submitForm">Realizar Depósito</v-btn>
        </v-col>
      </v-row>

      <v-row v-if="mensaje" class="pa-2">
        <v-col cols="12">
          <v-alert type="success">{{ mensaje }}</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const deposito = ref({
  numeroCuenta: '',
  montoDeposito: ''
})

const mensaje = ref('')

const rules = {
  required: (value) => !!value || 'Campo requerido'
}
</script>

<style scoped>
.v-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
