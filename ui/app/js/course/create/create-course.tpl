<md-card layout-padding>
    <div class="main tabs">Course Details</div>
    <div flex>
        <form name="addCourseForm" ng-submit="save(addCourseForm, createCourseCtrl.courseDetails)" layout="column"
              layout-wrap flex>
            <div layout-gt-sm="row">
                <md-input-container class="md-block" flex-gt-sm>
                    <label>Course Name</label>
                    <input ng-model="createCourseCtrl.courseDetails.name"></md-input-container>
                <!--  <md-input-container class="md-block" flex-gt-sm>
                   <label>Course Duration</label>
                   <input ng-model="createCourseCtrl.courseDetails.duration"> </md-input-container> -->
            </div>
            <div layout-gt-sm="row">
                <md-input-container class="md-block" flex-gt-sm>
                    <label>Actual Price</label>
                    <input ng-model="createCourseCtrl.courseDetails.originalPrice"></md-input-container>
                <md-input-container class="md-block" flex-gt-sm>
                    <label>Offered Price</label>
                    <input ng-model="createCourseCtrl.courseDetails.offeredPrice"></md-input-container>
            </div>
            <div flex layout="row">
                <div flex layout="row" layout-align="start start">
                    <div class="img-thumbnail"></div>
                    <md-input-container class="md-block" flex>
                        <label>Image Url</label>
                        <input md-no-asterisk name="imageUrl" ng-model="createCourseCtrl.courseDetails.imageUrl">
                    </md-input-container>
                    <md-button class="md-raised md-primary ladda-button" type="button"
                               ladda="createCourseCtrl.isFileUploading" data-style="zoom-in" data-spinner-size="30">
                        <label for="file-input"> <i class="fa fa-image"></i> Upload Image </label>
                        <a ladda="createCourseCtrl.isFileUploading" data-style="zoom-in" data-spinner-size="30"
                           class="ladda-button"> </a>
                    </md-button>
                    <input id="file-input" type="file" style="display: none;" accept="image/*"
                           onchange="angular.element(this).scope().uploadImage(this.files)"/></div>
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
