package hr.in2.invest.loyalty.loyalty.components;

import hr.in2.invest.loyalty.loyalty.ChoicePanel;
import hr.in2.invest.loyalty.loyalty.dummydata.DummAcc;

import java.util.ArrayList;

import com.vaadin.addon.touchkit.ui.NavigationManager;
import com.vaadin.addon.touchkit.ui.NavigationView;
import com.vaadin.addon.touchkit.ui.VerticalComponentGroup;
import com.vaadin.ui.Button;
import com.vaadin.ui.VerticalLayout;

public class Master extends NavigationView {
	
	private static final long serialVersionUID = 1L;
	private ArrayList<DummAcc> das;
	private Manager mng;
	
	public Master(Manager mng) {
		this.mng = mng;
	}

	@Override
	public void attach() {
		super.attach();
		buildView();
	}

	private void buildView() {

		setCaption("Accounts");

		VerticalLayout vl = new VerticalLayout();

		VerticalComponentGroup componentGroup = new VerticalComponentGroup();

		das = DummAcc.getDummList();

		for (final DummAcc a : das) {
			
			
			Button b = new ItemNavigationButton(new Detail(a), a.getNaziv());
			componentGroup.addComponent(b);
		}

//		searchBtn = new Button("Search");
//		searchBtn.setSizeFull();
//		searchBtn.addListener(new ClickListener() {
//
//			@Override
//			public void buttonClick(ClickEvent event) {
//				// treba pozvati SearchPoslovnica tab
//				((ManagerTab) getParent()).showSearch();
//			}
//		});
//
//		vl.addComponent(searchBtn);
		vl.addComponent(componentGroup);

		setContent(vl);

	}

}
