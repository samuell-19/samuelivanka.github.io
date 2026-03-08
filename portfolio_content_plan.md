# Samuel Ivanka — Portfolio Content Plan & Copy Brief
## For Claude Code: build a multi-page bilingual (EN/DA) portfolio

---

## DESIGN DIRECTION

### Typography (choose one pairing — avoid Inter, Roboto, Arial)
**Recommended:** `Fraunces` (serif display, has personality + quirk) + `Outfit` (clean geometric sans)
**Alternative:** `Playfair Display` + `Lato`
**Mono accents:** `JetBrains Mono` for code snippets, labels, tags

### Colour Scheme (choose one)
**CHOSEN COLOUR PALETTE:**
- Dark navy: `#0C2B4E` (primary dark, headings, nav background)
- Mid blue: `#1A3D64` (secondary, hover states, borders)
- Teal: `#1D546C` (accent, highlights, active states, links)
- Light grey: `#F4F4F4` (background, card surfaces)
- White: `#FFFFFF` (content backgrounds)
- Ink (body text): `#1A1A1A`
- Muted text: `#6B7280`
- Rule/border: `#E2E8F0`

CSS variables to use:
```css
--navy:    #0C2B4E;
--blue:    #1A3D64;
--teal:    #1D546C;
--grey:    #F4F4F4;
--white:   #FFFFFF;
--ink:     #1A1A1A;
--muted:   #6B7280;
--rule:    #E2E8F0;
```

### Visual style
- Clean, minimal, with specific typographic details that stand out
- Generous whitespace
- Subtle animations on scroll (fade in, slide up)
- Visuals where mentioned (roadmap, pipeline diagram, skill icons)
- NOT flashy, NOT purple gradients, NOT generic AI aesthetic
- Floating pill navigation (like the one-pager version)
- Language toggle (EN/DA) fixed top right on every page

---

## SITE STRUCTURE

```
/                    → Home (index.html)
/about.html          → About Me
/projects.html       → Projects
/projects/seo-toolkit.html  → SEO Toolkit detail page
```

Navigation: **Home · About · Projects · Contact**
Footer: same on every page
Language toggle: same on every page, fixed top right

---

## GLOBAL ELEMENTS

### Navigation (every page)
```
[Samuel Ivanka]    Home  About  Projects  Contact    [EN | DA]
```
- Logo/name links back to home
- Active state on current page
- Mobile: hamburger or simplified pill

### Footer (every page)
EN: `Samuel Ivanka · Copenhagen · samuel.ivanka@gmail.com · Built with semantic HTML, JSON-LD schema and hreflang best practices — because SEO starts in the code.`
DA: `Samuel Ivanka · København · samuel.ivanka@gmail.com · Bygget med semantisk HTML, JSON-LD schema og hreflang best practices — fordi SEO starter i koden.`

---

## PAGE 1: HOME (`index.html`)

### Section 1 — Hero

**EN:**
Eyebrow label (mono/small caps): `SEO Manager · Copenhagen`
H1: `Samuel Ivanka`
Tagline: `I do SEO the way it should be done — technically sound, strategically grounded, and built to last beyond the next algorithm update.`
Sub-copy (smaller, muted): `5 years across iGaming, agency and freelance. Currently SEO Manager at SkyCity Entertainment Group.`

CTA buttons:
- Primary: `View my work` → links to /projects.html
- Secondary: `About me` → links to /about.html
- Tertiary outline: `Download CV` → S_Ivanka_CV.pdf

**DA:**
Eyebrow: `SEO Manager · København`
H1: `Samuel Ivanka`
Tagline: `Jeg laver SEO, som det bør gøres — teknisk solidt, strategisk funderet og bygget til at holde ud over den næste algoritme-opdatering.`
Sub-copy: `5 års erfaring inden for iGaming, bureau og freelance. Nuværende SEO Manager hos SkyCity Entertainment Group.`
CTAs: `Se mit arbejde` · `Om mig` · `Download CV`

