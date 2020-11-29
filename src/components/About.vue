<template>
    <div class="about center-align">
        <button @click="release_slider()" >  My Team</button>
        <ul  v-if="slider">
            <li class="w3-animate-top display-3 " >Mahmoud Hesham Elbermbaly</li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'About',
    data(){
        return {
            slider : false
        }
    },
    methods : {
        release_slider(){
            this.slider = !this.slider;
        }
    }
}
</script>

<style scoped>
.about{
    margin-top: 7%;
  background: #005C97;  
background: -webkit-linear-gradient(to right, #363795, #005C97);  
background: linear-gradient(to right, #363795, #005C97); 
}
</style>