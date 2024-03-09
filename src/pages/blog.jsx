import { Helmet } from 'react-helmet-async';

import BetbyFrame from 'src/components/betby/BetByFrame';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>

      <BetbyFrame />
    </>
  );
}
