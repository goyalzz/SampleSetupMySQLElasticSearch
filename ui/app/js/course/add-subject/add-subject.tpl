<md-card layout-padding>
  <div class="main tabs">Subject Details</div>
  <div flex>
    <form name="addSubjectForm" ng-submit="submitSubjectForm(addSubjectForm)" layout="column" layout-wrap flex>
      <div layout-gt-sm="column">
        <md-input-container class="md-block" flex-gt-sm>
          <label>Subject Name</label>
          <input ng-model="addSubjectCtrl.subjectDto.name"> </md-input-container>
        <md-input-container class="md-block" flex-gt-sm>
          <label>Subject Description</label>
          <input ng-model="addSubjectCtrl.subjectDto.description"> </md-input-container>
        <!--  <md-input-container class="md-block" flex-gt-sm>
          <label>Course Id</label>
          <input ng-model="addSubjectCtrl.subjectDto.courseId"> </md-input-container> -->
      </div>
      <div layout="row">
        <div flex></div>
        <div>
          <md-button class="md-raised md-primary" type="submit">Save &amp; Continue</md-button>
        </div>
      </div>
    </form>
  </div>
</md-card>
