// Try uncommenting LoremIpsum2 and see how it impacts bundle size.
import {
  Header,
  Footer,
  LoremIpsum,
  // LoremIpsum2
} from '@nx-next/ui';

export function Index() {
  return (
    <>
      <Header>Header</Header>
      <LoremIpsum />
      {/* <LoremIpsum2 /> */}
      <Footer>Footer</Footer>
    </>
  );
}

export default Index;
