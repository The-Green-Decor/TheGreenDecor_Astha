const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/logo.png" class="logo" alt="">
        </div>

        <p class="footer-title">about us</p>
        <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro eius dicta quasi nulla fuga obcaecati rerum numquam, adipisci quo error commodi repellat, libero cupiditate! Magnam pariatur quos dignissimos voluptatem deleniti.</p>
        <p class="info">support emails - help@thegreendecor.com, customersupport@thegreendecor.com</p>
        <p class="info">telephone - 180 00 00 000, 180 00 00 002</p>
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

    `;
}

createFooter();