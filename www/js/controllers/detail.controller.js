(function () {
    'use strict';

    // コントローラ登録
    angular
        .module('app')
        .controller('DetailController', Controller);

    // DI
    Controller.$inject = [];

    // コントローラ
    function Controller() {
        // ビューモデル
        var vm = this;
        vm.init = init;
        vm.todo = null;

        /**
         * 初期化
         */
        function init($event) {
            var page = $event.target;
            vm.todo = page.data;
            
            console.log(vm.todo);
        }
    }
})();