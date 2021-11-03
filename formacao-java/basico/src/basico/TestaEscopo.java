package basico;

public class TestaEscopo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int teste = 50;
		if (teste >= 10) {
			String testaEscopo = "OI";
			System.out.println(testaEscopo);
		} else {
			System.out.println(testaEscopo);
			//esse codigo nao ira funcionar, pois a variavel morre dentro das chaves do bloco que foi criada
		}
	}

}
