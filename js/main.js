$(".header__burgir").click(function(){
    $(this).toggleClass("active");
    $(".mobile_menu").toggleClass("active");
    $("body").toggleClass("hidden");
});
if(document.querySelector(".header__help")) {
    $(".header__help").click(function(){
        $("#modal-1").addClass("active");
        $("body").addClass("hidden");
        $(".modal__close").click(function() {
            $("#modal-1").removeClass("active");
            $("body").removeClass("hidden");
        });
    });
}
if(document.querySelector(".article__left .btn")) {
    $(".article__left .btn").click(function(){
        $("#modal-2").addClass("active");
        $("body").addClass("hidden");
        $(".modal__close").click(function() {
            $("#modal-2").removeClass("active");
            $("body").removeClass("hidden");
        });
    });
};
if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
}
$(".header__language .btn").click(function(){
    $(this).toggleClass("active");
});
$(".header__phone .btn").click(function(){
    $(this).toggleClass("active");
});
$(".footer__phone .btn").click(function(){
    $(this).toggleClass("active");
});
$(".bottom_ul .li").click(function(){
    $(this).toggleClass("open");
});

if(document.querySelector(".help__tab")) {
    // Tab
    function tabFun(num) {
        if(document.querySelector("#tab-btn-" + num)) {
            $("#tab-btn-" + num).click(function() {
                $(".tab-btn-all").removeClass("active");
                $(".tab-block-all").removeClass("active");
                $(this).addClass("active");
                $("#tab-block-" + num).addClass("active");
            });
        };
    };
    tabFun("1");
    tabFun("2");
    tabFun("3");
    tabFun("4");
    tabFun("5");
    tabFun("6");
    tabFun("7");
    tabFun("8");
    tabFun("9");
    tabFun("10");
}
if(document.querySelector(".help_page__wrap")) {
    $(".help_page__wrap .btn").click(function() {
        $("#modal-3").addClass("active");
        $("body").addClass("hidden");
        $(".modal__close").click(function() {
            $("#modal-3").removeClass("active");
            $("body").removeClass("hidden");
        });
    });
};
