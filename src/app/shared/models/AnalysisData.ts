
export interface Rectangle{
  x1: number
  x2: number
  y1: number
  y2: number
  displayed?: boolean
}

export interface AnalysisData{
  lines: Rectangle[]
  blocks: Rectangle[]
  paragraphs: Rectangle[]
  footnote?: Rectangle
  sidenotes: Rectangle[]
  words:Rectangle[]
}

export interface CalculatedPos {
  width: number,
  height: number,
  top: number,
  left: number,
  visible: boolean
}

export interface CalculatedImage{
    paragraphs: CalculatedPos[]
    lines: CalculatedPos[]
    blocks: CalculatedPos[]
    words: CalculatedPos[]
    footnote ?: CalculatedPos
    sidenotes: CalculatedPos[]
  }


export interface CalculatedImagesCache {
  [key: string]: CalculatedImage
}
