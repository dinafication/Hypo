package hr.in2.invest.loyalty.loyalty.components;

import hr.in2.invest.loyalty.loyalty.dummydata.DummAcc;

import com.vaadin.addon.touchkit.ui.NavigationView;
import com.vaadin.addon.touchkit.ui.VerticalComponentGroup;
import com.vaadin.ui.FormLayout;
import com.vaadin.ui.Label;
import com.vaadin.ui.TextField;
import com.vaadin.ui.VerticalLayout;

public class Detail extends NavigationView{

	private static final long serialVersionUID = 1L;
	DummAcc acc;
	
	public Detail(DummAcc acc) {
		this.acc = acc;
	}
	
	@Override
	public void attach() {
		super.attach();
		buildView();
	}

	
	private void buildView() {

		setCaption(acc.getNaziv());
		VerticalLayout vl = new VerticalLayout();
		
		VerticalComponentGroup stAcc = new VerticalComponentGroup();
		stAcc.setCaption("Stanje");
		FormLayout fl= new FormLayout();

		TextField st = new TextField("Stanje");
		st.setValue(acc.getStanje());
		st.setReadOnly(true);
		fl.addComponent(st);
		
		TextField av = new TextField("Raspoloživi iznos na dan");
		av.setValue(acc.getRaspolozivo());	
		av.setReadOnly(true);
		fl.addComponent(av);
		
		stAcc.addComponent(fl);
		
		VerticalComponentGroup resAmnt = new VerticalComponentGroup();
		resAmnt.setCaption("Rezervirani iznos");
		FormLayout fl2= new FormLayout();

		TextField card = new TextField("Kartičnim poslovanjem");
		card.setValue(acc.getStanje());
		card.setReadOnly(true);
		fl2.addComponent(card);
		
		TextField nalog = new TextField("Nalozima");
		nalog.setValue(acc.getRaspolozivo());	
		nalog.setReadOnly(true);
		fl2.addComponent(nalog);
		
		resAmnt.addComponent(fl2);
		
		
		VerticalComponentGroup over = new VerticalComponentGroup();
		over.setCaption("Dozvoljeno prekoračenje");
		FormLayout fl3= new FormLayout();
		fl3.setSpacing(true);

		TextField am = new TextField("Iznos");
		am.setValue(acc.getStanje());
		am.setReadOnly(true);
		fl3.addComponent(am);
		
		TextField until = new TextField("Vrijedi do isteka dana");
		until.setValue("31.12.2999.");	
		until.setReadOnly(true);
		fl3.addComponent(until);
		
		over.addComponent(fl3);
		
		
		vl.addComponent(stAcc);		
		vl.addComponent(resAmnt);
		vl.addComponent(over);		
		
		setContent(vl);

	}
}
