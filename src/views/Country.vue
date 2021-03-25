<template>
	<div class="country">
		<DisplayCountry v-bind:country="country" />
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getCountry } from "@/functions/getCountry";
import DisplayCountry from "@/components/DisplayCountry.vue";

@Options({
	data() {
		return {
			query: this.$route.params.name,
			country: {},
		};
	},
	components: {
		DisplayCountry,
	},
	async created() {
		document.title = this.$route.meta.title;
		this.country = await getCountry(this.query);
	},
	methods: {},
})
export default class CountriesList extends Vue {}
</script>
