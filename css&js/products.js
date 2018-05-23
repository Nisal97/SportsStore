var productArr = ["TShirt(S)","TShirt(M)","TShirt(L)","Bat(s)","Ball(s)","Sports Shoes(UK-10)"];
var quantityArr = [0,0,0,0,0,0];

function tShirtSizeCalc(){
	
	var tSQuantity = document.getElementById("tShirtQuantity").value;
	var tSSize = document.getElementById("sizeOptions").value;
	
	if(tSSize == "small"){
		document.getElementById("priceTShirt").innerHTML = "$" + multiply(5.99, tSQuantity);
	}else if(tSSize == "medium"){
		document.getElementById("priceTShirt").innerHTML = "$" + multiply(7.99, tSQuantity);
	}else if(tSSize == "large"){
		document.getElementById("priceTShirt").innerHTML = "$" + multiply(9.99, tSQuantity);
	}else{
		document.getElementById("priceTShirt").innerHTML = "Select size for price";
	}
}

function tShirtPriceCalc(){
	
	var tSSize = document.getElementById("sizeOptions").value;
	var tSQuantity = document.getElementById("tShirtQuantity").value;
	
	if(tSSize == "small"){
		document.getElementById("priceTShirt").innerHTML = "$" + multiply(5.99, tSQuantity);
	}else if(tSSize == "medium"){
		document.getElementById("priceTShirt").innerHTML = "$" + multiply(7.99, tSQuantity);
	}else if(tSSize == "large"){
		document.getElementById("priceTShirt").innerHTML = "$" + multiply(9.99, tSQuantity);
	}
}

function batPriceCalc(){
	document.getElementById("priceBat").innerHTML = "$" + multiply(19.99, document.getElementById("batQuantity").value);
}

function ballPriceCalc(){	
	document.getElementById("priceBalls").innerHTML = "$" + multiply(6.99, document.getElementById("ballQuantity").value);
}

function shoesPriceCalc(){
	document.getElementById("priceShoes").innerHTML = "$" + multiply(24.99, document.getElementById("shoesQuantity").value);
}

<!-- Different add to cart functions were used because of different divs for each product-->
function addToCart1(){
	var priceTShirt = parseFloat(document.getElementById("priceTShirt").textContent.substr(1)); <!--substr method is used to remove the $ sign-->
	var sizeTShirt = document.getElementById("sizeOptions").value;
	var TSQuantity = document.getElementById("tShirtQuantity").value;
		
	if(isNaN(priceTShirt)){
		alert("Please Select Size");
		
	}else{
		var cartPrice = parseFloat(document.getElementById("finalPrice").textContent.substr(1));
		document.getElementById("finalPrice").innerHTML = "$" + add(priceTShirt, cartPrice);
		
		var totalItems = parseInt(document.getElementById("totalItems").textContent);
		document.getElementById("totalItems").innerHTML = eval(totalItems + parseInt(TSQuantity));
		
		orderList(sizeTShirt, TSQuantity);
	}		
}

function addToCart2(){
	var priceBat = parseFloat(document.getElementById("priceBat").textContent.substr(1));
		
	var cartPrice = parseFloat(document.getElementById("finalPrice").textContent.substr(1));
		
	document.getElementById("finalPrice").innerHTML = "$" + add(priceBat, cartPrice);
	
	var quantityBat = document.getElementById("batQuantity").value;
	var batId = document.getElementById("orderBat").value;
	
	var totalItems = parseInt(document.getElementById("totalItems").textContent);
	document.getElementById("totalItems").innerHTML = eval(totalItems + parseInt(quantityBat));
	
	orderList(batId, quantityBat);	
}

function addToCart3(){
	var priceBalls = parseFloat(document.getElementById("priceBalls").textContent.substr(1));
		
	var cartPrice = parseFloat(document.getElementById("finalPrice").textContent.substr(1));
	
	document.getElementById("finalPrice").innerHTML = "$" + add(priceBalls, cartPrice);
	
	var quantityBall = document.getElementById("ballQuantity").value;
	var ballId = document.getElementById("orderBall").value;
	
	var totalItems = parseInt(document.getElementById("totalItems").textContent);
	document.getElementById("totalItems").innerHTML = eval(totalItems + parseInt(quantityBall));
	
	orderList(ballId, quantityBall);
}

