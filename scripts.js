

const $clothesNav = $("#clothes"); 
const $clothesDrop = $("#clothes-dropdown"); 
const $clothingContent = $("#clothing-content");
const $collectionsNav = $("#collections");
const $collectionDrop = $("#collections-dropdown");
const $cartDrop = $("#cart-dropdown");
const $cartNav = $("#cart");
const $dpDown = $(".dpdown");

const $homeContent = $("#home-content");
const $aboutContent = $("#about-content");
const $cartContent = $("#cart-content");
const $clothingDetails = $("#clothing-details");
// women 
const $womenMain = $("#women-main");

const $womenViewAll = $(".w-view-all");

const $clothingItem = $(".clothingItem");
const $addToCart = $("#addToCart");


const $numItemsInCart = $("#numItemsInCart");

$clothesNav.on("mouseover", function() {
	$collectionDrop.addClass("hide");
	$clothesDrop.removeClass("hide");
	$cartDrop.addClass("hide");
});

$collectionsNav.on("mouseover", function() {
	$clothesDrop.addClass("hide");
	$collectionDrop.removeClass("hide");
	$cartDrop.addClass("hide");
});

$cartNav.on("mouseover", function() {
	$clothesDrop.addClass("hide");
	$collectionDrop.addClass("hide");

   let items = localStorage.getItem("clippywear"); 
   
   if (items != null) {
   	let arr = JSON.parse(items); 
   	if (arr.length === 0) {
   		// don't show dropdown
   	} else {
		$cartDrop.removeClass("hide");
		$cartDrop.empty(); 
		for (let a = 0; a < arr.length; a++) {
			let $item = $(`<li class="dp-cartItem"> 
					<img class="dp-photo" src="./assets/clothes/${arr[a]}.png" /> 
	   				<p class="cartItem-name">${arr[a].split("-")[2].replace(/([A-Z])/g, ' $1').trim()} 
	   				<br/> $0.00
	   				</p>

				</li>`)
			$cartDrop.append($item);
		}
   	}
   }
});

$dpDown.on("mouseleave", function() {
	$(this).addClass("hide");
});

$("#home").on("click", function() {
	$clothingContent.addClass("hide");
	$clothingDetails.addClass("hide");
	$aboutContent.addClass("hide");
	$cartContent.addClass("hide");
	$homeContent.removeClass("hide");

	//cart
   $(window).scrollTop(0);


})

function renderItems(arr) {
   	let $cartItems = $("#cart-items"); 
   	$cartItems.empty();
   	if (arr.length === 0) {
		let $cartItems = $("#cart-items"); 
		let $noItems = $("<h3 class='noItemsInCart'><i>Cart is Empty</i> </h3>");
		$cartItems.append($noItems);
		return;
   	}
   	for (let i = 0; i < arr.length;i++) {
   		let split = arr[i].split("-");
   		let $item = $(`<div class="cart-item"> 
   			<div>
	   			<img class="cartItem-photo" src="./assets/clothes/${arr[i]}.png" /> 
	   			<div class="cartItem-name">
	   				<h3>${split[2].replace(/([A-Z])/g, ' $1').trim()} </h3>
	   				<h5> $0.00 </h5>
	   				<p> Art.no. ${split[1]}-${split[3]}-${split[4]} <span class="ms-3">Size: XS-M</span> </p>
				</div> 
			</div>
			<div><h1 class="removeItem" title="Remove Item" data-itemInfo="${arr[i]}">+</h1></div>
   			</div>`)
   		$cartItems.append($item);
   	}
}

$cartNav.on("click", function() {
	$clothingContent.addClass("hide");
	$clothingDetails.addClass("hide");
	$homeContent.addClass("hide");
	$aboutContent.addClass("hide");
	$cartContent.removeClass("hide");

   $(window).scrollTop(0);

	//load Cart from localStorage
   let items = localStorage.getItem("clippywear"); 
   if (items != null) {
	   	let arr = JSON.parse(items);
		renderItems(arr);
		
   	}

   	zipFiles();
})

