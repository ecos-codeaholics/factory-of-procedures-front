import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'factory-help-slider',
    templateUrl: 'src/home/templates/factory-help-slider.component.html',
})

export class FactoryHelpSliderComponent implements OnInit {

    title = 'Crea tu trámite en 5 pasos:';

    public interval: number = 5000;
    public noWrapSlides: boolean = false;
    public slides: Array<any> = [];

    constructor() {
    }

    public setSliderContent() {

        this.slides.push({
            step: 1,
            icon: 'assets/image/slide-create.png',
            text: 'Crea una cuenta de usuario',
        });

        this.slides.push({
            step: 2,
            icon: 'assets/image/slide-login.png',
            text: 'Ingresa a la plataforma'
        });

        this.slides.push({
            step: 3,
            icon: 'assets/image/slide-select.png',
            text: 'Selecciona el trámite de tu alcaldía'
        });

        this.slides.push({
            step: 4,
            icon: 'assets/image/slide-fill.png',
            text: 'Diligencia el formulario'
        });

        this.slides.push({
            step: 5,
            icon: 'assets/image/slide-upload.png',
            text: 'Sube la documentación requerida'
        })
    }

    ngOnInit() {
        return this.setSliderContent();
    }
}
