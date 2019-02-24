<template lang="pug">
    section.product-container
        span.product-tag Audio Speakers
        h3.product-name {{ product.name }}
        figure
            img( width=250 height=232 :src="product.image" )
        h3.product-price $1 999,00
</template>
<script>
export default {
    name: 'Product',
    props:{
        product : Object
    }
}
</script>