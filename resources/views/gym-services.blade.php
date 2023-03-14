<!doctype html>
<html>
<head>
    <title>Fitworx - Gym Services </title>
    @include("layouts/head")
</head>
<body>
    {{-- top part --}}
    

    </div>
    {{-- presentation --}}
    <section id="presentation">
        <div class="presentation-wrapper">
            <div class="presentation-text">
                <h2 class="presentation-phrase"><span>This is how</span> <span>We do it</span>
                </h2>
                <p class="check-our-experiences">
                    <span>Be at the top performance with our dedicated trainers
                    </span> <a href="#">Contact us now!</a>
                </p>
            </div>
        </div>
        <div id="presentation-gallery">
            <div id="presentation-images">
                <div class="lazyload presentation-image" data-src="" data-alt=""><img src="{{ asset('img/1.jpg') }}" alt=""></div>
                <div class="lazyload presentation-image" data-src="{{ asset('img/2.jpg') }}" data-alt=""></div>
                <div class="lazyload presentation-image" data-src="{{ asset('img/3.jpg') }}" data-alt=""></div>
                <div class="lazyload presentation-image" data-src="{{ asset('img/4.jpg') }}" data-alt=""></div>
            </div>
            
            <div id="presentation-controller">
                <button type="button" class="presentation-arrow" id="presentation-prev"><svg version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 307.046 307.046" style="enable-background:new 0 0 307.046 307.046;"
                        xml:space="preserve">
                        <path
                            d="M239.087,142.427L101.259,4.597c-6.133-6.129-16.073-6.129-22.203,0L67.955,15.698c-6.129,6.133-6.129,16.076,0,22.201l115.621,115.626L67.955,269.135c-6.129,6.136-6.129,16.086,0,22.209l11.101,11.101c6.13,6.136,16.07,6.136,22.203,0l137.828-137.831C245.222,158.487,245.222,148.556,239.087,142.427z" />
                    </svg></button>
                <button type="button" class="presentation-arrow" id="presentation-next"><svg version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 307.046 307.046" style="enable-background:new 0 0 307.046 307.046;"
                        xml:space="preserve">
                        <path
                            d="M239.087,142.427L101.259,4.597c-6.133-6.129-16.073-6.129-22.203,0L67.955,15.698c-6.129,6.133-6.129,16.076,0,22.201l115.621,115.626L67.955,269.135c-6.129,6.136-6.129,16.086,0,22.209l11.101,11.101c6.13,6.136,16.07,6.136,22.203,0l137.828-137.831C245.222,158.487,245.222,148.556,239.087,142.427z" />
                    </svg></button>
                <div id="presentation-navigation">
                    <button type="button" class="presentation-button"></button>
                    <button type="button" class="presentation-button"></button>
                    <button type="button" class="presentation-button"></button>
                    <button type="button" class="presentation-button"></button>
                </div>
            </div>
        </div>
    </section>
    {{-- supposed to be testimonials but changed to amenities --}}
    <section id="testemonials">
        <h4 class="testemonial-intro"><span>BEST AMENITIES FOR</span> <span>THE BEST GYM COMFORT</span></h4>
        <div class="common-limiter">
            <div id="testemonial-wrapper">
                <div id="testemonial-people">
                    <button type="button" class="arrow prev-arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240.823 240.823"
                            style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">
                            <path
                                d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816C52.942,116.507,52.942,124.327,57.633,129.007z" />
                        </svg></button>
                    <ul class="testemonial-gallery">
                        <li class="current">
                            <div class="lazyload current" data-src="{{ asset('img/1.jpg') }}"
                                data-alt="Giovana Wisintainer Balen Do Prado"></div>
                        </li>
                        <li>
                            <div class="lazyload" data-src="{{ asset('img/2.jpg') }}" data-alt="Luana de Oliveira Poletto"></div>
                        </li>
                        <li>
                            <div class="lazyload" data-src="{{ asset('img/3.jpg') }}" data-alt="RC Molon"></div>
                        </li>
                        <li>
                            <div class="lazyload" data-src="{{ asset('img/4.jpg') }}" data-alt="Rosemari Correia da Rosa"></div>
                        </li>
                        <li>
                            <div class="lazyload" data-src="{{ asset('img/2.jpg') }}" data-alt="Ronaldo Chiaradia"></div>
                        </li>
                    </ul>
                    <button type="button" class="arrow next-arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240.823 240.823"
                            style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">
                            <path id="Chevron_Right_1_"
                                d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261C187.881,124.315,187.881,116.495,183.189,111.816z" />
                        </svg></button>
                </div>
                <div id="testemonial-details">
                    <div class="testemonial-box current">
                        <div class="testemonial-info">
                            <p class="testemonial-name">Locker Rooms</p>
                            <p class="testemonial-role">Secure and Convenient Locker Rooms for Your Workout Needs</p>
                            <div class="testemonial-performa-text common-text">
                                <p>Store Your Belongings and Freshen Up Before or After Your Workout
                                </p>
                            </div>
                            <div class="testemonial-text common-text">
                                <p><em>Our locker rooms are the perfect place to store your belongings while you
                                        workout. We offer secure lockers that can be easily locked and unlocked with a
                                        key or combination. You can also freshen up after your workout in our locker
                                        rooms with our convenient showers and towel service.</em></p>
                            </div>
                        </div>
                        <div class="lazyload testemonial-image" data-src="{{ asset('img/1.jpg') }}"
                            data-alt="Giovana Wisintainer Balen Do Prado"></div>
                    </div>
                    <div class="testemonial-box">
                        <div class="testemonial-info">
                            <p class="testemonial-name">Sauna</p>
                            <p class="testemonial-role">Relax and Recharge in Our Sauna</p>
                            <div class="testemonial-performa-text common-text">
                                <p>A Great Way to Unwind After Your Workout</p>
                            </div>
                            <div class="testemonial-text common-text">
                                <p><em>Our sauna is the perfect way to relax and recharge after a long workout. The
                                        sauna helps to relieve muscle tension and reduce stress levels. It's also a
                                        great way to detoxify your body and boost your immune system. Come unwind in our
                                        sauna and experience the many benefits for yourself.</em></p>
                            </div>
                        </div>
                        <div class="lazyload testemonial-image" data-src="{{ asset('img/2.jpg') }}" data-alt="Luana de Oliveira Poletto">
                        </div>
                    </div>
                    <div class="testemonial-box">
                        <div class="testemonial-info">
                            <p class="testemonial-name">Showers</p>
                            <p class="testemonial-role">Refresh Yourself After Your Workout with Our Showers</p>
                            <div class="testemonial-performa-text common-text">
                                <p>Clean and Convenient Shower Facilities Available for Your Use</p>
                            </div>
                            <div class="testemonial-text common-text">
                                <p><em>Our shower facilities are clean and convenient, and perfect for refreshing
                                        yourself after a tough workout. We offer complimentary towels for your use and
                                        have shampoo and soap available as well. Whether you prefer a hot or cold
                                        shower, we've got you covered.</em></p>
                            </div>
                        </div>
                        <div class="lazyload testemonial-image" data-src="{{ asset('img/3.jpg') }}" data-alt="RC Molon"></div>
                    </div>
                    <div class="testemonial-box">
                        <div class="testemonial-info">
                            <p class="testemonial-name">Towel Service</p>
                            <p class="testemonial-role"> Complimentary Towel Service for Your Workout Needs</p>
                            <div class="testemonial-performa-text common-text">
                                <p>Convenient and Hassle-Free Service for Our Members</p>
                            </div>
                            <div class="testemonial-text common-text">
                                <p><em>At Fitworx, we offer complimentary towel service to all of our members. Our towel
                                        service makes it easy to freshen up after your workout without having to bring
                                        your own towel. Simply grab a towel from our towel service area and you're ready
                                        to go.</em></p>
                            </div>
                        </div>
                        <div class="lazyload testemonial-image" data-src="{{ asset('img/4.jpg') }}" data-alt="Rosemari Correia da Rosa">
                        </div>
                    </div>
                    <div class="testemonial-box">
                        <div class="testemonial-info">
                            <p class="testemonial-name">Juice Bar</p>
                            <p class="testemonial-role">Quench Your Thirst and Refuel at Our Juice Bar</p>
                            <div class="testemonial-performa-text common-text">
                                <p>Delicious and Nutritious Options Available for All Fitness Levels</p>
                            </div>
                            <div class="testemonial-text common-text">
                                <p><em>Our juice bar offers a variety of delicious and nutritious options to help you
                                        refuel after your workout. We offer a wide range of smoothies, juices, and other
                                        beverages to choose from, all made with fresh ingredients. Whether you're
                                        looking for a post-workout protein shake or a refreshing fruit smoothie, our
                                        juice bar has something for everyone. </em></p>
                            </div>
                        </div>
                        <div class="lazyload testemonial-image" data-src="{{ asset('img/2.jpg') }}" data-alt="Ronaldo Chiaradia"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @include("layouts/scripts")
</body>

</html>