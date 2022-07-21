<template>
<div class="row d-flex justify-content-center container">
    <div class="col-md-6">
    <form>
        <h3>Login</h3>
        <MDBInput label="Email" type="email" v-model="email"></MDBInput>
        <MDBInput label="Password" type="password" v-model="password"></MDBInput>
        <MDBBtn @click="login" color="primary" rounded> Login </MDBBtn>
        <MDBBtn @click="signInWithGoogle" color="primary" rounded> Sign In With Google</MDBBtn>
    </form>
    </div>


</div>
</template>

<script>
  import { MDBBtn, MDBInput } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBBtn,
      MDBInput
    }
  };
</script>

<script setup>

    import {ref} from "vue";
    import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
    import {useRouter} from 'vue-router'
    
    const email = ref("");
    const password = ref("");
    const router = useRouter()
    const errorMessage = ref()

    const login = () => {
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