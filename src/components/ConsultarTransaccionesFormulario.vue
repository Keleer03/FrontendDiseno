<template>
    <v-form ref="formTransacciones" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card class="pa-3 blue lighten-2">
              <h1 class="white--text">Consultar Transacciones</h1>
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
  
          <v-col cols="12" md="6" class="pa-2">
            <v-text-field
              label="PIN actual"
              v-model="pinActual"
              type="password"
              :rules="[rules.required]"
              required
            />
          </v-col>
  
          <v-col cols="12" md="6" class="pa-2">
            <v-text-field
              label="Palabra recibida por SMS"
              v-model="palabraRecibida"
              :rules="[rules.required]"
              required
            />
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="6" class="pa-2">
            <v-btn color="blue" @click="goBack">Atrás</v-btn>
          </v-col>
          <v-col cols="6" class="pa-2">
            <v-btn color="primary" @click="submitForm">Consultar</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const formTransacciones = ref(null)
  const valid = ref(false)
  const numeroCuenta = ref('')
  const pinActual = ref('')
  const palabraRecibida = ref('')
  
  const rules = {
    required: (value) => !!value || 'Campo requerido',
  }
  
  const submitForm = async () => {
    if (formTransacciones.value.validate()) {
      console.log('Datos para consultar transacciones:', {
        numeroCuenta: numeroCuenta.value,
        pinActual: pinActual.value,
        palabraRecibida: palabraRecibida.value,
      })
  
      // Aquí iría la lógica para enviar los datos al back-end
      /*
      try {
        const response = await axios.post('/api/transacciones/consultar', {
          numeroCuenta: numeroCuenta.value,
          pinActual: pinActual.value,
          palabraRecibida: palabraRecibida.value,
        })
        console.log('Transacciones consultadas:', response.data)
      } catch (error) {
        console.error('Error al consultar transacciones:', error)
      }
      */
    }
  }
  
  </script>
  
  <style scoped>
  .v-container {
    max-width: 800px;
    margin: 0 auto;
  }
  </style>
  