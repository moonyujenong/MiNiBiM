const config = {
  plugins: [
    postcssPresetEnv({
			/* pluginOptions */
			features: {
				'nesting-rules': {
					noIsPseudoSelector: false,
				},
			},
		}),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-import')
  ]
}

module.exports = config