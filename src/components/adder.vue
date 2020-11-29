<template>

<div class="adder">
    
 <div v-if="image_selector" class="main" >
    

    <div class="container">
        <div  class="Content" >
            
            <div class="row">
                <div class="col-lg-3 ">
                    <img  src="@/assets/data/0.jpg" class="img-fluid main_image w3-animate-left">
                
                   <span @click="change_mode()" class="btn-floating btn-large halfway-fab pink add findme">
                
                         <i class="material-icons">add</i>
                        
                    </span>
                </div>
                <div class="col-lg-9 w3-animate-right">
                    <form @submit.prevent="Get_conetent()">
                    <input type="text" class="display-3 title " > 
                    <input placeholder="rating" type="number" class="rating"  > 
                    <input type="text" class="location " > 
                    <br>
                    <br>
                    <textarea rows="8" cols="50" class="desc " ></textarea>
                    
                    <input type="number" class="location" placeholder="price for single room" > 
                    

                    <input @click="ready_storage()" type="file" class="filebutton">
                    <button class="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
            <!--
            <div class="center-align w3-animate-right">
                <div class="row">
                    <div v-for="(room,index) in item.rooms" :key="index"  class="col-lg-4">
                        <div class="card">
                            <div class="card-image">
                                <img :src="getImgs(index,'rooms')" class="img-fluid">
                                <span class="btn-floating btn-large halfway-fab pink edit" @click="chnage_mode('rooms')">
                                    <i class="material-icons">edit</i>
                                </span>
                            </div>
                            <div class="card-content">
                                <span class="card-title">{{ room }}</span>
                                <p>Price : {{ item.prices[index] }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            -->
            
            
        </div>
    </div>

    

 </div>

 <div v-else-if="!image_selector">
    <div  class="images container">
        <div v-if="bigh_shots">
            <div  class="row"  >
            <div  class="col-lg-3" v-for="(image,index) in images" :key="index">
                <img :src="getImgs(index)" @dblclick="select_img(index,'main')"  class="img-fluid w3-animate-right">
            </div>
            </div>
        </div>
        <div v-else>
            <div  class="row"  >
            <div  class="col-lg-3" v-for="(image,index) in rooms" :key="index">
                <img :src="getImgs(index , 'rooms')" @dblclick="select_img(index,'rooms')"  class="img-fluid w3-animate-right">
            </div>
            </div>
        </div>
    </div>
</div>
 
<h1 class="display-3"> Coming Soon </h1>
 </div>

 
</template>

<script>

import FB_APP from '@/firebase/init'





export default {
    name : 'Adder',
    data(){
        return {
        
            
            items : [],
            images: 5,
            bigh_shots : true,
            rooms : 3,
            image_selector : true
        }
    },
    methods : {

        ready_storage(){
            console.log('clicked')
           
             document.querySelector('.filebutton').addEventListener('change' , function(e){ 
               
                let files = e.target.files[0]
                print(e.target.files[0])
                var storage_ref = FB_APP.storage().ref('/pics/'+ document.querySelector('.title').value +'/' + files.name);
                storage_ref.put(files).then( snapshot => {
                    console.log(snapshot)
                    storage_ref.getDownloadURL().then(function(url) {
    
                    if(url){ 
                        document.querySelector('.main_image').src = url
                    
                        }
                    
                }).catch(err => {
                    console.log(err)
                })
                } )
                
             })
        },
        change_mode(){
            this.image_selector = !this.image_selector;
            this.bigh_shots = !this.bigh_shots
        },
        getImgUrl(index ){
            
            return require('../assets/data/' + this.items[index].img)
        },
        Get_conetent(){
            
           
           /* FB_APP.collection('main_project').doc(this.items[0].id).update({
                title : this.items[0].title,
                //slug = this.items.title
                rating : parseInt(this.items[0].rating, 10),
                img : this.items[0].img,
                prices : this.items[0].prices,
                rooms : this.items[0].rooms,
                desc : this.items[0].desc,
                Location : this.items[0].Location,
                country : this.items[0].country,


            }).then(() => 
                {
                this.$router.push({ name : 'Offers'})
            
            })*/


        },
        
        getImgs(index , flag){
            if( flag == 'rooms'){
                return require('../assets/data/rooms/' + index + '.jpg')
            }
            return require('../assets/data/' + index + '.jpg')
        },
        select_img(index , mode){

            
            
            if(mode == 'rooms'){
               
                this.items[0].rooms.id = index //change how the room images are displayed in editor and info
            }else{
                this.items[0].img = index + '.jpg'
            }
            this.image_selector = !this.image_selector
           // this.items.img = index + '.jpg'
        },
       
    },
  

    
}
</script>

<style scoped>
h1{
    color: white;
}
.images{
    margin-top: 7%;
}
.main_image .edit{
    top: 4%;
    position: absolute;
}
h2{
    margin-top: 4%;
}
textarea{
    height: 40%;
}
input,textarea{
    color: white;
}

.adder{
    margin-top: 4%;
    background: #005C97;  
    background: -webkit-linear-gradient(to right, #363795, #005C97);  
    background: linear-gradient(to right, #363795, #005C97); 
}
</style>