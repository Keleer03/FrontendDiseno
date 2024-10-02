<template>
  <v-form ref="formCambiarCorreo" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3 teal lighten-2">
            <h1 class="white--text">Cambiar Correo Electrónico</h1>
          </v-card>
        </v-col>
      </v-row>

      <!-- Identidad del cliente -->
      <v-row>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Identidad del cliente (ID/Razón Social)"
            v-model="cliente.identidad"
            :rules="[rules.required]"
            required
          />
        </v-col>
      </v-row>

      <!-- Botón para validar identidad -->
      <v-row>
        <v-col cols="12" class="pa-2">
          <v-btn color="primary" @click="validarIdentidad">Validar Identidad</v-btn>
        </v-col>
      </v-row>

      <!-- Datos del cliente si la identidad es válida -->
      <v-row v-if="datosCliente">
        <v-col cols="12" class="pa-2">
          <v-card>
            <v-card-title>Datos del Cliente</v-card-title>
            <v-card-text>
              <p>
                <strong>Nombre Completo o Razón Social:</strong> {{ datosCliente.nombreCompleto }}
              </p>
              <p><strong>Correo Electrónico Actual:</strong> {{ datosCliente.correo }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Nueva dirección de correo electrónico -->
      <v-row v-if="datosCliente">
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Nueva Dirección de Correo Electrónico"
            v-model="nuevoCorreo"
            :rules="[rules.required, rules.emailValido]"
            required
          />
        </v-col>
      </v-row>

      <v-row v-if="datosCliente">
        <v-col cols="6" class="pa-2">
          <v-btn color="blue" @click="goBack">Atrás</v-btn>
        </v-col>
        <v-col cols="6" class="pa-2">
          <v-btn color="primary" @click="submitForm">Cambiar Correo</v-btn>
        </v-col>
      </v-row>

      <v-row v-if="mensajeConfirmacion">
        <v-col cols="12" class="pa-2">
          <v-alert type="success">
            {{ mensajeConfirmacion }}
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const cliente = ref({
  identidad: ''
})
const datosCliente = ref(null)
const nuevoCorreo = ref('')
const mensajeConfirmacion = ref('')

const rules = {
  required: (value) => !!value || 'Campo requerido'
}
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
