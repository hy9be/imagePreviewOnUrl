if(!('contains' in String.prototype)) {
  String.prototype.contains = function(str, startIndex) {
    return -1 !== String.prototype.indexOf.call(this, str, startIndex);
  };
}

$(".ember-view.m__activity-feed__event-metadata__item .t__light-text").each(function(index, element) {
    if ($(this).text().startsWith("Tile info:")) {
      // Get image url
      $.each($(this).text().split('"'), function( i, val ) {
        if (val.contains(".png") || val.contains(".jpg")) {
          // Display the image
          $(this).mouseenter(function() {
            $(body).append( $("<div style='top: 0; left: 0; width: 240px; height: 240px; position: fixed;'><img style='margin: 10px; width: 220px; height: 220px;' src='"
            + "http://pbs.twimg.com/media/" + val + "' /></div>") );
          });
        }
      });
    }
});
