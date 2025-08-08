const featuredProducts = [
  {
    id: 1,
    name: "PulmoAir Max",
    description: "High-efficiency compressor nebulizer ideal for intensive respiratory therapy at home.",
    image: "/images/pulmo-home-bg.jpg",
    price: "349",
    inStock: true,
    category: "Home Care",
    specifications: `
      <ul>
        <li><strong>Power:</strong> 110V–240V</li>
        <li><strong>Nebulization Rate:</strong> 0.3 ml/min</li>
        <li><strong>Noise Level:</strong> ≤ 55 dB</li>
      </ul>
    `,
    features: `
      <ul>
        <li>✅ Low-noise motor for quiet operation</li>
        <li>🌀 Continuous airflow for faster relief</li>
        <li>💼 Travel-friendly compact design</li>
      </ul>
    `
  },
  {
    id: 2,
    name: "PulmoLite Mini",
    description: "Ultra-portable mesh nebulizer for kids and adults. Battery-operated for on-the-go use.",
    image: "/images/pulmo-home-bg.jpg",
    price: "229",
    category: "Home Care",
    inStock: false,
    specifications: `
      <ul>
        <li><strong>Battery:</strong> USB rechargeable</li>
        <li><strong>Weight:</strong> 120g</li>
        <li><strong>Dimensions:</strong> 4.2 x 2.3 x 1.8 in</li>
      </ul>
    `,
    features: `
      <ul>
        <li>🔋 Rechargeable and cordless</li>
        <li>👶 Safe for pediatric use</li>
        <li>🛡️ Auto shut-off for safety</li>
      </ul>
    `
  },
  {
    id: 3,
    name: "PulmoCare Plus",
    description: "Silent ultrasonic nebulizer built with modern technology for consistent particle delivery. Silent ultrasonic nebulizer built with modern technology for consistent particle delivery.Silent ultrasonic nebulizer built with modern technology for consistent particle delivery.Silent ultrasonic nebulizer built with modern technology for consistent particle delivery.",
    image: "/images/pulmo-home-bg.jpg",
    price: "279",
    category: "Home Care",
    inStock: true,
    specifications: `
      <ul>
        <li><strong>Tank Capacity:</strong> 10 ml</li>
        <li><strong>Particle Size:</strong> MMAD ≤ 5 μm</li>
        <li><strong>Warranty:</strong> 1 Year</li>
      </ul>
    `,
    features: `
      <ul>
        <li>🌬️ Micronized mist output</li>
        <li>🔇 Whisper-quiet tech</li>
        <li>🧼 Easy to clean and maintain</li>
      </ul>
    `
  },
  {
    id: 4,
    name: "AirFlex Neb Pro",
    description: "Advanced nebulizer with temperature control for sensitive airways and enhanced comfort.",
    image: "/images/pulmo-home-bg.jpg",
    price: "319",
    category: "Home Care",
    inStock: true,
    specifications: `
      <ul>
        <li><strong>Temp Control:</strong> Adjustable 3 levels</li>
        <li><strong>Chamber:</strong> Heat-resistant plastic</li>
        <li><strong>Run Time:</strong> 20 min continuous</li>
      </ul>
    `,
    features: `
      <ul>
        <li>🌡️ Temperature-controlled mist</li>
        <li>🛋️ Ergonomic mouthpiece</li>
        <li>📦 Comes with storage pouch</li>
      </ul>
    `
  },
  {
    id: 5,
    name: "BreatheEZ Turbo",
    description: "Heavy-duty compressor with rapid aerosol delivery for chronic respiratory conditions.",
    image: "/images/pulmo-home-bg.jpg",
    price: "399",
    inStock: false,
    category: "Home Care",
    specifications: `
      <ul>
        <li><strong>Flow Rate:</strong> ≥ 8 L/min</li>
        <li><strong>Power Supply:</strong> 230V AC</li>
        <li><strong>Size:</strong> 8 x 6 x 4 inches</li>
      </ul>
    `,
    features: `
      <ul>
        <li>🚀 High-speed medication delivery</li>
        <li>🧱 Durable for daily use</li>
        <li>🔌 Dual power mode (AC/DC)</li>
      </ul>
    `
  },
  {
    id: 6,
    name: "PulmoGo TravelMate",
    description: "Compact and stylish nebulizer designed for travelers and professionals with busy schedules.",
    image: "/images/pulmo-home-bg.jpg",
    price: "189",
    inStock: true,
    category: "Home Care",
    specifications: `
      <ul>
        <li><strong>Charging:</strong> USB Type-C</li>
        <li><strong>Battery Life:</strong> Up to 5 sessions</li>
        <li><strong>Case:</strong> Waterproof zip pouch</li>
      </ul>
    `,
    features: `
      <ul>
        <li>🧳 Travel-approved compact size</li>
        <li>🔋 Long-lasting battery</li>
        <li>💨 Quick mist technology</li>
      </ul>
    `
  },
];

export default featuredProducts;
