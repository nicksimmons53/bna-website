<template>
    <v-container fluid>
		<NavBar @clicked="toggleNavDrawer"/>

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

        <v-row>
            <v-col align="center">
                <h1>Technical Data</h1>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-row justify="center">
                <v-col align="start" cols="8">
                    <h3 class="text-center mb-4">Ozone Effects on Specific Bacteria, Viruses, and Molds</h3>
                    <p>
                        Bacteria are microscopically small,
                        single-cell creatures that have a
                        primitive structure. The bacteria
                        body is sealed by a relatively
                        solid-cell membrane.<br>
                        <br>Ozone interferes with the
                        metabolism of bacterium-cells,
                        most likely through inhibiting and
                        blocking the operation of
                        the enzymatic control system.
                        A sufficient amount of ozone
                        breaks through the cell membrane,
                        and this leads to the destruction of
                        the bacteria.<br>
                        <br>Viruses are small,
                        independent particles, built of
                        crystals and macromolecules.
                        Unlike bacteria, they multiply only
                        within the host cell. They transform
                        protein of the host cell into proteins
                        of their own. Ozone destroys viruses by
                        diffusing through the protein coat
                        into the nucleic acid core, resulting
                        in damage of the viral RNA. At
                        higher concentrations, ozone
                        destroys the capsid, or exterior
                        protein shell by oxidation so DNA
                        (deoxyribonucleic acid), or RNA
                        (ribonucleic acid) structures of the
                        microorganism are affected.
                    </p>
                </v-col>
            </v-row>

            <v-col cols="10">
                <v-simple-table class="mb-12">
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">Pathogen</th>
                        <th class="text-left">Dosage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data" :key="item.name">
                        <td class="text-left">{{ item.name }}</td>
                        <td class="text-left">{{ item.desc }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>

        <v-divider/>

        <Footer/>
    </v-container>
</template>

<script>
    import NavBar from '../components/NavBar'
    import Footer from '../components/Footer'
    import pathogens from '../data/data.js'
    export default {
        name: 'TechInfo',
        data: function( ) {
            return {
                data: pathogens,
                drawer: false
            }
        },
        components: {
            NavBar,
            Footer
        },
        methods: {
            toggleNavDrawer( ) {
                this.drawer = !this.drawer;
            }
        }
    };
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
</style>