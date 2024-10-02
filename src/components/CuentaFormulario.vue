<template>
  <v-form ref="formCuenta" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3 blue lighten-2">
            <h1 class="white--text">Crear Cuenta</h1>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Identidad del cliente"
            v-model="cuenta.identidadCliente"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="PIN de la cuenta"
            v-model="cuenta.pin"
            :rules="[rules.required]"
            required
            type="password"
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Monto del depósito inicial"
            v-model="cuenta.saldo"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Fecha de creación"
            v-model="cuenta.fechaCreacion"
            type="date"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Estado de la cuenta"
            v-model="cuenta.estado"
            :rules="[rules.required]"
            required
            disabled
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="pa-2">
          <v-btn color="blue" @click="$emit('irAtras')">Atrás</v-btn>
        </v-col>
        <v-col cols="6" class="pa-2">
          <v-btn color="primary" @click="submitForm">Registrar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const cuenta = ref({
  identidadCliente: '',
  pin: '',
  montoDeposito: '',
  fechaCreacion: '',
  estado: 'Activa' // Estado por defecto
})

const rules = {
  required: (value) => !!value || 'Campo requerido'
}

/*
const submitForm = () => {
  if (valid.value) {
    const cuentaData = {
      identidadCliente: cuenta.value.identidadCliente,
      pin: cuenta.value.pin,
      montoDeposito: String(cuenta.value.montoDeposito),
      fechaCreacion: cuenta.value.fechaCreacion,
      estado: cuenta.value.estado
    }
    console.log('Datos de la cuenta a registrar:', cuentaData)
  }
}*/
</script>

<style scoped>
.v-container {
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .v-container {
    max-width: 100%;
    padding: 0 10px;
  }
}

@media (min-width: 1200px) {
  .v-container {
    max-width: 1000px;
    padding: 0 20px;
  }
}
</style>