---

### Section 2 — What I do (3 teaser cards)

Intro label: `Approach` / `Tilgang`
Intro heading:
EN: `Holistic SEO. No shortcuts.`
DA: `Holistisk SEO. Ingen genveje.`

**Card 1 — Technical Foundation**
Icon: ⚙️ or a gear SVG
EN title: `Technical SEO`
EN body: `Site architecture, crawlability, rendering, schema markup. The infrastructure layer that everything else depends on.`
DA title: `Teknisk SEO`
DA body: `Sitestruktur, crawlbarhed, rendering, schema markup. Infrastrukturlaget som alt andet afhænger af.`

**Card 2 — Entity & Content**
Icon: 🧠 or network graph icon
EN title: `Entity Optimisation`
EN body: `I work at the layer Google actually uses to understand content — entity association, topical authority, knowledge graph signals.`
DA title: `Entitetsoptimering`
DA body: `Jeg arbejder på det lag Google faktisk bruger til at forstå indhold — entitetsassociation, tematisk autoritet, Knowledge Graph signaler.`

**Card 3 — AI & Future SEO**
Icon: 🔭 or compass icon
EN title: `Following the AI shift`
EN body: `The fundamentals that make you rank in traditional search are the same ones that make you visible in AI-assisted results. I follow this space closely — not to rebrand what I do, but to stay ahead of how search is evolving.`
DA title: `AI-søgningens udvikling`
DA body: `De fundamenter der gør dig synlig i traditionel søgning er de samme der gør dig synlig i AI-søgning. Jeg følger dette tæt — ikke for at omdøbe mit arbejde, men for at holde mig foran udviklingen.`

---

### Section 3 — Featured project teaser

Label: `Featured Project` / `Udvalgt Projekt`
H2 EN: `Programmatic SEO Toolkit`
H2 DA: `Programmatisk SEO Toolkit`
Body EN: `A Python toolkit that automates entity extraction, content gap analysis, schema auditing and GSC-enriched internal linking. Built on the same NLP infrastructure Google uses — at zero subscription cost.`
Body DA: `Et Python-toolkit der automatiserer entitetsudtrækning, content gap-analyse, schema-audit og GSC-beriget intern linkbuilding. Bygget på den samme NLP-infrastruktur som Google bruger — uden abonnementsomkostninger.`
CTA: `Read the full case →` / `Læs hele casen →` → links to /projects/seo-toolkit.html

**Visual:** show a simplified version of the 4-step pipeline (Step 01 → 02 → 03 → 04) as a horizontal flow diagram. Same style as in the one-pager but more visual.

---

### Section 4 — Contact CTA strip

EN: `Want to talk SEO?`
Sub: `Whether you're hiring, collaborating, or just want to discuss entity optimisation over coffee — I'm open to a conversation.`
CTA: `samuel.ivanka@gmail.com` (mailto link, styled large)
Secondary: LinkedIn button

DA: `Vil du tale SEO?`
Sub: `Uanset om du ansætter, samarbejder eller bare vil diskutere entitetsoptimering over en kop kaffe — jeg er åben for en snak.`

---

## PAGE 2: ABOUT (`about.html`)

### Toggle: Professional / Personal
Two modes toggled by a button — like the language toggle but for content mode.
Default: Professional

---

### PROFESSIONAL MODE

**Section 1 — Professional intro**
Label: `About` / `Om mig`
H1 EN: `Technical SEO manager with a curiosity problem.`
H1 DA: `Teknisk SEO manager med et nysgerrighedsproblem.`

Body EN:
`I've spent 5 years working at the intersection of SEO strategy and technical implementation. What keeps me in this field is that it moves — it evolves like an organism. There are frameworks and guidelines, but there's no one-size-fits-all answer. You have to think, test, observe how people actually behave on the web, and adapt.`

`I started in SEO almost by coincidence — my roommate landed an internship doing on-page SEO in early 2020 and it looked interesting. I joined him at the same company, spent a year learning the fundamentals, and haven't looked back since.`

