class Blog{
    constructor(title, detail) {
        this.title = title
        this.detail = detail
    }

    addTitle() {

        var title_card = document.createElement('h1');
        title_card.setAttribute("id", "blog-title");
        title_card.innerHTML += this.title;
        document.getElementById('card-text').appendChild(title_card);
        console.log(title_card);
    }

    addDescription() {

        let description_para = document.createElement("p");
        description_para.setAttribute("id", "blog-description");
        let dtext = document.createTextNode(`${this.detail}`)
        description_para.appendChild(dtext);
        document.querySelector("#card-text").appendChild(description_para)
        console.log(description_para);
    }
}


var addBlog = document.querySelector("#addBlog")
var close = document.querySelector("#close")
var popup = document.querySelector("#popupContact")

addBlog.addEventListener("click", () => {
    popup.style.display = "block"
})

close.addEventListener("click", () => {
    popup.style.display = "none"
})



document.querySelector("#post").addEventListener("click", addPost);

function addPost() {
    let title = document.getElementById("title").value;
    let detail = document.getElementById("detail").value;

    if (title && detail) {
        let blog = new Blog(title, detail)

        //calling functions from the class
        blog.addTitle()
        blog.addDescription()

        popup.style.display = "none"
    } else {
        document.querySelector("#message").style.display = "inline-block"
    }
}

document.querySelector("#post").addEventListener("click",function(){
    document.querySelector("#popupContact").style.display="none";
    //adding image while return the title and description
    var img=document.createElement("img");
    img.setAttribute("src","./assets/javascript.png");
    document.querySelector("#card-text").appendChild(img);
})