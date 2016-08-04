
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
// Give the URL parameters variable names
var source = ' '+getParameterByName('utm_source');
var medium = ' '+getParameterByName('utm_medium');
var campaign = ' '+getParameterByName('utm_campaign');
var content = ' '+getParameterByName('utm_content');

function chkexist(){
var d = new Date();
var n = d.toISOString(); 
	// Put your public token on next line
	var en_token='ae10da26-53aa-461d-a7c6-99e60cdf12b6';
	// PUT your field name which you want to record their first action on next line
	var first='first_action';
	var is_new='is_new';
	var last_action='last_action';
	$.ajax({
  		url: 'https://e-activist.com/ea-dataservice/data.service?service=SupporterData&token='+en_token+'&contentType=json&email='+encodeURIComponent($("#email").val()),
  		dataType: "jsonp",
  		success: function (data) {
			var json_obj = data; 
			var is_exist=json_obj.rows[0].columns[2].value;  
			
			if (is_exist==='N'){
				$('#'+first).val($('input[name="ea.campaign.id"]').val()+' '+n+source+medium+campaign+content);
				$('#'+is_new).val('Y');
				$('#'+last_action).val($('input[name="ea.campaign.id"]').val()+' '+n+source+medium+campaign+content);
				}
			else {
				$('#'+first).val('');
				$('#'+is_new).val('N');
				$('#'+last_action).val($('input[name="ea.campaign.id"]').val()+' '+n+source+medium+campaign+content);
				}
  			}
		});
	}
