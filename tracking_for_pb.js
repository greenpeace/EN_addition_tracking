/*
Description
- to get utm tracking parameter from URL
- To check new or existing supporter using data api
- To put campaign ID , date time and utm tracking parameter into last_action for use in the future
- To put campaign ID , date time and utm tracking parameter into first_action If it is new supporter
- Checking process occure when fading from email field.
- Add date picker to date of birth field
- Add country/province selection and geoip function

To use
 - add variable en_token="xxxxxxxxxxxxx"; in your script block before call
 - edit 
 var last_action = '[name="supporter.questions.3884"]';
 var first_action = '[name="supporter.questions.3871"]';
 var is_new = '[name="supporter.questions.3881"]';
 - put your correct question ID in line 40-42

Once all set you can upload to EN library then use it again and again.
*/

document.writeln('<script src="//aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1827/jquery-1.11.3.min.js?v=1435983049000"></script>');
document.writeln('<script src="//aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1827/jquery-ui.1.12.0-min.js?v=1507690726000"></script>');
document.writeln('<link rel="stylesheet" href="//aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1827/jquery-ui.smoothness.css?v=1464770874000">');

var campaignid=pageJson['campaignId'];

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
// Give the URL parameters variable names
var source = ' ' + getParameterByName('utm_source');
var medium = ' ' + getParameterByName('utm_medium');
var campaign = ' ' + getParameterByName('utm_campaign');
var content = ' ' + getParameterByName('utm_term');
var debug = getParameterByName('debug');

var last_action = '[name="supporter.questions.3884"]';
var first_action = '[name="supporter.questions.3871"]';
var is_new = '[name="supporter.questions.3881"]';

var en_token="xxxxxxxxxxxxxxxxxxxxxxxxxx";
var d = new Date();
var n = d.toISOString(); 

function chkexist() {
  $.ajax({
    url: 'https://e-activist.com/ea-dataservice/data.service?service=SupporterData&token=' + en_token + '&contentType=json&email=' + encodeURIComponent($("#en__field_supporter_emailAddress").val()),
    dataType: "jsonp",
    success: function(data) {
      var json_obj = data;
      var is_exist = json_obj.rows[0].columns[2].value;

      if (is_exist === 'N') {
        $(first_action).val(campaignid + ' ' + n + source + medium + campaign + content);
        $(is_new).val('Y');
        $(last_action).val(campaignid + ' ' + n + source + medium + campaign + content);
      } else {
        $(first_action).val('');
        $(is_new).val('N');
        $(last_action).val(campaignid + ' ' + n + source + medium + campaign + content);
      }
    }
  });
}

function get_country(){
    var url='https://gpsea.space/Tools/world_province_2/index_c.php' ;
	$.ajax({
  		url:  url,
  		dataType: 'jsonp',
  		success: function (data) {
  			// add option list to country field
  			$("#en__field_supporter_country" ).empty();
  			$("#en__field_supporter_country" ).append(data['list']);
  			$("#en__field_supporter_region" ).empty();
  			$("#en__field_supporter_region" ).append(data['province']);
  			}  
		});
}
function getprovince(c_id){
	var url='https://gpsea.space/Tools/world_province_2/province.php?m=province&country_code='+c_id ;
	$.ajax({
  		url:  url,
  		dataType: 'jsonp',
  		success: function (data) {
  			$("#en__field_supporter_region" ).empty();
			$("#en__field_supporter_region" ).append(data['province']);
  			}  
		});
	}

$(document).ready(function() {
	get_country();
	$(is_new).attr("placeholder", "OFFICE USE ONLY: DO NOT fill this out").css("display", "none");
	$(first_action).attr("placeholder", "OFFICE USE ONLY: DO NOT fill this out").css("display", "none");
	$(last_action).attr("placeholder", "OFFICE USE ONLY: DO NOT fill this out").css("display", "none");
	$("#en__field_supporter_emailAddress").on("change keyup blur input", function() {
		chkexist();
		});
	$('#en__field_supporter_country').on('change', function() {
		var select_country=$('#en__field_supporter_country').val();
		getprovince(select_country);
		});
	$( "#en__field_supporter_dateOfBirth" ).datepicker({
	changeMonth: true,
	changeYear: true,
	dateFormat: 'yy-mm-dd',
	yearRange: "-100:+0"
	});
});






