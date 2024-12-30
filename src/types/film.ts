interface item {
  id: string
  name: string
  slug: string
}

export interface FilmItem {
  category: item[]
  country: item[]
  episode_current: string
  lang: string
  modified: { time: string }
  name: string
  origin_name: string
  quality: string
  slug: string
  sub_docquyen: boolean
  thumb_url: string
  time: string
  type: string
  year: number
  _id: string
}
