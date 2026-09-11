import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'nx-muga-01',
    name: 'Sualkuchi Royal Muga Silk Mekhela Sador',
    assameseName: 'সোণালী মুগা মেখেলা চাদৰ',
    category: 'Mekhela Sador',
    silkType: 'Muga Silk',
    price: 34500,
    originalPrice: 42000,
    rating: 4.9,
    reviewsCount: 48,
    badge: 'Rare Muga',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Natural Gold Muga', hex: '#D4AF37' },
      { name: 'Guna Antique Gold', hex: '#C5A059' },
      { name: 'Crimson Border', hex: '#9E2A2B' }
    ],
    sizes: ['Free Size (With Unstitched Blouse)', 'Pre-Stitched Pleats'],
    description: 'Woven from authentic GI-tagged wild Muga silk in Sualkuchi, the silk village of Assam. This regal Mekhela Sador features the iconic Kingkhap (royal Ahom crown) motif hand-brocaded in pure golden Guna zari. Muga silk is celebrated for its natural golden sheen which intensifies with every gentle wash.',
    motif: 'Kingkhap (Royal Ahom Dynasty Emblem) & Jaapi Border',
    origin: 'Sualkuchi Handloom Cluster, Kamrup, Assam',
    weaverArtisan: 'Master Weaver Pranab Kalita & Family',
    features: [
      '100% Pure Organic Muga Silk (Silk Mark Certified)',
      'Intricate Kingkhap & Kolka zari border work',
      'Includes Mekhela, Sador, and matching Blouse piece (80 cm)',
      'Naturally golden hue with no chemical dyes',
      'Hand-woven on traditional Jacquard throw-shuttle loom'
    ],
    careInstructions: [
      'Dry clean only for the first three cleans',
      'Wrap in pure unbleached muslin or cotton cloth',
      'Air periodically in indirect shaded sunlight'
    ],
    stylingTips: 'Pair with Assamese traditional heirloom jewellery like Jonbiri, Golpata, and Gamkharu for festive weddings or Bihu galas.',
    reviews: [
      {
        id: 'rev-1',
        author: 'Aradhana Hazarika',
        location: 'Guwahati, Assam',
        rating: 5,
        date: '3 days ago',
        comment: 'The sheen on this pure Muga is breathtaking. The Kingkhap motifs are woven with unbelievable precision. Nexora packaged it in a sustainable wooden box with the Silk Mark tag.',
        verified: true
      },
      {
        id: 'rev-2',
        author: 'Meenakshi Sharma',
        location: 'Bengaluru, Karnataka',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Ordered this for my daughter’s wedding reception. True heirloom quality piece! Everyone asked where I bought this Assamese Mekhela Sador.',
        verified: true
      }
    ],
    inStock: true,
    isTrending: true,
    isFeatured: true
  },
  {
    id: 'nx-paat-02',
    name: 'Mulberry Paat Silk Banarasi-Loom Saree',
    assameseName: 'পাট ৰেচমৰ সুন্দৰ শাৰী',
    category: 'Sarees',
    silkType: 'Paat Silk',
    price: 18900,
    originalPrice: 24500,
    rating: 4.8,
    reviewsCount: 36,
    badge: 'Best Seller',
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Ivory Cream & Red', hex: '#FDFBF7' },
      { name: 'Peacock Teal', hex: '#005F73' },
      { name: 'Rani Magenta', hex: '#9B1D4F' }
    ],
    sizes: ['Standard 6.3m (Includes Blouse)'],
    description: 'A tribute to classic Assamese Mulberry Paat silk crafted into an opulent 6-yard saree. Features shimmering silver & gold Guna floral vines with vibrant Mina (enamel) thread embellishments inspired by the flora of the Brahmaputra valley.',
    motif: 'Mayur (Peacock) & Buta Weave with Crimson Mina',
    origin: 'Sualkuchi, Assam',
    weaverArtisan: 'Nilima Medhi Handlooms',
    features: [
      'Grade-A Mulberry Paat Silk with crisp royal fall',
      'Silk Mark Certified authenticity card included',
      'Rich contrast Pallu with intricate feather motifs',
      'Complimentary falls and edging (picot) service available'
    ],
    careInstructions: [
      'Professional dry cleaning recommended',
      'Do not spray perfume directly onto silk fabric',
      'Iron on low-silk setting with a protective cotton layer'
    ],
    stylingTips: 'Drape in traditional Nivi style or contemporary front-pleat drape, complemented by temple gold earrings and a fresh jasmine gajra.',
    reviews: [
      {
        id: 'rev-3',
        author: 'Debolina Goswami',
        location: 'Kolkata, West Bengal',
        rating: 5,
        date: '1 week ago',
        comment: 'Pure Paat silk is so light yet feels so rich. The mina work in green and red on the ivory body stands out elegantly.',
        verified: true
      }
    ],
    inStock: true,
    isTrending: true,
    isFeatured: true
  },
  {
    id: 'nx-riha-03',
    name: 'Heirloom Handwoven Ceremonial Riha',
    assameseName: 'পৰম্পৰাগত পাট ৰিহা',
    category: 'Riha',
    silkType: 'Paat Silk',
    price: 8400,
    originalPrice: 11000,
    rating: 4.9,
    reviewsCount: 29,
    badge: 'Silk Mark Certified',
    images: [
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Kesa Paat Natural Ivory', hex: '#F7F4EA' },
      { name: 'Ruby Vermillion Border', hex: '#931621' },
      { name: 'Emerald Forest Green', hex: '#1B4332' }
    ],
    sizes: ['Standard Traditional Length (2.5m x 0.6m)'],
    description: 'The Riha is the soulful signature of Assamese feminine attire, traditionally wrapped around the torso above the Mekhela and draped across the shoulder. Handcrafted on century-old frame looms with delicate Kesa Paat raw silk, finished with hand-knotted Guna tassels.',
    motif: 'Ahom Floral Creeper & Geometric Karbi Border',
    origin: 'Dhemaji & Sualkuchi Artisan Co-operative',
    weaverArtisan: 'Kalyani Saikia Heritage Weaves',
    features: [
      'Featherlight raw Paat silk handloom weave',
      'Authentic ceremonial Riha drape for weddings & Rongali Bihu',
      'Can be styled as a luxury ethnic stole over jackets & sarees',
      'Artisanal fringed pallu with gold thread hand-twisting'
    ],
    careInstructions: [
      'Hand wash gently in cold water with mild silk soap or dry clean',
      'Never wring or twist; flat dry in shade'
    ],
    stylingTips: 'Wear tucked cleanly into your Mekhela waist or drape fluidly over an Eri silk blazer for an Indo-Western fusion look.',
    reviews: [
      {
        id: 'rev-4',
        author: 'Priyanka Borbora',
        location: 'Mumbai, Maharashtra',
        rating: 5,
        date: '5 days ago',
        comment: 'Finding an authentic high-quality Riha outside Assam was impossible until Nexora! The raw silk touch and tassel finish are so refined.',
        verified: true
      }
    ],
    inStock: true,
    isTrending: true
  },
  {
    id: 'nx-jacket-04',
    name: 'Ahimsa Eri Silk Handloom Mandarin Jacket',
    assameseName: 'এৰি ৰেচমৰ হেণ্ডিক্ৰাফ্ট জেকেট',
    category: 'Jackets & Blazers',
    silkType: 'Eri Silk',
    price: 12500,
    originalPrice: 16000,
    rating: 4.8,
    reviewsCount: 42,
    badge: 'Just In',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Natural Warm Khaki', hex: '#C2B299' },
      { name: 'Smoked Charcoal', hex: '#343A40' },
      { name: 'Olive Green', hex: '#556B2F' }
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)'],
    description: 'Eri Silk—famed as Ahimsa or Peace Silk because the moth leaves the cocoon safely before spinning. Spun by hand and tailored into a contemporary structured Mandarin Nehru jacket with antique brass buttons, hand-stitched pockets, and an Assamese Gamusa woven inner collar accent.',
    motif: 'Textured Ribbed Slub with Subtle Gamusa Red Piping',
    origin: 'Kokrajhar & Boko Eri Silk Clusters, Assam',
    weaverArtisan: 'Bodo Handloom Weavers Collective',
    features: [
      '100% Cruelty-Free Ahimsa Eri Silk',
      'Thermal balancing fabric: insulating in cold, breathable in heat',
      'Handcrafted antique brass buttons with embossed motif',
      'Internal smartphone pocket and breathable viscose lining'
    ],
    careInstructions: [
      'Dry clean recommended to preserve tailored silhouette',
      'Store in cotton garment bag on wide wooden hanger'
    ],
    stylingTips: 'Layer over a crisp white linen shirt or silk kurta for formal dinners, winter galas, and art receptions.',
    reviews: [
      {
        id: 'rev-5',
        author: 'Raktim Barua',
        location: 'New Delhi',
        rating: 5,
        date: '2 weeks ago',
        comment: 'The texture of genuine Eri silk is unbeatable. It has the weight of fine linen with the thermal richness of cashmere. Outstanding tailoring.',
        verified: true
      }
    ],
    inStock: true,
    isTrending: true,
    isFeatured: true
  },
  {
    id: 'nx-bridal-05',
    name: 'Imperial Crimson & Gold Bridal Mekhela Sador Set',
    assameseName: 'বিয়াৰ ৰঙা আৰু সোণালী মেখেলা চাদৰ',
    category: 'Bridal & Heritage',
    silkType: 'Paat Silk',
    price: 46000,
    originalPrice: 55000,
    rating: 5.0,
    reviewsCount: 31,
    badge: 'Handloom Heritage',
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Ahom Royal Red', hex: '#8B0000' },
      { name: 'Bridal Sindoor Orange-Red', hex: '#C83200' }
    ],
    sizes: ['Free Size (Includes Riha & Heavy Blouse Piece)'],
    description: 'The crowning jewel of Assamese bridal couture. Spun from double-warp Mulberry Paat silk dyed in deep royal crimson, laden with all-over heavy gold Guna Kingkhap embroidery. Complete 4-piece set including Mekhela (skirt drape), Sador (top drape), ceremonial Riha, and embroidered blouse fabric.',
    motif: 'Grand Kingkhap, Junbiri & Lotus Kolka Weave',
    origin: 'Master Weavers of Sualkuchi, Assam',
    weaverArtisan: 'Dipak Das Master Loom Atelier',
    features: [
      'Complete 4-piece Assamese bridal trousseau',
      'Heavy 100% pure gold zari brocade work',
      'Takes 45 days of painstaking manual handloom weaving',
      'Presented in a velvet-lined heritage keepsake trunk'
    ],
    careInstructions: [
      'Strictly dry clean with master silk specialists',
      'Never hang long-term; store flat folded in muslin with silica gel'
    ],
    stylingTips: 'Accessorize with traditional Mukuta necklace, Dholbiri, Lokaparo earrings, and fresh red vermillion.',
    reviews: [
      {
        id: 'rev-6',
        author: 'Ananya Dutta Borah',
        location: 'Jorhat, Assam',
        rating: 5,
        date: '1 month ago',
        comment: 'This was my dream bridal outfit. The weight of the silk, the perfection of the gold weave, and the included Riha made me feel like an Ahom queen on my wedding day!',
        verified: true
      }
    ],
    inStock: true,
    isTrending: false,
    isFeatured: true
  },
  {
    id: 'nx-jacket-06',
    name: 'Contemporary Eri Silk Structured Women\'s Blazer',
    assameseName: 'আধুনিক এৰি চিল্ক ব্লেজাৰ',
    category: 'Jackets & Blazers',
    silkType: 'Eri Silk',
    price: 14800,
    originalPrice: 19500,
    rating: 4.9,
    reviewsCount: 19,
    badge: 'Just In',
    images: [
      'https://images.unsplash.com/photo-1548624149-f9b1859aa9d0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Oatmeal Natural Silk', hex: '#D8CAB8' },
      { name: 'Earthy Terracotta', hex: '#A85744' },
      { name: 'Ebony Black', hex: '#222222' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Bridging timeless Assamese handspun Eri silk with modern runway tailoring. Single-breasted silhouette with sharp peaked lapels, natural horn buttons, and subtle micro-checks woven on traditional village looms.',
    motif: 'Subtle Herringbone Handloom Weave',
    origin: 'Raha Handloom Cluster, Nagaon, Assam',
    weaverArtisan: 'Women Weavers Self-Help Society',
    features: [
      '100% Organic Hand-reeled Ahimsa Eri Silk',
      'Modern sharp tailored fit with soft shoulder pads',
      'Eco-friendly low-impact natural herbal dyes',
      'Dual flap pockets and welt breast pocket'
    ],
    careInstructions: [
      'Dry clean only',
      'Steam iron on medium heat'
    ],
    stylingTips: 'Style over a pleated Paat silk saree or pair with tailored trousers and heels for boardrooms and international conferences.',
    reviews: [
      {
        id: 'rev-7',
        author: 'Dr. Sunita Phukan',
        location: 'London, UK',
        rating: 5,
        date: '3 weeks ago',
        comment: 'I wore this to a diplomatic summit in Europe. Received endless compliments! Proud to showcase Assamese Eri silk on a global stage.',
        verified: true
      }
    ],
    inStock: true,
    isTrending: true
  },
  {
    id: 'nx-men-07',
    name: 'Raw Eri Silk Kurta & Muga Trim Ensemble',
    assameseName: 'পুৰুষৰ এৰি চিল্ক কুৰ্তা আৰু চুৰীদাৰ',
    category: 'Men\'s Ethnic',
    silkType: 'Eri Silk',
    price: 9800,
    originalPrice: 13200,
    rating: 4.7,
    reviewsCount: 22,
    badge: 'Best Seller',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Ivory Natural Slub', hex: '#F4EFE6' },
      { name: 'Royal Navy', hex: '#1D2A44' },
      { name: 'Deep Burgundy', hex: '#581845' }
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)'],
    description: 'Handcrafted men\'s long kurta woven with hand-spun coarse Eri silk for a breathable, majestic drape. Features golden Muga silk piping along the mandarin placket and cuffs, paired with matched tapered pants and a miniature woven Gamusa pocket square.',
    motif: 'Assamese Jaapi & Floral Placket Embroidery',
    origin: 'Barpeta & Sualkuchi, Assam',
    weaverArtisan: 'Dhiren Das Heritage Looms',
    features: [
      'Handspun organic Eri silk body',
      'Accent piping in pure Sualkuchi Muga silk',
      'Breathable, moisture-wicking and comfortable in any climate',
      'Concealed placket with genuine mother-of-pearl buttons'
    ],
    careInstructions: [
      'Gentle hand wash with mild detergent or dry clean',
      'Iron when slightly damp for crisp handloom finish'
    ],
    stylingTips: 'Complete the look with an Assamese Phulam Gamusa or Eri shawl draped across one shoulder and leather mojris.',
    reviews: [
      {
        id: 'rev-8',
        author: 'Gaurav Bezbaruah',
        location: 'Pune, Maharashtra',
        rating: 5,
        date: '1 week ago',
        comment: 'Outstanding quality and fit! The feel of natural Eri silk is far superior to standard commercial silks.',
        verified: true
      }
    ],
    inStock: true,
    isTrending: false
  },
  {
    id: 'nx-saree-08',
    name: 'Pastel Mint Handwoven Kesa Paat Saree',
    assameseName: 'কেঁচা পাটৰ সুন্দৰ শাৰী',
    category: 'Sarees',
    silkType: 'Kesa Paat',
    price: 15600,
    originalPrice: 20500,
    rating: 4.8,
    reviewsCount: 34,
    badge: 'Just In',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Pastel Mint Green', hex: '#D1E7DD' },
      { name: 'Powder Blush Pink', hex: '#FAD2E1' },
      { name: 'Lilac Whisper', hex: '#E2D4F0' }
    ],
    sizes: ['Standard 6.3m (Includes Blouse)'],
    description: 'Crafted with Kesa Paat (raw unboiled Mulberry silk), this ethereal saree has a crisp, translucent organza-like drape. Woven with delicate silver Guna motifs depicting dancing cranes and lotus blossoms along the Brahmaputra wetlands.',
    motif: 'Padma (Lotus) & Silver Guna Pari Border',
    origin: 'Sualkuchi, Assam',
    weaverArtisan: 'Chitra Weaving Cluster',
    features: [
      'Raw Kesa Paat silk with modern pastel sheen',
      'Ultra-lightweight yet structured drape',
      'Silver zari pallu with delicate hand-knotted borders',
      'Includes unstitched designer blouse fabric'
    ],
    careInstructions: [
      'Dry clean only',
      'Do not iron directly on silver zari work'
    ],
    stylingTips: 'Pair with pearl choker and silver filigree jewellery for daytime festive celebrations, baby showers, or summer soirees.',
    reviews: [
      {
        id: 'rev-9',
        author: 'Barnali Kakati',
        location: 'Hyderabad, Telangana',
        rating: 5,
        date: '4 days ago',
        comment: 'So lightweight and breathable! The pastel mint shade looks regal in daylight photography.',
        verified: true
      }
    ],
    inStock: true,
    isTrending: true
  },
  {
    id: 'nx-riha-09',
    name: 'Artisan Muga & Paat Dual-Tone Royal Riha',
    assameseName: 'মুগা আৰু পাটৰ ৰয়েল ৰিহা',
    category: 'Riha',
    silkType: 'Muga Silk',
    price: 10800,
    originalPrice: 14500,
    rating: 5.0,
    reviewsCount: 17,
    badge: 'Rare Muga',
    images: [
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Dual Gold & Deep Ruby', hex: '#B33939' },
      { name: 'Gold & Midnight Indigo', hex: '#192A56' }
    ],
    sizes: ['Ceremonial Stole Size (2.6m x 0.65m)'],
    description: 'A masterpiece created by interweaving natural Muga silk in the warp with dyed red Paat silk in the weft, producing an iridescent dual-tone glow known in Assamese weaving as "Dhoop-Chhaon". Framed by intricate Kingkhap border motifs in real gold Guna.',
    motif: 'Ahom Kingkhap & Traditional Bihu Dhol Weave',
    origin: 'Sualkuchi Weavers Guild',
    weaverArtisan: 'Pranita & Bipul Das',
    features: [
      'Warp of pure Muga silk, Weft of fine Paat silk',
      'Iridescent color shift under evening lighting',
      'Hand-braided tassels at both extremities',
      'Silk Mark authorized hologram affixed'
    ],
    careInstructions: [
      'Specialist dry clean only',
      'Store in provided breathable cotton bag'
    ],
    stylingTips: 'Wear as a regal waist sash with Mekhela Sador, or style as an evening opera scarf over a black tuxedo jacket or gown.',
    reviews: [
      {
        id: 'rev-10',
        author: 'Pallavi Chaliha',
        location: 'Delhi NCR',
        rating: 5,
        date: '2 weeks ago',
        comment: 'The shimmer when light hits this Riha is spellbinding. Pure artisanal craftsmanship at its finest!',
        verified: true
      }
    ],
    inStock: true,
    isTrending: false
  },
  {
    id: 'nx-jacket-10',
    name: 'Bodo Motif Handwoven Eri Silk Tuxedo Jacket',
    assameseName: 'বড়ো মটিফ এৰি চিল্ক জেকেট',
    category: 'Jackets & Blazers',
    silkType: 'Eri Silk',
    price: 16500,
    originalPrice: 22000,
    rating: 4.9,
    reviewsCount: 25,
    badge: 'Handloom Heritage',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548624149-f9b1859aa9d0?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Midnight Onyx & Gold', hex: '#1A1A1A' },
      { name: 'Imperial Prussian Blue', hex: '#003153' }
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)'],
    description: 'A black-tie statement piece merging indigenous Bodo floral geometric motifs (Daudwi and Phool) handwoven on pure Eri silk with a modern slim-fit satin shawl lapel. Represents ethical luxury and tribal weaving heritage.',
    motif: 'Tribal Daudwi & Hajw (Mountain Peak) Weave',
    origin: 'Bodoland Territorial Region, Assam',
    weaverArtisan: 'Bodoland Weavers Craft Trust',
    features: [
      'Heritage Eri silk body with satin shawl collar',
      'Custom engraved metal shank buttons',
      'Structured tailoring with horsehair canvas chest piece',
      'Celebrates indigenous North-East tribal craftsmanship'
    ],
    careInstructions: [
      'Dry clean only by luxury suit cleaners',
      'Do not machine spin or bleach'
    ],
    stylingTips: 'Pair with slim black trousers, crisp white pleated tuxedo shirt, and velvet slip-on shoes for red carpet events.',
    reviews: [
      {
        id: 'rev-11',
        author: 'Vikramjit Bora',
        location: 'Guwahati, Assam',
        rating: 5,
        date: '1 week ago',
        comment: 'Wearing this to our company gala was the best decision. The texture and tribal weave make it look ten times more prestigious than designer suits.',
        verified: true
      }
    ],
    inStock: true,
    isTrending: true,
    isFeatured: true
  },
  {
    id: 'nx-mekhela-11',
    name: 'Teal & Copper Zari Bridal Paat Mekhela Sador',
    assameseName: 'ময়ূৰকণ্ঠী পাটৰ মেখেলা চাদৰ',
    category: 'Mekhela Sador',
    silkType: 'Paat Silk',
    price: 28500,
    originalPrice: 35000,
    rating: 4.9,
    reviewsCount: 39,
    badge: 'Best Seller',
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Peacock Mayurkanthi Teal', hex: '#005F73' },
      { name: 'Royal Emerald Green', hex: '#0A5C36' }
    ],
    sizes: ['Free Size (Includes Blouse)'],
    description: 'Woven in the legendary "Mayurkanthi" (peacock feather throat) dual shade that gently shifts from sapphire blue to emerald green depending on the light. Accentuated with copper and gold Guna brocade in traditional Jaapi (Assamese conical hat) and Kaziranga motifs.',
    motif: 'Jaapi & Kaziranga Wildlife Silhouette Motif',
    origin: 'Sualkuchi, Assam',
    weaverArtisan: 'Gautam Baishya Master Weaver',
    features: [
      'Double ply Mulberry Paat silk',
      'Heavy copper Guna pallu work',
      'Rich contrast blouse piece with sleeve border',
      'Certified Handloom Mark product'
    ],
    careInstructions: [
      'Dry clean only',
      'Store wrapped in clean white cotton fabric'
    ],
    stylingTips: 'Pair with Assamese traditional Dholbiri and Lokaparo neckpieces for Bihu celebrations and marriage functions.',
    reviews: [
      {
        id: 'rev-12',
        author: 'Sangeeta Barman',
        location: 'Tezpur, Assam',
        rating: 5,
        date: '2 weeks ago',
        comment: 'The Mayurkanthi color is out of this world! Photos do not do justice to how rich it looks in person.',
        verified: true
      }
    ],
    inStock: true,
    isTrending: true
  },
  {
    id: 'nx-men-12',
    name: 'Sualkuchi Muga Silk Festive Waistcoat (Nehru Jacket)',
    assameseName: 'সোণালী মুগা নেহৰু জেকেট',
    category: 'Men\'s Ethnic',
    silkType: 'Muga Silk',
    price: 15200,
    originalPrice: 19800,
    rating: 4.9,
    reviewsCount: 18,
    badge: 'Rare Muga',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Pure Muga Gold', hex: '#D4AF37' },
      { name: 'Muga & Black Guna Weave', hex: '#2C2A29' }
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)'],
    description: 'Crafted from pure golden Muga silk, this sleeveless Nehru waistcoat is the ultimate signature of North-Eastern refinement. Features subtle tone-on-tone Kingkhap jacquard weaves, a sharp mandarin band collar, and silk-wrapped buttons.',
    motif: 'Tone-on-Tone Kingkhap Jacquard Weave',
    origin: 'Sualkuchi, Assam',
    weaverArtisan: 'Pranab Kalita Looms',
    features: [
      '100% Sualkuchi Certified Golden Muga Silk',
      'Classic sleeveless Nehru jacket silhouette',
      'Comfortable breathable cotton-silk inner lining',
      'Traditional welt breast pocket with built-in Gamusa accent'
    ],
    careInstructions: [
      'Dry clean only',
      'Store in fabric garment bag'
    ],
    stylingTips: 'Wear over an ivory or raw Eri silk kurta with churidar, or pair over a formal crisp white collared shirt.',
    reviews: [
      {
        id: 'rev-13',
        author: 'Nayanmoni Saikia',
        location: 'Guwahati, Assam',
        rating: 5,
        date: '5 days ago',
        comment: 'Pure Muga gives off a natural glow that no synthetic fabric can ever match. The fit is tailored to perfection.',
        verified: true
      }
    ],
    inStock: true,
    isTrending: false,
    isFeatured: true
  }
];

