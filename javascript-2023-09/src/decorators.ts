function my (target: any, key: any, description: any) {
  console.log('my decorator has been called!')
}

@my
class A {

  @my
  method() {
    return 1;
  }
}


// new A().method();
