# what is typescript?

TypeScript is an open-source programming language developed by Microsoft that acts as a strict superset of JavaScript. Essentially, it is "JavaScript with syntax for types," meaning that any valid JavaScript code is also valid TypeScript code.
Because web browsers and execution environments like Node.js cannot run TypeScript directly, a compiler transpiles TypeScript code into plain JavaScript by stripping out the type syntax before production.

# TypeScript kisne banayi aur kab?

- Family ECMAScript
- Paradigm Multi-paradigm: functional, generic, imperative, object-oriented
- Designed by Microsoft,
- Anders Hejlsberg,
- Luke Hoban
- Developer Microsoft
- First appeared 1 October 2012; 14 years ago[1]
- Stable release
- 7.0.2[2] Edit this on Wikidata / 8 July 2026; 3 months ago[3]
- Typing discipline Duck, gradual, strong, structural[4]
- Scope Lexical
- License Apache 2.0
- Filename extensions .ts, .tsx, .mts, .cts
- Website www.typescriptlang.org

* Anders Hejlsberg
  Creator of TypeScript
  TypeScript ko Microsoft ki team ne develop kiya, jismein Anders Hejlsberg ka central role tha. Hejlsberg C# language ke design ke liye bhi mashhoor hain.

# Key Features & How It Works

- Static Typing: Unlike JavaScript (which determines data types at runtime), TypeScript forces you to explicitly declare what kind of data your variables, arguments, and object properties should hold (e.g., strings, numbers, booleans).

- Compile-Time Checking: TypeScript catches bugs—like passing text into a math function or trying to access a property that doesn't exist—as you type or build your application. JavaScript only surfaces these issues when a user encounters them at runtime.

- No Runtime Overhead: TypeScript is strictly a development-time tool. Once compiled into standard JavaScript, all the type annotations are completely stripped out, meaning it has zero effect on application performance.

- Enhanced Developer Tooling: By giving the code structure, text editors can offer intelligent autocomplete, safer code refactoring across massive codebases, and instant inline documentation.

# TypeScript banane ki zaroorat kyun pesh aayi?

Shuru mein JavaScript ka use mostly web pages mein chhoti-moti interactivity ke liye hota tha. Lekin waqt ke saath websites badi applications ban gayin — jinmein hazaron functions, components, developers aur files hoti hain.
Microsoft ne dekha ke bade JavaScript projects ko maintain karna mushkil ho raha tha. Developers ko aise tools ki zaroorat thi jo code likhte waqt hi mistakes identify kar saken aur autocomplete, navigation aur refactoring mein madad dein. Isi zaroorat ke liye TypeScript develop ki gayi.

# TypeScript Setup

1. Node.js install karein.
2. Node.js version check karne ke liye:
   ```bash
   node -v
   ```
3. npm version check karne ke liye:
   ```bash
   npm -v
   ```
4. TypeScript globally install karne ke liye:
   ```bash
   npm install -g typescript
   ```
5. TypeScript version check karne ke liye:
   ```bash
   tsc -v
   ```
6. TypeScript compiler TypeScript file ko JavaScript file mein convert karta hai.
   Example:
   ```bash
   tsc app.ts
   ```
7. tsconfig.json file generate karne ke liye:
   ```bash
   tsc --init
   ```

## TypeScript Kya Hai?

TypeScript Microsoft ka banaya hua ek open-source programming language hai jo JavaScript ka advanced version hai. Iska matlab ye hai ke JavaScript ki sari features ke sath sath TypeScript extra type safety bhi deta hai.

Aasan lafzon mein:

- JavaScript mein variable ki type runtime par decide hoti hai.
- TypeScript mein type code likhte waqt hi define hoti hai.
- Isi wajah se errors early detect ho jaati hain.

## TypeScript Kaam Kaise Karta Hai?

1. Aap `.ts` file mein code likhte hain.
2. TypeScript compiler code ko check karta hai.
3. Agar code sahi hai, to wo JavaScript mein convert ho jata hai.
4. Browser ya Node.js us JavaScript ko run karta hai.

## JavaScript aur TypeScript mein Farq

