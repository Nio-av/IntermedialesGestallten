<?php include_once "header.php"; ?>

     
     <article>
         
         
         Klicke und halte die Maus über dem Video gedrückt.
         <br>
         <br>
         
         <div id="videocontainer">
             
             
             
             <div class="Videostream" id="trash">
                 <video class="vid" playsinline preload="auto" id="trashvideo">
                      <source src="Video/footage/Muell_1.mp4" type="video/mp4">
                      <source src="Video/footage/Muell.webm" type='video/webm; codecs="vp9, opus"'>
                      Your browser does not support the video tag.
                </video> 
            </div>
             
             
             <div class="Videostream" id="upscycling">
                 <video class="vid" playsinline="yes" preload="auto" id="upscyclingvideo">
                      <source src="Video/footage/Upcycling_1.mp4" type="video/mp4">
                      <source src="Video/footage/Upcycling.webm" type='video/webm; codecs="vp9, opus"'>
                      Your browser does not support the video tag.
                </video>
                 
            </div>
             
             
             
             
             
             
        </div>
         
         <div id="Videocontrol">
             
             <img class="videcontrolbutton" id="play" onclick="vidplay()" src="<?php echo "$devpath";?>/Img/playbuttons.svg" alt="Play">
             <img class="videcontrolbutton" id="restart" onclick="restart()" src="<?php echo "$devpath";?>/Img/replaybuttons.svg" alt="Restart">
         </div>
         
         <div id="buttonarea">
                <div class="button">
                    <a href="statistik/">
                        <img src="<?php echo "$devpath";?>/Img/button_statistik.svg" alt="Statistik">
                        
                    </a>
                 </div>
             
             <div class="button">
                     <a href="upcycling/">
                        <img src="<?php echo "$devpath";?>/Img/button_upcycling.svg" alt="Upcycling">
                         
                    </a>
                </div>
             
         </div>
        
        
         
         
     </article>

    <script type="text/javascript" src="js/framework/pressure.js"></script>
    <script type='text/javascript' src='js/videocontrol.js'></script>

<?php include_once "footer.php"; ?>