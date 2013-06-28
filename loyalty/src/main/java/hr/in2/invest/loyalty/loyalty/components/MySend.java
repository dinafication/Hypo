package hr.in2.invest.loyalty.loyalty.components;

import com.vaadin.addon.touchkit.ui.NavigationView;
import com.vaadin.addon.touchkit.ui.Switch;
import com.vaadin.addon.touchkit.ui.VerticalComponentGroup;
import com.vaadin.ui.VerticalLayout;

public class MySend extends NavigationView{
	
	
	@Override
	public void attach() {
		
		VerticalLayout vl = new VerticalLayout();
		
		VerticalComponentGroup comgr1 = new VerticalComponentGroup();
		comgr1.setCaption("Receive notifications");
		
		Switch sw1 = new Switch("Receive offer notifications");
		comgr1.addComponent(sw1);
		Switch sw2 = new Switch("Receive Hypo publications");
		comgr1.addComponent(sw2);
		Switch sw3 = new Switch("Receive emails");
		comgr1.addComponent(sw3);
		
		vl.addComponent(comgr1);
		
		
		VerticalComponentGroup comgr2 = new VerticalComponentGroup();
		comgr2.setCaption("My data");
		
		Switch sw4 = new Switch("Allow using my personal data");
		comgr2.addComponent(sw4);
		
		Switch sw5 = new Switch("Suggest best options");
		comgr2.addComponent(sw5);
		
		vl.addComponent(comgr2);
		
		setContent(vl);
		
	}

}
