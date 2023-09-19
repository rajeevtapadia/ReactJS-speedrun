import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
    console.log(children);
    
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