`My focus is on the technical and entity layer of SEO — the infrastructure that everything else sits on top of. I also build tools to automate repetitive analysis work, because understanding how something works at a code level makes you significantly better at the strategic level.`

Body DA:
`Jeg har brugt 5 år i skæringspunktet mellem SEO-strategi og teknisk implementering. Det der holder mig i dette felt er, at det bevæger sig — det udvikler sig som en organisme. Der er rammer og retningslinjer, men der er ingen one-size-fits-all løsning. Man skal tænke, teste, observere hvordan folk faktisk opfører sig på nettet, og tilpasse sig.`

`Jeg startede med SEO næsten tilfældigt — min roommate fik en praktikplads med on-page SEO i starten af 2020, og det virkede interessant. Jeg sluttede mig til ham i samme virksomhed, brugte et år på at lære fundamenterne, og har ikke set mig tilbage siden.`

`Mit fokus er på det tekniske og entitetsmæssige lag af SEO — infrastrukturen som alt andet hviler på. Jeg bygger også værktøjer til at automatisere gentagne analysearbejder, fordi forståelse af hvordan noget fungerer på kodeniveau gør dig betydeligt bedre på det strategiske niveau.`

---

**Section 2 — Career roadmap (VISUAL)**

Label: `Career` / `Karriere`
H2 EN: `How I got here`
H2 DA: `Hvordan jeg kom hertil`

Design note: Visual timeline/roadmap — horizontal on desktop, vertical on mobile. Each node has year, role, company, and 1-line description. Use icons or coloured dots per node. Animate on scroll.

Nodes:
```
Early 2020
On-page SEO (internship)
[Company name omitted]
"The roommate coincidence that started it all."

Feb 2021
SEO Specialist → SEO Manager
GiG (Gaming Innovation Group)
"7 markets. Real clients. The full picture of what SEO looks like at scale."

Dec 2024 → Present
SEO Manager
SkyCity Entertainment Group
"iGaming. Platform migration. Building tools. Currently here."

Feb 2025 → Present
Freelance SEO
OutWithKidz.com · Malta
"A hobby project. Full technical SEO ownership from day one."
```

DA versions:
```
Tidligt 2020 — "Den roommate-tilfældighed der startede det hele."
Feb 2021 — "7 markeder. Rigtige kunder. Det fulde billede af SEO i skala."
Dec 2024 — "iGaming. Platformsmigrering. Bygger værktøjer. Er her stadig."
Feb 2025 — "Et hobbyprojekt. Fuld teknisk SEO-ejerskab fra dag ét."
```

---

**Section 3 — Skills grid**

Label: `Toolkit` / `Værktøjskasse`
H2 EN: `Skills & Tools`
H2 DA: `Kompetencer & Værktøjer`

6 cards (same as one-pager but slightly more detailed):
1. Technical SEO — Screaming Frog, GSC, rendering, redirects, canonicals, sitemaps, robots.txt
2. Entity Optimisation — Google NLP API, schema markup, JSON-LD, topical authority, internal linking
3. Analytics & Reporting — GA4, GSC, Nightwatch, Accuranker, Ahrefs, Looker Studio
4. Automation & Tooling — Python, Playwright, Google Cloud APIs, OAuth 2.0, HTML/CSS/JS
5. Content Strategy — SurferSEO, Ahrefs, keyword research, content briefs, on-page, A/B testing
6. International SEO — hreflang, 7 markets, iGaming vertical, localisation strategy

---

**Section 4 — CV download strip**

EN: `Want the full picture?`
Sub: `Download my CV for a complete overview of experience, education and skills.`
CTA: `Download CV (PDF)`

DA: `Vil du have det fulde billede?`
Sub: `Download mit CV for et komplet overblik over erfaring, uddannelse og kompetencer.`

---

### PERSONAL MODE

**Section 1 — Personal intro**

Label: `The human behind the redirects` / `Mennesket bag redirects`

