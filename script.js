// 1

const paragraph = document.createElement("p");

paragraph.innerText = "Travel to the seven wonders of the world";

const sectionList = document.querySelector(".list");

sectionList.appendChild(paragraph);

// 2

const paragraph2 = document.createElement("p");

paragraph2.innerText = "Run a marathon";

paragraph.insertAdjacentElement("afterend", paragraph2);

// 3

const innerList = document.querySelector(".list");
console.log(innerList);

// 4

const innerTT = `
    <p>
    Try to learn
    </p>
  `;

// 5

//   innerList.innerHTML = innerTT;

// 6

innerList.insertAdjacentHTML("afterbegin", innerTT);

// 7

const three = ["Learn to surf", "See the Northern Lights", "Go on a safari"]

three.forEach(threeItem => {
    const newChild = document.createElement("p");
    newChild.innerText = threeItem;
    innerList.appendChild(newChild);
});
// 8

console.log(innerList.children.length);

// 9

let h2Name = document.querySelector(".owner")

h2Name.innerText = "Jesper's"


// 10

const replace = document.createElement("p")

replace.innerText = "Learn 5 languages!";

const firstReplacement = innerList.querySelector("p") // för att få första noden Kan även använda innerList.children[0] för att få första child element
innerList.replaceChild(replace, firstReplacement);

// 11

const listAll = innerList.querySelectorAll("p"); // kan använda innerList.children för att få en ny lista också!

const middleIndex = Math.floor(listAll.length / 2);
const middleNode = listAll[middleIndex];

const replace2 = document.createElement("p");
replace2.innerText = "Try alot of different foods!";

innerList.replaceChild(replace2, middleNode);


// 12

const lastNode = innerList.lastElementChild;

innerList.removeChild(lastNode);



