# TypeScript/JavaScript에서의 클래스 개념과 사용법을 간단정리

> JS/TS에서 클래스를 잘 활용해본적이 없어서, o1에게 사용법에 대해 간단하게 정리해달라고 했다.



------

## 1. 클래스 기본 구조

TypeScript와 ECMAScript(이미 여러 브라우저, Node.js 등에서 지원)의 클래스 문법은 다음과 같습니다:

```ts
class MyClass {
  // 1) 필드(속성) 선언
  myField: string;

  // 2) 생성자
  constructor(initialValue: string) {
    // 생성될 때 필요한 초기화 로직을 여기에 작성
    this.myField = initialValue;
  }

  // 3) 메서드
  sayHello() {
    console.log(`Hello, ${this.myField}!`);
  }
}

// 사용 예시
const instance = new MyClass("TypeScript");
instance.sayHello(); // "Hello, TypeScript!"
```

- `class MyClass { ... }`로 클래스를 정의합니다.  
- 필드(속성)는 선언(혹은 바로 초기화)할 수 있습니다.  
- `constructor(...)` 안에서 인스턴스 생성 시점에 필요한 초깃값 등을 설정해줄 수 있습니다.  
- 메서드는 `메서드명() { ... }` 형태로 선언합니다.

------

## 2. 접근 제어자 (public, private, protected)

TypeScript에는 다음 세 가지 접근 제어자가 있습니다.

1. **public** : 어디서든 접근 가능(기본값).  
2. **private** : 클래스 내부에서만 접근 가능.  
3. **protected** : 클래스 내부와 상속받은 자식 클래스 내부에서만 접근 가능.  

예시:

```ts
class Person {
  public name: string;      // 어디서든 접근 가능
  private age: number;      // Person 내부에서만 접근 가능
  protected nickname: string; // Person과 상속된 자식 클래스 내에서 접근 가능

  constructor(name: string, age: number, nickname: string) {
    this.name = name;
    this.age = age;
    this.nickname = nickname;
  }

  public greet() {
    // private 필드 age에 내부에서는 접근 가능
    console.log(`안녕하세요. 제 이름은 ${this.name}, 나이는 ${this.age}살입니다.`);
  }
}

class Student extends Person {
  public introduce() {
    // nickname은 protected이므로 상속받은 자식 클래스(Student)에서도 접근 가능
    console.log(`저는 ${this.name}이고, 별명은 ${this.nickname}입니다.`);
  }
}

const p = new Person("Alice", 20, "알리");
p.greet(); // 정상 동작
// p.age;      // 에러(private이므로 외부에서 접근 불가)
// p.nickname; // 에러(protected이므로 외부에서 접근 불가)

const s = new Student("Bob", 22, "밥");
s.introduce(); // 정상 동작
```

------

## 3. 자동 필드 선언 (파라미터 프로퍼티)

생성자 파라미터에 접근 제어자를 붙여주면, 번거로운 필드 선언 과정을 자동으로 처리할 수 있습니다.

```ts
class Book {
  // 생성자 파라미터에 private/public/protected를 붙이면 필드로 자동 선언됨
  constructor(public title: string, private author: string) {}

  getAuthor() {
    // 내부에서는 author 접근 가능
    return this.author;
  }
}

const b = new Book("TypeScript Handbook", "John Smith");
console.log(b.title);    // "TypeScript Handbook"
// console.log(b.author); // private이므로 외부 접근 불가
```

------

## 4. 상속 (extends 키워드)

한 클래스를 다른 클래스가 상속받아 재사용할 수 있습니다. 위에서 이미 간단히 언급했지만, 좀 더 명시적으로 보여드리면:

```ts
class Animal {
  constructor(public name: string) {}
  move() {
    console.log(`${this.name}이(가) 움직였습니다!`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`왈왈! 저는 ${this.name}입니다.`);
  }
}

const dog = new Dog("바둑이");
dog.move(); // 바둑이이(가) 움직였습니다!
dog.bark(); // 왈왈! 저는 바둑이입니다.
```

