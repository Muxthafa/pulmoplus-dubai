const products = [
  {
    id: 1,
    name: "Inogen Rove 6",
    description:
      "Portable oxygen concentrator with 6 flow settings, extended battery options, and quiet operation, designed for maximum flexibility and ease of use for active oxygen therapy patients.",
    image: "/images/products/inogen-rove-6.webp", // Update with actual image path
    price: "9,500.00",
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
    id: 2,
    name: "SimplyGo Mini",
    description:
      "A lightweight, stylish portable oxygen concentrator with pulse-dose delivery, extended battery options, and FAA approval, designed for active oxygen therapy users on the go.",
    image: "/images/products/simply-go-mini.webp", // Update with actual image path
    price: "12,500.00",
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
  {
    id: 3,
    name: "Oxylife Independence",
    description:
      "Lightweight portable oxygen concentrator with both continuous flow and pulse dose modes, designed for patients needing mobility without compromising oxygen therapy. Ideal for home, travel, and active lifestyles.",
    image: "/images/products/oxlife-independence.jpg", // Update with actual image path
    price: "11,500.00",
    inStock: true,
    category: "Portable Oxygen",
    categorySlug: "portable-oxygen",
    productSlug: "oxylife-independence",
    specifications: `
    <ul>
      <li><strong>Oxygen Flow:</strong> Continuous Flow: 0.5–3 LPM; Pulse Dose: Settings 1–6</li>
      <li><strong>Oxygen Concentration:</strong> 90% ± 3% at all settings</li>
      <li><strong>Sound Level:</strong> ~40 dBA</li>
      <li><strong>Weight:</strong> 2.2–2.5 kg (without accessories)</li>
      <li><strong>Dimensions:</strong> 22 cm (H) × 21 cm (W) × 9 cm (D)</li>
      <li><strong>Battery Duration:</strong> Standard – up to 4–5 hours</li>
      <li><strong>FAA Approved:</strong> Yes</li>
    </ul>
  `,
    features: `
    <ul>
      <li>🔄 Dual delivery modes – continuous flow & pulse dose</li>
      <li>⚖️ Lightweight, portable design with ergonomic handle</li>
      <li>🔋 Extended battery options for all-day mobility</li>
      <li>🔇 Quiet operation for minimal disruption</li>
      <li>📟 Easy-to-use LCD interface</li>
      <li>🛫 FAA-approved for air travel</li>
      <li>🛠 Durable construction for daily use indoors or outdoors</li>
      <li>🧼 Low-maintenance filter system</li>
    </ul>
  `,
  },
  {
    id: 4,
    name: "ResMed AirSense 11",
    description:
      "The ResMed AirSense 11 AutoSet is the latest premium auto-adjusting CPAP device for obstructive sleep apnea, featuring advanced digital health technology, an integrated humidifier, and a sleek, modern design. Built for comfort, it offers personalized pressure therapy, remote monitoring, and interactive coaching tools to help users adapt quickly.",
    image: "/images/products/resmed-airsense-11.jpg", // Update with correct path if needed
    price: "4,000.00", // Range without currency symbols
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
    id: 5,
    name: "ResMed AirSense 10",
    description:
      "The ResMed AirSense 10 AutoSet is a premium auto-adjusting pressure device with integrated humidifier, cellular connectivity, and advanced event detection.",
    image: "/images/products/resmed-airsense-10.jpg", // Update with correct path if needed
    price: "3,500.00", // Price in AED without formatting
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
    id: 6,
    name: "ResMed AirMini",
    description:
      "The ResMed AirMini is the world’s smallest CPAP machine, delivering the same high-quality therapy as larger devices in an ultra-compact design. Perfect for travel, it offers multiple therapy modes, waterless humidification, and wireless connectivity for comfort, portability, and performance.",
    image: "/images/products/resmed-air-mini.webp", // Update with actual image path
    price: "4,500.00",
    inStock: true,
    category: "CPAP",
    categorySlug: "cpap",
    productSlug: "resmed-airmini",
    specifications: `
    <ul>
      <li><strong>Modes:</strong> AutoSet, AutoSet for Her, CPAP</li>
      <li><strong>Pressure Range:</strong> 4–20 cm H₂O</li>
      <li><strong>Sound Level:</strong> ~30 dBA</li>
      <li><strong>Weight:</strong> 300 g (0.66 lbs)</li>
      <li><strong>Dimensions:</strong> 13.6 cm (L) × 8.4 cm (W) × 5.2 cm (H)</li>
      <li><strong>Humidification:</strong> Waterless HumidX or HumidX Plus (optional)</li>
      <li><strong>Power Supply:</strong> 100–240V AC, 50–60Hz, DC Output 24V, 0.83A</li>
      <li><strong>Power Consumption:</strong> ~6.3W (typical), 27W (peak)</li>
      <li><strong>Connectivity:</strong> Bluetooth wireless technology</li>
      <li><strong>Warranty:</strong> 2 Years</li>
    </ul>
  `,
    features: `
    <ul>
      <li>🧳 Ultra-compact and lightweight, weighing only 300 grams</li>
      <li>⚙️ Multiple therapy modes: AutoSet, AutoSet for Her, and CPAP</li>
      <li>💧 Waterless humidification using HumidX and HumidX Plus capsules</li>
      <li>🔇 Quiet operation for undisturbed sleep</li>
      <li>📱 Bluetooth connectivity with AirMini app for monitoring and adjustments</li>
      <li>💎 Delivers premium therapy performance like full-size devices</li>
      <li>👜 Travel-friendly accessories, including optional hard case and mount</li>
    </ul>
  `,
  },
  {
    id: 7,
    name: "Philips DreamStation Auto CPAP with Heated Humidifier",
    description:
      "Advanced auto-adjusting CPAP device with integrated heated humidifier, SmartRamp, Opti-Start, and A-Flex pressure relief for comfortable, effective sleep apnea therapy.",
    image: "/images/products/philip-dreamstation.jpg", // Update with actual image path
    price: "3,700.00",
    inStock: true,
    category: "CPAP",
    categorySlug: "cpap",
    productSlug: "philips-dreamstation-auto-cpap-with-heated-humidifier",
    specifications: `
    <ul>
      <li><strong>SmartRamp:</strong> Gradually increases pressure to help ease into sleep</li>
      <li><strong>A-Flex Pressure Relief:</strong> Softer transitions between inhalation & exhalation</li>
      <li><strong>Advanced Data Display:</strong> Real-time therapy insights</li>
      <li><strong>Mask Fit Check:</strong> Detects leaks for optimal sealing</li>
      <li><strong>Auto On/Off:</strong> Starts and stops automatically</li>
      <li><strong>Connectivity:</strong> Bluetooth-enabled</li>
      <li><strong>Alerts & Reminders:</strong> Regular maintenance notifications</li>
      <li><strong>Warranty:</strong> 2 Years</li>
    </ul>
  `,
    features: `
    <ul>
      <li>⚙️ Auto-adjusting CPAP therapy based on real-time monitoring</li>
      <li>💧 Integrated heated humidifier for improved comfort</li>
      <li>🌙 SmartRamp starts at lower pressure for easier sleep onset</li>
      <li>🎯 Opti-Start helps address early residual apnea events</li>
      <li>🛡️ A-Flex pressure relief for natural breathing feel</li>
      <li>📊 Built-in self-diagnostics and therapy tracking</li>
      <li>📱 Bluetooth connectivity for easy data access</li>
    </ul>
  `,
  },
  {
    id: 8,
    name: "BMC Auto CPAP",
    description:
      "Advanced auto-adjusting CPAP device with integrated heated humidifier, quiet operation, and comprehensive therapy monitoring for effective obstructive sleep apnea treatment.",
    image: "/images/products/bmc-auto-cpap.webp", // Update with actual image path
    price: "2,500.00",
    inStock: true,
    category: "CPAP",
    categorySlug: "cpap",
    productSlug: "bmc-auto-cpap",
    specifications: `
    <ul>
      <li><strong>Pressure Range:</strong> 4–20 cm H₂O</li>
      <li><strong>Ramp Time:</strong> 0–60 minutes</li>
      <li><strong>Sound Level:</strong> ≤ 30 dBA</li>
      <li><strong>Dimensions:</strong> Approx. 26 cm (L) × 16 cm (W) × 12 cm (H)</li>
      <li><strong>Weight:</strong> ~1 kg</li>
    </ul>
  `,
    features: `
    <ul>
      <li>⚙️ Auto-adjusting pressure for personalized therapy</li>
      <li>💧 Integrated heated humidifier to reduce dryness</li>
      <li>🌙 Ramp function & exhalation pressure relief for comfort</li>
      <li>🔇 Low-noise motor for peaceful sleep</li>
      <li>📺 Full-color LCD display for easy navigation</li>
      <li>📊 Stores therapy data for up to 365 nights</li>
      <li>🛠️ User-friendly design for quick setup</li>
    </ul>
  `,
  },
  {
    id: 9,
    name: "Lumis 150",
    description:
      "Advanced non-invasive ventilator for chronic respiratory conditions with multiple ventilation modes, integrated humidifier, and intelligent synchrony features for optimal comfort and effectiveness.",
    image: "/images/products/resmed-lumis-150.webp", // Update with actual image path
    price: "7,700.00",
    inStock: true,
    category: "BiPAP",
    categorySlug: "bipap",
    productSlug: "lumis-150",
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
    id: 10,
    name: "ResMed AirCurve 10 VAuto",
    description:
      "Advanced BiPAP device with auto-adjusting inspiratory and expiratory pressures, integrated humidifier, and intelligent comfort features for optimal respiratory therapy.",
    image: "/images/products/aircurve.jpg", // Update with actual image path
    price: "6,700.00",
    inStock: true,
    category: "BiPAP",
    categorySlug: "bipap",
    productSlug: "resmed-aircurve-10-vauto",
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
    id: 11,
    name: "Philips Respironics BiPAP S/T",
    description:
      "Non-invasive BiPAP device with timed backup rate for chronic respiratory insufficiency, delivering reliable ventilation support with advanced comfort and monitoring features.",
    image: "/images/products/philips-bipap-st.jpg", // Update with actual image path
    price: "8,500.00",
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
    id: 12,
    name: "ResMed Astral 150",
    description:
      "Versatile, portable life support ventilator for invasive and non-invasive ventilation in adult and pediatric patients. Offers multiple therapy modes, advanced monitoring, long battery life, and intuitive touchscreen controls for use in hospitals, long-term care, or at home.",
    image: "/images/products/astral-150.jpg", // Update with actual image path
    price: "13,500.00",
    inStock: true,
    category: "Ventilator",
    categorySlug: "ventilator",
    productSlug: "resmed-astral-150",
    condition: "Refurbished",
    specifications: `
    <ul>
      <li><strong>Modes:</strong> CPAP, PSV, S/T, SIMV, ACV, PAC, Pressure Control, Volume Control, and more</li>
      <li><strong>Pressure Range:</strong> IPAP 2–50 cm H₂O; EPAP 2–25 cm H₂O</li>
      <li><strong>Tidal Volume Range:</strong> 50–2500 mL</li>
      <li><strong>FiO₂ Range:</strong> 21–100% (with optional oxygen module)</li>
      <li><strong>Weight:</strong> 3.2 kg</li>
      <li><strong>Dimensions:</strong> 285 mm (W) × 215 mm (H) × 93 mm (D)</li>
      <li><strong>Sound Level:</strong> ≤ 35 dBA</li>
      <li><strong>Battery Life:</strong> Internal – up to 8 hours; Each external – up to 8 hours</li>
      <li><strong>Display:</strong> 7-inch color touchscreen</li>
      <li><strong>Power Supply:</strong> AC 100–240V, 50–60Hz; DC compatible</li>
      <li><strong>Warranty:</strong> 2 Years</li>
    </ul>
  `,
    features: `
    <ul>
      <li>🩺 Comprehensive therapy modes including CPAP, SIMV, pressure & volume control</li>
      <li>👩‍⚕️ Suitable for adult & pediatric patients ≥5 kg</li>
      <li>🔄 Compatible with single limb (leak or valve) and double limb circuits</li>
      <li>📊 Advanced monitoring of tidal volume, minute ventilation, FiO₂, SpO₂ (optional), and more</li>
      <li>🔋 Up to 16 hours battery life with internal + external batteries</li>
      <li>⚖️ Lightweight at only 3.2 kg</li>
      <li>🖥 7-inch intuitive color touchscreen interface</li>
      <li>🚨 Comprehensive alarm & safety systems</li>
      <li>💾 SD card data storage & software connectivity</li>
    </ul>
  `,
  },
  {
    id: 13,
    name: "Luisa Ventilator",
    description:
      "Portable life support ventilator by Löwenstein Medical, designed for invasive and non-invasive ventilation in adults and children. Supports continuous 24/7 use with multiple ventilation modes, a long battery life, and a large touchscreen for easy monitoring and adjustments.",
    image: "/images/products/luisa-ventilator.jpg", // Update with actual image path
    price: "17,700.00",
    inStock: true,
    category: "Ventilator",
    categorySlug: "ventilator",
    productSlug: "luisa-ventilator",
    condition: "Refurbished",
    specifications: `
    <ul>
      <li><strong>Modes:</strong> CPAP, PSV, S/T, SIMV, PCV, VCV, and more</li>
      <li><strong>Pressure Range:</strong> 4–50 cm H₂O</li>
      <li><strong>Tidal Volume Range:</strong> 50–2000 mL</li>
      <li><strong>Patient Types:</strong> ≥3 kg body weight</li>
      <li><strong>FiO₂:</strong> 21–100% with oxygen inlet</li>
      <li><strong>Dimensions:</strong> 300 mm (W) × 250 mm (H) × 110 mm (D)</li>
      <li><strong>Weight:</strong> 3.3 kg</li>
      <li><strong>Display:</strong> 10-inch color touchscreen</li>
      <li><strong>Sound Level:</strong> &lt; 30 dBA</li>
      <li><strong>Internal Battery:</strong> Up to 6 hours</li>
      <li><strong>External Battery Option:</strong> Up to 12 hours additional</li>
      <li><strong>Power Supply:</strong> AC 100–240V, DC operation</li>
      <li><strong>Data Storage:</strong> USB or SD card</li>
      <li><strong>Warranty:</strong> 2 Years</li>
    </ul>
  `,
    features: `
    <ul>
      <li>🩺 Continuous 24/7 operation for long-term ventilation</li>
      <li>⚙️ Multiple ventilation modes including volume & pressure control, pressure support, and CPAP</li>
      <li>👶 Suitable for patients from infants to adults</li>
      <li>⚖️ Lightweight at only 3.3 kg for portability</li>
      <li>🔋 Up to 18 hours battery life with internal + external batteries</li>
      <li>🖥 Large 10-inch color touchscreen for easy control</li>
      <li>🔇 Ultra-quiet operation (&lt; 30 dBA) for patient comfort</li>
      <li>📡 USB data export and optional wireless connectivity</li>
      <li>🔌 AC, DC, and battery operation for uninterrupted use</li>
      <li>🚨 Comprehensive visual and audible alarms for safety</li>
    </ul>
  `,
  },
  {
    id: 14,
    name: "Long Fian Oxygen Concentrator",
    description:
      "A reliable, medical-grade oxygen concentrator designed for continuous operation 24/7. Equipped with an easy-to-read LCD display, innovative coding technology, and safety features, it delivers high-concentration oxygen for improved treatment outcomes in patients with respiratory conditions.",
    image: "/images/products/longfian.webp", // Update with actual image path
    price: "2,500.00",
    inStock: true,
    category: "Oxygen and Nebuliser",
    categorySlug: "oxygen-and-nebuliser",
    productSlug: "long-fian-oxygen-concentrator",
    specifications: `
    <ul>
      <li><strong>Flow Rate:</strong> 0.5 – 5 L</li>
      <li><strong>Outlet Pressure:</strong> 0.04 – 0.07 MPa</li>
      <li><strong>Oxygen Concentration:</strong> 93% (±3%)</li>
      <li><strong>Net Weight:</strong> 15 kg</li>
      <li><strong>Sound Level:</strong> ≤ 40 dB</li>
      <li><strong>Power Consumption:</strong> ≤ 300 W</li>
      <li><strong>Alarms:</strong> Power failure, high/low pressure, low oxygen concentration</li>
      <li><strong>Dimensions:</strong> 348 × 280 × 510 mm</li>
    </ul>
  `,
    features: `
    <ul>
      <li>🖥 Simple operation with easy-to-read LCD display</li>
      <li>🔄 Designed for 24/7/365 operation with innovative coding technology</li>
      <li>🚚 Four flexible castors for easy movement in any direction</li>
      <li>💧 Humidifier bottle with 6 PSI pressure relief for safety and comfort</li>
      <li>📈 Can connect to HBOC for rapid SPO₂ increase</li>
      <li>🌬 Compatible with HFNC for stable high-concentration oxygen delivery</li>
      <li>🏥 Medical-grade oxygen concentration above 90% for better treatment outcomes</li>
    </ul>
  `,
  },
  {
    id: 15,
    name: "Philips EverFlo Oxygen Concentrator",
    description:
      "The Philips EverFlo is a compact, energy-efficient stationary oxygen concentrator designed for home oxygen therapy. It delivers continuous oxygen flow with consistent purity, offers quiet operation, and requires minimal maintenance, making it ideal for long-term use.",
    image: "/images/products/philips-everflo.jpg", // Update with actual image path
    price: "3,900.00",
    inStock: true,
    category: "Oxygen and Nebuliser",
    categorySlug: "oxygen-and-nebuliser",
    productSlug: "philips-everflo-oxygen-concentrator",
    specifications: `
    <ul>
      <li><strong>Flow Rate:</strong> 0.5 – 5 L/min</li>
      <li><strong>Oxygen Concentration:</strong> 93% ± 3% at all flow rates</li>
      <li><strong>Sound Level:</strong> ~40 dBA</li>
      <li><strong>Dimensions:</strong> 58.4 × 38.1 × 24.1 cm</li>
      <li><strong>Weight:</strong> ~14 kg</li>
      <li><strong>Power Consumption:</strong> 350 W</li>
      <li><strong>Outlet Pressure:</strong> 5.5 PSI</li>
      <li><strong>Operating Altitude:</strong> Up to 2,286 m (7,500 ft)</li>
      <li><strong>Warranty:</strong> 3 Years (varies by distributor)</li>
    </ul>
  `,
    features: `
    <ul>
      <li>💨 Continuous flow oxygen delivery up to 5 L/min</li>
      <li>🪶 Lightweight & compact design for easy home mobility</li>
      <li>🛠 Low maintenance — no filter changes for up to 2 years</li>
      <li>🔇 Quiet operation (~40 dBA) for patient comfort</li>
      <li>⚡ Energy efficient — reduced electricity usage</li>
      <li>💧 Integrated humidifier bottle holder</li>
      <li>🔒 Recessed flow meter to prevent accidental damage</li>
      <li>📊 Optional Oxygen Purity Indicator (OPI) for safety</li>
    </ul>
  `,
  },
  {
    id: 16,
    name: "Aerogen Solo",
    description:
      "The Aerogen Solo is a compact, portable percussion massage gun designed to relieve muscle soreness, improve circulation, and speed up recovery. With powerful motor performance and a lightweight ergonomic build, it's perfect for athletes, gym-goers, and daily muscle relaxation at home or on the go.",
    image: "/images/products/aerogen-solo.webp", // Update with actual image path
    price: "1,900.00",
    inStock: true,
    category: "Oxygen and Nebuliser",
    categorySlug: "oxygen-and-nebuliser",
    productSlug: "aerogen-solo",
    specifications: `
    <ul>
      <li><strong>Weight:</strong> ~0.8 – 1 kg</li>
      <li><strong>Speed Levels:</strong> 3–5 adjustable speeds</li>
      <li><strong>Battery Life:</strong> 3–6 hours per charge</li>
      <li><strong>Charging Time:</strong> 2–3 hours</li>
      <li><strong>Noise Level:</strong> 40–55 dB</li>
      <li><strong>Material:</strong> ABS plastic with silicone grip</li>
      <li><strong>Motor Type:</strong> Brushless high-torque motor</li>
      <li><strong>Amplitude:</strong> ~10–12 mm stroke length</li>
      <li><strong>Attachments:</strong> 4–6 interchangeable massage heads</li>
      <li><strong>Warranty:</strong> 6–12 months (varies by retailer)</li>
    </ul>
  `,
    features: `
    <ul>
      <li>💪 Powerful percussion therapy for deep tissue relief</li>
      <li>⚙ Multiple speed settings for tailored intensity</li>
      <li>🔄 Interchangeable massage heads for different muscle groups</li>
      <li>🔇 Quiet motor technology for a peaceful massage</li>
      <li>🔋 Long-lasting rechargeable lithium battery</li>
      <li>🪶 Ergonomic, lightweight, and easy to hold</li>
      <li>🎒 Portable size — ideal for travel or gym use</li>
    </ul>
  `,
  },
];

export default products;
