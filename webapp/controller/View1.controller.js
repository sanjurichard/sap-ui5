sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("TableTable.controller.View1", {
		onInit: function() {
			var oTable = this.getView().byId("Randomid");

			oTable.bindItems({
				path: "Model>/Table",
				template: new sap.m.ColumnListItem({
				
					cells : [

						new sap.m.Text({
							text: "{Model>Date}"
						}),
						new sap.m.Text({
							text: "{Model>DocType}"
						}),
						new sap.m.Text({
							text: "{Model>DocDesc}"
						}),
						new sap.m.Text({
							text: "{Model>DocNo}"
						}),
						new sap.m.Text({
							text: "{Model>DbtAmt}"
						}),
						new sap.m.Text({
							text: "{Model>CrdAmt}"
						}),
						new sap.m.Text({
							text: "{Model>Balance}"
						}),
						new sap.m.Text({
							text: "{Model>Text}"
						})
					]
 
				})
			});
		},
		 onNext: function(){
          	var oApp = sap.ui.getCore().byId("idApp");
          	
          	oApp.to("idSecond");
          }

	});
});