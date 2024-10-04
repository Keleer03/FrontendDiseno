<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <BotonAtras />
        <!-- Incluye el botón atrás aquí -->
        <ClienteFisicoFormulario />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BotonAtras from '@/components/Botones/BotonAtras.vue'
import ClienteFisicoFormulario from '@/components/ClienteFisicoFormulario.vue'
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
