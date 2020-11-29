<template>

<div class="editor">
 <div v-if="image_selector" class="main" >
    

    <div v-for="(item,index) in items" :key="index" class="container">
        <div  class="Content" :key="index">

            <div class="row">
                <div class="col-lg-3 ">
                    <img  :src="getImgUrl(index) " class="img-fluid main_image w3-animate-left">
                    <input @click="ready_storage()" type="file" class="filebutton">
                   
                </div>
                <div class="col-lg-9 w3-animate-right">
                    <form @submit.prevent="Get_conetent()">
                    <input type="text" class="display-3 title " v-model=" item.title"> 
                    <input placeholder="rating" type="number" class="rating" v-model="item.rating" > 
                    <input type="text" class="location " v-model=" item.Location  "> 
                    <br>
                    <br>
                    <textarea rows="8" cols="50" class="desc " v-model=" item.desc  "></textarea>
                    <div v-for="(price, index) in item.prices" :key="index" >
                    <input type="number" class="location" placeholder="price for single room" v-model="item.prices[index]"> 
                    </div>

            
                    <button class="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>

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
 

 </div>

 
</template>

<script>

import FB_APP from '@/firebase/init'



//document.querySelector('.filebutton').addEventListener('change' , function(e){ console.log('asdasd') })

/*button.addEventListener('change' , function(e){
    console.log('inside change')
    let files = e.target.files(0)

    var storage_ref = FB_APP.storage().ref('assets/' + files.name)
    storage_ref.put(files)
} )*/

export default {
    name : 'Editor',
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
  

    created(){
        FB_APP.firestore().collection('main_project').where('slug' , '==' , this.$route.params.info_slug )
        .get().then( snapshot => {
            snapshot.forEach( doc => {
                let item = doc.data()
                item.id = doc.id
                this.items.push(item)
            } )
        } )
    }
}
</script>

<style scoped>
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

.editor{
    margin-top: 4%;
    background: #005C97;  
    background: -webkit-linear-gradient(to right, #363795, #005C97);  
    background: linear-gradient(to right, #363795, #005C97); 
}
</style>