const url = "https://hikingblog.helbus.no/wp-json/wc/store/products";
const main = document.querySelector("main");
const leftArrow = document.querySelector(".fa-long-arrow-alt-left");
const rightArrow = document.querySelector(".fa-long-arrow-alt-right");
const slider = document.querySelector(".slider");
const indicatorParents = document.querySelector(".arrows ul");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const loader = document.querySelector(".loader");




async function fetchBlogs() {
    try {
        const response = await fetch(url);
        const blogs = await response.json();

        slide1.innerHTML = ``;

        console.log(blogs);


        for(let i = 0; i < blogs.length; i++) {
            if (i === 3) {
                break;  
            }


            slide1.innerHTML += `
            <div class="blog_post">
            <a href="blog-specific-page.html?id=${blogs[i].id}" class="blog_post_link"><img class="blog_img" src="${blogs[i].images[0].src}">
              <div class="blog_info">
                 <h3>${blogs[i].name}</h3>
                ${blogs[i].short_description}
                <h5>+ See post</h5> 
              </div>
            </div></a>`;

        }

        for(let i = 3; i < blogs.length; i++) {
            if (i === 6) {
                break;
            }

            slide2.innerHTML += `
            <div class="blog_post">
            <a href="blog-specific-page.html?id=${blogs[i].id}" class="blog_post_link"><img class="blog_img" src="${blogs[i].images[0].src}">
              <div class="blog_info">
                 <h3>${blogs[i].name}</h3>
                 ${blogs[i].short_description}
                 <h5>+ See post</h5>       
              </div>
            </div></a>`;
        }

        for(let i = 6; i < blogs.length; i++) {
            if (i === 9) {
                break;
            }

            slide3.innerHTML += `
            <div class="blog_post">
            <a href="blog-specific-page.html?id=${blogs[i].id}" class="blog_post_link"><img class="blog_img" src="${blogs[i].images[0].src}">
              <div class="blog_info">
                 <h3>${blogs[i].name}</h3>
                 ${blogs[i].short_description}
                 <h5>+ See post</h5>     
              </div>
            </div></a>`;
        }






    }
    catch(error) {
        console.log(error);
    }
}



fetchBlogs();

sectionIndex = 0;


document.querySelectorAll(".arrows li").forEach(function(indicator, ind) {
    indicator.addEventListener("click", function() {
        sectionIndex = ind;
        document.querySelector(".arrows .selected").classList.remove("selected");
        indicator.classList.add("selected");
        slider.style.transform = "translate(" + (sectionIndex) * -33.33 + "%)";
    });
});

leftArrow.addEventListener("click", function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    document.querySelector(".arrows .selected").classList.remove("selected");
    indicatorParents.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + (sectionIndex) * -33.33 + "%)";
});

rightArrow.addEventListener("click", function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    document.querySelector(".arrows .selected").classList.remove("selected");
    indicatorParents.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + (sectionIndex) * -33.33 + "%)";
});

