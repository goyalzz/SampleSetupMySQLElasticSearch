<md-button class="md-raised md-primary" ui-sref="add-chapter({id:chapterCtrl.subjectId})">Add Chapter</md-button>
<md-card flex>
  <md-table-container>
    <table md-table md-progress="promise">
      <thead md-head>
        <tr md-row>
          <th md-column>
            <span>Chapter Id</span>
          </th>
          <th md-column>
            <span>Chapter Name</span>
          </th>
          <th md-column>
            <span>Chapter sequence</span>
          </th>
        </tr>
      </thead>
      <tbody md-body>
        <tr md-row ng-repeat="chapter in chapterCtrl.chapters track by $index">
          <td md-cell>
            <span>
              <span ng-bind="chapter.id"></span>
            </span>
          </td>
          <td md-cell>
            <span>
              <span ng-bind="chapter.name"></span>
            </span>
          </td>
          <td md-cell>
            <span>
              <span ng-bind="chapter.sequenceNumber"></span>
            </span>
          </td>
          <td md-cell>
            <div layout>
              <div class="tbl menu-icons" layout="row">
                <md-icon class="fa fa-pencil grey align"></md-icon>
                <md-icon class="fa fa-trash-o" aria-hidden="true"></md-icon>
              </div>
            </div>
          </td>
          <td md-cell>
            <md-button class="btn-round">Manage Chapters</md-button>
          </td>
        </tr>
      </tbody>
    </table>
    <div ng-if="!chapterCtrl.chapters.length" class="msg-nt-found">No Course Found</div>
  </md-table-container>
  <!--  <md-table-pagination md-limit="allCourseCtrl.query.limit" md-page="allCourseCtrl.query.page" md-total="{{allCourseCtrl.totalElements}}" md-on-paginate="logPagination"></md-table-pagination> --></md-card>
