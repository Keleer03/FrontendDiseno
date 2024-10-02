<template>
  <v-form ref="formClienteFisico" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3 green lighten-2">
            <h1 class="white--text">Crear Cliente Físico</h1>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Nombre del cliente"
            v-model="clienteFisico.nombreCliente"
            :rules="[rules.required]"
            required
          />
        </v-col>

        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Cédula de identidad"
            v-model="clienteFisico.cedula"
            :rules="[rules.required]"
            required
          />
        </v-col>

        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Fecha de nacimiento"
            v-model="clienteFisico.fechaNacimiento"
            type="date"
            :rules="[rules.required]"
            required
          />
        </v-col>

        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Número de teléfono"
            v-model="clienteFisico.numeroTelefono"
            :rules="[rules.required, rules.phone]"
            required
          />
        </v-col>

        <v-col cols="12" md="12" class="pa-2">
          <v-text-field
            label="Correo electrónico"
            v-model="clienteFisico.correoElectronico"
            :rules="[rules.required, rules.email]"
            required
          />
        </v-col>

        <v-col cols="12" md="6" class="pa-2">
          <v-text-field
            label="Cantidad de cuentas"
            v-model="clienteFisico.cantidadCuentas"
            type="number"
            :rules="[rules.required, rules.positiveNumber]"
            required
          />
        </v-col>

        <!-- Modificación del campo Categoría -->
        <v-col cols="12" md="6" class="pa-2">
          <v-select
            label="Categoría de cliente"
            v-model="clienteFisico.categoriaCliente"
            :items="['Físico', 'Jurídico']"
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
  required: (value) => !!value || 'Campo requerido',
  isInteger: (value) => Number.isInteger(Number(value)) || 'Debe ser un número entero'
}

const submitForm = () => {
  if (formClienteFisico.value.validate()) {
    console.log('Cliente físico creado:', clienteFisico.value)

    // Alógica para enviar los datos al back-end
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
    max-width: 1200px;
    padding: 0 20px;
  }
}
</style>
