<template>
  <div>
    <h3>Login</h3>
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <button @click.prevent="login" style="background-color:red">Login</button>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth,this.email,this.password)
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
