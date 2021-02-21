chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

if (request == '+')
{
	window.scroll(100, 5000);

	var ms = 100;
	ms += new Date().getTime();
	while (new Date() < ms){}

	var ms2 = 100;
	ms2 += new Date().getTime();
	while (new Date() < ms2){}

	var skills_panel = window.document.getElementsByClassName('pv-skills-section__additional-skills');
	if (skills_panel.length > 0 && skills_panel[0].getAttribute('aria-expanded') == 'false') skills_panel[0].click();

        var skills = window.document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared artdeco-button--secondary');
	var i;
	for (i = 0; i < skills.length; i++)
	{
	    skills[i].click();
	}
}
if (request == '-')
{
	window.scroll(100, 5000);

	var ms = 100;
	ms += new Date().getTime();
	while (new Date() < ms){}

	var ms2 = 100;
	ms2 += new Date().getTime();
	while (new Date() < ms2){}

	var skills_panel = window.document.getElementsByClassName('pv-skills-section__additional-skills');
	if (skills_panel.length > 0 && skills_panel[0].getAttribute('aria-expanded') == 'false') skills_panel[0].click();

        var skills = window.document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared artdeco-button--primary');
	var i;
	for (i = 0; i < skills.length; i++)
	{
	    skills[i].click();
	}
}

})