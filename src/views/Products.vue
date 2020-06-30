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
					<h1>Products</h1>
					<h6>All product pricing includes shipping.</h6>
			</v-col>
		</v-row>

	<v-row>
		<v-col align="center">
			<v-card max-width="1000px"> 
				<v-row justify="space-between" class="mx-3">
					<v-card-title class="headline d-none d-sm-flex">Professional Ozone Sprayer</v-card-title>
					<v-card-title class="d-none d-sm-flex">Introductory Price: $399.00</v-card-title>
				</v-row>
				<v-row class="d-flex d-sm-none" justify="center">
					<v-card-title class="headline">Professional Ozone Sprayer</v-card-title>
				</v-row>
				<v-row class="d-flex d-sm-none" justify="center">
					<v-card-title class="mb-n3 mt-n4">$399.00</v-card-title>
				</v-row>
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
							<br>- Long-lasting operation
							<br>- Eliminates the need for sanitizing chemicals
							<br>- Helps reduce carbon footprint
						</v-card-subtitle>
					</v-col>
					<v-col align="center">
						<v-img src="../assets/P1_Product.png" max-height="400px" max-width="100px"/>
					</v-col>
				</v-row>

				<v-divider/>

				<v-card-actions>
					<v-row justify="center">
						<v-col align-self="center" cols="8">
							<!--
							<v-btn 
								large
								block
								color="#55b236" 
								class="white--text mb-4"
								@click="sprayerCheckout( )">
								Purchase
							</v-btn>
							-->

							<v-btn
								medium
								outlined 
								color="#00A3E0"
								v-on:click="toggleCard1">
								More Details
							</v-btn>
						</v-col>
					</v-row>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>

	<v-expand-transition>
	<v-row v-if="showProduct1">
		<v-col align="center">
			<v-card max-width="1200px">
				<v-card-title class="headline">Professional Ozone Sprayer</v-card-title>
				<v-divider/>
				<v-row justify="center">
					<v-col>
					<v-img src="../assets/P1_Sprayer.png" max-height="500px" max-width="1200px" class="img ma-8"/>
					</v-col>
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
							clean tap water and the device will instantly convert ordinary water into 
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
							<v-col cols="12">
								<v-simple-table class="mb-3">
									<template v-slot:default>
										<tbody>
											<tr>
												<td>Model No.</td>
												<td>EOS7161-P</td>
											</tr>												
											<tr>
												<td>Weight</td>
												<td>310g (10.9oz)</td>
											</tr>
											<tr>
												<td>Dimensions</td>
												<td>Φ53 x 254.8mm</td>
											</tr>
											<tr>
												<td>Rechargable Battery</td>
												<td>Li-Polymer Battery (3.7V/1000mAh)</td>
											</tr>
											<tr>
												<td>Charger Input</td>
												<td>Input: 100-240V AC, 50/60Hz<br>Output: 5V/1A</td>
											</tr>
											<tr>
												<td>Concentration</td>
												<td>≥ 2.5 ppm</td>
											</tr>
											<tr>
												<td>Reservoir Size</td>
												<td>150ml (0.04 gal)</td>
											</tr>
											<tr>
												<td>Water Quality</td>
												<td>Clean Tap Water<br>Mineral Water</td>
											</tr>
											<tr>
												<td>Water Temperature</td>
												<td>5 - 35&#176;C (41 - 95&#176;F)</td>
											</tr>
											<tr>
												<td>Ambient Temperature</td>
												<td>5 - 40&#176;C (41 - 104&#176;F)</td>
											</tr>
											<tr>
												<td>Charging Time</td>
												<td>50 - 60 minutes</td>
											</tr>
										</tbody>
									</template>
								</v-simple-table>
							</v-col>
					</v-col>
				</v-row>
			</v-card>
		</v-col>
	</v-row>
	</v-expand-transition>

	<v-row>
		<v-col align="center">
			<v-card max-width="1000px"> 
				<v-row justify="space-between" class="mx-3">
					<v-card-title class="headline d-none d-sm-flex">Ozone Tumbler Plus</v-card-title>
					<v-card-title class="d-none d-sm-flex">Introductory Price: $349.00</v-card-title>
				</v-row>
				<v-row class="d-flex d-sm-none" justify="center">
					<v-card-title class="headline">Ozone Tumbler Plus</v-card-title>
				</v-row>
				<v-row class="d-flex d-sm-none" justify="center">
					<v-card-title class="mb-n3 mt-n4">$349.00</v-card-title>
				</v-row>
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
							- Easy to use for home, office, and travel 
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

				<v-divider/>
				
				<v-card-actions>
					<v-row justify="center">
						<v-col align-self="center" cols="8">
							<!--
							<v-btn 
								large
								block
								color="#55b236" 
								class="white--text mb-4"
								@click="tumblerCheckout( )">
								Purchase
							</v-btn>
							-->

							<v-btn
								medium
								outlined 
								color="#00A3E0"
								v-on:click="toggleCard2">
								More Details
							</v-btn>
						</v-col>
					</v-row>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>

	<v-expand-transition>
	<v-row v-if="showProduct2">
		<v-col align="center">
			<v-card max-width="1200px">
				<v-card-title class="headline">Ozone Tumbler Plus</v-card-title>
				<v-divider/>
					<v-row justify="center">
						<v-col>
						<v-img src="../assets/Traveler.png" max-height="500px" max-width="1200px" class="img ma-8"/>
						</v-col>
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
					</v-col>
					<v-divider vertical/>
					<v-col align="start">
						<v-card-title class="pb-0">Specifications</v-card-title>
							<v-col cols="12">
								<v-simple-table class="mb-3">
									<template v-slot:default>
										<tbody>
											<tr>
												<td>Model No.</td>
												<td>EOS7160-P</td>
											</tr>												
											<tr>
												<td>Weight</td>
												<td>360g</td>
											</tr>
											<tr>
												<td>Dimensions</td>
												<td>Φ53 x H168mm</td>
											</tr>
											<tr>
												<td>Rechargable Battery</td>
												<td>Li-Polymer Battery (3.7V/1000mAh)</td>
											</tr>
											<tr>
												<td>Charger Input</td>
												<td>Input: 100-240V AC, 50/60Hz<br>Output: 5V/1A</td>
											</tr>
											<tr>
												<td>Concentration</td>
												<td>2.0 ppm</td>
											</tr>
											<tr>
												<td>Reservoir Size</td>
												<td>150ml (0.04 gal)</td>
											</tr>
											<tr>
												<td>Water Quaity</td>
												<td>Clean Tap Water<br>Mineral Water</td>
											</tr>
											<tr>
												<td>Water Temperature</td>
												<td>5 - 35&#176;C (41 - 95&#176;F)</td>
											</tr>
											<tr>
												<td>Ambient Temperature</td>
												<td>5 - 40&#176;C (41 - 104&#176;F)</td>
											</tr>
											<tr>
												<td>Charging Time</td>
												<td>50 - 60 minutes</td>
											</tr>
											<tr>
												<td>Battery Life</td>
												<td>500 charges</td>
											</tr>
										</tbody>
									</template>
								</v-simple-table>
							</v-col>
					</v-col>
				</v-row>
			</v-card>
		</v-col>
	</v-row>
	</v-expand-transition>

	<v-divider/>

	<Footer/>
	</v-container>
</template>

<script>
		import NavBar from '../components/NavBar'
		import Footer from '../components/Footer'
		export default {
				name: 'Products',
				components: {
						NavBar,
						Footer
				},
				data: function( ) {
						return {
								showProduct1: false,
								showProduct2: false,
								drawer: false
						}
				},
				methods: {
					toggleCard1: function( ) {
							this.showProduct1 = !this.showProduct1;
					},
					toggleCard2: function( ) {
						this.showProduct2 = !this.showProduct2;
					},
					toggleNavDrawer( ) {
						this.drawer = !this.drawer;
					},
					// sprayerCheckout( ) {
					// 	window.open("https://checkout.square.site/buy/PWGH22OU7JRRZBDQOTY5X7TJ");
					// },
					// tumblerCheckout( ) {
					// 	window.open("https://checkout.square.site/buy/O3NLUL677EPTXIGKUHRTZYP6");
					// }
				},
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