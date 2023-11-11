// Create a component called *Person*. Inside of this component, render a *p* tag which displays “Learn some information about this person”. Each person should have name and age properties.

// If the person is over 18 years old, display an additional *h3* that says “please go vote!”. Otherwise, display an *h3* that says “you must be 18”. If the person’s name is longer than 8 characters, only display the first six characters of their name.

// Add a property called hobbies to your *Person* component that accepts an array of hobbies (an array of strings). Your Person component should list each one of these hobbies as an *li*.

// Add an *App* component that renders at least three copies of the *Person* component on the page.

const personList = [
  {
    name: "marc",
    age: 30,
    hobbies: ["surf", "climbing", "coding"],
  },
  {
    name: "alba",
    age: 26,
    hobbies: ["surf", "climbing", "singing"],
  },
  {
    name: "Johanna",
    age: 3,
    hobbies: ["walk", "play"],
  },
];

function App() {
  return (
    <div>
      {personList.map((p, index) => {
        return (
          <Person key={index} name={p.name} age={p.age} hobbies={p.hobbies} />
        );
      })}
    </div>
  );
}
