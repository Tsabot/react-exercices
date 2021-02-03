import React from "react";

interface Props {
    classSuffix: string;
}

export const BorderStyling: React.FunctionComponent<Props> = ({ classSuffix, children  }) => {
  return (
    <div className={`${classSuffix}--Red`}>
      <div className={`${classSuffix}--Green`}>
        <div className={`${classSuffix}--Blue`}>
            {children}
        </div>
      </div>
    </div>
  );
};
