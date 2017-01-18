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
var item12 = ['pet-sweep', 'jpg', 'Pet Sweep &trade; Animal-Powered Debris Removal System'];
var item13 = ['scissors', 'jpg', 'Pizza Scissors'];
var item14 = ['shark', 'jpg', 'Shark Sleeping Bag'];
var item15 = ['sweep', 'jpg', 'Baby Sweep &trade; Debris Removal Onesie'];
var item16 = ['tauntaun', 'jpg', 'Tauntaun Sleeping Bag'];
var item17 = ['unicorn', 'jpg', 'Canned Unicorn Meat'];
var item18 = ['usb', 'gif', 'USB Wriggling Tentacle'];
var item19 = ['water-can', 'jpg', 'Recursive Watering Can'];
var item20 = ['wine-glass', 'jpg', 'Non-Orthogonal Wine Glass'];

// Declare variables & create an array with these 20 items
var productsList = [];
var selectedProduct;
var currentDisplay = [];
var lastDisplaySet = [];
var round = 0;
var chooser = document.getElementById('choices');

createProductList ();
// voting(25);

// Display a product to the page
// document.write('<p>' + productsList[3].name + '</p>');
var testing = Math.floor((Math.random() * productsList.length));
productsList[testing].renderProduct();

// Select 3 random products, without duplication
function chooseThree() {
  // Clear current list of displayed items
  lastDisplaySet = currentDisplay;
  currentDisplay = [];
  for (var i = 0; i < 3; i++) {
    console.log('Choosing item ' + (i + 1) + ' of this set.');
    var newChoice = false;
    // Keep picking a random product until a new one is selected
    while (!newChoice) {
      randomChoice();
      if (checkIfNew()) {
        console.log('Now displaying ' + selectedProduct.name);
        // Set display flags for current and past
        selectedProduct.onDisplay = true;
        selectedProduct.displayCount ++;
        // Add selection to list of currently displayed items
        currentDisplay.push(selectedProduct);
        // End this loop
        newChoice = true;
      }
    }
  }
  console.log(currentDisplay[0].elementId + ', ' + currentDisplay[1].elementId + ' and ' + currentDisplay[2].elementId);
  if (round === 0) {
    return;
  }
  // Clear display flag from previous set
  for (var i = 0; i < 3; i++) {
    lastDisplaySet[i].lastDisplayed = false;
  }
}

// Object constructor function for new products
function Product(shortName, imageType, longName) {
  this.displayCount = 0;
  this.elementId = shortName;
  this.imagePath = 'img/' + shortName + '.' + imageType;
  this.lastDisplayed = false;
  this.name = longName;
  this.onDisplay = false;
  this.selectionCount = 0;

  this.selectionPct = function() {
    if (this.displayCount !== 0) {
      var result = (this.selectionCount / this.displayCount).toFixed(2);
    } else {
      var result = NaN;
    }
  };

  this.renderProduct = function() {
    var productEl = document.createElement('section');
    productEl.setAttribute('id', this.elementId);
    chooser.appendChild(productEl);
    var descriptionEl = document.createElement('p');
    descriptionEl.setAttribute('class', 'description');
    descriptionEl.textContent = this.name;
    productEl.appendChild(descriptionEl);
    var imageEl = document.createElement('img');
    imageEl.setAttribute('class', 'product-image');
    imageEl.setAttribute('src', this.imagePath);
    productEl.appendChild(imageEl);
  };
}

// Select a random product
function randomChoice() {
  // Do not add 1 to result; array is zero-indexed.
  var randomNumber = Math.floor((Math.random() * productsList.length));
  console.log('Random number chosen:' + randomNumber);
  selectedProduct = productsList[randomNumber];
  console.log('Selected ' + selectedProduct.name);
}

// Check if product is currently displayed or was displayed previously
function checkIfNew() {
  if (selectedProduct.lastDisplayed) {
    console.log('This product was previously displayed.');
    return false;
  } else if (selectedProduct.onDisplay) {
    console.log('This product is already on display.');
    return false;
  } else {
    console.log('Product has not been displayed yet.');
    // Mark product as currently on display
    return true;
  }
}

function createProductList () {
  for (var i = 0; i < 20; i++) {
    // console.log('Loop ' + i);
    var target = eval('item' + (i + 1));
    // console.log(target);
    var result = new Product(target[0], target[1], target[2]);
    // console.log(result);
    productsList.push(result);
    // console.log(productsList);
  }
}

// Offer 25 sets of products
function voting(maxRounds) {
  for (round; round < maxRounds; round++) {
    console.log('Offering set ' + (round + 1) + ' of 25.');
    chooseThree();
    console.log('Set ' + (round + 1) + ' is ' + currentDisplay);
    document.write('<p>Set ' + (round + 1) + ': ' + currentDisplay[0].elementId + ' (' + currentDisplay[0].displayCount + '), ');
    document.write(currentDisplay[1].elementId + ' (' + currentDisplay[1].displayCount + '), ');
    document.write(currentDisplay[2].elementId + ' (' + currentDisplay[2].displayCount + ')</p>');
    // After displaying current 3 products, mark them as previously displayed and no longer currently on display.
    for (var j = 0; j < 3; j++) {
      currentDisplay[j].lastDisplayed = true;
      currentDisplay[j].onDisplay = false;
    }
    // user makes selection
  }
}
