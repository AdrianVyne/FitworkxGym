<!DOCTYPE html>
<html lang="en">
<head>
   <title>FitworxGym</title>
   @include("layouts/head")
   <link rel="stylesheet" href="{{ asset('css/home.css') }}">

</head>
<body>



<header class="header fixed-top">

   <div class="container">

      <div class="row align-items-center justify-content-between">

         <a href="#" class="logo"><span>Fitworx</span>gym</a>

         <nav class="nav">
            <a href="#home">Home</a>
            <a href="#About Us">About Us</a>
            <a href="#Gym Services">Gym Services</a>
            <a href="#Fitness Programs">Fitness Programs</a>
            <a href="Contact Us">Contact Us</a>
            <a href="log-in.html">Log in</a>


         </nav>

         <div id="menu-btn" class="fas fa-bars"></div>

      </div>

   </div>

</header>



<section class="home" id="home">

   <div class="container">

      <div class="row align-items-center min-vh-100">

         <div class="col-md-12 text-center">
            <span>FitworxGym</span>
            <h3>WELCOME TO FITWORX GYM</h3>
            <a href="log-in.html" class="link-btn">get started</a>
         </div>

      </div>

   </div>

</section>



<section class="about" id="about">

   <div class="container">

      <div class="row align-items-center flex-wrap-reverse">

         <div class="col-md-6">
            <span>ABOUT US</span>
            <h3>Daily Workout and Stay Active</h3>
            <p>We are a fitness gym and has a team of certified trainers and fitness experts who can guide you through your fitness journey. Our trainers specialize in weight loss, muscle building, and injury prevention, and they can create customized training plans tailored to your individual needs.

               Here in Fitworxgym we believe in creating a welcoming and inclusive environment where everyone feels comfortable working out. Our facility is open 8am to 8am-10pm, so you can fit your workout in whenever it's convenient for you. We also offer group fitness classes such as zumba and dance group to add variety to your workout routine.</p>
            <ul>
               <li> <i class="far fa-check-square"></i> How to Support your Immume System </li>
               <li> <i class="far fa-check-square"></i>A Guide to 30 Day Fitness & Workout Challenges</li>
               <li> <i class="far fa-check-square"></i>Guide To Ease Your Back In The Gym</li>
               <li> <i class="far fa-check-square"></i>The Mental Health Benefits of Exercise in Home</li>
            </ul>
         </div>

         <div class= "col-md-6" >
            <img src="{{ asset('img/about-img.png') }}" class="w-100" alt="">
         </div>   
         
      </div>

   </div>

</section>



<section class="counter">

   <div class="container box-container">

      <div class="box">
         <h3>1000+</h3>
         <p>fitness Goals Achieved</p>
      </div>

      <div class="box">
         <h3>100+</h3>
         <p>gym equipments</p>
      </div>

      <div class="box">
         <h3>8am-10pm</h3>
         <p>Gym Hours</p>
      </div>

      <div class="box">
         <h3>1000+</h3>
         <p>satisfied clients</p>
      </div>

   </div>

</section>



<section class="courses" id="courses">

   <div class="heading">
      <span>Training Offers</span>
      <h3>Our Best Training Offers</h3>
   </div>

   <div class="box-container container">

      <div class="box">
         <div class="image">
            <img src= "{{ asset('img/img-1.jpg') }}" alt="">
          
         </div>
         <div class="content">
            <div class="icons">
               <span> <i class="fas fa-calendar"></i> mon - sun </span>
               <span> <i class="fas fa-clock"></i> Anytime </span>
            </div>
            <h3>Weight Lifting</h3>
            <a href="#" class="link-btn">read more</a>
         </div>
      </div>

      <div class="box">
         <div class="image">
            <img src="{{ asset('img/img-2.jpg') }}" alt="">
            
         </div>
         <div class="content">
            <div class="icons">
               <span> <i class="fas fa-calendar"></i> mon - sun </span>
               <span> <i class="fas fa-clock"></i> Anytime </span>
            </div>
            <h3>Body Building</h3>
            <a href="#" class="link-btn">read more</a>
         </div>
      </div>

      <div class="box">
         <div class="image">
            <img src="{{ asset('img/img-3.jpg') }}" alt="">
         </div>
         <div class="content">
            <div class="icons">
               <span> <i class="fas fa-calendar"></i> mon - sun </span>
               <span> <i class="fas fa-clock"></i> Anytime </span>
            </div>
            <h3>Boxing Session</h3>
            <a href="#" class="link-btn">read more</a>
         </div>
      </div>

      <div class="box">
         <div class="image">
            <img src="{{ asset('img/img-4.jpg') }}" alt="">
         </div>
         <div class="content">
            <div class="icons">
               <span> <i class="fas fa-calendar"></i> mon - sun </span>
               <span> <i class="fas fa-clock"></i> Anytime </span>
            </div>
            <h3>Calisthenics</h3>
            <a href="#" class="link-btn">read more</a>
         </div>
      </div>

      <div class="box">
         <div class="image">
            <img src="{{ asset('img/img-5.jpg') }}" alt="">
         </div>
         <div class="content">
            <div class="icons">
               <span> <i class="fas fa-calendar"></i> mon - sun </span>
               <span> <i class="fas fa-clock"></i> Anytime </span>
            </div>
            <h3>Powerlifting</h3>
            <a href="#" class="link-btn">read more</a>
         </div>
      </div>

      <div class="box">
         <div class="image">
            <img src="{{ asset('img/img-6.jpg') }}" alt="">
         </div>
         <div class="content">
            <div class="icons">
               <span> <i class="fas fa-calendar"></i> mon - sun </span>
               <span> <i class="fas fa-clock"></i> Anytime </span>
            </div>
            <h3>Strength and Conditioning</h3>
            <a href="#" class="link-btn">read more</a>
         </div>
      </div>

   </div>