------

## 5. 추상 클래스 (abstract)

“직접 인스턴스를 만들 수 없는 클래스”를 말합니다. 자식 클래스가 상속받아서 구체적인 구현을 채워 넣는 용도로 사용합니다.

```ts
abstract class Shape {
  abstract getArea(): number; // 자식 클래스에서 구현해야 함

  describe() {
    console.log(`이 도형의 넓이는 ${this.getArea()}입니다.`);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(5);
c.describe(); // "이 도형의 넓이는 78.53981633974483입니다."
// const s = new Shape(); // 에러! Shape는 추상클래스라 인스턴스화 불가능
```

------

## 6. static 키워드

클래스 자체에 속하는 메서드나 속성을 정의할 때 사용합니다. 인스턴스가 아니라 “클래스 이름”으로 접근합니다.

```ts
class MathUtil {
  static pi: number = 3.14;

  static circleArea(r: number) {
    return MathUtil.pi * r * r;
  }
}

console.log(MathUtil.pi);         // 3.14
console.log(MathUtil.circleArea(5)); // 78.5
```

------

## 7. 정리

- **클래스**는 생성자(`constructor`)에서 초기화 로직을 수행하고, 내부/외부 접근을 제어할 수 있으며, 필요한 메서드들을 선언해 “객체 지향적인 구조”를 만들어줍니다.  
- **인터페이스**는 “타입 정의” 수준으로만 작동하기 때문에 생성자나 메서드를 가질 수는 없고(단, TypeScript에선 인터페이스에 메서드 시그니처는 선언 가능), 컴파일 후 JS에는 사라집니다.  
- 중간에 언급한 접근 제어자(`public`, `private`, `protected`), 상속(`extends`), 정적 메서드/필드(`static`)는 “객체 지향”을 표현하는 핵심 도구들입니다.



---

## get, set

TypeScript나 최신 JavaScript(ES5 이상)에서는 `get`/`set` 키워드를 이용해서 프로퍼티 접근자를 정의할 수 있습니다.
 덕분에 아래와 같은 좋은 점들이 있습니다:

1. **외부에서 필드 사용 시, 함수처럼 안 보이게 만들기**  
   - 예를 들어 `person.getAge()` 대신 `person.age` 형식으로 접근 가능하니, 코드가 가독성 측면에서 조금 더 자연스럽습니다.
2. **유효성 검사나 추가 로직 처리**  
   - 게터(`get`) 내부에 로직을 넣어, 불필요한 캐시 처리를 한다거나, 세터(`set`) 내부에 유효성 검증(예: “음수 나이 입력 방지”) 등을 자동으로 수행할 수 있습니다.
3. **호출부를 크게 바꾸지 않고, 내부 로직을 확장**  
   - 원래 단순히 `this.age` 필드를 노출했는데, 나중에 추가 기능(로그 기록, 캐싱, 유효성 검사 등)이 필요해져도, 호출부 코드는 `person.age` 그대로 유지됩니다. 

아래는 간단한 예시예요:

```ts
class Person {
  // private 필드
  private _age: number = 0;

  constructor(age: number) {
    this._age = age;
  }

  // 게터: 프로퍼티 읽기 시 호출
  get age(): number {
    // 필요하다면 여기서 추가 로직 (예: 형 변환, 음수 제거, ...)
    return this._age;
  }

  // 세터: 프로퍼티에 값을 할당할 때 호출
  set age(value: number) {
    if (value < 0) {
      throw new Error("나이는 음수가 될 수 없습니다.");
    }
    this._age = value;
  }
}

const p = new Person(20);
console.log(p.age); // 게터가 호출되어 결과: 20
p.age = 25;         // 세터가 호출되어 내부 검증 이후 25로 세팅
```

이런 식으로 게터/세터를 활용하시면 되고,
 굳이 검증 같은 로직이 필요하지 않은 간단한 필드라면, **게터/세터 없이** `public age: number = 20;` 이렇게 바로 노출해도 전혀 문제되지 않습니다.
