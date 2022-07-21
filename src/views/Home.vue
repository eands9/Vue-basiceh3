<template>
  <button @click="sendmail">Send Mail</button>
  <button @click="sendmailWMsg">Send Mail w Message</button>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      formData: {
        emailSubject: "This is the passed email subject",
        emailBody: "This is the passed email body"
      }
    };
  },
  methods: {
    // axios ref https://www.koderhq.com/tutorial/vue/http-axios/#api
    async showMsg(){
      axios.get("/api/message").then((response) => {
        console.log(response.data.text)
        this.message=response.data.text
      })
    },
    async sendmail(){
      axios.get("/api/sendmail").then((response) => {
        console.log(response)
      })
    },
    async sendmailWMsg(){
      axios
        .post("/api/sendmailwmsg",this.formData)
        
        .then((response) => {console.log(response)})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
