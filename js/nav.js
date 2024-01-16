const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="./index.html">
                <img src="images/Untitled.png" class="brand-logo" alt="">
            </a>
            <div class="nav-items">
                <a href="./search.html">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="search brand, product">
                        <button class="search-btn">search</button>
                    </div>
                </a>
                <a href="#"><img src="images" alt=""></a>
                <a href="#"><img src="images" alt=""></a>
            </div>
            <div class="hamburger">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
        <ul class="links-container" id="linkContainer">
            <li class="link-item"><a href="./index.html" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>`;
}
createNav();
