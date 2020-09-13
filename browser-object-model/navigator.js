// History Object
document.write(
  "<br/>" +
    "############################# NAVIGATOR OBJECT ##########################" +
    "<br/>"
);

// check if cookies are enabled or disabled on browser
document.write(
  "<br/>" + "Cookies enabled: " + window.navigator.cookieEnabled + "<br/>"
);

// browser name, version, code
document.write("<br/>" + "Name: " + window.navigator.appName + "<br/>");
document.write("Version: " + window.navigator.appVersion + "<br/>");
document.write("Code Name: " + window.navigator.appCodeName + "<br/>");
document.write("Platform: " + window.navigator.platform + "<br/>");
document.write("Language: " + window.navigator.language + "<br/>");
document.write("Java Enabled: " + window.navigator.javaEnabled() + "<br/>");
