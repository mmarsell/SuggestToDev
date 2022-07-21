<template>
<div>
  <nav>
    <RouterLink to="/"> Home </RouterLink>
    <RouterLink to="/register"> Register </RouterLink>
    <RouterLink to="/sign-in" v-if="!isLoggedIn"> Login </RouterLink>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <RouterView />
</div>
</template>
<style>
      #app {
        font-family: Roboto, Helvetica, Arial, sans-serif;
      }
</style>
<script setup>
import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {useRouter} from 'vue-router'

const isLoggedIn = ref(false);
const router = useRouter()
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) =>{
    if (user) {
      isLoggedIn.value = true;
    }
    else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  });
};
</script>
