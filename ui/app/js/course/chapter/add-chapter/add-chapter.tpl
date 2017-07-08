<md-card layout-padding>
  <div class="main tabs">Subject Details</div>
  <div flex>
    <form name="addChapterForm" ng-submit="submitChapterForm(addChapterForm)" layout="column" layout-wrap flex>
      <div layout-gt-sm="column">
        <md-input-container class="md-block" flex-gt-sm>
          <label>Chapter Sequence</label>
          <input ng-model="addChapterCtrl.chapterDto.sequenceNumber" type="number"> </md-input-container>
        <md-input-container class="md-block" flex-gt-sm>
          <label>Chapter Name</label>
          <input ng-model="addChapterCtrl.chapterDto.name"> </md-input-container>
        <md-input-container class="md-block" flex-gt-sm>
          <label>Chapter Description</label>
          <input ng-model="addChapterCtrl.chapterDto.description"> </md-input-container>
        <md-input-container class="md-block" flex-gt-sm>
          <label>subject Id</label>
          <input ng-model="addChapterCtrl.chapterDto.subjectId"> </md-input-container>
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
