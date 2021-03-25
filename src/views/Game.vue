<template>
	<Countries
		v-if="checked === false"
		v-bind:countriesSelected="countriesSelected"
		v-bind:flagAsked="countrySelected.flag"
		v-bind:checkIfWin="checkIfWin"
	/>
	<!-- eslint-disable-next-line max-len -->
	<Result
		v-else
		v-bind:countrySelected="countrySelected"
		v-bind:replay="replay"
		v-bind:countryChosen="countryChosen"
		v-bind:displayCountry="countryChosen"
	/>
</template>

<script lang="ts">
import { getCountry } from "@/functions/getCountry";
import { Options, Vue } from "vue-class-component";
import Countries from "@/components/Countries.vue";
import Result from "@/components/Result.vue";

@Options({
	data() {
		return {
			countriesSelected: [],
			countrySelected: {},
			countryChosen: {},
			checked: false,
		};
	},
	components: {
		Countries,
		Result,
	},
	async created() {
		document.title = this.$route.meta.title;
		await this.initCountries();
	},
	methods: {
		async initCountries() {
			this.countriesSelected = await getCountry();
			this.countrySelected = this.countriesSelected[Math.floor(Math.random() * this.countriesSelected.length)];
		},
		async checkIfWin(e: MouseEvent) {
			this.countryChosen = await getCountry((e.target as HTMLButtonElement).value);
			this.checked = true;
			return this.countrySelected.name === this.countryChosen;
		},
		async replay() {
			this.initCountries().then(() => (this.checked = false));
		},
	},
})
export default class Game extends Vue {}
</script>
