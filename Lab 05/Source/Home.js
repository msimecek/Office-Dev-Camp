/// <reference path="../App.js" />

(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            $("#createTable").click(createTable);
            $("#readTable").click(readTable);
        });
    };

    function createTable() {
        var table = new Office.TableData();
        table.headers = [
            ['Id', 'Title', 'Lat', 'Lng', 'Radius', 'Description', 'Message']
        ];

        Office.context.document.setSelectedDataAsync(table, { coercionType: Office.CoercionType.Table }, function (asyncResult) {
            if (asyncResult.status == "failed") {
                app.showNotification('Action failed with error: ' + asyncResult.error.message);
            }
            else {
                Office.context.document.bindings.addFromSelectionAsync(Office.BindingType.Table, { id: "PlacesTable" }, function (asyncResult) {
                    if (asyncResult.status == "failed") {
                        app.showNotification("Action failed with error: " + asyncResult.error.message);
                    }
                    else {
                        app.showNotification("Binding created.");
                    }
                })
            }
        });
    }

    function readTable() {
        Office.select("bindings#PlacesTable").getDataAsync({ corercionType: Office.CoercionType.Table }, function (asyncResult) {
            if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                app.showNotification("Error", asyncResult.error.message);
            }
            else {
                app.showNotification("Success", asyncResult.value.toString());
            }
        });
    }

})();