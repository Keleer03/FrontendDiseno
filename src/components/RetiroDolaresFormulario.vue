<template>
  <v-form ref="formRetiro" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3 blue lighten-2">
            <h1 class="white--text">Realizar Retiro con Compra de Moneda</h1>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Número de cuenta"
            v-model="retiro.numeroCuenta"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="PIN actual"
            v-model="retiro.pin"
            :rules="[rules.required]"
            required
            type="password"
          />
        </v-col>
      </v-row>

      <v-row v-if="mensajeEnviado" class="pa-2">
        <v-col cols="12">
          <v-alert type="info"
            >Se ha enviado una palabra por mensaje de texto, por favor revísela y digitela a
            continuación.</v-alert
          >
        </v-col>
      </v-row>

      <v-row v-if="mensajeEnviado">
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Palabra recibida"
            v-model="retiro.palabraRecibida"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Monto del retiro (USD)"
            v-model="retiro.montoRetiro"
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
          <v-btn color="primary" @click="submitForm">Realizar Retiro</v-btn>
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
const mensajeEnviado = ref(false)
const mensaje = ref('')
const retiro = ref({
  numeroCuenta: '',
  pin: '',
  palabraRecibida: '',
  montoRetiro: ''
})

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