$("#about").on("click", function() {
	$clothingContent.addClass("hide");
	$clothingDetails.addClass("hide");
	$cartContent.addClass("hide");

	$homeContent.addClass("hide");
	$aboutContent.removeClass("hide");
   $(window).scrollTop(0);


})

$(".women-clothes").on("click", function() {
	$clothingContent.removeClass("hide");
	$homeContent.addClass("hide");
	$clothingDetails.addClass("hide");
	$("#women-sidebar").removeClass("hide"); 
	$("#collections-sidebar").addClass("hide");
	$aboutContent.addClass("hide");
	$cartContent.addClass("hide");

	$womenMain.removeClass("hide");
	// render clothing list
	$womenViewAll.click();

   $(window).scrollTop(0);


});



function getClothing(str) {
	let clothes = shuffle(women_clothes);
	for (let i = 0; i < clothes.length; i++) {
		let split = women_clothes[i].split("-");

		if(str === "shirts" && split[1][0] != "1") {
			continue;
		} else if (str === "dresses" && split[1][1] != "1") {
			continue;
		} else if (str === "bodysuits" && split[1][2] != "1") {
			continue;
		} else if (str === "pants" && split[1][3] != "1") {
			continue;
		} else if (str === "swim" && split[1][4] != "1") {
			continue;
		} else if (str === "undies" && split[1][5] != "1") {
			continue;
		}else if (str === "c1" && split[3] != "c1") {
			continue;
		}else if (str === "c2" && split[3] != "c2") {
			continue;
		}
		let $dressItem = $(`<div class="clothingItem mouseCursor" data-info=${clothes[i]}> 
			<img class="clothesItemImages" src="./assets/clothes/${women_clothes[i]}.png"  /> 
			<p> ${split[2].replace(/([A-Z])/g, ' $1').trim()} </p>
			</div>`);
		$womenMain.append($dressItem);
	}
}

$(".collection-dp-click").on("click", function() {
	$clothingContent.removeClass("hide");
	$homeContent.addClass("hide");
	$clothingDetails.addClass("hide");
	$aboutContent.addClass("hide");

	$cartContent.addClass("hide");

	$womenMain.removeClass("hide");

	$("#women-sidebar").addClass("hide"); 
	$("#collections-sidebar").removeClass("hide");
	let collection = $(this).attr("data-coll");
	$womenMain.empty();
	$womenMain.addClass("clothingList");
	getClothing(collection); 
   	$(window).scrollTop(0);

})



$(".w-cat").on("click", function() {
	// $("#women-sidebar").removeClass("hide"); 
	// $("#collections-sidebar").addClass("hide");
	$womenMain.empty();
	let category = $(this).attr("data-cloth");
	if (category === "pants") {
		const $none = $("<i>None Available</i>");
		$womenMain.append($none);
	} else {
		$womenMain.addClass("clothingList");
		getClothing(category); 
	}

});

$womenViewAll.on("click", function() {
	$womenMain.empty();

	$womenMain.addClass("clothingList");
	getClothing("all"); 


})

$(document).ready(function () {
   $(window).scrollTop(0);

	let itemsInCart = localStorage.getItem("clippywear"); 
	if (itemsInCart != null) {
		let arr = JSON.parse(itemsInCart); 
		let cartNum = arr.length; 
		if (arr.length !== 0)
			$("#numItemsInCart").attr("data-num", cartNum).text("(" + cartNum + ")");
	}
});

$(document).on("mouseover", ".clothingItem", function(){
	let splitArrFrontPhoto = $(this).attr("data-info").split("-");
	let backPhoto = "./assets/clothes/b-" +splitArrFrontPhoto[1] + "-"+splitArrFrontPhoto[2]+".png";
	$(this).children('img').attr("src", backPhoto);
});

$(document).on("mouseleave", ".clothingItem", function(){
	let srcPhoto = `./assets/clothes/${$(this).attr("data-info")}.png`;
	$(this).children('img').attr("src", srcPhoto);
});

