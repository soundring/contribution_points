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
        vm.gotoTwitterLogin = gotoTwitterLogin; 
        
        
        /**
         * ページ遷移
         */
         function gotoLogin() {
        navi.pushPage('pages/login.html');
        }
         
         function gotoMain() {
        navi.pushPage('pages/main.html');
        }

        function gotoTwitterLogin() {
            navi.pushPage('pages/TwitterLogin.html');
        }
        /** 
         * 初期化
         */
        function init($event) {
           // load();
        }
    }
})();