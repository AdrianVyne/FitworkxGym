<!doctype html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />

<head>
    
    <title>Contact Us</title>
    @include("layouts/head")
    <link rel="stylesheet" href="{{ asset('css/contact.css') }}">
</head>

<body>

    @include("layouts/navbar")
    <div class="wrapper">
        <div class="innerbannerwrap">
            <div class="innerbanner">
                <h2 class="bannerHeadline">contact <span>us</span></h2>
            </div>
        </div>
        <section class="innerpage_all_wrap">
            <div class="container mt-5">
                <div class="row">
                    <h2 class="heading">get in <span>touch</span></h2>

                    <p class="headParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quisquam
                        reprehenderit, blanditiis nam debitis libero facilis illum repudiandae eveniet voluptatibus
                        quibusdam illo ea nisi ipsa accusantium nobis animi asperiores quaerat ,Lorem ipsum dolor sit
                        amet,
                        consectetur adipisicing elit. Fugiat quisquam reprehenderit, blanditiis nam debitis libero
                        facilis
                        illum repudiandae eveniet voluptatibus quibusdam illo ea nisi ipsa accusantium nobis animi
                        asperiores quaerat .</p>

                    <div class="innerWrapper">
                        <ul class="contact_icon clearfix">
                            <li><a href=tel:+639338745377><i class="fa fa-phone"></i> <span>+63
                                        933-874-5377</span></a>
                            </li>
                            <li><a href=mailto:mail@yoursite.com><i class="fa fa-envelope"></i>
                                    <span>fitworx@gmail.com</span></a></li>
                            <li><a href=https://goo.gl/maps/YLh79YCGPNnAk3vu7><i class="fa fa-map-marker"></i>
                                    <span>Camarin, Caloocan</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="map_wrapper clearfix">
            <div id="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.094324933423!2d121.04263705887752!3d14.763715593079855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b15cafadc1fd%3A0x6e899f7ad07653bc!2sFitworx%20Gym!5e0!3m2!1sen!2sph!4v1678881220787!5m2!1sen!2sph&ll=14.7644366,121.0419075&z=16"
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
            <div class="container">
                <div class="row">
                    <div class="contact_form">
                        <h2 class="heading">contact us <span>by form</span></h2>

                        <p class="headParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                            quisquam
                            reprehenderit, blanditiis nam debitis libero facilis illum repudiandae eveniet voluptatibus
                            quibusdam illo ea nisi ipsa accusantium nobis animi asperiores quaerat ,Lorem ipsum dolor
                            sit
                            amet .</p>

                        <form data-parsley-validate="" name="contact" class="formcontact clearfix">
                            <div class="form-group"><input type="text" class="form-control" name=name placeholder=Name
                                    required="" data-parsley-required-message="please insert Name"></div>
                            <div class="form-group"><input type="text" class="form-control" name=phone placeholder=Phone
                                    required="" data-parsley-required-message="please insert Phone No">
                            </div>
                            <div class="form-group"><input type="text" class="form-control" name=subject
                                    placeholder=subject required=""
                                    data-parsley-required-message="please insert subject">
                            </div>
                            <div class="form-group"><input type="email" class="form-control" name="email"
                                    placeholder="Email" required="" data-parsley-required-message="please insert Email">
                            </div>
                            <div class="form-group1"><textarea class="form-control textas" name=comment
                                    placeholder=Message required="" data-parsley-minlength=20
                                    data-parsley-minlength-message="Come on! You need to enter at least a 20 character comment.."
                                    data-parsley-validation-threshold=10 data-parsley-maxlength=100></textarea></div>
                            <button type=submit class="btn btn-red" id=send>send Us</button>
                            <div class="form-message"></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    @include("layouts/footer")
        @include("layouts/scripts")

</body>

</html>