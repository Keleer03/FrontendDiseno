<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="elevation-12">
          <v-card-title class="title text-center"
            >Realizar Depósito con Cambio de Moneda</v-card-title
          >
          <v-card-text>
            <v-form ref="formDeposito" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Número de cuenta"
                    v-model="deposito.numeroCuenta"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Monto del depósito (USD)"
                    v-model="deposito.montoDeposito"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Tipo de cambio de compra"
                    v-model="tipoCambio"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4" class="text-center">
                  <BotonAtras />
                </v-col>
                <v-col cols="4" class="text-center">
                  <v-btn color="primary" @click="submitForm">
                    <v-icon left>mdi-currency-usd</v-icon>
                    Realizar Depósito
                  </v-btn>
                </v-col>
                <v-col cols="4" class="text-center">
                  <BotonSalir />
                </v-col>
              </v-row>

              <v-row v-if="mensaje" class="pa-2">
                <v-col cols="12">
                  <v-alert type="success">{{ mensaje }}</v-alert>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import BotonAtras from '@/components/Botones/BotonAtras.vue'
import BotonSalir from '@/components/Botones/BotonSalir.vue'

const valid = ref(false)
const deposito = ref({
  numeroCuenta: '',
  montoDeposito: ''
})

const tipoCambio = ref('')
const mensaje = ref('')

const rules = {
  required: (value) => !!value || 'Campo requerido'
}

const submitForm = () => {
  // Lógica para enviar el formulario
}
</script>

<style scoped>
.v-container {
  background: linear-gradient(to bottom right, #b9ece8, #43e4a1);
  height: 100vh;
}

.v-card {
  margin: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.v-row {
  margin-bottom: 20px;
}

.text-center {
  text-align: center;
}

.v-btn {
  margin: 10px 0;
}
</style>
