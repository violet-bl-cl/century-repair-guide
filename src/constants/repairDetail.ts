import type { RepairDescription } from "@/types/repairGuide";

export const emptyRepair = (): RepairDescription => ({
  retailPrice: 0,
  isPartAvailable: false,
  isOriginal: false,
  description: "",
});

export const createRepairDetail = (cost: number, description = ""): RepairDescription => ({
  retailPrice: cost,
  isPartAvailable: cost > 0,
  isOriginal: false,
  description,
});
