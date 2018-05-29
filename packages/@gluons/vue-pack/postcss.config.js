module.exports = {
	plugins: [
		require('autoprefixer')({
			browsers: [
				'extends browserslist-config-vue'
			]
		})
	]
};
