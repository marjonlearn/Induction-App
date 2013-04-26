// JavaScript Document

// create an array to hold all map passed markers (useful to delete them)
					var markersArray = [];
					var roomArray = [];
					var infowindowsArray = [];
					var infowindowsArray2 = [];


// function to load the google map
					function initialize() {
						
							campusZone = new google.maps.LatLng(50.420338, -4.110507);
						  
							var mapOptions = {
							  center: campusZone,
							  zoom: 17,
							  disableDefaultUI: true,
							  mapTypeId: google.maps.MapTypeId.ROADMAP
							};
							map = new google.maps.Map(document.getElementById("mapCanvas"),
								mapOptions);
							
							// specify the custom icon image and size
							var marjonIcon = new google.maps.MarkerImage("images/markers/marjonicon.png", null, null, null, new google.maps.Size(75,38));
							
							
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
							//console.log("campus map stuff");	
							$("#localOverlays").hide();
							$("#localSearchBar").hide();
							$("#campusOverlays").show();
							$("#campusSearchBar").show();
							//map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
							map.setZoom(17);
							map.setCenter(campusZone);
						}
						 
					 }
					
					// function to place a marker on the map
					function plopMarker(location, facility) {
						
						// delete any markers on the map
						//clearOverlays();
						
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
						boxText.innerHTML = "<p>"+facility+"</p>";
						
						var myOptions = {
						 content: boxText,
						 disableAutoPan: false,
						 maxWidth: 220,
						 pixelOffset: new google.maps.Size(-85, -63),
						 zIndex: 2,
						 boxStyle: { 
						  background: "url('images/markers/markerBG.gif') repeat-x #0a93be",
						  width: "150px",
						  height:"35px",
						  border: "2px solid #47c3fd",
						  color: "#fff",
						  font: "12px arial",
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
					
				function plopRoom(location, block, myfloor, room) {
				clearRooms();
				
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
                 pixelOffset: new google.maps.Size(-110, -97),
				 zIndex: 2,
                 boxStyle: { 
                  background: "url('images/markers/markerBG.gif') repeat-x #0a93be",
				  width: "220px",
				  border: "2px solid #47c3fd",
				  color: "#fff",
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
					  
					// call the initialisze function when the page has loaded
					initialize();
					
							
					$("#map_Facilities").click(function() {
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