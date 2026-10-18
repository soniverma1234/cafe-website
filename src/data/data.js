// ------------------------------------------------------------------
// Central content layer for Brew & Bliss Cafe.
// Swap any image URL here — every <SafeImage /> gracefully falls back
// to a branded placeholder if a remote image ever fails to load.
// ------------------------------------------------------------------

const unsplash = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Menu', id: 'menu' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
]

export const categories = ['All', 'Espresso', 'Brews', 'Iced', 'Pastries', 'Desserts']

export const menuItems = [
  {
    id: 'espresso',
    name: 'Signature Espresso',
    price: 3.2,
    category: 'Espresso',
    rating: 4.8,
    description:
      'Double shot of our single-origin Ethiopian beans — dark chocolate, burnt caramel and a long velvet finish.',
    image: unsplash('1510707577719-ae7c14805e3a'),
  },
  {
    id: 'cappuccino',
    name: 'Classic Cappuccino',
    price: 4.5,
    category: 'Espresso',
    rating: 4.9,
    tag: 'Bestseller',
    description:
      'Slow-steamed milk poured over a rich double shot, finished with cocoa dust and hand-poured latte art.',
    image: unsplash('1572442388796-11668a67e53d'),
  },
  {
    id: 'macchiato',
    name: 'Caramel Macchiato',
    price: 5.2,
    category: 'Espresso',
    rating: 4.9,
    tag: 'Bestseller',
    description:
      'Vanilla-kissed steamed milk, bold espresso and a golden caramel drizzle. Sweet, smoky, dangerously good.',
    image: unsplash('1534778101976-62847782c213'),
  },
  {
    id: 'flat-white',
    name: 'Velvet Flat White',
    price: 4.8,
    category: 'Espresso',
    rating: 4.7,
    description:
      'Ristretto shots wrapped in silky micro-foam. Smooth, intense and endlessly drinkable.',
    image: unsplash('1494314671902-399b18174975'),
  },
  {
    id: 'lavender-latte',
    name: 'Honey Lavender Latte',
    price: 5.6,
    category: 'Espresso',
    rating: 4.8,
    tag: 'New',
    description:
      'House-made lavender syrup, raw local honey and a double shot over steamed milk. Calm in a cup.',
    image: unsplash('1541167760496-1628856ab772'),
  },
  {
    id: 'cafe-au-lait',
    name: 'Café au Lait',
    price: 4.2,
    category: 'Brews',
    rating: 4.6,
    description:
      'Half strong batch brew, half steamed milk. The simple French classic that never misses.',
    image: unsplash('1509042239860-f550ce710b93'),
  },
  {
    id: 'pour-over',
    name: 'Slow Pour-Over V60',
    price: 5.5,
    category: 'Brews',
    rating: 4.9,
    description:
      'Single-origin Colombia, bloomed and poured by hand at the brew bar. Bright, floral and tea-like.',
    image: unsplash('1495774856032-8b90bbb32b32'),
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew Reserve',
    price: 5.0,
    category: 'Iced',
    rating: 4.9,
    tag: 'Bestseller',
    description:
      'Steeped for 18 hours and served over hand-cut ice. Chocolatey, smooth and zero bitterness.',
    image: unsplash('1517701550927-30cf4ba1dba5'),
  },
  {
    id: 'iced-caramel-latte',
    name: 'Iced Caramel Latte',
    price: 5.4,
    category: 'Iced',
    rating: 4.8,
    description:
      'Cold milk, house caramel and a double shot poured over ice. Summer in a cup, all year round.',
    image: unsplash('1461023058943-07fcbe16d735'),
  },
  {
    id: 'iced-matcha',
    name: 'Iced Matcha Cloud',
    price: 5.8,
    category: 'Iced',
    rating: 4.7,
    tag: 'New',
    description:
      'Ceremonial-grade matcha whisked to order, layered over creamy oat milk and ice.',
    image: unsplash('1515823064-d6e0c04616a7'),
  },
  {
    id: 'croissant',
    name: 'Butter Croissant',
    price: 3.8,
    category: 'Pastries',
    rating: 4.9,
    description:
      'Laminated for 48 hours and baked every morning. Shatteringly crisp, unapologetically all butter.',
    image: unsplash('1555507036-ab1f4038808a'),
  },
  {
    id: 'cinnamon-roll',
    name: 'Cinnamon Swirl Roll',
    price: 4.1,
    category: 'Pastries',
    rating: 4.8,
    description:
      'Brown-butter dough, Saigon cinnamon swirl and a cream-cheese glaze. Warm from the oven at 8 am.',
    image: unsplash('1509365465985-25d11c17e812'),
  },
  {
    id: 'banana-loaf',
    name: 'Banana Walnut Loaf',
    price: 4.3,
    category: 'Pastries',
    rating: 4.6,
    description:
      'Toasted and buttered, made with caramelized bananas and toasted walnuts. Grandma-approved.',
    image: unsplash('1509440159596-0249088772ff'),
  },
  {
    id: 'brownie',
    name: 'Belgian Chocolate Brownie',
    price: 4.2,
    category: 'Desserts',
    rating: 4.8,
    description:
      '70% Callebaut chocolate, a sea-salt top and a gooey center. Pairs dangerously well with espresso.',
    image: unsplash('1606313564200-e75d5e30476c'),
  },
  {
    id: 'cheesecake',
    name: 'New York Cheesecake',
    price: 5.5,
    category: 'Desserts',
    rating: 4.9,
    tag: 'Bestseller',
    description:
      'Slow-baked with real vanilla bean and a buttery biscuit base, topped with macerated berries.',
    image: unsplash('1524351199678-941a58a3df50'),
  },
]

