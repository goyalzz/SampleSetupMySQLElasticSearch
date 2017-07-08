<div flex layout="row" layout-align="space-between center">
  <div class="header-title" layout="row" layout-align="center center">
    <img src="img/logo.png" style="width: 170px;" /> </div>
  <div flex layout="row" layout-align="space-between center">
    <div layout-padding hide-gt-sm> <i class="fa fa-bars" role="button" aria-label="Menu" ng-controller="LeftCtrl" ng-click="toggleLeft();toggleLock(true)" style="color: $black"></i></div>
    <span flex></span>
    <md-button class="md-raised md-primary" ng-click="logout()">Logout</md-button>
  </div>
</div>
