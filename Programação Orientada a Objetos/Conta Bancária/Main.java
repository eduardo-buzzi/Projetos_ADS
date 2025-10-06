import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o número da conta: ");
        int numero = sc.nextInt();
        sc.nextLine();

        System.out.print("Digite o nome do titular da conta: ");
        String titular = sc.nextLine();

        System.out.print("Deseja realizar um depósito inicial (s/n)? ");
        char resp = sc.next().charAt(0);

        ContaBancaria conta;

        if (resp == 's' || resp == 'S') {
            System.out.print("Digite o valor do depósito inicial: ");
            double depositoInicial = sc.nextDouble();
            conta = new ContaBancaria(numero, titular, depositoInicial);
        } else {
            conta = new ContaBancaria(numero, titular);
        }

        System.out.println("\nDados da conta:");
        System.out.println(conta);

        System.out.print("\nDigite um valor para depósito: ");
        double valorDeposito = sc.nextDouble();
        conta.depositar(valorDeposito);
        System.out.println("Dados atualizados da conta:");
        System.out.println(conta);

        System.out.print("\nDigite um valor para saque: ");
        double valorSaque = sc.nextDouble();
        conta.sacar(valorSaque);
        System.out.println("Dados atualizados da conta:");
        System.out.println(conta);

        sc.close();
    }
}
