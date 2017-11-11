(function () {
    'use strict';

    // コントローラ登録
    angular
        .module('app')
        .controller('QrcodeController', Controller);

    // DI
    Controller.$inject = [];

    // コントローラ
    function Controller() {
        // ビューモデル
        var vm = this;
        vm.init = init;
        vm.num = 0;
        vm.gotoSetting = gotoSetting;
        
        function gotoSetting() {
        navi.pushPage('pages/setting.html');  // setting.htmlは別途用意
        }
        
        function init($event) {     
        var page = $event.target;
        vm.num = page.data.num;
        }
        
    }
})();