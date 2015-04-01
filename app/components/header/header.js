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