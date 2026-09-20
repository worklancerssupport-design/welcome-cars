import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = resolve(__dirname, "dist/index.html");

const owner = JSON.parse(readFileSync(resolve(__dirname, "src/data/owner.json"), "utf-8"));
const services = JSON.parse(readFileSync(resolve(__dirname, "src/data/services.json"), "utf-8"));
const caseStudies = JSON.parse(readFileSync(resolve(__dirname, "src/data/caseStudies.json"), "utf-8"));

const SITE = "https://welcomecaracservice.com";
const today = new Date().toISOString().split("T")[0];

// ── Semantic HTML content (visible to crawlers, visually hidden from users) ──

function buildSeoContent() {
    const lines = [];

    lines.push(`<h1>Car A/C Service in Tharamani, Chennai — Welcome Car A/C Service</h1>`);
    lines.push(`<p>Welcome Car A/C Service is a dedicated car air-conditioning workshop located in Tharamani, Chennai near SRP Tools on 100 Feet Road. We specialize exclusively in car A/C diagnosis, refrigerant gas recharge, leak detection, compressor repair, and full A/C system overhaul. With over 15 years of hands-on experience in automotive HVAC systems, we deliver verified ice-cold cabin comfort.</p>`);

    lines.push(`<h2>Our Car A/C Services</h2>`);
    lines.push(`<p>We offer comprehensive car air-conditioning services including A/C diagnosis, cooling problem resolution, refrigerant gas service, leak detection, compressor repair, system overhaul, evaporator coil cleaning, and electrical sensor diagnosis. Every service begins with a thorough dual-gauge pressure inspection — no guessing, no top-up cans.</p>`);
    for (const svc of services) {
        lines.push(`<h3>${svc.title}</h3>`);
        lines.push(`<p>${svc.description}</p>`);
        if (svc.highlights?.length) {
            lines.push(`<ul>${svc.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>`);
        }
    }

    lines.push(`<h2>Why Choose Us</h2>`);
    lines.push(`<p>Car A/C is all we do. We do not service engines, change oil, handle brakes, or work on tyres. Every tool, gauge, and scan tool in our workshop is dedicated to one job: getting your cabin vents to deliver verified ice-cold air. Every vehicle is personally inspected before any work is quoted, and the root cause is what gets repaired.</p>`);

    lines.push(`<h2>Common Car A/C Problems We Solve</h2>`);
    const problems = [
        { q: "Car A/C not cooling", a: "Typically caused by low refrigerant gas from an undetected leak, a failed compressor clutch, a clogged cabin pollen filter, or a blocked condenser. A physical dual-gauge pressure inspection determines the exact cause." },
        { q: "Car A/C gas keeps reducing", a: "Automotive A/C systems are hermetically sealed. If gas is dropping, there is an active physical leak in the condenser, evaporator, rubber hoses, or compressor seals that must be repaired before recharging." },
        { q: "How often should car A/C be serviced", a: "We recommend a comprehensive A/C checkup once every 12 months or 15,000 km. This includes condenser fin cleaning, cabin air filter replacement, and operating pressure tests." },
        { q: "Weak A/C cooling at idle", a: "Usually points to inadequate airflow through the front condenser. Common causes include a failing fan motor, road dirt clogging condenser fins, or a compressor losing efficiency at lower RPMs." },
        { q: "Car A/C blowing warm air", a: "Often results from evaporator freezing over (faulty thermistor), an expanding magnetic clutch gap slipping when heated, or a high-pressure safety switch tripping due to overheating." },
        { q: "A/C compressor problems", a: "Signs include loud grinding or squealing noises when pressing A/C, oil seepage around the compressor nose seal, burnt belt odor, or failure of the center clutch plate to spin." },
    ];
    for (const p of problems) {
        lines.push(`<h3>${p.q}</h3>`);
        lines.push(`<p>${p.a}</p>`);
    }

    lines.push(`<h2>Our Work — Case Studies</h2>`);
    for (const cs of caseStudies) {
        lines.push(`<h3>${cs.title} — ${cs.vehicle}</h3>`);
        lines.push(`<p><strong>Issue:</strong> ${cs.issue}</p>`);
        lines.push(`<p><strong>Diagnosis:</strong> ${cs.diagnostic}</p>`);
        lines.push(`<p><strong>Solution:</strong> ${cs.solution}</p>`);
        lines.push(`<p><strong>Result:</strong> ${cs.summary}</p>`);
    }

    lines.push(`<h2>Visit Our Workshop</h2>`);
    lines.push(`<p>${owner.businessName} is located at ${owner.fullAddress}. Working hours: ${owner.workingHours}, ${owner.workingDays}. Call us at +91 ${owner.phoneNumber} or reach us on WhatsApp at +91 ${owner.whatsappNumber}.</p>`);

    return lines.join("\n      ");
}

