const loadingProjects = () => {
    let httpreq = new XMLHttpRequest();
    const url = "https://api.github.com/users/yuriaguiar-86/repos";

    httpreq.open("GET", url, false);
    httpreq.send(null);

    return httpreq.responseText;
};

let html = '';
let projects = JSON.parse(loadingProjects());

for (let project of projects) {
    html += '<div class="project" data-aos="fade-up">';
        html += '<img src="./images/project.jpg" alt="Projeto" />';
        html += `<h3>${ project.name }</h3>`;
        html += `<p><small>${ project.description ? project.description : '-' }</small></p>`;
        html += `<a id="btn_view_project" href="${ project.html_url }" target="__blank">Ver projeto</a>`;
    html += '</div>';
}

document.getElementById("list_projects").innerHTML = html;

