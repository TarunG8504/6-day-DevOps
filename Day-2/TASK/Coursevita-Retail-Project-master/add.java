import java.math.BigInteger;
import java.util.Scanner;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class ComplexAddition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Enter first large number: ");
            BigInteger num1 = new BigInteger(scanner.nextLine());

            System.out.print("Enter second large number: ");
            BigInteger num2 = new BigInteger(scanner.nextLine());

            // Using Multi-threading to perform addition
            ExecutorService executor = Executors.newSingleThreadExecutor();
            Future<BigInteger> futureSum = executor.submit(new AddTask(num1, num2));

            // Getting the result from thread
            BigInteger sum = futureSum.get();
            System.out.println("Sum: " + sum);

            executor.shutdown();
        } catch (Exception e) {
            System.out.println("Invalid input. Please enter valid numbers.");
        } finally {
            scanner.close();
        }
    }
}

// Task to perform addition in a separate thread
class AddTask implements Callable<BigInteger> {
    private BigInteger num1, num2;

    public AddTask(BigInteger num1, BigInteger num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    @Override
    public BigInteger call() {
        return num1.add(num2);
    }
}
