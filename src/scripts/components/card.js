function createCardElement(content) {
    return `
    <a href="/content-detail.html?id=${content._id}">
         <div class="card-item">
        <div class="card-img">
            <img id="gambar" src="${content.image[0] || './images/gambar-konten.png'}" alt="">
        </div>
        <div class="card-text">
            <h2 id="title">${content.title}</h2>
            <p id="story">${content.introduction}</p>
        </div>
    </div>
    </a>
    `;
}

export { createCardElement };
