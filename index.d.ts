declare module "mini-css-extract-plugin";

declare module "*.scss" {
    const content: {[className: string]: string};
    export default content;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.mp3" {
    var content: string;
    export default content;
}
declare module "*.mp4" {
    var content: string;
    export default content;
}