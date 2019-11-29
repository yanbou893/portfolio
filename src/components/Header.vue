<template>
  
  
      <nav class="nav-extended">
          <div class="nav-wrapper">
           portfolio
          </div>
          <div class="nav-content">
            <ul class="tabs tabs-transparent">
              <li class="tab"><router-link to="/"><i class="material-icons">apps</i></router-link></li>
              <li class="tab"><router-link to="/Skills"><i class="material-icons">favorite</i></router-link></li>
              <li class="tab"><router-link to="/QuestionForm"><i class="material-icons">mail</i></router-link></li>
              <li class="tab"><router-link to="/Account"><i class="material-icons">account_circle</i></router-link></li>
            </ul>
          </div>
        </nav>
        
</template>
<style>
.tab{
	width:25%;
	
}
.nav-extended{
	background-color: #41b973;
	text-align: center;

}
</style>
