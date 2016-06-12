$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    var target = e.target;
    var formData = {
      'q' : $('input[name=q]').val(),
      'type' : 'album'
    };
    $.ajax({
      type: "GET",
      url: 'https://api.spotify.com/v1/search',
      data: formData,
      success: function(response) {
        var albumArray = response.albums.items;
        for(var i=0; i<albumArray.length; i++){
          for(var j = 0; j<albumArray[i].images.length; j++) {
              if(albumArray[i].images[j].height === 300) {
                var pictureURL = albumArray[i].images[j].url;
                console.log(albumArray[i].images[j].url);
                $('#images').prepend($('<img>',{src:pictureURL}))
              } //if
          } //for j
        } // for i
      }//
    });
  });
});
