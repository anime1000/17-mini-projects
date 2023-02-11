class galleryPhotos{
    constructor(){
        this.url = 'kuu7l2yX6ITd0DLNHQm4tWF0WM7po31J1l8MvkIiTG2Q0mDeiRxImpLM';
        this.galleryBlock = document.querySelector('.gallary');
        this.search = document.querySelector('.header form');
        this.loadmorebtn = document.querySelector('.loadmore');
        this.pageIndex = 1;
        this.eventHandle();
    }

    eventHandle(){
        document.addEventListener('DOMContentLoaded', ()=>{
            this.getImg(1);
        });
        this.search.addEventListener('submit', (e)=>{
            this.getImgSearch(e); 
        });
        this.loadmorebtn.addEventListener('click', ()=>{
            this.loadmore(this.pageIndex);
        });
    }
    async getImg(index){
        const baseURL =  `https://api.pexels.com/v1/curated?page=${index}per_page=1`;
        const date = await this.fetchImages(baseURL);  
        this.generateHTML(date.photos);
        console.log(date);
    }
    async fetchImages(baseURL){
        const response = await fetch(baseURL, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                Authorization: this.url,
            }
            
        }); 
        const date = await response.json();
        return date;
    }
    generateHTML(photo){
        photo.forEach((e)=>{
            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `<a href='#'><img src='${e.src.medium}'><h3>${e.photographer}</h3></a>`;
            this.galleryBlock.appendChild(item);
        });
    }
    async getImgSearch(e){
        e.preventDefault();
        this.galleryBlock.innerHTML = '';

        const searcValue =e.target.querySelector('input').value;
        const baseURL = await `https://api.pexels.com/v1/search?query=${searcValue}&per_page=12`;
        const date = await this.fetchImages(baseURL);
        this.generateHTML(date.photos);
    }
    loadmore(e){
        let index = ++ this.pageIndex;
    }
}

const gallaryS = new galleryPhotos;