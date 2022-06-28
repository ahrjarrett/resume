export type Maybe<A> = A | undefined

export type D = `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `0`
export type _0 = `0`
export type No0 = Exclude<D, _0>

export type yyyy = `19${D}${D}` | `20${D}${D}`
export type dd = `0${D}` | `1${D}` | `2${D}` | `30` | `31`
export type mm = `${_0}${No0}` | `10` | `11` | `12`
export type Date_ = {
  dd: dd
  mm: mm
  yyyy: yyyy
}
export type Duration = {
  start: Date_
  end: Date_ | `Present`
}
export type City = string
export type State = string
export type LocationKind = `Remote` | `On-site`

export type NormalizedMonth =
  | `Jan`
  | `Feb`
  | `Mar`
  | `Apr`
  | `May`
  | `June`
  | `July`
  | `Aug`
  | `Sept`
  | `Oct`
  | `Nov`
  | `Dec`

export type DateSeparator = `-`
export type NormalizedStartDate = `${NormalizedMonth} ${yyyy}`
export type NormalizedEndDate = NormalizedStartDate | `Present`
export type NormalizedLocation = `${City}, ${State} (${LocationKind})`

/** DOMAIN TYPES */
export type User = {
  name: string
  social: {
    github: string
  }
}

export type Gig = {
  title: string
  id: string
  subtitle: string
  duration: Duration
  location: Location
  bullets: `gig_${string}_bullet_${number}`[]
}

export type Gigs = {
  order: string[]
  entities: Record<string, Gig>
}
