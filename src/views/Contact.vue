<template>
	<div>
		<div class="py-20" @click="ofs" @mouseenter="ofs">
			<p class="text-3xl font-mono uppercase py-5">EMAIL <span class="text-white bg-red-300">US</span></p>
			<p class="text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">{{ mail }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mail: 'click to view',
			};
		},
		methods: {
			async ofs() {
				if (Math.random() > 0.5) {
					this.mail = 'mail@zerolatency.company';
				} else {
					this.mail = 'contact@zerolatency.company';
				}
			},
		},
	};
</script>
