jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/exercises/test/integration/NavigationJourneyPhone",
		"com/exercises/test/integration/NotFoundJourneyPhone",
		"com/exercises/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});