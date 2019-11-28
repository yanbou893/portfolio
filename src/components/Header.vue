<template>
  <v-app>
      <nav class="nav-extended">
      <header id="header">
    <h1>This is the header.</h1>
    <div class="nav-content">
      <ul>
		<router-link to="/"><v-icon>grid_on</v-icon></router-link>
		<router-link to="/favorite"><v-icon>favorite</v-icon></router-link>
		<router-link to="/Skills"><v-icon>mode_edit</v-icon></router-link>
		<router-link to="/mail"><v-icon>mail-outline</v-icon></router-link>
		<router-link to="/account"><v-icon>account_circle</v-icon></router-link>
      </ul>
    </div>
  </header>
  </nav>
  </v-app>
</template>

<style>
	.nav-extended{
	background-color: #41b973;
}
li{
	width:20%;

}

</style>
