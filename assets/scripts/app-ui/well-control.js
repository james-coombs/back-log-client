'use strict';

const wellControlHandler = function() {
  $('.well-toggle').on('click', function() {
    $('.well').closest(".accordion")
        .find(".collapse.in")
        .not(this)
        .collapse('toggle')
  })
}

module.exports = {
  wellControlHandler
}
