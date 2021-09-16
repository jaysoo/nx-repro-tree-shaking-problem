import { Header } from '@nx-next/ui/lib/header';
import { Footer } from '@nx-next/ui/lib/footer';

import { LoremIpsum } from '@nx-next/ui/lib/lorem-ipsum';

export function Index() {
  return (
    <>
      <Header>Header</Header>
      <LoremIpsum />
      <Footer>Footer</Footer>
    </>
  );
}

export default Index;
