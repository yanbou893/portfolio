<template>
  <footer>
    <ul class="table-ul">
        <li>
        <router-link to="/">
            <v-icon>grid_on</v-icon>
        </router-link>
        </li>
        <li>
        <router-link to="/Skills">
            <v-icon>favorite</v-icon>
        </router-link>
        </li>
        <li>
        <router-link to="/QuestionForm">
            <v-icon>email</v-icon>
        </router-link>
        </li>
        <li>
        <router-link to="/Account">
            <v-icon>account_circle</v-icon>
        </router-link>
        </li>
      </ul>
      
      
  </footer>
</template>
<style>
.table-ul {
  display: table;
  table-layout: fixed;
  width: 100%;
}
.table-ul li {
  display: table-cell;
  vertical-align: middle;
}
.table-ul li a {
  color: #fff;
  display: block;
  font-size: 12px;
  text-decoration: none;
  padding: 10px 0;
}

.table-ul li:hover{
	background-color: #00FF66;
}
html{
  text-align: center;
	background-color: rgb(112, 114, 113);
}
</style>
