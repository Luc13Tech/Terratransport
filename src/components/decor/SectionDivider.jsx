// Sépare deux sections de couleurs différentes par une courbe plutôt qu'une
// ligne droite. `from`/`to` sont des couleurs hex (correspondant aux
// couleurs de fond réelles des sections), `flip` inverse la courbe.
export default function SectionDivider({ from = '#0F3D2E', to = '#F7F5EE', flip = false }) {
  return (
    <div className="relative w-full overflow-hidden leading-[0]" style={{ backgroundColor: from }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 90"
        className="w-full h-[50px] md:h-[80px]"
        preserveAspectRatio="none"
        style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
      >
        <path
          d="M0,0 C320,90 1120,0 1440,70 L1440,90 L0,90 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}
