const featuredProducts = [
  {
    id: 1,
    name: "Lumis 150",
    description:
      "Advanced non-invasive ventilator for chronic respiratory conditions with multiple ventilation modes, integrated humidifier, and intelligent synchrony features for optimal comfort and effectiveness.",
    image: "/images/products/resmed-lumis-150.webp", // Update with actual image path
    price: "9,300.00",
    inStock: true,
    category: "BiPAP",
    categorySlug: "bipap",
    specifications: `
    <ul>
      <li><strong>Modes:</strong> CPAP, S, T, ST, iVAPS, PAC</li>
      <li><strong>Pressure Range:</strong> EPAP 4–25 cm H₂O; IPAP up to 30 cm H₂O</li>
      <li><strong>Sound Level:</strong> ~27 dBA</li>
      <li><strong>Display:</strong> Color LCD screen</li>
      <li><strong>Humidifier Capacity:</strong> 380 mL</li>
      <li><strong>Dimensions:</strong> 15.3 cm (H) × 25.5 cm (L) × 11.6 cm (W)</li>
      <li><strong>Weight:</strong> ~1.25 kg (without humidifier)</li>
      <li><strong>Power Supply:</strong> 100–240V AC, 50–60Hz</li>
      <li><strong>Connectivity:</strong> SD card, built-in wireless module for AirView</li>
      <li><strong>Warranty:</strong> 2 Years</li>
    </ul>
  `,
    features: `
    <ul>
      <li>🔄 Multiple ventilation modes including ST, T, S, iVAPS, and CPAP</li>
      <li>📈 iVAPS adapts pressure support to patient needs</li>
      <li>⚙️ TiControl & trigger sensitivity for improved synchrony</li>
      <li>💧 Integrated heated humidifier for enhanced comfort</li>
      <li>🌡️ Climate control with ClimateLineAir heated tubing</li>
      <li>📊 Comprehensive data monitoring via SD card or AirView</li>
      <li>🌙 Ramp and comfort settings for easier therapy initiation</li>
      <li>🔇 Quiet operation for minimal disturbance</li>
    </ul>
  `,
  },
  {
    id: 2,
    name: "ResMed AirCurve 10 VAuto",
    description:
      "Advanced BiPAP device with auto-adjusting inspiratory and expiratory pressures, integrated humidifier, and intelligent comfort features for optimal respiratory therapy.",
    image: "/images/products/aircurve.jpg", // Update with actual image path
    price: "7,300.00",
    inStock: true,
    category: "BiPAP",
    categorySlug: "bipap",
    specifications: `
    <ul>
      <li><strong>Modes:</strong> VAuto, CPAP</li>
      <li><strong>Pressure Range:</strong> EPAP 4–25 cm H₂O; IPAP up to 25 cm H₂O</li>
      <li><strong>Sound Level:</strong> ~27 dBA</li>
      <li><strong>Display:</strong> Color LCD screen with intuitive menu</li>
      <li><strong>Humidifier Capacity:</strong> 380 mL</li>
      <li><strong>Dimensions:</strong> 15.3 cm (H) × 25.5 cm (L) × 11.6 cm (W)</li>
      <li><strong>Weight:</strong> ~1.25 kg (without humidifier)</li>
      <li><strong>Power Supply:</strong> 100–240V AC, 50–60Hz</li>
      <li><strong>Connectivity:</strong> SD card, built-in wireless module for AirView</li>
      <li><strong>Warranty:</strong> 2 Years</li>
    </ul>
  `,
    features: `
    <ul>
      <li>⚙️ VAuto mode auto-adjusts IPAP and EPAP for comfort and stability</li>
      <li>💧 Integrated heated humidifier reduces dryness</li>
      <li>🌬️ Easy-Breathe technology for a natural breathing feel</li>
      <li>🔄 TiControl & adjustable trigger sensitivity for improved synchrony</li>
      <li>🚀 SmartStart/SmartStop for automatic therapy start/stop</li>
      <li>🫁 Expiratory Pressure Relief (EPR) for easier exhalation</li>
      <li>📡 AirView connectivity for remote monitoring</li>
      <li>🔇 Quiet operation for undisturbed sleep</li>
    </ul>
  `,
  },
  {
    id: 3,
    name: "Philips Respironics BiPAP S/T",
    description:
      "Non-invasive BiPAP device with timed backup rate for chronic respiratory insufficiency, delivering reliable ventilation support with advanced comfort and monitoring features.",
    image: "/images/products/philips-bipap-st.jpg", // Update with actual image path
    price: "9,700.00",
    inStock: true,
    category: "BiPAP",
    categorySlug: "bipap",
    specifications: `
    <ul>
      <li><strong>Modes:</strong> S, T, ST</li>
      <li><strong>Pressure Range:</strong> IPAP 4–25 cm H₂O; EPAP 4–25 cm H₂O</li>
      <li><strong>Breath Rate:</strong> 0–30 BPM</li>
      <li><strong>Rise Time:</strong> Adjustable (1–6 settings)</li>
      <li><strong>Trigger & Cycle Sensitivity:</strong> Adjustable</li>
      <li><strong>Ramp Time:</strong> 0–45 minutes</li>
      <li><strong>Sound Level:</strong> ~30 dBA</li>
      <li><strong>Dimensions:</strong> 18 cm (H) × 14 cm (W) × 21 cm (D) (approx.)</li>
      <li><strong>Weight:</strong> ~1.36 kg</li>
      <li><strong>Power Supply:</strong> 100–240V AC, 50–60Hz</li>
      <li><strong>Connectivity:</strong> SD card, optional modem for remote monitoring</li>
      <li><strong>Warranty:</strong> 2 Years</li>
    </ul>
  `,
    features: `
    <ul>
      <li>🫁 Bilevel pressure with timed backup ensures minimum breath rate</li>
      <li>⚡ Digital Auto-Trak sensitivity adapts to patient breathing patterns</li>
      <li>📈 Adjustable rise time for inhalation comfort</li>
      <li>🚀 Ramp feature for gradual pressure increase</li>
      <li>🔔 Integrated alarms for safety</li>
      <li>💧 Heated humidification option reduces dryness</li>
      <li>🔇 Quiet operation for better sleep</li>
      <li>🖥️ Simple, user-friendly interface</li>
    </ul>
  `,
  },
  {
    id: 5,
    name: "Inogen Rove 6",
    description:
      "Portable oxygen concentrator with 6 flow settings, extended battery options, and quiet operation, designed for maximum flexibility and ease of use for active oxygen therapy patients.",
    image: "/images/products/inogen-rove-6.webp", // Update with actual image path
    price: "11,800.00",
    inStock: true,
    category: "Portable Oxygen",
    categorySlug: "portable-oxygen",
    specifications: `
    <ul>
      <li><strong>Oxygen Flow:</strong> Pulse dose delivery system, 6 flow settings (1–6)</li>
      <li><strong>Oxygen Output:</strong> Up to 1,260 mL/min of medical-grade oxygen</li>
      <li><strong>Weight:</strong> 2.2 kg (4.8 lbs) with single battery; 2.6 kg (5.8 lbs) with extended-life battery</li>
      <li><strong>Dimensions:</strong> 18.3 cm (L) × 8.3 cm (W) × 20.5 cm (H)</li>
      <li><strong>Noise Level:</strong> 39 dBA (quieter than an average library on setting 2)</li>
      <li><strong>Battery Life:</strong> Single battery up to 6.25 hours; double battery up to 12.75 hours</li>
      <li><strong>Power Supply:</strong> AC 100–240V, 50–60Hz (auto-sensing for worldwide use)</li>
      <li><strong>Display:</strong> Bright, easy-to-read LCD</li>
      <li><strong>FAA Approved:</strong> Yes, for in-flight use</li>
      <li><strong>Warranty:</strong> 2 Years</li>
    </ul>
  `,
    features: `
    <ul>
      <li>💨 Six flow settings delivering up to 1,260 mL/min oxygen</li>
      <li>🔋 Optional extended battery for over 12 hours runtime</li>
      <li>⚖️ Lightweight design (only 2.2 kg with single battery)</li>
      <li>🔇 Quieter than an average library on setting 2</li>
      <li>🔧 Easy maintenance with user-replaceable sieve beds</li>
      <li>📟 Bright LCD and high-contrast control buttons</li>
      <li>🔊 Improved speaker for audible signals</li>
      <li>🛫 FAA-approved for air travel</li>
      <li>⏱ Capable of continuous daily use (24/7)</li>
    </ul>
  `,
  },

  {
    id: 6,
    name: "SimplyGo Mini",
    description:
      "A lightweight, stylish portable oxygen concentrator with pulse-dose delivery, extended battery options, and FAA approval, designed for active oxygen therapy users on the go.",
    image: "/images/products/simply-go-mini.webp", // Update with actual image path
    price: "12,900.00",
    inStock: true,
    category: "Portable Oxygen",
    categorySlug: "portable-oxygen",
    specifications: `
    <ul>
      <li><strong>Weight:</strong> 2.7 kg (with extended battery); 2.2 kg (with lightweight battery)</li>
      <li><strong>Dimensions:</strong> 8.3" (W) × 9.4–10.2" (L) × 3.6" (D)</li>
      <li><strong>Oxygen Output:</strong> Up to 1,000 mL/min (pulse flow)</li>
      <li><strong>Oxygen Concentration:</strong> 87–96%</li>
      <li><strong>Outlet Pressure:</strong> 20 psig</li>
      <li><strong>Noise Level:</strong> >43 dBA (setting 2), >46 dBA (setting 5)</li>
      <li><strong>Battery Duration:</strong> Standard – up to 4.5 hours; Extended – up to 9 hours</li>
      <li><strong>Power:</strong> AC 100–240V, 50–60Hz; DC 12–16V</li>
      <li><strong>Maximum Operating Altitude:</strong> 10,000 ft</li>
      <li><strong>FAA Approved:</strong> Yes</li>
      <li><strong>Manufacturer:</strong> Philips Respironics</li>
    </ul>
  `,
    features: `
    <ul>
      <li>⚖️ Lightweight at only 2.2–2.7 kg depending on battery</li>
      <li>💨 Delivers up to 1,000 mL/min pulse flow oxygen</li>
      <li>🛠 Durable, sleek design for longer product life</li>
      <li>🔋 Easy-to-remove, exchangeable battery</li>
      <li>📟 Intuitive touchscreen LCD</li>
      <li>🎒 Carry case included; optional backpack available</li>
      <li>🔇 Low noise operation</li>
      <li>🔌 Low power consumption, AC/DC adaptable</li>
      <li>🛫 FAA-approved for in-flight use</li>
      <li>⏱ Extended battery option for up to 9 hours runtime</li>
    </ul>
  `,
  },
];

export default featuredProducts;
