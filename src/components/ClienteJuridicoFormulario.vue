<template>
  <v-form ref="formClienteJuridico" v-model="valid" lazy-validation>
    <v-container>
      <!-- Título -->
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
            label="Cedula Juridica"
            v-model="clienteJuridico.cedulaJuridica"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Razon social"
            v-model="clienteJuridico.razonSocial"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="12" class="pa-2">
          <v-text-field
            label="Correo electronico"
            v-model="clienteJuridico.correoElectronico"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Numero telefonico"
            v-model="clienteJuridico.numeroTelefono"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Categoría de cliente"
            v-model="clienteJuridico.categoriaCliente"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Tipo de negocio"
            v-model="clienteJuridico.tipoNegocio"
            :rules="[rules.required]"
            required
          />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Cantidad de cuentas"
            v-model="clienteJuridico.cantidadCuentas"
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
const clienteFisico = ref({
  nombreCliente: '',
  cedulaJuridica: '',
  fechaNacimiento: '',
  razonSocial: '',
  correoElectronico: '',
  telefono: '',
  categoriaCliente: ''
})

const rules = {
  required: (value) => !!value || 'Campo requerido'
}

const submitForm = () => {
  const form = ref(null)
  if (form.value.validate()) {
    console.log('Cliente físico creado:', clienteFisico.value)

    // Aquí podrías enviar los datos al servidor. Este es un ejemplo de cómo sería.
    /*
        axios.post('/api/clientes/fisico', clienteFisico.value)
          .then(response => {
            console.log('Cliente físico guardado con éxito:', response.data)
          })
          .catch(error => {
            console.error('Error al crear cliente físico:', error)
          })
        */
  }
}

const goBack = () => {
  // Lógica para regresar a la página anterior
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
