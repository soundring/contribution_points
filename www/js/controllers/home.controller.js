(function () {
    'use strict';

    // コントローラ登録
    angular
        .module('app')
        .controller('HomeController', Controller);

    // DI
    Controller.$inject = ['$http'];

    // コントローラ
    function Controller($http) {
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
        navi.pushPage('pages/setting.html');  
        }
        
        function gotoTop() {
        navi.replacePage('pages/top.html');  
        }
        
        

        /** 
         * 初期化
         */
        
        function init($event) {
          $http.get("https://limitless-atoll-79397.herokuapp.com/user/31").then(function( response ) {
              vm.data = response.data;                
          });
        
        $http.get('https://limitless-atoll-79397.herokuapp.com/user/point/31').then(function( response ) {
              vm.points = response.data.Points;
        });
         
        }
        　
    　　
    }
})();