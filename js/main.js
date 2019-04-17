var isStick = false;
window.addEventListener('scroll', function () {
    let headerHeight = document.getElementById('header').clientHeight;

    if (headerHeight < window.scrollY) {
        if (isStick === false) {
            document.getElementById('header').querySelector('.top-header').style.display = 'none';

            document.getElementById('header').style.cssText = 'position: fixed; top : 0; width: 100%;'
            document.getElementById('nav-search').querySelector('.container').classList.add('container-fluid');
            document.getElementById('nav-search').querySelector('.container').classList.remove('container');

            document.getElementById('nav-search').querySelector('.container-fluid .sub-logo').style.display = 'block';

            isStick = true;
        }
    }
    else {
        if (isStick === true) {
            document.getElementById('header').querySelector('.top-header').style.display = '';
            
            document.getElementById('header').style.cssText = ''
            
            document.getElementById('nav-search').querySelector('.container-fluid').classList.add('container');
            document.getElementById('nav-search').querySelector('.container-fluid').classList.remove('container-fluid');
            
            document.getElementById('nav-search').querySelector('.container .sub-logo').style.display = 'none';
        }

        isStick = false;
    }
})