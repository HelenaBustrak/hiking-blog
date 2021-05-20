const url = "https://hikingblog.helbus.no/wp-json/wc/store/products?per_page=12";
const blogPosts = document.querySelector(".blog_posts");
const clickMore = document.querySelector(".button");
const morePosts = document.querySelector(".more_posts");



async function fetchBlogs() {
    try {
        const response = await fetch(url);
        const blogs = await response.json();

        blogPosts.innerHTML = ``;

        console.log(blogs);

        for(let i = 0; i < 9; i++) {

            blogPosts.innerHTML += `
            <div class="blog_post_page">
            <a href="blog-specific-page.html?id=${blogs[i].id}" class="blog_post_link"><img class="blog_img_page" src="${blogs[i].images[0].src}" alt ="${blogs[i].images[0].alt}">
            <div class="blog_info_page">
               <h3>${blogs[i].name}</h3>
               ${blogs[i].short_description}
               <h5>+ See post</h5>     
            </div>
          </div></a>`;

        }

        for(let i = 10; i < blogs.length; i++) {
            morePosts.innerHTML += `
            <div class="blog_post_page">
            <a href="blog-specific-page.html?id=${blogs[i].id}" class="blog_post_link"><img class="blog_img_page" src="${blogs[i].images[0].src}" alt ="${blogs[i].images[0].alt}">
            <div class="blog_info_page">
               <h3>${blogs[i].name}</h3>
               ${blogs[i].short_description}
               <h5>+ See post</h5>     
            </div>
          </div></a>`;


          clickMore.addEventListener("click", function () {
            morePosts.style.display = "grid";
            morePosts.style.gridTemplateRows = "1fr";
            clickMore.style.display = "none";
            console.log("!");
    })
        }

    }

    catch(error) {
        console.log(error);
    }
};


fetchBlogs();












