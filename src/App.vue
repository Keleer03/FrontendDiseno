<template>
  <div id="app">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-app>
          <v-main>
            <router-view />
          </v-main>
        </v-app>
      </v-col>
    </v-row>
  </div>
</template>

<script setup></script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-row {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-col {
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-app {
  height: 100%;
}

.v-main {
  height: 100%;
}
</style>
