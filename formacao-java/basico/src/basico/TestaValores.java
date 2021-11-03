package basico;

public class TestaValores {

	public static void main(String[] args) {
		int primeiro = 5;
		int segundo = 7;
		segundo = primeiro;
		primeiro = 10;

		// o numero nao segue o outro infinitamente, logo o resultado sera 5

		System.out.println(segundo);
	}

}
