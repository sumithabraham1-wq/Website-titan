
#include <opencv2/opencv.hpp>
using namespace cv;

int main(int argc, char** argv) {
    if (argc != 3) return -1;

    Mat img = imread(argv[1]);
    if (img.empty()) return -1;

    Mat gray;
    cvtColor(img, gray, COLOR_BGR2GRAY);
    imwrite(argv[2], gray);
    return 0;
}
