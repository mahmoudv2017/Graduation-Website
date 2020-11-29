<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section s1">
          <h1 class="display-3 align-items-center">Welcome To Paradise</h1>

           <!--<h1 class="display-1 align-items-center">Vertigo</h1> --> 

            <div class="input-group mb-3">
                <input type="text" class="form-control i1"  placeholder="Enter Country" autocomplete="address-level1">
                <input type="date" class="form-control"  >
                <input type="date" class="form-control"  >

            </div>
            <a href="#" class=" btn btn-info btn-lg"> Search</a>
      </div>

      <div class="section s2">
        <div class="slide s2.1 py-0">
                <div class="row">
                    <div class="col-lg-4 text-center">
                       <img src="@/assets/Travel-Bag-512.png" class="rounded-circle">
                       <h2>Enjoy The Trip</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime veniam iste at fuga voluptatem qui harum voluptates quibusdam ullam tempora, veritatis ipsam fugit reprehenderit temporibus sunt alias nostrum dolorum mollitia! Ipsum minus facere a ad, nulla accusantium voluptatibus illo.</p>
                    </div>

                    <div class="col-lg-4 text-center">
                        <img src="@/assets/Travel-Bag-512.png" class="rounded-circle">
                        <h2>Enjoy The Trip</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime veniam iste at fuga voluptatem qui harum voluptates quibusdam ullam tempora, veritatis ipsam fugit reprehenderit temporibus sunt alias nostrum dolorum mollitia! Ipsum minus facere a ad, nulla accusantium voluptatibus illo.</p>
                     </div>

                     <div class="col-lg-4 text-center">
                        <img src="@/assets/Travel-Bag-512.png" class="rounded-circle">
                        <h2>Enjoy The Trip</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime veniam iste at fuga voluptatem qui harum voluptates quibusdam ullam tempora, veritatis ipsam fugit reprehenderit temporibus sunt alias nostrum dolorum mollitia! Ipsum minus facere a ad, nulla accusantium voluptatibus illo.</p>
                     </div>

             </div>       
                
            </div>
      </div>

      <!--<div class="section s3">
         <div class="row">

                <div class="col-lg-6 px-0">
                    <img src="@/assets/beach-1404880-1279x850.jpg" class="img-fluid" style="height: 100%;">
                </div>

                <div class="col-lg-6 text-center texter">
                
                    <h1 class="display-1 mb-5 header-1">Plan Your Escape</h1>
                    <p class="font-weight-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos deserunt in deleniti nam officia molestias excepturi sit ducimus, minima delectus. Impedit, blanditiis aut reprehenderit harum eius perspiciatis. Optio labore sunt, possimus officia deserunt quos eius hic culpa, neque natus, assumenda ut expedita numquam. Iste accusamus deserunt ducimus delectus eligendi adipisci dolorem earum, ipsam veniam similique deleniti velit nostrum hic. Nulla aspernatur reiciendis, modi nisi minus obcaecati ducimus amet. Laudantium consequuntur nesciunt cum aut labore laboriosam velit voluptates voluptas! Dolor dolorem commodi aliquid laboriosam nostrum tempore necessitatibus perspiciatis quidem quod? Libero enim dolores architecto unde vitae amet maxime fugiat eaque doloremque saepe natus rerum, quos aliquam ullam quidem. Cumque eos necessitatibus repellat atque laboriosam ut facilis iste accusamus excepturi qui, quos optio asperiores expedita, doloribus voluptatibus. Quae aliquam aut ad dolorem aliquid vitae, quas incidunt! Libero quam dolor quasi eius. Quo, nemo facilis optio esse incidunt voluptate maiores ipsa rem vel?</p>
                
                </div>

            </div>
      </div>-->

      <div class="section s4">
        <div class="row">
                <div class="col-lg-6 text-center">
                    
                    <h1 class="display-3">Check Out Our Latest Sales what are You Waiting For</h1>
                </div>

                <div class="col-lg-6 px-0 ">
                    
                    <a href="https://www.youtube.com/"><img  src="@/assets/istockphoto-599758574-1024x1024.jpg" class="img-fluid" style="height: 100%;"></a>
                </div>
            </div>
      </div>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  data() {
      return {
        options: {
          paddingTop: '30px',
          sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
        }
      }
    }
}
</script>
<style scoped>
.home>div:nth-child(1){
  background: gray;
}
.home>div:nth-child(2){
  background: yellow;
}
.home>div:nth-child(3){
  background: green;
}
  .section{
    width: 100vw;
    height: 100vh;
    z-index: -1;
    text-align: center;
    font-size: 3rem;
  }

.s2 .row{
  margin-top: 7%;
}

.s1{
    padding: 0;
}
.s1 .display-3{
    margin: 4% auto 400px auto;
}


.s1 div{
    padding: 0;
}

.s1 a{
    width: 500px;
    margin: 4rem auto;
}

.form-control{
    margin: auto 2rem;
    
}

.s2 img{
    width: 140px;
    height: 140px;
    margin-bottom: 2rem;
}

.row p{
    font-size: 20px;
    padding: 20px 100px;
}

 .s4 img{
    display: block;
    
}

 .s4 .fp-tableCell  {
    
   display: flex;
}



.s4 h1{
    margin: 40% auto;
}

.input-group{
    width: 50%;
    margin-left: 25%;
}
input[type=text],input[type=date]{
  background-color: white;
  margin: auto 2%;
}
.s1{
  background-image: url(https://www.hotelsviva.com/hubfs/Playa%20de%20Alcudia.jpg);
  background-size: cover;
  background-position: center;
}

</style>
