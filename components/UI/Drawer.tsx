import React from "react";

const openClassNames = {
  right: "translate-x-0",
  left: "translate-x-0",
  top: "translate-y-0",
  bottom: "translate-y-0",
};

const closeClassNames = {
  right: "translate-x-[110%]",
  left: "-translate-x-[110%]",
  top: "-translate-y-[110%]",
  bottom: "translate-y-[110%]",
};

const classNames = {
  right: "inset-y-0 right-0",
  left: "inset-y-0 left-0",
  top: "inset-x-0 top-0",
  bottom: "inset-x-0 bottom-0",
};

type DrawerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  side?: "right" | "left" | "top" | "bottom";
  children: React.ReactNode;
};

const Drawer = ({ open, setOpen, side = "left", children }: DrawerProps) => {
  return (
    <div
      id={`dialog-${side}`}
      className="relative z-[1000]"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(!open)}
    >
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-all ${
          open
            ? "visible opacity-100 duration-500 ease-in-out"
            : "invisible opacity-0 duration-500 ease-in-out"
        }`}
      ></div>
      <div className={`${open ? "fixed inset-0 overflow-hidden" : ""}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`pointer-events-none fixed max-w-full ${classNames[side]}`}
          >
            <div
              className={`pointer-events-auto relative h-full w-full transform transition duration-500 ease-in-out ${
                open ? openClassNames[side] : closeClassNames[side]
              }`}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <div className="flex h-full w-full min-w-80 max-w-80 flex-col overflow-y-auto rounded-lg bg-white shadow-xl">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
