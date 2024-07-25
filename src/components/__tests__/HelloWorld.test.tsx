import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HelloWorld from '../HelloWorld';

xtest('renders HelloWorld component', () => {
  const { getByText } = render(
    <Router>
        <HelloWorld />
    </Router>
  );
  expect(getByText('Landing page placeholder')).toBeInTheDocument();
});