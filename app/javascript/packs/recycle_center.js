$(function() {
    $(".edit_recycle_center").on("click", function(e){
        e.preventDefault();
        // alert("Clicked");
        $("#recycle_center_modal_update").modal("show");
        // debugger;
        $("#recycle_center_id").val(JSON.parse($(this).attr('data-category')).id);
        $("#recycle_center_name_update").val(JSON.parse($(this).attr('data-category')).name);
        $("#recycle_center_country_update").val(JSON.parse($(this).attr('data-category')).country);
        $("#recycle_center_state_update").val(JSON.parse($(this).attr('data-category')).state);
        $("#recycle_center_city_update").val(JSON.parse($(this).attr('data-category')).city);
        $("#recycle_center_street_update").val(JSON.parse($(this).attr('data-category')).street);
    });

    $("#update_recycle_center_btn").on("click", function(){
        var recycleCenterId = $("#recycle_center_id").val();
        var name = $("#recycle_center_name_update").val();
        var country = $("#recycle_center_country_update").val();
        var state = $("#recycle_center_state_update").val();
        var street = $("#recycle_center_street_update").val();
        var city = $("#recycle_center_city_update").val();

        $.ajax({
            url: "/admin/recycle_centers/"+recycleCenterId,
            type: 'PATCH',
            data: {recycle_center: 
                {
                    id: recycleCenterId, 
                    name: name, 
                    country: country, 
                    state: state, 
                    city: city, 
                    street: street
                }
            },
            success: function(data) {
                location.reload();
                // alert("Hello world");
            },
        });
    });

    $("#recycle_center_country").on("change", (function() {
        var country = $("#recycle_center_country").val();
        $.ajax({
            url: "/admin/recycle_centers/country_states",
            type: 'GET',
            data: {country_key: country},
            success: function(data) {
                var states = data.states;
                var $statesDropdown = $("#recycle_center_state");
                $.each(states, function(key, value) {
                    $statesDropdown.append($("<option />").val(key).text(value));
                });
            }
        });
    }));

    $("#recycle_center_state").on("change", (function() {
        var country = $("#recycle_center_country").val();
        var state = $("#recycle_center_state").val();
        $.ajax({
            url: "/admin/recycle_centers/country_states_city",
            type: 'GET',
            data: {country_key: country, state_key: state},
            success: function(data) {
                var cities = data.cities;
                var $citiesDropdown = $("#recycle_center_city");
                $.each(cities, function(key, value) {
                    $citiesDropdown.append($("<option />").val(key).text(value));
                });
            }
        });
    }));

    $("#material_materials_ids").selectize({
        maxItems: null,
        persist: false,
        placeholder: 'Select one or more materials'
    });

    $('#list').on('click', function(event){
        event.preventDefault();
        $('#products .item').addClass('list-group-item');
        $('.thumbnail.card').addClass('col-md-12');
    });

    $('#grid').on('click', function(event){
        event.preventDefault();
        $('#products .item').removeClass('list-group-item');
        $('.thumbnail.card').removeClass('col-md-12');
        $('#products .item').addClass('grid-group-item');
    });

    $("#save_recycle_center").on("click", function(e){
        e.preventDefault();
        var name = $("#recycle_center_name").val();
        var country = $("#recycle_center_country option:selected").text();
        var state = $("#recycle_center_state option:selected").text();
        var street = $("#recycle_center_street").val();
        var city = $("#recycle_center_city option:selected").text();

        $.ajax({
            url: "/admin/recycle_centers",
            type: 'POST',
            data: {recycle_center: 
                {
                    name: name, 
                    country: country, 
                    state: state, 
                    city: city, 
                    street: street
                }
            },
            success: function(data) {
                location.reload();
            },
        });
    });
});
