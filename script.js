const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const loadMore = document.getElementById('load-more');

const access_key = 'DtpApA18pBktfI1lwjoi2c7McQTZL48s6R4FKJi3zLs';
let keyWord="";
let page=1;

async function searchImages(){
    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`);
    const data = await response.json();

    if(page ===1){
        searchResult.innerHTML = '';
    }
    
    const results = data.results;

    results.map((result) => {
        const img = document.createElement('img');
        img.src = result.urls.small;
        const imgLink = document.createElement('a');
        imgLink.href = result.links.html;
        imgLink.target = '_blank';
        imgLink.appendChild(img);
        searchResult.appendChild(imgLink);
    })
    loadMore.style.display = 'block';
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    keyword = searchBox.value;
    searchImages();
});

loadMore.addEventListener('click', () => {
    page++;
    searchImages();
});
