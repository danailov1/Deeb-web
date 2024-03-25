window.onload = function() {
    var popup = document.querySelector('.popup');
    var yesButton = document.querySelector('.yes');
    var noButton = document.querySelector('.no');
  
    yesButton.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  
    noButton.addEventListener('click', function() {
      window.close();
    });
  }
  