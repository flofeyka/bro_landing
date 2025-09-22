import React, { createContext, useContext, useState } from "react";

const RadioContext = createContext<{
  selected: string;
  onChange: (value: string) => void;
} | null>(null);

interface RadioGroupProps {
  children: React.ReactNode;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function RadioGroup({
  children,
  defaultValue = "",
  onChange,
}: RadioGroupProps) {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <RadioContext.Provider value={{ selected, onChange: handleChange }}>
      <div role="radiogroup">{children}</div>
    </RadioContext.Provider>
  );
}

interface RadioItemProps {
  value: string;
  label: string;
}

export function RadioItem({ value, label }: RadioItemProps) {
  const context = useContext(RadioContext);

  if (!context) {
    throw new Error("RadioItem must be used within a RadioGroup");
  }

  const { selected, onChange } = context;
  const isChecked = selected === value;

  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <input
        type="radio"
        name="custom-radio"
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <span
        className={`w-5 h-5 rounded-sm border flex items-center justify-center transition-all border-white`}
      >
        {isChecked && <span className="w-2 h-2 bg-white rounded-full" />}
      </span>
      <span>{label}</span>
    </label>
  );
}
