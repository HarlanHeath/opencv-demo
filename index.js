const cv = require('opencv4nodejs');

let Trout = cv.imread('./images/Trout.jpg');
console.log(Trout);

const sift = new cv.SIFTDetector();

let kp = sift.detect(Trout);

let demo = cv.drawKeyPoints(Trout, kp)

cv.imwrite('./images/demo.jpg', demo);