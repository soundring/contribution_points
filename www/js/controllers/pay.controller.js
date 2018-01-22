(function () {
    'use strict';

    // コントローラ登録
    angular
        .module('app')
        .controller('PayController', Controller);

    // DI
    Controller.$inject = ['$http'];

    // コントローラ
    function Controller($http) {
        // ビューモデル
        var vm = this;
        vm.init = init;
        vm.scan = scan;

        /**
         * 読み込み
         * （本当はApiServiceなど作って分離した方が良い）
         */
        function load(url) {
          return $http.get(url);
        }

        /**
         * QRコードのスキャン実行
         */
        function scan() {
            // BarcodeScannerプラグインを利用してスキャン
              window.plugins.barcodeScanner.scan(
                // 成功時に実行されるコールバック（キャンセル時も含む）
                function(result) {
                  // キャンセルされたら何もしない
                  if (result.cancelled) {
                    return;
                  }
                  
                  // 成功したらURLアクセスしてページ遷移
                  load(result.text).then(function(response) {
                    //navi.pushPage('pages/main.html');
                      navi.replacePage('pages/main.html', {animation: 'none'});
                  });
                }
             )
        }
        
        /**
         * 初期化
         */
        function init($event) {
        }
    }
})();