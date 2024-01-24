<template>
  <section
    class="max-w-[46rem] w-full md:p-10 rounded-[1.5rem] bg-white flex flex-col gap-10"
  >
    <img
      class="w-full md:rounded-[.75rem] h-[18.75rem] object-cover"
      src="/omlet.jpg"
      alt=""
    />

    <div class="flex flex-col px-8 pb-10 md:px-0">
      <h2 class="heading-l text-dark-charcoal">Simple Omelette Recipe</h2>
      <p class="body text-wenge-brown mt-6">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>

      <div class="p-7 rounded-[.75rem] bg-snow flex flex-col gap-4 w-full mt-8">
        <h3 class="heading-s text-dark-raspberry font-semibold">
          Preparation time
        </h3>

        <ul
          class="text-wenge-brown body list-disc px-2 list-inside flex flex-col gap-2"
        >
          <li>
            <span class="ml-4"
              ><span class="font-bold">Total:</span> Approximately 10
              minutes</span
            >
          </li>
          <li>
            <span class="ml-4"
              ><span class="font-bold">Preparation:</span> 5 minutes</span
            >
          </li>
          <li>
            <span class="ml-4"
              ><span class="font-bold">Cooking:</span> 5 minutes</span
            >
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-6 mt-8">
        <h3 class="heading-m text-brandy-red">Ingredients</h3>
        <ul
          class="list-disc list-inside px-2 flex flex-col gap-2 body text-wenge-brown"
        >
          <li><span class="ml-4">2-3 large eggs</span></li>
          <li><span class="ml-4">Salt, to taste</span></li>
          <li><span class="ml-4">Pepper, to taste</span></li>
          <li><span class="ml-4">1 tablespoon of butter or oil</span></li>
          <li>
            <span class="ml-4"
              >Optional fillings: cheese, diced vegetables, cooked meats,
              herbs</span
            >
          </li>
        </ul>
      </div>

      <div class="w-full h-[1px] my-8 bg-white-coffee"></div>

      <div class="flex flex-col gap-6">
        <h3 class="heading-m text-brandy-red">Instructions</h3>
        <ol class="list-inside px-2 flex flex-col gap-2 body text-wenge-brown">
          <li class="flex gap-4">
            <span class="font-bold">1.</span>
            <span
              ><span class="font-bold">Beat the eggs:</span> In a bowl, beat the
              eggs with a pinch of salt and pepper until they are well mixed.
              You can add a tablespoon of water or milk for a fluffier
              texture.</span
            >
          </li>
          <li class="flex gap-4">
            <span class="font-bold">2.</span>
            <span 
              ><span class="font-bold">Heat the pan:</span> Place a non-stick
              frying pan over medium heat and add butter or oil.</span
            >
          </li>
          <li class="flex gap-4">
            <span class="font-bold">3.</span>
            <span
              ><span class="font-bold">Cook the omelette:</span> Once the butter
              is melted and bubbling, pour in the eggs. Tilt the pan to ensure
              the eggs evenly coat the surface.</span
            >
          </li>
          <li class="flex gap-4">
            <span class="font-bold">4.</span>
            <span
              ><span class="font-bold">Add fillings (optional):</span> When the
              eggs begin to set at the edges but are still slightly runny in the
              middle, sprinkle your chosen fillings over one half of the
              omelette.</span
            >
          </li>
          <li class="flex gap-4">
            <span class="font-bold">5.</span>
            <span
              ><span class="font-bold">Fold and serve:</span> As the omelette
              continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a
              plate.</span
            >
          </li>
          <li class="flex gap-4">
            <span class="font-bold">6.</span>
            <span 
              ><span class="font-bold">Enjoy:</span> Serve hot, with additional
              salt and pepper if needed.</span
            >
          </li>
        </ol>
      </div>

      <div class="w-full h-[1px] my-8 bg-white-coffee"></div>

      <div class="flex flex-col">
        <h3 class="heading-m text-brandy-red">Nutrition</h3>
        <p class="body text-wenge-brown mt-6">The table below shows nutritional values per serving without the additional fillings.</p>

        <ul class="flex flex-col gap-3 mt-6">
          <li class="pb-3 px-8 grid grid-cols-2 gap-4 body border-b border-white-coffee">
            <span class="text-wenge-brown">Calories</span>
            <span class="font-bold text-brandy-red">277kcal</span>
          </li>

          <li class="pb-3 px-8 grid grid-cols-2 gap-4 body border-b border-white-coffee">
            <span class="text-wenge-brown">Carbs</span>
            <span class="font-bold text-brandy-red">0g</span>
          </li>

          <li class="pb-3 px-8 grid grid-cols-2 gap-4 body border-b border-white-coffee">
            <span class="text-wenge-brown">Protein</span>
            <span class="font-bold text-brandy-red">20g</span>
          </li>
          
          <li class="pb-3 px-8 grid grid-cols-2 gap-4 body">
            <span class="text-wenge-brown">Fat</span>
            <span class="font-bold text-brandy-red">22g</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
