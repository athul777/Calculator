$(document).ready(function () {
    var numStr = '';
    var totalString = '';
    var equalPress = false;
    var operatorBool = false;
    $('.number-button').click(function () {
        operatorBool = false;
        if (!equalPress) {
            numStr = numStr + $(this).text();
            totalString += $(this).text();
            $('#number-text').html(numStr);
        } else {
            numStr = '';
            totalString = '';
            numStr += $(this).text();
            totalString += $(this).text();
            $('#number-text').html(numStr);
            equalPress = false;
        }  
    });
    $('.operator-button').click(function () {
        equalPress = false;
        if (operatorBool === false) {
            totalString = totalString + $(this).text();
            numStr = '';
            operatorBool = true;
        }
        
    });
    $('.clear-button').click(function () {
        operatorBool = false;
        numStr = '';
        totalString = '';
        $('#number-text').html(totalString);
    });
    $('.equal-button').click(function () {
        equalPress = true;
        operatorBool = false;
        var finalResult = eval(totalString);
        totalString = finalResult;
        numStr = finalResult;
        if (finalResult % 1 !== 0) {
            $('#number-text').html(finalResult.toFixed(3));
        } else {
            $('#number-text').html(finalResult);
        }
    });
});