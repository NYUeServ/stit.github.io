$('#contact-form').on('submit',function(){

  // action URL from the Google Form you created + "?" at the end
  var baseURL = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdHd94KGqH0cEXXqUAh9mypn4T-xbjYzWditRRhTHj2-33vBg/formResponse?";
  var submitRef = "&submit=Submit";

  // value from the html form
  var name = encodeURIComponent($('#name').val());
  // "name" or "id" attribute of the value on the Google Form
  var nameID = "entry.1547419328";

  var email = encodeURIComponent($('#email').val());
  var emailID = "entry.1586305847";

  var subject = encodeURIComponent($('#subject').val());
  var subjectID = "entry.1108606487";

  var message = encodeURIComponent($('#message').val());
  var messageID = "entry.1859222143";

  // concatenate the url we will submit the form to Google Spreadsheet
  var submitURL = (baseURL + nameID + "=" + name + "&" + emailID + "=" + email + "&" + subjectID + "=" + subject + "&" + messageID + "=" + message + submitRef);

  console.log(submitURL);

  $(this)[0].action=submitURL;
  document.getElementById("confirmation").style.display = "inline-block";
  document.getElementById('contact-header').style.display = "none";
  document.getElementById('contact-info').style.display = "none";
  document.getElementById('contact-form').style.display = "none";
});
