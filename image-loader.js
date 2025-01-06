// Docs: https://support.imageengine.io/hc/en-us/articles/360058880672-Directives
export default function imageengineLoader({ src, width, quality }) {
  const compression = 100 - (quality || 50);
  const params = [`w_${width}`, `cmpr_${compression}`];

  return `https://v2e5b7n4.dev.cdn.imgeng.in${src}?imgeng=/${params.join("/")}`;
}
