 require(["esri/Map", "esri/layers/CSVLayer", "esri/views/MapView", "esri/widgets/Legend"], (
        Map,
        CSVLayer,
        MapView,
        Legend
      ) => {
        const url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";

        // Paste the url into a browser's address bar to download and view the attributes
        // in the CSV file. These attributes include:
        // * mag - magnitude
        // * type - earthquake or other event such as nuclear test
        // * place - location of the event
        // * time - the time of the event

        const template = {
          title: "Crime committed at {ILEADSStreet}",
          
        };

        // The heatmap renderer assigns each pixel in the view with
        // an intensity value. The ratio of that intensity value
        // to the maxPixel intensity is used to assign a color
        // from the continuous color ramp in the colorStops property

      const renderer = {
          type: "heatmap",
          colorStops: [
              { color: "rgba(255, 0, 0, 0)", ratio: 0 },       // Transparent red at the start
              { color: "#ffcccc", ratio: 0.083 },             // Lighter red
              { color: "#ff9999", ratio: 0.166 },             // Light red
              { color: "#ff6666", ratio: 0.249 },             // Medium light red
              { color: "#ff3333", ratio: 0.332 },             // Medium red
              { color: "#ff0000", ratio: 0.415 },             // Standard red
              { color: "#cc0000", ratio: 0.498 },             // Darker red
              { color: "#990000", ratio: 0.581 },             // Even darker red
              { color: "#660000", ratio: 0.664 },             // More dark red
              { color: "#330000", ratio: 0.747 },             // Very dark red
              { color: "#330000", ratio: 0.83 },              // Maintaining dark red
              { color: "#330000", ratio: 0.913 },             // Consistent dark red
              { color: "#330000", ratio: 1 }                  // Darkest red at the end
          ],
          maxDensity: 0.2,
          minDensity: 0
      };


        const layer = new CSVLayer({
          url: url,
          title: "Crime of Saint Louis",
          copyright: "St. Louis Police Department",
          latitudeField:"Lat",
          longitudeField:"Lon",
		      popupTemplate: template,
          popupTemplate: template,
          renderer: renderer,
        });

        const map = new Map({
          basemap: "gray-vector",
          layers: [layer]
        });

      var view = new MapView({
          container: "viewDiv",
          center: [-90.1994, 38.6270], // Longitude, Latitude for Saint Louis
          zoom: 10, // Adjust zoom level as needed
          map: map
      });

        view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-left"
        );
      });

