// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "bootstrap";
import "../stylesheets/application" 

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})


require("selectize")
require("selectize/dist/css/selectize")
require("selectize/dist/js/selectize")


require("packs/category")
require("packs/material")
require("packs/recycle_center")

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});


function footerAlign() {
  $('footer.container').css('display', 'block');
  $('footer.container').css('height', 'auto');
  var footerHeight = $('footer.container').outerHeight();
  $('body').css('padding-bottom', footerHeight);
  $('footer.container').css('height', footerHeight);
}

$(function() {
  footerAlign();
});

$( window).on('resize', function() {
  footerAlign();
});
