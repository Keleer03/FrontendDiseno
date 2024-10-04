<template>
    <v-btn color="grey" @click="goBack">
      Atrás
    </v-btn>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const goBack = () => {
    router.back()  
  }
  </script>
  
  <style scoped>
  </style>
  