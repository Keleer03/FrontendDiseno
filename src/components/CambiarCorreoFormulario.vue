<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="elevation-12">
          <v-card-title class="title text-center"> Cambiar Correo Electrónico </v-card-title>
          <v-card-text>
            <v-form ref="formCambiarCorreo" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Identidad del cliente (ID/Razón Social)"
                    v-model="cliente.identidad"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4" class="text-center">
                  <BotonAtras />
                  <!-- Botón de Atrás importado -->
                </v-col>
                <v-col cols="4" class="text-center">
                  <v-btn color="primary" @click="validarIdentidad">Validar Identidad</v-btn>
                </v-col>
                <v-col cols="4" class="text-center">
                  <BotonSalir />
                  <!-- Botón de Salir importado -->
                </v-col>
              </v-row>

              <v-row v-if="datosCliente">
                <v-col cols="12">
                  <v-card>
                    <v-card-title>Datos del Cliente</v-card-title>
                    <v-card-text>
                      <p>
                        <strong>Nombre Completo o Razón Social:</strong>
                        {{ datosCliente.nombreCompleto }}
                      </p>
                      <p><strong>Correo Electrónico Actual:</strong> {{ datosCliente.correo }}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row v-if="datosCliente">
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Nueva Dirección de Correo Electrónico"
                    v-model="nuevoCorreo"
                    :rules="[rules.required, rules.emailValido]"
                    required
                  />
                </v-col>
              </v-row>

              <v-row v-if="datosCliente">
                <v-col cols="12" class="text-center">
                  <v-btn color="green darken-1" @click="submitForm">Cambiar Correo</v-btn>
                </v-col>
              </v-row>

              <v-row v-if="mensajeConfirmacion">
                <v-col cols="12" class="pa-2">
                  <v-alert type="success">
                    {{ mensajeConfirmacion }}
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
import BotonAtras from '@/components/Botones/BotonAtras.vue'
import BotonSalir from '@/components/Botones/BotonSalir.vue'

const valid = ref(false)
const cliente = ref({
  identidad: ''
})
const datosCliente = ref(null)
const nuevoCorreo = ref('')
const mensajeConfirmacion = ref('')

const rules = {
  required: (value) => !!value || 'Campo requerido',
  emailValido: (value) => /.+@.+\..+/.test(value) || 'Correo electrónico no válido'
}

const validarIdentidad = () => {
  // Lógica para validar la identidad del cliente
}

const submitForm = () => {
  // Lógica para enviar el formulario
  mensajeConfirmacion.value = `Estimado cliente, su correo ha sido actualizado correctamente.`
}
</script>

<style scoped>
.v-container {
  background: linear-gradient(
    to bottom right,
    #b9ece8,
    #43e4a1
  ); /* Fondo degradado en tonos verdes */
  height: 100vh; /* Asegura que ocupe toda la altura de la pantalla */
}

.v-card {
  margin: 20px;
  background-color: #f9f9f9; /* Fondo claro para el formulario */
  border-radius: 12px; /* Esquinas redondeadas */
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Sombra sutil */
}

.v-row {
  margin-bottom: 20px; /* Espaciado entre filas */
}

.text-center {
  text-align: center;
}
</style>
