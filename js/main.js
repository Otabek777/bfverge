$(".header__burgir").click(function(){
    $(this).toggleClass("active");
    $(".mobile_menu").toggleClass("active");
});
if(document.querySelector(".header__help")) {
    $(".header__help").click(function(){
        $("#modal-1").addClass("active");
        $(".modal__close").click(function() {
            $("#modal-1").removeClass("active");
        });
    });
}
if(document.querySelector(".article__left .btn")) {
    $(".article__left .btn").click(function(){
        $("#modal-2").addClass("active");
        $(".modal__close").click(function() {
            $("#modal-2").removeClass("active");
        });
    });
};

