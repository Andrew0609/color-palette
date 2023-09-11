declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes>;
  export default content;
}

declare module "*.woff2" {
  const content: any;
  export default content;
}
