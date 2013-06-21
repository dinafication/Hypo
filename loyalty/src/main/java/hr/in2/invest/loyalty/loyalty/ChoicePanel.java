package hr.in2.invest.loyalty.loyalty;

import hr.in2.invest.loyalty.loyalty.components.Detail;
import hr.in2.invest.loyalty.loyalty.components.ItemNavigationButton;
import hr.in2.invest.loyalty.loyalty.components.Manager;
import hr.in2.invest.loyalty.loyalty.components.Master;
import hr.in2.invest.loyalty.loyalty.components.MyData;
import hr.in2.invest.loyalty.loyalty.components.Tabs;
import hr.in2.invest.loyalty.loyalty.dummydata.DummAcc;

import com.vaadin.addon.touchkit.ui.NavigationManager;
import com.vaadin.addon.touchkit.ui.NavigationView;
import com.vaadin.addon.touchkit.ui.VerticalComponentGroup;
import com.vaadin.event.LayoutEvents;
import com.vaadin.event.LayoutEvents.LayoutClickEvent;
import com.vaadin.event.ShortcutAction.KeyCode;
import com.vaadin.terminal.Resource;
import com.vaadin.terminal.ThemeResource;
import com.vaadin.ui.Button;
import com.vaadin.ui.Button.ClickEvent;
import com.vaadin.ui.Button.ClickListener;
import com.vaadin.ui.Embedded;
import com.vaadin.ui.GridLayout;
public class ChoicePanel extends NavigationView{
	
	private static final long serialVersionUID = 1L;
	
	private GridLayout content;
	private Manager mng;

	public ChoicePanel(Manager mng) {
		this.mng = mng;
	}
	
	@Override
    public void attach() {
        super.attach();
        content = new GridLayout();
        content.setColumns(2);
        content.setRows(3);
        
        buildView();
    }

    private void buildView(){
    	content.setSpacing(true);
    	
    	VerticalComponentGroup componentGroup00 = new VerticalComponentGroup();
    	
    	final ItemNavigationButton pom = new ItemNavigationButton(new Master(mng), null);

		pom.setWidth("90px");
		pom.setHeight("90px");
		ThemeResource t = new ThemeResource("img/Piggy-Bank-hot-128.png");
		pom.setIcon(new ThemeResource("img/Piggy-Bank-hot-128.png"));
		componentGroup00.addComponent(pom);  	
    	
//    	
//    	componentGroup00.addListener(new LayoutEvents.LayoutClickListener() {
//			
//			private static final long serialVersionUID = 1L;
//
//			@Override
//			public void layoutClick(LayoutClickEvent event) {
//				//((ClickListener)pom.getListeners(Button.ClickListener.class).iterator().next()).buttonClick(pom.new ClickEvent(pom));
//				//mng.showMaster();
//				pom.buttonClick(pom.new ClickEvent(pom));
//				
//			}
//		});
    	componentGroup00.setCaption("Account");
    	
    	Embedded eLogo00 = new Embedded();
    	eLogo00.setWidth("95px");
    	eLogo00.setSource(new ThemeResource("img/Piggy-Bank-hot-128.png"));	
    	//componentGroup00.addComponent(eLogo00);
    	content.addComponent(componentGroup00);
		
		

    	VerticalComponentGroup componentGroup01 = new VerticalComponentGroup();
    	componentGroup01.addListener(new LayoutEvents.LayoutClickListener() {
			
			private static final long serialVersionUID = 1L;

			@Override
			public void layoutClick(LayoutClickEvent event) {
				getApplication().getMainWindow().setContent(new MyData());
			}
		});
    	componentGroup01.setCaption("My Points");
    	
    	Embedded eLogo01 = new Embedded();
    	eLogo01.setWidth("95px");
    	eLogo01.setSource(new ThemeResource("img/gifts-icon.png"));	
    	componentGroup01.addComponent(eLogo01);
    	content.addComponent(componentGroup01);
		


		VerticalComponentGroup componentGroup10 = new VerticalComponentGroup();
    	componentGroup10.setCaption("Send");
    	
    	Embedded eLogo10 = new Embedded();
    	eLogo10.setWidth("95px");
    	eLogo10.setSource(new ThemeResource("img/Sparrow_icon.png"));		
    	componentGroup10.addComponent(eLogo10);
    	content.addComponent(componentGroup10);
		

		
		VerticalComponentGroup componentGroup11 = new VerticalComponentGroup();
    	componentGroup11.setCaption("My data");
    	
    	Embedded eLogo11 = new Embedded();
    	eLogo11.setWidth("95px");
    	eLogo11.setSource(new ThemeResource("img/Book-icon.png"));	
    	componentGroup11.addComponent(eLogo11);
    	content.addComponent(componentGroup11);
		
		
		
		VerticalComponentGroup componentGroup20 = new VerticalComponentGroup();
    	componentGroup20.setCaption("Bank");
    	
    	Embedded eLogo20 = new Embedded();
    	eLogo20.setWidth("95px");
    	eLogo20.setSource(new ThemeResource("img/fb_profil.png"));	
    	componentGroup20.addComponent(eLogo20);
    	content.addComponent(componentGroup20);
		


		VerticalComponentGroup componentGroup21 = new VerticalComponentGroup();
    	componentGroup21.setCaption("Powered by");
    	
    	Embedded eLogo21 = new Embedded();
    	eLogo21.setWidth("95px");
    	eLogo21.setSource(new ThemeResource("img/in2Logo.png"));		
    	componentGroup21.addComponent(eLogo21);
    	content.addComponent(componentGroup21);
    	
    	setContent(content);
    	
    	//getApplication().getMainWindow().setContent(content);
    }
	
   
}
