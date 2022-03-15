class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegeterian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.imageUrl = imageUrl;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegeterian = isVegeterian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
