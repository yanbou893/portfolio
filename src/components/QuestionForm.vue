<template>
  <body>
		
			<p class="title">めーる</p>
		<div class="cp_iptxt">
  <form v-if="isSubmit === false" @submit.prevent="onSubmit">
    <label class="ef">
    <input type="text" v-model="name" name="name"  placeholder="お名前">
    <input type="email" v-model="email" name="email" placeholder="メールアドレス">
    <textarea v-model="content" name="message" placeholder="メッセージ"></textarea>

    <button type="submit">送信</button>
  </form>

  <div v-if="isSubmit === true">
    <p>サンクス</p>
  </div>

  <form name="contact" netlify netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <textarea name="content"></textarea>
  </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      content: '',
      isSubmit: false
    }
  },
  methods: {
    onSubmit() {
      const params = new URLSearchParams()

      params.append('form-name', 'contact') // Forms使うのに必要

      params.append('name', this.name)
      params.append('email', this.email)
      params.append('content', this.content)

      axios
        .post('/', params)
        .then(() => {
          this.isSubmit = true
        })
    }
  }
}
</script>
<style>
  .cp_iptxt {
	position: relative;
	width: 50%;
	margin: 0 auto;
}
.cp_iptxt input {
	font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 50%;
	padding: 0.3em;
	transition: 0.3s;
	letter-spacing: 1px;
	color: #aaaaaa;
	border: 1px solid #1b2538;
	border-radius: 4px;
}
.ef input:focus {
	border: 1px solid #da3c41;
	outline: none;
	box-shadow: 0 0 5px 1px rgba(218,60,65, .5);
}
.title{
	font-size: 100px;
}
body{
	text-align: center;
	background-color: rgb(242, 247, 244);
}.ef textarea:focus {
	border: 1px solid #da3c41;
	outline: none;
	box-shadow: 0 0 5px 1px rgba(218,60,65, .5);
}
.cp_iptxt textarea {
	font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 50%;
	padding: 0.3em;
	padding-bottom: 3rem;
	transition: 0.3s;
	letter-spacing: 1px;
	color: #aaaaaa;
	border: 1px solid #1b2538;
	border-radius: 4px;
}
button{
	
  background: #3498db;
  margin: auto;
	padding: 8px;
	width: 50%;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 0 #2880b9;

}
</style>
