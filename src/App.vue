<template>
  <v-app>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',
  created( ) {
    document.title = "BNA | Ozone Disinfection Systems"
  },

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
