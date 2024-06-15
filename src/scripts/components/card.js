function createCardElement(content) {
    return `
    <div class="card-item">
        <div class="card-img">
            <img id="gambar" src="${content.image || './images/gambar-konten.png'}" alt="">
        </div>
        <div class="card-text">
            <h2 id="title">${content.title}</h2>
            <p id="story">${content.story}</p>
        </div>
    </div>
    `;
}

export { createCardElement };
