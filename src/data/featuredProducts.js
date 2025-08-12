const featuredProducts = [
  {
    id: 1,
    name: "Inogen Rove 6",
    description:
      "Portable oxygen concentrator with 6 flow settings, extended battery options, and quiet operation, designed for maximum flexibility and ease of use for active oxygen therapy patients.",
    image: "/images/products/inogen-rove-6.webp", // Update with actual image path
    price: "11,800.00",
    inStock: true,
    category: "Portable Oxygen",
    categorySlug: "portable-oxygen",
    productSlug: "inogen-rove-6",
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
    id: 4,
    name: "ResMed AirSense 11",
    description:
      "The ResMed AirSense 11 AutoSet is the latest premium auto-adjusting CPAP device for obstructive sleep apnea, featuring advanced digital health technology, an integrated humidifier, and a sleek, modern design. Built for comfort, it offers personalized pressure therapy, remote monitoring, and interactive coaching tools to help users adapt quickly.",
    image: "/images/products/resmed-airsense-11.jpg", // Update with correct path if needed
    price: "4,700.00", // Range without currency symbols
    inStock: true, // Assuming it's in stock
    category: "CPAP",
    categorySlug: "cpap",
    productSlug: "resmed-airsense-11",
    specifications: `
    <ul>
      <li><strong>Modes:</strong> AutoSet, AutoSet for Her, CPAP</li>
      <li><strong>Pressure Range:</strong> 4–20 cm H₂O (0.2 cm increments)</li>
      <li><strong>Sound Level:</strong> ~27 dBA</li>
      <li><strong>Display:</strong> Color touchscreen</li>
      <li><strong>Integrated Humidifier Capacity:</strong> 380 mL</li>
      <li><strong>Power Supply:</strong> 100–240V AC, 50–60Hz, DC Output 24V, 2.71A</li>
      <li><strong>Power Consumption:</strong> ~56W (with humidifier and heated tube)</li>
      <li><strong>Dimensions:</strong> 27.6 cm (L) × 13.8 cm (W) × 9.7 cm (H)</li>
      <li><strong>Weight:</strong> ~1.1 kg</li>
      <li><strong>Connectivity:</strong> Built-in cellular modem, Bluetooth</li>
      <li><strong>Warranty:</strong> 2 Years</li>
    </ul>
  `,
    features: `
    <ul>
      <li>⚙️ Advanced AutoSet Technology automatically adjusts pressure levels throughout the night</li>
      <li>💧 Integrated humidifier for enhanced comfort and reduced dryness</li>
      <li>🌡️ Climate Control with ClimateLineAir heated tubing for consistent temperature and humidity</li>
      <li>📱 Touchscreen display with intuitive full-color interface</li>
      <li>🔇 Ultra-quiet motor for peaceful sleep</li>
      <li>🗣️ Personal Therapy Assistant with voice-guided setup and tips</li>
      <li>📊 Care Check-In feature for tailored support and therapy tracking via MyAir app</li>
      <li>🌐 Remote monitoring via cloud-based AirView for clinicians</li>
      <li>🌙 AutoRamp with Sleep Onset Detection for gradual pressure increase after falling asleep</li>
    </ul>
  `,
  },
  {
    id: 11,
    name: "Philips Respironics BiPAP S/T",
    description:
      "Non-invasive BiPAP device with timed backup rate for chronic respiratory insufficiency, delivering reliable ventilation support with advanced comfort and monitoring features.",
    image: "/images/products/philips-bipap-st.jpg", // Update with actual image path
    price: "9,700.00",
    inStock: true,
    category: "BiPAP",
    categorySlug: "bipap",
    productSlug: "philips-respironics-bipap-s-t",
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
    name: "ResMed AirSense 10",
    description:
      "The ResMed AirSense 10 AutoSet is a premium auto-adjusting pressure device with integrated humidifier, cellular connectivity, and advanced event detection.",
    image: "/images/products/resmed-airsense-10.jpg", // Update with correct path if needed
    price: "4,000.00", // Price in AED without formatting
    inStock: true, // Assuming it's in stock
    category: "CPAP",
    categorySlug: "cpap",
    productSlug: "resmed-airsense-10",
    specifications: `
    <ul>
      <li><strong>Sound Level:</strong> 26.6 dBA</li>
      <li><strong>Water Chamber Capacity:</strong> 380 mL</li>
      <li><strong>AC Input Range:</strong> 100 – 240V, 50 – 60Hz, 1.0 – 1.5A, Class II</li>
      <li><strong>DC Output:</strong> 24V, 3.75A</li>
      <li><strong>Power Consumption:</strong> 53W (57VA)</li>
      <li><strong>Operating Pressure:</strong> 4 – 20 cm H₂O (0.2 cm increments)</li>
      <li><strong>Materials:</strong> Slimline Tubing: Flexible Plastic; Water Chamber: Injection Molded Plastic, Stainless Steel, Silicone Seal</li>
      <li><strong>Standard Filter:</strong> Polyester non-woven fiber</li>
      <li><strong>Warranty:</strong> 2 Years</li>
      <li><strong>Model:</strong> AirSense 10 AutoSet CPAP</li>
      <li><strong>Brand:</strong> ResMed</li>
      <li><strong>Dimensions:</strong> 15cm (H) x 25cm (L) x 11cm (B)</li>
      <li><strong>Weight:</strong> 2.75Kg</li>
    </ul>
  `,
    features: `
    <ul>
      <li>✅ Quiet Easy-Breathe motor creates a peaceful environment for the patient and their bed partner</li>
      <li>💨 Expiratory pressure relief (EPR) maintains optimal treatment during inhalation and reduces pressure during exhalation</li>
      <li>▶️ SmartStart allows therapy to begin when the patient breathes in, without pressing 'Start'</li>
      <li>📈 Pulse oximetry monitoring available</li>
      <li>💧 Integrated humidification simplifies setup and enhances comfort</li>
      <li>🌐 AirView access for nightly therapy data, remote troubleshooting, and settings adjustment</li>
      <li>🎛️ User-friendly controls with intuitive interface and color LCD screen</li>
      <li>💡 Built-in ambient light sensor adjusts screen brightness automatically</li>
      <li>📦 Includes: Auto-adjusting CPAP machine, built-in humidifier, tubing, power supply & cord, carry bag, installed filter, mask, and user manual</li>
    </ul>
  `,
  },
  {
    id: 2,
    name: "SimplyGo Mini",
    description:
      "A lightweight, stylish portable oxygen concentrator with pulse-dose delivery, extended battery options, and FAA approval, designed for active oxygen therapy users on the go.",
    image: "/images/products/simply-go-mini.webp", // Update with actual image path
    price: "12,900.00",
    inStock: true,
    category: "Portable Oxygen",
    categorySlug: "portable-oxygen",
    productSlug: "simplygo-mini",
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
