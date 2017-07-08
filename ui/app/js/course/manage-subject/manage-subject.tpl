<md-button class="md-raised md-primary" ui-sref="add-subject({id:manageSubjectCtrl.courseId})">Add Subject</md-button>
<md-card flex>
  <md-table-container>
    <table md-table md-progress="promise">
      <thead md-head>
        <tr md-row>
          <th md-column>
            <span>Subject id</span>
          </th>
          <th md-column>
            <span>Name</span>
          </th>
          <th md-column>
            <span>Subject Description</span>
          </th>
        </tr>
      </thead>
      <tbody md-body>
        <tr md-row ng-repeat="subject in manageSubjectCtrl.subjects track by $index">
          <td md-cell>
            <span>
              <span ng-bind="subject.id"></span>
            </span>
          </td>
          <td md-cell>
            <span>
              <span ng-bind="subject.name"></span>
            </span>
          </td>
          <td md-cell>
            <span>
              <span ng-bind="subject.description"></span>
            </span>
          </td>
          <td md-cell>
            <div layout>
              <div class="tbl menu-icons" layout="row">
                <md-icon class="fa fa-pencil grey align" ui-sref='add-subject({id:subject.id})'></md-icon>
                <md-icon class="fa fa-trash-o" aria-hidden="true" ng-click="delCourse(index, course.id)"></md-icon>
              </div>
            </div>
          </td>
          <td md-cell>
            <md-button class="btn-round" ui-sref='chapter({id:subject.id})'> Manage Chapters</md-button>
          </td>
        </tr>
      </tbody>
    </table>
    <div ng-if="!manageSubjectCtrl.subjects.length" class="msg-nt-found">No Subjects Found</div>
  </md-table-container>
</md-card>
