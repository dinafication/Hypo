package hr.in2.invest.loyalty.loyalty.components;


import hr.in2.invest.loyalty.loyalty.ChoicePanel;
import hr.in2.invest.loyalty.loyalty.dummydata.DummAcc;

import com.vaadin.addon.touchkit.ui.NavigationManager;
import com.vaadin.addon.touchkit.ui.NavigationView;

public class Manager extends NavigationManager{
	
	private static final long serialVersionUID = 1L;

	 public Manager() {
		 showChoicePanel();
		 
		}
	 
	

	 @Override
	public void attach() {
		 //showChoicePanel();
//		 /
		 
		super.attach();	
		navigateTo(new ChoicePanel(this));
	}
	 
		
		public void showMaster() {
			// first go back to top level
			while (getPreviousComponent() != null) {
				navigateBack();
			}
			// then navigate to species via its group
			navigateTo(new Master(this));
			
//			Tabs poslTabs = (Tabs)getParent();
//		    poslTabs.setSelectedTab(this);
		}
		
		public void showDetail(DummAcc acc) {
			 //first go back to top level
			while (getPreviousComponent() != null) {
				navigateBack();
			}
			 //then navigate to species via its group
			navigateTo(new Detail(acc));
			

//			Tabs poslTabs = (Tabs)getParent();
//		    poslTabs.setSelectedTab(this);
		}
		
		public void showChoicePanel() {
			 //first go back to top level
			while (getPreviousComponent() != null) {
				navigateBack();
			}
			 //then navigate to species via its group
			navigateTo(new ChoicePanel(this));
//			
//			if(getParent() != null){
//				Tabs poslTabs = (Tabs)getParent();
//			    poslTabs.setSelectedTab(this);
//			}
			
		}



		public void showCode() {
			while (getPreviousComponent() != null) {
				navigateBack();
			}
			navigateTo(new MyCode());
			
		}
		
		
		public void showSend() {
			while (getPreviousComponent() != null) {
				navigateBack();
			}
			navigateTo(new MySend());
			
		}
		
		public void showPoints() {
			while (getPreviousComponent() != null) {
				navigateBack();
			}
			navigateTo(new MyPoints());
			
		}
		

	
//	public void showWaiting() {
//		// first go back to top level
//		while (getPreviousComponent() != null) {
//			navigateBack();
//		}
//		// then navigate to species via its group
//		//navigateTo(new WaitingTab());
//	}
	
		
}
