<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="elevation-12">
          <v-card-title class="title text-center"> Crear Cliente Físico </v-card-title>
          <v-card-text>
            <v-form ref="formClienteFisico" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Nombre del cliente"
                    v-model="clienteFisico.nombreCliente"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Cédula de identidad"
                    v-model="clienteFisico.cedula"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Fecha de nacimiento"
                    v-model="clienteFisico.fechaNacimiento"
                    type="date"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Número de teléfono"
                    v-model="clienteFisico.numeroTelefono"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Correo electrónico"
                    v-model="clienteFisico.correoElectronico"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Cantidad de cuentas"
                    v-model="clienteFisico.cantidadCuentas"
                    type="number"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-select
                    label="Categoría de cliente"
                    v-model="clienteFisico.categoriaCliente"
                    :items="['Físico', 'Jurídico']"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>
              </v-row>

              <v-row class="mt-4" justify="center">
                <v-col cols="4" class="text-center">
                  <BotonAtras />
                </v-col>
                <v-col cols="4" class="text-center">
                  <v-btn color="green darken-1" @click="submitForm">Registrar</v-btn>
                </v-col>
                <v-col cols="4" class="text-center">
                  <BotonSalir />
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

const formClienteFisico = ref(null)
const valid = ref(false)
const clienteFisico = ref({
  nombreCliente: '',
  cedula: '',
  fechaNacimiento: '',
  numeroTelefono: '',
  correoElectronico: '',
  cantidadCuentas: '',
  categoriaCliente: ''
})

const rules = {
  required: (value) => !!value || 'Campo requerido'
}
/*
const submitForm = () => {
  if (formClienteFisico.value.validate()) {
    console.log('Cliente físico creado:', clienteFisico.value)
    // Lógica para enviar los datos al back-end
  }
}*/
</script>

<style scoped>
.v-container {
  background: linear-gradient(to bottom right, #b9ece8, #43e4a1);
  height: 100vh;
}

.v-card {
  margin: 20px;
  background-color: papayawhip;
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
