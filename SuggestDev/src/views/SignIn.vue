<template>
<h1>Login</h1>
<p><input type="text" placeholder ="Email" v-model="email"/> </p>
<p><input type="password" placeholder ="Password" v-model="password"/> </p>
<p v-if="errorMessage">{{errorMessage}}</p>
<p><button @click="register"> Submit </button> </p>
<p><button @click="signInWithGoogle"> Sign In With Google </button> </p>
</template>

<script setup>
    import {ref} from "vue";
    import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
    import {useRouter} from 'vue-router'
    const email = ref("");
    const password = ref("");
    const router = useRouter()
    const errorMessage = ref()

    const register = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((data) => {
                console.log("Successfully registered!");
                console.log(auth.currentUser);
                router.push("/")
            })
            .catch((error) => {
                console.log(error.code);
                switch(error.code){
                    case "auth/invalid-email":
                        errorMessage.value ="Invalid email";
                        break;
                    case "auth/user-not-found":
                        errorMessage.value ="Account not found";
                        break;
                    case "auth/wrong-password":
                        errorMessage.value ="Incorrect password";
                        break;
                    default:
                        errorMessage.value = "Email or password incorrect";
                        break;
                }
            });
    }

    const signInWithGoogle = () => {
    
    };

</script>