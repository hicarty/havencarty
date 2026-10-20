export const CONTACT_EMAIL = 'hello@havencarty.com'

export function rsvpHref(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}

export const pins = [
  {
    code: 'UX',
    name: 'User Experience',
    summary:
      'Research-led product design that turns messy journeys into services people return to.',
    topics: ['Service design', 'Design systems', 'Accessibility'],
  },
  {
    code: 'IoT',
    name: 'Internet of Things',
    summary:
      'Connected devices and the data pipelines behind them, from sensor to dashboard.',
    topics: ['Edge devices', 'Telemetry', 'Smart buildings'],
  },
  {
    code: 'XR',
    name: 'Extended Reality',
    summary:
      'Spatial experiences for training, retail and visualisation across AR, VR and mixed reality.',
    topics: ['Spatial UI', 'Digital twins', 'Immersive training'],
  },
  {
    code: 'AI',
    name: 'Artificial Intelligence',
    summary:
      'Practical, governed AI that sits inside real workflows rather than beside them.',
    topics: ['Agents & automation', 'Data readiness', 'Responsible AI'],
  },
] as const

export const disciplines = [
  'Product Design',
  'Engineering',
  'Data & Analytics',
  'Security',
  'Operations & Delivery',
  'Marketing & Storytelling',
  'Strategy',
  'Research',
] as const

export const formats = [
  {
    name: 'Pin Nights',
    cadence: 'Monthly · Evening',
    location: 'Twickenham',
    description:
      'One pin, one room. A short talk on UX, IoT, XR or AI, followed by open conversation over drinks.',
  },
  {
    name: 'Integr8 Breakfast',
    cadence: 'Quarterly · Morning',
    location: 'Kingston-upon-Thames',
    description:
      'Eight disciplines around one table. A facilitated breakfast where founders, marketers and engineers trade problems.',
  },
  {
    name: 'Build Together Social',
    cadence: 'Seasonal · Evening',
    location: 'Twickenham & Kingston',
    description:
      'An informal riverside social for the wider Allied House community. No slides, just good introductions.',
  },
] as const
