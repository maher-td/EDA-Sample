
//================ User Profile Active Tab ================ //

function changeUrlParams(paramValue) {
  let queryParams = new URLSearchParams(window.location.search);
  queryParams.delete("sec");
  queryParams.set("sec", paramValue);
  history.replaceState(null, null, "?" + queryParams.toString());
}

let allTabsItems = document.querySelectorAll('.user-profile .tab-item');
let allContentItems = document.querySelectorAll('.user-profile .tab-pane');

function activeTab() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const sec = urlParams.get('sec');
  allTabsItems.forEach((tabItem) => {
    tabItem.classList.remove('active');
    if (tabItem.getAttribute('data-id') == sec) {
      tabItem.classList.add('active');
      allContentItems.forEach((contentItem) => {
        if (tabItem.getAttribute('data-id') == contentItem.getAttribute('data-id')) {
          contentItem.classList.add('active');
          contentItem.classList.add('show');
        }
      });
    }
  });
}

activeTab();

//================ User Profile Active Tab ================ //


//================ User Profile Tab Scroll on Mobile ================ //

let allTabsItemsScroll = document.querySelectorAll('.user-profile .tab-item');

if (window.innerWidth < 768) {
  for (let item of allTabsItemsScroll) {
    item.addEventListener("click", function() {
      $("body,html").animate({ scrollTop: 430 }, 500);
    });
  }
}

//================ User Profile Tab Scroll on Mobile ================ //


//================ IE Disclaimer functionality ================ //

var userAgent = window.navigator.userAgent;
var msie = userAgent.indexOf("MSIE ");

if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    document.querySelector(".ie-disclaimer").classList.add('ie-disclaimer--show');
}
document.querySelector(".ie-disclaimer a").addEventListener("click", function () {
    document.querySelector(".ie-disclaimer").classList.remove('ie-disclaimer--show');
});
document.querySelector(".ie-disclaimer i").addEventListener("click", function () {
    document.querySelector(".ie-disclaimer").classList.remove('ie-disclaimer--show');
});
//================ IE Disclaimer functionality ================ //


// News Letter 

let subscriptionValue = document.getElementById('newsLetterSubscription');
let formSelector = document.querySelector('.register .row');
let successMessage = document.getElementById('news-success-message');
let failedMessage = document.getElementById('news-failed-message'); 
let fieldRequired = document.getElementById('news-letter-required');
let fieldError = document.getElementById('news-letter-error');

let emailRegex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,4})+$/;
let formResult = false;

let baseUrl = document.location.origin;
let apiUrl = baseUrl + "";

function validate(field, regex) {
  if (regex.test(field.value)) {
    subscriptionValue.classList.add("success-value");
    field.classList.remove("error-value");
    fieldRequired.style.display = "none";
    fieldError.style.display = "none";
    formResult = true;
  } else {
    subscriptionValue.classList.add("error-value");
    field.classList.remove("success-value");
    if (subscriptionValue.value == "") {
      fieldRequired.style.display = "inline-block";
      fieldError.style.display = "none";
    } else {
      fieldRequired.style.display = "none";
      fieldError.style.display = "inline-block";
    }
    formResult = false;
  }
}

subscriptionValue.addEventListener("keyup", e => {
    validate(e.target, emailRegex);
});

function subscribeNewsLetter() {
  if (subscriptionValue.value == "") {
    fieldRequired.style.display = "inline-block";
  } else {
    fieldRequired.style.display = "none";
  }

  if (formResult == true) {
    fetch(`${apiUrl}/api/newsletter/submit?email=${subscriptionValue.value}`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data == true) {
          formSelector.style.display = "none";
          successMessage.style.display = "block";
          failedMessage.style.display = "none";
        } else {
          failedMessage.style.display = "block";
        }
      });
  };
};


// Navbar mobile
const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarIcon = document.querySelector('.navbar-icon');

navbarToggler.addEventListener("click", () => {
    if (navbar.classList.contains('navbar-opened')) {
        navbar.classList.remove('navbar-opened');
        navbarIcon.classList.add('icon-burger-menu');
        navbarIcon.classList.remove('icon-close-menu');
    } else {
        navbar.classList.add('navbar-opened');
        navbarIcon.classList.remove('icon-burger-menu');
        navbarIcon.classList.add('icon-close-menu');
    }
});

// navbar search
const searchLabel = document.querySelector('.search-label');
const navbarSearchIcon = document.querySelector('.navbar-search-icon');
const navbarSearchImg = document.querySelector('.navbar-search-img');
const navbarSearchField = document.querySelector('.navbar__search-field');

