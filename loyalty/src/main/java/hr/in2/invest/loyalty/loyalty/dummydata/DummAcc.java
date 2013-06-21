package hr.in2.invest.loyalty.loyalty.dummydata;

import java.io.Serializable;
import java.util.ArrayList;

public class DummAcc implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private String naziv;
	private String raspolozivo;
	private String stanje;
	

	public DummAcc(String naziv, String raspolozivo, String stanje) {
		this.naziv = naziv;
		this.raspolozivo = raspolozivo;
		this.stanje = stanje;
	}
	
	public static ArrayList<DummAcc> getDummList(){
		
		ArrayList<DummAcc> ret = new ArrayList<DummAcc>();
		for(int i = 0; i< 3; i++){
			ret.add(new DummAcc("837825783" + i, "2 200, 9" + i, "3 400, 0" +i));
		}
		return ret;
	}

	public String getNaziv() {
		// TODO Auto-generated method stub
		return naziv;
	}

	public String getRaspolozivo() {
		return raspolozivo;
	}

	public void setRaspolozivo(String raspolozivo) {
		this.raspolozivo = raspolozivo;
	}
	

	public String getStanje() {
		return stanje;
	}

	public void setStanje(String stanje) {
		this.stanje = stanje;
	}
}
