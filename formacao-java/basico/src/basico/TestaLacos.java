package basico;

public class TestaLacos {

	public static void main(String[] args) {
		int contador = 0;
		while (contador <= 10) {
			System.out.println(contador);
			// contador += 1;
			++contador;
		}

		for (int i = 0; i <= 10; i++) {
			System.out.println(i);
		}
		
		
		System.out.println("AQUI VAI");
		for (int i = 0; i < 100; i++) {
			if (i > 50 && i < 60) {
				continue;
			}
			System.out.println(i);
		}

	}

}
