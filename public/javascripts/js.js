/**
 * Created by 24325 on 2017/10/26.
 */
$(function(){
    $.ajax({
        url:"http://localhost:3000/",
        type:"POST",
        data:{
            ues: $(".ues").val(),
            val: $(".val").val()
        },
        success:function(e){
            $(".btn").click(function(){
                $(".box").append("<div><h2>"+ e.name +"</h2><p>"+ e.hua +"</p></div>")
            })
        }
    })



})
