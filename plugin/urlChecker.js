if(!('contains' in String.prototype)) {
  String.prototype.contains = function(str, startIndex) {
    return -1 !== String.prototype.indexOf.call(this, str, startIndex);
  };
}

function preview() {
  $(".ember-view.m__activity-feed__event-metadata__item .t__light-text").each(function(index, element) {
      if ($(this).text().contains("Tile info:")) {
        var textDiv = $(this)

        // Get image url
        $.each($(this).text().split('"'), function( i, val ) {
          if (val.contains(".png") || val.contains(".jpg")) {
            // Display the image
            var segs = val.split(":"), imgUrl = "";

            if (!val.startsWith("http")) {
              imgUrl = "http://pbs.twimg.com/media/" + segs[0];
            } else {
              imgUrl = segs[0] + ":" + segs[1];
            }

            textDiv.mouseenter(function() {
              $("body").append( $("<div style='background: #fff; top: 0; left: 0; width: 240px; height: 240px; position: fixed;'><img style='margin: 10px; width: 220px; height: 220px;' src='"
               + imgUrl + "' /></div>") );
            });
          }
        });
      }
  });
}

//setTimeout(preview, 5000);
