// Conceptual Example from refactoring.guru
// url: https://refactoring.guru/design-patterns/decorator/typescript/example

// Component defines the operations that can be altered by the decorator
interface Component {
  operation(): string;
}

// ConcreateComponent provide default implementations of the operations.
class ConcreteComponent implements Component {
  public operation(): string {
    return "Concrete Component";
  }
}

/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
class Decorator implements Component {
  private component: Component;

  constructor(c: Component) {
    this.component = c;
  }

  // Decorator deligates all the work to the wrapped component
  operation(): string {
    return this.component.operation();
  }
}

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
class ConcreateDecorator1 extends Decorator {
  operation(): string {
    return `ConcreateDecorator1 => ${super.operation()}`;
  }
}
class ConcreateDecorator2 extends Decorator {
  operation(): string {
    return `ConcreateDecorator2 => ${super.operation()}`;
  }
}

function clientCode(c: Component) {
  console.log(`Result => ${c.operation()}`);
}

const simple = new ConcreteComponent();
console.log("Simple Component");
clientCode(simple);
console.log("");

const decorator1 = new ConcreateDecorator1(simple);
const decorator2 = new ConcreateDecorator2(decorator1);
clientCode(decorator2);
