<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Capstone | Fitworx</title>
    @include("layouts/head")
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/about.css') }}" />
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link
      href="./Clogo3 with white circle.png"
      rel="shortcut icon"
      type="image/vnd.microsoft.icon"
    />
  </head>
  <html>
    <body>
      @include("layouts/navbar")
      <div class="video mt-5">
        <div class="video-container">
          <video id="video" disableRemotePlayback src="img/fitworx.mp4"></video>
          <span class="custom-loader"></span>
          <div class="player-state">
            <span class="state-btn state-backward">
              <ion-icon name="play-back-outline"></ion-icon>
              <span class="backward-duration">5</span>
            </span>
            <span class="main-state state-btn">
              <ion-icon name="play-outline"></ion-icon>
            </span>
            <span class="state-btn state-forward">
              <span class="forward-duration">5</span>
              <ion-icon name="play-forward-outline"></ion-icon>
            </span>
          </div>
          <div class="controls">
            <div class="duration">
              <div class="current-time"></div>
              <div class="hover-time">
                <span class="hover-duration"></span>
              </div>
              <div class="buffer"></div>
            </div>
            <div class="btn-controls">
              <div class="btn-con">
                <span class="play-pause control-btn">
                  <ion-icon name="play-outline"></ion-icon>
                </span>
                <span class="volume">
                  <span class="mute-unmute control-btn">
                    <ion-icon name="volume-high-outline"></ion-icon>
                  </span>
                  <div class="max-vol">
                    <div class="current-vol"></div>
                  </div>
                </span>
                <span class="time-container">
                  <span class="current-duration">0:00</span>
                  <span>/</span>
                  <span class="total-duration">0:00</span>
                </span>
              </div>
              <div class="right-controls">
                <span class="backward control-btn" title="5 backward">
                  <ion-icon name="play-back-outline"></ion-icon>
                </span>
                <span class="forward control-btn" title="5 forward">
                  <ion-icon name="play-forward-outline"></ion-icon>
                </span>
                <span class="mini-player control-btn">
                  <ion-icon name="albums-outline"></ion-icon>
                </span>
                <span class="settings control-btn">
                  <span class="setting-btn">
                    <ion-icon name="options-outline"></ion-icon>
                  </span>
                  <ul class="setting-menu">
                    <li data-value="0.25">0.25x</li>
                    <li data-value="0.5">0.5x</li>
                    <li data-value="0.75">0.75x</li>
                    <li data-value="1" class="speed-active">1x</li>
                    <li data-value="1.25">1.25x</li>
                    <li data-value="1.5">1.5x</li>
                    <li data-value="1.75">1.75x</li>
                    <li data-value="2">2x</li>
                  </ul>
                </span>
                <span class="theater-btn control-btn">
                  <span class="theater-default">
                    <ion-icon name="tablet-landscape-outline"></ion-icon>
                  </span>
                  <span class="theater-active">
                    <ion-icon name="tv-outline"></ion-icon>
                  </span>
                </span>
                <span class="fullscreen-btn control-btn" title="fullscreen">
                  <span class="full">
                    <ion-icon name="scan-outline"></ion-icon>
                  </span>
                  <span class="contract">
                    <ion-icon name="contract-outline"></ion-icon>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="amenity mt-5" id="amenity">
        	 <h2>Our Amenities</h2>
  	<div class="content">
  		 <div class="box wow slideInLeft">
  		 	 <img src="{{ asset('img/Amenities1.jpg') }}" alt="amenity" />
  		 </div>
  		 <div class="box wow slideInRight">
  		 	 <img src="{{ asset('img/Amenities2.jpg') }}" alt="amenity" />
  		 </div>
  		 <div class="box wow slideInLeft">
  		 	 <img src="{{ asset('img/Amenities3.jpg') }}" alt="amenity" />
  		 </div>
  		 <div class="box wow slideInRight">
  		 	 <img src="{{ asset('img/Amenities4.jpg') }}" alt="amenity" />
  		 </div>
       <div class="box wow slideInRight">
  		 	 <img src="{{ asset('img/Amenities5.jpg') }}" alt="amenity" />
  		 </div>
       <div class="box wow slideInRight">
  		 	 <img src="{{ asset('img/Amenities6.jpg') }}" alt="amenity" />
  		 </div>
       <div class="box wow slideInRight">
  		 	 <img src="{{ asset('img/Amenities7.jpg') }}" alt="amenity" />
  		 </div>
       <div class="box wow slideInRight">
  		 	 <img src="{{ asset('img/Amenities8.jpg') }}" alt="amenity" />
  		 </div>
  	</div>
  </section>
  @include("layouts/scripts")
  @include("layouts/footer")
              <script defer src="{{ asset('js/about.js') }}"></script>
    </body>
  </html>
</html>
