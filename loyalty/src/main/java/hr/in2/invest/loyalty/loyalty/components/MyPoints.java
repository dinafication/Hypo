package hr.in2.invest.loyalty.loyalty.components;

import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

import com.vaadin.addon.touchkit.ui.NavigationView;
import com.vaadin.addon.touchkit.ui.Switch;
import com.vaadin.addon.touchkit.ui.VerticalComponentGroup;
import com.vaadin.data.Property;
import com.vaadin.data.Property.ValueChangeEvent;
import com.vaadin.ui.InlineDateField;
import com.vaadin.ui.TextField;
import com.vaadin.ui.VerticalLayout;
import com.vaadin.ui.Window.Notification;

public class MyPoints extends NavigationView{

	@Override
	public void attach() {
		
		VerticalLayout vl = new VerticalLayout();
		
		VerticalComponentGroup comgr1 = new VerticalComponentGroup();
		comgr1.setCaption("Moji bodovi");
		
		TextField p = new TextField("Trenutno stanje vasih bodova");
		p.setValue(666);
		p.setReadOnly(true);
		comgr1.addComponent(p);
		
		vl.addComponent(comgr1);
		
		VerticalComponentGroup comgr2 = new VerticalComponentGroup();
		comgr2.setCaption("Prikazi stanje od dana:");
		
		
		InlineDateField sample = new InlineDateField();
	        sample.setValue(new Date());
	        sample.setImmediate(true);
	        sample.setTimeZone(TimeZone.getTimeZone("UTC"));
	        sample.setLocale(Locale.US);
	        //sample.setResolution(Resolution.MINUTE);
	  
	 
	        sample.addListener(new Property.ValueChangeListener() {
	            @Override
	            public void valueChange(final ValueChangeEvent event) {
	                final String valueString = String.valueOf(event.getProperty()
	                        .getValue());
//	                Notification.show("Value changed:", valueString,
//	                       Notification..TRAY_NOTIFICATION);
	            }
	        });
	        
	        comgr2.addComponent(sample);
	        
	        vl.addComponent(comgr2);
		
		setContent(vl);
		
	}

}
