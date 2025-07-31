"use client"
import { Skeleton } from "@/components/ui/skeleton"
export function Skeletonn() {
  return (
    <div className="flex flex-col space-y-3 mt-20 items-center">
    <Skeleton className="h-[200px] w-[280px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[280px]" />
      <Skeleton className="h-4 w-[230px]" />
    </div>
  </div>
  )
}