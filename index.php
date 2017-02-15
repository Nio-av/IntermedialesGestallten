<?php include_once "header.php"; ?>
     
     <article>
         <div id="videocontainer">
             <div class="Videostream" id="trash">
                 <video preload="auto" id="trashvideo">
                      <source src="Video/footage/Muell_1.mp4" type="video/mp4">
                      <source src="Video/footage/Muell.webm" type='video/webm; codecs="vp9, opus"'>
                      Your browser does not support the video tag.
                </video>
                 <div class="button">
                    <a href="statistik/">
                        <img src="Img/button_statistik.svg" alt="Statistik">
                        
                    </a>
                 </div>
            </div>
             <div class="Videostream" id="upscycling">
                 <video preload="auto" id="upscyclingvideo">
                      <source src="Video/footage/Upcycling_1.mp4" type="video/mp4">
                      <source src="Video/footage/Upcycling.webm" type='video/webm; codecs="vp9, opus"'>
                      Your browser does not support the video tag.
                </video>
                 <div class="button">
                     <a href="upcycling/">
                        <img src="Img/button_upcycling.svg" alt="Upcycling">
                         
                    </a>
                </div>
            </div>
        </div>
        
        <div id="Videocontrol">
             <button id="play" onclick="vidplay()">Play</button>
             <button id="restart" onclick="restart()">Restart</button>
         </div>
         
         
     </article>



<?php include_once "footer.php"; ?>