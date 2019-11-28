<template>
  <v-app>
      <header id="header">
    <h1>This is the header.</h1>
    <nav id="header-nav">
      <ul>
		<router-link tag="li" to="/"><v-icon>grid_on</v-icon></router-link>
		<router-link tag="li" to="/favorite"><v-icon>favorite</v-icon></router-link>
		<router-link tag="li" to="/skills"><v-icon>mode_edit</v-icon></router-link>
		<router-link tag="li" to="/mail"><v-icon>mail-outline</v-icon></router-link>
		<router-link tag="li" to="/account"><v-icon>account_circle</v-icon></router-link>
      </ul>
    </nav>
  </header>
  </v-app>
</template>

<style>
	h1{
	background-color: #41b973;
}
li{
	width:20%;

}

</style>
