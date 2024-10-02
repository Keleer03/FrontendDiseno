<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <ClienteJuridicoFormulario />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ClienteJuridicoFormulario from '@/components/ClienteJuridicoFormulario.vue'
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
