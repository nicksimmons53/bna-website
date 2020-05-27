<template>
    <v-app-bar fixed color="#F5F5F5">
      <v-row class="d-flex d-sm-none" justify="space-between" align="center"> 
        <v-col align="left">
          <v-app-bar-nav-icon color="#00A3E0"></v-app-bar-nav-icon>
        </v-col>
        <v-col align="center">
          <v-img src="../assets/BNA_Logo.png" max-height="25px" max-width="75px"/>
        </v-col>
        <v-col class="mr-2" align="right">
          <v-icon class="material-icons" color="#00A3E0">shopping_cart</v-icon>
        </v-col>
      </v-row>

      <v-row class="d-none d-sm-flex" align="center">
        <v-col align="start">
          <v-img class="ml-8" src="../assets/BNA_Logo.png" max-height="50px" max-width="150px"/>
        </v-col>
        <v-col class="mr-8" align="end" justify="center">
          <v-tabs right background-color="#F5F5F5">
            <v-tab>Home</v-tab>
            <v-tab>Products</v-tab>
            <v-tab>Technical Information</v-tab>
            <v-icon large class="material-icons ml-4" color="#00A3E0">shopping_cart</v-icon>
          </v-tabs>
        </v-col>
      </v-row>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'NavBar',
    };
</script>