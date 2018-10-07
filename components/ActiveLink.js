import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

const ActiveLink = withRouter(({ router, children, ...props }) => {
    console.log(router.pathname);
    console.log(props.href)
  return (
    <Link {...props}>
      {React.cloneElement(React.Children.only(children), {
        className: router.pathname === props.href ? 'active' : undefined,
      })}
    </Link>
  );

});

export default ActiveLink;
