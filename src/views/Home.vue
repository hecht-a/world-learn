<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
		<h1>{{ count }}</h1>
		<button @click="increment">increment</button>
		<button @click="decrement">decrement</button>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";

@Options({
	data() {
		return {
			count: 0,
		};
	},
	components: {
		HelloWorld,
	},
	created() {
		document.title = this.$route.meta.title;
	},
	methods: {
		increment() {
			this.count++;
		},
		decrement() {
			this.count--;
		},
	},
})
export default class Home extends Vue {}
</script>
