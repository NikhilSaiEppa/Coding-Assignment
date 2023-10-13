// Question 2. Enter a Roman Number as input and convert it to an integer. (Example: IX = 9)

import java.util.HashMap;
import java.util.Scanner;

public class RomanToInteger {
    public static int romanToInt(String s) {
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);
        int result = 0;
        int prevValue = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);
            if (!romanValues.containsKey(currentChar)) {
                System.out.println("Invalid input.");
                return -1;
            }
            int currentValue = romanValues.get(currentChar);
            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }
            prevValue = currentValue;
        }

        return result;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String romanNumeral = scanner.nextLine();
        int integer = romanToInt(romanNumeral);
        if (integer != -1) {
            System.out.println(romanNumeral + " = " + integer);
        }
    }
}
