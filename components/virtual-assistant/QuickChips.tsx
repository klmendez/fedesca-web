// components/virtual-assistant/QuickChips.tsx

'use client'

import React from 'react'
import type { Chip } from './types'
import { chipBase } from './utils'

export function QuickChips({
  chips,
  onSelect,
}: {
  chips: Chip[]
  onSelect: (chip: Chip) => void
}) {
  if (!chips.length) return null

  return (
    <div className="flex flex-wrap gap-2 border-t border-border/60 bg-background/70 px-4 py-3">
      {chips.map((c) => (
        <button key={c.id} type="button" className={chipBase()} onClick={() => onSelect(c)}>
          {c.icon}
          <span>{c.label}</span>
        </button>
      ))}
    </div>
  )
}
