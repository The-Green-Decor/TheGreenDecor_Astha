const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <img src="img/logo.png" class="brand-logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Search Plants">
                <button class="search-btn">search</button>
            </div>
            <a href="#"><img src="img/user.png" alt=""></a>
            <a href="#"><img src="img/cart.png" alt=""></a>
        </div>
    </div>
    `;
}

createNav();