BgeigieImports = {
    renderMap: function ($map, $legend) {
        var map = new google.maps.Map(
            $map[0],
            {
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP,
                        google.maps.MapTypeId.SATELLITE,
                        google.maps.MapTypeId.HYBRID,
                        google.maps.MapTypeId.TERRAIN,
                        "gray"]
                },
                mapTypeId: "gray"
            }
        );

        map.mapTypes.set("gray", new google.maps.StyledMapType(
            [
                {"featureType": "water", "stylers": [{"saturation": -100}, {"lightness": -30}]},
                {"stylers": [{"saturation": -100}, {"lightness": 50}]},
                {
                    "elementType": "labels.icon",
                    "stylers": [{"invert_lightness": true}, {"gamma": 9.99}, {"lightness": 79}]
                }
            ], {name: "Map (Gray)"}
        ));

        map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push($legend[0]);

        var binds = {urls: {bv_worker_min: $map.data('bv-worker-min')}};
        var bvm = new BVM(map, binds);

        bvm.SetNewCustomMarkerOptions(12, 12, 1, 1, 0, true);
        bvm.SetOpenInfowindowOnHover(true);
        bvm.GetLogFileDirectFromUrlAsync($map.data('url'), $map.data('id'));
    }
};