| Feature        | JavaScript             | TypeScript                  |
| -------------- | ---------------------- | --------------------------- |
| Data Types     | Dynamic typing         | Static typing               |
| Errors         | Runtime par milti hain | Compile time par milti hain |
| Editor Support | Basic                  | Better IntelliSense         |
| Large Projects | Manage karna mushkil   | Easy aur safe               |

## TypeScript Ke Fayde

- Galtiyan jaldi pata chalti hain.
- Large projects ke liye better hai.
- Code maintenance easy hota hai.
- Better autocomplete aur editor support milta hai.

## Basic Data Types

Primitive types:

- number
- string
- boolean

Other types:

- Array
- Tuples
- Enums
- any
- unknown
- void
- null
- undefined
- never
- union

# Union types

Kabhi variable ko ek se zyada types ki permission deni hoti hai.
example:

let userId: number | string;

userId = 101;
userId = "USER101";

2. interface kya hota hai?
   TypeScript mein interface ek structure ya blueprint banata hai. Ye define karta hai ke kisi object mein kaun si properties honi chahiye aur unka data type kya hoga.

Example:

interface User {
email: string;
password: number;
}

Ab isko line by line samjho:

- interface User — hum User naam ka blueprint bana rahe hain.
- email: string — email ki value text honi chahiye.
- password: number — password ki value number honi chahiye.
- ; — property ko separate karta hai.
  Is interface ke mutabiq object kuch aisa hoga:

let user1: User = {
email: "abdul@example.com",
password: 1234
};

Agar email mein number de do, to TypeScript error dega.
Yaad rakho: Interface khud user create nahi karta; ye object ka structure define karta hai.

3. extends kya karta hai?
   Ab tumhare code ki ye line dekho:
   interface Admin extends User {
   superadmin: boolean;
   }

Iska matlab hai: Admin interface, User interface ki properties ko inherit kar raha hai.
User
email: string
password: number

extends — properties inherit hoti hain

Admin
email: string
password: number

superadmin: boolean (new property)

Yani Admin ke paas ab 3 properties hain:

1. email — User se mili.
2. password — User se mili.
3. superadmin — Admin mein khud add ki.
   boolean ka matlab sirf true ya false.
   Example:
   let admin1: Admin = {
   email: "admin@example.com",
   password: 1234,
   superadmin: true
   };

4. interface aur extends mein kya farq hai?

   # interface extends

   Blueprint define karta hai. Existing blueprint se properties inherit karta hai.
   Naya structure banane ke liye use hota hai. Existing structure ko reuse aur expand karta hai.
   - Example: interface User {}
   - Example: interface Admin extends User {}
     Ek important baat: extends akela interface nahi hai. Ye inheritance dikhane wala keyword hai jo interface declaration mein use hua hai.
   5. function argu(obj: Admin) ka kya matlab hai?
      function argu(obj: Admin) {
      obj.email;
      obj.password;
      obj.superadmin;
      }

Isko parts mein samjho:

- function — function declare karne ke liye.
- argu — function ka naam.
- obj — parameter, yani function ko milne wala object.
- : Admin — TypeScript ko batata hai ke obj ka structure Admin interface ke mutabiq hona chahiye.
- obj.email — object ki email property access kar raha hai.
- obj.password — password property access kar raha hai.
- obj.superadmin — superadmin property access kar raha hai.

  Dhyan do: tumhare current function mein properties access ho rahi hain, lekin unka result print nahi ho raha. Console mein dekhne ke liye:

  function argu(obj: Admin) {
  console.log(obj.email);
  console.log(obj.password);
  console.log(obj.superadmin);
  } 6. Function ko call kaise kiya ja raha hai?
  argu({
  email: "abdulrehmanar1996@gmail.com",
  password: 1234,
  superadmin: true
  });

Yahan hum argu() function ko call kar rahe hain aur ek object pass kar rahe hain.
TypeScript check karega ke object mein Admin ki required properties maujood hain ya nahi.
Expected console output:
abdulrehmanar1996@gmail.com
1234
true

Agar superadmin missing ho ya password mein string de do, to TypeScript type error dega.
Security note: Real applications mein passwords ko plain text ya number ki tarah store nahi karna chahiye. Passwords ko securely hash karna chahiye.
