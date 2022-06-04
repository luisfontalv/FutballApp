import { useState } from 'react';

export const useModal = (initialMode = false) => {

    const [show, setShow] = useState(initialMode);

    const toogle = () => setShow(!show);

    return [show, toogle];
  
}