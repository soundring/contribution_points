(function () {
    'use strict';

    // コントローラ登録
    angular
        .module('app')
        .controller('HomeController', Controller);

    // DI
    Controller.$inject = ['TodoService'];

    // コントローラ
    function Controller() {
        // ビューモデル
        var vm = this;
        vm.init = init;
        vm.gotoDetail = gotoDetail;
        vm.gotoSetting = gotoSetting; 
        vm.gotoTop = gotoTop; 
        vm.todos = [];
        
        /**
         * 読み込み
         *
         * function load() {
         *   TodoService.findAll().then(function(response) {
         *   console.log(response);
         *
         *       vm.todos = response.data;
         *    })
         *}
         */

        /**
         * ページ遷移
         */
        function gotoDetail(detail) {
            var options = {
              data: detail
            };
            navi.pushPage('pages/detail.html', options);
        }
        
        function gotoSetting() {
        navi.pushPage('pages/setting.html');  // setting.htmlは別途用意
        }
        
        function gotoTop() {
        navi.popPage();  
        }
        
        

        /** 
         * 初期化
         */
        function init($event) {
           // load();
        }
    }
})();