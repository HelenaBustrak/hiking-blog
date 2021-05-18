const url = "https://hikingblog.helbus.no/wp-json/wc/store/products";
const blogPosts = document.querySelector(".blog_posts");
const clickMore = document.querySelector("#click_more");

async function fetchBlogs() {
    try {
        const response = await fetch(url);
        const blogs = await response.json();

        console.log(blogs);

        for(let i = 0; i < blogs.length; i++) {
            
            blogPosts.innerHTML += `
            <div class="blog_post_page">
            <a href="blog-specific-page.html?id=${blogs[i].id}" class="blog_post_link"><img class="blog_img_page" src="${blogs[i].images[0].src}" alt ="${blogs[i].images[0].alt}">
            <div class="blog_info_page">
               <h3>${blogs[i].name}</h3>
               ${blogs[i].short_description}    
            </div></a>
          </div>`;


        }

    }

    catch(error) {
        console.log(error);
    }
};


fetchBlogs();