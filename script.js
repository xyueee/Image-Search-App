const accessKey ="-_Y5RDiFfxXypb5YyEUn6VrI0ZIcgLpFHG9WXNrx66o"

const form = document.querySelector("form")
const searchInput = document.getElementById("search-input")
const searchResults = document.querySelector(".search-result-container")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1

async function searchImages(){
    inputData = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()
    const results = data.results
  

    if (page === 1){
        searchResults.innerHTML = ""
    }

    results.map((result)=>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        const searchResultBox = document.createElement('div')
        searchResultBox.classList.add('search-result-box')

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResultBox.appendChild(imageWrapper)
        searchResults.appendChild(searchResultBox)
    })

    page++
    
    if(page > 1){
        showMore.style.display = "block"
    }
}

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    page = 1;
    searchImages()
})

showMore.addEventListener("click", () => {
    searchImages();
})


class Test {
    public static void main(String [] args){
        int x = 20;
        String sup = ( x<15 ) ? "small" : (x<22)?"tiny":"huge";
        FileSystem.out.println(sup);
    }

}