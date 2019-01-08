import { AttributeMarker } from '@angular/core/src/render3';
import { AnalysisData } from './shared/models/AnalysisData';

export interface Rectangle{

    x1: number,
    y1: number,
    x2: number,
    y2: number
}

export interface ProcessedImage extends AnalysisData{
    path: string
    lines: Rectangle[]
    blocks: Rectangle[]
    footnote?: Rectangle
}
