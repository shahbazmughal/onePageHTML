var slider = document.querySelector("#kt_slider_marketing");
var valueMax = document.querySelector("#db_email");
var valueMax2 = document.querySelector("#email-count");
var pkgMax = document.querySelector("#package_name");
var pkgMax2 = document.querySelector("#plan-name");
var priceMax = document.querySelector("#emails-price");
var priceMax2 = document.querySelector("#pricemain");
var priceMax3 = document.querySelector("#recurring_amount");
var priceMax4 = document.querySelector("#payament_model");

noUiSlider.create(slider, {
    start: [0, 2000],
    //tooltips: [false, wNumb({decimals: 1}), true],
    connect: true,
    step: 1000,
    range: {
        "min": 1000,
        "max": 10000
    },
    format: wNumb({
        //thousand: ',',
        decimals: 0,
        to: (v) => parseFloat(v).toFixed(0),
        from: (v) => parseFloat(v).toFixed(0)
    })
});

var package = ["10K", "20K", "30K", "40K", "50K", "60K", "70K", "80K", "90K", "100K"];

slider.noUiSlider.on("update", function (values, handle) {
    if (handle) {
        valueMax.innerHTML = values[handle] + " Email";
        valueMax2.innerHTML = values[handle] + " Email";
        price = values[handle]/100;
        priceMax.innerHTML = "$"+price;
        priceMax2.innerHTML = "$"+price;
        priceMax3.innerHTML = "$"+price;
        priceMax4.innerHTML = "$"+price+" USD";
        var index=values[handle]/1000;
        var index=index-1;
        pkgMax.innerHTML = package[index];
        pkgMax2.innerHTML = package[index];
    }
});




// var slider2 = document.querySelector("#kt_slider_marketing2");
// var valueMax2 = document.querySelector("#db_email2");
// var pkgMax2 = document.querySelector("#package_name2");


// noUiSlider.create(slider2, {
//   start: [0, 2],
//   //tooltips: [false, wNumb({decimals: 1}), true],
//   connect: true,
//   step: 2,
//   range: {
//       "min": 2,
//       "max": 8
//   },
//   format: wNumb({
//       //thousand: ',',
//       decimals: 0,
//       to: (v) => parseFloat(v).toFixed(0),
//       from: (v) => parseFloat(v).toFixed(0)
//   })
// });


// var package2 = ["Default Package", "Unlimited", "Warmup", "50k"];
// var values2 = [6000, 7000, 10000 , 50000];

// slider2.noUiSlider.on("update", function (values, handle) {
//     if (handle) {
//     var index1=values[handle]/2;
//     var index2=index1-1;
//     valueMax2.innerHTML = values2[index2] + " Email";
//     pkgMax2.innerHTML = package2[index2];
//     }
// });


// var slider3 = document.querySelector("#kt_slider_marketing3");
// var valueMax3 = document.querySelector("#db_email3");

// noUiSlider.create(slider3, {
//   start: [0, 500],
//   //tooltips: [false, wNumb({decimals: 1}), true],
//   connect: true,
//   step: 500,
//   range: {
//       "min": 500,
//       "max": 199500
//   },
//   format: wNumb({
//       //thousand: ',',
//       decimals: 0,
//       to: (v) => parseFloat(v).toFixed(0),
//       from: (v) => parseFloat(v).toFixed(0)
//   })
// });

// slider3.noUiSlider.on("update", function (values3, handle3) {
//   if (handle3) {
//     valueMax3.innerHTML = values3[handle3] + " Contacts";
//   }
// });


