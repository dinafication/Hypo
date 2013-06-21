package hr.in2.invest.loyalty.loyalty.components;


import com.vaadin.addon.touchkit.ui.TabBarView;

public class Tabs extends TabBarView{
	
	private static final long serialVersionUID = 1L;
	private PersonalTab pt;
	private Manager mng;
	private HelpTab ht;
	
	public Tabs() {
		
		mng = new Manager();
		addTab(mng, "Home");
		
		pt = new PersonalTab();
		addTab(pt, "Personal");
		
		ht = new HelpTab();
		addTab(ht, "HELP");
		
		setSelectedTab(mng);
	}
	
	public void selectHome(){
		setSelectedTab(mng);
	}
	
	public PersonalTab getPersonalTab(){
		return pt;
	}
	
	public Manager getManagerTab(){
		return mng;
	}
	
	public HelpTab getHelpTab(){
		return ht;
	}

}
