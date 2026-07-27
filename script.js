// Smooth Scroll

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if(href.startsWith("#")){

            e.preventDefault();

            const target = document.querySelector(href);

            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        }

    });

});



// Card Animation

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});


cards.forEach(card=>{

    observer.observe(card);

});



// AI Outfit Suggestion

function suggestOutfit(){

const outfits=[

"👕 White Shirt + Blue Jeans",

"🖤 Black Dress + Stylish Accessories",

"💼 Formal Blazer + Trousers",

"🌸 Pink Top + Denim Jeans",

"👗 Summer Floral Dress",

"🤍 Beige Shirt + Black Pants"

];


let random = Math.floor(Math.random()*outfits.length);


document.getElementById("outfitResult").innerHTML =
"✨ AI Suggestion: " + outfits[random];

}



// Contact Form

const form=document.querySelector("form");


if(form){

form.addEventListener("submit",function(e){

e.preventDefault();


alert("Thank You! Your message has been sent successfully 😊");


form.reset();


});

}