function addToCart4(){
	var priceShoes = parseFloat(document.getElementById("priceShoes").textContent.substr(1));
		
	var cartPrice = parseFloat(document.getElementById("finalPrice").textContent.substr(1));
		
	document.getElementById("finalPrice").innerHTML = "$" + add(priceShoes, cartPrice);
	
	var quantityShoes = document.getElementById("shoesQuantity").value;
	var shoeId = document.getElementById("orderShoes").value;
	
	var totalItems = parseInt(document.getElementById("totalItems").textContent);
	document.getElementById("totalItems").innerHTML = eval(totalItems + parseInt(quantityShoes));
	
	orderList(shoeId, quantityShoes);	
}


function orderList(value, quantity){

	
	quantity = parseInt(quantity);
	
	if(value == "small"){
		quantityArr[0] = eval(quantityArr[0] + quantity);
		
		document.getElementById("orders").innerHTML += productArr[0] + "  Qty: " + quantity + "<br/>";
		
	}else if(value == "medium"){
		quantityArr[1] = eval(quantityArr[1] + quantity);
		
		document.getElementById("orders").innerHTML += productArr[1] + "  Qty: " + quantity + "<br/>";
		
	}else if(value == "large"){
		quantityArr[2] = eval(quantityArr[2] + quantity);
		
		document.getElementById("orders").innerHTML += productArr[2] + "  Qty: " + quantity + "<br/>";
		
	}else if(value == "bat"){
		quantityArr[3] = eval(quantityArr[3] + quantity);
		
		document.getElementById("orders").innerHTML += productArr[3] + "  Qty: " + quantity + "<br/>";
		
	}else if(value == "ball"){
		quantityArr[4] = eval(quantityArr[4] + quantity);
		
		document.getElementById("orders").innerHTML += productArr[4] + "  Qty: " + quantity + "<br/>";
		
	}else if(value == "shoes"){
		quantityArr[5] = eval(quantityArr[5] + quantity);
		
		document.getElementById("orders").innerHTML += productArr[5] + "  Qty: " + quantity + "<br/>";
	}
}

function checkout(form){
	var userName = form.txtName.value;
	var finalPrice = document.getElementById("finalPrice").textContent.substr(1);
	
	if(userName == ""){
		alert("Please fill your name before checking out.");
	}else if(finalPrice == 0){
		alert("There are no items in the cart.");
	}else{
		var totalItems = calcTotalItems();
		
		
		var orderSummary = "<table align='center' border='1px' style='width:300px;'><tr><td align='center' colspan='2' bgcolor='black' style='color:white; height:43px'>Order Summary</td></tr>";
		orderSummary += "<tr><td bgcolor='black' style='color:white; height:38px'>Your Name</td><td>" + userName + "</td></tr>";
		orderSummary += "<tr><td bgcolor='black' style='color:white; height:38px'>Your Order(s)</td><td>" + dispFinalItems()+ "</td></tr>";
		orderSummary += "<tr><td bgcolor='black' style='color:white; height:38px'>No. of Items</td><td>" + totalItems + "</td></tr>";
		orderSummary += "<tr><td colspan='2' style='color:#226; height:38px'>Thank You for Your Purchase!</td></tr></table>";
		
		orderWindow = window.open("","","height=400px, width=400px, left=200px");
		orderWindow.document.write(orderSummary);
		
	}
}

function resetCart(form){
	form.txtName.value = "";
	document.getElementById("orders").innerHTML = ""; //form.id.innerHTML doesn't work
	document.getElementById("finalPrice").textContent = "$0";
}

function multiply(x, y){
	
	var sum = eval(x * y);
	
	return sum.toFixed(2);
}

function add(x, y){
	
	var sum = eval(x + y);
	
	return sum.toFixed(2);
}

function calcTotalItems(){
	var total = 0;
	
	for(var x = 0; x<quantityArr.length; x++){
		total+= quantityArr[x];
	}
	
	return total;
}

function dispFinalItems(){
	var order = "";
	
	for(var x = 0; x < quantityArr.length; x++){
		if(quantityArr[x] != 0){
			order += productArr[x] + " Qty(" + quantityArr[x] + ")<br/>"; 
		}
	}
	return order;
}