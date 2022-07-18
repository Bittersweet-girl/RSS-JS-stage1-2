import * as noUiSlider from 'nouislider';
export class Slider {
    render() {
        const slider = document.getElementById('#slider') as HTMLElement;

        noUiSlider.create(slider, {
            start: [120, 200],
            connect: true,
            step: 10,
            tooltips: true,
            range: {
                min: 100,
                max: 380,
            },
        });
    }
}
