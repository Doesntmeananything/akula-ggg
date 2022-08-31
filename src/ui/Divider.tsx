import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLHRElement>;

export const Divider = (props: Props) => {
  const { className } = props;

  return <hr {...props} className={`border-ggg-gray-200 h-px w-full ${className}`} />;
};
