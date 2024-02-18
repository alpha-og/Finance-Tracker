import { MdErrorOutline } from "react-icons/md";
import { MdClose } from "react-icons/md";

type T_ToastProps = {
  variant: "error" | "success";
  title?: string;
  message: string;
  visibility: "visible" | "hidden";
  setVisibility: (visibility: "visible" | "hidden") => void;
};

const commonTwClasses =
  "absolute top-20 max-w-72 h-12 p-2 flex justify-start items-center gap-2 border rounded-lg ease-in-out duration-500";

const variants = {
  error: "text-red-500 border-red-500 bg-red-400/10",
  success: "text-green-500 border-green-500 bg-green-400/10",
};

const state = {
  visible: "right-5 opacity-100",
  hidden: "-right-80 opacity-0",
};

const Toast = ({
  variant,
  title,
  message,
  visibility,
  setVisibility,
}: T_ToastProps) => {
  console.log(variants[variant]);
  return (
    <div
      className={`${commonTwClasses} ${variants[variant]} ${state[visibility]}`}
    >
      <MdErrorOutline className="w-10 h-10 ease-in-out duration-300" />
      <div className="flex flex-col gap-1">
        <h1 className="text-sm font-bold">{title}</h1>
        <p className="text-sm">{message}</p>
      </div>
      <button onClick={() => setVisibility("hidden")}>
        <MdClose className="w-6 h-6 aspect-square ease-in-out duration-300" />
      </button>
    </div>
  );
};

export default Toast;
