<template lang="pug">
	layout
		.content-data
			div.carousel_container
				carousel( :perPage=1)
					slide(v-for="(item, index  ) in items"  :key="index" )
						img( :src="item.src"  width=870 height=420 )
						div.carousel-coment
							span SHOP to get what you love
							p TimePieces that make a statement up to 
								strong 40% off
							v-btn.g-btn(large) Start Buying
			.double-card-container
				.card-item
					.card-text
						span CATCH BIG <br/>
							strong DEALS 
							| OF THE <br/> 
							| CAMERAS
						strong shop now
				.card-item
					.card-text
						span TABLETS,  <br/> 
							| SMARTPHONES <br/> 
							| AND MORE
			.tab-conainter
				template
					div
						v-tabs(v-model='active' fixed-tabs )
							v-tab(v-for='(product, index) in productCarousel', :key='index', ripple='')
								| {{ product.name }}
							v-tab-item(v-for='(item, index) in productCarousel', :key='index')
								carousel( :perPage=3 )
									slide( v-for="(product, index) in item.products" :key="index" )
										Product( :product="product" )
						.text-xs-center.mt-3
							v-btn(@click='next') next tab
		.aside
			li.announce-container
				.announce-info
					.announce-name 
						em ALL-NEW-SPORT
						h3 4K 
						span CAMERAS
					figure.announce-img
						img( src="" )
					.announce-price STARTING AT
						span $7999
				v-btn.g-btn Start Buying
				
					
</template>

<script>
import Product from '../components/Product.vue'

export default {
	components: {
		Product
	},
	 data () {
		return {
				items: [
					{
						src: 'https://i.ibb.co/vmj9P5F/bg-slider.jpg'
					},
					{
						src: 'https://i.ibb.co/vmj9P5F/bg-slider.jpg'
					},
					{
						src: 'https://i.ibb.co/vmj9P5F/bg-slider.jpg'
					},
					{
						src: 'https://i.ibb.co/vmj9P5F/bg-slider.jpg'
					}
				],
				active: null,
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				productCarousel:[
					{
						name: "Featured",
						products: [
							{
								image: 'http://megatel.com.cy/2028-thickbox_default/xiaomi-mi-pocket-speaker-2-generation-white.jpg',
								name: "Wireless Audio System Multiroom 360 "
							},
							{
								image: 'http://megatel.com.cy/2031-large_default/xiaomi-mi-action-camera-4k-black.jpg',
								name: "Tablet White EliteBook Revolve 810 G2"
							},
							{
								image: 'http://megatel.com.cy/2028-thickbox_default/xiaomi-mi-pocket-speaker-2-generation-white.jpg',
								name: "Purple Solo 2 Wireless"
							}
						]
					},
					{
						name: "On Sale",
						products: [
							{
								image: 'http://megatel.com.cy/2028-thickbox_default/xiaomi-mi-pocket-speaker-2-generation-white.jpg',
								name: "Wireless Audio System Multiroom 360 "
							},
							{
								image: 'http://megatel.com.cy/2031-large_default/xiaomi-mi-action-camera-4k-black.jpg',
								name: "Tablet White EliteBook Revolve 810 G2"
							},
							{
								image: 'http://megatel.com.cy/2028-thickbox_default/xiaomi-mi-pocket-speaker-2-generation-white.jpg',
								name: "Purple Solo 2 Wireless"
							}
						]
					},
					{
						name: "Top Rated",
						products: [
							{
								image: 'http://megatel.com.cy/2028-thickbox_default/xiaomi-mi-pocket-speaker-2-generation-white.jpg',
								name: "Wireless Audio System Multiroom 360 "
							},
							{
								image: 'http://megatel.com.cy/2031-large_default/xiaomi-mi-action-camera-4k-black.jpg',
								name: "Tablet White EliteBook Revolve 810 G2"
							},
							{
								image: 'http://megatel.com.cy/2028-thickbox_default/xiaomi-mi-pocket-speaker-2-generation-white.jpg',
								name: "Purple Solo 2 Wireless"
							}
						]
					}
				]

		}
	},
	methods: {
		next () {
			const active = parseInt(this.active)
			this.active = (active < 2 ? active + 1 : 0)
		}
	},
}
</script>
