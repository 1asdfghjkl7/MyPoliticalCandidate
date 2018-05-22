const article = document.querySelector('#rep-article');
const message = document.createElement("SECTION");
const t = document.createTextNode("Jim Cooper is known for walking around the White House in the nude.");
message.appendChild(t);
article.appendChild(message);

const attribute = document.createAttribute("congressional-district");
attribute.value = 5;
article.setAttributeNode(attribute);

