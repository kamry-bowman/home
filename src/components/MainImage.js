import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateLeft = keyframes`
  50% {
    transform-origin: 13% 62%;
    transform: rotate(4deg);
  }
  100% {
    transform-origin: 13% 62%;
    transform: rotate(0deg);
  }
`;

const rotateRight = keyframes`
  50% {
    transform-origin: 23% 58%;
    transform: rotate(2deg);
  }
  100% {
    transform-origin: 23% 58%;
    transform: rotate(0deg);
  }
`;

const SVG = styled.svg`
  #leftArm {
    animation: ${rotateLeft} 0.25s linear alternate infinite;
  }
  #rightArm {
    animation: ${rotateRight} 0.25s 0.125s linear alternate infinite;
  }
`;

export default function MainImage () {
  return  (
  <SVG viewBox="0 0 250.033 227.226" id="svg8">
    <g id="layer1" transform="translate(-32.78 -30.762)">
      <rect
        id="rect1366"
        width="23.239"
        height="19.946"
        x="98.714"
        y="100.559"
        ry="5.656"
        fill="none"
        stroke="#00010a"
        strokeWidth="1.587"
        strokeLinecap="round"
      />
      <ellipse
        id="path1374"
        cx="117.607"
        cy="112.041"
        rx="2.572"
        ry="2.569"
        stroke="#00010a"
        strokeWidth=".324"
        strokeLinecap="round"
      />
      <path
        d="M121.842 56.495c-19.549 0-38.916 9.444-37.547 35.73.008.447 7.137 41.66 8.454 3.78l31.134-3.902c3.26-1.147 8.801-2.962 12.772-4.56 4.268-1.719 6.61-3.154 6.137-2.097-.35.785-2.25 2.94-4.61 4.864l14.885-1.865c-1.012 46.094 4.743 8.861 4.756 8.414 1.565-32.87-16.433-40.364-35.981-40.364z"
        id="path1396"
        fill="#cbcbcb"
        stroke="#00010a"
        strokeWidth="1.038"
        strokeLinecap="round"
      />
      <rect
        id="rect1366-3"
        width="23.239"
        height="19.946"
        x="129.493"
        y="101.614"
        ry="5.656"
        fill="none"
        stroke="#00010a"
        strokeWidth="1.587"
        strokeLinecap="round"
      />
      <ellipse
        id="path1374-5"
        cx="148.386"
        cy="112.796"
        rx="2.572"
        ry="2.569"
        stroke="#00010a"
        strokeWidth=".324"
        strokeLinecap="round"
      />
      <path
        d="M126.724 110.683c.602 2.95 1.203 5.9 3.534 8.886 2.332 2.987 6.392 6.011 6.43 7.923.038 1.91-3.948 2.71-7.294 3.309-3.347.599-6.054.998-7.558.513-1.504-.485-1.805-1.854-1.429-2.767.376-.913 1.43-1.37 2.557-1.312 1.128.057 2.331.628 3.534 1.198"
        id="path1445"
        fill="none"
        stroke="#000"
        strokeWidth=".972"
      />
      <path
        d="M153.728,106.73 c 0,3.028 0,6.056 0.704,8.912 0.704,2.856 2.16,5.634 0.946,9.196 -1.214,3.562 -5.073,7.955 -8.061,12.051 -2.988,4.097 -5.105,7.896 -6.621,11.194 -1.517,3.298 -2.468,6.2 -4.398,7.863 -1.93,1.663 -4.855,2.138 -8.56,2.316 -3.703,0.178 -8.185,0.06 -13.383,-3.087 -5.198,-3.147 -11.112,-9.321 -14.007,-12.438 -1.214621,-1.32714 -2.438544,-2.88873 -3.042748,-3.80952"
        id="path1461"
        fill="none"
        stroke="#000"
        strokeWidth="1.587"
      />
      <path
        d="M106.89 141.334c6.414-1.515 12.828-3.03 17.15-2.896 4.32.134 6.547 1.916 8.774 3.698"
        id="path1485"
        fill="none"
        stroke="#000"
        strokeWidth="1.587"
      />
      <path
        d="M109.302,141.334 c 0.712,-3.03 2.38682,-4.013 3.45382,-4.414 1.068,-0.4 4.65835,-0.33935 6.08235,1.88765"
        id="path1489"
        fill="none"
        stroke="#000"
        strokeWidth="1.353"
      />
      <path
        d="M122.15 115.021c1.525-1.749 3.05-3.497 4.251-3.678 1.202-.18 2.108 1.25 3.001 2.658"
        id="path1498"
        fill="none"
        stroke="#000"
        strokeWidth="1.587"
        strokeLinecap="round"
      />
      <path
        d="M141.3 110.035l10.085-.34"
        id="path1502"
        fill="none"
        stroke="#000"
        strokeWidth="1.587"
      />
      <path
        d="M111.046 110.262c2.002-1.549 4.004-3.097 5.533-3.098 1.53 0 2.587 1.55 3.645 3.098"
        id="path1506"
        fill="none"
        stroke="#000"
        strokeWidth="1.587"
      />
      <path
        d="M91.618 121.319c-.908-4.329-1.816-8.657-3.445-10.624-1.629-1.968-3.98-1.574-5.582.098-1.603 1.672-2.457 4.623-2.698 7.968-.24 3.345.134 7.082 1.042 9.673.908 2.59 2.35 4.033 3.9 5.017 1.549.984 3.204 1.508 4.631 1.355 1.427-.153 2.687-1.027 3.3-2.11.615-1.081.615-2.393-.053 2.656-.667 5.05-2.003 16.461-3.338 27.872"
        id="path1511"
        fill="none"
        stroke="#000"
        strokeWidth="1.759"
      />
      <rect
        id="rect1519"
        width="14.396"
        height="167.14"
        x="246.394"
        y="31.224"
        ry="5.667"
        fillRule="evenodd"
        stroke="#00010a"
        strokeWidth=".925"
        strokeLinecap="square"
      />
      <path
        d="M248.38 42.275c-4.23 12.841-8.46 25.683-9.82 46.684-1.36 21.001.15 50.159 3.143 68.242 2.993 18.084 7.468 25.091 11.943 32.099"
        id="path1523"
        fill="none"
        stroke="#000"
        strokeWidth="1.587"
      />
      <path
        d="M167.475 229.164c1.738 9.367 17.3 11.18 24.929 12.162 7.63.982 7.327 1.133 8.008-8.32.68-9.452 2.34-28.469 3.1-37.703.76-9.233.6-8.594-2.271-8.518-2.872.076-8.46-.377-10.801-.604-2.342-.227-1.435-.227-7.024 8.231-5.588 8.458-17.678 25.384-15.94 34.752z"
        id="path1605"
        fill="none"
        stroke="#000"
        strokeWidth="1.587"
      />
      <path
        d="M174.727 223.725c1.364 8.042 13.58 9.598 19.57 10.441 5.989.843 5.752.973 6.286-7.142.534-8.116 1.837-24.442 2.433-32.367.596-7.925.472-7.38-1.783-7.316-2.254.065-6.64-.324-8.478-.518-1.839-.195-1.127-.195-5.514 7.067-4.387 7.261-13.878 21.793-12.514 29.835z"
        id="path1605-3"
        fill="none"
        stroke="#000"
        strokeWidth="1.303"
      />
      <path
        d="M189.56 239.93c-12.935-2.016-18.506-4.622-20.602-9.636-1.46-3.495-.387-8.132 3.8-16.426 3.037-6.013 16.1-26.527 16.893-26.527.24 0 .038.662-.449 1.473-10.568 17.602-13.175 22.643-14.606 28.24-1.472 5.754-1.041 8.58 1.756 11.52 3.127 3.287 10.53 5.808 19.51 6.642l3.318.308-.216 2.245c-.329 3.42-.73 3.512-9.404 2.16z"
        id="path1640"
        stroke="#00010a"
        strokeWidth="2.71935324"
        strokeLinecap="round"
      />
      <path
        d="M89.375 163.224c-8.64-3.754-17.28-7.509-26.284-3.947-9.003 3.562-18.37 14.44-23.205 26.375-4.835 11.936-5.137 24.928-5.44 37.544-.301 12.616-.603 24.853 19.189 29.914 19.792 5.062 59.677 2.947 99.865 2.04 40.188-.906 80.678-.604 121.168-.302"
        id="path1656"
        fill="none"
        stroke="#000"
        strokeWidth="3.175"
      />
      <path
        d="M274.668 254.848c3.777-11.634 7.554-23.267 7.328-27.573-.227-4.306-4.457-1.284-8.31 4.533-3.853 5.817-7.327 14.428-10.802 23.04"
        id="path1660"
        fill="none"
        stroke="#000"
        strokeWidth="1.587"
      />
      <path
        d="M262.884 254.848c3.777-11.634 7.554-23.267 7.327-27.573-.226-4.306-4.456-1.284-8.31 4.533-3.852 5.817-7.327 14.428-10.802 23.04"
        id="path1660-4"
        fill="none"
        stroke="#000"
        strokeWidth="1.587"
      />
      <g id="rightArm" fill="none" stroke="#000" strokeWidth="1.587">
        <path
          id="path1565"
          d="M129.176 213.602c9.216-6.345 18.432-12.69 23.795-16.014 5.364-3.324 6.875-3.626 7.895-3.446 1.02.18 1.699 1.028 2.605 2.841a29.52 29.52 0 0 1 2.72 8.31c.604 3.626.604 8.007.075 10.273-.528 2.267-1.586 2.418-2.417 1.813-.831-.604-1.435-1.964-1.964-4.003-.529-2.04-.982-4.76-1.51-6.723-.53-1.964-1.134-3.173-1.738-4.382"
        />
        <path
          id="path1686"
          d="M141.413 205.217c-18.507 12.918-37.015 25.835-45.688 18.836-8.673-6.998-7.512-33.914-6.35-60.829"
        />
      </g>
      <g id="leftArm" fill="none" stroke="#000" strokeWidth="1.587">
        <path
          id="path1565-1"
          d="M128.39 183.697c9.216-6.346 18.432-12.691 23.795-16.015 5.364-3.324 6.875-3.626 7.895-3.445 1.02.18 1.699 1.028 2.605 2.841a29.52 29.52 0 0 1 2.72 8.31c.604 3.625.604 8.007.075 10.273-.528 2.266-1.586 2.417-2.417 1.813-.831-.605-1.435-1.964-1.964-4.004-.529-2.04-.982-4.759-1.511-6.723-.529-1.964-1.133-3.173-1.737-4.381"
        />
        <path
          id="path1686-9"
          d="M128.39 183.697c-24.702 14.73-49.404 29.461-59.608 27.484-10.204-1.977-5.91-20.661-1.616-39.345"
        />
      </g>
      <path
        d="M34.9 221.76c19.943 2.116 39.886 4.231 49.782 5.364 9.896 1.133 9.745 1.284 8.988 3.933-.757 2.648-2.114 7.776 24.025 12.158 26.14 4.381 79.77 8.007 133.404 11.633"
        id="path1716"
        fill="none"
        stroke="#000"
        strokeWidth="2.117"
      />
      <path
        d="M71.262 254.368c-11.255-.899-18.308-2.357-23.865-4.932-8.403-3.896-11.537-9.518-11.662-20.923-.03-2.658.064-4.95.207-5.095.333-.336 52.97 5.256 55.535 5.9.847.213.953.55.91 2.888-.055 2.96.682 4.12 3.927 6.191 8.125 5.185 38.644 9.498 95.738 13.532 5.734.405 11.445.887 12.691 1.07 1.247.184-11.705.483-28.78.665-17.077.181-36.657.516-43.513.743-15.265.506-54.677.481-61.188-.039z"
        id="path1720"
        stroke="#00010a"
        strokeWidth="3.62580432"
        strokeLinecap="round"
      />
      <path
        d="M253.014 253.102c0-.749 4.48-10.895 6.837-15.481 3.352-6.526 7.737-11.871 9.066-11.05.975.602-.466 7.159-4.254 19.346l-2.357 7.585-4.646.006c-2.555.004-4.646-.18-4.646-.406z"
        id="path1724"
        stroke="#00010a"
        strokeWidth="3.62580432"
        strokeLinecap="round"
      />
      <path
        d="M264.799 253.102c0-.749 4.48-10.895 6.836-15.481 3.352-6.526 7.738-11.871 9.066-11.05.976.602-.466 7.159-4.253 19.346l-2.358 7.585-4.646.006c-2.555.004-4.645-.18-4.645-.406z"
        id="path1726"
        stroke="#00010a"
        strokeWidth="3.62580432"
        strokeLinecap="round"
      />
      <path
        d="M206.696 253.153c0-.263.023-.27.652-.216.358.03 1.875.147 3.37.258l2.72.202-3.37.014-3.372.015z"
        id="path1730"
        stroke="#00010a"
        strokeWidth=".90645108"
        strokeLinecap="round"
      />
      <g id="tie" transform="translate(34 32)">
        <path
          id="path5253"
          d="m 37.31,126.611 c 0,0 1.126,-0.279 10.35,6.258 4.116,2.918 -2.649,9.194 8.906,8.666 5.29,-0.242 6.258,-12.276 3.61,-12.276 -2.647,0 -22.867,-2.648 -22.867,-2.648 z"
        />
        <path
          id="path5255"
          d="m 55.38,137.402 c 0,0 -20.816,24.8 -16.697,28.918 2.735,0.448 -2.531,14.51 2.735,10.076 7.756,-6.528 9.629,-12.276 13.961,-38.994 z"
          stroke="#000000"
        />
      </g>
    </g>
  </SVG>
)
};