H1 EN: `Not just an SEO nerd.`
H1 DA: `Ikke kun en SEO-nørd.`

Body EN:
`Originally from Partizánske, Slovakia — a town small enough that leaving felt inevitable. At 15 I moved to Košice to pursue badminton seriously, eventually making it to the national team. Then I decided Denmark sounded like a good idea, moved to Copenhagen, and somehow never left.`

`Copenhagen is home now. I studied here, learned Danish (which people seem unreasonably impressed by), and picked up Dutch along the way because apparently three languages wasn't enough of a challenge.`

Body DA:
`Oprindeligt fra Partizánske, Slovakiet — en by lille nok til at det føltes uundgåeligt at forlade den. Som 15-årig flyttede jeg til Košice for at forfølge badminton seriøst og endte på landsholdet. Så besluttede jeg at Danmark lød som en god idé, flyttede til København, og er aldrig rigtig rejst igen.`

`København er hjem nu. Jeg studerede her, lærte dansk (som folk virker urimeligt imponerede over), og lærte også hollandsk undervejs — fordi tre sprog åbenbart ikke var udfordring nok.`

---

**Section 2 — Life outside work (playful cards)**

Label: `Outside the browser` / `Uden for browseren`

Design note: Fun card grid with icons — playful layout, slightly less formal than the skills grid. Each card has an emoji, a title, and a short description.

Cards:

🏸 **Badminton (on hold)**
EN: `Former national team player. Currently on pause thanks to heel and knee surgeries — but I'll be back. The racket is just resting.`
DA: `Tidligere landsholdssspiller. I øjeblikket på pause takket være hæl- og knæoperationer — men jeg vender tilbage. Ketsjereren hviler bare.`

🚴 **Road cycling**
EN: `Long rides, good podcasts, bad hills. The perfect way to process a week of technical SEO problems.`
DA: `Lange ture, gode podcasts, dårlige bakker. Den perfekte måde at bearbejde en uge med tekniske SEO-problemer.`

📚 **Reading**
EN: `Anatomy books in Danish, crime novels (Jo Nesbø's Harry Hole series), human psychology, and recently — Decameron, because apparently I wanted to find out if I'd enjoy a 14th-century classic. The verdict is still out.`
DA: `Anatombøger på dansk, krimier (Jo Nesbøs Harry Hole-serie), menneskelig psykologi, og for nylig — Dekameron, fordi jeg åbenbart ville finde ud af om jeg ville nyde en 1300-tals klassiker. Dommen er stadig ikke afsagt.`

🌍 **Travel**
EN: `10-15 countries across Europe, an internship at a badminton academy in Malaysia, the Philippines, Hong Kong, Thailand, Singapore, and a road trip across Australia. Next destination: TBD.`
DA: `10-15 lande på tværs af Europa, praktikophold på en badmintonakademi i Malaysia, Filippinerne, Hong Kong, Thailand, Singapore og en roadtrip gennem Australien. Næste destination: TBD.`

🐕 **Walks + dog + girlfriend**
EN: `The holy trinity of weekend activities. Long walks with my girlfriend and our dog — the best kind of offline time.`
DA: `Den hellige treenighed af weekendaktiviteter. Lange ture med min kæreste og vores hund — den bedste slags offline tid.`

🌱 **Plants, cooking & cleaning**
EN: `Yes, I genuinely enjoy cleaning. I also bake, cook, and keep plants alive — which, frankly, requires the same attention to detail as a good technical SEO audit.`
DA: `Ja, jeg nyder faktisk at rydde op. Jeg bager, laver mad og holder planter i live — hvilket ærligt talt kræver samme opmærksomhed på detaljer som en god teknisk SEO-audit.`

---

**Section 3 — Languages**

Label: `Languages` / `Sprog`
H2 EN: `Four languages and counting.`
H2 DA: `Fire sprog og flere på vej.`

Body EN: `Slovak (native), English (C2), Danish (C1 — learned by living here, not from a textbook), Dutch (B1 — learning by reading books, which is either very efficient or very strange depending on who you ask).`

