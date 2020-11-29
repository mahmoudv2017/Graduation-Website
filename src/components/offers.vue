<template>
    <div class="offers">
        <h1 class="display-3 center-align ">Offers</h1>
   

        <div class="container w3-container">
            <span v-if="check_authentication()" class="btn-floating btn-large halfway-fab pink add findme">
                <router-link :to="{ name : 'adder'}">
                    <i class="material-icons">add</i>
                </router-link>
            </span>
            <div class="row " v-for="(item,index) in firebase_offers" :key="index">
                <div class="thumbnail col-lg-3 w3-animate-left">
                    <img :src="getImgUrl(index) " class="img-fluid">
                </div>
                <div class="col-lg-9 desc w3-animate-right">
                    <h1>{{ item.title }}</h1>
                    <h1 class="pricey">Price : {{ item.prices[0] }}$</h1>
                   <div  class="rating" v-for="rat in stars" :key="rat.id"> 
                        <font-awesome-icon :icon="['fas', 'star']" />
                   </div>



                    
                    <p class="text-content">{{ item.desc }}</p>
                    
                    <router-link :to="{ name : 'Info' , params : { info_slug : item.slug }  }">
                        <button class="btns btn btn-info">
                             more info
                        </button>
                    </router-link>
                    
                    <button class="btns btn btn-danger " >favourite</button>
                    <div v-if="check_authentication()">
                        <span class="btn-floating btn-large halfway-fab pink edit">
                            <router-link :to="{ name : 'Editor' , params : { info_slug : item.slug }}">
                                <i class="material-icons">edit</i>
                            </router-link>
                        </span>

                        <span @click="delete_data(item.id)" class="btn-floating btn-large halfway-fab red delete">
                            <i class="material-icons">delete</i>
                        </span>
                    </div>
                   
                    
                </div>
                <hr>
            </div>
            
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name : 'Offers',
    data(){
        return{
            firebase_offers : [],
            stars : 5
        }
    },
    methods : {
        getImgUrl(index) {
    return require('../assets/data/'+this.firebase_offers[index].img)
    },
    check_authentication(){
        if(document.querySelector('.loggers')){
           return true;
        }else if(document.querySelector('.justUsers')){
            return false
       }
        
      
    },

    delete_data(id){
        console.log(id)
        db.firestore().collection("main_project").doc(id).delete()
        .then( () => {
            this.firebase_offers = this.firebase_offers.filter(item => {
                return item.id != id
            })
        } )
    }
    
    },
    created(){

  

    db.firestore().collection('main_project').get()
    .then( item => {
        console.log(item)
        item.forEach(
        doc => {
        let document = doc.data()
        document.id = doc.id
        this.firebase_offers.push(document)
      })
    })
  }

}
</script>

<style  scoped>

.edit{
    top: 4px;
    right: 2%;
}

.add{
    position: absolute;
    right: 4px;
    top: 9%;
}

.delete{
    top: 4px;
    right: 11%;
}

.offers{

    margin-top: 3%;
    background: #005C97;  
  
background: -webkit-linear-gradient(to right, #363795, #005C97);  
background: linear-gradient(to right, #363795, #005C97); 
}


.display-3{
    margin-top: 1.5%;
    font-weight: bolder;
    color: white;
   
}

.checked{
    color: orange;
}
.rating{
    color: orange;
    display: inline-block;
    margin: auto 2px;
}
.text-content{
    margin: 4% auto;
}
.desc{
    
    text-align: left;
    color: white;
    padding-right: 2%;
}

.thumbnail{
    padding: 0;
    
}
div {
    animation-duration: 500ms;
}

.row{
    height: 25%;
}
.btn-danger{
    bottom: 1px;
    right: 2px;
    
    
}
.btn-info{
    bottom: 1px;
    right: 15%;
    margin-right: 1%;
    margin-left: 69%;
    
}

.btns{
    margin-top: 1%;
}


img{
    width: 80%;
    height: 81%;
}


</style>