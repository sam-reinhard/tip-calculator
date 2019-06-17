$(document).ready(function(){
    $(".btn").on("click", function(e){
        e.preventDefault();
        $("#tip-result").empty();

        var billAmount = $("#bill-amount").val();
        var serviceQuality = $("#service-quality").val();
        var tipAmount;
        
        if (serviceQuality === "Poor"){
            tipAmount = billAmount * 0.1;

        } else if (serviceQuality === "Okay"){
            tipAmount = billAmount * 0.15

        } else if (serviceQuality === "Good"){
            tipAmount = billAmount * 0.2;

        } else if (serviceQuality === "Excellent"){
            tipAmount = billAmount * 0.25;

        }

        $("#tip-result").append("$" + tipAmount.toFixed(2));
    });
});