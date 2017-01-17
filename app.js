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

// Create an array with these 20 items
var productsList = [];
for (var i = 0; i < 20; i++) {
  console.log('Loop ' + i);
  var target = eval('item' + (i + 1));
  console.log(target);
  var result = new Product(target[0], target[1], target[2]);
  console.log(result);
  productsList.push(result);
  console.log(productsList);
}

// Display an image to the page
document.write('<img src = "' + productsList[3].imagePath + '" />');

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
}
