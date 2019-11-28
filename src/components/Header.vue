<template>
  <v-card height="400px">
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="red lighten-1 text-center"
      >
        <v-card-text class="white--text">
            <strong>Portfolio</strong>
        </v-card-text>
 
        <v-card-text>
        <router-link to="/"><v-icon>grid_on</v-icon></router-link>
        <router-link to="/favorite"><v-icon>favorite</v-icon></router-link>
        <router-link to="/Skills"><v-icon>mode_edit</v-icon></router-link>
        <router-link to="/mail"><v-icon>email-outline</v-icon></router-link>
        <router-link to="/account"><v-icon>account_circle</v-icon></router-link>
        </v-card-text>
      </v-card>
    </v-footer>
</template>
<script>
  export default {
    data: () => ({
      padless: false,
      variant: 'default',
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
  }
</script>
<style>
	.nav-extended{
	background-color: #41b973;
}
li{
	width:20%;

}

</style>
