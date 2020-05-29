<template>
	<v-container fluid>
		<NavBar @clickedNav="toggleNavDrawer" @clickedCart="toggleCart"/>

          <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-list>
                    <v-row class="my-4" justify="center">
                        <v-img src="../../public/O3_Icon.png" max-height="100px" max-width="75px"/>
                    </v-row>
                    <v-divider/>
                    <v-list-item to="/Home">HOME</v-list-item>
                    <v-divider/>
                    <v-list-item to="/Products">PRODUCTS</v-list-item>
                    <v-divider/>
                    <v-list-item to="/TechInfo">TECHNICAL INFORMATION</v-list-item>
                </v-list>
          </v-navigation-drawer>

        <video autoplay controls muted width="80%">
            <source src="../assets/Yacht_Spray.mp4" type="video/mp4"/>
        </video>

		<v-divider/>

		<Footer/>

	</v-container>
</template>

<script>
	import NavBar from '../components/NavBar'
	import Footer from '../components/Footer'
	export default {
		name: 'Home',
		components: {
			NavBar,
			Footer
        },
        data: function( ) {
            return {
                drawer: false,
                cart: false
            }
        },
        methods: {
            toggleNavDrawer( ) {
                this.drawer = !this.drawer;
            },
            toggleCart( ) {
                this.cart = !this.cart;
            }
        }
	}
</script>

<style scoped>
	.home {
		padding-top: 32px;
	}
	h1 {
		color: #00A3E0;
	}
	.img {
		border-radius: 5px;
	}
    video {
        border-radius: 5px;
    }
</style>