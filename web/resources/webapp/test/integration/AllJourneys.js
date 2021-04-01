jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/exercises/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/exercises/test/integration/pages/App",
	"com/exercises/test/integration/pages/Browser",
	"com/exercises/test/integration/pages/Master",
	"com/exercises/test/integration/pages/Detail",
	"com/exercises/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.exercises.view."
	});

	sap.ui.require([
		"com/exercises/test/integration/MasterJourney",
		"com/exercises/test/integration/NavigationJourney",
		"com/exercises/test/integration/NotFoundJourney",
		"com/exercises/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});