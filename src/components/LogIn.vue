<template>
    <div class="login">
         <div v-if="slider">
                    <SignUp />
          </div>
        <div class="login_menu container shadow-lg w3-animate-top rounded">
            <form @submit.prevent="Authentication()">

               <button class="btn btn-outline-danger rounded-pill special" @click.prevent="Usermode()"> 
                    <img src="../assets/data/cyper.jpg"  class="avatar" v-if="!usermode">
                    <img src="../assets/data/jedi.jpg"  class="avatar" v-if="usermode"> 
               </button>
                
                <h2 class="center-align display-3">LogIn</h2>
                
                
                <div v-if="login_status"  class="feedback">{{ login_status  }}</div>
                
                
                <div class="field title ">
                    <label for="username"> Give a username</label>
                    <input type="text" name="username" v-model="username" class="validate" required>
                </div>
                <div class="field title">
                    <label for="password"> Give a Password</label>
                    <input type="password" name="password" v-model="password" required>
                </div>

                <!--
                <div class="field title">
                    <label for="password"> Confirm Your Password</label>
                    <input type="password" name="password" v-model="password_2">
                </div>

                <div class="field title">
                    <label for="email"> Enter Your Email</label>
                    <input type="email" name="email" v-model="email" >
                </div>
                -->
                <button class="btn btn-outline-danger rounded-pill ">Log In </button>
                <button class="btn btn-dark rounded-pill" @click="release_slider()">Sign Up </button>
                

                
                
               
            </form>
        </div>
    </div>
</template>

<script>

import FB_APP from '@/firebase/init'
import SignUp from './SignUp'
export default {
    name : 'LogIn',
    components : {
        SignUp
    },
    data(){
        return{
            accounts : [],
            admins : [],
            username : 'ay7aga',
            password : null,
            login_status : null,
            slider : false,
            usermode : true
        
        }
    },
    methods : {
        Authentication(){
           // let f = false;
            if(this.usermode){

                this.accounts.forEach( account => {
                if(account.Username == this.username && account.passsword == this.password ){
                    this.login_status = 'Login Sucessful';
                  /*  if(!this.usermode){
                        document.querySelector('.loggers').style.backgroundColor = 'orange'
                    }
                    else{

                        document.querySelector('.loggers').style.backgroundColor = '#343a40'
                    }*/
                    
                    document.querySelector('.users').classList.add('justUsers')
                    document.querySelector('.justUsers').innerHTML = this.username 
                    this.$router.push({ name : 'Offers'})
                    

                }else{
                    this.login_status = 'Wrong Password or Username';
                }
            })
            }else{
                console.log('the username is ' , this.username)
                this.admins.forEach( account => {
                    console.log('the admin username  is ' , account.password)
                if(account.username == this.username && account.password == this.password ){
                    this.login_status = 'Login Sucessful';
                  /*  if(!this.usermode){
                        document.querySelector('.loggers').style.backgroundColor = 'orange'
                    }
                    else{

                        document.querySelector('.loggers').style.backgroundColor = '#343a40'
                    }*/

                    document.querySelector('.users').classList.add('loggers')
                    document.querySelector('.loggers').innerHTML = this.username 
                    this.$router.push({ name : 'Offers'})

            }
                
            
        })
            }
        },

        release_slider(){
            this.$router.push({ name : 'SignUp' })
        },
       
        Usermode(){
            if(this.usermode){
                document.querySelector('h2').style.color = 'purple'
                document.querySelector('h2').textContent = 'Admins'
                document.querySelector('input').style.color = 'white'

                if(this.login_status){
                document.querySelector('.feedback').style.color = 'white'
                }
            }else{
                document.querySelector('h2').style.color = 'black'
                document.querySelector('h2').textContent = 'Login'
                document.querySelector('input').style.color = 'black'
                if(this.login_status){
                document.querySelector('.feedback').style.color = 'black'
                }
                
            }
            document.querySelector('.login_menu').classList.toggle('faded')
            
            this.usermode = !this.usermode;
        }
    },
    created(){
        
        FB_APP.firestore().collection('Accounts').get()
        .then( collec => {
            collec.forEach( doc => {
                let account = doc.data()
                account.id = doc.id
                this.accounts.push(account)
            } )
            console.log("the accounts are ",this.accounts)
        })

        FB_APP.firestore().collection('Admins').get()
        .then( collec => {
            collec.forEach( doc => {
                let account = doc.data()
                account.id = doc.id
                this.admins.push(account)
            } )
            console.log("the admins are ",this.admins)
        })


    }
}
</script>

<style scoped>
.login{
    margin-top: 3%;
    background: #005C97;  
background: -webkit-linear-gradient(to right, #363795, #005C97);  
background: linear-gradient(to right, #363795, #005C97); 

}


.special{
    margin-left: 38%;
}
h2{
    margin-top: 45%;
    margin-bottom: 15%;
    color: black;
    font-weight: inherit;

}


label{
    left: 20px;
}
.login_menu{

    /*background-image: url('../assets/darth_maul.jpg'); */
    margin-top: 12%;
    background-color: rgb(255, 255, 255);
    padding: 20px;
    width: 400px;
    height: 650px;
    
    
    text-transform: uppercase;

   transition: 100ms all;
    
    
}

.faded{
    background-color: rgb(65, 63, 65);
    color: purple;
}

.btn-danger{
    margin-left: 60%; 
}


.avatar{
    width: 200px;
    height: 200px;
    top: -50px;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 100px);
}

.field{
    margin: 20px auto;
    
}

</style>