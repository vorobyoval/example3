$('.service_list').hide();

$('.our_services .service_name').click(function(){
    var $showList=$(this).next('.service_list');
   $showList.slideToggle(300);
});//click end