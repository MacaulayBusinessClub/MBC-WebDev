var members =
        {"1": { 
            "name": "Othilla Wlodarczyk",
            "imageUrl": "images/members/Othilla_Wlodarczyk_2.png",
            "linkedin": "https://www.linkedin.com/in/othillawlod/",
            "position": "Executive President"
            },
        "2": {
            "name": "Matthew Severin",
            "imageUrl": "images/members/Matthew_Severin.jpeg",
            "linkedin": "https://www.linkedin.com/in/matthew-severin-539457a8/",
            "position": "Co-President, Baruch"
            },
        "3": {
            "name": "Nicolette Hussain",
            "imageUrl": "images/members/Nicolette_Hussain.jpeg",
            "linkedin": "https://www.linkedin.com/in/nicolette-hussain-23a8b2119/",
            "position": "Co-President, Baruch"
            },
        "4": {
            "name": "Karan Chalchani",
            "imageUrl": "images/members/Karan_Chalchani_2.png",
            "linkedin": "https://www.linkedin.com/in/karanchachlani/",
            "position": "President, Hunter"
            },
        "5": {
            "name": "Dimitar Novakov",
            "imageUrl": "images/members/Dimitar_Novakov_2.jpg",
            "linkedin": "https://www.linkedin.com/in/dimitar-novakov-9376689a/",
            "position": "President, City College"
            },
        "6": {
            "name": "Chris Angelidis",
            "imageUrl": "images/members/Chris_Angelidis_2.jpg",
            "linkedin": "https://www.linkedin.com/in/chris-angelidis-997273108/",
            "position": "VP, Finance &amp; Accounting"
            },
        "7": {
            "name": "John Casella",
            "imageUrl": "images/members/John_Casella.jpg",
            "linkedin": "https://www.linkedin.com/in/johncasella22/",
            "position": "Director, Newsletter"
            },
        "8": {
            "name": "Kiriaki Giannoulas",
            "imageUrl": "images/members/Kiriaki_Giannoulas.jpg",
            "linkedin": "https://www.linkedin.com/in/kiriaki-g-121916104",
            "position": "Planning Committee"
            },
        "9": {
            "name": "Christian Buonamassa",
            "imageUrl": "iimages/members/Christian_Buonamassa.jpeg",
            "linkedin": "https://www.linkedin.com/in/christiandabonem17/",
            "position": "Planning Committee"
            },
        "10": {
            "name": "Jennifer Dikler",
            "imageUrl": "images/members/Jennifer_Dikler.jpg",
            "linkedin": "https://www.linkedin.com/in/jennifer-dikler-51057584",
            "position": "Planning Committee"
            },
        "11": {
            "name": "John Doe",
            "imageUrl": "images/members",
            "linkedin": "linkedin.com",
            "position": "Planning Committee"
            },
        "12": {
            "name": "Jane Doe",
            "imageUrl": "images/members",
            "linkedin": "linkedin.com",
            "position": "Planning Committee"
            },
        }


$(document ).ready(function() {
    for(member in members){
        var name = members[member].name;
        var image = members[member].imageUrl;
        var linkedin = members[member].linkedin;
        var position = members[member].position;
        
        var card = "<div class='col-md-3 col-xs-6'>" + "<div class='portrait'>" + 
        "<img class='card-img-top' src='" + image + "' alt='" + name + "' width='100%' height='100%'>" + 
          "<div class='card-block'>" + 
              "<h4 class='card-title'>" + name + "</h4>" +
              "<p class='card-text'>" + position + "</p>" + 
              "<a class='card-social' href='" + linkedin + "'><img src='assets/icons/LinkedIn_48x48.png' width='36' height='36'></a>" + 
          "</div> </div> </div>"

          $("#memberdisplay").append(card);
    }
    
    /*
    $.getJSON("../../members.json", function(data){
        $.each( data, function( key, val ) {
            var member = "<div class='col-md-3 col-xs-6'>" + "<div class='portrait'>" + 
              "<img class='card-img-top' src='" + val.imageUrl + "' alt='" + val.name + "' width='100%' height='100%'>" + 
                "<div class='card-block'>" + 
                    "<h4 class='card-title'>" + val.name + "</h4>" +
                    "<p class='card-text'>Executive President</p>" + 
                    "<a class='card-social' href='https://www.linkedin.com/in/othillawlod/'><img src='assets/icons/LinkedIn_48x48.png' width='36' height='36'></a>" + 
                "</div> </div> </div>"
        });
    });
    $("#memberdisplay").append(member);
    */

});