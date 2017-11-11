(function () {
    'use strict';

    // サービス登録
    angular
        .module('app')
        .factory('TodoService', Service);

    // DI
    Service.$inject = ['$log', '$http'];

    // サービス
    function Service($log, $http) {

        // 公開するメソッド
        return {
            'findAll': findAll,
        };

        /**
         * 一覧取得
         */
        function findAll() {
            // 取得
            return $http.get('https://jsonplaceholder.typicode.com/todos');
        }

    }
})();