// Create a component called *Person*. Inside of this component, render a *p* tag which displays “Learn some information about this person”. Each person should have name and age properties.

// If the person is over 18 years old, display an additional *h3* that says “please go vote!”. Otherwise, display an *h3* that says “you must be 18”. If the person’s name is longer than 8 characters, only display the first six characters of their name.

// Add a property called hobbies to your *Person* component that accepts an array of hobbies (an array of strings). Your Person component should list each one of these hobbies as an *li*.

function Person({ name, age, hobbies }) {
  const legalAge = age >= 18 ? "please go vote!" : "you must be 18";
  return (
    <div>
      <p>Learn some information about this person</p>
      <h3>{name}</h3>
      <h3>{age}</h3>
      {legalAge && <h3>{legalAge}</h3>}

      <ul>
        <p>Hobbies:</p>
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
}
