import { useState } from 'react';

export const useInputValue = (initialValue: string): { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void } => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};
