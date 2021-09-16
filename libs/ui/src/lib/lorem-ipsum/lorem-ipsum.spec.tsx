import { render } from '@testing-library/react';

import LoremIpsum from './lorem-ipsum';

describe('LoremIpsum', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoremIpsum />);
    expect(baseElement).toBeTruthy();
  });
});
