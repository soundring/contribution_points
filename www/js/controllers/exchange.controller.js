(function () {
    'use strict';

    // コントローラ登録
    angular
        .module('app')
        .controller('ExchangeController', Controller);

    // DI
    Controller.$inject = [];

    // コントローラ
    function Controller() {
        // ビューモデル
        var vm = this;
        vm.init = init;
        vm.gotoSetting = gotoSetting;
        vm.gotoPay = gotoPay;
        vm.gotoReceive = gotoReceive;
        
        function gotoSetting() {
        navi.pushPage('pages/setting.html');  // setting.htmlは別途用意
        }
        
        function gotoPay() {
        navi.pushPage('pages/pay.html');  // setting.htmlは別途用意
        }
        
        function gotoReceive() {
        navi.pushPage('pages/receive.html');  // setting.htmlは別途用意
        }
        
        

        /**
         * 初期化
         */
        function init($event) {
        }
    }
})();