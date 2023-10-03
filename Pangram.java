  import java.util.Scanner;

  class Pangram {
      public static void main(String[] args) {
          Scanner scan = new Scanner(System.in);
          System.out.print("Enter the string: ");
          String str = scan.nextLine().toLowerCase();

          int[] check = new int[26];

          for (int i = 0; i < str.length(); i++) {
              if(str.charAt(i) != ' ' && str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
                  check[str.charAt(i) - 'a'] = 1;
              } 
          }

          for (int i = 0; i < 26; i++) {
              if (check[i] != 1) { 
                  System.out.println("Not Pangram");
                  System.exit(0); 
              }   
          }

          System.out.println("Pangram");
      }
  }