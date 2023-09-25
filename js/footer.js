const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="images/Untitled2.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
             <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
    </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus laborum facere quod voluptatum eligendi ratione numquam vel, voluptatibus quia alias id dolores a iure facilis, autem recusandae. Adipisci enim dolores debitis aut quidem! Autem pariatur minus, vel sed repellat doloremque. Aliquam ut beatae vitae amet expedita, odio tempore distinctio error eius officia rerum aut veniam earum voluptatum ab commodi exercitationem laboriosam hic, laborum aspernatur adipisci dolor, sunt fugiat voluptatibus. Amet, aliquam excepturi reprehenderit voluptate officiis obcaecati tempore repellendus corrupti blanditiis deleniti est eveniet nesciunt aliquid soluta dolorum optio nostrum! Maiores recusandae sed nostrum architecto a sequi corrupti illum quae?</p>
    <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
    <p class="info">telephone - 08105789011, 09066116544</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Empress Apparels, ...clothing the world</p>
    `;
}

createFooter();