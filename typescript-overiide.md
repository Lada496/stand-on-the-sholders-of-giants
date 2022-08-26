## TypeScript Override

"TypeScript enforces that a derived class is always a subtype of its base class." (ref: https://www.typescriptlang.org/docs/handbook/2/classes.html#overriding-methods)

ok

```typescript
class Instrument {
  play() {
    console.log("lalala");
  }
}

class Piano extends Instrument {
  play(notes?: number[]) {
    {
      if (notes === undefined) {
        super.play;
      } else {
      }
      for (let note of notes) {
        console.log(note);
      }
    }
  }
}
```

ng

```typescript
class Instrument {
  play() {
    console.log("lalala");
  }
}

class Piano extends Instrument {
  play(notes: number[]) {
    for (let note of notes) {
      console.log(note);
    }
  }
}
```
