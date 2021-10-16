import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideShowPosterComponent } from './slide-show-poster/slide-show-poster.component';
import { SlidesshowParesComponent } from './slidesshow-pares/slidesshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideShowPosterComponent,
    SlidesshowParesComponent,
    DetalleComponent,
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideShowPosterComponent,
    SlidesshowParesComponent,
    DetalleComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