Body DA: `Slovakisk (modersmål), Engelsk (C2), Dansk (C1 — lært ved at bo her, ikke fra en lærebog), Hollandsk (B1 — lærer ved at læse bøger, hvilket enten er meget effektivt eller meget mærkeligt afhængigt af hvem du spørger).`

Design note: Could be a simple visual with flag icons + level bars or just clean typography. Not a boring table.

---

## PAGE 3: PROJECTS (`projects.html`)

Label: `Work` / `Arbejde`
H1 EN: `Projects`
H1 DA: `Projekter`

Intro EN: `Things I've built, tested and learned from. The toolkit below is a working proof of concept — not a polished product, but a genuine demonstration of how SEO tooling works under the hood.`
Intro DA: `Ting jeg har bygget, testet og lært af. Toolkittet nedenfor er et fungerende proof of concept — ikke et poleret produkt, men en ægte demonstration af hvordan SEO-værktøjer fungerer under motorhjelmen.`

---

**Project card 1 — Programmatic SEO Toolkit (main feature)**

Tag: `Python · Google NLP · GSC API · Playwright`
Title EN: `Programmatic SEO Toolkit`
Title DA: `Programmatisk SEO Toolkit`
Body EN: `A 4-tool Python pipeline that automates entity extraction, content gap analysis, schema markup auditing and GSC-enriched internal linking. Built on Google's own NLP infrastructure. Zero subscriptions.`
Body DA: `En 4-værktøjs Python-pipeline der automatiserer entitetsudtrækning, content gap-analyse, schema markup-audit og GSC-beriget intern linkbuilding. Bygget på Googles egen NLP-infrastruktur. Nul abonnementer.`
CTA EN: `Read the full case →`
CTA DA: `Læs hele casen →`
Link: `/projects/seo-toolkit.html`

Design note: Large feature card, dark background, prominent. Pipeline mini-diagram visible on the card itself.

---

**Project card 2 — Placeholder**

Tag: `Coming soon`
Title EN: `OutWithKidz.com — SEO from scratch`
Title DA: `OutWithKidz.com — SEO fra bunden`
Body EN: `Full technical SEO implementation on a hobby project targeting families in Malta. AEO content strategy, schema markup, site architecture. Case study in progress.`
Body DA: `Fuld teknisk SEO-implementering på et hobbyprojekt målrettet familier på Malta. AEO contentstrategi, schema markup, sitestruktur. Case study under udarbejdelse.`
Style: Muted/greyed out with a "coming soon" badge

---

## PAGE 4: SEO TOOLKIT DETAIL (`projects/seo-toolkit.html`)

Label: `Case Study` / `Case Study`
H1 EN: `Programmatic SEO Toolkit`
H1 DA: `Programmatisk SEO Toolkit`

Intro EN: `A Python-based toolkit that replicates — and in doing so, deeply understands — what commercial SEO platforms charge subscription fees for. Built to automate the four most technically demanding tasks in entity-based SEO.`
Intro DA: `Et Python-baseret toolkit der replikerer — og dermed dybt forstår — hvad kommercielle SEO-platforme tager abonnementspriser for. Bygget til at automatisere de fire mest teknisk krævende opgaver inden for entitetsbaseret SEO.`

---

**Section 1 — Why I built it**

EN: `The question that started this project was simple: why are the tools that do entity-level SEO analysis well so expensive, when the underlying technology — Google's own NLP API — is mostly free?`

`The answer is that most SEO practitioners don't know how to use it. This toolkit is proof that you don't need an InLinks subscription to understand what entities Google extracts from your content — you just need to ask Google directly.`

DA: `Spørgsmålet der startede dette projekt var simpelt: hvorfor er de værktøjer der laver entitetsniveau SEO-analyse godt, så dyre, når den underliggende teknologi — Googles egen NLP API — stort set er gratis?`

