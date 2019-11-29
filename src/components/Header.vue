<template>
  <div class="footer">
  <h1 class="uk-heading-line uk-text-center">
    <span>portfolio</span>
  </h1>
      
      <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
        <li>
          <router-link to="/" uk-icon="grid">
          </router-link>
        </li>
        <li>
        <router-link to="/Skills" uk-icon="heart">
        </router-link>
        </li>

        <li>
        <router-link to="/QuestionForm" uk-icon="mail">
        </router-link>
        </li>

        <li>
        <router-link to="/Account" uk-icon="user">
        </router-link>
        </li>
        </div>
</template>
<script>
export default {
  data() {
    return {
      activeBtn: 0
    };
  }
};
</script>
<style>
.footer{
  background-color:#41b973;
}
</style>
