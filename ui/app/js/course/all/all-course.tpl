<md-button class="md-raised md-primary" ui-sref="create-course({id: 'new'})">Add Course</md-button>
<md-card flex>
    <md-table-container>
        <table md-table md-progress="promise">
            <thead md-head>
            <tr md-row>
                <th ng-click="sortBy('name');" md-column md-order-by="name">
                    <span>Course Id</span>
                </th>
                <th md-column>
                    <span>Course Name</span>
                </th>
                <th md-column>
                    <span>Original Price</span>
                </th>
                <th ng-click="sortBy('createdDate');" md-order-by="createdDate" md-column>
                    <span>Offered Price</span>
                </th>
            </tr>
            </thead>
            <tbody md-body>
            <tr md-row ng-repeat="course in allCourseCtrl.courses track by $index">
                <td md-cell>
            <span>
              <span ng-bind="course.id"></span>
            </span>
                </td>
                <td md-cell>
            <span>
              <span ng-bind="course.name"></span>
            </span>
                </td>
                <td md-cell>
            <span>
              <span ng-bind="course.originalPrice"></span>
            </span>
                </td>
                <td md-cell>
            <span>
              <span ng-bind="course.offeredPrice"></span>
            </span>
                </td>
                <td md-cell>
                    <div layout>
                        <div class="tbl menu-icons" layout="row">
                            <md-icon class="fa fa-pencil grey align" ui-sref='create-course({id:course.id})'></md-icon>
                            <md-icon class="fa fa-trash-o" aria-hidden="true"
                                     ng-click="deleteCourse($index, course.id)"></md-icon>
                        </div>
                    </div>
                </td>
                <td md-cell>
                    <md-button class="btn-round" ui-sref='manage-subject({id:course.id})'>Manage Subjects</md-button>
                </td>
            </tr>
            </tbody>
        </table>
        <div ng-if="!allCourseCtrl.courses.length" class="msg-nt-found">No Course Found</div>
    </md-table-container>
    <md-table-pagination md-limit="allCourseCtrl.query.limit" md-page="allCourseCtrl.query.page"
                         md-total="{{allCourseCtrl.totalElements}}"
                         md-on-paginate="logPagination"></md-table-pagination>
</md-card>