function sameAsBilling() {
  var fname = $("#first-name").val();
  var lname = $("#last-name").val();
  var address = $("#address").val();
  var city = $("#city").val();
  var state = $("#state").val();
  var postcode = $("#postcode").val();
  var phone = $("#phone").val();
  var country = $("#country").val();
  var ccode = $("#ccode").val();

  console.log(fname, lname, address, city, state, postcode, phone, country, ccode)

  //console.log(ccode + phone);

  $("#first-name2").val(fname);
  $("#last-name2").val(lname);
  $("#address2").val(address);
  $("#city2").val(city);
  $("#state2").val(state);
  $("#postcode2").val(postcode);
  //$("#phone2").val(phone);
  $("#country2").val(country);

  var pCode = $('#ccode').val();
  $("#ccode2").val(pCode);
  $("#phone2").intlTelInput("setNumber", "+" + pCode);

  var mobnum = $("#phone").val();

  setTimeout(function() {
    $("#phone2").val(mobnum);
    $("#phone2").intlTelInput({
      placeholderNumberType: "MOBILE",
      separateDialCode: true,
      utilsScript: 'js/utils.js',
      initialCountry: "+" + $('#ccode').val(),
    });

  }, 500);
  $("#ccode2").val(pCode);
  $("#phone2").on("countrychange", function(e, countryData) {
    $("#ccode2").val(countryData.dialCode);
  });
  $("#first-name2").attr("readonly", "readonly");
  $("#last-name2").attr("readonly", "readonly");
  $("#address2").attr("readonly", "readonly");
  $("#city2").attr("readonly", "readonly");
  $("#state2").attr("readonly", "readonly");
  $("#postcode2").attr("readonly", "readonly");
  $("#phone2").attr("readonly", "readonly");
  $("#country2").attr("readonly", "readonly");
  $("#country2").attr("disabled", true);
  $('#continue3').attr('disabled', false);
  $('#country2').select2().trigger('change');
  $("#select2-country2-container").css("background", "#eee");
}


