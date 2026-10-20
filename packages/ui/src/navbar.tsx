import Link from 'next/link'
import { createElement } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/vle', label: 'VLE' },
  { href: '/blog', label: 'Blog' },
]

export function Navbar() {
  return createElement(
    'header',
    { className: 'site-nav' },
    createElement(Link, { className: 'brand', href: '/' }, 'servant', createElement('span', null, 'leaders')),
    createElement(
      'nav',
      { 'aria-label': 'Primary navigation' },
      links.map((link) => createElement(Link, { key: link.href, href: link.href }, link.label)),
    ),
  )
}
