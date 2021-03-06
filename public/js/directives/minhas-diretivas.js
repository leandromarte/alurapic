angular.module('minhasDiretivas', [])
.directive('meuPainel', function () {
  var ddo = {};
  ddo.restrict = "AE";
  ddo.transclude = true;
  ddo.scope = {
    titulo: '@titulo'
  };
  ddo.templateUrl = 'js/directives/meu-painel.html';

  return ddo;
})
.directive('minhaFoto', function () {
  var ddo = {};
  dao.restrict = "AE";
  ddo.scope = {
    url: '@',
    titulo: '@'
  };
  ddo.templateUrl = 'js/directives/minha-foto.html';

});
