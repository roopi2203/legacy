class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
      <div class="logo-header-con">
      <a href="#"><img class="logo-header" src="./images/legacy-logo.png" alt=""></a>
      </div>
        <ul class="nav-list">
          <li class="nav-item"><a href="#">HOME</a></li>
          <li class="nav-item"><a href="#">HISTORY</a></li>
          <li class="nav-item"><a href="#">FAQ</a></li>
          <li class="nav-item"><a href="#">ABOUT US</a></li>
        </ul>
        <div class="profile-images">
          <img src="./images/profile-picture-1.jpg" alt="Profile">
        </div>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
