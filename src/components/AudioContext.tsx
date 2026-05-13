"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

interface AudioContextValue {
  isMuted: boolean
  toggleMute: () => void
  setMuted: (muted: boolean) => void
}

const AudioCtx = createContext<AudioContextValue>({
  isMuted: true,
  toggleMute: () => {},
  setMuted: () => {},
})

export function useAudio() {
  return useContext(AudioCtx)
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = useCallback(() => setIsMuted((prev) => !prev), [])
  const setMuted = useCallback((muted: boolean) => setIsMuted(muted), [])

  return (
    <AudioCtx.Provider value={{ isMuted, toggleMute, setMuted }}>
      {children}
    </AudioCtx.Provider>
  )
}
