<template>
	<img v-bind:src="country.flag" alt="" />
	<div class="country-infos">
		<div class="infos country-name">
			<h2>
				<p>Country:</p>
				{{ country.name }}
			</h2>
		</div>
		<div class="infos country-capital">
			<h2>
				<p>Capital:</p>
				{{ country.capital }}
			</h2>
		</div>
		<div class="infos country-region">
			<h2>
				<p>Region:</p>
				{{ country.region }}
			</h2>
		</div>
		<div class="infos country-subregion">
			<h2>
				<p>Subregion:</p>
				{{ country.subregion }}
			</h2>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CountryData } from "@/types/interfaces";

@Options({
	props: {
		country: {},
	},
})
export default class DisplayCountry extends Vue {
	country: CountryData | undefined;
}
</script>

<style lang="scss" scoped>
.country {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	img {
		margin: 1em 0 0 0;
		max-width: 30%;
		max-height: 15%;
		border: 3px solid black;
	}

	.country-infos {
		width: 100%;
		height: 100%;
		align-items: center;
		display: flex;
		flex-direction: column;

		.infos {
			h2 {
				width: auto;
				height: 20px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				p {
					margin-right: 10px;
					text-decoration: underline;
				}
			}
		}
	}
}

@media screen and (max-width: 900px) {
	img {
		max-width: 60% !important;
		max-height: 30% !important;
	}
	.result {
		button {
			font-size: 20px !important;
		}
	}
}
</style>