`Svaret er at de fleste SEO-praktikere ikke ved hvordan man bruger den. Dette toolkit er bevis på at du ikke behøver et InLinks-abonnement for at forstå hvilke entiteter Google udtrækker fra dit indhold — du skal bare spørge Google direkte.`

---

**Section 2 — The pipeline (VISUAL)**

Design note: Full visual pipeline diagram. Four steps in sequence, each with:
- Step number
- Tool name
- File name (monospace)
- One-line description
- Arrow to next step
Animate each step appearing in sequence on scroll.

Steps:
```
01 — Entity Extractor (main.py)
     Crawls site with headless Chromium, sends page text to Google NLP API,
     extracts named entities with salience scores. → entity_report.csv

02 — Gap Analyser (gap_analyser.py)
     Compares entity profile against 80+ master entity list for the casino
     vertical. Flags missing and under-represented entities. → gap_report.csv

03 — Schema Generator (schema_generator.py)
     Audits existing JSON-LD, detects page type, generates ready-to-paste
     schema markup with correct ordering (WebSite → Organization → supporting).
     → schema_recommendations.csv

04 — GSC Internal Linking (gsc_connector.py)
     Pulls 90 days of GSC data via OAuth. Identifies pages ranking position
     8-20 (page 2) as priority link targets. Uses real queries as anchor text.
     → gsc_internal_links.csv
```

---

**Section 3 — Key design decisions**

Label: `Under the hood` / `Under motorhjelmen`
H2 EN: `Why it works the way it does`
H2 DA: `Hvorfor det fungerer som det gør`

4 expandable cards (accordion style) or just 4 blocks:

**Why Playwright, not requests?**
EN: `Most casino sites render content via JavaScript. A standard HTTP request returns only the HTML shell — not what Google or users actually see. Playwright launches a real Chromium browser and extracts fully-rendered page text. Same content, same extraction.`
DA: `De fleste casino-sites renderer indhold via JavaScript. En standard HTTP-forespørgsel returnerer kun HTML-skallen — ikke hvad Google eller brugere faktisk ser. Playwright starter en rigtig Chromium-browser og udtrækker fuldt renderet sidetekst.`

**Why Google's own NLP API?**
EN: `Strategic choice. Google uses this same infrastructure to process web content. Optimising for the entities it returns means optimising for the signals Google actually uses — not a proxy for them.`
DA: `Strategisk valg. Google bruger denne samme infrastruktur til at behandle webindhold. Optimering for de entiteter den returnerer betyder optimering for de signaler Google faktisk bruger.`

**Why a pre-built entity list for gap analysis?**
EN: `The original design crawled competitors. It failed — geo-blocking and bot protection are aggressive in iGaming. The pre-built list is based on Google's Knowledge Graph associations for the casino vertical globally. More robust, no crawling infrastructure needed.`
DA: `Det oprindelige design crawlede konkurrenter. Det mislykkedes — geo-blokering og bot-beskyttelse er aggressiv i iGaming. Den præbyggede liste er baseret på Googles Knowledge Graph-associationer for casino-vertikalen globalt.`

**Why does schema order matter?**
EN: `Google treats the first schema on a page as the primary signal for that page's identity. A homepage that leads with an Offer schema signals "this page is a promotional offer" — not "this is a brand." The toolkit enforces WebSite → Organization first, always.`
DA: `Google behandler det første schema på en side som det primære signal for sidens identitet. En hjemmeside der starter med et Offer-schema signalerer "denne side er et tilbud" — ikke "dette er et brand." Toolkittet håndhæver WebSite → Organization først, altid.`

---

**Section 4 — Honest limitations**

Label: `Limitations` / `Begrænsninger`
H2 EN: `What it doesn't do (yet)`
H2 DA: `Hvad det ikke gør (endnu)`

Design note: Amber/yellow callout style — honest, not apologetic.

