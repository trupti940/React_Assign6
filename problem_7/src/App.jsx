import React from 'react';
import AdvancedForm from './AdvancedForm';
import ValidatedForm from './ValidatedForm';
import FormSubmission from './FormSubmission';

function App() {
  return (
    <div>
      <h1>Advanced useRef Form Handling</h1>
      <AdvancedForm />
      <ValidatedForm />
      <FormSubmission />
    </div>
  );
}

export default App;
