<template>
  <v-container fluid>
    <v-row>
      <v-col align="center">
        <v-img src="../assets/BNA_Logo.png" max-height="100px" max-width="300px"/>
        <h1>Welcome to Biosure North America</h1>
        <p>Our website is currently under construction. In the meantime, check out our currently available products <br>and contact information for purchase inquiries.</p>
      </v-col>
    </v-row>

    <v-divider/>

    <v-row justify="center">
      <v-col align="center"> 
        <h1>Contact Us</h1>
        <p></p>
        <p>2020 Babcock Road</p>
        <p>San Antonio, TX 78229</p>
        <p>Office: (925)-238-8890</p>
        <p>Email: angela.s@besgroups.com</p>
      </v-col>

      <v-col align="center">
        <h1>About Us</h1>
        <p></p>
        <p>Proud Partner of BES Group.</p>
        <a href="http://www.besgroups.com/home/">
          <img src="../assets/BES_Logo.png" height="50px" width="150px"/>
        </a>
        <p class="mt-4">Please refer to BES Group for more information.</p>
      </v-col>
    </v-row>

    <v-divider/>

    <v-row>
      <v-col align="center">
        <h1>Products</h1>
      </v-col>
    </v-row>

    <v-row class="mb-8">
      <v-col align="center">
        <v-card max-width="600px"> 
          <v-card-title class="headline">Professional Ozone Sprayer</v-card-title>
          <v-divider/>
          <v-row min-height="500px">
            <v-col align="start" cols="8">
              <v-card-title>Features</v-card-title>
              <v-card-subtitle>
                - Compact and lightweight
                <br>- Long-lasting rechargeable battery
                <br>- Proprietary NOx free electrolytic ozone technology
                <br>- No additional chemicals required
                <br>- On-demand and steady performance
                <br>- Kills 99.9% of pathogens, including: E. Coli, Salmonella, Listeria, and MERS
              </v-card-subtitle>

              <v-card-title>Benefits</v-card-title>
              <v-card-subtitle>
                - Rapid sanitation
                <br>- Harmless to skin
                <br>- Effective deodorization
                <br>- Long lasting operation
                <br>- Eliminates the need for sanitizing chemicals
                <br>- Helps reduce carbon footprint
              </v-card-subtitle>
            </v-col>
            <v-col align="center">
              <v-img src="../assets/P1_Product.png" max-height="400px" max-width="100px"/>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-btn 
              block 
              large 
              color="#55b236" 
              class="white--text"
              v-on:click="showCard('p1')">
              More Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col align="center">
        <v-card max-width="600px">
          <v-card-title class="headline">Ozone Tumbler Plus</v-card-title>
          <v-divider/>
          <v-row min-height="500px">
            <v-col align="start" cols="8">
              <v-card-title>Features</v-card-title>
              <v-card-subtitle>
                - Requires only potable water
                <br>- Built in rechargeable battery
                <br>- USB Type-C charging
                <br>- Compact and portable
                <br>- Professional grade high concentration dissolved activated-oxygen
                <br>- No chemical nor electrolyte addititives required
              </v-card-subtitle>

              <v-card-title>Benefits</v-card-title>
              <v-card-subtitle>
                - Ideal replacement to chemical based mouthwash liquid
                <br>- Easy to use for home, office, and travel 
                <br>- Natural and powerful sanitizer
                <br>- No irritating chemical formula
                <br>- Fully integrated and easy to use anywhere and anytime
                <br>- Fast acting conversion to ozonated water
              </v-card-subtitle>
            </v-col>
            <v-col align="center">
              <v-img src="../assets/P2_Product.png" max-height="400px" max-width="100px"/>
            </v-col>
          </v-row>
          
          <v-card-actions>
            <v-btn 
              block 
              large 
              color="#55b236" 
              class="white--text" 
              v-on:click="showCard('p2')">
              More Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-expand-transition>
    <v-row v-if="showProduct1">
      <v-col align="center">
        <v-card max-width="1500px">
          <v-card-title class="headline">Professional Ozone Sprayer</v-card-title>
          <v-divider/>
          <v-row justify="center">
            <v-img src="../assets/P1_Sprayer.png" max-height="500px" max-width="1200px" class="img ma-8"/>
          </v-row>
          <v-divider/>
          <v-row>
            <v-col align="start">
              <v-card-title class="mb-2">General Information</v-card-title>
              <v-card-subtitle class="mb-n4">
                The 2nd generation handheld rechargeable ozone sprayer uses our lastest AOP
                (Advanced Oxidation Process) technology. This revolutionary technology can help 
                replace conventional chemical surface sanitizers.
              </v-card-subtitle>
              <v-card-subtitle class="mb-n4">
                Simply fill the bottle with 
                clean tap water, the device will instantly convert ordinary water into 
                dissolved ozone and active chlorine. Dissolved ozone is well-known for its fast 
                and powerful sanitation performance, while active chlorine enables longer 
                lasting result. 
              </v-card-subtitle>
              <v-card-subtitle>
                This ozone sprayer offers an effective, safe, and environmentally
                friendly surface sanitation for many commercial hygiene applications.
              </v-card-subtitle>
            </v-col>
            <v-divider vertical/>
            <v-col align="start">
              <v-card-title class="pb-0">Specifications</v-card-title>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Model No.</v-card-subtitle>
                <v-card-subtitle>EOS7161-P</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Weight</v-card-subtitle>
                <v-card-subtitle>310g (10.9oz)</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Dimensions</v-card-subtitle>
                <v-card-subtitle>Φ53 x 254.8mm</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Rechargeable Battery</v-card-subtitle>
                <v-card-subtitle>Li-Polymer Battery (3.7V/1000mAh)</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Charger Input</v-card-subtitle>
                <v-card-subtitle>Input: 100-240V AC, 50/60Hz<br>Output: 5V/1A</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">O<sub>3</sub> Concentration</v-card-subtitle>
                <v-card-subtitle>≥ 2.5 ppm</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Reservoir Size</v-card-subtitle>
                <v-card-subtitle>150ml (0.04 gal)</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Water Quality</v-card-subtitle>
                <v-card-subtitle>Clean Tap Water/Mineral Water</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Water Temperature</v-card-subtitle>
                <v-card-subtitle>5 - 35&#176;C (41 - 95&#176;F)</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between">  
                <v-card-subtitle class="mr-12">Ambient Temperature</v-card-subtitle>
                <v-card-subtitle>5 - 40&#176;C (41 - 104&#176;F)</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12" justify="space-between"> 
                <v-card-subtitle class="mr-12">Charging Time</v-card-subtitle>
                <v-card-subtitle>50 - 60 minutes</v-card-subtitle>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    </v-expand-transition>

    <v-expand-transition>
    <v-row v-if="showProduct2">
      <v-col align="center">
        <v-card max-width="1500px">
          <v-card-title class="headline">Ozone Tumbler Plus</v-card-title>
          <v-divider/>
            <v-row justify="center">
              <v-img src="../assets/Traveler.png" max-height="500px" max-width="1200px" class="img ma-8"/>
            </v-row>
          <v-divider/>
          <v-row>
            <v-col align="start">
              <v-card-title class="mb-2">General Information</v-card-title>
              <v-card-subtitle class="mb-n4">
                With the press of a button, the Ozone Tumbler Plus instantly converts tap water
                into a natural ozonated water. It is a safe and powerful natural sanitizer for 
                oral rinsing that is effective at reducing oral germs and helps remove bad breath.
              </v-card-subtitle>
              <v-card-subtitle class="mb-n4">
                It is recommended by leading dentists to help improve everyday oral care.
              </v-card-subtitle>
            </v-col>
            <v-divider vertical/>
            <v-col align="start">
              <v-card-title class="pb-0">Specifications</v-card-title>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Model No.</v-card-subtitle>
                <v-card-subtitle>EOS7160-P</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Weight</v-card-subtitle>
                <v-card-subtitle>360g</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Dimensions</v-card-subtitle>
                <v-card-subtitle>Φ53 x H168mm</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Rechargeable Battery</v-card-subtitle>
                <v-card-subtitle>Li-Polymer Battery (3.7V/1000mAh)</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Charger Input</v-card-subtitle>
                <v-card-subtitle>Input: 100-240V AC, 50/60Hz<br>Output: 5V/1A</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">O<sub>3</sub> Concentration</v-card-subtitle>
                <v-card-subtitle>2.0 ppm</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Reservoir Size</v-card-subtitle>
                <v-card-subtitle>150ml (0.04 gal)</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Water Quality</v-card-subtitle>
                <v-card-subtitle>Clean Tap Water/Mineral Water</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between"> 
                <v-card-subtitle class="mr-12">Water Temperature</v-card-subtitle>
                <v-card-subtitle>5 - 35&#176;C (41 - 95&#176;F)</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12 mb-n2" justify="space-between">  
                <v-card-subtitle class="mr-12">Ambient Temperature</v-card-subtitle>
                <v-card-subtitle>5 - 40&#176;C (41 - 104&#176;F)</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12" justify="space-between"> 
                <v-card-subtitle class="mr-12">Charging Time</v-card-subtitle>
                <v-card-subtitle>50 - 60 minutes</v-card-subtitle>
              </v-row>
              <v-row class="pl-4 pr-12" justify="space-between"> 
                <v-card-subtitle class="mr-12">Battery Life</v-card-subtitle>
                <v-card-subtitle>500 charges</v-card-subtitle>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    </v-expand-transition>

    <v-divider/>

    <v-row>
      <v-col align="center">
        <h1>Technical Data</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <h3>Ozone Effects on Specific Bacteria, Viruses, and Molds</h3>
      <v-row justify="center">
        <v-col align="start" cols="6">
          <p>
              Bacteria are microscopically small,
              single-cell creatures having a
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
              <td>{{ item.name }}</td>
              <td>{{ item.desc }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
  </v-container>
</template>

<script>
  import pathogens from '../data/data.js'

  export default {
    name: 'Home',
    data: function( ) {
      return {
        showProduct1: false,
        showProduct2: false,
        data: pathogens
      }
    },
    methods: {
      showCard: function(product) {
        if (this.showProduct1 === true)
          this.showProduct1 = false;
        if (this.showProduct2 === true)
          this.showProduct2 = false;
          
        if (product === "p1")
          this.showProduct1 = !this.showProduct1;

        if (product === "p2")
          this.showProduct2 = !this.showProduct2;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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