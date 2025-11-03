function analyze(data) {
	let stats = data.stats;
	let id = data.id;
	
	document.getElementById("id").innerHTML = id;
	document.getElementById("hp").innerHTML = stats[0].base_stat;
	document.getElementById("attack").innerHTML = stats[1].base_stat;
	document.getElementById("defense").innerHTML = stats[2].base_stat;
	document.getElementById("special-attack").innerHTML = stats[3].base_stat;
	document.getElementById("special-defense").innerHTML = stats[4].base_stat;
	document.getElementById("speed").innerHTML = stats[5].base_stat;
	
	
	let region = "MISSING_REGION";
	if(id < 152){
		document.getElementById("region-image").src = "region1.jpg";
		region = "Kanto";
	}else if(251 >= id){
		document.getElementById("region-image").src = "region2.jpg";
		region = "Johto";
	}else if(386 >= id){
		document.getElementById("region-image").src = "region3.jpg";
		region = "Hoenn";
	}else if(493 >= id){
		document.getElementById("region-image").src = "region4.jpg";
		region = "Sinnoh";
	}else if(649 >= id){
		document.getElementById("region-image").src = "region5.jpg";
		region = "Unova";
	}else if(721 >= id){
		document.getElementById("region-image").src = "region6.jpg";
		region = "Kalos";
	}else if(809 >= id){
		document.getElementById("region-image").src = "region7.jpg";
		region = "Alola";
	}else if(905 >= id){
		document.getElementById("region-image").src = "region8.jpg";
		region = "Galar";
	}else{
		document.getElementById("region-image").src = "region9.jpg";
		region = "Hisui";
	}
	
	document.getElementById("region-text").innerHTML = region;
}

function submit() {
	$("#region").show();
	let url = "https://pokeapi.co/api/v2/pokemon/";
	let pokemon = document.getElementById("pokemon-name").value;
	url = url + String(pokemon).toLowerCase();
    
	$.get(url, function(data){
  			
			analyze(data);
	});
	
}
