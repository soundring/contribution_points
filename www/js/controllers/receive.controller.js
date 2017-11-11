(function () {
    'use strict';

    // コントローラ登録
    angular
        .module('app')
        .controller('ReceiveController', Controller);

    // DI
    Controller.$inject = [];

    // コントローラ
    function Controller() {
        // ビューモデル
        var vm = this;
        vm.init = init;
        vm.num = 0;
        vm.gotoQrcode = gotoQrcode;
        
        function gotoQrcode(num) {
            var options = {
              data: {
                num: num
              }
            };
            navi.pushPage('pages/qrcode.html',options);  
        }
        
        
        
        

        /**
         * 初期化
         */
        function init($event) {
        }
    }
})();