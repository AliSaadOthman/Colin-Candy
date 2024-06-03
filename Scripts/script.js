// script.js
$(document).ready(function () {
  // Load the navbar
  $("#navbar").load("./Components/navbar.html", checkLanguage);
  // Load the footer
  $("#footer").load("./Components/footer.html", checkLanguage);

  $("#enButton").on("click", function () {
    setLanguage("en");
  });

  $("#arButton").on("click", function () {
    setLanguage("ar");
  });

  function checkLanguage() {
    // Check if the language preference is already stored in local storage
    var selectedLanguage = Cookies.get("selectedLanguage");

    // If no language preference is stored, default to English
    if (!selectedLanguage) {
      selectedLanguage = "en";
    }
    setLanguage(selectedLanguage);
  }

  function setLanguage(lang) {
    // Update the selected language in local storage
    Cookies.set("selectedLanguage", lang, { expires: 365 }); // Expires in 365 days

    $("html").attr("lang", lang);

    $("#languageDropdownButton").text(lang === "en" ? "English" : "Arabic");

    if (lang == "ar") {
      $("html").attr("dir", "rtl");
    } else {
      $("html").attr("dir", "ltr");
    }

    // Update the navigation links text using translations object
    updateText(lang);
  }

  function updateText(lang) {
    // Update the navigation links text using translations object
    $("#navHome").text(translations[lang].navHome);
    $("#navAbout").text(translations[lang].navAbout);
    $("#navProjects").text(translations[lang].navProjects);
    $("#navTeam").text(translations[lang].navTeam);
    $("#navTeamBoard").text(translations[lang].navTeamBoard);
    $("#navTeamStaff").text(translations[lang].navTeamStaff);
    $("#navContact").text(translations[lang].navContact);
    $("#navCareers").text(translations[lang].navCareers);

    $("#navHomeModal").text(translations[lang].navHome);
    $("#navAboutModal").text(translations[lang].navAbout);
    $("#navProjectsModal").text(translations[lang].navProjects);
    $("#navTeamModal").text(translations[lang].navTeam);
    $("#navTeamBoardModal").text(translations[lang].navTeamBoard);
    $("#navTeamStaffModal").text(translations[lang].navTeamStaff);
    $("#navContactModal").text(translations[lang].navContact);
    $("#navCareersModal").text(translations[lang].navCareers);

    // Footer
    $("#CopyrightText").text(translations[lang].CopyrightText);
    $("#SocialMediaCTA").text(translations[lang].SocialMediaCTA);

    // Home Page
    $("#HeroHeader").text(translations[lang].HeroHeader);
    $("#HeroParagraph").text(translations[lang].HeroParagraph);
    $("#ctabutton").text(translations[lang].ctabutton);

    // Team Page
    $("#teamMember1Name").text(translations[lang].teamMember1Name);
    $("#teamMember1Profession").text(translations[lang].teamMember1Profession);
    $("#teamMember2Name").text(translations[lang].teamMember2Name);
    $("#teamMember2Profession").text(translations[lang].teamMember2Profession);
    $("#teamMember3Name").text(translations[lang].teamMember3Name);
    $("#teamMember3Profession").text(translations[lang].teamMember3Profession);
    $("#teamMember4Name").text(translations[lang].teamMember4Name);
    $("#teamMember4Profession").text(translations[lang].teamMember4Profession);
  }
});