searchLabel.addEventListener("click", () => {
    if (searchLabel.classList.contains('active-label')) {
        searchLabel.classList.remove('active-label');
        navbarSearchIcon.classList.add('icon-search');
        navbarSearchImg.classList.remove('show-close-img');
        navbarSearchField.classList.remove('navbar-search-show');
    } else {
        searchLabel.classList.add('active-label');
        navbarSearchIcon.classList.remove('icon-search');
        navbarSearchImg.classList.add('show-close-img');
        navbarSearchField.classList.add('navbar-search-show');
    }
})

// change contrast

let contrast = document.querySelectorAll('.header-invert-color');
let html = document.querySelector('html');

contrast.forEach((item) => {
    item.addEventListener("click", () => {
        if (html.classList.contains('contrast')) {
            html.classList.remove('contrast');
        } else {
            html.classList.add('contrast');
        }
    })
})


// footer
if (window.innerWidth < 768) {
    let footerItems = document.getElementsByClassName('toggle-item');
    let footerItemsList = document.getElementsByClassName('multi-collapse');
    for (let i = 0; i < footerItems.length; i++) {
        footerItems[i].classList.add('collapsed');
    }
    for (let i = 0; i < footerItemsList.length; i++) {
        footerItemsList[i].classList.remove('show');
    }
}

//================ Font resize and Contrast Cookie ================ //

let root = document.documentElement;

const fontUp = document.querySelectorAll('.font-up');
const fontDown = document.querySelectorAll('.font-down');
const fontReset = document.querySelectorAll('.reset-font');
const changeContrast = document.querySelectorAll('.header-invert-color');

let result = getComputedStyle(document.documentElement).getPropertyValue('--a');
let getSplitCookie;
let fontCookieIndex;
let getFontPercentageString;
let getFontPercentageInt;
let getCookieData = document.cookie;
let checkFontCookie = getSpecificCookie('fontPercentage');
let count;

function fontup() {
    root.style.setProperty('--a', result * 1.1);
    result = result * 1.1;
}

function fontdown() {
    root.style.setProperty('--a', result * 0.9);
    result = result * 0.9;
}

if (checkFontCookie != null) {
  getFontPercentageFunction();
  if (getFontPercentageInt > 100) {
    count = (getFontPercentageInt % 100) / 10;
    for (let x = 0; x < count; x++) {
      fontup();
    }
  } else if (getFontPercentageInt < 100) {
    count = (100 % getFontPercentageInt) / 10;
    for (let x = 0; x < count; x++) {
      fontdown();
    }
  }
} else {
  document.cookie = 'fontPercentage=100' + ';path=/';
  getFontPercentageFunction();
}

fontUp.forEach((item) => {
  item.addEventListener("click", e => {
        getCookieData = document.cookie;
        if (checkFontCookie == null) {
            document.cookie = 'fontPercentage=100' + ';path=/'; //cookieSet
        }

        if (getFontPercentageInt < 130) {
            fontup();
            document.cookie = 'fontPercentage= ' + (getFontPercentageInt + 10) + ';path=/'; //cookieSet
            getFontPercentageFunction();
        }
    });
});

fontDown.forEach((item) => {
    item.addEventListener("click", e => {
        getCookieData = document.cookie;
        if (checkFontCookie == null) {
            document.cookie = 'fontPercentage=100' + ';path=/';  //cookieSet
        }

        if (getFontPercentageInt > 70) {
            fontdown();
            document.cookie = 'fontPercentage= ' + (getFontPercentageInt - 10) + ';path=/';  //cookieSet
            getFontPercentageFunction();
        }
    });
});


fontReset.forEach((item) => {
    item.addEventListener("click", e => {
        root.style.setProperty('--a', 1);
        result = 1;

        getCookieData = document.cookie;
        document.cookie = 'fontPercentage=100' + ';path=/';  //cookieSet
        getFontPercentageFunction();
    });
});

changeContrast.forEach((item) => {
  item.addEventListener("click", e => {
    invertColorFunction();
  });
});

function getSpecificCookie(name) {
    let dc = document.cookie;
    let prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        return true;
    }
}

function findFontCookie(element) {
    if (element.includes('fontPercentage')) {
        if (element.split('=')[0].trim() === "fontPercentage") {
            return element.includes('fontPercentage');
        }
    }
}

function getFontPercentageFunction() {
    getCookieData = document.cookie;
    getSplitCookie = document.cookie.split(';');
    fontCookieIndex = getSplitCookie.findIndex(findFontCookie);
  if (getCookieData.includes('fontPercentage')) {
    getFontPercentageString = getSplitCookie[fontCookieIndex].split('=')[1];
    if (getFontPercentageString == "") {
      document.cookie = 'fontPercentage=100%' + ';path=/';
      getFontPercentageFunction();
    }
    getFontPercentageInt = parseInt(getFontPercentageString);
  }
    getCookieData = document.cookie;
}

