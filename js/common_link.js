/* head common link */
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('head');
  
    container.innerHTML = `

    <!-- 파비콘 href="assets/favicon.ico"  -->
    <link rel="shortcut icon" type="image/x-icon" href="../assets/favicon.ico">

    <!-- style -->
    <link rel="stylesheet" href="../css/webfont.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
    <link rel="stylesheet" href="../css/default.css">
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/style.css">

    <link rel="stylesheet" href="../css/mediaquery.css">

    `;
});