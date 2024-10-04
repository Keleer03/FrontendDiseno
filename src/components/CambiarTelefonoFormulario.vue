<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="elevation-12">
          <v-card-title class="title text-center"> Cambiar Número de Teléfono </v-card-title>
          <v-card-text>
            <v-form ref="formCambiarTelefono" v-model="valid" lazy-validation>
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
                <v-col cols="4" class="pa-2">
                  <BotonAtras />
                </v-col>
                <v-col cols="4" class="pa-2">
                  <v-btn color="primary" @click="validarIdentidad">Validar Identidad</v-btn>
                </v-col>
                <v-col cols="4" class="pa-2">
                  <BotonSalir />
                </v-col>
              </v-row>

              <v-row v-if="datosCliente">
                <v-col cols="12" md="6">
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
                  <v-btn color="green darken-1" @click="submitForm">Cambiar Teléfono</v-btn>
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
const nuevoTelefono = ref('')
const mensajeConfirmacion = ref('')

const rules = {
  required: (value) => !!value || 'Campo requerido'
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
</style>
