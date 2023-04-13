import fs from "fs/promises";
import { argv } from "process";
import {
  CreateCompHtml,
  CreateJobHtml,
  CreateTechHtml,
  CreateEduHtml,
  CreateContactHtml,
} from "./utils.js";

const data = await JSON.parse(await fs.readFile("lib/ferilskra.json"));

let html = `<!DOCTYPE html>
<html lang="is">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Ferilskrá</title>
	<link rel="stylesheet" href="../lib/main.css">
</head>
<body>
<header><h1>${data.name}</h1><div><span id="email">${data.email}</span>◈<span id="number">${data.number}</span></div></header><main>`;

html += CreateJobHtml(data.jobs);
html += CreateEduHtml(data.education);
html += "</main>";
//html += CreateTechHtml(data.technical);
html += CreateContactHtml(data.links, data.reccomendations);
html += CreateCompHtml(data.competitions);
html += "</body></html>";
// html += CreateOtherHtml(data.other);

fs.writeFile("dist/index.html", html);
