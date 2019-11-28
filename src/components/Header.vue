<template>
    <v-footer
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
            <v-bottom-navigation
            v-model="bottomNav"
            dark
            shift
            >
        <router-link to="/">
        <v-btn>
        <span>Contents</span>
        <v-icon>grid_on</v-icon>
        </v-btn>
        </router-link>

<router-link to="/Favorite">
        <v-btn>
        <span>Favorite</span>
        <v-icon>favorite</v-icon>
        </v-btn>
        </router-link>

<router-link to="/Skills">
        <v-btn>
        <span>Skills</span>
        <v-icon>mode_edit</v-icon>
        </v-btn>
        </router-link>

<router-link to="/Mail">
        <v-btn>
        <span>Mail</span>
        <v-icon>email-outline</v-icon>
        </v-btn>
        </router-link>
        
        <v-btn>
            <router-link to="/Account">
        <span>Profile</span>
        <v-icon>account_circle</v-icon>
        </router-link>
        </v-btn>
      </v-bottom-navigation>
            
            
        </v-card-text>
    </v-footer>
</template>
