$(document).ready(function(){
    $('#search-filters-icon').click(function(){
        $(".filter-column").slideToggle("fast");
    });

    $("input:checkbox").click(function(){
        let $box=$(this);

        if($box.is(':checked')){
            var group="input:checkbox[name='"+$box.attr('name')+"']";
            $(group).prop("checked",false);
            $box.prop("checked",true);
        }
    })
});