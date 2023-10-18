'use client';
import React from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faWhatsapp,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

const twitter = (
  <FontAwesomeIcon icon={faXTwitter} size="xl" style={{ color: '#2de86b' }} />
);
const facebook = (
  <FontAwesomeIcon icon={faFacebook} size="xl" style={{ color: '#2de86b' }} />
);
const whatsapp = (
  <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{ color: '#2de86b' }} />
);

type Props = {
  children: React.ReactNode;
  open: boolean;
  shareableLink: string;
};

const ModalShare = ({ children, open, shareableLink }: Props) => {
  const modalClass = cn({
    'modal modal-middle': true,
    'modal-open': open,
  });

  return (
    <div className={modalClass}>
      <div className="modal-box bg-mainBlack ">
        <h3 className="font-bold text-lg text-mainWhite">Share it on:</h3>

        <div className="flex m-2 gap-7 ">
          <TwitterShareButton
            title="Checkout this awesome exercise I did!"
            url={shareableLink}
          >
            {twitter}
          </TwitterShareButton>

          <FacebookShareButton
            quote="Checkout this awesome exercise I did!"
            url={shareableLink}
          >
            {facebook}
          </FacebookShareButton>

          <WhatsappShareButton
            title="Checkout this awesome exercise I did!"
            url={shareableLink}
          >
            {whatsapp}
          </WhatsappShareButton>
        </div>

        {children}
      </div>
    </div>
  );
};

export default ModalShare;
