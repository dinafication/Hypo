package hr.in2.invest.loyalty.loyalty.components;

import org.apache.catalina.startup.SetAllPropertiesRule;

import com.vaadin.addon.touchkit.ui.NavigationView;
import com.vaadin.addon.touchkit.ui.VerticalComponentGroup;
import com.vaadin.terminal.ThemeResource;
import com.vaadin.ui.Alignment;
import com.vaadin.ui.Embedded;
import com.vaadin.ui.Label;
import com.vaadin.ui.Panel;
import com.vaadin.ui.VerticalLayout;

public class MyCode extends NavigationView{
	
	
	@Override
	public void attach() {
		// TODO Auto-generated method stub
		super.attach();
		
		VerticalLayout vl = new VerticalLayout();
		vl.setMargin(true);
    	vl.setSpacing(true);
		
    	Embedded codebar = new Embedded();
    	codebar.setWidth("200px");
    	codebar.setSource(new ThemeResource("img/images.jpg"));		
    	vl.addComponent(codebar);
    	vl.setComponentAlignment(codebar, Alignment.MIDDLE_CENTER);
    	//vl.addComponent(componentGroup);
    	setContent(vl);
    
	}

}
