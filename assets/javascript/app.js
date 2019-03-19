

var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", 
"gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];



function displayAnimalGifs() {
    var animal = $(this).attr("data-animal");
    console.log(this);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=sjQeLG7V7l9deeBw2TpOsSzrRj2vhYeL&limit=10";
    console.log(animal)
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        var results = response.data;

        for (var i = 0; i < results.length; i++){ 
        
        var animalDiv = $("<div>");
        var p = $("<p>").text(results[i].rating);
        var animalImage = $("<img>")
        animalImage.attr("src", results[i].images.fixed_height.url);
        animalDiv.append(p);
        animalDiv.append(animalImage);
        $("#animal-gifs").prepend(animalDiv);
        
        }   
      });
}

function renderButtons() {

    $("#buttons-view").empty();

    for (var q = 0; q < animals.length; q++) {

        var a = $("<button>");
        a.addClass("animal-btn");
        a.attr("data-animal", animals[q]);
        a.text(animals[q]);
        $("#buttons-view").append(a);
      }
}

$("#add-animal").on("click", function(event) {
    event.preventDefault();

    var animal = $("#animal-input")
      .val()
      .trim();

    animals.push(animal);

    renderButtons();
  });



$(document).on("click", ".animal-btn", displayAnimalGifs);

renderButtons();