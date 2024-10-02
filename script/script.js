const input = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
const recipeList = document.querySelector(".recipe-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target[0].value;
  searchRecipes(inputValue);
});

async function searchRecipes(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();
  showRecipes(data.meals);
}

function showRecipes(recipes) {
  recipeList.innerHTML = recipes
    .map(
      (item) => `
    

    <div class="recipe-card">

    <img src="${item.strMealThumb}" alt="receita foto">
    <h3>${item.strMeal}</h3>
    
    </div>
    
    `
    )
    .join("");
}
