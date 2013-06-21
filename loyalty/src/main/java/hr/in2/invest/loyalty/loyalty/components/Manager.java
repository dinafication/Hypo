package hr.in2.invest.loyalty.loyalty.components;


import hr.in2.invest.loyalty.loyalty.ChoicePanel;
import hr.in2.invest.loyalty.loyalty.dummydata.DummAcc;

import com.vaadin.addon.touchkit.ui.NavigationManager;

public class Manager extends NavigationManager{
	
	private static final long serialVersionUID = 1L;

	 public Manager() {
			navigateTo(new ChoicePanel(this));
		 //showChoicePanel();
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
		
		

	
//	public void showWaiting() {
//		// first go back to top level
//		while (getPreviousComponent() != null) {
//			navigateBack();
//		}
//		// then navigate to species via its group
//		//navigateTo(new WaitingTab());
//	}

}
