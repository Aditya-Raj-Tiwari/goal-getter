import { useEffect } from "react";
import ReactDOM from "react-dom";

const TooltipPortal = ({ children, position }) => {
  const el = document.createElement("div");
  el.style.position = "absolute";
  el.style.left = `${position.x}px`;
  el.style.top = `${position.y}px`;

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};

const Tooltip = ({ text }) => (
  <div className="bg-red-400 text-sm ml-2 mt-1 p-2 rounded-lg">{text}</div>
);

export { Tooltip, TooltipPortal };
