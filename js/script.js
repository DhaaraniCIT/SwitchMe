$(document).ready(function() {
    $(".d-2").hide();
    $(".C-2").hide();
    $(".C-3").hide();
    $(".C-4").hide();
    $(".C-5").hide();
    $(".C-6").hide();
    $(".C-7").hide();
    $(".C-8").hide();
    var i=1;
    var j=1;
    $("#previous").click(function() {
        if(i==1){
            $(".d-2").show("slow");
            $(".d-1").hide("slow");
            i=i+1;
        }
        else{
            $(".d-1").show("slow");
            $(".d-2").hide("slow");
            i=i-1
        }
    })
    $("#next").click(function() {
        if(i==1){
            $(".d-2").show("slow");
            $(".d-1").hide("slow");
            i=i-1;
        }
        else{
            $(".d-1").show("slow");
            $(".d-2").hide("slow");
            i=i+1
        }
    })
    $("#mprevious").click(function() {
        if(j==1){
            j=8;
            $(".C-"+j).show("slow");
        }
        else
            j=j-1;
            $(".C-"+j).show("slow");
        
        for(let k=1;k<=8;k++){
            if(k!=j){
                $(".C-"+k).hide("slow");
            }
        }
    });
    $("#mnext").click(function() {
        if(j==8){
            j=1;
            $(".C-"+j).show("slow");
        }
        else
            j=j+1;
            $(".C-"+j).show("slow");
        
        for(let k=1;k<=8;k++){
            if(k!=j){
                $(".C-"+k).hide("slow");
            }
        }
    });
});