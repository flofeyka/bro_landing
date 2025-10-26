import React from "react";
import cn from "../../utils/classNames.ts";

interface IProps {
    children: React.ReactNode;
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
    title?: React.ReactNode;
    className?: string;
}

function Modal({children, className, open, onOpenChange, title}: IProps) {
    if (!open) return null;

    const handleClose = React.useCallback(() => onOpenChange(false), [onOpenChange]);

    return <div onClick={handleClose}
                className={'fixed h-screen w-screen top-0 left-0 bg-black/50 flex justify-center items-center'}>
        <div onClick={(e) => e.stopPropagation()}
             className={'rounded-xl z-10 bg-white min-w-[350px] min-h-[300px] p-3 space-y-3'}>
            <h2 className="text-lg w-full flex justify-between items-center">
                <span>{title}</span>
                <button onClick={handleClose}>
                    <img src={'/icons/close.svg'} height={25} width={25} alt={'close'} />
                </button>
            </h2>

            <main className={ className}>
                {children}
            </main>

        </div>
    </div>
}

export default Modal;