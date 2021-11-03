package basico;

public class Exercicio313 {

	public static void main(String[] args) {

		System.out.println("EXEC 1 - 150 a 300");
		for (int i = 150; i <= 300; i++) {
			System.out.println(i);

		}

		System.out.println("EXEC 2 - Soma 1k");
		int soma = 0;
		for (int i = 0; i <= 1000; i++) {
			soma += i;
		}
		System.out.println(soma);

		System.out.println("EXEC 3 - Multiplos 3");
		for (int i = 0; i <= 100; i++) {
			if (i % 3 == 0) {
				System.out.println(i);
			}
		}

		System.out.println("EXEC 4 - Fatorial");
		int fatorial = 1;
		for (int i = 1; i <= 10; i++) {
			fatorial *= i;
			System.out.println(fatorial);
		}

		System.out.println("EXEC 5 - Estouro int");
		int fatorialEstouro = 1;
		long fatorialEstouro2 = 1;
		for (int i = 1; i <= 30; i++) {
			fatorialEstouro *= i;
			fatorialEstouro2 *= i;
			System.out.println("COM" + fatorialEstouro);
			System.out.println("SEM" + fatorialEstouro2);
		}

		System.out.println("EXEC 6 - Fibo até 100");
		int anterior = 0;
		int atual = 0;
		int proximo = 1;
		while (atual <= 100) {
			System.out.println(atual);
			anterior = atual;
			atual = proximo;
			proximo = atual + anterior;
		}
	}

}
