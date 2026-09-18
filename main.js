
 let meals=[
    {name:"Teriyaki Chicken Bowl",
        image:"avatar-4.png",
        description:"Classic Italian pizza with fresh mozzarella and basil ",
    },

    {name:"Chicken Tikka Masala",
        image:"avatar-4.png",
        description:"Classic Italian pizza with fresh mozzarella and basil ",
    },
    {name:"Thai Green Curry",
        image:"avatar-4.png",
        description:"Classic Italian pizza with fresh mozzarella and basil ",
    },
    {name:"Chicken Stir-Fry",
        image:"avatar-4.png",
        description:"Classic Italian pizza with fresh mozzarella and basil ",
    },
    {name:"BBQ Pulled Pork",
        image:"avatar-4.png",
        description:"Classic Italian pizza with fresh mozzarella and basil ",
    },
    {name:"Margherita Pizza",
        image:"avatar-4.png",
        description:"Classic Italian pizza with fresh mozzarella and basil ",
    },
    {name:"Greek Moussaka",
        image:"avatar-4.png",
        description:"Classic Italian pizza with fresh mozzarella and basil ",
    },
    {name:"Teriyaki Chicken Bowl",
        image:"avatar-4.png",
        description:"Classic Italian pizza with fresh mozzarella and basil ",
    },
    {name:"Teriyaki Chicken Bowl",
image:"avatar-4.png",
        description:"Classic Italian pizza with fresh mozzarella and basil ",
    }
 ];
 let mealName = document.getElementById("mealname");
let mealDescription = document.getElementById("description");
 function getRandomMeal() {

    let randomIndex = Math.floor(Math.random() * meals.length);

    let randomMeal = meals[randomIndex];

    mealName.textContent = randomMeal.name;
    
    mealDescription.textContent = randomMeal.description;
}

let randomBtn = document.getElementById("randomBtn");

randomBtn.addEventListener("click", getRandomMeal);
    
   