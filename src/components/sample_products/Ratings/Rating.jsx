import React from "react";

const Rating = () => {
  return (
    <div>
      <div class="rating rating-md rating-half mt-2">
        <input type="radio" name="rating-10" class="rating-hidden" />
        <p className="mr-3 font-bold text-md underline">4/5</p>
        <input
          type="radio"
          name="rating-10"
          class="bg-orange-500 mask mask-star-2 mask-half-1"
          disabled
        />

        <input
          type="radio"
          name="rating-10"
          class="bg-orange-500 mask mask-star-2 mask-half-2"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-orange-500 mask mask-star-2 mask-half-1"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-orange-500 mask mask-star-2 mask-half-2"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-orange-500 mask mask-star-2 mask-half-1"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-orange-500 mask mask-star-2 mask-half-2"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-orange-500 mask mask-star-2 mask-half-1"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-orange-500 mask mask-star-2 mask-half-2"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-orange-500 mask mask-star-2 mask-half-1"
          checked
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-orange-500 mask mask-star-2 mask-half-2"
          disabled
        />
      </div>
    </div>
  );
};

export default Rating;
