/*
Instructions:

Write a program that prints the numbers from 1 to 100. For multiples of three print 'Sky' instead of the number and for the multiples of five print 'Verge'. For numbers which are multiples of both three and five print 'SkyVerge'.

*/
$(document).ready(function() {
    // write your code here
    var answer = '';
    for(i = 1; i < 100; i++){
        if (i % 3 === 0) {
          answer += "Sky";
        }
        if (i % 5 === 0) {
          answer += "Verge";
        }
        if (i % 3 === 0 && i % 5 === 0) {
          answer == "SkyVerge"
        }
       if (i % 3 != 0 && i % 5 != 0) {
          answer += i;
       }
        answer += "<br>";
    }
    $("#content").html(answer);
});
