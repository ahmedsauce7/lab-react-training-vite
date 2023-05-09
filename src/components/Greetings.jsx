import React from 'react'

function Greetings(prop) {
    const { lang, children } = prop
    let greetings = '';

    switch (lang) {
        case 'de':
          greetings = `Hallo ${children}`;
          break;
        case 'en':
          greetings = `Hello ${children}`;
          break;
        case 'es':
          greetings = `Hola ${children}`;
          break;
        case 'fr':
          greetings = `Bonjour ${children}`;
          break;
        default:
        greetings = `Hello ${children}`;
      }

  return (
    <div className="id-card">
        <p>{greetings}</p>
    </div>
  );
}

export default Greetings