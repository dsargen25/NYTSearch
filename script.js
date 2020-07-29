
const key = "HaHoVpEdTUvUoNGqZUJ2pnrALJQ8Xt3E"
var startYear = "";
var endYear = "";
var searchTerm = "";
var desiredArticleNumber = 1;


$("#search").on("click", function(){

  searchTerm = $("#search-terms").val();
  startYear = $("#start-year").val();
  endYear = $("#end-year").val();
  desiredArticleNumber = $("#records").val();

  var startDateUrl =  "";

  if(startYear.length > 0){
    startDateUrl = "begin_date=" + startYear + "0101&";
  } 

  var endDateUrl = "";  
  
  if(endYear.length > 0){
    endDateUrl = "end_date=" + endYear + "1231&"; 
  }

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + startDateUrl + endDateUrl + "q=" + searchTerm + "&api-key=" + key;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);
  });
    for (var i = 0; i < desiredArticleNumber; i++){
  }

})

