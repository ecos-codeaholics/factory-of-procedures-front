import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'factory-help-slider',
    templateUrl: 'src/home/templates/factory-help-slider.component.html',
})

export class FactoryHelpSliderComponent implements OnInit {

    title = 'Crea tu trámite en 5 pasos';

    public interval: number = 5000;
    public noWrapSlides: boolean = false;
    public slides: Array<any> = [];

    constructor() {
    }

    public setSliderContent() {

        this.slides.push({
            step: 1,
            icon: 'http://placehold.it/555x290',
            text: 'Crea una cuenta de usuario',
        });

        this.slides.push({
            step: 2,
            icon: 'http://placehold.it/555x290/c3c3c9',
            text: 'Ingresa a la plataforma'
        });

        this.slides.push({
            step: 3,
            icon: 'http://placehold.it/555x290/f5c349',
            text: 'Selecciona el trámite de tu alcaldía'
        });

        this.slides.push({
            step: 4,
            icon: 'http://placehold.it/555x290/c3f5d2',
            text: 'Diligencia el formulario'
        });

        this.slides.push({
            step: 5,
            icon: 'http://placehold.it/555x290/c3f5d2',
            text: 'Sube la documentacion requerida'
        })
    }

    ngOnInit() {
        return this.setSliderContent();
    }
}
