'use strict';

$('.collapse-well').on('show.bs.collapse', function () {
    $(this).closest("#accordion")
        .find(".collapse.in")
        .not(this)
        .collapse('toggle')
})
// $(document).ready(function () {
//     var $answers = $('.answer');
//     $(".member").click(function () {
//         var $ans = $(this).next(".answer").stop(true).slideToggle(100);
//         $answers.not($ans).filter(':visible').stop(true).slideUp();
//     })
// });


// $(document).ready(function () {
// const wellControl = function() {
//   console.log('well');
//     const $wells = $('.well');
//     $(".well-toggle").click(function() {
//         const $wel = $(this).next(".well").stop(true).slideToggle(100);
//         $wells.not($wel).filter(':visible').stop(true).slideUp();
//     })
// }
//
// const wellControlHandler = function() {
//   wellControl();
// }
//
// module.exports = {
//   wellControlHandler
// }
