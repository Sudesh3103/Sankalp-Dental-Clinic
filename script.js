let chatOpen = false;

const responses = {
  book: {
    text: "📅 I'd be happy to help you book an appointment with **Dr. Akshay Mane**!\n\nPlease call or WhatsApp us directly at **07942693933** and share:\n\n• Your name\n• Preferred date & time\n• Which treatment you need\n\nOr scroll up and fill our **Appointment Request Form** — we'll confirm your slot within a few hours! 😊",
    replies: [
      { label: "Morning slot available?",  key: "appointmentAvailability" },
      { label: "Evening slot available?",  key: "appointmentAvailability" },
      { label: "Clinic hours?",            key: "hours"                   }
    ]
  },
  appointmentAvailability: {
    text: "🗓️ We have appointments available **Mon–Sat, 10 AM – 8 PM**!\n\n**Best times to book:**\n• Weekday mornings are usually less busy\n• Evening slots (after 5 PM) fill up fast — book early\n• Saturday slots are popular, so book in advance\n\n🚫 We are **closed on Sundays.**\n\nTo confirm availability, call/WhatsApp: **07942693933**",
    replies: [
      { label: "Book a slot now",       key: "book"               },
      { label: "What are your hours?",  key: "hours"              },
      { label: "Same-day appointment?", key: "sameDayAppointment" }
    ]
  },
  sameDayAppointment: {
    text: "⚡ Same-day appointments depend on availability. We always try our best to accommodate urgent cases!\n\nCall us right away at **07942693933** and we'll check if a slot is open today. For dental emergencies, we always prioritize walk-ins.",
    replies: [
      { label: "Call now",                  key: "contact"   },
      { label: "I have a dental emergency", key: "emergency" },
      { label: "Book for tomorrow",         key: "book"      }
    ]
  },
  waitingTime: {
    text: "⏱️ We value your time! We do our best to keep wait times minimal.\n\nFor a smoother experience:\n• Book an appointment in advance instead of walk-in\n• Arrive 5–10 minutes early for first visits\n• Mention your concern when booking so we can allocate the right time\n\nCall us at **07942693933** to schedule.",
    replies: [
      { label: "Book appointment",            key: "book"       },
      { label: "Walk-in possible?",           key: "book"       },
      { label: "What to bring for first visit", key: "firstVisit" }
    ]
  },
  firstVisit: {
    text: "👋 Welcome to **Dr. Akshay Mane's Dental Clinic**! Here's what to expect on your first visit:\n\n1. Fill a short patient form (medical history)\n2. Paid consultation with Dr. Akshay Mane\n3. Oral examination & X-ray if needed\n4. Treatment plan & cost discussion\n5. Treatment begins (or scheduled for next visit)\n\nPlease bring any previous dental records or X-rays if you have them.",
    replies: [
      { label: "Book first appointment", key: "book"            },
      { label: "Consultation fee?",      key: "consultationFee" },
      { label: "Do I need X-rays?",      key: "xrayNeeded"      }
    ]
  },
  hours: {
    text: "🕐 **Clinic Hours — Dr. Akshay Mane's Dental Clinic:**\n\n📅 **Monday – Saturday:** 10:00 AM – 8:00 PM\n🚫 **Sunday:** Closed\n\n⚠️ We're closed on Sundays and public holidays. If you need urgent help, call/WhatsApp **07942693933** and we'll guide you.\n\nWe recommend booking in advance to avoid waiting!",
    replies: [
      { label: "Book appointment",      key: "book"          },
      { label: "Saturday appointment?", key: "appointmentAvailability" },
      { label: "Emergency contact",     key: "emergency"     }
    ]
  },
  sundayClosed: {
    text: "🚫 We are **closed on Sundays.**\n\n🕐 **Clinic Hours:**\nMonday – Saturday: 10:00 AM – 8:00 PM\n\nIf you have a dental emergency on a Sunday, please WhatsApp **07942693933** and Dr. Mane's team will guide you on the next steps.\n\nFor regular appointments, we'd love to see you Mon–Sat! 😊",
    replies: [
      { label: "Book Mon–Sat appointment", key: "book"      },
      { label: "Emergency on Sunday?",     key: "emergency" },
      { label: "Clinic location",          key: "address"   }
    ]
  },
  address: {
    text: "📍 **Clinic Address:**\n\nFront of Saibaba Mandir,\nHindtara Height, Main Road,\nGargoti, Kolhapur – 416209\nMaharashtra\n\n🗺️ Landmark: Opposite Saibaba Mandir on Main Road, Gargoti\n📞 Call for directions: **07942693933**",
    replies: [
      { label: "How to reach?",         key: "directions" },
      { label: "Is parking available?", key: "parking"    },
      { label: "Book appointment",      key: "book"       }
    ]
  },
  parking: {
    text: "🅿️ Yes, parking space is available near the clinic.\n\nWe're located on the **Main Road, Gargoti** near Saibaba Mandir, so it's easy to find. If you need help with directions, call us at **07942693933** and we'll guide you.",
    replies: [
      { label: "Get directions",   key: "directions" },
      { label: "Book appointment", key: "book"       },
      { label: "Clinic address",   key: "address"    }
    ]
  },
  directions: {
    text: "🗺️ **How to find us:**\n\nWe're on the **Main Road, Gargoti** — look for the Saibaba Mandir. The clinic is right in front of it at Hindtara Height.\n\n📍 Gargoti, Kolhapur – 416209, Maharashtra\n📞 Need help? Call: **07942693933**\n\nWe're easy to locate — a well-known landmark in the area!",
    replies: [
      { label: "Parking available?", key: "parking" },
      { label: "Book appointment",   key: "book"    },
      { label: "Call for directions", key: "contact" }
    ]
  },
  contact: {
    text: "📞 **Contact Dr. Akshay Mane's Dental Clinic:**\n\n**Phone / WhatsApp:** 07942693933\n\n**Address:**\nFront of Saibaba Mandir, Hindtara Height,\nMain Road, Gargoti, Kolhapur – 416209\n\n🕐 **Hours:** Mon–Sat, 10 AM – 8 PM | Sunday Closed\n\nFeel free to call or WhatsApp anytime during clinic hours!",
    replies: [
      { label: "Book appointment", key: "book"      },
      { label: "Clinic hours",     key: "hours"     },
      { label: "Get directions",   key: "directions" }
    ]
  },
  whatsapp: {
    text: "💬 Yes, you can WhatsApp us at **07942693933**!\n\nJust send a message with:\n• Your name\n• What treatment you're looking for\n• Preferred appointment time\n\nWe'll get back to you as quickly as possible.\n\n🕐 **Response hours: Mon–Sat, 10 AM – 8 PM**\n(Sundays we're closed — leave a message and we'll reply Monday morning!)",
    replies: [
      { label: "Book via WhatsApp",    key: "book"    },
      { label: "Clinic address",       key: "address" },
      { label: "What are your hours?", key: "hours"   }
    ]
  },
  price: {
    text: "💰 Treatment costs depend on your specific condition, which is why we recommend a personal consultation with **Dr. Akshay Mane** first.\n\n**Consultation fee applies** — Dr. Mane will examine you thoroughly and give you a transparent, detailed treatment plan with full cost breakdown.\n\nFor a rough estimate before visiting, call us at **07942693933**.\n\n✅ No hidden charges — what we quote is what you pay!",
    replies: [
      { label: "Book consultation",    key: "book"            },
      { label: "EMI or payment plans?", key: "paymentOptions" },
      { label: "Does insurance apply?", key: "insurance"      }
    ]
  },
  consultationFee: {
    text: "💳 **Consultation at Dr. Akshay Mane's clinic is a paid consultation.**\n\nThe consultation fee covers:\n• Full oral examination by Dr. Mane\n• Assessment of your concern\n• X-ray review (if needed)\n• Personalised treatment plan\n• Transparent cost breakdown\n\nFor the exact consultation fee, please call us at **07942693933** — we'll be happy to let you know before your visit.",
    replies: [
      { label: "Book consultation", key: "book"           },
      { label: "What to bring?",    key: "firstVisit"     },
      { label: "Payment options",   key: "paymentOptions" }
    ]
  },
  insurance: {
    text: "🏥 For insurance and cashless treatment queries, please contact us directly at **07942693933**.\n\nBring your insurance card and policy details when you visit — we'll do our best to assist with the paperwork.",
    replies: [
      { label: "Book appointment",  key: "book"           },
      { label: "Payment options",   key: "paymentOptions" },
      { label: "Call clinic",       key: "contact"        }
    ]
  },
  paymentOptions: {
    text: "💳 We accept multiple payment methods:\n\n• Cash\n• UPI (GPay, PhonePe, Paytm)\n• Debit / Credit Cards\n\nFor EMI or instalment plans on larger treatments like implants or orthodontics, please discuss with us at the clinic.\n\nCall **07942693933** for more details.",
    replies: [
      { label: "Book appointment", key: "book"      },
      { label: "Insurance query",  key: "insurance" },
      { label: "Treatment costs",  key: "price"     }
    ]
  },
  restoration: {
    text: "🦷 **Dental Restoration** repairs damaged, decayed, or broken teeth to restore their natural function and appearance.\n\n**Includes:**\n• Tooth-coloured composite fillings\n• Ceramic / porcelain restorations\n• Inlays & onlays\n• Crowns & bridges\n\n**Best for:** Cavities, fractured teeth, worn-down teeth, missing teeth\n\nMost restorations are completed in 1–2 visits.",
    replies: [
      { label: "How much does it cost?",       key: "price"   },
      { label: "Is it painful?",               key: "pain"    },
      { label: "Book restoration appointment", key: "book"    }
    ]
  },
  straightening: {
    text: "😬 **Straightening Teeth (Orthodontics)** corrects crooked, crowded, or gapped teeth and fixes bite issues.\n\n**Options we offer:**\n• Traditional metal braces\n• Ceramic (tooth-coloured) braces\n• Clear aligners\n• Retainers\n\n**Treatment duration:** 6 to 24 months depending on complexity.\n\nBest to start young, but adults can benefit too!",
    replies: [
      { label: "Am I too old for braces?",          key: "bracesAge"  },
      { label: "Clear aligners vs braces?",         key: "bracesAge"  },
      { label: "Book orthodontic consultation",     key: "book"       }
    ]
  },
  reshaping: {
    text: "✨ **Tooth Reshaping** (odontoplasty/contouring) is a quick, painless cosmetic procedure that:\n\n• Fixes slightly chipped or uneven teeth\n• Smoothens rough tooth edges\n• Improves overall smile symmetry\n• Removes minor overlaps\n\n✅ Usually done in a **single visit** with no anaesthesia needed.\n\nIt's a simple and affordable way to enhance your smile!",
    replies: [
      { label: "Is it safe?",                 key: "pain"  },
      { label: "How much does it cost?",      key: "price" },
      { label: "Book reshaping appointment",  key: "book"  }
    ]
  },
  extraction: {
    text: "🦷 **Wisdom Tooth Extraction** is recommended when your wisdom teeth are:\n\n• Causing pain or swelling\n• Impacted (stuck under the gum)\n• Causing crowding of other teeth\n• Infected or decayed\n\n**What to expect:**\n• Local anaesthesia is given — procedure is painless\n• Takes about 20–45 minutes\n• Recovery: 2–5 days with soft food & rest\n\nDon't ignore wisdom tooth pain — call **07942693933**!",
    replies: [
      { label: "Is extraction painful?",       key: "extractionPain" },
      { label: "Recovery tips",                key: "extractionPain" },
      { label: "Book extraction appointment",  key: "book"           }
    ]
  },
  rct: {
    text: "😌 **Root Canal Treatment (RCT)** is a tooth-saving procedure done when the inner pulp of a tooth is infected or inflamed.\n\n**Signs you may need RCT:**\n• Severe throbbing toothache\n• Sensitivity to hot/cold that lingers\n• Swelling near a tooth\n• Darkening of a tooth\n\n**Process:**\n1. Anaesthesia (no pain during procedure)\n2. Infected pulp removed\n3. Canal cleaned & sealed\n4. Crown placed for protection\n\nModern RCT is quick and virtually painless!",
    replies: [
      { label: "Is RCT painful?",         key: "rctPainful" },
      { label: "How many visits needed?", key: "rctVisits"  },
      { label: "Book RCT appointment",    key: "book"       }
    ]
  },
  therapy: {
    text: "🛡️ **Dental Therapy** includes preventive and therapeutic treatments to maintain and restore gum & oral health:\n\n• Professional teeth cleaning (scaling)\n• Root planing (deep cleaning)\n• Periodontal (gum) therapy\n• Fluoride treatments\n• Oral hygiene guidance\n\n✅ Recommended every **6 months** even if you have no pain — prevention is better than cure!",
    replies: [
      { label: "How often should I clean?",  key: "cavityPrevention" },
      { label: "Is gum disease serious?",    key: "badBreath"        },
      { label: "Book cleaning appointment",  key: "book"             }
    ]
  },
  rehabilitation: {
    text: "🏥 **Oral Rehabilitation** is a comprehensive, customised treatment plan to fully restore your mouth's health, function, and appearance.\n\n**Ideal for patients with:**\n• Multiple missing or damaged teeth\n• Severe decay or wear\n• Complex bite problems\n• Need for implants + braces + restorations together\n\n**Dr. Akshay Mane** will assess your case and create a step-by-step treatment roadmap. This is a long-term investment in your quality of life.",
    replies: [
      { label: "Am I a candidate?",        key: "whichTreatment" },
      { label: "How long does it take?",   key: "waitingTime"    },
      { label: "Book rehab consultation",  key: "book"           }
    ]
  },
  pain: {
    text: "💉 We completely understand dental anxiety! Pain management is our top priority.\n\n**We ensure comfort by:**\n• Using local anaesthesia for all procedures\n• Explaining every step before we do it\n• Stopping anytime you're uncomfortable\n• Using modern, gentle techniques\n\nMost patients are surprised at how painless modern dentistry is. You're in safe hands with **Dr. Akshay Mane**! 😊",
    replies: [
      { label: "Book appointment",            key: "book"    },
      { label: "What procedures are painless?", key: "rctPainful" },
      { label: "I'm scared of dentists",      key: "anxiety" }
    ]
  },
  anxiety: {
    text: "😟 Dental anxiety is very common — you're not alone!\n\n**Dr. Akshay Mane** and our team are trained to make nervous patients feel completely comfortable:\n\n• We take it slow and never rush you\n• We explain everything before starting\n• You can ask us to pause anytime\n• We use gentle, minimally invasive techniques\n\nJust let us know you're anxious when you call — we'll take extra care. 💚\n\n📞 **07942693933** | Mon–Sat, 10 AM – 8 PM",
    replies: [
      { label: "Book gentle appointment",         key: "book"      },
      { label: "Is RCT really painless?",         key: "rctPainful" },
      { label: "What to expect on first visit",   key: "firstVisit" }
    ]
  },
  childDentistry: {
    text: "👶 We welcome patients of all ages including children!\n\n**For kids we recommend:**\n• First dental visit by age 2–3\n• Check-up every 6 months\n• Fluoride treatment for cavity prevention\n• Sealants for back teeth\n\nEarly dental visits help children develop good habits and prevent fear of dentists. Bring your little one for a friendly check-up with **Dr. Akshay Mane**!",
    replies: [
      { label: "Book child appointment",       key: "book"             },
      { label: "At what age to start visits?", key: "childDentistry"   },
      { label: "Cavity prevention for kids",   key: "cavityPrevention" }
    ]
  },
  toothache: {
    text: "🚨 Toothache should never be ignored! It's usually a sign of infection, cavity, or nerve involvement.\n\n**Do NOT delay if you have:**\n• Severe or throbbing pain\n• Swelling in the gum or face\n• Pain with fever\n• Pain that keeps you up at night\n\nCall us immediately at **07942693933** — we'll fit you in at the earliest slot. Pain relief is our first priority!",
    replies: [
      { label: "Book urgent appointment", key: "book"      },
      { label: "Is it an emergency?",     key: "emergency" },
      { label: "Could it be RCT?",        key: "rct"       }
    ]
  },
  sensitiveTeeth: {
    text: "🥶 Tooth sensitivity (sharp pain from cold/hot/sweet) is common and treatable!\n\n**Common causes:**\n• Worn enamel or gum recession\n• Cracked tooth\n• Cavity\n• After whitening treatment\n\n**Treatments available:**\n• Desensitising toothpaste\n• Fluoride application\n• Bonding or fillings\n• Gum grafting (for severe cases)\n\nBook a check-up and Dr. Mane will find the exact cause!",
    replies: [
      { label: "Book check-up",              key: "book"        },
      { label: "Could it be a cavity?",      key: "restoration" },
      { label: "Home remedies for sensitivity", key: "cavityPrevention" }
    ]
  },
  brokenTooth: {
    text: "😬 A broken or chipped tooth needs prompt attention to avoid infection or further damage.\n\n**What to do right now:**\n• Rinse with warm salt water\n• If sharp edge is hurting, cover with dental wax (available at pharmacies)\n• Avoid chewing on that side\n• Visit us as soon as possible!\n\nWe can fix it with bonding, a crown, or reshaping depending on how much is broken.\n\n📞 Call **07942693933** for a quick appointment.",
    replies: [
      { label: "Book urgent appointment",  key: "book"      },
      { label: "What treatment needed?",   key: "reshaping" },
      { label: "Is it an emergency?",      key: "emergency" }
    ]
  },
  badBreath: {
    text: "😮‍💨 Persistent bad breath (halitosis) is often a dental issue, not just a hygiene problem.\n\n**Common causes:**\n• Gum disease\n• Decayed teeth\n• Dry mouth\n• Bacteria on tongue\n• Poor-fitting dental appliances\n\n**We can help with:**\n• Professional cleaning\n• Treating gum disease or cavities\n• Oral hygiene coaching\n\nDon't be embarrassed — it's very common and very treatable! Book a check-up.",
    replies: [
      { label: "Book cleaning appointment", key: "book"    },
      { label: "Gum disease treatment",     key: "therapy" },
      { label: "Oral hygiene tips",         key: "cavityPrevention" }
    ]
  },
  cavityPrevention: {
    text: "🦷 Prevention is always better (and cheaper!) than treatment.\n\n**Our prevention tips:**\n• Brush twice daily with fluoride toothpaste\n• Floss once daily\n• Visit us every 6 months for cleaning\n• Reduce sugary foods & drinks\n• Ask about sealants for back teeth\n• Drink plenty of water (especially after meals)\n\nA regular cleaning can save you from a costly RCT later! 😊",
    replies: [
      { label: "Book preventive check-up", key: "book"    },
      { label: "Teeth cleaning details",   key: "therapy" },
      { label: "Kids dental care",         key: "childDentistry" }
    ]
  },
  xrayNeeded: {
    text: "🔬 Dental X-rays are recommended for:\n\n• First visit (to see all teeth, roots & bone)\n• Detecting hidden cavities\n• Planning implants or orthodontic treatment\n• Checking wisdom teeth position\n\nOur X-rays use **minimal radiation** and are completely safe. They help us detect problems invisible to the naked eye — early detection saves teeth!",
    replies: [
      { label: "Is X-ray safe?",     key: "xrayNeeded" },
      { label: "Cost of X-ray?",     key: "price"      },
      { label: "Book appointment",   key: "book"       }
    ]
  },
  emergency: {
    text: "🚨 **Dental Emergency?** Call Dr. Akshay Mane's clinic immediately!\n\n📞 **07942693933**\n\n**We handle emergencies like:**\n• Severe or sudden toothache\n• Broken or knocked-out tooth\n• Lost filling or crown\n• Dental abscess or swelling\n• Bleeding gums after injury\n• Swollen jaw or face\n\n🕐 **Clinic hours: Mon–Sat, 10 AM – 8 PM**\nFor after-hours or Sunday emergencies, WhatsApp us and Dr. Mane's team will guide you.\n\n⚠️ A knocked-out tooth has the best chance of being saved if you reach us **within 30 minutes!**",
    replies: [
      { label: "Knocked-out tooth — what to do?", key: "knockedOutTooth" },
      { label: "Is swelling dangerous?",          key: "swelling"        },
      { label: "Get directions to clinic",        key: "directions"      }
    ]
  },
  knockedOutTooth: {
    text: "😱 **Knocked-out tooth — ACT FAST!**\n\n**Do this immediately:**\n1. Pick up the tooth by the crown (NOT the root)\n2. Rinse gently with clean water — do NOT scrub\n3. Try to place it back in the socket if possible\n4. If not, keep it in a glass of **cold milk** or between your cheek & gum\n5. Rush to our clinic within **30 minutes**\n\nThe sooner you arrive, the higher the chance of saving the tooth!\n\n📞 Call us: **07942693933**",
    replies: [
      { label: "Call clinic now",               key: "contact"    },
      { label: "Get directions",                key: "directions" },
      { label: "What if tooth can't be saved?", key: "implantProcess" }
    ]
  },
  swelling: {
    text: "⚠️ Facial or gum swelling is a sign of dental infection and should be treated urgently — it can spread if ignored.\n\n**While coming to us:**\n• Do NOT apply heat on swelling\n• A cold pack on the outside can reduce swelling temporarily\n• Do NOT pop any abscess yourself\n• Take paracetamol if pain is severe\n\n📞 Call **07942693933** immediately and come to the clinic as soon as possible.",
    replies: [
      { label: "Call clinic urgently",      key: "contact"    },
      { label: "Get directions",            key: "directions" },
      { label: "What causes dental swelling", key: "rct"      }
    ]
  },
  rctPainful: {
    text: "😌 **Is Root Canal painful?**\n\nThis is the most common question — and the answer will surprise you!\n\n**Modern RCT is NOT painful.** The procedure is done under local anaesthesia, so you feel no pain during treatment. There may be mild soreness for 1–2 days after, which is easily managed with pain relief.\n\nIn fact, RCT relieves the pain you've been suffering — it doesn't cause it! 😊",
    replies: [
      { label: "How many visits for RCT?", key: "rctVisits" },
      { label: "Book RCT appointment",     key: "book"      },
      { label: "RCT cost?",                key: "price"     }
    ]
  },
  rctVisits: {
    text: "📅 **How many visits does RCT take?**\n\n• **Simple cases:** 1–2 sittings\n• **Complex or infected cases:** 2–3 sittings\n\nAfter the root canal is complete, a crown is usually placed in a separate appointment to protect the tooth.\n\nDr. Akshay Mane will give you a clear treatment timeline after examining your tooth.",
    replies: [
      { label: "Book RCT appointment",              key: "book"      },
      { label: "Is a crown always needed after RCT?", key: "crownCap" },
      { label: "RCT cost?",                         key: "price"     }
    ]
  },
  bracesAge: {
    text: "👴 **Am I too old for braces?**\n\nAbsolutely not! There's no upper age limit for orthodontic treatment.\n\n• **Ideal age:** 12–16 years (while jaw is still growing)\n• **Adults:** Equally effective — just may take slightly longer\n• **Clear aligners** are a popular discreet option for working adults\n\nMany of our patients start orthodontic treatment in their 30s and 40s. It's never too late for a straighter smile! 😊",
    replies: [
      { label: "Clear aligners for adults?",       key: "straightening" },
      { label: "Book orthodontic consultation",    key: "book"          },
      { label: "Treatment duration for adults",    key: "straightening" }
    ]
  },
  extractionPain: {
    text: "💉 **Is tooth extraction painful?**\n\nThe extraction itself is done under **local anaesthesia**, so you won't feel pain — just some pressure.\n\nAfter the anaesthesia wears off (3–4 hours), mild soreness is normal for 1–3 days. We'll prescribe pain relief medication.\n\n**Tips for smooth recovery:**\n• Bite on gauze for 30–45 minutes\n• Avoid spitting or straws for 24 hours\n• Soft foods for 2–3 days\n• No smoking for 48 hours",
    replies: [
      { label: "Book extraction",          key: "book"       },
      { label: "Wisdom tooth extraction",  key: "extraction" },
      { label: "Cost of extraction",       key: "price"      }
    ]
  },
  crownCap: {
    text: "👑 **Dental Crown (Cap)** is a tooth-shaped cover placed over a damaged tooth to:\n\n• Restore shape and strength\n• Protect after root canal treatment\n• Cover heavily filled teeth\n• Improve appearance of discoloured teeth\n\n**Types:** Ceramic (most natural), Metal-ceramic, Full metal\n\nCrowns typically last **10–15 years** with good care.",
    replies: [
      { label: "Crown cost?",          key: "price"  },
      { label: "Crown after RCT?",     key: "rct"    },
      { label: "Book crown appointment", key: "book" }
    ]
  },
  implantProcess: {
    text: "🔩 **Dental Implant Process:**\n\n1. **Consultation & X-ray** — check bone health\n2. **Implant placement** — titanium screw inserted in jawbone (under anaesthesia)\n3. **Healing period** — 2–4 months for bone to fuse\n4. **Abutment placement** — connector attached to implant\n5. **Crown placement** — final tooth attached\n\nImplants look and feel like natural teeth and can last a **lifetime** with proper care. Best long-term solution for missing teeth!",
    replies: [
      { label: "Implant cost?",              key: "price"   },
      { label: "Am I suitable for implants?", key: "xrayNeeded" },
      { label: "Book implant consultation",  key: "book"    }
    ]
  },
  services: {
    text: "🦷 **Our Treatments at Dr. Akshay Mane's Clinic:**\n\n1. 🔧 Dental Restoration\n2. 😬 Straightening Teeth (Braces/Aligners)\n3. ✨ Tooth Reshaping\n4. 🦷 Wisdom Tooth Extraction\n5. 😌 Root Canal Treatment (RCT)\n6. 🛡️ Dental Therapy & Cleaning\n7. 🏥 Oral Rehabilitation\n\nTap any option to learn more, or call **07942693933** to discuss your concern!",
    replies: [
      { label: "Book appointment",          key: "book"           },
      { label: "Which treatment do I need?", key: "whichTreatment" },
      { label: "Pricing details",           key: "price"          }
    ]
  },
  whichTreatment: {
    text: "🤔 Not sure which treatment you need? That's completely normal!\n\nHere are some common concerns and what they usually mean:\n\n• **Tooth pain / cavity** → Restoration or RCT\n• **Crooked teeth** → Straightening / Braces\n• **Missing tooth** → Implant or Bridge\n• **Wisdom tooth pain** → Extraction\n• **Bleeding gums** → Therapy / Cleaning\n• **Chipped tooth** → Reshaping or Restoration\n\nThe best way is to visit us — **Dr. Akshay Mane** will guide you with the right plan. 😊",
    replies: [
      { label: "Book check-up",         key: "book"      },
      { label: "Emergency dental issue", key: "emergency" },
      { label: "Contact clinic",        key: "contact"   }
    ]
  },
  default: {
    text: "👋 Hi! Welcome to **Dr. Akshay Mane's Dental Clinic**, Gargoti.\n\nI can help you with:\n• 📅 Booking appointments\n• 🦷 Information on treatments\n• 📍 Clinic location & directions\n• 🕐 Clinic hours (Mon–Sat, 10 AM – 8 PM)\n• 💰 Pricing queries\n• 🚨 Dental emergencies\n\nWhat would you like to know? Or call/WhatsApp us at **07942693933**!",
    replies: [
      { label: "Book appointment",  key: "book"     },
      { label: "View all services", key: "services" },
      { label: "Clinic location",   key: "address"  }
    ]
  }
};

