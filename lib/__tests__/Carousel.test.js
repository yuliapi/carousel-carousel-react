import Carousel from '../components/Carousel';

describe('Carousel-test', () => {
       it('get array of objects', () => {
        const images = {"image1-small.jpg": "src1/small", "image1-large.jpg": "src1/large", "image2-some-text-small.jpg": "src2/small", "image2-some-text-large.jpg": "src2/large"};
        const output = [
            {
                "alt": "image1",
                "small": "src1/small",
                "large": "src1/large"
            },
            {
                "alt": "image2-some-text",
                "small": "src2/small",
                "large": "src2/large"
            }
        ];
        expect(Array.isArray(Carousel.prepareImages(images))).toBe(true);
    });

    it('should extract image prefix', () => {
        const large = "seashore-newengland-large.jpg";
        const expected = ["seashore-newengland-large.jpg", "seashore-newengland", "large", "jpg"];
        expect(Carousel.extractPrefix(large)).toEqual(expect.arrayContaining(expected));
    });
});