export const CATEGORY_FILTERS: { id: string; label: string; count: number; iconName: string; assamese: string }[] = [
  { id: 'All', label: 'All Heritage Pieces', count: PRODUCTS.length, iconName: 'Sparkles', assamese: 'সকলো' },
  { id: 'Mekhela Sador', label: 'Mekhela Sador', count: PRODUCTS.filter(p => p.category === 'Mekhela Sador').length, iconName: 'Layers', assamese: 'মেখেলা চাদৰ' },
  { id: 'Sarees', label: 'Paat & Muga Sarees', count: PRODUCTS.filter(p => p.category === 'Sarees').length, iconName: 'Sparkle', assamese: 'শাৰী' },
  { id: 'Riha', label: 'Ceremonial Riha & Stoles', count: PRODUCTS.filter(p => p.category === 'Riha').length, iconName: 'Feather', assamese: 'ৰিহা' },
  { id: 'Jackets & Blazers', label: 'Eri Silk Jackets & Blazers', count: PRODUCTS.filter(p => p.category === 'Jackets & Blazers').length, iconName: 'Shield', assamese: 'জেকেট' },
  { id: 'Men\'s Ethnic', label: 'Men\'s Kurtas & Ensembles', count: PRODUCTS.filter(p => p.category === 'Men\'s Ethnic').length, iconName: 'User', assamese: 'পুৰুষৰ পোচাক' },
  { id: 'Bridal & Heritage', label: 'Bridal Trousseau', count: PRODUCTS.filter(p => p.category === 'Bridal & Heritage').length, iconName: 'Crown', assamese: 'বিয়াৰ পোচাক' }
];

