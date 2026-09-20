
# AGENT GUARDRAILS

## Token & File Scope Rules

- Do NOT run full-workspace file searches unless explicitly requested.
- Modify ONLY the files specifically tagged in the prompt (`@file` or `#file`).
- Keep implementations minimal and modular. Avoid creating unrequested utility wrapper files.

## Anti-AI UI & Aesthetic System

- Colors: Strictly avoid standard default Tailwind colors (`bg-slate-900`, `#3B82F6`, `#8B5CF6`). Use custom dark obsidian tones with sharp accents.
- Layouts: Avoid centered hero layouts with floating background glow blobs (`bg-gradient-to-r`). Use asymmetrical grids and sharp structural alignments.
- Borders & Radius: Avoid uniform `rounded-xl` or `rounded-2xl` everywhere. Use custom subtle gridlines (`border-white/10`) and varied corner radii.
- Typography: Use distinct high-contrast font pairings (e.g., Display: "Syne" / Body: "Plus Jakarta Sans").