$(document).ready(function() {

  $("#first-name").val(localStorage.getItem("fname"));
  $("#last-name").val(localStorage.getItem("lname"));
  $("#plan-name").text("Default Package");
  $("#payment_cycle").text("Recurring");
  $("#email-count").text("6000 Email");
  $("#emails-price").text("$0");
  $("#pricemain").text("$0");
  $("#recurring_amount").text("$0");
  $("#payament_model").text("$0.00 USD");

  if ($("#group_id_3").is(":checked")) {
      $("li#nav3, li#nav4, #card3, #card4").hide();
      $("li#nav3").prev("li").hide();
      $("li#nav4").prev("li").hide();
    } else {
      $("li#nav3, li#nav4, #card3, #card4").show();
      $("li#nav3").prev("li").show();
      $("li#nav4").prev("li").show();
    }
    $(".statsOpts").on("click", function() {
      if ($("#group_id_3").is(":checked")) {
        $("li#nav3, li#nav4, #card3, #card4").hide();
        $("li#nav3").prev("li").hide();
        $("li#nav4").prev("li").hide();
      } else {
        $("li#nav3, li#nav4, #card3, #card4").show();
        $("li#nav3").prev("li").show();
        $("li#nav4").prev("li").show();
      }
    });

  $("#group_id_1").click(function() {
    $("#product_slider_parent").hide();
    $("#marketing_slider_parent").show();
  });
  $("#group_id_2").click(function() {
    $("#product_slider_parent").show();
    $("#marketing_slider_parent").hide();
    $("#plan-name").text("20K");
    $("#payment_cycle").text("Monthly");
    $("#email-count").text("2000 Email");
    $("#emails-price").text("$20");
    $("#pricemain").text("$20");
    $("#recurring_amount").text("$20");
    $("#payament_model").text("$20.00 USD");
  });
  $("#group_id_3").click(function() {
    $("#product_slider_parent").hide();
    $("#marketing_slider_parent").hide();
    $("#plan-name").text("Default Package");
    $("#payment_cycle").text("Recurring");
    $("#email-count").text("6000 Email");
    $("#emails-price").text("$0");
    $("#pricemain").text("$0");
    $("#recurring_amount").text("$0");
    $("#payament_model").text("$0.00 USD");
  });

  $("#edit1").click(function() {
    $("#kt_accordion_1_body_1").addClass("show");
    $("#kt_accordion_1_body_2").removeClass("show");
    $("#card2").addClass("remain");
    $("#nav2>a").removeClass("active");
    $("#nav1>a").addClass("active");
  });

  $("#edit2").click(function() {
    $("#kt_accordion_1_body_2").addClass("show");
    $("#kt_accordion_1_body_3").removeClass("show");
    $("#card3").addClass("remain");
    $("#nav3>a").removeClass("active");
    $("#nav2>a").addClass("active");
  });

  $("#edit3").click(function() {
    $("#kt_accordion_1_body_3").addClass("show");
    $("#kt_accordion_1_body_4").removeClass("show");
    $("#card4").addClass("remain");
    $("#nav4>a").removeClass("active");
    $("#nav3>a").addClass("active");
  });

  $("#continue1").click(function() {
    $("#loading").show();
    setTimeout(function() {
      $("#kt_accordion_1_body_1").removeClass("show");
      $("#kt_accordion_1_body_2").addClass("show");
      $("#kt_accordion_1_header_1 button").addClass("collapsed");
      $("#kt_accordion_1_header_2 button").removeClass("collapsed");
      $("#card2").removeClass("remain");
      $("#nav2>a").addClass("active");
      $("#nav1>a").removeClass("active");
      $("#edit1").show();
      $("#loading").hide();
    }, 1000);
  });

  if ($("#order_id").val() > 0) {
    $('#kt_sign_up_submit').attr('disabled', false);
  } else {
    if ($("#firstname").val() == "" || $("#lastname").val() == "" || $("#address").val() == "" || $("#city").val() == "" || $("#state").val() == "" || $("#postcode").val() == "" || $("#country").val() == "" || $("#phone").val() == "") {
      $('#kt_sign_up_submit').attr('disabled', true);
    }
  }

  $('#phone').keyup(function() {
    if ($(this).val.length != 0) {
      $('#kt_sign_up_submit').attr('disabled', false);
      $('#same-billing').parent().removeClass("m-checkbox--disabled");
      $('#same-billing').removeAttr("disabled");
    } else {
      $('#kt_sign_up_submit').attr('disabled', true);
    }
  });

  var ccode = 92;
  var ccode2 = 92;

  $("#country").on("change", function() {
    console.log();
    var DialCodeid = $(this).val();
    ccode = $("#dialCode_" + DialCodeid).attr("data");
    $("#ccode").val(ccode);
    $("#phone").intlTelInput("setNumber", "+" + DialCodeid);
    if ($('#same-billing').is(":checked")) {
      $("#ccode2").val(ccode);
      $("#phone2").intlTelInput("setNumber", "+" + DialCodeid);
      $("#phone2").val($("#phone").val());
      //sameAsBilling();
    }
  });

  $("#phone").intlTelInput({
    placeholderNumberType: "MOBILE",
    separateDialCode: true,
    utilsScript: 'js/utils.js'
  });

  var mobnum = $("#phone").val();
  var codd = $('#ccode').val(ccode);
  $("#phone").intlTelInput("setNumber", "" + codd);
  $("#phone").val(mobnum);
  $("#phone").on("countrychange", function(e, countryData) {
    $("#ccode").val(countryData.dialCode);
  });

  $("#phone2").intlTelInput({
    placeholderNumberType: "MOBILE",
    separateDialCode: true,
    utilsScript: 'js/utils.js'
  });

  var mobnum2 = $("#phone2").val();
  var codd2 = $('#ccode2').val(ccode);
  $("#phone2").intlTelInput("setNumber", "" + codd2);
  $("#phone2").val(mobnum2);
  $("#phone2").on("countrychange", function(e, countryData) {
    $("#ccode2").val(countryData.dialCode);
  });

  $("#same-billing").click(function() {
    if ($(this).prop("checked") == true) {
      sameAsBilling();
    } else if ($(this).prop("checked") == false) {
      $("#first-name2").removeAttr("readonly");
      $("#last-name2").removeAttr("readonly");
      $("#address2").removeAttr("readonly");
      $("#city2").removeAttr("readonly");
      $("#state2").removeAttr("readonly");
      $("#postcode2").removeAttr("readonly");
      $("#phone2").removeAttr("readonly");
      $("#country2").removeAttr("readonly");
      $("#first-name2").val("");
      $("#last-name2").val("");
      $("#address2").val("");
      $("#city2").val("");
      $("#state2").val("");
      $("#postcode2").val("");
      $("#phone2").val("");
      $("#country2").val("");
      $("#continue3").attr('disabled', true);
      $("#country2").attr("disabled", false);
    }
  });

  $("#modal-cancel").click(function() {
    $("#order-status").modal("hide");
  });

    // Element to indecate
    var btn_paypal = document.querySelector("#btn_paypal");

    // Handle button click event
    btn_paypal.addEventListener("click", function() {
        // Activate indicator
        btn_paypal.setAttribute("data-kt-indicator", "on");

        // Disable indicator after 3 seconds
        setTimeout(function() {
          btn_paypal.removeAttribute("data-kt-indicator");
          window.location.href = 'https://www.paypal.com/us/signin'
        }, 3000);
    });



});











