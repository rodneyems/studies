package basico;

public class CalculoTrimestral {
	public static void main(String[] args) {
		double jan;
		double fev;
		double mar;
		double ave;
		
		jan = 15000;
		fev = 23000;
		mar = 17000;
		ave = (jan + fev + mar) / 3;
		
		System.out.println(ave);
		
	}
}
