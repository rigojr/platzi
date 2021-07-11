import { useState } from 'react';

const usePayLoading = (
  initPayload: any | any[],
): [any | any[], boolean, React.Dispatch<any>, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [payload, setPayload] = useState(initPayload);
  const [loading, setLoading] = useState(false);
  return [payload, loading, setPayload, setLoading];
};

export default usePayLoading;
