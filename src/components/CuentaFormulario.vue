<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="elevation-12">
          <v-card-title class="title text-center">Crear Cuenta</v-card-title>
          <v-card-text>
            <v-form ref="formCuenta" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="ID del Cliente"
                    v-model="cuenta.identidadCliente"
                    :rules="[rules.required]"
                    required
                  />
                  <v-btn color="blue darken-1" @click="buscarCliente">Buscar Cliente</v-btn>
                </v-col>
                <v-col cols="12" md="6" v-if="clienteEncontrado">
                  <v-card>
                    <v-card-title>Cliente Encontrado</v-card-title>
                    <v-card-text>
                      <p><strong>Nombre:</strong> {{ cliente.nombrePila }}</p>
                      <p><strong>Cuentas Actuales:</strong> {{ cliente.cuentas.length }}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" v-if="clienteEncontrado">
                  <v-text-field
                    label="PIN de la cuenta"
                    v-model="cuenta.pin"
                    :rules="[rules.required]"
                    required
                    type="password"
                  />
                </v-col>
                <v-col cols="12" md="6" v-if="clienteEncontrado">
                  <v-text-field
                    label="Monto del depósito inicial"
                    v-model="cuenta.saldo"
                    :rules="[rules.required]"
                    required
                    type="number"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4" class="text-center">
                  <BotonAtras />
                </v-col>
                <v-col cols="4" class="text-center" v-if="clienteEncontrado">
                  <v-btn color="primary" @click="submitForm">
                    <v-icon left>mdi-account-plus</v-icon>
                    Registrar
                  </v-btn>
                </v-col>
                <v-col cols="4" class="text-center">
                  <BotonSalir />
                </v-col>
              </v-row>

              <v-row v-if="mensajeConfirmacion">
                <v-col cols="12" class="pa-2">
                  <v-alert type="success">
                    {{ mensajeConfirmacion }}
                  </v-alert>
                </v-col>
              </v-row>
              <v-row v-if="mensajeError">
                <v-col cols="12" class="pa-2">
                  <v-alert type="error">
                    {{ mensajeError }}
                  </v-alert>
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
import axios from 'axios'
import BotonAtras from '@/components/Botones/BotonAtras.vue'
import BotonSalir from '@/components/Botones/BotonSalir.vue'

const valid = ref(false)
const cuenta = ref({
  identidadCliente: '',
  pin: '',
  saldo: 0
})
const clienteEncontrado = ref(false) // Indica si el cliente ha sido encontrado
const cliente = ref(null) // Datos del cliente encontrado
const mensajeConfirmacion = ref('')
const mensajeError = ref('')

const rules = {
  required: (value) => !!value || 'Campo requerido'
}

// Función para buscar el cliente por su ID
const buscarCliente = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/clientes/${cuenta.value.identidadCliente}`
    )
    cliente.value = response.data
    clienteEncontrado.value = true
    mensajeError.value = '' // Resetea el mensaje de error
  } catch (error) {
    clienteEncontrado.value = false
    mensajeError.value = 'Cliente no encontrado'
    cliente.value = null
  }
}

// Función para enviar el formulario y registrar la cuenta
const submitForm = async () => {
  if (valid.value && clienteEncontrado.value) {
    try {
      const response = await axios.post('http://localhost:8080/api/cuentas/registrar', {
        cliente: { idCliente: cuenta.value.identidadCliente }, // Envía el cliente como un objeto
        pin: cuenta.value.pin,
        saldo: cuenta.value.saldo
      })
      mensajeConfirmacion.value =
        'Cuenta registrada exitosamente. Número de cuenta: ' + response.data.numeroCuenta
      mensajeError.value = ''
    } catch (error) {
      console.error('Error al registrar cuenta:', error)
      mensajeError.value = 'Error al registrar la cuenta. Inténtalo de nuevo.'
    }
  }
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
</style>
