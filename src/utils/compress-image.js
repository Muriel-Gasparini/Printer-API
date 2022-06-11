
const compress_images = require("compress-images");

exports.compressImages = (onCompressed, onError) => {
  compress_images(
    "public/screenshot/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}",
    "public/minified/",
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
    },
    function (err, completed) {
      if (err) {
        return onError && onError()
      }
      if (completed === true) {
        onCompressed && onCompressed()
      }
    }
  );
}