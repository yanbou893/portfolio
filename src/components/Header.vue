<template>
  <div class="footer">
    <h1 class="title">test</h1>
    <ul class="table-ul">
        <li>
        <router-link to="/">
            <v-icon>grid_on</v-icon>
        </router-link>
        </li>
        <li>
        <router-link to="/Skills">
            <v-icon>mode_edit</v-icon>
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
      
      </div>
  
</template>
<style>
.table-ul {
  background-color: #3ae;
  display: table;
  table-layout: fixed;
  text-align: center;
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
	background-color: cornflowerblue;
}
</style>
