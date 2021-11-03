package basico;

public class Tabuada {

	public static void main(String[] args) {
		for (int numero = 1; numero <= 10; numero++) {
			System.out.println("Tabuada do " + numero);
			for (int multiplicador = 0; multiplicador <= 10; multiplicador++) {
				int soma = numero * multiplicador;
				System.out.println(numero + " x " + multiplicador + " = " + soma);
			}
		}

	}

}
