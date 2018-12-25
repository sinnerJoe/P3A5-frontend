
export interface Rectangle{

    x1: number,
    y1: number,
    x2: number,
    y2: number
}

export interface ProcessedImage{
    path: string
    lines: {
        [key: string]: Rectangle
    }
    blocks: {
        [key: string]: Rectangle
    }
}
