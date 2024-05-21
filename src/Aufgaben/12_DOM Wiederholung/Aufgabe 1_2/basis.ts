const info = document.getElementById ("info") as HTMLDivElement;
info.innerHTML = "<h1>Hello World</h1> <h2>How are you</h2>"

const container = document.getElementById ("container") as HTMLDivElement;
container.innerHTML = "<p>This is a paragraph<p>";

const input = document.getElementById("input");
input?.setAttribute("type","text");
