<md-progress-linear ng-show="hctrl.isLoading" style="position:absolute;z-index: 3;" md-mode="indeterminate"></md-progress-linear>
<div layout="column" flex>
  <md-toolbar data-ng-include src="'header/header.tpl'" class="main-header md-tb-override"> </md-toolbar>
  <div flex class="main container" layout="row">
    <md-sidenav md-content ng-include="'nav-menu/nav-menu.tpl'" class="md-sidenav-left nav-style txt-lg" md-component-id="left" md-is-locked-open="$mdMedia('gt-sm')"></md-sidenav>
    <div layout="column" flex>
      <md-content id="section" class="main sub-section" ui-view='' flex layout-padding style="background-color: rgb(236, 236, 236); color:black;"></md-content>
    </div>
  </div>
</div>
