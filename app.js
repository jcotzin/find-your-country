$(document).ready(function() {
  $('.drop-down').hide()
  var region;
  var data;
  $.getJSON("./findyourcountry.json", function(json){
      data = json.brands;

      $('.select-market').append('<option>testing</option>')
  });


  
  $('#flag').on('click', function() {
      $('.drop-down').toggle();      
      console.log(data)

      $('.select-region').change(function(){
          // grabs the region selected 'americas'
          region = $(this).find(':selected').val();
          // parses json using the selected region to get the country initials 'AB' 
          var initialsArray = Object.keys(data.alfaromeo[region]);
          // removes the last item in array 'region_value' -not needed
          initialsArray.splice(-1, 1);
          // empties anything that may have populated in the Select A Market dropdown
          $('.select-market').empty().append("<option selected>SELECT A MARKET</option>");
          // map over the country initials
          var regionCountries = initialsArray.map(item => {
            // append countries names to Select A Market dropdown
            $('.select-market').append("<option selected value="+ item + ">"+ data.region_map[item].country + "</option>");
            // keeps the default option Select a Market as first option
            $(".select-market").val($(".select-market option:first").text());   
          });
      });

      // this section is getting the website url based off of what country is selected from Select a Market
      // and appending it to the continue button
      $('.select-market').change(function() {
        var selectedCountry = $('.select-market').val(); 
        console.log($('.select-market').val())
        console.log("data: ",data)
        console.log("selected country: ", data.alfaromeo[region][selectedCountry])
        console.log("website: ",data.alfaromeo[region][selectedCountry].site)
        if (data.alfaromeo[region][selectedCountry].site !== 'NA') {
          var website = data.alfaromeo[region][selectedCountry].site;
          $('a.continue-btn').attr('href', website );
        } else {
          $('a.continue-btn').attr('href', '#' );
        }
        
      })

  });




});
