<template>
    <div class="signup">
        
        <div class="signup_menu container shadow-lg w3-animate-top rounded">
            <form @submit.prevent="Register()">
                <img src="../assets/data/jedi.jpg"  class="avatar">
                <h2 class="center-align display-3">SignUp</h2>
                <div class="field title ">
                    <label for="username"> Give a username</label>
                    <input type="text" name="username" v-model="username" class="validate" required>
                </div>
                <div class="field title">
                    <label for="password"> Give a Password</label>
                    <input type="password" name="password" v-model="password_1" required>
                </div>

                
                <div class="field title">
                    <label for="password"> Confirm Your Password</label>
                    <input type="password" name="password" v-model="password_2" required>
                </div>

                <div class="field title">
                    <label for="email"> Enter Your Email</label>
                    <input type="email" name="email" v-model="email" required >
                </div>
                
           
                <button class="btn btn-outline-dark ">Sign Up </button>

                <div v-if="signup_status" class="feedback">{{ signup_status }}</div>
            </form>
        </div>
    </div>
</template>

<script>

import FB_APP from '@/firebase/init'
export default {
    name : 'SignUp',
    data(){
        return{
            accounts : [],
            username : null,
            password_1 : null,
            password_2 : null,
            email : null,
            signup_status : null,
            usermode : true
            
        }
    },
    methods : {
        Authentication(){
            
            

                }
            
        ,
        Register(){
            
           // document.querySelector('.signup_menu').classList.toggle('faded')
           
            if(this.password_1 == this.password_2){

            this.signup_status = null;
            FB_APP.firestore().collection('Accounts').add({
            Username : this.username,
            passsword : this.password_2,
            email : this.email,
            profile_photo : '1.jpg'
            })
            }else{
                this.signup_status = "Passwords don't match"
            }


    
            if(!this.usermode){
                document.querySelector('.users').style.backgroundColor = 'orange'
            }
            else{

                document.querySelector('.users').style.backgroundColor = '#343a40'
            }
            document.querySelector('.users').innerHTML = this.username 
            this.$router.push({ name : 'Offers'})
            
    }
    },
}
</script>

<style scoped>
.signup{
    margin-top: 3%;
    background: #005C97;  
background: -webkit-linear-gradient(to right, #363795, #005C97);  
background: linear-gradient(to right, #363795, #005C97); 

}

.avatar{
    width: 200px;
    height: 200px;
    top: -50px;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 100px);
}

h2{
    margin-top: 36%;
    margin-bottom: 10%;
    color: black;
    font-weight: inherit;

}

label{
    left: 20px;
}
.signup_menu{

    margin-top: 9%;
    background-color: rgb(255, 255, 255);
    padding: 20px;
    width: 400px;
    height: 744px;
    
    
    text-transform: uppercase;

   transition: 100ms all;
    
    
}

.faded{
    opacity: 0;
}



button{
    margin: 3% auto;
    display: inline-block;
}

.field{
    margin: 20px auto;
    
}

</style>