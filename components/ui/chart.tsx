"use client"

import { TooltipProps } from "recharts"
import { ChartData } from "@/components/types/index"
import React from 'react'; // Import React

export function ChartContainer({
  config,
  children,
  className,
}: {
  config: Record<string, { label: string; color: string }>
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      {children}
      <div className="mt-4 flex flex-wrap gap-4">
        {Object.entries(config).map(([key, { label, color }]) => (
          <div key={key} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ChartTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              {label}
            </span>
            <span className="font-bold text-muted-foreground">
              {payload[0].value}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export function ChartTooltipContent({ payload, hideLabel }: { payload?: ChartData[]; hideLabel?: boolean }) {
  if (!payload?.length) {
    return null
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        {payload.map((data) => (
          <div key={data.name} className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              {hideLabel ? "" : data.name}
            </span>
            <span className="font-bold text-muted-foreground">
              {typeof data.value === "number" ? data.value.toFixed(2) : data.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
