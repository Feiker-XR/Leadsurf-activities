var pages = function () {};
var router = function () {};



//1,路由配置
router.login = '/login';
router.home = '/home';

//2，页面配置
pages.login = {
    'header': {templateUrl: null},
    'contents': {templateUrl: 'include/login.html'},
    'footer': {templateUrl: null}
}
pages.home = {
    'header': {
        templateUrl: 'include/header.html', controller: 'homeCtrl'
    },
    'contents': {templateUrl: 'include/homecontent.html'},
    'footer': {templateUrl: 'include/footer.html'}
}