function getResponse(msg) {
  const m = msg.toLowerCase();
  if (m.includes("sunday") || m.includes("sun ")) return responses.sundayClosed;
  if (m.includes("consultation fee") || m.includes("consult fee") || m.includes("consult charge") || m.includes("first consult") || m.includes("consultation cost")) return responses.consultationFee;
  if (m.includes("book") || m.includes("appointment") || m.includes("schedule") || m.includes("fix appointment")) return responses.book;
  if (m.includes("available") || m.includes("slot")) return responses.appointmentAvailability;
  if (m.includes("same day") || m.includes("today")) return responses.sameDayAppointment;
  if (m.includes("wait") || (m.includes("how long") && m.includes("wait"))) return responses.waitingTime;
  if (m.includes("first visit") || m.includes("first time") || m.includes("new patient")) return responses.firstVisit;

  if (m.includes("hour") || m.includes("timing") || m.includes("open") || m.includes("close")) return responses.hours;
  if (m.includes("address") || m.includes("location") || m.includes("where") || m.includes("gargoti")) return responses.address;
  if (m.includes("direction") || m.includes("how to reach") || m.includes("how to come") || m.includes("find you")) return responses.directions;
  if (m.includes("park") || m.includes("parking")) return responses.parking;

  if (m.includes("whatsapp") || m.includes("message")) return responses.whatsapp;
  if (m.includes("contact") || m.includes("number") || m.includes("phone") || m.includes("call")) return responses.contact;

  if (m.includes("emi") || m.includes("instalment") || m.includes("upi") || m.includes("card") || m.includes("payment") || m.includes("pay")) return responses.paymentOptions;
  if (m.includes("insurance") || m.includes("cashless") || m.includes("mediclaim")) return responses.insurance;
  if (m.includes("price") || m.includes("cost") || m.includes("fee") || m.includes("charge") || m.includes("rate") || m.includes("how much")) return responses.price;

  if (m.includes("implant") || m.includes("missing tooth") || m.includes("replace tooth")) return responses.implantProcess;
  if (m.includes("crown") || m.includes("cap")) return responses.crownCap;
  if (m.includes("restoration") || m.includes("filling") || m.includes("cavity") || m.includes("bridge")) return responses.restoration;
  if (m.includes("straight") || m.includes("brace") || m.includes("aligner") || m.includes("crooked") || m.includes("ortho")) return responses.straightening;
  if (m.includes("reshape") || m.includes("reshaping") || m.includes("contouring") || m.includes("chip")) return responses.reshaping;
  if (m.includes("wisdom") || m.includes("extraction") || m.includes("remove tooth") || m.includes("pull tooth")) return responses.extraction;
  if (m.includes("rct") || m.includes("root canal") || m.includes("pulp") || m.includes("nerve")) return responses.rct;
  if (m.includes("therapy") || m.includes("clean") || m.includes("scaling") || m.includes("gum") || m.includes("bleed")) return responses.therapy;
  if (m.includes("rehabilitation") || m.includes("rehab") || m.includes("full mouth") || m.includes("multiple teeth")) return responses.rehabilitation;

  if (m.includes("anxious") || m.includes("anxiety") || m.includes("fear") || m.includes("nervous") || m.includes("phobia") || m.includes("scared")) return responses.anxiety;
  if (m.includes("child") || m.includes("kid") || m.includes("baby") || m.includes("son") || m.includes("daughter")) return responses.childDentistry;
  if (m.includes("toothache") || m.includes("tooth ache") || m.includes("throbbing")) return responses.toothache;
  if (m.includes("sensitiv")) return responses.sensitiveTeeth;
  if (m.includes("broken") || m.includes("break") || m.includes("cracked") || m.includes("fell off")) return responses.brokenTooth;
  if (m.includes("bad breath") || m.includes("smell") || m.includes("breath") || m.includes("halitosis")) return responses.badBreath;
  if (m.includes("prevent") || m.includes("avoid cavity") || m.includes("cavity prevention")) return responses.cavityPrevention;
  if (m.includes("x-ray") || m.includes("xray") || m.includes("x ray") || m.includes("scan")) return responses.xrayNeeded;
  if (m.includes("pain") || m.includes("painful") || m.includes("hurt")) return responses.pain;

  if (m.includes("knocked") || m.includes("fell out") || m.includes("tooth out") || m.includes("accident")) return responses.knockedOutTooth;
  if (m.includes("abscess") || m.includes("face swell") || m.includes("jaw") || m.includes("swelling") || m.includes("swell")) return responses.swelling;
  if (m.includes("emergency") || m.includes("urgent")) return responses.emergency;

  if (m.includes("rct painful") || m.includes("root canal pain") || m.includes("does rct hurt")) return responses.rctPainful;
  if (m.includes("how many") && (m.includes("rct") || m.includes("root canal") || m.includes("sitting"))) return responses.rctVisits;
  if (m.includes("old") && (m.includes("brace") || m.includes("aligner") || m.includes("ortho"))) return responses.bracesAge;
  if (m.includes("extraction pain") || m.includes("extract hurt") || m.includes("tooth pull pain")) return responses.extractionPain;

  if (m.includes("service") || m.includes("treatment") || m.includes("what do you") || m.includes("offer")) return responses.services;
  if (m.includes("which treatment") || m.includes("what treatment") || m.includes("not sure") || m.includes("don't know")) return responses.whichTreatment;

  return responses.default;
}

