let Home = document.getElementById('Home');
let About = document.getElementById('About');
let Skills = document.getElementById('Skills');
let Services = document.getElementById('Services');
let Contact = document.getElementById('Contact');

Home.addEventListener("click", function () {
    Home.style.color = '#4E75D9';
    ResetColour(Home);
});

About.addEventListener("click", function () {
    About.style.color = '#4E75D9';
    ResetColour(About);
});

Skills.addEventListener("click", function () {
    Skills.style.color = '#4E75D9';
    ResetColour(Skills);
});

Services.addEventListener("click", function () {
    Services.style.color = '#4E75D9';
    ResetColour(Services);
});

Contact.addEventListener("click", function () {
    Contact.style.color = '#4E75D9';
    ResetColour(Contact);
});

function ResetColour(a)
{
    if(a.id != Home.id)
        Home.style.color = '#000';
    if(a.id != About.id)
        About.style.color = '#000';
    if(a.id != Skills.id)
        Skills.style.color = '#000';
    if(a.id != Services.id)
        Services.style.color = '#000';
    if(a.id != Contact.id)
        Contact.style.color = '#000';
}