</section>



<section class="team" id="team">

   <div class="heading">
      <span>Our Team</span>
      <h3>meet the expert team</h3>
   </div>

   <div class="box-container container">

      <div class="box">
         <img src="{{ asset('img/team-1.jpg') }}" alt="">
         
         <div class="content">
            <span>gym trainer</span>
            <h3>Trainer Dapo</h3>
         </div>
         <div class="share">
            <a href="#https://www.facebook.com/master.dapo" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            
         </div>
      </div>

      <div class="box">
         <img src="{{ asset('img/team-2.jpg') }}" alt="">
         <div class="content">
            <span>gym trainer</span>
            <h3>Trainer Joel</h3>
         </div>
         <div class="share">
            <a href="#https://www.facebook.com/xXcerelacXx" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            
         </div>
      </div>

      <div class="box">
         <img src="{{ asset('img/team-3.jpg') }}" alt="">
         <div class="content">
            <span>gym trainer</span>
            <h3>Trainer Mark</h3>
         </div>
         <div class="share">
            <a href="#https://www.facebook.com/marcanthony.villafuerte" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
           
         </div>
      </div>

   </div>

</section>


<section class="blogs" id="blogs">

   <div class="heading">
      <span>REVIEWS</span>
      <h3>Reviews from our clients</h3>
   </div>

   <div class="box-container container">

      <div class="box">
         <div class="image">
            <img src= "{{ asset('img/couple.JPG') }}" alt="">
            
         </div>
         <div class="content">
            <a class="link">This gym is amazing! The trainers are knowledgeable and friendly.</a>
         </div>
      </div>

      <div class="box">
         <div class="image">
            <img src= "{{ asset('img/review 2.jpg') }}" alt="">
         </div>
         <div class="content">
            <a class="link">I've been going to this gym for a few months now, and I have to say, I'm really impressed with the results I'm seeing.</a>  
         </div>
      </div>

      <div class="box">
         <div class="image">
            <img src="{{ asset('img/reviews3.jpg') }}" alt="">
         </div>
         <div class="content">
            <a class="link">Working out with friends is so much more fun than going solo, and this gym is the perfect place to do it.</a>           
         </div>
      </div>

   </div>

</section>



<section class="footer">

   <div class="box-container container">

      <div class="box">
         <h3>quick links</h3>
         <a href="#"> <i class="fas fa-angle-right"></i> home</a>
         <a href="#"> <i class="fas fa-angle-right"></i> About Us</a>
         <a href="#"> <i class="fas fa-angle-right"></i> Gym Services</a>
         <a href="#"> <i class="fas fa-angle-right"></i> Fitness Programs</a>
         <a href="#"> <i class="fas fa-angle-right"></i> Contact Us</a>
         <a href="#"> <i class="fas fa-angle-right"></i> Log in</a>
      </div>

      <div class="box">
         <h3>contact info</h3>
         <a href="#"> <i class="fas fa-phone"></i> +63933-874-5377 </a>
         <a href="#"> <i class="fas fa-phone"></i> +63933-874-5377 </a>
         <a href="#"> <i class="fas fa-envelope"></i> fitworxgym@gmail.com </a>
         <a href="#"> <i class="fas fa-map"></i> Camarin, Caloocan Philippines </a>
      </div>

      <div class="box">
         <h3>follow us</h3>
         <a href="#https://www.facebook.com/fitworxgymph"> <i class="fab fa-facebook-f"></i> facebook </a>
         <a href="#https://www.instagram.com/fitworxgym/"> <i class="fab fa-instagram"></i> instagram </a>
      </div>

   

   </div>

   <p class="credit"> © <span>Fitworx Gym</span> All rights reserved! </p>

</section>

<script src="js/script.js"></script>
   
</body>
</html>