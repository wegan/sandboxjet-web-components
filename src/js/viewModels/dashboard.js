/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
/**
 * weganNote I had to update the
 */
define([
  "knockout",
  "accUtils",
  "ojs/ojarraydataprovider",
  "ojs/ojchart",
], function (ko, accUtils, ArrayDataProvider) {
  function DashboardViewModel() {
    /* toggle button variables */
    this.stackValue = ko.observable("off");
    this.orientationValue = ko.observable("vertical");
    // this.dataProvider = new ArrayDataProvider(JSON.parse(data), {keyAttributes: "id",    });
    this.dataProvider = new ArrayDataProvider([
      {
        id: 0,
        series: "Series 1",
        group: "Group A",
        value: 42,
      },
      {
        id: 1,
        series: "Series 1",
        group: "Group B",
        value: 34,
      },
      {
        id: 2,
        series: "Series 2",
        group: "Group A",
        value: 55,
      },
      {
        id: 3,
        series: "Series 2",
        group: "Group B",
        value: 30,
      },
      {
        id: 4,
        series: "Series 3",
        group: "Group A",
        value: 36,
      },
      {
        id: 5,
        series: "Series 3",
        group: "Group B",
        value: 50,
      },
      {
        id: 6,
        series: "Series 4",
        group: "Group A",
        value: 22,
      },
      {
        id: 7,
        series: "Series 4",
        group: "Group B",
        value: 46,
      },
      {
        id: 8,
        series: "Series 5",
        group: "Group A",
        value: 22,
      },
      {
        id: 9,
        series: "Series 5",
        group: "Group B",
        value: 46,
      },
    ]);

    // weganEnd Copy from https://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=barChart&demo=default

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
      accUtils.announce("Dashboard page loaded.", "assertive");
      document.title = "Dashboard";
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
  return DashboardViewModel;
});
