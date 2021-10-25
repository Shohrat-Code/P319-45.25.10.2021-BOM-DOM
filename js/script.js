// const isInRange = (number, object) => (number >= object.min && number <= object.max);

// console.log(isInRange(11, { min: 0, max: 10 }))

// class City {
//     constructor(Name, Population, Continent) {
//         this.name = Name;
//         this.population = Population;
//         this.continent = Continent;
//     }
// }

// let cityInfo = (obj) => {
//     return `${obj.name} has a population of ${obj.population} and is located in ${obj.continent}`;
// };
// const city1 = new City("Baku", 9e6, "Asia");
// console.log(cityInfo(city1));


// class Profit {
//     constructor(costPrice, sellPrice, inventory) {
//         this.costPrice = costPrice,
//             this.sellPrice = sellPrice,
//             this.inventory = inventory
//     }
// }

// function calcProfit(object) {
//     return `${(object.sellPrice - object.costPrice) * object.inventory}`
// }

// let profit = new Profit(10, 20, 5);
// console.log(calcProfit(profit));

// class Circle {
//     PI = Math.PI;
//     constructor(name, radius) {
//         this.setName = name;
//         this.setRadius = radius;
//     }


//     get getName() {
//         return this._name;
//     }
//     set setName(value) {
//         this._name = value;
//     }

//     get getRadius() {
//         return this._radius;
//     }

//     set setRadius(value) {
//         if (isFinite(value) && value > 0) {
//             this._radius = value;
//         }
//         else {
//             console.error("Enter valid radius");
//             return;
//         }
//     }

//     calcAre() {
//         return `Area: ${Math.round(this.PI * this._radius ** 2)}`;
//     }
//     calcLength() {
//         return `Length: ${Math.round(2 * this.PI * this._radius)}`
//     }
// }


// const circle1 = new Circle("rasim", 10);

// console.log(circle1.calcAre());
// console.log(circle1.calcLength());

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// window.open();

// let open = document.getElementById("open");
// let close = document.getElementById("close");

// open.addEventListener("click", function (e) {
//     e.preventDefault();
//     // window.open();
//     // location.href = "https://turbo.az/"
// });

// close.addEventListener("click", function (e) {
//     e.preventDefault();
//     window.close();
// });

// console.log(screen.availHeight);
// console.log(screen.height);


// const headings = document.getElementsByTagName('h1');
// console.log(headings);

// const heading1 = document.getElementsByClassName('heading');
// console.log(heading1[0]);

// const heading2 = document.getElementById('heading');
// console.log(heading2);

// const headings = document.querySelectorAll('h1');
// console.log(headings);

// const heading1 = document.querySelector('.heading');
// console.log(heading1.getAttribute('class'));

// heading1.style.backgroundColor = 'yellow';
// heading1.style.fontSize = '50px';
// heading1.style.opacity = 0.5;

// const img = document.querySelector('.bear');
// console.log(img.src);
// console.log(img.getAttribute('src'));

// console.log(img.hasAttribute('src'));


// img.setAttribute('alt', 'AYI');


// heading1.insertAdjacentHTML('beforeend', `<span>SPAN 2</span>`);


/*

document.getElementsByTagName()
document.getElementsByClassName()
document.getElementById()

document.querySelector()
document.querySelectorAll()

.innerHTML
.textContent

*/




// const newHeading = document.createElement('h1');
// newHeading.textContent = 'New Heading';
// newHeading.style.backgroundColor = 'orangered'
// newHeading.style.color = 'white'

// const div = document.querySelector('.container');


let calc = document.querySelector("#calc");
let vol = document.querySelector("#vol");

calc.addEventListener("click", function (e) {
    e.preventDefault();
    let radius = Number(document.querySelector("#radius").value);
    let volume = 4 / 3 * Math.PI * radius * radius * radius;
    vol.value = Math.round(volume);
});