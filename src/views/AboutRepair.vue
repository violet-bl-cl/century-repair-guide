<script lang="ts" setup>
import AppleIcon from '@/components/icons/AppleIcon.vue'
import SamsungIcon from '@/components/icons/SamsungIcon.vue'
import type { DeviceModel } from '@/types/repairGuide'
// const allDevices = ref<DeviceModel[]>([...appleDevice, ...samsungDevice]);
const props = defineProps<{
  devices: DeviceModel[]
}>()
</script>
<template>
  <div
    v-for="device in props.devices"
    class="mx-px-4 my-4 p-4 shadow-md"
    :key="device.repairGuide.deviceType.model"
  >
    <div class="flex justify-between">
      <div class="flex-start">
        <span class="font-bold">Model:</span> {{ device.repairGuide.deviceType.model }}
      </div>
      <div class="flex-end">
        <div v-if="device.repairGuide.deviceType.brand === 'Apple'"><AppleIcon /></div>
        <div v-else-if="device.repairGuide.deviceType.brand === 'Samsung'"><SamsungIcon /></div>
        <div v-else><OppoIcon /></div>
      </div>
    </div>
    <div>Region: {{ device.repairGuide.serviceCountry }}</div>
    <div>Client Price/Sale Price</div>
    <div>
      <div
        v-if="
          device.repairGuide.repairType.lcdScreen &&
          device.repairGuide.repairType.lcdScreen.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-sm">LCD Screen:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CO$ </span
          >{{ device.repairGuide.repairType.lcdScreen.costPrice }}
          <span class="text-gray-500 text-xs">NZD$ </span
          >{{ device.repairGuide.repairType.lcdScreen.retailPrice }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.oemScreen &&
          device.repairGuide.repairType.oemScreen.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-sm">OEM Screen:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CO$ </span
          >{{ device.repairGuide.repairType.oemScreen.costPrice }}
          <span class="text-gray-500 text-xs">NZD$ </span
          >{{ device.repairGuide.repairType.oemScreen.retailPrice }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.oledScreen &&
          device.repairGuide.repairType.oledScreen.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-sm">OLED Screen:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CO$ </span
          >{{ device.repairGuide.repairType.oledScreen.costPrice }}
          <span class="text-gray-500 text-xs">NZD$ </span
          >{{ device.repairGuide.repairType.oledScreen.retailPrice }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.battery &&
          device.repairGuide.repairType.battery.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-sm">Battery:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CO$ </span
          >{{ device.repairGuide.repairType.battery.costPrice }}
          <span class="text-gray-500 text-xs">NZD$ </span
          >{{ device.repairGuide.repairType.battery.retailPrice }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.chargingPort &&
          device.repairGuide.repairType.chargingPort.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-sm">Charging Port:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CO$ </span
          >{{ device.repairGuide.repairType.chargingPort.costPrice }}
          <span class="text-gray-500 text-xs">NZD$ </span
          >{{ device.repairGuide.repairType.chargingPort.retailPrice }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.frontCamera &&
          device.repairGuide.repairType.frontCamera.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-sm">Front Camera:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CO$ </span
          >{{ device.repairGuide.repairType.frontCamera.costPrice }}
          <span class="text-gray-500 text-xs">NZD$ </span
          >{{ device.repairGuide.repairType.frontCamera.retailPrice }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.backCamera &&
          device.repairGuide.repairType.backCamera.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-sm">Back Camera:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CO$ </span
          >{{ device.repairGuide.repairType.backCamera.costPrice }}
          <span class="text-gray-500 text-xs">NZD$ </span
          >{{ device.repairGuide.repairType.backCamera.retailPrice }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.backGlass &&
          device.repairGuide.repairType.backGlass.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-sm">Back Glass:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CO$ </span
          >{{ device.repairGuide.repairType.backGlass.costPrice }}
          <span class="text-gray-500 text-xs">NZD$ </span
          >{{ device.repairGuide.repairType.backGlass.retailPrice }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.motherboard &&
          device.repairGuide.repairType.motherboard.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-sm">Motherboard:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CO$ </span
          >{{ device.repairGuide.repairType.motherboard.costPrice }}
          <span class="text-gray-500 text-xs">NZD$ </span
          >{{ device.repairGuide.repairType.motherboard.retailPrice }}
        </div>
      </div>
      <!-- <div>Cost Price</div> -->
    </div>
  </div>
</template>

<style></style>
