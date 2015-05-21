var app = angular.module('vassit-web');

app.controller('MenuController', ['$scope', function ($scope) {
    var currentMenu = "";
    var currentSub = "";

    var showMenu = function () {
        if (currentMenu != "") return;
        $('#menu, .menu-background').velocity('transition.slideDownIn', 300);
        $('#menu .primary li').velocity('stop').hide().velocity('transition.slideRightIn', {
            duration: 300,
            stagger: 100
        });
    };

    var hideMenu = function () {
        currentMenu = "";
        $('#menu, .menu-background').velocity('transition.slideUpOut', 300);
        $('[data-menu]').hide();
        $('[data-has-menu]').removeClass('active');
    };

    var showMenuItems = function () {
        $('[data-menu]').hide();
        $('[data-menu="' + currentMenu + '"]').show();
        $('[data-menu="' + currentMenu + '"] li').velocity('stop').hide().velocity('transition.slideRightIn', {
            duration: 300,
            stagger: 100
        });
    };

    var showSub = function () {
        $('[data-sub]').hide();
        $('[data-sub="' + currentSub + '"]').show();
        $('[data-sub="' + currentSub + '"] li').velocity('stop').hide().velocity('transition.slideRightIn', {
            duration: 300,
            stagger: 100
        });
    };

    var hideSubs = function () {
        $('[data-sub]').hide();
    };

    $(document).on('mouseover', '[data-has-sub]', function () {
        currentSub = $(this).attr('data-has-sub');
        showSub();
        $('[data-has-sub]').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click', '[data-has-menu]', function () {
        if ($(this).hasClass('active')) {
            hideMenu();
            return;
        }

        showMenu();
        currentMenu = $(this).attr('data-has-menu');
        hideSubs();
        showMenuItems();
        $('[data-has-menu]').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click', '.show-menu', function () {
        showMenu();
    });

    $(document).on('click', '.hide-menu', function () {
        hideMenu();
    });

    var initialAnimations = function () {
        $('.promo, .promo-large').velocity('stop').hide().velocity('transition.slideLeftIn', {
            duration: 1000,
            stagger: 300,
            display: "block"
        });

        $('#header').velocity('stop').hide().velocity('transition.slideDownBigIn', {
            duration: 1000,
            display: "block"
        });

        $('#header li').velocity('stop').hide().velocity('transition.slideDownIn', {
            duration: 1000,
            stagger: 300,
            display: "inline-block"
        });
    };

    initialAnimations();

    $scope.showMenu = showMenu;
    $scope.hideMenu = hideMenu;
    $scope.showSub = showSub;
}]);