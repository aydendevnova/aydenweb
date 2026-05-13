interface MetadataSidebarProps {
  role: string
  timeline: string
  team: string[]
  collaborators?: string
  tools: string[]
}

export function MetadataSidebar({
  role,
  timeline,
  team,
  collaborators,
  tools,
}: MetadataSidebarProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-6 border-t border-[var(--color-border)] pt-6 lg:border-t-0 lg:pt-0">
        <MetaBlock label="Role" value={role} />
        <MetaBlock label="Timeline" value={timeline} />
        <MetaBlock label="Team" value={team.join(", ")} />
        {collaborators && <MetaBlock label="Collaborators" value={collaborators} />}
        <MetaBlock label="Tools" value={tools.join(", ")} />
      </div>
    </div>
  )
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-heading text-[15px] font-semibold text-[var(--color-text)]">
        {label}
      </span>
      <span className="font-body text-[14px] leading-relaxed text-[var(--color-muted)]">
        {value}
      </span>
    </div>
  )
}
