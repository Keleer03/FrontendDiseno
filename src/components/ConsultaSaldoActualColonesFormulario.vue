<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-4">
          <h2 class="text-center">Consultar Saldo Actual en Colones</h2>

          <v-form v-model="valid" ref="formSaldo">
            <v-text-field
              v-model="numeroCuenta"
              label="Número de cuenta"
              :rules="[rules.required, rules.numeroCuentaValido]"
              required
              outlined
              clearable
            ></v-text-field>

            <v-text-field
              v-model="pin"
              label="PIN"
              :rules="[rules.required, rules.pinValido]"
              type="password"
              required
              outlined
              clearable
            ></v-text-field>

            <v-col>
              <v-btn color="primary" @click="submitForm">Consultar</v-btn>
            </v-col>
            <v-btn color="primary" @click="submitForm">Atras</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const numeroCuenta = ref('')
const pin = ref('')

const rules = {
  required: (value) => !!value || 'Este campo es obligatorio.'
}
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}

.v-card {
  max-width: 600px;
  margin: 0 auto;
}
</style>
