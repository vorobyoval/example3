
$('.service_list').hide();

$('.our_services .service_name').click(function () {
    var $showList = $(this).next('.service_list');
    $showList.slideToggle(300);
});//click end
//call form and dark background
$(function () {
    $('.order_call a').click(function (event) { //нажатие на кнопку заказать звонок
        event.preventDefault();
        $('.overlay').fadeIn(400, function () { //появляется плавно подложка

            $('.call_order').css({
                "display": "flex"
            })//конец добавления свойств видимости в цсс
                .animate({
                    opacity: 1, top: '50%'
                }, 200);
        }) //плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    }); //конец function fadeIn для подложки
    $('.exit, .overlay').click(function () {
        $('.call_order').animate({
                opacity: 0, top: '45%'
            }, 200, // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
            function () {
                console.log(".exit process");
                $(this).css({"display": "none"});
                $('.overlay').fadeOut(400);
            })//конец animate
    }) //конец функции по обратному процессу закрытия формы заказа звонка после щелчка по крестику или темной подложк
});

