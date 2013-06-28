package hr.in2.invest.loyalty.loyalty;

import hr.in2.invest.loyalty.loyalty.components.Manager;
import hr.in2.invest.loyalty.loyalty.components.Tabs;

import com.vaadin.addon.touchkit.ui.TabBarView;
import com.vaadin.addon.touchkit.ui.TouchKitApplication;
import com.vaadin.addon.touchkit.ui.TouchKitWindow;
import com.vaadin.ui.Button;
import com.vaadin.ui.Button.ClickEvent;
import com.vaadin.ui.Label;
import com.vaadin.ui.Window;

/**
 * The Application's "main" class
 */
@SuppressWarnings("serial")
public class MyVaadinApplication extends TouchKitApplication
{
	private TouchKitWindow mainWindow;
	Tabs tabs;
	
	
    @Override
    public void onBrowserDetailsReady() {
    	
//        Button button = new Button("Click Me");
//        button.addListener(new Button.ClickListener() {
//            public void buttonClick(ClickEvent event) {
//                event.getButton().getWindow().addComponent(new Label("Thank you for clicking"));
//            }
//        });
        //getMainWindow().addComponent(button);
    	
    	
    	
        tabs = new Tabs();
        mainWindow.setContent(tabs);
    }

	@Override
	public void init() {
		super.init();
		
		setTheme("hyp");

		mainWindow = new TouchKitWindow();
		setMainWindow(mainWindow);
	}
}
