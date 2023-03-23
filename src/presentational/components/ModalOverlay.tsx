import {
  ComponentProps,
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { Overlay } from './Overlay';

type ModalOverlayProps = {
  onClick?: () => void;
} & ComponentProps<typeof Overlay>;

export const ModalOverlay: FunctionComponent<
  PropsWithChildren<ModalOverlayProps>
> = (props) => {
  const [portalElement, setPortalElement] = useState<HTMLElement>();

  useEffect(() => {
    const body = document && document.body;
    const modalPortalElement = document.getElementById('modal-portal');
    if (modalPortalElement) {
      setPortalElement(modalPortalElement);
    } else {
      const newElement = document.createElement('div');
      newElement.setAttribute('id', 'modal-portal');
      body.appendChild(newElement);
      setPortalElement(newElement);
    }

    return () => {
      if (portalElement) {
        body.removeChild(portalElement);
      }
    };
  }, []);

  return portalElement
    ? createPortal(
        <Overlay {...props}>{props.children}</Overlay>,
        portalElement,
      )
    : null;
};
