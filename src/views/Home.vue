<template>
	<heads />
	<servs />
	<faqs />
</template>

<script>
	import heads from '../components/heads.vue';
	import servs from '../components/servs.vue';
	import faqs from '../components/faqs.vue';

	export default {
		name: 'App',
		components: {
			heads,
			servs,
			faqs,
		},
	};
</script>
