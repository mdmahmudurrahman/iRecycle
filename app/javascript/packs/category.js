$(function() {
    $(".edit_category").on("click", function(e){
        e.preventDefault();
        // alert("Clicked");
        $("#category_modal_update").modal("show");
        // debugger;
        $("#category_id").val(JSON.parse($(this).attr('data-category')).id);
        $("#category_title_update").val(JSON.parse($(this).attr('data-category')).title);
        $("#category_description_update").val(JSON.parse($(this).attr('data-category')).description);
    });

    // $('#category_modal_update').on('shown.bs.modal', function () {
    //     $("#category_title_update").val = "scsdcsd";
    //     $("#category_description_update").val = "AAAAA";
    // })

    $("#update_category_btn").on("click", function(){
        var categoryId = $("#category_id").val();
        var title = $("#category_title_update").val();
        var description = $("#category_description_update").val();
        // var url = $(this).data('url');

        $.ajax({
            url: "/admin/categories/"+categoryId,
            type: 'PATCH',
            data: {category: {id: categoryId, title: title, description: description}},
            success: function(data) {
                location.reload();
                // alert("Hello world");
            },
        });
    });
});
