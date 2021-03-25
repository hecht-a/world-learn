<template>
	<svg v-bind:class="className" v-if="upOrDown === 'up'" width="1em" height="1em" viewBox="0 0 21 21">
		<path
			v-bind:class="className"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6.5 12.501l4-4l4 4"
		></path>
	</svg>
	<svg v-bind:class="className" v-else width="1em" height="1em" viewBox="0 0 21 21">
		<path
			v-bind:class="className"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M14.5 8.5l-4 4l-4-4"
		></path>
	</svg>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	props: {
		className: String,
		upOrDown: String,
	},
})
export default class ChevronUp extends Vue {
	className: string | undefined;
	upOrDown: string | undefined;
}
</script>
