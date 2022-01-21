<template>
  <div>
    <h3>Signup</h3>
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <button @click.prevent="signup" style="background-color:red">signup</button>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

export default {
  name: 'signup',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signup() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth,this.email,this.password)
      .then( user => {
          console.log(user);
          this.$router.replace('home');
        })
        .catch( err => {
          alert('Error¡¡' + err)
        })
    }
  }
}
</script>
