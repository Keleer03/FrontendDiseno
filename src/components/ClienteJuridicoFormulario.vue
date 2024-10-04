<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="elevation-12">
          <v-card-title class="title text-center"> Crear Cliente Jurídico </v-card-title>
          <v-card-text>
            <v-form ref="formClienteJuridico" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Nombre del apoderado generalísimo"
                    v-model="clienteJuridico.nombreCliente"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Cédula Jurídica"
                    v-model="clienteJuridico.cedulaJuridica"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Correo Electrónico"
                    v-model="clienteJuridico.correoElectronico"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Número Telefónico"
                    v-model="clienteJuridico.numeroTelefono"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-select
                    label="Categoría de Cliente"
                    v-model="clienteJuridico.categoriaCliente"
                    :items="['Físico', 'Jurídico']"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Tipo de Negocio"
                    v-model="clienteJuridico.tipoNegocio"
                    :rules="[rules.required]"
                    required
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Razón Social"
                    v-model="clienteJuridico.razonSocial"
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

const valid = ref(false)
const clienteJuridico = ref({
  nombreCliente: '',
  cedulaJuridica: '',
  razonSocial: '',
  correoElectronico: '',
  numeroTelefono: '',
  categoriaCliente: '',
  tipoNegocio: ''
})

const rules = {
  required: (value) => !!value || 'Campo requerido'
}
/*
const submitForm = () => {
  if (formClienteJuridico.value.validate()) {
    console.log('Cliente jurídico creado:', clienteJuridico.value)
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
