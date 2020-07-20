const parser = new DOMParser();

const xmlString = `
 <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDom = parser.parseFromString(xmlString, 'text/xml');
let studentNode = xmlDom.querySelectorAll('student')
let arr = [];
for (let i = 0; i< studentNode.length; i++){
const nameNode = studentNode[i]?.querySelector('name')
const firstNode = studentNode[i]?.querySelector('first');
const secondNode = studentNode[i]?.querySelector('second');
const ageNode = studentNode[i]?.querySelector('age');
const profNode = studentNode[i]?.querySelector('prof');
const langAttr = nameNode?.getAttribute('lang');

const result = {
    name: `${firstNode?.textContent} ` + `${secondNode?.textContent}`,
    age: ageNode?.textContent,
    prof: profNode?.textContent,
    lang: langAttr
}
arr.push(result)
}
console.log(arr)