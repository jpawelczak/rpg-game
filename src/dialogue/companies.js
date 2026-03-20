export const companies = {
    0: {
        id: 0,
        name: "OmniCorp Tech",
        contactName: "Sarah (CISO)",
        nodes: { start: 'greeting' },
        dialogueTree: {
            'greeting': {
                text: "Hi Jacob. At OmniCorp, our biggest challenge is preventing unauthorized access to server rooms during off-hours.",
                choices: [
                    { text: "Do you use basic keycards right now?", nextNode: 'keycards' },
                    { text: "Have you tried biometric scanners?", nextNode: 'biometrics' }
                ]
            },
            'keycards': {
                text: "Yes, and they keep getting lost or stolen. It's a nightmare to track.",
                choices: [
                    { text: "We can provide multi-factor physical access points.", nextNode: 'solution' }
                ]
            },
            'biometrics': {
                text: "We considered them, but employees are worried about privacy.",
                choices: [
                    { text: "Our multi-factor physical access tokens don't store personal data.", nextNode: 'solution' }
                ]
            },
            'solution': {
                text: "That sounds like exactly what we need. Let's schedule a pilot.",
                choices: [{ text: "Great, I'll send you the details.", nextNode: 'end' }]
            }
        }
    },
    1: {
        id: 1,
        name: "VaultHealth",
        contactName: "Dr. Chen",
        nodes: { start: 'greeting' },
        dialogueTree: {
            'greeting': {
                text: "Hello Jacob. As a hospital, we need to secure drug cabinets, but doctors need quick access in emergencies without fumbling with keys.",
                choices: [
                    { text: "Speed is critical. Do you have RFID badges?", nextNode: 'rfid' },
                    { text: "Would a centrally managed digital lock help?", nextNode: 'locks' }
                ]
            },
            'rfid': {
                text: "We do, but sometimes they get left at the desk.",
                choices: [{ text: "We have smartximity sensors that bind to the doctor's smartwatch.", nextNode: 'solution' }]
            },
            'locks': {
                text: "Only if it doesn't slow down the response time.",
                choices: [{ text: "With smartximity sensors, cabinets unlock as the authorized person approaches.", nextNode: 'solution' }]
            },
            'solution': {
                text: "If it's fast and secure, we definitely want to try it.",
                choices: [{ text: "I'll have our team draft a proposal.", nextNode: 'end' }]
            }
        }
    },
    2: {
        id: 2,
        name: "GlobalLogistics",
        contactName: "Marcus (Ops Lead)",
        nodes: { start: 'greeting' },
        dialogueTree: {
            'greeting': {
                text: "Jacob! Our warehouses are huge, and we have contractors coming in and out constantly. Tailgating is driving me crazy.",
                choices: [
                    { text: "Are you using turnstiles?", nextNode: 'turnstiles' },
                    { text: "How do you track who enters?", nextNode: 'tracking' }
                ]
            },
            'turnstiles': {
                text: "No, just large bay doors and a side entrance.",
                choices: [{ text: "We can install AI cameras integrated with access control to detect tailgating.", nextNode: 'solution' }]
            },
            'tracking': {
                text: "Just an old sign-in sheet, honestly.",
                choices: [{ text: "We can install automated optical turnstiles and AI cameras.", nextNode: 'solution' }]
            },
            'solution': {
                text: "That would finally give us visibility. Thanks Jacob.",
                choices: [{ text: "You're welcome. Let's talk numbers soon.", nextNode: 'end' }]
            }
        }
    },
    3: {
        id: 3,
        name: "Pinnacle Finance",
        contactName: "Elena (VP Security)",
        nodes: { start: 'greeting' },
        dialogueTree: {
            'greeting': {
                text: "Welcome Jacob. Our traders leave their workstations unattended, and it's a massive compliance risk. I need to enforce screen locks instantly.",
                choices: [
                    { text: "Can you enforce a 1-minute timeout?", nextNode: 'timeout' },
                    { text: "Do you use proximity tokens?", nextNode: 'tokens' }
                ]
            },
            'timeout': {
                text: "Traders hate it. It interrupts their workflow.",
                choices: [{ text: "A proximity token locks the PC the moment they walk away.", nextNode: 'solution' }]
            },
            'tokens': {
                text: "No, we rely on them pressing Ctrl-Alt-Del, which they forget.",
                choices: [{ text: "We can provide continuous authentication tokens that auto-lock when out of range.", nextNode: 'solution' }]
            },
            'solution': {
                text: "Brilliant. That solves the compliance issue seamlessly.",
                choices: [{ text: "Glad to hear it. I'll get prototypes sent over.", nextNode: 'end' }]
            }
        }
    },
    4: {
        id: 4,
        name: "NexGen Manufacturing",
        contactName: "Raul (Plant Manager)",
        nodes: { start: 'greeting' },
        dialogueTree: {
            'greeting': {
                text: "Hey Jacob. Look, my floor workers wear heavy gloves. They can't type passwords or use fingerprints to start the machines.",
                choices: [
                    { text: "What about retinal scans?", nextNode: 'retinal' },
                    { text: "What if the gloves themselves had RFID?", nextNode: 'rfid' }
                ]
            },
            'retinal': {
                text: "Too expensive and fragile for a dusty plant floor.",
                choices: [{ text: "We make ruggedized wearable NFC bands that work through gloves.", nextNode: 'solution' }]
            },
            'rfid': {
                text: "That's an interesting idea, but gloves tear and get replaced often.",
                choices: [{ text: "Instead of gloves, we can use ruggedized wearable NFC wristbands.", nextNode: 'solution' }]
            },
            'solution': {
                text: "Wristbands... yeah, that could work. They don't take them off.",
                choices: [{ text: "Excellent point. I'll note that down.", nextNode: 'end' }]
            }
        }
    },
    5: {
        id: 5,
        name: "EduTech Hub",
        contactName: "Priya (Facilities)",
        nodes: { start: 'greeting' },
        dialogueTree: {
            'greeting': {
                text: "Jacob! We run a 24/7 co-working space. I need to grant temporary access to users, but I want it fully automated via their phones.",
                choices: [
                    { text: "Are you using mobile credentials?", nextNode: 'mobile' },
                    { text: "How do you handle key handovers now?", nextNode: 'keys' }
                ]
            },
            'mobile': {
                text: "Not yet. We're looking for a system that integrates with our booking app.",
                choices: [{ text: "Our cloud-managed BLE readers have an API just for that.", nextNode: 'solution' }]
            },
            'keys': {
                text: "A lockbox. It's terrible and insecure.",
                choices: [{ text: "We can upgrade you to cloud-managed BLE readers that sync with your app.", nextNode: 'solution' }]
            },
            'solution': {
                text: "Perfect. An API integration is exactly what our dev team asked for.",
                choices: [{ text: "I'll send the API docs right away.", nextNode: 'end' }]
            }
        }
    },
    6: {
        id: 6,
        name: "AeroDynamics Inc",
        contactName: "Colonel Hayes",
        nodes: { start: 'greeting' },
        dialogueTree: {
            'greeting': {
                text: "Listen closely, Jacob. We have government contracts. We need hardware security keys that are FIPS certified and tamper-evident for all engineers.",
                choices: [
                    { text: "We offer FIPS 140-2 Level 3 certified tokens.", nextNode: 'fips' },
                    { text: "Does it need to support legacy systems as well?", nextNode: 'legacy' }
                ]
            },
            'fips': {
                text: "Good. Do they have physical tamper evidence?",
                choices: [{ text: "Yes, hypersonic ultrasonic welding makes them impossible to open without destroying the chip.", nextNode: 'solution' }]
            },
            'legacy': {
                text: "Yes, but compliance is the main hurdle.",
                choices: [{ text: "Our tokens are FIPS certified and ultrasonically welded for tamper evidence.", nextNode: 'solution' }]
            },
            'solution': {
                text: "That meets the Department of Defense requirements. Draft the paperwork.",
                choices: [{ text: "Yes sir, right away.", nextNode: 'end' }]
            }
        }
    },
    7: {
        id: 7,
        name: "EcoData Center",
        contactName: "Lin (Chief Architect)",
        nodes: { start: 'greeting' },
        dialogueTree: {
            'greeting': {
                text: "Hi Jacob. Server racks are our lifeblood. We need a way to track EXACTLY who opened which rack, and when, down to the second.",
                choices: [
                    { text: "Do you have locks on individual racks?", nextNode: 'locks' },
                    { text: "Are you tracking data center entrance only?", nextNode: 'entrance' }
                ]
            },
            'locks': {
                text: "Yes, but they all use the same master key.",
                choices: [{ text: "We can install networked smart rack handles tied to individual auditor logs.", nextNode: 'solution' }]
            },
            'entrance': {
                text: "Currently yes, which doesn't prove who touched the actual server.",
                choices: [{ text: "We can install networked smart rack handles that log every micro-interaction.", nextNode: 'solution' }]
            },
            'solution': {
                text: "Log-level visibility at the rack level. That's a game changer.",
                choices: [{ text: "I agree. Let's set up a demo.", nextNode: 'end' }]
            }
        }
    },
    8: {
        id: 8,
        name: "Apex Utilities",
        contactName: "Javier (Field Ops)",
        nodes: { start: 'greeting' },
        dialogueTree: {
            'greeting': {
                text: "Hola Jacob. Our remote power substations are in the middle of nowhere. No internet, no power sometimes. How do we secure the gates?",
                choices: [
                    { text: "Padlocks?", nextNode: 'padlocks' },
                    { text: "Do the technicians have smartphones?", nextNode: 'smartphones' }
                ]
            },
            'padlocks': {
                text: "Yes, but keys get copied instantly.",
                choices: [{ text: "We have energy-harvesting smart padlocks. The NFC from a phone powers the unlock.", nextNode: 'solution' }]
            },
            'smartphones': {
                text: "Yes, they all have company phones.",
                choices: [{ text: "We have energy-harvesting smart padlocks. The phone's NFC powers the unlock.", nextNode: 'solution' }]
            },
            'solution': {
                text: "No batteries to change? That saves us thousands a year.",
                choices: [{ text: "Exactly. The ROI is immediate.", nextNode: 'end' }]
            }
        }
    },
    9: {
        id: 9,
        name: "RetailMax",
        contactName: "Chloe (Loss Prevention)",
        nodes: { start: 'greeting' },
        dialogueTree: {
            'greeting': {
                text: "Jacob! Employee theft in our stockrooms is up 20%. They prop the doors open with boxes to bypass the card reader.",
                choices: [
                    { text: "Have you tried door alarms?", nextNode: 'alarms' },
                    { text: "What about a stricter policy?", nextNode: 'policy' }
                ]
            },
            'alarms': {
                text: "They just ignore the beeping, or managers turn it off.",
                choices: [{ text: "Our smart-hinge system detects props and instantly texts management with a photo.", nextNode: 'solution' }]
            },
            'policy': {
                text: "Policy doesn't work if we can't enforce it.",
                choices: [{ text: "Our smart-hinge system detects door propping and alerts management with a camera snapshot.", nextNode: 'solution' }]
            },
            'solution': {
                text: "Real-time photographic proof. That will stop it.",
                choices: [{ text: "It definitely will. I'll get you a quote.", nextNode: 'end' }]
            }
        }
    }
};
