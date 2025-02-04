import React from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const ActiveLink = ({children, ...props}) => {
  const router = useRouter();
  return (
    (<Link router={router} {...props} legacyBehavior>
      {React.cloneElement(React.Children.only(children), {
        className: router.pathname === props.href ? 'active' : undefined,
      })}
    </Link>)
  );
};

export default ActiveLink;
