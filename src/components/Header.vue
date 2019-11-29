<template>
  
  
      <nav class="nav-extended">
          <div class="nav-wrapper">
            <class="brand-logo">portfolio</a>
          </div>
          <div class="nav-content">
            <ul class="tabs tabs-transparent">
              <li class="tab"><router-link to="/"><span uk-icon="icon: grid"></span></router-link></li>
              <li class="tab"><router-link to="/Skills"><span uk-icon="icon: heart"></span></router-link></li>
              <li class="tab"><router-link to="/QuestionForm"><span uk-icon="icon: mail"></span></router-link></li>
              <li class="tab"><router-link to="/Account"><span uk-icon="icon: user"></span></router-link></li>
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
