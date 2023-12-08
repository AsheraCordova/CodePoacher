import {Activity, Inject} from './app/Activity';
import ListView from './view/ListView';

import * as linearlayout from './android/widget/LinearLayoutImpl';
import * as view from './android/widget/ViewImpl';
import * as textview from './android/widget/TextViewImpl';
import {Gravity} from './widget/TypeConstants';
import {plainToClass} from "class-transformer";
import {NavController, InjectController} from './navigation/NavController';
import {OnClickEvent} from "./android/widget/ViewImpl";

export default class HomeActivity extends Activity{
    @Inject({ id : "@+id/listView"})
    private listView!: ListView;

	@InjectController({})
    navController!: NavController;

    constructor() {
        super();
    }

    async onCreate(obj:any) {
        this.listView.setBorderColor("red");
        this.listView.setBorderBottomWidth("2dp");
        let data = [
                {"id": "framelayout","name" : "Frame Layout"},
                {"id": "linearlayout","name" : "Linear Layout"},
                {"id": "relativelayout","name" : "Relative Layout"},
                {"id": "tablelayout","name" : "Table Layout"},
                {"id": "gridlayout","name" : "Grid Layout"},
                {"id": "constraintlayout","name" : "Constraint Layout"},
                {"id": "imageview","name" : "Image View"},
                {"id": "button","name" : "Button"},
                {"id": "textview","name" : "TextView"},
				//start - body    
				<#assign x = 0 >
				<#list activities as activity>
				{"id": "${activity}","name" : "${activity}"},
				<#assign x = x + 1 >
				</#list>
                //end - body
        ];
        let filteredData = [];
        for (let i=0;i < data.length;i++) {
        	let name:string = data[i].name;
        	if (name.indexOf('Ios') != -1) {
        		filteredData.push(data[i]);
        	}
        }
        this.listView.updateModelData(filteredData, "layouts->view as list");
        await this.executeCommand(this.listView);
    }

     goToView = async(obj:OnClickEvent) => {
        if (obj.id == 'linearlayout') {
            await this.navController.reset().navigate("fragment#framelayout#layout/linearlayout.xml", "", {}).executeCommand();
        } else if (obj.id == 'framelayout') {
            await this.navController.reset().navigate("fragment#framelayout#layout/framelayout.xml", "", {}).executeCommand();
        } else if (obj.id == 'relativelayout') {
             await this.navController.reset().navigate("fragment#framelayout#layout/relativelayout.xml", "", {}).executeCommand();
        } else if (obj.id == 'tablelayout') {
               await this.navController.reset().navigate("fragment#framelayout#layout/tablelayout.xml", "", {}).executeCommand();
        } else if (obj.id == 'imageview') {
              await this.navController.reset().navigate("fragment#framelayout#layout/imageview.xml", "", {}).executeCommand();
        } else if (obj.id == 'button') {
             await this.navController.reset().navigate("fragment#framelayout#layout/button.xml", "", {}).executeCommand();
        } else if (obj.id == 'textview') {
            await this.navController.reset().navigate("fragment#framelayout#layout/textview.xml", "", {}).executeCommand();
        } else if (obj.id == 'textbox') {
          await this.navController.reset().navigate("fragment#framelayout#layout/edittext_test.xml", "", {}).executeCommand();
        } else if (obj.id == 'gridlayout') {
            await this.navController.reset().navigate("fragment#framelayout#layout/gridlayout.xml", "", {}).executeCommand();
        } else if (obj.id == 'constraintlayout') {
            await this.navController.reset().navigate("fragment#framelayout#layout/constraint_layout.xml", "", {}).executeCommand();
        } 
        //start - imports                
		<#assign x = 0 >
		<#list activities as activity>
		else if (obj.id == '${activity}') {
			let list = [];
			let images = ["@drawable/bryce_canyon", "@drawable/cathedral_rock", "@drawable/death_valley", "@drawable/fitzgerald_marine_reserve", "@drawable/goldengate", "@drawable/golden_gate_bridge", "@drawable/shipwreck_1", "@drawable/shipwreck_2", "@drawable/grand_canyon", "@drawable/horseshoe_bend", "@drawable/muir_beach", "@drawable/rainbow_falls"];
			var colors = [ ("#9C4B8F"), ("#945693"), ("#8C6096"), ("#846B9A"), ("#7C769E"), ("#7480A2"), ("#6D8BA5"), ("#6595A9"), ("#5DA0AD"), ("#55ABB1"), ("#4DB5B4"), ("#45C0B8")];
			for(let i=0; i<10;i++) {
				list.push({"id":i, "name": i + "", "background": (i % 2) == 0 ? "#ff0" : "#f00", "src" : images[i], "mybackground": colors[i]});
			}
        	await this.navController.reset().navigate("fragment#framelayout#layout/${layoutFiles[x]}", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}, "viewpagers": list}).executeCommand();
    	}	
		<#assign x = x + 1 >
		</#list>
    	//end - imports
    }

}
