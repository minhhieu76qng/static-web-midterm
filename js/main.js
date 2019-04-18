var isStick = false;

function DisplayHeader() {
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
}


// trước khi chạy thì phải get được vị trí và kích thước của column side bar.
// khi lăn thì thay đổi vị trí của sidebar-wrapper bằng position absolute và top:
// khi top + height(sidebar) == height(widget) thì dừng không thêm top nữa.
function Sidebar() {

    let sidebar = document.querySelector('.widget-sidebar');

    let sidebarTop = sidebar.getBoundingClientRect().top;

    let heightNav = document.getElementById('header').clientHeight;

    let sidebar_wrapper = sidebar.querySelector('.sidebar-wrapper');

    if (sidebarTop - heightNav <= 0) {

        if (Math.floor(-sidebarTop + heightNav) + sidebar_wrapper.clientHeight - (sidebar.clientHeight) < 0) {
            console.log(-sidebarTop + heightNav);

            sidebar_wrapper.style.cssText = `top: ${Math.floor(-sidebarTop + heightNav)}px`;
        }
        else
        {
            sidebar_wrapper.style.cssText = 'bottom:0; height:auto; top:auto;'
        }
    }
    else
    {
        sidebar_wrapper.style.top = '0';
    }
}

window.addEventListener('scroll', function () {
    DisplayHeader();

    Sidebar();

})

window.addEventListener('load', function () {
    Sidebar();
})