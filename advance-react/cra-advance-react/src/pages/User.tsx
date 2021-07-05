import React from 'react';

interface IPropsUser {
  path: string;
}

export const User: React.FC<IPropsUser> = () => {
  return <h1>user</h1>;
};
