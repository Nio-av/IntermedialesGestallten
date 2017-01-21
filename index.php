<?php include_once "header.php";>
     
     <article>
         <div id="Branding">
             <div id="Logo">
                 Upcycling
             </div>
         </div>
         <div id="videocontainer">
             <video id="trash">
                  <source src="movie.mp4" type="video/mp4">
                  <source src="Video/footage/mov_bbb.mp4" type="video/mp4">
                  Your browser does not support the video tag.
            </video>
             <video id="upscycling">
                  <source src="movie.mp4" type="video/mp4">
                  <source src="Video/footage/mov_bbb.mp4" type="video/mp4">
                  Your browser does not support the video tag.
            </video>
        </div>
        <div id="Videocontrol">
             <button id="play" onclick="vidplay()">Play</button>
             <button id="restart" onclick="restart()">Restart</button>
         </div>
       
         
     </article>



<?php include_once "footer.php";>