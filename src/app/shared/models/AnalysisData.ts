
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
  header?: Rectangle
}

export interface CalculatedPos {
  width: number,
  height: number,
  top: number,
  left: number,
  visible: boolean
}

export interface CalculatedImage{
    allVisible: Boolean
    linesVisible: Boolean
    blocksVisible: Boolean
    wordsVisible: Boolean
    sidenotesVisible: Boolean
    footnoteVisible: Boolean
    headerVisible: Boolean
    paragraphsVisible: Boolean
    paragraphs: CalculatedPos[]
    lines: CalculatedPos[]
    blocks: CalculatedPos[]
    words: CalculatedPos[]
    sidenotes: CalculatedPos[]
    footnote ?: CalculatedPos
    header?: CalculatedPos
  }


export interface CalculatedImagesCache {
  [key: string]: CalculatedImage
}
