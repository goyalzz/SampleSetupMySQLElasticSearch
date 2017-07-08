<div>
  <md-toolbar class="header-title" layout="row" layout-align="space-around center" hide-md hide-gt-md hide-lg hide-gt-lg hide-xl>
    <img src="img/logo.png" style="width: 100px;" />
    <div class="txt-s">Admin Panel</div>
  </md-toolbar>
  <md-list>
    <md-list-item class="default-nav" ng-repeat="menu in hctrl.menu" is-permissions="{{menu.access}}" ng-class="{'nav active': isActive(menu.root || menu.link)}" ui-sref="{{menu.link}}" ng-click="closeSideNav();">
      <img ng-src="{{menu.icon}}" style="margin-right: 10px;height: 20px;" /> {{menu.title}}</md-list-item>
  </md-list>
</div>
