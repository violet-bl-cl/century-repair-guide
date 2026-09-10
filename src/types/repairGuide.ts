import type { DeviceGroup } from './deviceGroup'

type DeviceType = {
  model: string
  year?: number
  brand: string
  group: DeviceGroup
}

export type RepairDescription = {
  quantity?: number
  retailPrice: number
  costPrice?: number
  partId?: string
  isPartAvailable: boolean
  isOriginal: boolean
  description: string
}

type RepairType = {
  lcdScreen?: RepairDescription
  oemScreen?: RepairDescription
  oledScreen?: RepairDescription
  battery: RepairDescription
  chargingPort: RepairDescription
  frontCamera: RepairDescription
  backCamera: RepairDescription
  motherboard: RepairDescription
  backGlass: RepairDescription
}

export type DeviceModel = {
  repairGuide: {
    serviceCountry: string
    deviceType: DeviceType
    repairType: RepairType
  }
}