// ── JSON-LD Structured Data ──

function buildJsonLd() {
    const schemas = [];

    // 1. AutomotiveBusiness (LocalBusiness)
    schemas.push({
        "@context": "https://schema.org",
        "@type": "AutomotiveBusiness",
        name: owner.businessName,
        url: SITE,
        telephone: `+91${owner.phoneNumber}`,
        email: undefined,
        description: `Dedicated car A/C workshop in Tharamani, Chennai. Specializing in car air-conditioning diagnosis, refrigerant recharge, leak detection, and compressor repair. ${owner.yearsOfExperience} experience.`,
        image: `${SITE}/og-image.jpg`,
        address: {
            "@type": "PostalAddress",
            streetAddress: "Old No: 58, New No: 55, Anna Nagar Colony (100Feet Road), Near SRP Tools",
            addressLocality: owner.area,
            addressRegion: owner.state,
            postalCode: owner.pincode,
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 12.9810164,
            longitude: 80.2490774,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "20:00",
            },
        ],
        priceRange: "$$",
        areaServed: [
            { "@type": "City", name: "Chennai" },
            { "@type": "Neighborhood", name: "Tharamani" },
            { "@type": "Neighborhood", name: "Adyar" },
            { "@type": "Neighborhood", name: "Velachery" },
            { "@type": "Neighborhood", name: "Tambaram" },
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Car A/C Services",
            itemListElement: services.map((svc) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: svc.title,
                    description: svc.description,
                },
            })),
        },
        sameAs: [
            owner.googleMapsUrl,
        ],
    });

    // 2. FAQPage
    schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Why is my car A/C not cooling?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A car A/C blowing warm air is typically caused by low refrigerant gas from an undetected leak, a failed compressor clutch, a clogged cabin pollen filter, or a blocked condenser. A physical dual-gauge pressure inspection is required to determine the exact cause.",
                },
            },
            {
                "@type": "Question",
                name: "Why does car A/C gas keep reducing?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Automotive A/C systems are hermetically sealed closed-loop systems. Refrigerant does not evaporate or get consumed. If gas is dropping, there is an active physical leak in the condenser, evaporator, rubber hoses, or compressor seals that must be repaired before recharging.",
                },
            },
            {
                "@type": "Question",
                name: "How often should car A/C be serviced?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A comprehensive A/C checkup is recommended once every 12 months or 15,000 km. This includes condenser fin cleaning, cabin air filter replacement, and operating pressure tests to prevent sudden compressor failure during hot seasons.",
                },
            },
            {
                "@type": "Question",
                name: "What causes weak A/C cooling?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Weak cooling at idle usually points to inadequate airflow through the front condenser. Common culprits include a failing radiator/condenser fan motor, road dirt clogging the condenser fins, or a compressor losing volumetric efficiency at lower engine RPMs.",
                },
            },
            {
                "@type": "Question",
                name: "Why is my car A/C blowing warm air?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Intermittent or warm cooling often results from an evaporator freezing over (faulty de-ice thermistor), an expanding magnetic clutch gap slipping when heated, or a high-pressure safety switch tripping due to overheating.",
                },
            },
            {
                "@type": "Question",
                name: "What can cause A/C compressor problems?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Signs of compressor distress include loud grinding or squealing noises upon pressing the A/C button, visible oil seepage around the compressor nose seal, burnt odor from the drive belt, or failure of the center clutch plate to spin.",
                },
            },
            {
                "@type": "Question",
                name: `Where can I get car A/C service in ${owner.city}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `${owner.businessName} is located at ${owner.fullAddress}. We specialize exclusively in automotive air conditioning diagnosis, electronic leak detection, gas recharge, and compressor repairs.`,
                },
            },
        ],
    });

    // 3. BreadcrumbList
    schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Car A/C Services",
                item: `${SITE}/#services`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Location",
                item: `${SITE}/#location`,
            },
        ],
    });

    return schemas
        .map((s) => `    <script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n    </script>`)
        .join("\n");
}

// ── Write dist/index.html ──

let html = readFileSync(distPath, "utf-8");

html = html.replace("<!-- prerender:content -->", buildSeoContent());
html = html.replace("<!-- prerender:jsonld -->", buildJsonLd());

writeFileSync(distPath, html, "utf-8");
console.log(`[prerender] Injected SEO content + ${3} JSON-LD schemas into dist/index.html`);
console.log(`[prerender] HTML size: ${(Buffer.byteLength(html) / 1024).toFixed(1)} KB`);
