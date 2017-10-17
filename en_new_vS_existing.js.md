# Sample page.

http://act.greenpeace.org/ea-action/action?ea.campaign.id=53835&ea.client.id=1827&ea.campaign.mode=DEMO

# Setting it up
First time set up process will need to.
- Create 3 question with type as “text” in build menu of EN. Named them as “is_new , first_action , last_action” (you can also use another name that make more sense to your work)
- Once it is set up you can go with next step on using it in campaign page by
- Put above js into html template or also able to put into external js file in EN library and add to html
- Add question created in preparation process in build phase
- Put all 3 question in form design (which may need to hide them use JS or CSS) *If you have better solution for this please share. 
- All steps above you can try with different option to make sure it will match requirement. And please share what you think it is the best option.

## In build phase 
- question . If you put mouse pointer above question name you’ll see link something like https://e-activist.com/ea-account/action.campaigncontent.do?v=ques:Questions:obj&id=****QUESTION_ID*****
- add following js into html header

```
<script>
 $(document).ready(function(){
	$('#email').blur(function(){chkexist();});
	});
 </script>
```
You then can use ****QUESTION_ID***** in API call like this. Each question will have different ID and you also need your public token replaces in following URL.
http://e-activist.com/ea-dataservice/data.service?service=EaSupporterQuestionResponse&token=****YOUR_TOKEN*******&contentType=json&questionId=****QUESTION_ID*****

Don’t forget to replace token with your own public token
