<div class="login-wrapper" flex>
  <div class="header" layout-padding flex layout="row" layout-align="start start">
    <img class="logo-style" src="img/logo.png"> </div>
  <div class="login-card" layout="row" layout-align="center center">
    <md-card class="login-card-override" flex=50>
      <md-card-title>
        <md-card-title-text layout="column" layout-align="center center">
          <span class="md-headline">SIGN IN</span>
          <span class="md-headline sub-headline">As an Admin</span>
        </md-card-title-text>
      </md-card-title>
      <md-card-content>
        <div>{{loginId}}</div>
        <form name="loginForm" ng-submit="submitForm(loginForm)" autocomplete="off">
          <md-input-container class="md-block md-primary">
            <label>Email / Phone Number</label>
            <input type="text" required name="loginId" ng-model="loginCtrl.loginDto.userName" />
            <div ng-messages="loginForm.loginId.$error" role="alert">
              <div ng-message-exp="['required']">Required</div>
            </div>
          </md-input-container>
          <md-input-container class="md-block">
            <label>Password</label>
            <input required type="password" name="loginPassword" ng-model="loginCtrl.loginDto.password" />
            <div ng-messages="loginForm.loginPassword.$error" role="alert">
              <div ng-message-exp="['required']"> Password required</div>
            </div>
          </md-input-container>
          <md-card-actions layout="row" layout-align="center center">
            <md-button type="submit" class="btn-round">Sign In</md-button>
          </md-card-actions>
        </form>
      </md-card-content>
    </md-card>
  </div>
</div>
