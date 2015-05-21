var app = angular.module('vassit-web');

app.controller('HeaderController', ['$scope', '$interval', function ($scope, $interval) {
    var header = 'transparent';

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
    };

    var banners = $('.banner');
    var currentBanner = 0;

    $interval(function () {
        var nextBanner = currentBanner + 1;
        if (nextBanner >= banners.length) nextBanner = 0;

        if (nextBanner == currentBanner) return;

        $(banners[currentBanner]).velocity('transition.fadeOut', 2000);
        $(banners[nextBanner]).velocity('transition.fadeIn', 2000);

        currentBanner = nextBanner;
    }, 7000);
}]);