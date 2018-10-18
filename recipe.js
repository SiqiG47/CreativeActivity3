var app=angular.module("app", []);
app.controller('ctrl',
    function($scope, $http){
        $scope.info=[];
        $scope.info.avatar_url="https://www.drupal.org/files/issues/default-avatar.png";
        $scope.submitButton = function(){
            console.log($scope.form);
            var form = $scope.form;
            var url = "https://api.edamam.com/search?q=" + form + "&app_id=f239ae2e&app_key=437bd4f3b3832a1b54f88e5fb6cd8984&from=0&to=1" ;
            $http.get(url).then(function(response){
                console.log(response);
                $scope.info = response.data['hits'][0]['recipe'];
            });

        }
    }
);