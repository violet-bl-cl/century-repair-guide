<script lang="ts" setup>
import AppleIcon from '@/components/icons/AppleIcon.vue'
import SamsungIcon from '@/components/icons/SamsungIcon.vue'
import { DeviceGroup } from '@/types/deviceGroup'
import type { DeviceModel } from '@/types/repairGuide'
import { CircleCheck, CircleX } from '@lucide/vue'
// const allDevices = ref<DeviceModel[]>([...appleDevice, ...samsungDevice]);
const props = defineProps<{
  devices: DeviceModel[]
}>()

const repairOptions: string[] = [
  'LCD Screen',
  'OEM Screen',
  'OLED Screen',
  'Battery',
  'Charging Port',
  'Front Camera',
  'Back Camera',
  'Motherboard',
  'Back Glass',
]
//optimize this script.
const date = new Date()
</script>
<template>
  <div
    v-for="device in props.devices"
    class="mx-px-4 my-4 p-4 shadow-md"
    :key="device.repairGuide.deviceType.model"
  >
    <div class="flex border-b-1 justify-between" :style="{ height: '40px' }">
      <div class="flex-start">Device Information</div>
      <div class="flex-end">
        <div v-if="device.repairGuide.deviceType.brand === 'Apple'">
          <AppleIcon :style="{ height: '25px' }" />
        </div>
        <div v-else-if="device.repairGuide.deviceType.brand === 'Samsung'">
          <SamsungIcon :style="{ height: '15px' }" />
        </div>
        <div v-else><OppoIcon :style="{ height: '35px' }" /></div>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex-start">
        <div>
          <span class="text-xs">Model: </span
          ><span class="text-xs">
            {{ device.repairGuide.deviceType.model }}
          </span>
          <span class="text-xs">{{
            device.repairGuide.deviceType.year
              ? ` (${device.repairGuide.deviceType.year})`
              : `${' (xxxx)'}`
          }}</span>
        </div>
        <div>
          <span class="flex-start text-xs">Device Type:</span>
          <span class="flex-end text-xs">{{
            DeviceGroup[device.repairGuide.deviceType.group]
          }}</span>
        </div>
      </div>

      <div class="flex-end"></div>
    </div>
    <div class="border-b-1">Client Price | Sale Price</div>
    <div>
      <div
        v-for="(value, key, index) in device.repairGuide.repairType"
        :key="key"
        class="flex justify-between"
      >
        <div
          class="flex-start text-xs"
          v-if="value?.retailPrice !== 0"
          :style="{ color: value?.quantity !== 0 ? 'black' : 'grey' }"
        >
          {{ repairOptions[index] }}:
          <div v-if="value?.retailPrice !== 0" class="flex flex-col justify-start">
            <span class="text-red-500 text-[8px]"
              >CN:
              <span class="text-[8px] text-[#000000]">
                {{
                  value?.partId
                    ? value.partId
                    : `${date.getFullYear().toString().slice(-2)}${'O132'}MI60MX80`
                }}</span
              ></span
            >

            <span class="text-blue-500 text-[8px]">
              QU:
              <span class="text-[8px] text-[#000000]"
                >x {{ value?.quantity !== 0 ? `${value?.quantity}` : `0` }}</span
              ></span
            >
          </div>
        </div>
        <div v-if="value?.retailPrice !== 0" class="flex-end">
          <span class="text-gray-500 text-xs font-bold">
            <span class="inline-flex"
              ><span class="inline flex text-[#000000] text-[12px]">Availability:</span>
              <CircleCheck
                v-if="value?.quantity !== 0"
                :style="{ color: 'green', width: 10, height: 10, margin: 'auto !important' }" />
              <CircleX
                v-else
                :style="{ color: 'red', width: 10, height: 10, margin: 'auto !important' }"
            /></span>
            NZD </span
          ><span v-if="value?.retailPrice" class="extra-light">${{ value.retailPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
