define([
  "knockout",
  "accUtils",
  "text!../endpoints.json",
  "ojs/ojdatagrid",
  "ojs/ojcollectiondatagriddatasource",
  "my-employee-form/loader",
], function (ko, accUtils, endpoints) {
  function AboutViewModel() {
    // weganBegin
    //Step3begin from G's training https://github.com/geertjanw/ojet-training
    // self.url = "http://localhost:3000/employees";
    self.url = JSON.parse(endpoints).employees;

    self.collection = new oj.Collection(null, {
      model: new oj.Model.extend({
        idAttribute: "id",
        urlRoot: self.url,
      }),
      url: self.url,
    });

    self.dataSource = new oj.CollectionDataGridDataSource(self.collection, {
      rowHeader: "id",
      columns: ["FIRST_NAME", "LAST_NAME", "HIRE_DATE", "SALARY"],
    });
    //step3end

    // Part 2, Step C (Display fields from select row in inputText component)
    var nextKey = 121;
    self.inputEmployeeID = ko.observable(nextKey);
    self.inputFirstName = ko.observable();
    self.inputLastName = ko.observable();
    self.inputHireDate = ko.observable();
    self.inputSalary = ko.observable();

    //build a new model from the observables in the form
    self.buildModel = function () {
      return {
        id: self.inputEmployeeID(),
        FIRST_NAME: self.inputFirstName(),
        LAST_NAME: self.inputLastName(),
        HIRE_DATE: self.inputHireDate(),
        SALARY: self.inputSalary(),
      };
    };

    //update the fields based on the selected row:
    self.updateFields = function (model) {
      self.inputEmployeeID(model.get("id"));
      self.inputFirstName(model.get("FIRST_NAME"));
      self.inputLastName(model.get("LAST_NAME"));
      self.inputHireDate(model.get("HIRE_DATE"));
      self.inputSalary(model.get("SALARY"));
    };

    self.handleSelectionChanged = function (event) {
      var selection = event.detail["value"][0];
      if (selection != null) {
        var rowKey = selection["startKey"]["row"];
        self.modelToUpdate = self.collection.get(rowKey);
        self.updateFields(self.modelToUpdate);
      }
    };
    // Part 2, Step C End

    // Part 3, Step C (Add CRUD). Begin
    // Update function
    self.update = function () {
      self.empl = self.collection.get(self.inputEmployeeID());
      self.empl.save(self.buildModel(), {
        contentType: "application/json",
        success: function (model, response) {
          console.log(self.inputEmployeeID() + " -- updated successfully");
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(self.inputEmployeeID() + " -- " + jqXHR);
        },
      });
    };

    // Delete function
    self.remove = function () {
      self.modelToUpdate = self.collection.remove(self.buildModel());
      self.modelToUpdate.destroy();
    };

    // Create function
    self.create = function (event) {
      if (self.inputEmployeeID(nextKey) < nextKey) {
        self.inputEmployeeID(nextKey);
      }
      nextKey += 1;
      self.inputEmployeeID(nextKey);
      self.collection.create(self.buildModel(), {
        wait: true,
        contentType: "application/json",
        success: function (model, response) {
          console.log(
            self.inputEmployeeID() + " -- new record created successfully"
          );
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(self.inputEmployeeID() + " -- " + jqXHR);
        },
      });
    };

    // weganEnd

    // Below are a set of the ViewModel methods invoked by the oj-module component.
    // Please reference the oj-module jsDoc for additional information.

    /**
     * Optional ViewModel method invoked after the View is inserted into the
     * document DOM.  The application can put logic that requires the DOM being
     * attached here.
     * This method might be called multiple times - after the View is created
     * and inserted into the DOM and after the View is reconnected
     * after being disconnected.
     */
    this.connected = () => {
      accUtils.announce("About page loaded.", "assertive");
      document.title = "About";
      // Implement further logic if needed
    };

    /**
     * Optional ViewModel method invoked after the View is disconnected from the DOM.
     */
    this.disconnected = () => {
      // Implement if needed
    };

    /**
     * Optional ViewModel method invoked after transition to the new View is complete.
     * That includes any possible animation between the old and the new View.
     */
    this.transitionCompleted = () => {
      // Implement if needed
    };
  }

  /*
   * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
   * return a constructor for the ViewModel so that the ViewModel is constructed
   * each time the view is displayed.
   */
  return AboutViewModel;
});