export const bestsellers = [
  {
    rank: '#1',
    name: 'Caramel Macchiato',
    price: 5.2,
    sold: '1,900+ cups this month',
    description: 'Vanilla-kissed milk, bold espresso and a golden caramel drizzle.',
    image: unsplash('1534778101976-62847782c213'),
  },
  {
    rank: '#2',
    name: 'Cold Brew Reserve',
    price: 5.0,
    sold: '1,400+ cups this month',
    description: 'Steeped for 18 hours — chocolatey, smooth and zero bitterness.',
    image: unsplash('1517701550927-30cf4ba1dba5'),
  },
  {
    rank: '#3',
    name: 'New York Cheesecake',
    price: 5.5,
    sold: '900+ slices this month',
    description: 'Slow-baked with vanilla bean, topped with macerated berries.',
    image: unsplash('1524351199678-941a58a3df50'),
  },
]

export const offers = [
  {
    id: 'morning',
    icon: 'croissant',
    title: 'Morning Ritual Combo',
    description: 'Any handcrafted coffee plus a fresh butter croissant — weekdays before 11 am.',
    code: 'MORNING6',
    fine: 'Dine-in & takeaway',
    variant: 'gold',
  },
  {
    id: 'golden-hour',
    icon: 'clock',
    title: 'Golden Hour: 2 for 1',
    description: 'Bring a friend — every second iced latte is on us, weekdays 3–5 pm.',
    code: 'GOLDENHR',
    fine: 'Iced drinks only',
    variant: 'dark',
  },
  {
    id: 'rewards',
    icon: 'gift',
    title: 'Bliss Rewards Club',
    description: 'Every 10th drink free, double-stamp Tuesdays and a little birthday surprise.',
    code: 'JOIN FREE',
    fine: 'Ask at the counter',
    variant: 'cream',
  },
]

export const testimonials = [
  {
    name: 'Sophie Tran',
    role: 'Regular since 2019',
    initials: 'ST',
    rating: 5,
    quote:
      'The caramel macchiato genuinely ruined every other cafe for me. The team remembers my order by heart, the playlist is always perfect, and the window seats on a rainy morning? Unbeatable.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Daniel Reyes',
    role: 'Remote worker & cold brew loyalist',
    initials: 'DR',
    rating: 5,
    quote:
      'I have run three entire launches from the corner table by the counter. Fast Wi-Fi, endless outlets, and a cold brew so smooth it should be illegal. This place is my second office.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Maya Patel',
    role: 'Sunday regular',
    initials: 'MP',
    rating: 5,
    quote:
      'Watch the baristas work the pour-over bar and you will understand — this is craft, not a queue. Warm, plant-filled and somehow never rushed. My Sundays belong to Brew & Bliss.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
]

export const galleryImages = [
  {
    src: unsplash('1453614512568-c4024d13c247', 1200),
    caption: 'Weekend rush at the espresso bar',
    span: 'col-span-2 row-span-2',
  },
  {
    src: unsplash('1445116572660-236099ec97a0'),
    caption: 'Under the warm lights',
    span: '',
  },
  {
    src: unsplash('1497935586351-b67a49e012bf'),
    caption: 'Laptops & lattes',
    span: '',
  },
  {
    src: unsplash('1501339847302-ac426a4a7cbb', 1200),
    caption: 'The corner counter',
    span: 'md:col-span-2',
  },
  {
    src: unsplash('1498804103079-a6351b050096'),
    caption: 'Small-batch beans',
    span: '',
  },
  {
    src: unsplash('1544787219-7f47ccb76574'),
    caption: 'Our loose-leaf tea bar',
    span: '',
  },
  {
    src: unsplash('1559925393-8be0ec4767c8'),
    caption: 'Behind the bar',
    span: '',
  },
  {
    src: unsplash('1517433670267-08bbd4be890f'),
    caption: 'Fresh bakes, daily',
    span: '',
  },
]

export const heroImages = {
  main: unsplash('1495474472287-4d71bcdd2085', 1100),
  special: unsplash('1555507036-ab1f4038808a', 300),
}

export const aboutImages = {
  main: unsplash('1554118811-1e0d58224f24', 1100),
  overlay: unsplash('1511920170033-f8396924c348', 600),
}

export const contactInfo = {
  address: '128 Aroma Lane, Old Mill District, Portland, OR 97214',
  phone: '(503) 555-0187',
  email: 'hello@brewandbliss.cafe',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=128+Aroma+Lane+Old+Mill+District+Portland+OR',
}

export const openingHours = [
  { days: 'Monday – Friday', time: '7:00 am – 7:00 pm' },
  { days: 'Saturday', time: '8:00 am – 8:00 pm' },
  { days: 'Sunday', time: '8:00 am – 6:00 pm' },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook' },
  { label: 'X (Twitter)', href: 'https://x.com', icon: 'twitter' },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: 'youtube' },
]

export const marqueeItems = [
  'Single-Origin Beans',
  'Small-Batch Roasts',
  'Fresh Pastries Daily',
  'Cozy Study Corners',
  'Plant-Based Milks',
  'Local Honey & Syrups',
  'Pour-Over Brew Bar',
  'Free Wi-Fi & Outlets',
]

export const formatPrice = (value) => `$${value.toFixed(2)}`
