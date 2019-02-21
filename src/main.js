// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import VueCarousel from 'vue-carousel'
import DefaultLayout from '~/layouts/Default.vue'


import 'vuetify/dist/vuetify.min.css'
import '~/assets/sass/main.sass'

export default function (Vue, {head}) {
	Vue.use(Vuetify)
	Vue.use(VueCarousel)
	Vue.component('Layout', DefaultLayout)

	head.link.push(
		{rel: 'stylesheet', href: 'https://file.myfontastic.com/ovt3Nis2UHC5wzFox7n5nB/icons.css'},
		{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'},
		{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700'}
	)
}