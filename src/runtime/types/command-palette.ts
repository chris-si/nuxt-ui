import Fuse from 'fuse.js'
import type { Avatar } from './avatar'

export interface Command {
  id: string | number
  prefix?: string
  suffix?: string
  icon?: string
  iconClass?: string
  avatar?: Avatar
  chip?: string
  disabled?: boolean
  shortcuts?: string[]
  group?: string
  score?: number
  matches?: Fuse.FuseResultMatch[]
  [key: string]: any
}

export interface Group {
  key: string
  active?: string
  inactive?: string
  commands?: Command[]
  search?: Function
  filter?: Function
  static?: Boolean
  [key: string]: any
}
