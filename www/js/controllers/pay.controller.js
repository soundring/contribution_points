(function () {
    'use strict';

    // コントローラ登録
    angular
        .module('app')
        .controller('PayController', Controller);

    // DI
    Controller.$inject = [];

    // コントローラ
    function Controller() {
        // ビューモデル
        var vm = this;
        vm.init = init;
        vm.scan = scan;

        /**
         * QRコードのスキャン実行
         */
        function scan() {
            window.plugins.barcodeScanner.scan( function(result) {
                alert("We got a barcode\n" +
                          "Result: " + result.text + "\n" +
                          "Format: " + result.format + "\n" +
                          "Cancelled: " + result.cancelled);
            }, function(error) {
                alert("Scanning failed: " + error);
            });
        }
        
        /**
         * 初期化
         */
        function init($event) {
        }
    }
})();