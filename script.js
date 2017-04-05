$(document).ready(function(){

var lat;
  var long;
    $.getJSON("http://ip-api.com/json",function(infoB){
      lat=infoB.lat;
      long=infoB.lon;
       var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=25a2f121d2b2a92dde9938d13c576729';
console.log(api);
$.getJSON(api, function(info){
       var fahrenheit;
  var celcius;
  var kelvin;
      var switchTempScale=true;
    
   var conditions= info.weather[0].description;
        kelvin = info.main.temp;
       var windmph= info.wind.speed;
    var location = info.name;
   
    fahrenheit = (kelvin*(9/5)-459.67).toFixed(1);
    
    celcius = (kelvin-273).toFixed(1);
      console.log(location);
     $("#location").html(location);
      $("#conditions").html(conditions);
      $("#celcius").html(celcius + " &#8451;");
      $("#celcius").click(function(){
        if(switchTempScale===false){
          $("#celcius").html(celcius + " &#8451;");
          switchTempScale=true;
        }
        else{
          $("#celcius").html(fahrenheit + " &#8457;");
          switchTempScale=false;
        }
      });
windmph = (2.237*(windmph)).toFixed(1);
       $("#windmph").html(windmph + " mph");
    if(fahrenheit>=90){
     $('body').css('background-image','url(https://www.pexels.com/photo/desert-dunes-hot-landscape-259474/)');
    }
     else if(fahrenheit>=80 && fahrenheit<90){
         $('body').css('background-image','url(https://static.pexels.com/photos/88212/pexels-photo-88212.jpeg)');
     }
     else if(fahrenheit>=60 && fahrenheit<80){
         $('body').css('background-image','url(https://static.pexels.com/photos/125457/pexels-photo-125457.jpeg)');
     } 
       else if(fahrenheit>=25 && fahrenheit<60){
         $('body').css('background-image','url(https://static.pexels.com/photos/17577/pexels-photo.jpg)');
     }
      else if(fahrenheit<25){
        $('body').css('background-image','url(https://static.pexels.com/photos/235621/pexels-photo-235621.jpeg)');
      }
  });
    });

});