<template>
	<div class="country">
		<h1 v-if="win === true">Win</h1>
		<h1 v-else>Lose</h1>

		<div v-if="!win" class="switch-buttons">
			<button @click="switchCountry(countryChosen, $event)" class="switch answer active" id="answer" active="true">
				your answer
			</button>

			<button @click="switchCountry(countrySelected, $event)" class="switch selected" id="selected" active="false">
				good answer
			</button>
		</div>

		<DisplayCountry v-bind:country="display" />

		<button @click="replay()">Replay</button>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CountryData } from "@/types/interfaces";
import DisplayCountry from "@/components/DisplayCountry.vue";

@Options({
	data() {
		return {
			display: {},
		};
	},
	props: {
		countrySelected: {},
		countryChosen: {},
		displayCountry: {},
		win: false,
		replay: Function,
	},
	components: {
		DisplayCountry,
	},
	created() {
		this.display = this.displayCountry;
		this.checkIfWin();
	},
	methods: {
		checkIfWin() {
			if (this.countrySelected.name === this.countryChosen.name) {
				this.win = true;
			}
		},
		switchCountry(country: CountryData, e: MouseEvent) {
			const div = document.querySelector(".switch-buttons");
			const answer = div?.querySelector(".answer");
			const selected = div?.querySelector(".selected");
			const elementid = (e.target as HTMLButtonElement).id;

			if (elementid === "answer" && selected?.getAttribute("active")) {
				selected.setAttribute("active", "false");
				answer?.setAttribute("active", "true");
			} else {
				answer?.setAttribute("active", "false");
				selected?.setAttribute("active", "true");
			}
			this.display = country;
		},
	},
})
export default class ResultSelected extends Vue {
	countrySelected: CountryData | undefined;
	countryChosen: CountryData | undefined;
	win = false;
	// eslint-disable-next-line @typescript-eslint/ban-types
	replay: Function | undefined;
}
</script>
<style lang="scss">
.country {
	.switch-buttons {
		.switch {
			font-size: 15px;
		}

		.selected[active="true"] {
			background: #0bd66634;
		}

		.answer[active="true"] {
			background: #d60b0b34;
		}
	}
	button {
		margin: 10px;
		padding: 10px;
		font-size: 35px;
		background: none;
		border: 2px solid #0c2461;
		border-radius: 10px;
		max-height: 50%;
		max-width: 50%;

		&:hover {
			border-color: #78e08f;
		}
	}
}
</style>
