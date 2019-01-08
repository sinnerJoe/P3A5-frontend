
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
  footnote?: Rectangle
}
