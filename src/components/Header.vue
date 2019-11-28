<template>
    <v-footer
    >
        <v-card-text class="white--text text-center">
            <strong>Portfolio</strong>
        </v-card-text>
 
     
        <v-card-text>
            <v-bottom-navigation
            
    :value="activeBtn"
    
            >
        <router-link to="/">
        <v-btn>
        <v-icon>grid_on</v-icon>
        </v-btn>
        </router-link>

<router-link to="/Favorite">
        <v-btn>
        <v-icon>favorite</v-icon>
        </v-btn>
        </router-link>

<router-link to="/Skills">
        <v-btn>
        <v-icon>mode_edit</v-icon>
        </v-btn>
        </router-link>

<router-link to="/Mail">
        <v-btn>
        <v-icon>email</v-icon>
        </v-btn>
        </router-link>
        
            <router-link to="/Account">
        <v-btn>
        <v-icon>account_circle</v-icon>
        </v-btn>
        </router-link>
      </v-bottom-navigation>
            
            
        </v-card-text>
    </v-footer>
</template>
<script>
  export default {
    data () {
      return {
        activeBtn: 1,
      }
    },
  }
</script>
<style>
v-footer{
	background-color: #41b973;
    
}
    router-link{
        text-decoration:none;
        
	width:20%;
    }
</style>