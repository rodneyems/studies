package basico;

public class TestaCondicional {
	// or = ||; and = &&. Se quiser mudar uma variável booleana, basta colocar o ! na frente
	public static void main(String[] args) {
		int idade = 20;
		if (idade >= 21) {
			System.out.println("VC É MAIORZÃO");
		} else {
			System.out.println("QUE PENA!");
		}
		boolean negativo = false;
		
		if (!negativo) {
			System.out.println("SOU POSITIVO, ORAS!");
		}
		
		switch (idade) {
		case 30: {
			System.out.println("30");
		}
		case 20: {
			System.out.println("20");
		}
		default:
			throw new IllegalArgumentException("Unexpected value: " + idade);
		}
	}

}
