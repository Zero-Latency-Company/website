<template>
	<heads />
	<blogs />
	<servs />
	<teams />
	<faqs />
</template>

<script>
	import heads from '../components/heads.vue';
	import blogs from '../components/blogs.vue';
	import servs from '../components/servs.vue';
	import teams from '../components/teams.vue';
	import faqs from '../components/faqs.vue';

	export default {
		name: 'App',
		components: {
			heads,
			blogs,
			servs,
			teams,
			faqs,
		},
	};
</script>
