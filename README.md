# EN_addition_tracking
Idea objective of this concept is to.
Identify new vs existing supporters before submit information to EN 
These record able to use for identify how they came into the system, what petition , what channel and when ,also with utm tracking parameter.
When they start 2nd action. This script will mark them as existing, override their last action value. 

# Basically there are 3 data recorded.
- Is_new  (Y | N)
- First_action    (campaignid date-time utm_source utm_medium utm_campaign utm_content (option) )
- last_action    (campaignid date-time utm_source utm_medium utm_campaign utm_content (option) ) 

## You can create with new default supporter field or use question.
For standard field. You’ll get data in fields with export supporter data. You’ll not able to get it via API. But for question it is easily to read those value via API but for export you’ll need to use transaction or hybrid? Export to be able to get it. I suggest to use question since it will make you easier to use API connect EN system with external platform.

It’s your choice. 

Sample data in first_action and last_action
53761 2016-07-20T05:53:05.418Z pet1 email plastic recycle

# Update script for page builder
Page builder is new way of creating page in EN. It is a bit more user friendly but it is change the way of script programming. Form field has change their unique ID name. Question is no longer has unique ID. 

The script to add to your page is tracking_for_pb.js

There are functions in this script. 
- function getParameterByName(name) 
- function chkexist()
- function get_country()
- function getprovince(c_id)
- $(document).ready(function() 

**function getParameterByName(name)**
This function use for parse page url for utm tracking parameter. These parameter will be included in data store in  first_action and last_action. 

**function chkexist()**
Is main function to check if email address is already exist in EN and put correct information into is_new , first_action and last_action. Mainly it will create ajax call to EN service "SupporterData" with email address as parameter to see if it is already in EN database. If it is already exist then the first_action will be blank and is_new will be "n". Otherwise it will put this page detail into first_action too. 

**function get_country()**
Will send supporter ip address to external server(maintain by greenpeace) to determine country/region of supporter and return back option list of country/region. 

**function getprovince(c_id)**
This is to call when there is change in country field. eg: select other country than what geoip give. It will get new list of region and replace in region field. 

**$(document).ready(function()**
This one is main function to process all of above. You can customize here. It is also attach jqueryui.datepicker to date of birth field. Make it easier for supporter to choose their DOB. 

**In summary. There are 3 main function in this script.**
- Track new/existing supporter and tag with campaign id plus some other tracking parameter. 

# To add to your page. 
- Get script from
https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1827/common_2.js?v=1508220947000
- Add 3 questions , is_new , first_action , last_action in your page and hide them with css. 
- get their fields name from source code
- replace in your common_2.js
```
var last_action = '[name="supporter.questions.3884"]';
var first_action = '[name="supporter.questions.3871"]';
var is_new = '[name="supporter.questions.3881"]';
```
on line 41-43 with your question field name. (change numbers)
- replace en_token="**xxxxxxxxxxxxxxxxxxxxxx**"; on line 45 with your public token
- Upload js file to your EN library
- add it to your html template. like  <script src="//aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1827/common_2.js?v=1508220947000"></script>

In case you use country and region in your page you also need to add them as "select" field type with blank option. 

All are set and ready.

You can get detailed list on 3 new question using demo code from https://github.com/noomkrub/EN_question_extract.
