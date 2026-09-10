<script lang="ts" setup>
import AppleIcon from '@/components/icons/AppleIcon.vue'
import SamsungIcon from '@/components/icons/SamsungIcon.vue'
import { DeviceGroup } from '@/types/deviceGroup'
import type { DeviceModel } from '@/types/repairGuide'
// const allDevices = ref<DeviceModel[]>([...appleDevice, ...samsungDevice]);
const props = defineProps<{
  devices: DeviceModel[]
}>()

const date = new Date()
</script>
<template>
  <div
    v-for="device in props.devices"
    class="mx-px-4 my-4 p-4 shadow-md"
    :key="device.repairGuide.deviceType.model"
  >
    <div>Device Information</div>
    <div class="flex justify-between">
      <div class="flex-start">
        <div>
          <span class="text-xs">Model: </span
          ><span class="text-xs">
            {{ device.repairGuide.deviceType.model }}
          </span>
        </div>
        <div>
          <span class="flex-start text-xs">Device Type:</span>
          <span class="flex-end text-xs">{{
            DeviceGroup[device.repairGuide.deviceType.group]
          }}</span>
        </div>
      </div>

      <div class="flex-end">
        <div v-if="device.repairGuide.deviceType.brand === 'Apple'"><AppleIcon /></div>
        <div v-else-if="device.repairGuide.deviceType.brand === 'Samsung'"><SamsungIcon /></div>
        <div v-else><OppoIcon /></div>
      </div>
    </div>
    <!-- <div>Region: {{ device.repairGuide.serviceCountry }}</div> -->
    <div class="font-bold">Client Price | Sale Price</div>
    <div>
      <div
        v-if="
          device.repairGuide.repairType.lcdScreen &&
          device.repairGuide.repairType.lcdScreen.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-xs">LCD Screen:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CN:</span>
          <span class="text-xs">
            {{
              device.repairGuide.repairType.lcdScreen.partId
                ? device.repairGuide.repairType.lcdScreen.partId
                : `${date.getFullYear().toString().slice(-2)}${'132'}`
            }}</span
          >
          <span class="text-gray-500 text-xs"> NZD </span>${{
            device.repairGuide.repairType.lcdScreen.retailPrice
          }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.oemScreen &&
          device.repairGuide.repairType.oemScreen.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-xs">OEM Screen:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CN:</span>
          <span class="text-xs">
            {{
              device.repairGuide.repairType.oemScreen.partId
                ? device.repairGuide.repairType.oemScreen.partId
                : `${date.getFullYear().toString().slice(-2)}${'132'}`
            }}</span
          >
          <span class="text-gray-500 text-xs"> NZD </span>${{
            device.repairGuide.repairType.oemScreen.retailPrice
          }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.oledScreen &&
          device.repairGuide.repairType.oledScreen.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-xs">OLED Screen:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CN:</span>
          <span class="text-xs">
            {{
              device.repairGuide.repairType.oledScreen.partId
                ? device.repairGuide.repairType.oledScreen.partId
                : `${date.getFullYear().toString().slice(-2)}${'132'}`
            }}
          </span>
          <span class="text-gray-500 text-xs"> NZD </span>${{
            device.repairGuide.repairType.oledScreen.retailPrice
          }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.battery &&
          device.repairGuide.repairType.battery.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-xs">Battery:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CN:</span>
          <span class="text-xs">
            {{
              device.repairGuide.repairType.battery.partId
                ? device.repairGuide.repairType.battery.partId
                : `${date.getFullYear().toString().slice(-2)}${'132'}`
            }}
          </span>
          <span class="text-gray-500 text-xs"> NZD </span>${{
            device.repairGuide.repairType.battery.retailPrice
          }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.chargingPort &&
          device.repairGuide.repairType.chargingPort.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-xs">Charging Port:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CN:</span>
          <span class="text-xs">
            {{
              device.repairGuide.repairType.chargingPort.partId
                ? device.repairGuide.repairType.chargingPort.partId
                : `${date.getFullYear().toString().slice(-2)}${'132'}`
            }}
          </span>
          <span class="text-gray-500 text-xs"> NZD </span>${{
            device.repairGuide.repairType.chargingPort.retailPrice
          }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.frontCamera &&
          device.repairGuide.repairType.frontCamera.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-xs">Front Camera:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CN:</span>
          <span class="text-xs">
            {{
              device.repairGuide.repairType.frontCamera.partId
                ? device.repairGuide.repairType.frontCamera.partId
                : `${date.getFullYear().toString().slice(-2)}${'132'}`
            }}
          </span>
          <span class="text-xs"> NZD </span>${{
            device.repairGuide.repairType.frontCamera.retailPrice
          }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.backCamera &&
          device.repairGuide.repairType.backCamera.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-xs">Back Camera:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CN:</span>
          <span class="text-gray-500 text-xs">
            {{
              device.repairGuide.repairType.backCamera.partId
                ? device.repairGuide.repairType.backCamera.partId
                : `${date.getFullYear().toString().slice(-2)}${'132'}`
            }}
          </span>
          <span class="text-gray-500 text-xs"> NZD </span>${{
            device.repairGuide.repairType.backCamera.retailPrice
          }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.backGlass &&
          device.repairGuide.repairType.backGlass.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-xs">Back Glass:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CN:</span>
          <span class="text-gray-500 text-xs">
            {{
              device.repairGuide.repairType.backGlass.partId
                ? device.repairGuide.repairType.backGlass.partId
                : `${date.getFullYear().toString().slice(-2)}${'132'}`
            }}
          </span>
          <span class="text-gray-500 text-xs"> NZD </span>${{
            device.repairGuide.repairType.backGlass.retailPrice
          }}
        </div>
      </div>
      <div
        v-if="
          device.repairGuide.repairType.motherboard &&
          device.repairGuide.repairType.motherboard.retailPrice !== 0
        "
        class="flex justify-between"
      >
        <div class="flex-start text-xs">Motherboard:</div>
        <div class="flex-end">
          <span class="text-red-500 text-xs">CN:</span>
          <span class="text-gray-500 text-xs">
            {{
              device.repairGuide.repairType.motherboard.partId
                ? device.repairGuide.repairType.motherboard.partId
                : `${date.getFullYear().toString().slice(-2)}${'132'}`
            }}
          </span>
          <span class="text-gray-500 text-xs">NZD </span>${{
            device.repairGuide.repairType.motherboard.retailPrice
          }}
        </div>
      </div>
      <!-- <div>Cost Price</div> -->
    </div>
  </div>
</template>

<style></style>