export const SILK_VARIETIES = [
  {
    name: 'Muga Silk',
    title: 'The Golden Thread of Assam',
    assameseTitle: 'সোণালী মুগা ৰেচম',
    badge: 'GI Tagged • Rare Heirloom',
    description: 'Found exclusively in the Brahmaputra Valley of Assam, Muga silkworms feed on Som and Sualu leaves. It produces a rich golden yellow silk that never fades—gaining extra luster with every gentle wash.',
    luster: 'Permanent Metallic Golden Sheen',
    origin: 'Brahmaputra Valley & Sualkuchi',
    rarity: 'Extremely Rare (Less than 1% of world silk)',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Paat Silk (Mulberry)',
    title: 'Glossy Ivory & Jewel Royalty',
    assameseTitle: 'পাৰম্পৰিক পাট ৰেচম',
    badge: 'Mulberry Silk Mark',
    description: 'Spun from domestic silkworms feeding on mulberry leaves, Assamese Paat silk is renowned for its crispness, brilliant white base, and ability to hold vibrant botanical and jewel dyes alongside gold Guna brocade.',
    luster: 'Silky White Pearl Finish',
    origin: 'Sualkuchi, Kamrup District',
    rarity: 'High Prestige Wedding Staple',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Eri Silk (Ahimsa Silk)',
    title: 'The Peace Silk of Assam',
    assameseTitle: 'অহিংস এৰি ৰেচম',
    badge: 'Cruelty-Free • Thermal Luxe',
    description: 'Known as "Endi" or "Erra", Eri silk is spun after the moth naturally leaves its cocoon without harm. It possesses the thermal qualities of fine wool and the gentle breathability of handloom linen.',
    luster: 'Subtle Matte Texture with Rich Slub',
    origin: 'Boko, Kokrajhar & Karbi Anglong',
    rarity: 'Eco-Luxury Certified Cruelty-Free',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  }
];

export const LOOKBOOK_DATA = {
  title: 'Autumn Royal Lookbook',
  subtitle: 'The Sualkuchi Courtyard Edition',
  description: 'Hover or tap over the glowing pins to discover the exact handcrafted Assamese ethnic pieces featured in this heritage photoshoot.',
  image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1600&q=80',
  hotspots: [
    {
      id: 'hs-1',
      productId: 'nx-riha-03',
      xPercent: 48,
      yPercent: 36,
      title: 'Handwoven Ceremonial Riha',
      role: 'Upper Torso & Shoulder Drape'
    },
    {
      id: 'hs-2',
      productId: 'nx-muga-01',
      xPercent: 54,
      yPercent: 68,
      title: 'Royal Muga Mekhela Sador',
      role: 'Lower Skirt & Pleated Pallu'
    },
    {
      id: 'hs-3',
      productId: 'nx-jacket-06',
      xPercent: 32,
      yPercent: 46,
      title: 'Eri Silk Structured Blazer',
      role: 'Contemporary Layering'
    }
  ]
};
