$(function(){
    $left=$(".left");
    $left.click(function(){
        $imgId=parseInt($(".contain").attr("id"));
        $imgId--;
        if($imgId==0){
            $imgId=9;

        }
        $images=$("#list li img");
        $images.each(function(){
            if($(this).attr("data-id")==$imgId){
                $(".contain").attr("src",$(this).attr("src")).attr("id",$imgId)
            }
        })
    })
})
$(function(){
    $right=$(".right");
    $right.click(function(){
        $imgId=parseInt($(".contain").attr("id"));
        $imgId++;
        if($imgId==1){
            $imgId=9;

        }
        $images=$("#list li img");
        $images.each(function(){
            if($(this).attr("data-id")==$imgId){
                $(".contain").attr("src",$(this).attr("src")).attr("id",$imgId)
            }
        })
    })
})

$images = $("#list li img");
$images.each(function(){
    $(this).click(function(){
        $(this).removeClass("active");
        $dataId=$(this).attr("data-id");
        $imgSrc=$(this).attr("src");
        $(".contain").attr("src",$imgSrc).attr("id",$dataId)
    })
})
setInterval(() => {
    $id=$(".contain").attr("id");
    $images=$("#list li img");
    $images.each(function(){
        if($(this).attr("data-id")==$id){
            $("contain").attr("src",$(this).attr("src")).attr("id",$imgId)
        }
    })
    
}, 500);

