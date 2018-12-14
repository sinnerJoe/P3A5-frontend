
export interface Rectangle{
    
    x1: number,
    y1: number,
    x2: number,
    y2: number
}

export interface ProcessedImage{
    path: string
    paragraphs: {
        [key: string]: Rectangle
    }
    lines: {
        [key: string]: Rectangle
    }
    columns: {
        [key: string]: Rectangle
    }
}