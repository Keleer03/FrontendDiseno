<template>
  <v-form ref="formConsultarEstatus" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3 teal lighten-2">
            <h1 class="white--text">Consultar Estatus de Cuenta</h1>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Número de cuenta"
            v-model="numeroCuenta"
            :rules="[rules.required]"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="pa-2">
          <v-btn color="primary" @click="consultarEstatus">Consultar Estatus</v-btn>
        </v-col>
      </v-row>

      <v-row v-if="mensajeEstatus">
        <v-col cols="12" class="pa-2">
          <v-alert :type="tipoAlerta">
            {{ mensajeEstatus }}
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'

// Estados de validación y datos
const valid = ref(false)
const numeroCuenta = ref('')
const mensajeEstatus = ref('')
const tipoAlerta = ref('')

// Reglas de validación
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
