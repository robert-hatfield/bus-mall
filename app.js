'use strict';

// Declare initial list of items to be constructed
var item1 = ['bag', 'jpg', 'Droid Rolling Suitcase'];
var item2 = ['banana', 'jpg', 'Banana Slicer'];
var item3 = ['bathroom', 'jpg', 'Bathroom Tissue Stand w/ Tablet Holder'];
var item4 = ['boots', 'jpg', 'Open-Toed Rain Boots'];
var item5 = ['breakfast', 'jpg', 'All-In-One Breakfast Station'];
var item6 = ['bubblegum', 'jpg', 'Meatball Bubble Gum'];
var item7 = ['chair', 'jpg', 'Sit Up!  Chair'];
var item8 = ['cthulhu', 'jpg', 'Elder God Poseable Action Figure'];
var item9 = ['dog-duck', 'jpg', 'Duckbill Dog Muzzle'];
var item10 = ['dragon', 'jpg', 'Canned Dragon Meat'];
var item11 = ['pen', 'jpg', 'Utensil Pen Cap Set'];
var item12 = ['pet-sweep', 'jpg', 'Pet Sweep™ Animal-Powered Debris Removal System'];
var item13 = ['scissors', 'jpg', 'Pizza Scissors'];
var item14 = ['shark', 'jpg', 'Shark Sleeping Bag'];
var item15 = ['sweep', 'png', 'Baby Sweep™ Debris Removal Onesie'];
var item16 = ['tauntaun', 'jpg', 'Tauntaun Sleeping Bag'];
var item17 = ['unicorn', 'jpg', 'Canned Unicorn Meat'];
var item18 = ['usb', 'gif', 'USB Wriggling Tentacle'];
var item19 = ['water-can', 'jpg', 'Recursive Watering Can'];
var item20 = ['wine-glass', 'jpg', 'Non-Orthogonal Wine Glass'];

// Declare variables
var allProducts = [];
var randomProduct;
var currentDisplaySet = [];
var lastDisplaySet = [];
var currentRound = 0;
var maxRounds = 5;
var chooser = document.getElementById('choices');

// Create objects for all pre-defined products and add them to an array
createProductList();

// Select three products, without duplication
chooseThree();

function createProductList () {
  for (var i = 0; i < 20; i++) {
    var target = eval('item' + (i + 1));  // Set variable name for array to be constructed into a product object
    // console.log('Constructing: ' + target);
    var result = new Product(target[0], target[1], target[2]); // Pass short name, image extension and long name to constructor
    // console.log(result);
    allProducts.push(result);
    // console.log(allProducts);
  }
}

function chooseThree() {
  // Save last set of displayed items before clearing the current list
  lastDisplaySet = currentDisplaySet;
  currentDisplaySet = [];
  // Repeat until 3 unique products are selected for rendering
  while (currentDisplaySet.length < 3) {
    console.log('Choosing item ' + (currentDisplaySet.length + 1) + ' of set ' + (currentRound + 1));
    // Keep picking a random product until a new one is selected
    do {
      randomChoice();
      checkIfNew(); // Only needed for debugging
    } while (lastDisplaySet.includes(randomProduct) || currentDisplaySet.includes(randomProduct));
    console.log(randomProduct.elementId + ' will be displayed.');
    // Add new product to currentDisplaySet
    currentDisplaySet.push(randomProduct);
    // Increment display counter for product
    randomProduct.displayCount ++;
  };
  console.log('Set ' + (currentRound + 1) + ' is: ' + currentDisplaySet[0].elementId + ', ' + currentDisplaySet[1].elementId + ' and ' + currentDisplaySet[2].elementId);
  // Render the selected products with attached event listeners
  currentDisplaySet.forEach(renderProduct);
  currentRound ++;
}

// Object constructor function for new products
function Product(shortName, imageType, longName) {
  this.displayCount = 0;
  this.elementId = shortName;
  this.imagePath = 'img/' + shortName + '.' + imageType;
  this.name = longName;
  this.selectionCount = 0;

  this.selectionPct = function() {
    if (this.displayCount !== 0) {
      var result = (this.selectionCount / this.displayCount).toFixed(2);
    } else {
      var result = NaN;
    }
  };
}

// Select a random product
function randomChoice() {
  // Do not add 1 to result; array is zero-indexed.
  var randomNumber = Math.floor((Math.random() * allProducts.length));
  console.log('Random number chosen:' + randomNumber);
  randomProduct = allProducts[randomNumber];
  console.log('Selected ' + randomProduct.elementId);
}

// Check if product is currently displayed or was displayed previously
function checkIfNew() {
  if (lastDisplaySet.includes(randomProduct)) {
    console.log(randomProduct.elementId + ' was displayed in the previous set.');
  } else if (currentDisplaySet.includes(randomProduct)) {
    console.log(randomProduct.elementId + ' is already in the current set.');
  } else {
    console.log(randomProduct.elementId + ' has not been displayed yet.');
  }
}

function selectionMade(event) {
  console.log('Target is ' + event.currentTarget);
  console.log(event.currentTarget);
  console.log(event.currentTarget.id);
  for (var i = 0; i < currentDisplaySet.length; i++) {
    if (event.currentTarget.id === currentDisplaySet[i].elementId) {
      currentDisplaySet[i].selectionCount += 1;
      console.log(currentDisplaySet[i].selectionCount);
    }
  }
  this.selectionCount += 1; console.log('user chose ' + event.currentTarget.id);
  // remove product list from page
  while (chooser.firstChild) {
    console.log('Removing ' + chooser.firstChild.id);
    chooser.removeChild(chooser.firstChild);
  }
  if (currentRound < maxRounds) {
    chooseThree();
  } else {
    console.log('All done!');
  }
}

function renderProduct(product) {
  var productEl = document.createElement('section');
  productEl.setAttribute('id', product.elementId);
  productEl.setAttribute('class', 'product-section');
  chooser.appendChild(productEl);
  var descriptionEl = document.createElement('p');
  descriptionEl.setAttribute('class', 'description');
  descriptionEl.textContent = product.name;
  productEl.appendChild(descriptionEl);
  var imageEl = document.createElement('img');
  imageEl.setAttribute('class', 'product-image');
  imageEl.setAttribute('src', product.imagePath);
  productEl.appendChild(imageEl);
  productEl.addEventListener('click', selectionMade, false);
}
