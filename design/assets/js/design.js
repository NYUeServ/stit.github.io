// FORM JS

$('#newsletter-form').on('submit',function(){

  // action URL from the Google Form you created + "?" at the end
  var baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSef1to3YH0WMCT_ife0b-tPXyyBe5ssheMIy1hHtfPhAa2pwg/formResponse?";
  var submitRef = "&submit=Submit";

  // value from the html form
  var name = encodeURIComponent($('#name').val());
  // "name" or "id" attribute of the value on the Google Form (sarts with "entry.")
  var nameID = "entry.1358083103";

  var email = encodeURIComponent($('#email').val());
  var emailID = "entry.1922479322";

  // concatenate the url we will submit the form to Google Spreadsheet
  var submitURL = (baseURL + nameID + "=" + name + "&" + emailID + "=" + email + submitRef);

  console.log(submitURL);

  $(this)[0].action=submitURL;
  document.getElementById("confirmation").style.display = "inline-block";
  document.getElementById('newsletter-header').style.display = "none";
  document.getElementById('newsletterp').style.display = "none";
  document.getElementById('newsletter-form').style.display = "none";
});

// FORM JS END
