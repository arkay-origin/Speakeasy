#!/usr/bin/env python3
"""Build the public edition: dist/speak-easy.html (single self-contained file)."""
import re, pathlib
here = pathlib.Path(__file__).parent
FILES = ['sounds.js', 'g1.js', 'g2.js', 'g3.js', 'g4.js', 'l1_ru_from_old.js',
         'n_pub1.js', 'n_pub2.js', 'tr.js', 'l1.js', 'teach.js', 'glossary.js', 'n_pub3.js', 'n_life.js', 'site.js', 'structure.js']
content = "const OLD=[];const NEW={};\n" + "\n".join((here/f).read_text() for f in FILES)
out = (here/'shell.html').read_text().replace('/*__CONTENT__*/', content)
dist = here.parent/'dist'; dist.mkdir(exist_ok=True)
standalone = out.replace('<!--PWA-->\n', '').replace('\n/*SW*/', '')
(dist/'speak-easy.html').write_text(standalone)
# web version (GitHub Pages): installable, works offline after the first visit
pub = here.parent  # repository root: index.html
web = out.replace('<!--PWA-->', '<link rel="manifest" href="manifest.webmanifest">\n<meta name="theme-color" content="#111318">\n<link rel="icon" href="icon.svg" type="image/svg+xml">\n<link rel="apple-touch-icon" href="icon-192.png">')
web = web.replace('/*SW*/', "if('serviceWorker' in navigator&&(location.protocol==='https:'||location.hostname==='localhost')){navigator.serviceWorker.register('sw.js').catch(()=>{})}")
(pub/'index.html').write_text(web)
for i, sc in enumerate(re.findall(r'<script>([\s\S]*?)</script>', standalone)):
    (here/f'_s{i}.js').write_text(sc)
print('built', len(out), 'bytes')
