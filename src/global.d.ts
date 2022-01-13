/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.png';
declare module '*.jpg';
declare module '*.ttf';

declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}