function toggleChat() {
  chatOpen = !chatOpen;
  const win = document.getElementById('chatWindow');
  const btn = document.getElementById('chatBtn');
  const notif = document.getElementById('chatNotification');
  win.classList.toggle('open', chatOpen);
  if (chatOpen) { 
    // keep original icon, don't show X here
    btn.innerHTML = '💬';
    btn.querySelector('.chat-badge')?.remove(); 
    if (notif) notif.style.display = 'none';
  }
  else {
    btn.innerHTML = '💬<span class="chat-badge">1</span>'; 
  }
}

function openChatFromNotification() {
  const notif = document.getElementById('chatNotification');
  if (notif) notif.style.display = 'none';
  if (!chatOpen) toggleChat();
}

window.addEventListener('load', () => {
  setTimeout(() => {
    const notif = document.getElementById('chatNotification');
    if (notif) notif.style.display = 'block';
  }, 1000);
});

function getTime() {
  return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}

function addMsg(text, type) {
  const box = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `msg ${type}`;
  div.innerHTML = `<div class="msg-bubble">${text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</div><div class="msg-time">${getTime()}</div>`;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
  return div;
}

function addBotReply(resp) {
  const box = document.getElementById('chatMessages');
  const typing = document.createElement('div');
  typing.className = 'chat-typing';
  typing.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  box.appendChild(typing);
  box.scrollTop = box.scrollHeight;

  setTimeout(() => {
    typing.remove();
    const div = addMsg(resp.text, 'bot');

    if (resp.replies && resp.replies.length) {
      const qr = document.createElement('div');
      qr.className = 'quick-replies';
      resp.replies.forEach(r => {
        const btn = document.createElement('button');
        btn.className = 'qr-btn';
        btn.textContent = r.label;
        btn.onclick = () => sendByKey(r.label, r.key);
        qr.appendChild(btn);
      });
      div.appendChild(qr);
    }
    box.scrollTop = box.scrollHeight;
  }, 900 + Math.random() * 600);
}

function sendByKey(label, key) { addMsg(label, 'user'); addBotReply(responses[key] || responses.default); }

function quickSend(text) {
  addMsg(text, 'user');
  addBotReply(getResponse(text));
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  addMsg(msg, 'user');
  addBotReply(getResponse(msg));
}

function handleEnter(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }
