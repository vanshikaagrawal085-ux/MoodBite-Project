// FOOD DATABASE 
const foodDB = {
 

happy:{
  veg:{
    low:{name:"Cheese Maggi 🍜",img:"https://source.unsplash.com/400x300/?cheese-maggi",link:"https://www.zomato.com"},
    mid:{name:"Paneer Butter Masala 🍲",img:"https://source.unsplash.com/400x300/?paneer-butter-masala",link:"https://www.zomato.com"},
    high:{name:"Truffle Pasta 🍝",img:"https://source.unsplash.com/400x300/?truffle-pasta",link:"https://www.swiggy.com"}
  },
  nonveg:{
    low:{name:"Chicken Roll 🌯",img:"https://source.unsplash.com/400x300/?chicken-roll",link:"https://www.zomato.com"},
    mid:{name:"Butter Chicken 🍗",img:"https://source.unsplash.com/400x300/?butter-chicken",link:"https://www.swiggy.com"},
    high:{name:"Grilled Salmon 🐟",img:"https://source.unsplash.com/400x300/?grilled-salmon",link:"https://www.swiggy.com"}
  }
},

romantic:{
  veg:{
    low:{name:"Strawberry Shake 🍓",img:"https://source.unsplash.com/400x300/?strawberry-shake",link:"https://www.zomato.com"},
    mid:{name:"White Sauce Pasta 🍝",img:"https://source.unsplash.com/400x300/?white-sauce-pasta",link:"https://www.zomato.com"},
    high:{name:"Red Velvet Cake 🍰",img:"https://source.unsplash.com/400x300/?red-velvet-cake",link:"https://www.swiggy.com"}
  },
  nonveg:{
    low:{name:"Chicken Sandwich 🥪",img:"https://source.unsplash.com/400x300/?chicken-sandwich",link:"https://www.zomato.com"},
    mid:{name:"Garlic Butter Chicken 🧄",img:"https://source.unsplash.com/400x300/?garlic-butter-chicken",link:"https://www.swiggy.com"},
    high:{name:"Steak 🥩",img:"https://source.unsplash.com/400x300/?steak-dinner",link:"https://www.swiggy.com"}
  }
},

energetic:{
  veg:{
    low:{name:"Veg Sandwich 🥪",img:"https://source.unsplash.com/400x300/?veg-sandwich",link:"https://www.zomato.com"},
    mid:{name:"Margherita Pizza 🍕",img:"https://source.unsplash.com/400x300/?margherita-pizza",link:"https://www.swiggy.com"},
    high:{name:"Loaded Nachos 🌮",img:"https://source.unsplash.com/400x300/?loaded-nachos",link:"https://www.swiggy.com"}
  },
  nonveg:{
    low:{name:"Chicken Nuggets 🍗",img:"https://source.unsplash.com/400x300/?chicken-nuggets",link:"https://www.zomato.com"},
    mid:{name:"Chilli Chicken 🍗",img:"https://source.unsplash.com/400x300/?chilli-chicken",link:"https://www.swiggy.com"},
    high:{name:"Grilled Chicken Steak 🥩",img:"https://source.unsplash.com/400x300/?chicken-steak",link:"https://www.swiggy.com"}
  }
},

sad:{
  veg:{
    low:{name:"Maggi 🍜",img:"https://source.unsplash.com/400x300/?maggi-noodles",link:"https://www.zomato.com"},
    mid:{name:"Chocolate Pancake 🥞",img:"https://source.unsplash.com/400x300/?chocolate-pancake",link:"https://www.swiggy.com"},
    high:{name:"Blueberry Cheesecake 🍰",img:"https://source.unsplash.com/400x300/?blueberry-cheesecake",link:"https://www.swiggy.com"}
  },
  nonveg:{
    low:{name:"Egg Fried Rice 🍳",img:"https://source.unsplash.com/400x300/?egg-fried-rice",link:"https://www.zomato.com"},
    mid:{name:"Chicken Momos 🥟",img:"https://source.unsplash.com/400x300/?chicken-momos",link:"https://www.swiggy.com"},
    high:{name:"Creamy Chicken Pasta 🍝",img:"https://source.unsplash.com/400x300/?creamy-chicken-pasta",link:"https://www.swiggy.com"}
  }
},

tired:{
  veg:{
    low:{name:"Banana Smoothie 🍌",img:"https://source.unsplash.com/400x300/?banana-smoothie",link:"https://www.zomato.com"},
    mid:{name:"Veg Khichdi 🍲",img:"https://source.unsplash.com/400x300/?khichdi",link:"https://www.swiggy.com"},
    high:{name:"Avocado Toast 🥑",img:"https://source.unsplash.com/400x300/?avocado-toast",link:"https://www.swiggy.com"}
  },
  nonveg:{
    low:{name:"Boiled Eggs 🥚",img:"https://source.unsplash.com/400x300/?boiled-eggs",link:"https://www.zomato.com"},
    mid:{name:"Chicken Soup 🍲",img:"https://source.unsplash.com/400x300/?chicken-soup",link:"https://www.swiggy.com"},
    high:{name:"Grilled Chicken Salad 🥗",img:"https://source.unsplash.com/400x300/?grilled-chicken-salad",link:"https://www.swiggy.com"}
  }
},

party:{
  veg:{
    low:{name:"French Fries 🍟",img:"https://source.unsplash.com/400x300/?french-fries",link:"https://www.zomato.com"},
    mid:{name:"Margherita Pizza 🍕",img:"https://source.unsplash.com/400x300/?pizza-slice",link:"https://www.swiggy.com"},
    high:{name:"Loaded Cheese Pizza 🧀",img:"https://source.unsplash.com/400x300/?cheese-pizza",link:"https://www.swiggy.com"}
  },
  nonveg:{
    low:{name:"Chicken Nuggets 🍗",img:"https://source.unsplash.com/400x300/?fried-chicken",link:"https://www.zomato.com"},
    mid:{name:"Pepperoni Pizza 🍕",img:"https://source.unsplash.com/400x300/?pepperoni-pizza",link:"https://www.swiggy.com"},
    high:{name:"BBQ Chicken Pizza 🍕",img:"https://source.unsplash.com/400x300/?bbq-chicken-pizza",link:"https://www.swiggy.com"}
  }
},

healthy:{
  veg:{
    low:{name:"Sprout Salad 🥗",img:"https://source.unsplash.com/400x300/?sprout-salad",link:"https://www.zomato.com"},
    mid:{name:"Quinoa Bowl 🥗",img:"https://source.unsplash.com/400x300/?quinoa-bowl",link:"https://www.swiggy.com"},
    high:{name:"Vegan Buddha Bowl 🥗",img:"https://source.unsplash.com/400x300/?buddha-bowl",link:"https://www.swiggy.com"}
  },
  nonveg:{
    low:{name:"Boiled Chicken 🍗",img:"https://source.unsplash.com/400x300/?boiled-chicken",link:"https://www.zomato.com"},
    mid:{name:"Grilled Fish 🐟",img:"https://source.unsplash.com/400x300/?grilled-fish",link:"https://www.swiggy.com"},
    high:{name:"Keto Chicken Plate 🍗",img:"https://source.unsplash.com/400x300/?keto-meal",link:"https://www.swiggy.com"}
  }
}

};


// Generate Food 
function generateFood(){

  const mood = document.getElementById("mood").value;
  const budget = document.getElementById("budget").value;
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");
  const button = document.querySelector("button");

  if(!mood || !budget || !type){
    result.innerHTML = `
      <p class="text-pink-500 font-semibold">
        Please select all fields 💗
      </p>
    `;
    return;
  }

  // Disable button
  button.disabled = true;
  button.innerText = "Generating... 💕";

  // Show loading
  result.innerHTML = `
    <div class="text-pink-500 font-semibold animate-pulse">
      Finding your perfect bite... ✨
    </div>
  `;
  localStorage.setItem("lastMood", mood);
  setTimeout(() => {

    const food = foodDB[mood][type][budget];

    result.innerHTML = `
      <div class="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-[350px] mx-auto">
         <p class="italic text-gray-500 mb-4">
      Because you're feeling ${mood} 💕
    </p>
        <h2 class="text-2xl font-bold text-pink-500 mb-2">
          ${food.name}
        </h2>

        <img src="${food.img}" 
             class="rounded-2xl mb-6 shadow-md"
             alt="${food.name}">

        <a href="${food.link}" target="_blank"
           class="block bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold transition duration-300">
           View Nearby Restaurants 🍽️
        </a>

      </div>
    `;

    button.disabled = false;
    button.innerText = "Generate 💗";

  }, 1000);
}



// ⭐ Rating System
let selectedRating = 0;

document.querySelectorAll(".rating span").forEach(star => {
  star.addEventListener("click", function(){
    selectedRating = this.getAttribute("data-value");

    document.querySelectorAll(".rating span").forEach(s => s.classList.remove("active"));

    for(let i=0;i<selectedRating;i++){
      document.querySelectorAll(".rating span")[i].classList.add("active");
    }
  });
});

// Feedback Submit
document.getElementById("feedbackForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("username").value;
  const feedback = document.getElementById("feedback").value;
  const reviews = document.getElementById("reviews");
 
  if(selectedRating == 0){
    alert("Please select a rating 💗");
    return;
  }
 
  const review = document.createElement("div");
  review.classList.add("review-card");
  review.innerHTML = `
    <h3>${name}</h3>
    <p>${"⭐".repeat(selectedRating)}</p>
    <p>${feedback}</p>
  `;

  reviews.appendChild(review);

  this.reset();
  selectedRating = 0;
  document.querySelectorAll(".rating span").forEach(s => s.classList.remove("active"));
});
window.onload = function(){
  const savedMood = localStorage.getItem("lastMood");
  if(savedMood){
    document.getElementById("mood").value = savedMood;
  }
};
