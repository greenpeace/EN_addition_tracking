# EN_addition_tracking

The main purpose of this script is to track whether supporters are new or already exist in an Engaging Networks database and tag the supporter record with campaign IDs for the user’s first (if new) and most recent action, along with other tracking parameters.

Idea objective of this concept is to. Identify new vs existing supporters before submit information to EN These record able to use for identify how they came into the system, what petition , what channel and when ,also with utm tracking parameter. When they start 2nd action. This script will mark them as existing, override their last action value.

# 3 values are recorded to a supporter’s record:
```
Is_new (Y | N)
First_action (campaignid date-time utm_source utm_medium utm_campaign utm_content (option) )
last_action (campaignid date-time utm_source utm_medium utm_campaign utm_content (option) )
```
```
Sample data in first_action and last_action: 
53761 2016-07-20T05:53:05.418Z pet1 email plastic recycle
```
# To record these, you can create new supporter fields or use questions.

If you use a supporter field, you’ll be able to view these values in standard supporter data exports, but you will not able to retrieve them via the API. If you choose to use questions, they are easily retrieved via the API but will require the use of hybrid or transactional formats to view the values in exports. 

I recommend using questions in order to use the API connection between EN and an external platform. It’s your choice.

# Additional functionality
In addition to this, the script also includes functions to set province/state and country values in a form based on geo-IP and  
The following functions appear in this script.
- function getParameterByName(name)
- function chkexist()
- function get_country()
- function getprovince(c_id)
- $(document).ready(function()

**function getParameterByName(name)**
This function use for parse page url for utm tracking parameter. These parameter will be included in data store in first_action and last_action.

**function chkexist()**
Is main function to check if email address is already exist in EN and put correct information into is_new , first_action and last_action. Mainly it will create ajax call to EN service "SupporterData" with email address as parameter to see if it is already in EN database. If it is already exist then the first_action will be blank and is_new will be "n". Otherwise it will put this page detail into first_action too.

**function get_country()**
Will send supporter ip address to external server(maintain by greenpeace) to determine country/region of supporter and return back option list of country/region.

**function getprovince(c_id)**
This is to call when there is change in country field. eg: select other country than what geoip give. It will get new list of region and replace in region field.

**$(document).ready(function()**
This one is main function to process all of above. You can customize here. It is also attach jqueryui.datepicker to date of birth field. Make it easier for supporter to choose their DOB.

# To add to your page.
- Get script from https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1827/common_2.js?v=1508220947000
- Add 3 questions , is_new , first_action , last_action in your page and hide them with css.
- Get the field names for the questions from source code
- Replace the field names on lines 41-43 in common_2.js on. (change numbers)
```
var last_action = '[name="supporter.questions.3884"]';
var first_action = '[name="supporter.questions.3871"]';
var is_new = '[name="supporter.questions.3881"]';
```
- replace en_token="xxxxxxxxxxxxxxxxxxxxxx"; on line 45 with your public token
- Upload js file to your EN library
- add it to your html template. like <script src="//yourScriptAddressHere"></script>

If you will use country and region in your page, you also need to add these fields to your form using the "select" field type with blank option.

All are set and ready.

Updated script for page builder: This script was originally built for Engaging Network’s legacy campaign builder, which will be phased out in 2018. As such, the script is now updated for “Page Builder” the new way of creating campaigns in EN. It is a bit more user friendly but has required some changes in approach to script programming. Unique IDs for form fields are now found in the name attribute, while questions no longer have unique IDs.

You can get detailed list on 3 new question using demo code from https://github.com/noomkrub/EN_question_extract.
