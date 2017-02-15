<?php include_once "header.php"; ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
     
     <article>
         <div id="videocontainer">
             <div class="Videostream" id="trash">
                 <video preload="auto" id="trashvideo">
                      <source src="Video/footage/Muell_1.mp4" type="video/mp4">
                      <source src="Video/footage/Muell.webm" type='video/webm; codecs="vp9, opus"'>
                      Your browser does not support the video tag.
                </video>
                 
            </div>
             <div class="Videostream" id="upscycling">
                 <video preload="auto" id="upscyclingvideo">
                      <source src="Video/footage/Upcycling_1.mp4" type="video/mp4">
                      <source src="Video/footage/Upcycling.webm" type='video/webm; codecs="vp9, opus"'>
                      Your browser does not support the video tag.
                </video>
                 
            </div>
        </div>
         
         <div id="buttonarea">
                <div class="button">
                    <a href="statistik/">
                        <img src="Img/button_statistik.svg" alt="Statistik">
                        
                    </a>
                 </div>
             
             <div class="button">
                     <a href="upcycling/">
                        <img src="Img/button_upcycling.svg" alt="Upcycling">
                         
                    </a>
                </div>
             
         </div>
        
        <div id="Videocontrol">
             <button id="play" onclick="vidplay()">Play</button>
             <button id="restart" onclick="restart()">Restart</button>
         </div>
         
         
     </article>

    <script type="text/javascript" src="js/framework/pressure.js"></script>
    <script type="text/javascript" src="js/video.js"></script>

<?php include_once "footer.php"; ?>