EN: `The internal linking tool works best with 50+ crawled pages — at 30 pages the entity co-occurrence data is shallow. There's no search volume integration, so gap analysis prioritises by topical completeness rather than traffic opportunity. Schema auditing can't verify whether field values are accurate, only whether they exist. These are known limitations, not surprises — and they point directly to the next layer of development.`

DA: `Internt linking-værktøjet fungerer bedst med 50+ crawlede sider — ved 30 sider er entitets-co-occurrence-dataen overfladisk. Der er ingen søgevolumenintegration, så gap-analyse prioriterer efter tematisk fuldstændighed frem for trafikmulighed. Schema-audittering kan ikke verificere om feltværdier er nøjagtige, kun om de eksisterer. Dette er kendte begrænsninger, ikke overraskelser — og de peger direkte mod næste udviklingslag.`

---

**Section 5 — Future improvements**

Label: `Roadmap` / `Roadmap`

Short list (not exhaustive):
EN:
- Search volume integration via DataForSEO or Ahrefs API
- Implementation verification — re-crawl source pages after links are added
- Historical tracking — snapshot entity salience and GSC positions over time
- Pipeline orchestration for enterprise portfolio scale

DA:
- Søgevolumenintegration via DataForSEO eller Ahrefs API
- Implementeringsverificering — re-crawl kildesider efter links er tilføjet
- Historisk sporing — snapshot entitetssalience og GSC-positioner over tid
- Pipeline-orkestrering til enterprise porteføljeskala

---

**Section 6 — Tech stack summary (visual)**

Design note: Clean badge/tag grid showing all tools used.

`Python 3.10+` · `Playwright` · `Google Cloud NLP API` · `Google Search Console API` · `OAuth 2.0` · `JSON-LD` · `Chromium (headless)` · `CSV output`

---

## SCHEMA MARKUP NOTES (for Claude Code)

Add to every page:
- `<html lang="en">` (updated by JS toggle)
- Canonical pointing to own URL
- Open Graph tags
- Hreflang comment block (same as index.html — explaining correct implementation)

Homepage schema: WebSite + Person
About page schema: Person (more detailed)
Projects page schema: ItemList of SoftwareApplication
Toolkit page schema: SoftwareApplication

Person schema (use on all pages):
```json
{
  "@type": "Person",
  "name": "Samuel Ivanka",
  "jobTitle": "SEO Manager",
  "url": "https://samuelivanka.github.io/",
  "email": "samuel.ivanka@gmail.com",
  "sameAs": ["https://www.linkedin.com/in/samuel-ivanka/"],
  "worksFor": {
    "@type": "Organization",
    "name": "SkyCity Entertainment Group",
    "url": "https://www.skycitycasino.com",
    "sameAs": "https://en.wikipedia.org/wiki/SkyCity_Entertainment_Group"
  },
  "knowsLanguage": ["Slovak", "English", "Danish", "Dutch"]
}
```

---

## FILES NEEDED

```
index.html
about.html
projects.html
projects/seo-toolkit.html
S_Ivanka_CV.pdf          ← user to provide
assets/
  fonts/                     ← loaded from Google Fonts, no local files needed
  icons/                     ← use inline SVG or emoji, no external icon library
```

---

## NOTES FOR CLAUDE CODE

1. Build all 4 pages in one session with consistent design system
2. Use CSS custom properties (variables) for colours/fonts — defined once in a shared `<style>` block or linked `style.css`
3. Language toggle JS should be in a shared `script.js` or inline on each page consistently
4. The career roadmap on About (professional) should be an animated SVG or CSS-only horizontal timeline
5. The pipeline diagram on the toolkit page should animate on scroll — each step fades/slides in sequentially
6. Mobile responsive — floating pill nav collapses cleanly on small screens
7. No external JS libraries except Google Fonts — pure HTML/CSS/JS
8. The personal/professional toggle on About is separate from the EN/DA language toggle — two independent toggles on that page
9. Prioritise loading performance — no heavy libraries, preconnect to Google Fonts
10. Footer note about SEO best practices in the code should be visible in the actual rendered footer, not just as an HTML comment