let getDomCookies = document.cookie;

if (checkIfExactCookie('header-invert-cookies')) {
  if (selectedCookieIndex != "") {
    if (document.cookie.split(';')[selectedCookieIndex].split('=')[1].trim() == "true") {
      html.classList.add('contrast');
    }
    else {
      html.classList.remove('contrast');
    }
  }
}

function invertColorFunction() {
  console.log(true)
  getDomCookies = document.cookie;
  if (checkIfExactCookie('header-invert-cookies')) {
    if (selectedCookieIndex != "") {
      if (document.cookie.split(';')[selectedCookieIndex].split('=')[1].trim() == "true") {
        document.cookie = 'header-invert-cookies=false' + ';path=/';   
        html.classList.remove('contrast');
      }
      else {

        document.cookie = 'header-invert-cookies=true' + ';path=/';   
        html.classList.add('contrast');
      }
    }
  }
  else {
    document.cookie = 'header-invert-cookies=true' + ';path=/';  
    html.classList.add('contrast');  }
}


var selectedCookieIndex = "";
function checkIfExactCookie(cookieSelector) {
  var fullCookie = document.cookie;
  var numOfElementCookies = fullCookie.split(';').length;
  selectedCookieIndex = "";
  for (var x = 0; x < numOfElementCookies; x++) {
    if (fullCookie.split(';')[x].split('=').length > 1) {
      if (fullCookie.split(';')[x].split('=')[0].trim() === cookieSelector) {
        selectedCookieIndex = x;
        return true;
      }
    };
  }
  if (selectedCookieIndex == "") {
    return false;
  }
}

//================ Font resize and Contrast Cookie ================ //


//================ header search set submit url + set search value if in search page ================ //

var searchHeaderInputValue = "";
var newSearchValAfterTrimming = "";
document.querySelector(".navbar__search-field form").addEventListener("submit", function (e) {
    searchHeaderInputValue = e.target.querySelector("input").value;
    newSearchValAfterTrimming = searchHeaderInputValue.trimStart("").trimEnd("");
    submitHeaderSearch()
    e.preventDefault();
    return false;
});
document.querySelector(".search-mobile").addEventListener("submit", function (e) {
    searchHeaderInputValue = e.target.querySelector("input").value;
    newSearchValAfterTrimming = searchHeaderInputValue.trimStart("").trimEnd("");
    submitHeaderSearch();
    e.preventDefault();
    return false;
});
document.querySelector(".search-mobile input").addEventListener("keydown", function (e) {
    if (e.key == "#" || e.key == "&" || e.key == "%" || e.key == "+") {
        e.preventDefault();
        return false;
    }
});
document.querySelector(".navbar__search-field form input").addEventListener("keydown", function (e) {
    if (e.key == "#" || e.key == "&" || e.key == "%" || e.key == "+") {
        e.preventDefault();
        return false;
    }
});
document.querySelector(".search-mobile input").addEventListener("keydown", function (e) {
    if (e.key == "#" || e.key == "&" || e.key == "%" || e.key == "+") {
        e.preventDefault();
        return false;
    }
});
document.querySelector(".search-mobile input").addEventListener("paste", function (e) {
    var clipboardData = e.clipboardData || window.clipboardData;
    if (clipboardData.getData('Text').includes("+") || clipboardData.getData('Text').includes("%") || clipboardData.getData('Text').includes("&") || clipboardData.getData('Text').includes("#")) {
        console.log(clipboardData.getData('Text'));
        e.preventDefault();
        return false;
    }
});
document.querySelector(".navbar__search-field form input").addEventListener("paste", function (e) {
    var clipboardData = e.clipboardData || window.clipboardData;
    if (clipboardData.getData('Text').includes("+") || clipboardData.getData('Text').includes("%") || clipboardData.getData('Text').includes("&") || clipboardData.getData('Text').includes("#")) {
        console.log(clipboardData.getData('Text'));
        e.preventDefault();
        return false;
    }
});

function submitHeaderSearch() {
    if (searchHeaderInputValue.length < 3 || newSearchValAfterTrimming.length < 3) {
    } else {
        window.location.href = `${customSearchURl}?searchText=${searchHeaderInputValue}`;
    }
}
if (document.location.pathname.includes('/ContentSearch')) {
    var getSearchParams = new URLSearchParams(window.location.search);
    var searchText = getSearchParams.get('searchText');
    document.querySelector('.search-mobile input').value = searchText;
    document.querySelector('.navbar__search-field input').value = searchText;
}
//================ header search set submit url + set search value if in search page ================ //

//============================= generic script for form pages ===================================//






//============================= generic script for form pages ===================================//

