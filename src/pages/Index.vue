<template lang="pug">
	layout
		div.carousel_container
			carousel(perPage=1)
				slide(v-for="(item, index  ) in items"  :key="index" )
					img( :src="item.src"  width=870 height=420 )
					div.carousel-coment
						span SHOP to get what you love
						p TimePieces that make a statement up to 
							strong 40% off
						a Start Buying
		.double-card-container
			.card-item
				span CATCH BIG <br/>
					strong DEALS 
					| OF THE <br/> 
					| CAMERAS
				strong shop now
			.card-item
				span TABLETS, SMARTPHONES AND MORE
</template>

<script>
export default {
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
			]
      }
    }
}
</script>
