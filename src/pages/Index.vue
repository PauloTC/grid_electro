<template lang="pug">
	layout
		.content-data
			div.carousel_container
				carousel( :perPage=1)
					slide(v-for="(item, index  ) in items"  :key="index" )
						img(  src="https://img.staticbg.com/images/oaupload/banggood/images/69/30/f90fbb10-9c2f-400e-895d-3b463f324965.jpg"  width=1200  )
						//- div.carousel-coment
						//- 	span SHOP to get what you love
						//- 	p TimePieces that make a statement up to 
						//- 		strong 40% off
						//- 	v-btn.g-btn(large) Start Buying
			.double-card-container
				.card-item
					figure
						img( width=180 src="http://tinyimg.io/i/CQxruXQ.png" )
					.card-text
						span CATCH BIG <br/>
							strong DEALS 
							| OF THE <br/> 
							| CAMERAS
						strong Shop now
							a.gotodetail( href="#"  )
								i( style="background-image: url('http://tinyimg.io/i/O1LGnWi.png') " )
				.card-item
					figure
						img( width="200" src="http://tinyimg.io/i/9K7sNIv.png" )
					.card-text
						span TABLETS,  <br/> 
							| SMARTPHONES <br/> 
							| AND MORE
						em
							| From
							strong 	$749	
								a.gotodetail( href="#" )
									i( style="background-image: url('http://tinyimg.io/i/O1LGnWi.png') " )
			.tab-container
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
			.tab-container
				template
					div.bestseller_carrousel
						//- BestSellerProduct( v-for='( product, index ) in 4'  :key="index" )
						v-tabs(v-model='active' fixed-tabs )
							v-tab(v-for='(product, index) in bestSeller', :key='index', ripple='')
								| {{ product.section }}
							v-tab-item(v-for='(item, index) in bestSeller', :key='index')
								carousel( :perPage=4 )
									slide( v-for="(product, index) in item.products" :key="index" )
										BestSellerProduct
						.text-xs-center.mt-3
							v-btn(@click='next2') next tab
		.aside
			li.announce-container
				.announce-info
					.announce-name 
						em ALL-NEW-SPORT
						h3 4K 
						span CAMERAS
					.announce-price 
						em STARTING AT
						span 
							strong.money $
							|79 
							strong 99
				figure.announce-img
					img( src="https://c1.mifile.cn/f/i/2014/cn/yicamera/video-intro.png" height=200 width=300  )
				v-btn.g-btn Start Buying
			li.lastest-products
				h3 Latest Products	
				template
					div.lastest-products-product
						carousel( :perPage="1" )
							slide(v-for='(product, index) in productsAside', :key='index')
								li.aside-lastest-products(v-for='(item, index) in product.products', :key='index')
									figure
										img( src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVCnyeLoco-ezPTQRRZuo5lYTsNo_e7XtHYv5DbmKg2goI7ly" )
									.aside-lastest-info
										span {{ item.name }}
										p ${{ item.price  }}

					
</template>

<script>
import Product from '../components/Product.vue'
import BestSellerProduct from  '../components/BestSellerProduct.vue'

export default {
	components: {
		Product,
		BestSellerProduct
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
								name: "Purple Solo 2 Wireless Headset"
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
								name: "Purple Solo 2 Wireless Headset"
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
								name: "Purple Solo 2 Wireless Headset"
							}
						]
					}
				],
				productsAside:[
					{
						name:  "Latest Products",
						products: [
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00",
								image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVCnyeLoco-ezPTQRRZuo5lYTsNo_e7XtHYv5DbmKg2goI7ly"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							},
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							}
						]
					},
					{
						name:  "Latest Products 2",
						products: [
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							},
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							}
						]
					},
					{
						name:  "Latest Products 3",
						products: [
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							},
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							}
						]
					}
				],
				bestSeller: [
					{
						section: "Top 20" ,
						products: [
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00",
								image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVCnyeLoco-ezPTQRRZuo5lYTsNo_e7XtHYv5DbmKg2goI7ly"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							},
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							}
						]
					},
					{
						section: "Phones & Tablets",
						products: [
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00",
								image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVCnyeLoco-ezPTQRRZuo5lYTsNo_e7XtHYv5DbmKg2goI7ly"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							},
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							}
						]
					},
					{
						section: "Laptops & Computers",
						products: [
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00",
								image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVCnyeLoco-ezPTQRRZuo5lYTsNo_e7XtHYv5DbmKg2goI7ly"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							},
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							}
						]
					},
					{
						section: "Video Cameras",
						products: [
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00",
								image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVCnyeLoco-ezPTQRRZuo5lYTsNo_e7XtHYv5DbmKg2goI7ly"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
							},
							{
								name: "Purple Solo 2 Wireless",
								price: "49,00"
							},
							{
								name: "producto 2",
								price: "49,00"
							},
							{
								name: "producto 3",
								price: "49,00"
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
		},
		next2(){
			const active = parseInt(this.active)
			this.active = (active < 2 ? active + 1 : 0)
		}
	},
}
</script>
