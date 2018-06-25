$(document).ready(function() {

    // Use jQuery to get a reference to `load-songs`
        const $loadSongBtn = $("#load-songs")
    // Use jQuery to get a reference to `song-list`
        const $songList = $("#song-list")

    
        // Attach a click handler to the button with jQuery. When
        // the button is clicked, use $.ajax() to load `songs.json`
        // from the file system
    
        $loadSongBtn.on("click", function (evt){
           $.ajax({
               type:"GET",
               url: "./songs.json",
               success: function(data){
                   $.each(data.songs, function(i, song){
                       const $songSec = $("<section></section>").attr("class", "song")
                       $songList.append($songSec)
                    $songSec.append("<h1> "+song.title+" </h1>")
                    const $songDesc = $("<section>Performed by "+ song.artist+" on the album "+song.album+"</section>").attr("class", "song_description")
                    $songSec.append($songDesc)
                   })
               }
            })
        })
       
        // Chain a `.then()` method to the ajax call, and when
        // it is complete build a DOM component for each song with
        // the following structure. Use the jQuery append() method
        // to put an HTML representation of each song the DOM as a
        // child component of the .

        //     <section class="song">
        //         <h1 class="song__title">{Title of song}</h1>
        //         <section class="song__description">
        //             Performed by {artist} on the album {album}
        //         </section>
        //     </section>
    
})