let Home = document.getElementById('Home');
let About = document.getElementById('About');
let Skills = document.getElementById('Skills');
let Services = document.getElementById('Services');
let Contact = document.getElementById('Contact');
let HomePage = document.getElementById('HomePage');
let AboutPage = document.getElementById('AboutPage');
let SkillsPage = document.getElementById('SkillsPage');
let ServicesPage = document.getElementById('ServicesPage');
let ContactPage = document.getElementById('ContactPage');
let HomeLine = document.getElementById('HomeLine');
let AboutLine = document.getElementById('AboutLine');
let SkillsLine = document.getElementById('SkillsLine');
let ServicesLine = document.getElementById('ServicesLine');
let ContactLine = document.getElementById('ContactLine');

Home.addEventListener("click", function () {
    Home.style.color = '#4E75D9';
    HomePage.style.display = 'flex';
    HomeLine.classList.add("active");
    ResetPage(HomePage);
    ResetColour(Home);
});

About.addEventListener("click", function () {
    About.style.color = '#4E75D9';
    AboutPage.style.display = 'flex';
    AboutLine.classList.add("active");
    ResetPage(AboutPage);
    ResetColour(About);
});

Skills.addEventListener("click", function () {
    Skills.style.color = '#4E75D9';
    SkillsPage.style.display = 'flex';
    SkillsLine.classList.add("active");
    ResetPage(SkillsPage);
    ResetColour(Skills);
});

Services.addEventListener("click", function () {
    Services.style.color = '#4E75D9';
    ServicesPage.style.display = 'flex';
    ServicesLine.classList.add("active");
    ResetPage(ServicesPage);
    ResetColour(Services);
});

Contact.addEventListener("click", function () {
    Contact.style.color = '#4E75D9';
    ContactPage.style.display = 'flex';
    ContactLine.classList.add("active");
    ResetPage(ContactPage);
    ResetColour(Contact);
});

SetDefault();

function ResetColour(a)
{
    if(a.id != Home.id)
    {
        Home.style.color = '#000';
    }
    if(a.id != About.id)
    {
        About.style.color = '#000';
    }
    if(a.id != Skills.id)
    {
        Skills.style.color = '#000';
    }
    if(a.id != Services.id)
    {
        Services.style.color = '#000';
    }
    if(a.id != Contact.id)
    {
        Contact.style.color = '#000';
    }
}

function ResetPage(a)
{
    if(a.id != HomePage.id)
    {
        HomePage.style.display = 'none';
        HomeLine.classList.remove("active");
    }
    if(a.id != AboutPage.id)
    {
        AboutPage.style.display = 'none';
        AboutLine.classList.remove("active");
    }
    if(a.id != SkillsPage.id)
    {
        SkillsPage.style.display = 'none';
        SkillsLine.classList.remove("active");
    }
    if(a.id != ServicesPage.id)
    {
        ServicesPage.style.display = 'none';
        ServicesLine.classList.remove("active");
    }
    if(a.id != ContactPage.id)
    {
        ContactPage.style.display = 'none';
        ContactLine.classList.remove("active");
    }
}


function SetDefault()
{
    Home.style.color = '#4E75D9';
    HomeLine.classList.add("active");
    HomePage.style.display = 'flex';
    AboutPage.style.display = 'none';
    SkillsPage.style.display = 'none';
    ServicesPage.style.display = 'none';
    ContactPage.style.display = 'none';
    ResetColour(Home);
}