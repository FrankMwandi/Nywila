<template>
<div class="col-lg-6 mx-auto">
  <h1> Login to your account </h1>

  <form @submit.prevent> 

  <div class="form-group">
    <input v-model="account.email" id="nuxtfire-email"  type="email" class="form-control"  placeholder="E-mail address">
    
    </div>

   <div class="form-group">
    <input v-model="account.password"  id="nuxtfire-password"  type="password" class="form-control"  placeholder="Password">
    
    </div>
     <div class="form-group">
    <input @click="login" type="submit" class="btn btn-primary">
    </div>
    <div v-if="isError" class="alert-danger">
      <p class="mb-0" > {{errMsg}}   </p>
    </div>


  </form>

</div>


</template>
<script>
export default {
  data:()=>({
    account:{
      email:"",
      password:""
    },
    isError: false,
    errMsg:''
  }),

  methods:{
    login(){
     this.$store.dispatch("users/login", account).catch(error => {
  this.isError = true;
  this.errMsg = error.code;
  setTimeout(() => {
    this.isError = false;
  } , 5000);
     });

     this.$route.push("/admin");
    }
  }


};
</script>