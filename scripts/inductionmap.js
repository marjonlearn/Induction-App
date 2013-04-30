// JavaScript Document

// create an array to hold all map passed markers (useful to delete them)
					var markersArray = [];
					var roomArray = [];
					var infowindowsArray = [];
					var infowindowsArray2 = [];


// function to load the google map
					function initialize() {
						
							campusZone = new google.maps.LatLng(50.420571,-4.110003);
						  
							var mapOptions = {
							  center: campusZone,
							  zoom: 17,
							  disableDefaultUI: true,
							  mapTypeId: google.maps.MapTypeId.ROADMAP
							};
							map = new google.maps.Map(document.getElementById("mapCanvas"),
								mapOptions);
							
							// specify the custom icon image and size
							var marjonIcon = new google.maps.MarkerImage("images/markers/marjonicon.png", null, null, null, new google.maps.Size(125,50));
							
							
							// generate the marker
							var marker = new google.maps.Marker({
							  position: new google.maps.LatLng(parseFloat(50.420703),parseFloat(-4.109965)),
							  map: map,
							  icon: marjonIcon,
							  title: ""  
							});
					  }
					  
					 
					 // function to change the map and divs when toggle clicked
					 function changeMap(whichMap) {
						 //console.log(whichMap);
						
						// work out which divs to show and change map settings
						if (whichMap == "local") {
							// show local map divs
							$('#local_search').textinput('disable');
							$("#localOverlays").show();
							$("#localSearchBar").show();
							$("#campusOverlays").hide();
							$("#campusSearchBar").hide();
							//map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
							clearOverlays();
							map.setZoom(14);
							map.setCenter(campusZone);
							//console.log("local map stuff");	
						}
						else {
							// show campus map
							$("#localOverlays").hide();
							$("#localSearchBar").hide();
							$("#campusOverlays").show();
							$("#campusSearchBar").show();
							//map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
							map.setZoom(17);
							map.setCenter(campusZone);
						}
						 
					 }
					 
					 // function to place a shop marker on the map
					function plopShop(location, shopName) {
						
						image = new google.maps.MarkerImage('images/markers/mapMarker.png',
						new google.maps.Size(30, 30));
						
						// retrieve the passed location and split at the comma
						var location=location.split(",");
						var marker = new google.maps.Marker({
						  position: new google.maps.LatLng(
								  parseFloat(location[0]),
								  parseFloat(location[1])),
						  map: map,
						  icon: image,
						  title:""						  
					 	 });
										
						// push marker in to array, can then be deleted when required
						markersArray.push(marker);
						
						var boxText = document.createElement("div");				
						boxText.innerHTML = "<p class='resItem'>" + shopName + "</p>";
						
						var myOptions = {
						 content: boxText,
						 disableAutoPan: false,
						 maxWidth: 220,
						 pixelOffset: new google.maps.Size(-75, -63),
						 zIndex: 2,
						 boxStyle: { 
						  background: "url('images/markers/markerBG.gif') repeat-x #D7D7D7",
						  width: "140px",
						  height:"32px",
						  border: "2px solid #8FC400",
						  color: "#333",
						  font: "14px arial",
						  padding: "5px"
						 },
						 closeBoxMargin: "0 0 0px 0px",
						 closeBoxURL: "images/markers/map_cross.png",
						 infoBoxClearance: new google.maps.Size(1, 1),
						 isHidden: false,
						 pane: "floatPane",
						 enableEventPropagation: false
						};
						
						var ib = new InfoBox(myOptions);
						ib.open(map, marker);
						map.setCenter(campusZone);
						infowindowsArray.push(ib);
						
					}
					 
					 // function to place a restaurant marker on the map
					function plopRestaurant(location, resName) {
						
						image = new google.maps.MarkerImage('images/markers/mapMarker.png',
						new google.maps.Size(30, 30));
						
						// retrieve the passed location and split at the comma
						var location=location.split(",");
						var marker = new google.maps.Marker({
						  position: new google.maps.LatLng(
								  parseFloat(location[0]),
								  parseFloat(location[1])),
						  map: map,
						  icon: image,
						  title:""						  
					 	 });
										
						// push marker in to array, can then be deleted when required
						markersArray.push(marker);
						
						var boxText = document.createElement("div");				
						boxText.innerHTML = "<p class='resItem'>" + resName + "</p>";
						
						var myOptions = {
						 content: boxText,
						 disableAutoPan: false,
						 maxWidth: 220,
						 pixelOffset: new google.maps.Size(-75, -63),
						 zIndex: 2,
						 boxStyle: { 
						  background: "url('images/markers/markerBG.gif') repeat-x #D7D7D7",
						  width: "140px",
						  height:"32px",
						  border: "2px solid #8FC400",
						  color: "#333",
						  font: "14px arial",
						  padding: "5px"
						 },
						 closeBoxMargin: "0 0 0px 0px",
						 closeBoxURL: "images/markers/map_cross.png",
						 infoBoxClearance: new google.maps.Size(1, 1),
						 isHidden: false,
						 pane: "floatPane",
						 enableEventPropagation: false
						};
						
						var ib = new InfoBox(myOptions);
						ib.open(map, marker);
						map.setCenter(campusZone);
						infowindowsArray.push(ib);
						
					}
					
					// function to place a marker on the map
					function plopMarker(location, facility) {
						
						image = new google.maps.MarkerImage('images/markers/mapMarker.png',
						new google.maps.Size(30, 30));
						
						// retrieve the passed location and split at the comma
						var location=location.split(",");
						var marker = new google.maps.Marker({
						  position: new google.maps.LatLng(
								  parseFloat(location[0]),
								  parseFloat(location[1])),
						  map: map,
						  icon: image,
						  title:""						  
					 	 });
										
						// push marker in to array, can then be deleted when required
						markersArray.push(marker);
						
						var boxText = document.createElement("div");				
						boxText.innerHTML = "<p class='facItem'>"+facility+"</p>";
						
						var myOptions = {
						 content: boxText,
						 disableAutoPan: false,
						 maxWidth: 220,
						 pixelOffset: new google.maps.Size(-75, -63),
						 zIndex: 2,
						 boxStyle: { 
						  background: "url('images/markers/markerBG.gif') repeat-x #D7D7D7",
						  width: "140px",
						  height:"32px",
						  border: "2px solid #8FC400",
						  color: "#333",
						  font: "14px arial",
						  padding: "5px"
						 },
						 closeBoxMargin: "0 0 0px 0px",
						 closeBoxURL: "images/markers/map_cross.png",
						 infoBoxClearance: new google.maps.Size(1, 1),
						 isHidden: false,
						 pane: "floatPane",
						 enableEventPropagation: false
						};
						
						var ib = new InfoBox(myOptions);
						ib.open(map, marker);
						map.setCenter(campusZone);
						infowindowsArray.push(ib);
						
					}
				
				// function sticks a marker and info box on the campus map with passed room details from autocomplete
				function plopRoom(location, block, myfloor, room) {
				clearRooms();
				clearOverlays();
				
				image = new google.maps.MarkerImage('images/markers/mapMarker.png',
				new google.maps.Size(30, 30));
				
				shadow = new google.maps.MarkerImage('images/markers/markerShadow.png',
				new google.maps.Size(60, 60),
      			new google.maps.Point(0,0),
      			new google.maps.Point(16, 45));
				
				var marker = new google.maps.Marker({
					position: location,
					map: map,
					shadow: shadow,
					icon: image,	
					animation: google.maps.Animation.DROP
  				});
				
				 roomArray.push(marker);
				var myblock = block;
				var thefloor = myfloor;
				
				var boxText = document.createElement("div");				
				boxText.innerHTML = "<strong>Room: </strong>" + room + "<br/><strong>Block: </strong>" + block + "<br/><strong>Floor: </strong>" + thefloor + "<br/>";
				
				var myOptions = {
                 content: boxText,
				 disableAutoPan: false,
                 maxWidth: 220,
                 pixelOffset: new google.maps.Size(-115, -89),
				 zIndex: 2,
                 boxStyle: { 
                  background: "url('images/markers/markerBG.gif') repeat-x #D7D7D7",
				  width: "220px",
				  border: "2px solid #8FC400",
				  color: "#333",
				  padding: "5px"
                 },
                 closeBoxMargin: "0 0 5px 5px",
                 closeBoxURL: "images/markers/map_cross.png",
                 infoBoxClearance: new google.maps.Size(1, 1),
                 isHidden: false,
                 pane: "floatPane",
                 enableEventPropagation: false
        		};
				
				var ib = new InfoBox(myOptions);
				ib.open(map, marker);
				map.setCenter(location);
				infowindowsArray2.push(ib);
			}
			
			// function to place a parking marker on the map
				function plopParking(location, type) {
					
					image = new google.maps.MarkerImage('images/markers/' + type + 'ParkMarker.png',
					null, /* size is determined at runtime */
   					null, /* origin is 0,0 */
    				null, /* anchor is bottom center of the scaled image */
					new google.maps.Size(35, 35));
					
					// retrieve the passed location and split at the comma
					var location=location.split(",");
					var marker = new google.maps.Marker({
					  position: new google.maps.LatLng(
							  parseFloat(location[0]),
							  parseFloat(location[1])),
					  map: map,
					  icon: image,
					  title:""						  
					 });
					
					// push marker in to array, can then be deleted when required
						markersArray.push(marker);	
					}
					
					// function to clear the map from any markers
					function clearOverlays() {
						
					// remove markers	
					  for (var i = 0; i < markersArray.length; i++ ) {
						markersArray[i].setMap(null);
					  }
					 // remove overlays 
					  for (var i = 0; i < infowindowsArray.length; i++ ) {
						infowindowsArray[i].setMap(null);
					  }
					}
					
					// function to clear the map from any markers
					function clearRooms() {
						
					// remove markers	
					  for (var i = 0; i < roomArray.length; i++ ) {
						roomArray[i].setMap(null);
					  }
					 // remove overlays 
					  for (var i = 0; i < infowindowsArray2.length; i++ ) {
						infowindowsArray2[i].setMap(null);
					  }
					}
					  
					// call the initialize function when the page has loaded
					initialize();
					
					// Function to add parking markers to geolocations
					$("#campus_Parking").click(function() {
						// clear any markers
						clearRooms();
						clearOverlays();
						
						// add service markers
						plopParking('50.420085,-4.108747', 'car');
						plopParking('50.41975,-4.109536', 'car');
						plopParking('50.419938,-4.109981', 'car');
						plopParking('50.42056,-4.110823', 'car');
						plopParking('50.421565,-4.109241', 'car');
						plopParking('50.42189,-4.107079', 'car');
						plopParking('50.41999,-4.109026', 'accessible');
						plopParking('50.419867,-4.109332', 'accessible');
						plopParking('50.419679,-4.109879', 'accessible');
						plopParking('50.421302,-4.109316', 'accessible');
						plopParking('50.421247,-4.110662', 'accessible');
						plopParking('50.420372,-4.110432', 'cycle');
						plopParking('50.420509,-4.108576', 'cycle');
						plopParking('50.421295,-4.110244', 'cycle');
						
						map.setCenter(campusZone);
						map.setZoom(17);
					});
						
					// Function to add facility markers to geolocations
					$("#map_Facilities").click(function() {
						// clear any markers
						clearRooms();
						clearOverlays();
						// add service markers
						plopMarker('50.420202,-4.10893', 'Registry Services');
						plopMarker('50.420084,-4.112879', 'Sports Centre');
						plopMarker('50.421135,-4.109321', 'Student Support');
						plopMarker('50.420092,-4.109965', 'Comp. Services / MOLU');
						plopMarker('50.42039,-4.110222', 'Library');
						plopMarker('50.419884,-4.109525', 'Finance');
						plopMarker('50.421172,-4.11041', 'Reception');
						
						map.setCenter(campusZone);
						map.setZoom(18);
					});
					
					// Function to add local shop markers to geolocations
					$("#local_Shops").click(function() {
						// clear any markers
						clearRooms();
						clearOverlays();
						// add service markers
						plopShop('50.409492,-4.097112', 'Asda Superstore');
						plopShop('50.409529,-4.096189', 'Boots Pharmacy');
						plopShop('50.43506,-4.109155', 'Tesco Superstore');
						plopShop('50.407769,-4.132474', 'The Co-operative Food');
						plopShop('50.415714,-4.099636', 'One Stop community stores');
						
						map.setCenter(campusZone);
						map.setZoom(13);
					});
					
					// Function to add local restaurant markers to geolocations
					$("#local_Restaurants").click(function() {
						// clear any markers
						clearRooms();
						clearOverlays();
						// add service markers
						plopRestaurant('50.418185,-4.121193', 'The Jack Rabbit Inn');
						plopRestaurant('50.422088,-4.117427', 'McDonalds');
						plopRestaurant('50.416934,-4.123988', 'Pizza Hut');
						plopRestaurant('50.416565,-4.124427', 'KFC');
						plopRestaurant('50.413987,-4.125999', 'Fishbone Restaurant &amp; Bar');
						plopRestaurant('50.414158,-4.127287', 'McDonalds');
						plopRestaurant('50.407246,-4.133142', 'Nibana Indian Restaurant');
						plopRestaurant('50.399532,-4.135457', 'The Golden Hind Restaurant &amp; Bar');
						plopRestaurant('50.427816,-4.113237', 'Toby Carvery');
						plopRestaurant('50.434698,-4.100754', 'Papa Johns');
						
						map.setCenter(campusZone);
						map.setZoom(13);
					});
					
					// listen for map toggle click
					$( "#mapSlider" ).slider({
						  stop: function( event, ui ) {
							 var whichMap =  $("#mapSlider").val();
							 
							 // call the changeMap function
							 clearOverlays();
							 clearRooms();
							 changeMap(whichMap);
							 
							 }
						});					