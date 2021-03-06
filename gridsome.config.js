// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	chainWebpack: config => {
		config.module
		.rule('pug')
		.test(/\.pug$/)
		.use('pug-plain-loader')
			.loader('pug-plain-loader')
	}
}