'use strict';

log.console('this is prinz branch');

eventsApp.directive('mySample', function($compile){
    return {
        restrict: 'C',
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>"
    };
});

