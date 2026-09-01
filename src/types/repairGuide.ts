type DeviceType = {
    model: string,
    year?: number,
    brand: string,
}

export type RepairDescription = {
    retailPrice: number,
    costPrice?: number,
    isPartAvailable: boolean,
    isOriginal:boolean,
    description: string,
}

type RepairType = {
    lcdScreen?: RepairDescription,
    oemScreen?:RepairDescription,
    oledScreen?:RepairDescription,
    battery: RepairDescription,
    chargingPort: RepairDescription,
    frontCamera: RepairDescription,
    backCamera:RepairDescription,
    motherboard: RepairDescription,
    backGlass: RepairDescription,
}

export type DeviceModel = {
    repairGuide:{
        serviceCountry: string,
        deviceType: DeviceType,
        repairType: RepairType,
    }
}