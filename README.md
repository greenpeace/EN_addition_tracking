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
