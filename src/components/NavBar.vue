<template>
    <v-app-bar fixed color="#F5F5F5">
      <v-row class="d-flex d-lg-none" justify="space-between" align="center"> 
        <v-col align="left">
          <v-app-bar-nav-icon color="#00A3E0" @click.stop="toggleNavDrawer"></v-app-bar-nav-icon>
        </v-col>
        <v-col align="center">
          <v-img src="../assets/BNA_Logo.png" max-height="45px" max-width="85px"/>
        </v-col>
        <v-col class="mr-2" align="right">
          <!--
          <v-icon 
            large 
            @click.stop="toggleCart"
            class="material-icons" 
            color="#00A3E0">
            shopping_cart
          </v-icon>
          -->
        </v-col>
      </v-row>

      <v-row class="d-none d-lg-flex" align="center">
        <v-col align="start">
          <v-row align="center">
            <v-img class="ml-8" src="../assets/BNA_Logo.png" max-height="50px" max-width="150px"/>
            <h4 class="ml-4">BIOSURE NORTH AMERICA</h4>
          </v-row>
        </v-col>
        <v-col align="end" justify="center">
          <v-tabs right background-color="#F5F5F5">
            <v-tab to="/Home">Home</v-tab>
            <v-tab to="/Products">Products</v-tab>
            <v-tab to="/TechInfo">Technical Information</v-tab>
            <!--
            <v-icon 
              large 
              @click.stop="toggleCart"
              class="material-icons ml-4" 
              color="#00A3E0">
              shopping_cart
            </v-icon>
            -->
          </v-tabs>
        </v-col>
      </v-row>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'NavBar',
        data: function( ) {
            return {
                drawer: false
            }
        },
        methods: {
          toggleNavDrawer: function( ) {
            this.$emit('clickedNav', true);
          },
          toggleCart: function( ) {
            this.$emit('clickedCart', true);
          }
        }
    };
</script>