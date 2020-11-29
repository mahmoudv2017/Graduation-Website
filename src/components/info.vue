<template>
    <div v-if="DB_items" class="info-screen center-align">
        <div v-for="(item,index) in DB_items" :key="index" class="container">
            <div  class="Content" :key="index">

                <div class="row">
                    <div class="col-lg-3 ">
                        <img :src="getImgUrl(index) " class="img-fluid">
                    </div>
                    <div class="col-lg-9 desc-content">
                        <p class="display-3 title"> {{ item.title }} </p>
                        <p class="rating" v-for="num in item.rating" :key="num.id"> <font-awesome-icon :icon="['fas', 'star']"/> </p>
                        <p class="locations">{{ item.Location }}</p>
                    </div>
                </div>
            </div>
            <div class="center-align other_info">
                
                <ul>
                    <li @click.prevent="release_slider('overview')"><a href="">Overview</a></li>
                    <li @click.prevent="release_slider('images')"><a href="">Images</a></li>
                    <li @click.prevent="release_slider('about')"><a href="">About</a></li>
                </ul>
                
            </div>
            <div v-if="sliders == 'about'" class="about ">
                <p class="w3-animate-right">About : {{ item.desc }}</p>
            </div>

            <div v-if="sliders == 'images'" class="images">
                <div class="row">
                    <div class="col-lg-3" v-for="(image,index) in images" :key="index">
                        <img :src="getImgs(index,'images')"  class="img-fluid w3-animate-right">
                    </div>
                </div>
            </div>

            <div v-if="sliders == 'overview'" class="center-align w3-animate-right">
                <div class="row">
                    <div v-for="(room,index) in item.rooms" :key="index"  class="col-lg-4">
                        <div class="card">
                            <div class="card-image">
                                <img :src="getImgs(index,'rooms')" class="img-fluid">
                            </div>
                            <div class="card-content">
                                <span class="card-title">{{ room }}</span>
                                <p>Price : {{ item.prices[index] }}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
                
            </div>
        </div>
    </div>
</template>

<script>

import FP_APP from '@/firebase/init'

export default {
    name : 'Info',
    
    data(){
        return{
            msg2 : 'ay7aga yani',
            DB_items : [],
            images : 5,
            sliders : 'overview'
        }
    },
    methods : {
        getImgUrl(index){
            return require('../assets/data/' + this.DB_items[index].img)
        },
        getImgs(index , type){
            if(type == 'rooms'){
               return require('../assets/data/rooms/' + index + '.jpg')
           }else{
               return require('../assets/data/' + index + '.jpg')
           }
           
           
        },
        release_slider(name){
               this.sliders = name
        }
    },
    created(){
        FP_APP.firestore().collection('main_project').where('slug' , '==' , this.$route.params.info_slug).get()
        .then( snapshot => {
            snapshot.forEach( doc => {
                let item = doc.data()
                item.id = doc.id
                this.DB_items.push(item)
            } )
        } )
    }
    
}
</script>

<style scoped>
.info-screen{
    margin-top: 4%;
    background: #005C97;  
    background: -webkit-linear-gradient(to right, #363795, #005C97);  
    background: linear-gradient(to right, #363795, #005C97); 
}

.card-content{
    color: orange;
}

.amenty{
    color: orange;
    font-size: 800;
    font-weight: bolder;
    text-transform: uppercase;
}

.about p{
   margin-top: 1%;
    font-size: 1.5rem;
    color: orange;
    text-align: left;
    
}
.images img{
    border: 1px solid black;
    height: 77%;
    width: 87%;
    
}
.overview{
    display: inline-block;
    margin: auto 2%;
    font-size: larger;
}

.container{
    margin-top: 7%;
}

.desc-content{
    text-align: left;
    color: orange;
}
p{
    margin: 7% auto;
}
.locations{
    font-weight: bolder;
    font-size: large
}
.rating{
    display: inline-block;
    margin: 1% auto;
}
li{
    cursor: pointer;
    margin: auto 2%;
    display: inline-block;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
}

li:hover{
    background-color: orange;
}

.center{
    text-align: center;
}

.other_info{
    background-color: pink;
}
/*h1{
    align-content: center;
    font-weight: bolder;
    color: white;
    
}*/
</style>