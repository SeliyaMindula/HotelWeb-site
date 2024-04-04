document.addEventListener('DOMContentLoaded', function () {
    var destinationsData = {
        "destination1": {
            "img": "img/destination1.jpg",
            "title": "Cinnamon Dhonveli Maldives",
            "desc": "Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.",
            "link": "link-to-maldives.html"
        },
        "destination2": {
            "img": "img/destination2.jpg",
            "title": "Bora Bora",
            "desc": "Experience the ultimate luxury at our exclusive beach resort, with stunning overwater bungalows and underwater adventures.",
            "link": "link-to-bora-bora.html"
        },
        "destination3": {
            "img": "img/destination3.jpg",
            "title": "Maldives Paradise",
            "desc": "Discover the Maldives, a tropical haven of white sand beaches and crystal clear waters. Enjoy world-class snorkeling and luxury resorts.",
            "link": "link-to-bora-bora.html"
        },
        "destination4": {
            "img": "img/destination4.jpg",
            "title": "Indu Para",
            "desc": "Experience the idyllic beauty of Indu para. Immerse yourself in the serenity of overwater bungalows and the vibrant marine life.",
            "link": "link-to-bora-bora.html"
        }
    };

    document.getElementById('destinationSelect').addEventListener('change', function () {
        var value = this.value;

        var data = destinationsData[value];

        // Update the image
        document.getElementById('destinationImage').src = data.img;
        document.getElementById('destinationImage').alt = data.title;

        // Update the title and description
        document.getElementById('destinationTitle').textContent = data.title;
        document.getElementById('destinationDesc').textContent = data.desc;

        // Update the link
        document.getElementById('destinationLink').href = data.link;
    });
});

//  grid open the modal
document.querySelectorAll('.grid-item').forEach(item => {
    item.onclick = function() {
      var modal = document.getElementById(this.getAttribute('data-modal'));
      modal.style.display = "block";
    }
  });
  
  //  close the modal
  document.querySelectorAll('.close').forEach(item => {
    item.onclick = function() {
      var modal = this.closest('.modal');
      modal.style.display = "none";
    }
  });
  
  // outside click close 
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
    }
  }
  
