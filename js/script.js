$(".icon-phone").click(function () {
  $(".text-phone").toggleClass("highlight");
});

$(".icon-adres").click(function () {
  $(".text-adres").toggleClass("highlight");
});

$("li.drop").click(function(){
  $(this).toggleClass('open');
});
