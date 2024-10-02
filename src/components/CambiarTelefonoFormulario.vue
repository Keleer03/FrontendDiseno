<template>
  <v-form ref="formCambiarTelefono" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3 teal lighten-2">
            <h1 class="white--text">Cambiar Número de Teléfono</h1>
          </v-card>
        </v-col>
      </v-row>

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

      <v-row>
        <v-col cols="12" class="pa-2">
          <v-btn color="primary" @click="validarIdentidad">Validar Identidad</v-btn>
        </v-col>
      </v-row>

      <v-row v-if="datosCliente">
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Nuevo Número de Teléfono"
            v-model="nuevoTelefono"
            :rules="[rules.required]"
            required
          />
        </v-col>
      </v-row>

      <v-row v-if="datosCliente">
        <v-col cols="6" class="pa-2">
          <v-btn color="blue" @click="goBack">Atrás</v-btn>
        </v-col>
        <v-col cols="6" class="pa-2">
          <v-btn color="primary" @click="submitForm">Cambiar Teléfono</v-btn>
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
const nuevoTelefono = ref('')
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
