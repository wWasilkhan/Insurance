// Preloader js
$(window).on("load", function () {
  "use strict";
  $(".preloader").fadeOut(0);
});

(function ($) {
  "use strict";

  // tab
  $(".tab-content")
    .find(".tab-pane")
    .each(function (idx, item) {
      var navTabs = $(this).closest(".code-tabs").find(".nav-tabs"),
        title = $(this).attr("title");
      navTabs.append(
        '<li class="nav-item"><a class="nav-link" href="#">' +
          title +
          "</a></li>"
      );
    });

  $(".code-tabs ul.nav-tabs").each(function () {
    $(this).find("li:first").addClass("active");
  });

  $(".code-tabs .tab-content").each(function () {
    $(this).find("div:first").addClass("active");
  });

  $(".nav-tabs a").click(function (e) {
    e.preventDefault();
    var tab = $(this).parent(),
      tabIndex = tab.index(),
      tabPanel = $(this).closest(".code-tabs"),
      tabPane = tabPanel.find(".tab-pane").eq(tabIndex);
    tabPanel.find(".active").removeClass("active");
    tab.addClass("active");
    tabPane.addClass("active");
  });

  // accordion-collapse
  $(".accordion-collapse").on("show.bs.collapse", function () {
    $(this).siblings(".accordion-header").addClass("active");
  });
  $(".accordion-collapse").on("hide.bs.collapse", function () {
    $(this).siblings(".accordion-header").removeClass("active");
  });

  //post slider
  $(".post-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    dots: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="prevArrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="nextArrow"><i class="fas fa-angle-right"></i></button>',
  });

  // videoPopupInit
  function videoPopupInit() {
    var $videoSrc;
    $(".video-play-btn").click(function () {
      $videoSrc = $(this).data("src");
    });
    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#showVideo").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });
    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#showVideo").attr("src", $videoSrc);
    });
  }
  videoPopupInit();

  // table of content
  new ScrollMenu("#TableOfContents a", {
    duration: 400,
    activeOffset: 40,
    scrollOffset: 10,
  });
})(jQuery);


// Car insurance

function calculatePremiumcar() {
  // Get values from form
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var carBrand = document.getElementById('carBrand').value;
  var modelName = document.getElementById('modelName').value;
  var manufacturingYear = parseInt(document.getElementById('manufacturingYear').value);
  var tracker = document.getElementById('tracker').value;
  var currentValue = parseFloat(document.getElementById('currentValue').value);

  // Sample premium calculation (replace this with your actual logic)
  var basePremium = 500;
  var manufacturingYearPremium = (new Date().getFullYear() - manufacturingYear) * 50;
  var trackerPremium = (tracker === 'yes') ? 100 : 0;
  var currentValuePremium = currentValue * 0.01;

  // Total premium calculation
  var totalPremium = basePremium + manufacturingYearPremium + trackerPremium + currentValuePremium;

  // Display the result
  document.getElementById('result').innerHTML = 
      '<p>Current Value: $' + currentValue.toFixed(2) + '</p>' +
    '<p><strong>Your premium is: $' + totalPremium.toFixed(2) + '</strong></p>';
}

// medical insurance
function showTab(tabName) {
  var tabs = document.getElementsByClassName('tab');
  for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
  }

  document.getElementById(tabName + 'Tab').style.display = 'block';
}

function calculatePremium(planType) {
  // Add your premium calculation logic here

  // Example calculation
  var totalPremium = 5000;  // Replace with your calculation
  var monthlyPremium = totalPremium / 12;

  document.getElementById('totalPremium').innerText = totalPremium;
  document.getElementById('monthlyPremium').innerText = monthlyPremium;

  document.getElementById('result').style.display = 'block';
}

// life insurance

function calculatePremiumlife() {
  // Retrieve values from form fields
  var policyTerm = parseInt(document.getElementById('policy_term').value);
  var monthlyIncome = parseFloat(document.getElementById('monthly_income').value);

  // Basic example of premium calculation logic
  var basePremiumRate = 0.02; // 2% of monthly income
  var additionalPremiumRate = 0.01; // 1% for each policy year

  var totalPremium = basePremiumRate * monthlyIncome * policyTerm;

  for (var year = 2; year <= policyTerm; year++) {
      totalPremium += additionalPremiumRate * monthlyIncome * year;
  }

  var monthlyPremium = totalPremium / (policyTerm * 12);

  // Display the result to the user
  document.getElementById('resultlife').innerHTML = 
  '<p>Total Premium: $' + totalPremium.toFixed(2) + '</p>' +
  '<p>Monthly Premium: $' + monthlyPremium.toFixed(2) + '</p>';
}

// home insurance
function calculatePremiumHome() {
  // Retrieve values from form fields
  var coverageType = document.getElementById('coverage').value;
  var buildingValue = parseFloat(document.getElementById('building_value').value);

  // Basic example of premium calculation logic
  var basePremiumRate = (coverageType === 'building') ? 0.02 : 0.015; // Adjust rates based on coverage type

  var totalPremium = basePremiumRate * buildingValue;

  var monthlyPremium = totalPremium / 12;

  // Display the result to the user
  document.getElementById('resulthome').innerHTML = '<p>Total Premium: $' + totalPremium.toFixed(2) + '</p>' +
                                                  '<p>Monthly Premium: $' + monthlyPremium.toFixed(2) + '</p>';
}