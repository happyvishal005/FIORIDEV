sap.ui.define([
	"sap/ui/core/UIComponent"
], (UIComponent) => {
	"use strict";
	return UIComponent.extend("ui5.quickdatabinding.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		}
	});
});