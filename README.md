# EN_addition_tracking
Idea objective of this concept is to.
Identify new vs existing supporters before submit information to EN 
These record able to use for identify how they came into the system, what petition , what channel and when ,also with utm tracking parameter.
When they start 2nd action. This script will mark them as existing, override their last action value. 

Basically there are 3 data recorded.
Is_new  (Y | N)
First_action    (campaignid date-time utm_source utm_medium utm_campaign utm_content (option) )
last_action    (campaignid date-time utm_source utm_medium utm_campaign utm_content (option) ) 

You can create with new default supporter field or use question.
For standard field. You’ll get data in fields with export supporter data. You’ll not able to get it via API. But for question it is easily to read those value via API but for export you’ll need to use transaction or hybrid? Export to be able to get it. I suggest to use question since it will make you easier to use API connect EN system with external platform.

It’s your choice. 

Sample data in first_action and last_action
53761 2016-07-20T05:53:05.418Z pet1 email plastic recycle

Sample page.

http://act.greenpeace.org/ea-action/action?ea.campaign.id=53835&ea.client.id=1827&ea.campaign.mode=DEMO

Setting it up
First time set up process will need to.
Create 3 question with type as “text” in build menu of EN. Named them as “is_new , first_action , last_action” (you can also use another name that make more sense to your work)
Once it is set up you can go with next step on using it in campaign page by
Put above js into html template or also able to put into external js file in EN library and add to html
Add question created in preparation process in build phase
Put all 3 question in form design (which may need to hide them use JS or CSS) *If you have better solution for this please share. 
All steps above you can try with different option to make sure it will match requirement. And please share what you think it is the best option.

In build phase - question . If you put mouse pointer above question name you’ll see link something like https://e-activist.com/ea-account/action.campaigncontent.do?v=ques:Questions:obj&id=****QUESTION_ID*****

You then can use 10533 in API call like this. Each question will have different ID and you also need your public token replaces in following URL.
http://e-activist.com/ea-dataservice/data.service?service=EaSupporterQuestionResponse&token=****YOUR_TOKEN*******&contentType=json&questionId=****QUESTION_ID*****

Don’t forget to replace token with your own public token

