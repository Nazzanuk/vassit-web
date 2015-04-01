var app = angular.module('vassit-web', []);
var app = angular.module('vassit-web');

app.controller('HeaderController', ['$scope', function ($scope) {
    var header = 'transparent';

    $(window).scroll(function () {
        var offset = $(window).scrollTop();
        if (offset > 5) {
            setHeader('normal');
        } else {
            setHeader('transparent');
        }
    });

    var setHeader = function (flag) {
        if (flag == header) return;
        else header = flag;

        $('#header-transparent, #header').velocity('stop');
        if (header == 'transparent') {
            $('#header-transparent').velocity('transition.fadeIn', 700);
            $('#header').velocity('transition.fadeOut', 700);
        }

        if (header == 'normal') {
            $('#header').velocity('transition.fadeIn', 700);
            $('#header-transparent').velocity('transition.fadeOut', 700);
        }
    }
}]);
var app = angular.module('vassit-web');

app.controller('MenuController', ['$scope', function ($scope) {
    var showMenu = function () {
        $('#menu').velocity('transition.slideDownIn', 300);
        $('#menu .primary li').velocity('stop').hide().velocity('transition.slideRightIn', {
            duration: 300,
            stagger: 100
        });
    };

    var hideMenu = function () {
        $('#menu').velocity('transition.slideUpOut', 300);
        $('[data-sub]').hide();
        //$('#menu .primary li').velocity('stop').hide().velocity('transition.slideRightIn', {duration:300,stagger:100});
    };

    var showSub = function (name) {
        $('[data-sub]').hide();
        $('[data-sub="' + name + '"]').show();
        $('[data-sub="' + name + '"] li').velocity('stop').hide().velocity('transition.slideRightIn', {
            duration: 300,
            stagger: 100
        });
    };

    $('.promo, .promo-large').velocity('stop').hide().velocity('transition.slideLeftIn', {
        duration: 1000,
        stagger: 300
    });

    var hideSub = function (name) {
    };

    $(document).on('mouseover', '[data-has-sub]', function () {
        var name = $(this).attr('data-has-sub');
        showSub(name);

        $('[data-has-sub]').removeClass('active');
        $(this).addClass('active');

    });

    $(document).on('click', '.show-menu', function () {
        showMenu();
    });

    $(document).on('click', '.hide-menu', function () {
        hideMenu();
    });

    $scope.showMenu = showMenu;
    $scope.hideMenu = hideMenu;
    $scope.showSub = showSub;
    $scope.hideSub = hideSub;
}]);
