<template>
	<div class="countries-list">
		<li class="list" v-for="(country, letter) in countries" v-bind:key="letter">
			<div class="chevron" v-bind:class="letter">
				<Chevron v-bind:className="letter" v-bind:upOrDown="upODown[letter]" />
				<p v-bind:class="letter">{{ letter }}</p>
			</div>
			<div class="elements hiden" v-bind:class="letter">
				<ul v-for="c in country" v-bind:key="c.alpha2Code">
					<a v-bind:href="'#/country/' + c.name">{{ c.name }}</a>
				</ul>
			</div>
		</li>
	</div>
</template>

<script lang="ts">
import { getCountries } from "@/functions/getCountries";
import { upOrDown } from "@/functions/upOrDown";
import { countriesToArray } from "@/functions/countriesToArray";
import { Options, Vue } from "vue-class-component";
import Chevron from "@/components/Chevron.vue";

@Options({
	data() {
		return {
			countries: [],
			upODown: {},
		};
	},
	components: {
		Chevron,
	},
	async created() {
		document.title = this.$route.meta.title;
		const countries = await getCountries();
		this.countries = countriesToArray(countries);
		this.upODown = upOrDown(countries);
		this.switchChevron();
	},
	updated() {
		this.switchChevron();
	},
	methods: {
		switchChevron() {
			const chevron = document.querySelectorAll(".chevron");
			chevron?.forEach(
				(o) =>
					((o as HTMLElement).onclick = (e): void => {
						let letter = (e.target as HTMLElement)?.classList.value;
						if (letter.includes("chevron")) {
							letter = letter.slice("chevron".length + 1, letter.length);
						}
						this.upODown[letter] = this.upODown[letter] === "down" ? "up" : "down";
						const li = (document.querySelectorAll(".list") as unknown) as HTMLElement[];
						li?.forEach((l) => {
							const children = [...l.children];
							for (let i = 1; i < children.length; i++) {
								const elem = children[i];
								if (elem.classList.contains(letter)) {
									children[i].classList.toggle("hiden");
								}
							}
						});
					}),
			);
		},
	},
})
export default class CountriesList extends Vue {}
</script>
<style lang="scss" scoped>
.countries-list {
	display: flex;
	align-items: center;
	flex-direction: column;

	.list {
		list-style-type: none;
		user-select: none;
		width: 200px;

		.chevron {
			display: flex;
			align-items: center;
			font-size: 40px;
			width: 100%;
			cursor: pointer;

			p {
				margin: 0;
			}
		}

		.hiden {
			display: none;
		}

		.elements {
			background: #eeeeee;
			font-size: 17px;
			border: 1px solid black;
			margin: 0 0 10px 0;
			padding: 10px;

			ul {
				padding: 0;

				a {
					color: black;
				}
			}
		}
	}
}
</style>
