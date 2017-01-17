'use strict';

function Product(shortName, imageType, longName) {
  this.name = longName;
  this.imagePath = '/img/' + shortName + '.' + imageType;
  this.elementId = shortName;
  this.displayCount = 0;
  this.selectionCount = 0;
  this.onDisplay = false;
  this.lastDisplayed = false;

  this.selectionPct = function() {
    if (this.displayCount !== 0) {
      var result = (this.selectionCount / this.displayCount).toFixed(2);
    } else {
      var result = NaN;
    }
  };
}

var product1 = ['bag', 'jpg', 'Droid Rolling Suitcase'];
var product2 = ['banana', 'jpg', 'Banana Slicer'];
var product3 = ['bathroom', 'jpg', 'Bathroom Tissue Stand w/ Tablet Holder'];
var product4 = ['boots', 'jpg', 'Open-Toed Rain Boots'];
var product5 = ['breakfast', 'jpg', 'All-In-One Breakfast Station'];
var product6 = ['bubblegum', 'jpg', 'Meatball Bubble Gum'];
var product7 = ['chair', 'jpg', 'Sit Up!  Chair'];
var product8 = ['cthulhu', 'jpg', 'Elder God Poseable Action Figure'];
var product9 = ['dog-duck', 'jpg', 'Duckbill Dog Muzzle'];
var product10 = ['dragon', 'jpg', 'Canned Dragon Meat'];
var product11 = ['pen', 'jpg', 'Utensil Pen Cap Set'];
var product12 = ['pet-sweep', 'jpg', 'Pet Sweep &trade; Animal-Powered Debris Removal System'];
var product13 = ['scissors', 'jpg', 'Pizza Scissors'];
var product14 = ['shark', 'jpg', 'Shark Sleeping Bag'];
var product15 = ['sweep', 'jpg', 'Baby Sweep &trade; Debris Removal Onesie'];
var product16 = ['tauntaun', 'jpg', 'Tauntaun Sleeping Bag'];
var product17 = ['unicorn', 'jpg', 'Canned Unicorn Meat'];
var product18 = ['usb', 'gif', 'USB Wriggling Tentacle'];
var product19 = ['water-can', 'jpg', 'Recursive Watering Can'];
var product20 = ['wine-glass', 'jpg', 'Non-Orthogonal Wine Glass'];
var product21 = [, ];