$(document).on("click", ".clothingItem", function(){

	$clothingContent.addClass("hide");
	$clothingDetails.removeClass("hide");

	let srcPhoto = `./assets/clothes/${$(this).attr("data-info")}.png`;
	let splitArrFrontPhoto = $(this).attr("data-info").split("-");
	let backPhoto = "./assets/clothes/b-" +splitArrFrontPhoto[1] + "-"+splitArrFrontPhoto[2]+".png";

	$("#front-details-img").attr("src", srcPhoto);
	$("#back-details-img").attr("src", backPhoto);
	$("#detail-name").text(splitArrFrontPhoto[2].replace(/([A-Z])/g, ' $1').trim());
	$addToCart.attr("data-imgURL", $(this).attr("data-info"));
	$("#downloadLink").attr("href", `./assets/files/CLIPPYWEAR_${splitArrFrontPhoto[3]}-${splitArrFrontPhoto[4]}.package`)

	// check if item is already in cart
	let arr = localStorage.getItem("clippywear");
	let array = JSON.parse(arr); 
	const index = array.indexOf($(this).attr("data-info"));
	if (index === -1) {
		$addToCart.removeClass("disabledButton");	
	} else {
		$addToCart.addClass("disabledButton");	
	}

});

function zipFiles() {

	let arr = localStorage.getItem("clippywear");
	let array = JSON.parse(arr); 

	let urls = []; 
	for (let a = 0; a < array.length; a++) {
		let split = array[a].split("-");
		urls.push(`CLIPPYWEAR_${split[3]}-${split[4]}.package`);
	}
    var zip = new JSZip();
    let $a = $("#download-all");
    urls = [...new Set(urls)];
	console.log("what are urls", urls)

  	function request(url) {
        return new Promise(function(resolve) {
          var httpRequest = new XMLHttpRequest();
          httpRequest.open("GET", url);
          httpRequest.onload = function() {
            zip.file(url, this.responseText);
            resolve()
          }
          httpRequest.send()
        })
      }

  Promise.all(urls.map(function(url) {
      return request(url)
    }))
    .then(function() {
      console.log(zip);
      zip.generateAsync({
          type: "blob"
        })
        .then(function(content) {
          $a.attr("href", URL.createObjectURL(content));
        });
    });

}



$addToCart.on("click", function() {
	if ($(this).hasClass("disabledButton")) {
		return;
	}
	let imageUrl = $(this).attr("data-imgURL");

	$(this).addClass("disabledButton"); 
	$(this).text("Added to Cart")
	let cartNum = parseInt($("#numItemsInCart").attr("data-num")) + 1;
	$("#numItemsInCart").attr("data-num", cartNum).text("(" + cartNum + ")");



	let itemsInCart = localStorage.getItem("clippywear"); 
	// if nothing in cart 
	if (itemsInCart == null) { 
		let arr = JSON.stringify([imageUrl]);
		localStorage.setItem("clippywear", arr ); 
	} else {
		let arr = JSON.parse(itemsInCart); 
		arr.push(imageUrl); 
		let newArr = JSON.stringify(arr); 
		localStorage.setItem("clippywear", newArr);
	}
});



$(document).on("click", ".removeItem", function(){
	let itemToRemove = $(this).attr("data-itemInfo");

	let arr = localStorage.getItem("clippywear");
	let array = JSON.parse(arr); 

	if (array.length === 0) {
		console.log("Something went wrong. Removing Item from an empty cart.")
		return; 
	}
	const index = array.indexOf(itemToRemove);
	if (index > -1) { // only splice array when item is found
	  array.splice(index, 1); // 2nd parameter means remove one item only
	}
	let newArr = JSON.stringify(array); 
	localStorage.setItem("clippywear", newArr);

	// update cart 
	renderItems(array); 

	//update text
	let cartNum = array.length; 
	if (cartNum === 0) {
		$("#numItemsInCart").text("");
	} else {
		$("#numItemsInCart").text("(" + cartNum + ")");
	}
	$("#numItemsInCart").attr("data-num", cartNum);

	zipFiles();
});