<template>
  <v-form ref="formClienteJuridico" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3 green lighten-2">
            <h1 class="white--text">Crear Cliente Jurídico</h1>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Nombre del generalisimo"
            v-model="clienteJuridico.nombreCliente"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Cédula Jurídica"
            v-model="clienteJuridico.cedulaJuridica"
            :rules="[rules.required, rules.cedulaJuridica]"
            required
          />
        </v-col>
        <v-col cols="12" md="12" class="pa-2">
          <v-text-field
            label="Correo Electrónico"
            v-model="clienteJuridico.correoElectronico"
            :rules="[rules.required, rules.email]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Número Telefónico"
            v-model="clienteJuridico.numeroTelefono"
            :rules="[rules.required, rules.telefono]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-select
            label="Categoría de Cliente"
            v-model="clienteJuridico.categoriaCliente"
            :items="['Fisico', 'Juridico']"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Tipo de Negocio"
            v-model="clienteJuridico.tipoNegocio"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Razón Social"
            v-model="clienteJuridico.razonSocial"
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
          <v-btn color="primary" @click="submitForm">Registrar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'

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
  required: (value) => !!value || 'Campo requerido',
  ///Quitar con validaciones del BACK END!!!!!!1
  email: (value) => /.+@.+\..+/.test(value) || 'Correo electrónico inválido',
  telefono: (value) => /^\d{8,10}$/.test(value) || 'El número debe tener entre 8 y 10 dígitos',
  cedulaJuridica: (value) =>
    /^\d{10}$/.test(value) || 'Cédula jurídica inválida (debe tener 10 dígitos)'
}

const submitForm = () => {
  const form = ref(null)
  if (form.value.validate()) {
    console.log('Cliente jurídico creado:', clienteJuridico.value)
  }
}

const goBack = () => {
  console.log('Regresar a la página anterior')
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
