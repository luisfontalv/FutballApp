import { useState } from 'react';

export function useModal (initialMode = false) {

    const [show, setShow] = useState(initialMode);

    const toogle = () => setShow(!show);

    return [show, toogle];
  
}