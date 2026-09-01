import { createRepairDetail } from "@/constants/repairDetail";
import type { DeviceModel } from "@/types/repairGuide";

export const appleDevice:DeviceModel[] = [
 // iPhone 6/6s
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 6/6s", year: 2014, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(75),
        battery: createRepairDetail(60),
        chargingPort: createRepairDetail(60),
        frontCamera: createRepairDetail(60),
        backCamera: createRepairDetail(80),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone plus/6s plus
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 6 Plus / 6s Plus", year: 2014, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(90),
        battery: createRepairDetail(60),
        chargingPort: createRepairDetail(60),
        frontCamera: createRepairDetail(60),
        backCamera: createRepairDetail(80),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone 7
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 7", year: 2016, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(80),
        battery: createRepairDetail(60),
        chargingPort: createRepairDetail(75),
        frontCamera: createRepairDetail(60),
        backCamera: createRepairDetail(90),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone 7 Plus
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 7 Plus", year: 2016, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(90),
        battery: createRepairDetail(65),
        chargingPort: createRepairDetail(75),
        frontCamera: createRepairDetail(60),
        backCamera: createRepairDetail(125),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone 8
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 8", year: 2017, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(90),
        battery: createRepairDetail(65),
        chargingPort: createRepairDetail(75),
        frontCamera: createRepairDetail(80),
        backCamera: createRepairDetail(100),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone 8 Plus
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 8 Plus", year: 2017, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(90),
        battery: createRepairDetail(65),
        chargingPort: createRepairDetail(75),
        frontCamera: createRepairDetail(80),
        backCamera: createRepairDetail(160),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone X
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone X", year: 2017, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(99),
        battery: createRepairDetail(100),
        chargingPort: createRepairDetail(75),
        frontCamera: createRepairDetail(75),
        backCamera: createRepairDetail(110),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone XS
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone XS", year: 2018, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(99),
        battery: createRepairDetail(100),
        chargingPort: createRepairDetail(75),
        frontCamera: createRepairDetail(75),
        backCamera: createRepairDetail(150),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone XR
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone XR", year: 2018, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(99),
        battery: createRepairDetail(100),
        chargingPort: createRepairDetail(85),
        frontCamera: createRepairDetail(80),
        backCamera: createRepairDetail(125),
        motherboard: createRepairDetail(180),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone XS Max
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone XS Max", year: 2018, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(120),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(85),
        frontCamera: createRepairDetail(80),
        backCamera: createRepairDetail(150),
        motherboard: createRepairDetail(180),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone 11
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 11", year: 2019, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(99),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(85),
        frontCamera: createRepairDetail(75),
        backCamera: createRepairDetail(150),
        motherboard: createRepairDetail(180),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone 11 Pro
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 11 Pro", year: 2019, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(100),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(85),
        backCamera: createRepairDetail(200),
        motherboard: createRepairDetail(180),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone 11 Pro Max
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 11 Pro Max", year: 2019, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(120),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(85),
        backCamera: createRepairDetail(200),
        motherboard: createRepairDetail(180),
        backGlass: createRepairDetail(0),
      },
    },
  },
  // iPhone 12
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 12", year: 2020, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(120),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(0),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(150),
        backGlass: createRepairDetail(150),
      },
    },
  },
  // iPhone 12 Pro
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 12 Pro", year: 2020, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(120),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(125),
        frontCamera: createRepairDetail(85),
        backCamera: createRepairDetail(150),
        motherboard: createRepairDetail(150),
        backGlass: createRepairDetail(150),
      },
    },
  },
  // iPhone 12 Mini
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 12 Mini", year: 2020, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(120),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(125),
        frontCamera: createRepairDetail(85),
        backCamera: createRepairDetail(200),
        motherboard: createRepairDetail(150),
        backGlass: createRepairDetail(150),
      },
    },
  },
  // iPhone 12 Pro Max
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 12 Pro Max", year: 2020, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(160),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(145),
        frontCamera: createRepairDetail(90),
        backCamera: createRepairDetail(200),
        motherboard: createRepairDetail(190),
        backGlass: createRepairDetail(150),
      },
    },
  },
  // iPhone 13 Mini
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 13 Mini", year: 2021, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(0),
        battery: createRepairDetail(0),
        chargingPort: createRepairDetail(125),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(160),
        backGlass: createRepairDetail(150),
      },
    },
  },
  // iPhone 13
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 13", year: 2021, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(120),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(125),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(160),
        backGlass: createRepairDetail(150),
      },
    },
  },
  // iPhone 13 Pro
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 13 Pro", year: 2021, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(150),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(125),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(160),
        backGlass: createRepairDetail(150),
      },
    },
  },
  // iPhone 13 Pro Max
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 13 Pro Max", year: 2021, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(190, "Alternative option available: 390"),
        oledScreen: createRepairDetail(390),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(125),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(200),
        motherboard: createRepairDetail(160),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 14
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 14", year: 2022, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(140),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(190),
        backGlass: createRepairDetail(150),
      },
    },
  },
  // iPhone 14 Plus
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 14 Plus", year: 2022, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(160),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(190),
        backGlass: createRepairDetail(160),
      },
    },
  },
  // iPhone 14 Pro
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 14 Pro", year: 2022, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(180),
        battery: createRepairDetail(120),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(200),
        backGlass: createRepairDetail(160),
      },
    },
  },
  // iPhone 14 Pro Max
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 14 Pro Max", year: 2022, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(190),
        battery: createRepairDetail(140),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(280),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 15
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 15", year: 2023, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(160),
        battery: createRepairDetail(140),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(280),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 15 Plus
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 15 Plus", year: 2023, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(160, "Alternative option available: 260"),
        oledScreen: createRepairDetail(260),
        battery: createRepairDetail(140),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(280),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 15 Pro
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 15 Pro", year: 2023, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(180, "Alternative option available: 750"),
        oledScreen:createRepairDetail(750),
        battery: createRepairDetail(140),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(280),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 15 Pro Max
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 15 Pro Max", year: 2023, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(220),
        battery: createRepairDetail(140),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(280),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 16E
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 16E", year: 2024, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(150),
        battery: createRepairDetail(140),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 16
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 16", year: 2024, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(180, "Alternative option available: 250"),
        oledScreen:createRepairDetail(250),
        battery: createRepairDetail(140),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 16 Plus
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 16 Plus", year: 2024, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(220, "Alternative option available: 280"),
        oledScreen:createRepairDetail(280),
        battery: createRepairDetail(140),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 16 Pro
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 16 Pro", year: 2024, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(220, "Alternative option available: 280"),
        oledScreen:createRepairDetail(280),
        battery: createRepairDetail(140),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 16 Pro Max
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 16 Pro Max", year: 2024, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(260),
        battery: createRepairDetail(140),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 17
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 17", year: 2025, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(0),
        battery: createRepairDetail(0),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 17 Pro
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 17 Pro", year: 2025, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(0),
        battery: createRepairDetail(0),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 17 Plus
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 17 Plus", year: 2025, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(0),
        battery: createRepairDetail(0),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 17 Pro Max
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 17 Pro Max", year: 2025, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(0),
        battery: createRepairDetail(0),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(180),
      },
    },
  },
  // iPhone 17 Air
  {
    repairGuide: {
      serviceCountry: "nz",
      deviceType: { model: "iPhone 17 Air", year: 2025, brand: "Apple" },
      repairType: {
        lcdScreen: createRepairDetail(0),
        battery: createRepairDetail(0),
        chargingPort: createRepairDetail(150),
        frontCamera: createRepairDetail(0),
        backCamera: createRepairDetail(0),
        motherboard: createRepairDetail(0),
        backGlass: createRepairDetail(180),
      },
    },
  },
]