/* common header */
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('header');
    container.innerHTML = `

    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-xxl">
            <h1><a class="navbar-brand" href="#">CHAEB</a></h1>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!--nav-->
            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="../index.html">HOME</a></li>
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="../pages/about_me.html">ABOUT ME</a></li>
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">PORTFOLIO</a></li>
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">PAGES</a></li>
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">CONTACT</a></li>
                <!-- dropdown & disabled
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                -->
                </ul>
            </div>
        </div>
    </nav>
    
    `;
});


/* common footer */
// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.querySelector('footer');
//     container.innerHTML = `

//     <!-- footer -->

//     `;
// });