$(function() {
    $(".edit_material").on("click", function(e){
        e.preventDefault();
        // alert("Clicked");
        $("#material_modal_update").modal("show");
        // debugger;
        $("#material_id").val(JSON.parse($(this).attr('data-material')).id);
        $("#material_name_update").val(JSON.parse($(this).attr('data-material')).name);
        $("#material_description_update").val(JSON.parse($(this).attr('data-material')).description);
        $("#category_id").val(JSON.parse($(this).attr('data-material')).category_id);
        $("#category_id_update").val($("#category_id").val());
    });

    // $('#category_modal_update').on('shown.bs.modal', function () {
    //     $("#category_title_update").val = "scsdcsd";
    //     $("#category_description_update").val = "AAAAA";
    // })

    $("#update_material_btn").on("click", function(){
        var materialId = $("#material_id").val();
        var name = $("#material_name_update").val();
        var description = $("#material_description_update").val();
        // var url = $(this).data('url');
        var categoryId = $("#category_id_update").val();
        $.ajax({
            url: "/admin/materials/"+materialId,
            type: 'PATCH',
            data: {material: {id: materialId, name: name, description: description, category_id: categoryId}},
            success: function(data) {
                location.reload();
                // alert("Hello world");
            },
        });
    });
});
