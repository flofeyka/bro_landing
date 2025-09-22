import { useState } from "react";

interface CheckboxProps {
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Checkbox({ children, checked, onChange }: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(checked ?? false);
  const isControlled = typeof checked === "boolean";
  const isChecked = isControlled ? checked : internalChecked;

  const handleChange = () => {
    const newChecked = !isChecked;
    if (!isControlled) setInternalChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="hidden"
      />
      <span
        className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-all`}
      >
        {isChecked && (
          <svg
            className="w-3 h-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#58CAA4"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <span>{children}</span>
    </label>
  );
}
