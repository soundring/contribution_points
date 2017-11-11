(function () {
    'use strict';

    // コントローラ登録
    angular
        .module('app')
        .controller('SettingController', Controller);

    // DI
    Controller.$inject = [];

    // コントローラ
    function Controller() {
        // ビューモデル
        var vm = this;
        vm.init = init;
        vm.gotoHome = gotoHome; 
        
        
        /**
         * ページ遷移
         */
         function gotoHome() {
        navi.popPage();  // setting.htmlは別途用意
        }

        /**
         * 初期化
         */
        function init($event) {
        }
    }
})();