import { PropsWithChildren, useState } from "hono/jsx";
import XmarkSolid from "./xmark-solid";
import Button from "../button";

const Dialog = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        title={title}
        variant="primary"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      {isOpen && (
        <>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            class="fixed inset-0 bg-black/80 z-50"
          />
          <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white z-50 rounded-lg">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              class="absolute top-4 right-4 cursor-pointer"
            >
              <XmarkSolid class="w-6 h-6" />
            </button>
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default Dialog;
