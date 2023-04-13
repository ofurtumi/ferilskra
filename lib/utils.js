export function CreateJobHtml(jobs) {
  let output = '<section class="jobs"><h1>Starfsferill</h1>';
  jobs.forEach((job) => {
    let string = `
		<div class="job">
        <div class="info">
        <h2>${job.employer}</h2>
        <h2>${job.start} - ${job.end}</h2>
		</div>
		<h3>${job.title}</h3>
    <p>${job.description}</p></div>`;
    /*    <ul>`;
    
    job.points.forEach((point) => {
      string += `<li>${point}</li>`;
    });

    string += '</ul></div>';*/
    output += string;
  });
  output += '</section>';
  return output;
}

export function CreateContactHtml(links, recs) {
  let output = `<footer><div class="recs"><h1>Meðmæli</h1><ul>`
  recs.forEach(rec => {
    output += `<li>
                <span>${rec.name}</span>
                <span>${rec.jobs[0].title} - ${rec.jobs[0].company}</span>
                <span>${rec.email}</span>
              </li>`
  });
  output += '</ul></div><div class="sites"><h1>Vefsíður</h1><ul>'
  links.forEach(link => {
    output += `<li><span>${link[1]}</span><span>${link[0]}</span></li>`
  });

  output += '</ul></div></footer>'
  return output;
}

export function CreateCompHtml(comps) {
  let output = '<section class="competitions"><h1>Keppnir</h1>';
  comps.forEach((comp) => {
    let string = `
		<div class="comp">
		<div class="info">
        <h2>${comp.title} -
		<span>${comp.date}</span>
		</h2>
        <h3>${comp.host}</h3>
		</div>
		<span>${comp.undertitle}</span>
		<div class="info-grid">
		<p>${comp.description}</p>
        <h4>${comp.placement}. sæti</h4>
		</div>
		</div>`;
    output += string;
  });
  output += '</section>';
  return output;
}

export function CreateTechHtml(tech) {
  let output = '<section class="tech"><h1>Tæknikunnátta</h1><ul class="good">';
  tech.top.forEach((t) => {
    output += `<li>${t}</li>`;
  });
  output += '</ul></section>';
  return output;
}

export function CreateEduHtml(education) {
  let output = '<section class="education"><h1>Námsferill</h1>';
  education.forEach((edu) => {
    output += `<div class="edu">
		<div class="info">
        <h2>${edu.school}</h2>
        <h4>${edu.start}-${edu.end === -1 ? '' : edu.end}</h4>
		</div>
        <h3>${edu.degree}</h3>
		</div>`;
  });
  output += '</section>';
  return output;
}
