<template  lang="pug" >
	v-app
		v-toolbar
			v-toolbar-title Gridsome
			v-spacer
			v-toolbar-items
				v-btn( flat :to="{ name: 'home' }") Home
				v-btn(flat :to="{ name: 'about' }") About Us
				v-btn(flat :to="{ name: 'blog' }")  Blog
				v-btn(flat :to="{ name: 'pages' }") Pages
				v-btn(flat :to="{ name: 'features' }") Features 
				v-btn(flat :to="{ name: 'contact' }") Contact Us
			v-spacer
			.h-contact
				p 
					span Support
					| (+800) 856 800 604
				p E-mail: info@electro.com
		div.subheader-menu
			.g-container
				v-menu(open-on-click, bottom='', offset-y='')
					div(slot='activator', color='primary')
						| Shop by Department
					v-list
						v-list-tile(v-for='(item, index) in items', :key='index', @click='')
							v-list-tile-title {{ item.title }}
				v-text-field.subheader-search( height="30", hide-details, solo, label='Append outer', append-outer-icon='icon-magnifying-glass')
		v-container.container-no-top.g-container
			slot
</template>

<static-query>
query {
  metaData {
	siteName
  }
}
</static-query>

<script>
export default {
	data: () => ({
		items: [
			{ title: 'Value of the Day' },
			{ title: 'Top 100 Offers' },
			{ title: 'New Arrivals' },
			{ title: 'Laptops & Computers' },
			{ title: 'Cameras & Photography' }
		]
	})
}
</script>

