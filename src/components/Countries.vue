<template>
	<div class="countries">
		<h1>From which country is this flag?</h1>
		<img v-bind:src="flagAsked" alt="{{  }}" />
		<div class="purposals">
			<button
				@click="checkIfWin($event)"
				v-for="country in countriesSelected"
				v-bind:key="country.alpha2Code"
				v-bind:value="country.name"
			>
				{{ country.name }}
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CountryData } from "@/types/interfaces";

@Options({
	props: {
		flagAsked: String,
		countriesSelected: Array,
		checkIfWin: Function,
	},
})
export default class Countries extends Vue {
	flagAsked: string | undefined;
	countriesSelected: CountryData | undefined;
	// eslint-disable-next-line @typescript-eslint/ban-types
	checkIfWin: ((e: MouseEvent) => {}) | undefined;
}
</script>
<style scoped lang="scss">
.countries {
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		margin: 1em 0 0 0;
		max-width: 30%;
		max-height: 15%;
		border: 3px solid black;
	}

	.purposals {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin: 2em 0 0 0;

		button {
			margin: 10px;
			padding: 10px;
			font-size: 35px;
			background: none;
			border: 2px solid #0c2461;
			border-radius: 10px;
			max-height: 50%;

			&:hover {
				border-color: #78e08f;
			}
		}
	}
}

@media screen and (max-width: 900px) {
	img {
		max-width: 60% !important;
		max-height: 30% !important;
	}
	.purposals {
		button {
			font-size: 20px !important;
		}
	}
}
</style>
