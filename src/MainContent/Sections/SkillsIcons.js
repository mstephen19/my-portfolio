import React from 'react';
import DevIcon from 'devicon-react-svg';

export default function SkillsIcons({ ...rootDOMAttributes }) {
  return (
    <div
      {...rootDOMAttributes}
      className='skillsIcons'
      style={{ marginTop: '5%' }}
    >
      <DevIcon icon='html5' style={{ width: '50px' }} />
      <DevIcon icon='css3' style={{ width: '50px' }} />
      <svg viewBox='0 0 128 128' style={{ width: '50px' }}>
        <path
          fill='black'
          d='M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0'
        ></path>
      </svg>
      <DevIcon icon='jquery' style={{ width: '50px' }} />
      <DevIcon
        icon='javascript'
        logoStyle='original'
        style={{ width: '50px' }}
      />
      <DevIcon icon='react' style={{ width: '50px' }} />
      <svg viewBox='0 0 128 128' style={{ width: '50px' }}>
        <path d='M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z'></path>
      </svg>
      <DevIcon icon='nodejs' style={{ width: '50px' }} />
      <svg viewBox='0 0 128 128' style={{ width: '50px' }}>
        <path
          fill='black'
          d='M124.129 63.02c0-7.692-5.828-14.165-13.652-16.012L128 .113H41.16l17.563 47.043c-7.578 1.996-13.164 8.356-13.164 15.903 0 5.546 3.058 10.464 7.703 13.496-1.832 2.367-3.953 4.55-6.356 6.62-4.523 3.848-9.539 6.805-14.957 8.766-4.89-2.996-7.008-8.285-5.094-13.02 7.457-2.07 12.88-8.394 12.88-15.827 0-9.133-8.192-16.532-18.22-16.532-10.066 0-18.253 7.434-18.253 16.57 0 4.513 2.035 8.653 5.297 11.61-.286.52-.57 1.035-.856 1.59C4.973 81.438 1.875 87.207.691 93.68c-2.363 12.941 1.508 23.336 10.84 29.215 5.258 3.293 11.047 4.957 17.282 4.957 10.714 0 21.597-4.883 32.109-9.618 7.5-3.363 15.242-6.879 22.863-8.578 2.813-.629 5.746-1 8.844-1.406 6.273-.813 12.754-1.664 18.582-4.734 6.805-3.586 11.45-9.579 12.797-16.457 1.015-5.29 0-10.614-2.61-15.274a15.35 15.35 0 002.73-8.765zm-7.945 0c0 5.14-4.606 9.32-10.27 9.32s-10.27-4.18-10.27-9.32c0-1.665.489-3.254 1.344-4.622.325-.52.735-1.035 1.14-1.48a8.517 8.517 0 011.427-1.219l.043-.039c.324-.222.691-.445 1.058-.664 0 0 .04 0 .04-.039.163-.074.327-.184.492-.258.039 0 .078-.039.12-.039.165-.07.368-.144.57-.219a8.78 8.78 0 00.571-.222c.04 0 .082-.04.121-.04.164-.034.328-.109.489-.144.043 0 .125-.039.164-.039.203-.035.367-.074.57-.11h.043l.61-.113c.042 0 .12 0 .163-.035.164 0 .325-.039.489-.039h.203c.203 0 .41-.035.652-.035h.531c.16 0 .286 0 .446.035h.082c.328.04.652.074.98.149 4.645.886 8.192 4.66 8.192 9.172zM52.527 7.508h64.102l-14.711 39.387c-.61.113-1.223.296-1.832.48l-15.484-28.66L69.074 47.19c-.613-.183-1.265-.296-1.914-.406zM81.664 59.8c-.773-3.477-2.73-6.582-5.5-8.875l8.438-15.457 8.515 15.789c-2.527 2.293-4.36 5.215-5.094 8.543zM61.25 53.96c.203-.04.367-.074.57-.113h.121c.164-.035.329-.035.489-.075h.164c.164 0 .285-.035.449-.035h1.59c.16 0 .285.035.406.035.082 0 .121 0 .203.04.164.035.285.035.45.074.038 0 .081 0 .163.035.204.039.407.074.57.113h.04c.164.035.328.07.488.145.043 0 .082.039.164.039.121.035.285.074.406.148.043 0 .082.035.125.035.16.075.325.114.489.188h.039c.203.07.367.144.531.258h.04c.163.074.327.183.491.257.04 0 .04.04.078.04.164.07.286.183.45.257l.043.035c.488.333.937.704 1.382 1.075l.043.035c.407.406.813.851 1.141 1.332 1.059 1.48 1.672 3.219 1.672 5.105 0 5.141-4.606 9.317-10.27 9.317s-10.27-4.176-10.27-9.317c-.042-4.328 3.259-7.988 7.743-9.023zm-40.102-.262c5.665 0 10.27 4.18 10.27 9.32 0 5.141-4.605 9.32-10.27 9.32-5.664 0-10.27-4.179-10.27-9.32 0-5.14 4.606-9.32 10.27-9.32zm94.79 32.067c-.895 4.73-4.118 8.875-8.844 11.351-4.442 2.332-9.903 3.07-15.649 3.809-3.136.406-6.437.851-9.617 1.554-8.476 1.887-16.625 5.586-24.531 9.133-10.106 4.551-19.645 8.84-28.484 8.84-4.606 0-8.723-1.183-12.633-3.66-8.965-5.621-8.52-16.16-7.457-21.93.976-5.402 3.707-10.468 6.316-15.312.16-.297.285-.555.445-.852.899.297 1.836.52 2.813.668-1.547 7.84 2.851 15.938 11.41 19.934l1.55.738 1.669-.555c7.133-2.293 13.734-6.027 19.562-11.02 3.301-2.812 6.114-5.843 8.477-9.136.937.149 1.875.188 2.812.188 8.477 0 15.606-5.29 17.645-12.391h6.844c2.039 7.137 9.171 12.39 17.648 12.39 3.383 0 6.52-.85 9.207-2.292 1.063 2.773 1.387 5.656.817 8.543zm0 0'
        ></path>
      </svg>
      <svg viewBox='0 0 128 128' style={{ width: '50px' }}>
        <g fill='black'>
          <path d='M101.84 41.72V86l-37.66 22.32-.34.31v16.57l.34.32 53-30.64V33.12l-.5-.12-15 8.36.08.36'></path>
          <path d='M26.4 86.4l37.78 21.92v17.2l-53.4-30.76V33.24l.55-.08 14.91 8.67.16.5V86.4'></path>
          <path d='M26.4 42.32l-15.62-9.08L64.06 2.48l53.16 30.64-15.38 8.6-37.78-21.56L26.4 42.32M30.06 84V65.9l.41.24L45 74.59l.12.07v17.53L30.06 84M83.27 92.6V75l.1-.05 14.27-8.35.44-.26v17.5L83.27 92.6M64.85 103.46l-.41-.42V86l.51-.18 14.27-8.32.44-.25V94.7l-14.8 8.76'></path>
          <path d='M49.8 95.23V77.17l.41.23 14.51 8.45.12 17.61-15.04-8.23M63.29 22.94L48.48 31.7l15.05 8.76 14.8-8.64-15.04-8.88M30.06 60.36V42.55h.41L45 51l.12.33v17.26l-15.06-8.23'></path>
          <path d='M44.86 33.8l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88M83.27 69V51.7l.1-.41L97.64 43l.44.1v17.11L83.27 69'></path>
          <path d='M83 34.21L68.22 43l15.05 8.76 14.8-8.64L83 34.21M64.85 79.85l-.41-.42V62.79l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76'></path>
          <path d='M49.8 71.63V53.82h.41l14.51 8.45.12.33v17.25L49.8 71.63'></path>
          <path d='M64.6 45.06l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88'></path>
        </g>
      </svg>
      <DevIcon icon='mysql' style={{ width: '50px' }} />
      <DevIcon icon='mongodb' style={{ width: '50px' }} />
      <DevIcon icon='git' style={{ width: '50px' }} />
      <DevIcon icon='github' style={{ width: '50px' }} />
      <svg viewBox='0 0 128 128' style={{ width: '50px' }}>
        <path
          fill='black'
          d='M126.615 72.31l-7.034-21.646-13.94-42.902c-.54-1.662-2.44-2.07-3.654-1.23-.4.276-.724.853-.902 1.398L87.144 51H40.856L31.62 22.41 26.917 7.847a2.748 2.748 0 00-.372-.767c-.078-.104-.18-.194-.27-.28-.937-.89-2.465-.876-3.36.072a2.336 2.336 0 00-.556.894l-13.94 42.9-2.946 9.068L1.385 72.31a4.78 4.78 0 00.85 4.496c.26.317.55.613.89.86L64 121.895l60.874-44.227a4.785 4.785 0 001.74-5.357zm-7.034-21.647z'
        ></path>
      </svg>
      <DevIcon icon='npm' style={{ width: '50px' }} />
    </div>
  );
}