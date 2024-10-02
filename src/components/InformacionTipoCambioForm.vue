<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card class="pa-3">
          <h1 class="text-center">Consultar Tipo de Cambio</h1>

          <v-row>
            <v-col cols="12" md="6" class="pa-2">
              <v-btn color="green" @click="consultarTipoCambioCompra"
                >Consultar Tipo de Cambio de Compra</v-btn
              >
              <v-alert v-if="tipoCambioCompra" type="success" dismissible>
                Tipo de Cambio de Compra: ₡{{ tipoCambioCompra }}
              </v-alert>
              <v-alert v-if="errorCompra" type="error" dismissible>
                Error: {{ errorCompra }}
              </v-alert>
            </v-col>

            <v-col cols="12" md="6" class="pa-2">
              <v-btn color="red" @click="consultarTipoCambioVenta"
                >Consultar Tipo de Cambio de Venta</v-btn
              >
              <v-alert v-if="tipoCambioVenta" type="success" dismissible>
                Tipo de Cambio de Venta: ₡{{ tipoCambioVenta }}
              </v-alert>
              <v-alert v-if="errorVenta" type="error" dismissible>
                Error: {{ errorVenta }}
              </v-alert>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="pa-2">
        <v-btn color="primary" @click="submitForm">Atras</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
//import axios from 'axios'

const tipoCambioCompra = ref(null)
const tipoCambioVenta = ref(null)
const errorCompra = ref(null)
const errorVenta = ref(null)
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}

.v-card {
  max-width: 800px;
  margin: 0 auto;
}
</style>
