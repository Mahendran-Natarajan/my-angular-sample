
interface AAA {
     int aaa = 10;
     public void AAA();
}

class A {
    A() {
       System.out.println("A Class : Hello World");
    }


    A(int a ) {
       System.out.println("A Class : "  +a);
    }
    public void display() {
       System.out.println("A Display method");
    }
}

 class Hello extends A implements AAA {


  Hello() {
    super();
    System.out.println(aaa);
  }

  Hello(int a) {
    super(a);
    System.out.println(aaa);
  }

 public void AAA() {
    System.out.println("Implementation AAA ");
  }

  public static void main(String [] args) {
       Hello hello = new Hello();
       System.out.println("Hello World");
       hello.display();
       hello.AAA();
  }
}
