import React from 'react';

function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18px" height="18px">
      <path fill="none" stroke="var(--font-color-1)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,20.5v-5c0-3.3,2.7-6,6-6h10" />
      <path fill="none" stroke="var(--font-color-1)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M38.5,25.5v10c0,3.3-2.7,6-6,6h-20c-3.3,0-6-2.7-6-6v-7" />
      <line x1="23.5" x2="41.5" y1="24.5" y2="6.5" fill="none" stroke="var(--font-color-1)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" />
      <polyline fill="none" stroke="var(--font-color-1)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" points="27.5,6.5 41.5,6.5 41.5,20.5" />
    </svg>
  );
}

export default LinkIcon;
