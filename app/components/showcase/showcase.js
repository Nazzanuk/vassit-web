var app = angular.module('vassit-web');

app.controller('ShowcaseController', ['$scope', function ($scope) {
    var currentCat = "all";

    var showCurrentCat = function () {
        $('[data-cat]').velocity('stop').hide();
        $('[data-cat="' + currentCat + '"]').velocity('transition.shrinkIn', { display:"block", stagger:150 });

        if (currentCat == "all") {
            $('[data-cat]').velocity('transition.shrinkIn', { display:"block", stagger:150 });
        }

    };

    var hideCurrentCat = function () {

    };

    var setCat = function (cat) {
        currentCat = cat;
        showCurrentCat();
    };

    $(document).on('click', '[data-filter]', function () {
        setCat($(this).attr('data-filter'));
        $('[data-filter]').removeClass('active');
        $(this).addClass('active');
    });

}]);