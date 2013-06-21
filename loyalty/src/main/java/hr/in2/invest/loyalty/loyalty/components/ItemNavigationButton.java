package hr.in2.invest.loyalty.loyalty.components;

import hr.in2.invest.loyalty.loyalty.dummydata.DummAcc;

import java.util.ArrayList;

import com.vaadin.addon.touchkit.ui.NavigationButton;
import com.vaadin.addon.touchkit.ui.NavigationView;
import com.vaadin.ui.Button.ClickEvent;
import com.vaadin.ui.Button.ClickListener;

public class ItemNavigationButton extends NavigationButton implements ClickListener{
	private static final long serialVersionUID = 1L;
	private NavigationView nv;

	public ItemNavigationButton(NavigationView nv, String caption) {
		this.nv = nv;
		setCaption(caption);
		addListener((ClickListener)this);
	}

	@Override
	public void buttonClick(ClickEvent event) {
		getNavigationManager().navigateTo(nv);
		
	}
	
	
	
		
		
	
}
