
// question 1.Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int[] Array = {1, 2, 3, 4, 5, 6, 7};
        Random rand = new Random();
        for (int i = Array.length - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);
            int temp = Array[i];
            Array[i] = Array[j];
            Array[j] = temp;
        }
        for (int num : Array) {
            System.out.print(num + " ");
        }
    }
}
