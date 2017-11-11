(function () {
    'use strict';

    // コントローラ登録
    angular
        .module('app')
        .controller('TopController', Controller);

    // DI
    Controller.$inject = [];

    // コントローラ
    function Controller() {
        // ビューモデル
        var vm = this;
        vm.init = init;
        vm.gotoLogin = gotoLogin; 
        vm.gotoMain = gotoMain; 
        
        
        /**
         * ページ遷移
         */
         function gotoLogin() {
        navi.pushPage('pages/login.html');
        }
         
         function gotoMain() {
        navi.pushPage('pages/main.html');
        }

        /** 
         * 初期化
         */
        function init($event) {
           // load();
        }
    }
})();