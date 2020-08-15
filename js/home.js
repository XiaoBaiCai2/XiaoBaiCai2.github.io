
$(".ly-box01").click(function () {
    xiajiang($(".ly-box01"),15,'top1');
    xiajiang($(".ly-stxt01"),15,'text1');
    xiajiang($(".ly-stxt02"),15,'text2');
    xiajiang($(".ly-stxt03"),15,'text1');
    xiajiang($(".ly-stxt04"),15,'text2');
    xiajiang($(".ly-stxt05"),15,'text1');
    xiajiang($(".ly-stxt06"),15,'text2');
    xiajiang($(".ly-stxt07"),15,'text1');
    xiajiang($(".ly-stxt08"),15,'text2');
    xiajiang($(".ly-stxt09"),15,'text1');

});

$(".ly-box02").click(function () {
    xiajiang($(".ly-box02"),10,'top2');
    xiajiang($(".ly-box02>.img1"),10,'img1');
    xiajiang($(".ly-box02>.img2"),10,'img1');
});
$(".ly-box03").click(function () {
    xiajiang($(".ly-box03"),10,'top3');
    xiajiang($(".ly-box03>.img1"),10,'img1');
    xiajiang($(".ly-box03>.img2"),10,'img1');
});
$(".ly-box04").click(function () {
    xiajiang($(".ly-box04"),10,'top4');
    xiajiang($(".ly-box04>.img1"),10,'img1');
    xiajiang($(".ly-box04>.img2"),10,'img1');
});

function  xiajiang(obj,num,css) {

    obj.css({animation:css+" "+num+'s'});
    setTimeout(function(){
        obj.css({animation:'none'});
        flag=true;
    },num*1000);
}




