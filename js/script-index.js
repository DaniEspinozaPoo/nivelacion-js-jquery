$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);

	for(i=0; i< recipesArray.length; i++){
		if(recipesArray[i].highlighted == true){
			
			

}
}
};

}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


$(document).ready(function(){
	$('#oculto').hide (function(){
	  $('span').onload();
	  }
	  );
	  }
	  );//oculto mediante id


$(document).ready(function printNews(){
	$('#parrafo').html('<strong>NUEVAS RECETAS</strong>');
	});


//.html() – Con esta función se pueden obtener y agregar textos con HTML.

//.text() – Funciona igual que la función anterior pero solamente se pueden obtener y agregar textos.

//.val() – Funciona solamente sobre un input para obtener y agregar textos.

//.append() – Agrega al contenido existente texto con HTML.
