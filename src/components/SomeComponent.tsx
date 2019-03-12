import * as React from 'react';

interface ISomeComponentProps {}

export const SomeComponent: React.FunctionComponent<ISomeComponentProps> = (props) => {
  const { } = props;

  return (
    <div>This is some component</div>
  );
};

export default SomeComponent;
