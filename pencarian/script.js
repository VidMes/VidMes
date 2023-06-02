function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

    function search() {
      var input = document.getElementById('searchInput').value.toLowerCase();
      var mediaElements = document.getElementsByClassName('media');

      for (var i = 0; i < mediaElements.length; i++) {
        var caption = mediaElements[i].getAttribute('alt').toLowerCase();
        if (caption.indexOf(input) > -1) {
          mediaElements[i].style.display = "";
        } else {
          mediaElements[i].style.display = "none";
        }
      }
    }

    window.addEventListener('DOMContentLoaded', function() {
      var mediaElements = Array.from(document.getElementsByClassName('media'));
      mediaElements = shuffleArray(mediaElements);
      var container = document.getElementById('mediaContainer');
      for (var i = 0; i < mediaElements.length; i++) {
        container.appendChild(mediaElements[i]);
      }
    });