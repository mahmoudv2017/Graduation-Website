<template>
<div class="nav-bar-main">
    <nav id="Navey" class="navbar navbar-expand-md navbar-dark bg-dark fixed-top py-0 ">
        <a class="navbar-brand"  @click.prevent="">Vertigo</a>
        <button class="navbar-toggler"  type="button" data-target="#collapser_data" data-toggle="collapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div id="collapser_data" class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item"><router-link class="nav-link"  to = '/'> Home </router-link> </li>
                <li class="nav-item"> <router-link class="nav-link"  :to = "{ name : 'Offers'}"> Offers </router-link> </li>
                <li class="nav-item"><router-link class="nav-link"  :to = "{ name : 'About'}"> About </router-link></li>
                <li class="nav-item"><router-link class="nav-link"  :to = "{ name : 'contacts'}"> Contacts </router-link></li>
            </ul>

            <ul class="navbar-nav ml-auto users">
                <li class="nav-item "><router-link class="nav-link"  :to = "{ name : 'SignUp' }">  <font-awesome-icon :icon="['fas', 'user-secret']" /> Sign Up </router-link></li>
                <li class="nav-item ml-auto" @mouseenter="special()"><router-link class="nav-link"  :to = "{ name : 'LogIn' }"> Log In </router-link></li>

            </ul>

        </div>
    </nav>
</div>
     
</template>

<script>

export default {
    name : 'Navbar',
    
    
    data(){
        return{
           
        }
    },
    methods : {
        special(){
            console.log(this.usernmode2);
        },
        
    },
    
}
</script>

<style scoped>

.loggers{
    background-color: orange;
}

.justUsers{
    background-color: #343a40;
}

nav .nav-link{
    
    padding: 0;
   
    
}
nav .nav-link:hover{
    
    background-color: orange;
    
}
.navbar-brand{
    padding: 0 5px;
    cursor: pointer;
    text-transform: uppercase;
    color: orange;
    font-size: 164%;
    font-weight: bolder;
}
.navbar-brand:hover{
    color: orange;
}
/*a.nav-link{
    height: 80%;
    
}

nav{
    height: 4%;
}*/

</style>