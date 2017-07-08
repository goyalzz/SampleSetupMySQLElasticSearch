<div layout="column" layout-align="space-between start" style="height: 500px;">
    <div>
        <label>Rendered</label>

        <p>Solve <span id="problem"></span>.</p>
        <div ng-repeat="ques in quesList" style="line-height: 2.0">
            <span ng-bind="ques.quesText"></span>
        </div>
    </div>
    <div style="width: 100%;">
        <form name="ques" ng-submit="submitForm()" layout="column">
            <md-input-container>
                <label>Formula</label>
                <p><span id="answer" md-select-on-focus>s </span></p>
                <!--<textarea ng-model="quesInput" rows="2" md-select-on-focus></textarea>-->
            </md-input-container>
            <md-button class="md-raised md-primary" type="submit">Submit Question</md-button>
        </form>
    </div>
</div>
