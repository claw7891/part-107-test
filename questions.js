// FAA Part 107 Sample Questions Bank (~300 questions)
// Topical areas: Regulations, Airspace, Weather, Loading/Performance,
// Operations, CRM, Radio, Airports, Physiology, ADM, Maintenance, Night Ops

var questions = [
  // ===== REGULATIONS (14 CFR Part 107) =====
  {
    id: 1,
    text: "What is the maximum allowable altitude for a small unmanned aircraft (sUAS) operating under Part 107 above ground level (AGL), without a waiver?",
    options: [
      "200 feet AGL",
      "400 feet AGL",
      "500 feet AGL",
      "1,000 feet AGL"
    ],
    correctAnswer: 1,
    explanation: "Part 107 §107.51 limits sUAS altitude to 400 feet AGL unless the aircraft is within 400 feet of a structure, in which case it may fly up to 400 feet above the structure's uppermost limit."
  },
  {
    id: 2,
    text: "Under Part 107, what minimum flight visibility is required from the control station for all sUAS operations?",
    options: [
      "1 statute mile",
      "2 statute miles",
      "3 statute miles",
      "5 statute miles"
    ],
    correctAnswer: 2,
    explanation: "Part 107 §107.51 requires at least 3 statute miles of flight visibility from the control station for all sUAS operations."
  },
  {
    id: 3,
    text: "Under Part 107, a remote pilot-in-command must yield the right of way to:",
    options: [
      "Only manned aircraft",
      "Only emergency aircraft",
      "All aircraft, vehicles, vessels, and persons",
      "Only aircraft in controlled airspace"
    ],
    correctAnswer: 2,
    explanation: "Part 107 §107.37 states that the remote PIC must yield the right of way to all aircraft, airborne vehicles, vessels, and persons. The sUAS is the least maneuverable platform and must always give way."
  },
  {
    id: 4,
    text: "What is the maximum groundspeed permitted for a small unmanned aircraft under Part 107?",
    options: [
      "55 knots",
      "87 knots",
      "100 knots",
      "120 knots"
    ],
    correctAnswer: 1,
    explanation: "Part 107 §107.51(b) limits groundspeed to 87 knots (100 mph)."
  },
  {
    id: 5,
    text: "What is the maximum takeoff weight of a small unmanned aircraft under Part 107?",
    options: [
      "25 pounds",
      "45 pounds",
      "55 pounds",
      "75 pounds"
    ],
    correctAnswer: 2,
    explanation: "A small unmanned aircraft is defined in §107.3 as weighing less than 55 pounds (25 kg) including everything onboard or attached to the aircraft."
  },
  {
    id: 6,
    text: "How often must a remote pilot complete recurrent training to maintain their Part 107 certificate?",
    options: [
      "Every 6 months",
      "Every 12 months",
      "Every 24 months",
      "Every 36 months"
    ],
    correctAnswer: 2,
    explanation: "§107.65 requires remote pilots to complete recurrent training every 24 calendar months to remain current."
  },
  {
    id: 7,
    text: "Which documents must a remote pilot have available upon request by the FAA or law enforcement?",
    options: [
      "Remote pilot certificate only",
      "Remote pilot certificate and aircraft registration",
      "Remote pilot certificate, aircraft registration, and any applicable waivers",
      "No documentation required"
    ],
    correctAnswer: 2,
    explanation: "§107.7 requires the remote PIC to make the remote pilot certificate, aircraft registration, and any applicable waivers or authorizations available for inspection upon request by the FAA, NTSB, TSA, or any federal, state, or local law enforcement officer."
  },
  {
    id: 8,
    text: "What is the minimum age to obtain a remote pilot certificate under Part 107?",
    options: [
      "14 years old",
      "16 years old",
      "17 years old",
      "18 years old"
    ],
    correctAnswer: 1,
    explanation: "§107.61(b) sets the minimum age for a remote pilot certificate at 16 years old."
  },
  {
    id: 9,
    text: "Under Part 107, from what point is 'ground speed' measured?",
    options: [
      "The aircraft's speed over the Earth's surface",
      "The aircraft's speed through the air mass",
      "The aircraft's vertical speed",
      "The aircraft's indicated airspeed"
    ],
    correctAnswer: 0,
    explanation: "Ground speed is the aircraft's horizontal speed relative to the Earth's surface, measured over the ground. Airspeed is speed relative to the air mass."
  },
  {
    id: 10,
    text: "A remote pilot is operating a sUAS that weighs 0.55 pounds. Is this aircraft considered a 'small unmanned aircraft' under Part 107?",
    options: [
      "No, it is below the minimum weight threshold",
      "Yes, because it weighs less than 55 pounds",
      "No, Part 107 only applies to aircraft over 5 pounds",
      "Yes, but only if operated for commercial purposes"
    ],
    correctAnswer: 1,
    explanation: "§107.3 defines a small unmanned aircraft as any unmanned aircraft weighing less than 55 pounds. There is no minimum weight. Even aircraft under 0.55 pounds (250 grams) are subject to Part 107 if operated for commercial purposes."
  },
  {
    id: 11,
    text: "Which of the following is NOT a requirement to obtain a remote pilot certificate with a small UAS rating?",
    options: [
      "Be at least 16 years old",
      "Pass an initial aeronautical knowledge test",
      "Hold at least a private pilot certificate",
      "Be vetted by the Transportation Security Administration (TSA)"
    ],
    correctAnswer: 2,
    explanation: "A private pilot certificate is NOT required. Applicants must be 16, pass the knowledge test, and complete TSA security vetting (for non-U.S. citizens)."
  },
  {
    id: 12,
    text: "What is the requirement regarding operation of a small unmanned aircraft directly over people?",
    options: [
      "Always allowed",
      "Allowed only if the aircraft is under 0.55 pounds",
      "Prohibited unless the operation falls under an exception or waiver",
      "Allowed only during daylight hours"
    ],
    correctAnswer: 2,
    explanation: "Under §107.39, operating a sUAS over people is generally prohibited unless it meets one of the four categories of operations defined in §107.110 (Category 1-4 operations based on risk) or the operator has a waiver."
  },
  {
    id: 13,
    text: "Can a remote pilot operate multiple small unmanned aircraft at the same time?",
    options: [
      "Yes, with no restrictions",
      "Yes, up to two aircraft",
      "No, each aircraft requires its own remote PIC",
      "Yes, if they all weigh under 5 pounds"
    ],
    correctAnswer: 2,
    explanation: "§107.35 specifies that a remote PIC cannot operate more than one small unmanned aircraft at a time because each requires its own pilot-in-command."
  },
  {
    id: 14,
    text: "What action must a remote pilot take if they are convicted of operating a drone as a 'prize' contest?",
    options: [
      "Nothing — it's not relevant to their FAA certificate",
      "Report the conviction to the FAA within 60 days",
      "Report the conviction to the FAA within 10 days",
      "Report the conviction to the TSA"
    ],
    correctAnswer: 1,
    explanation: "§107.19(c) requires the remote PIC to report any conviction involving operating a drone as a prize contest to the FAA within 60 calendar days."
  },
  {
    id: 15,
    text: "If a remote pilot's small unmanned aircraft is involved in an accident resulting in serious injury, how long do they have to report it to the FAA?",
    options: [
      "Immediately, but no later than 24 hours",
      "Within 10 days",
      "Within 30 days",
      "No reporting is required — only property damage must be reported"
    ],
    correctAnswer: 1,
    explanation: "§107.9 requires the remote PIC to report any operation that results in serious injury, loss of consciousness, or property damage exceeding $500 to the FAA within 10 days."
  },
  {
    id: 16,
    text: "What must a remote pilot do if they learn that their small unmanned aircraft has caused property damage of $600?",
    options: [
      "Nothing — only injuries require reporting",
      "Report to the FAA within 10 days",
      "Report to the NTSB within 10 days",
      "Report to local law enforcement"
    ],
    correctAnswer: 1,
    explanation: "§107.9 requires reporting to the FAA within 10 days when property damage exceeds $500. The threshold is $500 for property damage, or any serious injury/loss of consciousness."
  },
  {
    id: 17,
    text: "What is the minimum age for a person manipulating the controls of a small unmanned aircraft under direct supervision of a remote PIC?",
    options: [
      "No minimum age",
      "13 years old",
      "14 years old",
      "16 years old"
    ],
    correctAnswer: 0,
    explanation: "There is no minimum age for a person manipulating the controls under direct supervision of a remote PIC, provided the remote PIC can take over control immediately and both parties meet the safety requirements of §107.31 and §107.33."
  },
  {
    id: 18,
    text: "Under Part 107, who is directly responsible for ensuring the safe operation of a small unmanned aircraft?",
    options: [
      "The person manipulating the controls",
      "The remote pilot-in-command",
      "The aircraft owner",
      "Both the remote PIC and the VO"
    ],
    correctAnswer: 1,
    explanation: "§107.19(a) states the remote PIC is directly responsible for and is the final authority over the safe operation of the small unmanned aircraft."
  },
  {
    id: 19,
    text: "Under Part 107, a person may not operate a small unmanned aircraft if they know or have reason to know of any physical or mental condition that would interfere with safe operation. This includes:",
    options: [
      "Taking over-the-counter allergy medication",
      "Being tired or fatigued",
      "Drinking alcohol within 8 hours of operation",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "§107.27 prohibits operation when the remote PIC knows of any physical or mental condition that would interfere with safe operation. This includes fatigue, medication side effects, and the 8-hour bottle-to-throttle rule for alcohol."
  },
  {
    id: 20,
    text: "What is the '8-hour bottle-to-throttle' rule under Part 107?",
    options: [
      "No alcohol consumption within 8 hours of flight",
      "No food consumption within 8 hours of flight",
      "Battery charging must be complete 8 hours before flight",
      "Preflight inspection must be done within 8 hours"
    ],
    correctAnswer: 0,
    explanation: "The 8-hour bottle-to-throttle rule prohibits operating a sUAS within 8 hours of consuming any alcoholic beverage, while under the influence of alcohol, or with a BAC of 0.04% or greater."
  },
  {
    id: 21,
    text: "What class of airspace typically surrounds the busiest airports and has the most restrictive requirements for drone operations?",
    options: [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    correctAnswer: 1,
    explanation: "Class B airspace surrounds the nation's busiest airports (e.g., LAX, JFK). It typically has a surface area and multiple shelves extending upward. Operations require prior FAA authorization via LAANC or DroneZone."
  },
  {
    id: 22,
    text: "What is LAANC?",
    options: [
      "A type of drone motor",
      "Low Altitude Authorization and Notification Capability — an automated system for airspace authorizations",
      "A drone registration system",
      "A weather reporting system"
    ],
    correctAnswer: 1,
    explanation: "LAANC (Low Altitude Authorization and Notification Capability) is an FAA system that provides near real-time automated approval for drone operations in controlled airspace through approved service suppliers."
  },
  {
    id: 23,
    text: "What is the maximum permitted speed for a small unmanned aircraft when operating within 400 feet of a structure?",
    options: [
      "Still 87 knots",
      "No more than 50 knots",
      "No more than 40 knots",
      "Speed is not regulated when near structures"
    ],
    correctAnswer: 0,
    explanation: "§107.51(b) limits groundspeed to 87 knots regardless of proximity to structures. The altitude exception for structures (up to 400 feet above the structure) does not change the speed limitation."
  },
  {
    id: 24,
    text: "Is it permissible to operate a small unmanned aircraft over a non-participating person's property without their permission under Part 107?",
    options: [
      "Yes, airspace is public domain",
      "No, private property rights extend indefinitely upward",
      "Yes, but the operator must maintain visual line of sight",
      "No, written permission is always required"
    ],
    correctAnswer: 0,
    explanation: "The FAA maintains that navigable airspace is a public highway. Overflight of private property is not a trespass issue under federal law, though operators may still face state-level privacy or nuisance claims."
  },
  {
    id: 25,
    text: "What documentation proves that a small unmanned aircraft is registered with the FAA?",
    options: [
      "Only the registration number on the aircraft",
      "The Certificate of Aircraft Registration and the registration number displayed on the aircraft",
      "A receipt of purchase",
      "N-number issued by the FAA"
    ],
    correctAnswer: 1,
    explanation: "FAA registration requires both a Certificate of Aircraft Registration (paper document) carried by the remote PIC and the registration number displayed on the aircraft."
  },
  {
    id: 26,
    text: "A remote pilot has their remote pilot certificate suspended. How long do they have to surrender it to the FAA?",
    options: [
      "30 days",
      "60 days",
      "90 days",
      "Immediately"
    ],
    correctAnswer: 3,
    explanation: "When a certificate is suspended or revoked, the holder must surrender it to the FAA immediately upon request."
  },
  {
    id: 27,
    text: "What is the purpose of a NOTAM (Notice to Air Missions)?",
    options: [
      "To provide weather forecasts",
      "To provide notices of flight restrictions (TFRs), hazards, and airspace changes",
      "To register drones",
      "To schedule airspace authorizations"
    ],
    correctAnswer: 1,
    explanation: "NOTAMs provide time-critical information about hazards, airspace restrictions (including TFRs, stadium restrictions, and special events), navigational aid outages, and other safety information."
  },
  {
    id: 28,
    text: "If the remote pilot becomes aware of a conflicting aircraft, what action should be taken?",
    options: [
      "Climb to avoid the aircraft",
      "Descend immediately",
      "Yield the right of way — maneuver away and, if necessary, land",
      "Continue on course; the manned aircraft will avoid the drone"
    ],
    correctAnswer: 2,
    explanation: "§107.37 requires yielding the right of way to all other aircraft. The sUAS must maneuver away from the conflicting traffic and land if necessary to ensure safety."
  },
  {
    id: 29,
    text: "Can a remote pilot make a 'prize contest' out of drone operations (e.g., racing for prizes)?",
    options: [
      "Yes, with no restrictions",
      "Yes, but only with a waiver",
      "No, prize contests involving drones are prohibited",
      "Yes, but only for non-monetary prizes"
    ],
    correctAnswer: 2,
    explanation: "§107.19(b) prohibits operating a drone as a prize contest. The FAA views this as inherently unsafe because it encourages reckless operation."
  },
  {
    id: 30,
    text: "How long does the FAA registration of a small unmanned aircraft remain valid?",
    options: [
      "1 year",
      "2 years",
      "3 years",
      "Permanent until cancelled"
    ],
    correctAnswer: 2,
    explanation: "FAA aircraft registration for sUAS is valid for 3 years from the date of issue. It must be renewed before expiration."
  },
  // ===== AIRSPACE =====
  {
    id: 31,
    text: "What class of airspace begins at 18,000 feet MSL and extends up to Flight Level 600?",
    options: [
      "Class B",
      "Class C",
      "Class A",
      "Class E"
    ],
    correctAnswer: 2,
    explanation: "Class A airspace extends from 18,000 feet MSL up to FL600 (60,000 feet). Part 107 operations are generally not conducted in Class A airspace."
  },
  {
    id: 32,
    text: "What type of airspace typically surrounds airports with operational control towers and radar approach control, with a radius of 5-10 nautical miles?",
    options: [
      "Class B",
      "Class C",
      "Class D",
      "Class E"
    ],
    correctAnswer: 1,
    explanation: "Class C airspace surrounds airports with an operational control tower, radar approach control, and a certain level of passenger traffic. It typically has a 5 NM radius core and a 10 NM outer ring."
  },
  {
    id: 33,
    text: "What is the floor of Class E airspace in most areas away from airports?",
    options: [
      "Surface",
      "700 feet AGL",
      "1,200 feet AGL",
      "14,500 feet MSL"
    ],
    correctAnswer: 2,
    explanation: "In most areas away from airports, Class E airspace begins at 1,200 feet AGL. Where depicted with a magenta shaded ring, it begins at 700 feet AGL."
  },
  {
    id: 34,
    text: "What is the primary difference between controlled and uncontrolled airspace?",
    options: [
      "Controlled airspace has a lower speed limit",
      "Controlled airspace requires ATC authorization for sUAS operations",
      "Controlled airspace is only for commercial aircraft",
      "Uncontrolled airspace has no weather minimums"
    ],
    correctAnswer: 1,
    explanation: "In controlled airspace (Classes B, C, D, and some Class E), sUAS operations require prior ATC authorization. Uncontrolled airspace (Class G) does not require ATC authorization."
  },
  {
    id: 35,
    text: "What does a thick, solid blue line around an airport on a sectional chart indicate?",
    options: [
      "Class B airspace",
      "Class C airspace",
      "Class D airspace",
      "Restricted area"
    ],
    correctAnswer: 0,
    explanation: "Class B airspace is depicted on sectional charts as a heavy solid blue line around major airports."
  },
  {
    id: 36,
    text: "What does a thick magenta line around an airport on a sectional chart indicate?",
    options: [
      "Class C airspace",
      "Class D airspace",
      "Class E airspace to surface",
      "MOA"
    ],
    correctAnswer: 0,
    explanation: "Class C airspace is depicted with a heavy magenta line on sectional charts."
  },
  {
    id: 37,
    text: "What does a segmented dashed blue line around an airport indicate?",
    options: [
      "Class B airspace",
      "Class C airspace",
      "Class D airspace",
      "Class E surface area"
    ],
    correctAnswer: 2,
    explanation: "Class D airspace is depicted with a dashed blue line on sectional charts."
  },
  {
    id: 38,
    text: "What is a Military Operations Area (MOA)?",
    options: [
      "An area where military aircraft conduct training operations",
      "An area where drones are prohibited",
      "A national park",
      "An airport operated by the military"
    ],
    correctAnswer: 0,
    explanation: "An MOA is designated airspace where military training (e.g., air combat maneuvers, low-altitude tactics) occurs. While sUAS can operate in an MOA without prior authorization, it's advisable to check NOTAMs and avoid active training."
  },
  {
    id: 39,
    text: "What is a Temporary Flight Restriction (TFR)?",
    options: [
      "A permanent airspace restriction",
      "A time-limited restriction over a specific area, such as natural disasters, VIP movement, or special events",
      "A restriction on flight speeds",
      "A restriction on drone weight"
    ],
    correctAnswer: 1,
    explanation: "TFRs are time-limited airspace restrictions issued for specific events (fires, VIP movements, stadium events, space launches, etc.). They are published via NOTAM and can cover several miles around the event."
  },
  {
    id: 40,
    text: "Are drone flights allowed within a TFR that is established for wildfire operations?",
    options: [
      "Yes, as long as the drone stays below 400 feet",
      "No — drones are prohibited in wildfire TFRs, and flying one can ground firefighting aircraft",
      "Yes, but only with line of sight to the fire",
      "Yes, but only with a waiver"
    ],
    correctAnswer: 1,
    explanation: "Wildfire TFRs typically prohibit all unauthorized aircraft, including drones, within the restricted area. Flying a drone in a wildfire TFR can cause air tankers and helicopters to be grounded — a serious safety risk."
  },
  {
    id: 41,
    text: "What airspace class typically has no ATC authorization requirement for sUAS operations?",
    options: [
      "Class B",
      "Class C",
      "Class D",
      "Class G"
    ],
    correctAnswer: 3,
    explanation: "Class G (uncontrolled) airspace does not require ATC authorization for sUAS operations. It exists where no other controlled airspace is designated."
  },
  {
    id: 42,
    text: "What does a 'National Security Area' depicted on a sectional chart indicate?",
    options: [
      "An area where all aircraft are permanently prohibited",
      "An area where flight is discouraged for security purposes",
      "An area reserved for military training",
      "An area with special wildlife protections"
    ],
    correctAnswer: 1,
    explanation: "National Security Areas are depicted on charts to alert pilots to areas where flight is discouraged for national security reasons. While not a legal prohibition, operators are advised to avoid them."
  },
  {
    id: 43,
    text: "What are the vertical limits of Class G airspace?",
    options: [
      "Surface to 14,500 feet MSL everywhere",
      "Surface to 1,200 feet AGL everywhere",
      "Surface to the floor of the overlying controlled airspace",
      "Surface to 18,000 feet MSL"
    ],
    correctAnswer: 2,
    explanation: "Class G extends from the surface to the base of the overlying controlled airspace (usually 700 feet AGL or 1,200 feet AGL, depending on area, but can be higher in remote areas)."
  },
  {
    id: 44,
    text: "What is the purpose of the 'blue segmented line' surrounding an area with altitude values on a sectional chart?",
    options: [
      "It indicates a Military Operations Area",
      "It indicates Class E airspace beginning at the surface",
      "It indicates a restricted area",
      "It indicates Class G airspace"
    ],
    correctAnswer: 1,
    explanation: "A blue segmented line on a sectional chart indicates Class E airspace that begins at the surface (sfc). These are transition areas around airports without towers."
  },
  {
    id: 45,
    text: "If a sectional chart shows a magenta shaded circle around an airport with a number '70' in it, what does this mean?",
    options: [
      "Class E airspace begins at 700 feet AGL",
      "Elevation of the airport is 700 feet MSL",
      "Class D airspace from surface to 7,000 feet",
      "Runway length is 700 feet"
    ],
    correctAnswer: 0,
    explanation: "A magenta shaded ring indicates Class E airspace beginning at 700 feet AGL. The number inside is the floor height of the Class E airspace in hundreds of feet."
  },
  // ===== WEATHER =====
  {
    id: 46,
    text: "What does a METAR (Aviation Routine Weather Report) provide for a pilot?",
    options: [
      "Forecast weather for the next 24 hours",
      "Current weather observations at a specific airport",
      "Winds aloft at altitude",
      "Satellite imagery analysis"
    ],
    correctAnswer: 1,
    explanation: "A METAR is an hourly observation of actual weather conditions at an airport, including wind, visibility, weather phenomena, sky condition, temperature, dewpoint, and altimeter setting."
  },
  {
    id: 47,
    text: "In a METAR, what does the code 'BR' stand for?",
    options: [
      "Broken clouds",
      "Mist (visibility between 5/8 and 6 SM)",
      "Blue skies",
      "Breezy"
    ],
    correctAnswer: 1,
    explanation: "In METAR codes, BR stands for mist (from French 'Brume'), indicating visibility between 5/8 and 6 statute miles."
  },
  {
    id: 48,
    text: "In a METAR, what does the code 'FG' stand for?",
    options: [
      "Fog (visibility less than 5/8 SM)",
      "Flying conditions",
      "Foggy conditions",
      "Fair weather"
    ],
    correctAnswer: 0,
    explanation: "FG in a METAR means fog, defined as visibility less than 5/8 of a statute mile."
  },
  {
    id: 49,
    text: "In a METAR, what does 'TS' indicate?",
    options: [
      "Temperature steady",
      "Thunderstorm",
      "Tailwind",
      "Turbulence"
    ],
    correctAnswer: 1,
    explanation: "TS in a METAR indicates a thunderstorm is present at the airport."
  },
  {
    id: 50,
    text: "What does the term 'VFR' mean in weather conditions?",
    options: [
      "Visual Flight Rules — weather good enough for visual flight",
      "Variable Flight Rate",
      "Vertical Flight Rating",
      "Visual Flight Restriction"
    ],
    correctAnswer: 0,
    explanation: "VFR stands for Visual Flight Rules, meaning weather conditions meet the minimum visibility and cloud clearance requirements for visual flight. For sUAS, this means visibility ≥ 3 SM."
  },
  {
    id: 51,
    text: "What is the definition of 'ceiling' in aviation weather?",
    options: [
      "The maximum altitude the aircraft can reach",
      "The altitude of the lowest broken or overcast cloud layer",
      "The height of the tropopause",
      "The maximum operating ceiling of the aircraft"
    ],
    correctAnswer: 1,
    explanation: "In aviation, ceiling is defined as the height AGL of the lowest layer of broken (BKN) or overcast (OVC) clouds, or vertical visibility into a surface-based obscuration."
  },
  {
    id: 52,
    text: "What effect does high density altitude have on a small unmanned aircraft's performance?",
    options: [
      "Improves performance due to thinner air",
      "Degrades performance — reduced lift and propeller efficiency",
      "No effect on unmanned aircraft",
      "Increases battery life"
    ],
    correctAnswer: 1,
    explanation: "High density altitude (hot temperatures, high altitude) means thinner air, which reduces lift generation and propeller efficiency, making it harder for the aircraft to fly and respond to controls."
  },
  {
    id: 53,
    text: "How does temperature affect density altitude?",
    options: [
      "Higher temperature increases density altitude (worse performance)",
      "Higher temperature decreases density altitude (better performance)",
      "Temperature has no effect on density altitude",
      "Only barometric pressure affects density altitude"
    ],
    correctAnswer: 0,
    explanation: "As temperature increases, air density decreases, increasing density altitude. This degrades aircraft performance. Hot days at high altitudes can significantly reduce climb performance and payload capacity."
  },
  {
    id: 54,
    text: "What is the difference between a 'weather advisory' and a 'forecast'?",
    options: [
      "Advisories warn of existing or imminent hazardous weather; forecasts predict future conditions",
      "They are the same thing",
      "Forecasts are more accurate than advisories",
      "Advisories are only issued for thunderstorms"
    ],
    correctAnswer: 0,
    explanation: "Weather advisories (SIGMETs, AIRMETs) warn about existing or expected hazardous weather conditions. Forecasts (TAFs) predict future conditions over a specific period."
  },
  {
    id: 55,
    text: "What does an AIRMET provide?",
    options: [
      "Information about severe thunderstorms",
      "Moderate icing, turbulence, IFR conditions, and mountain obscuration",
      "Volcanic ash advisories",
      "Large-scale pressure patterns"
    ],
    correctAnswer: 1,
    explanation: "AIRMETs (Airmen's Meteorological Information) provide information about moderate icing, moderate turbulence, IFR conditions (ceilings < 1,000 ft and/or visibility < 3 SM), mountain obscuration, and sustained winds ≥ 30 knots."
  },
  {
    id: 56,
    text: "What does a SIGMET warn about?",
    options: [
      "Minor weather deviations",
      "Severe and extreme weather phenomena dangerous to all aircraft",
      "Visual flight restrictions",
      "Temperature inversions"
    ],
    correctAnswer: 1,
    explanation: "SIGMETs warn of severe or extreme weather that is hazardous to all aircraft, including severe icing, severe turbulence, volcanic ash, dust storms, and thunderstorms with hail."
  },
  {
    id: 57,
    text: "What is a 'sea breeze front' and how might it affect drone operations near the coast?",
    options: [
      "A warm front that strengthens with altitude",
      "A boundary between cooler marine air and warmer inland air, often causing gusty winds and turbulence",
      "A type of marine fog",
      "An ocean current that affects barometric pressure"
    ],
    correctAnswer: 1,
    explanation: "A sea breeze front forms when cooler, denser marine air pushes inland and lifts warmer air, creating a wind shift and often gusty conditions with potential turbulence."
  },
  {
    id: 58,
    text: "What weather condition is most likely to produce microbursts?",
    options: [
      "High pressure systems",
      "Thunderstorms (particularly during the development and mature stages)",
      "Fog",
      "Clear skies with high humidity"
    ],
    correctAnswer: 1,
    explanation: "Microbursts are intense, localized downdrafts associated with thunderstorms. They typically occur during the development (updraft) and mature stages and can produce extreme wind shear."
  },
  {
    id: 59,
    text: "What is wind shear?",
    options: [
      "A sudden change in wind speed or direction over a short distance",
      "A steady wind pattern",
      "Wind that always blows from the same direction",
      "The difference between airspeed and groundspeed"
    ],
    correctAnswer: 0,
    explanation: "Wind shear is a sudden, drastic change in wind speed and/or direction over a short distance. It can occur at any altitude and is especially hazardous during takeoff and landing."
  },
  {
    id: 60,
    text: "What cloud type is most indicative of turbulence?",
    options: [
      "Cirrus clouds",
      "Cumulonimbus clouds (thunderstorm clouds)",
      "Stratus clouds",
      "Nimbostratus clouds"
    ],
    correctAnswer: 1,
    explanation: "Cumulonimbus clouds indicate strong updrafts and downdrafts, turbulence, potential hail, and lightning. Flying near these clouds is extremely hazardous."
  },
  {
    id: 61,
    text: "What is the effect of flying in fog with a drone?",
    options: [
      "Better battery performance",
      "Loss of visual line of sight (VLOS), moisture damage to electronics, and ice accumulation on propellers",
      "No significant effect",
      "Improved GPS signal"
    ],
    correctAnswer: 1,
    explanation: "Flying in fog causes loss of VLOS (violating Part 107), can damage electronics through moisture intrusion, and may cause ice accumulation on propellers in near-freezing conditions."
  },
  {
    id: 62,
    text: "What does the term 'upslope fog' refer to?",
    options: [
      "Fog that forms when humid air flows up a slope and cools adiabatically",
      "Fog that only occurs in valleys",
      "Fog that forms over large bodies of water",
      "Fog that forms at high altitudes"
    ],
    correctAnswer: 0,
    explanation: "Upslope fog develops when moist, stable air is forced upward along a sloping terrain surface (mountain or hill). As the air rises, it expands and cools, eventually condensing into fog."
  },
  {
    id: 63,
    text: "What type of weather front typically brings steady, prolonged precipitation and poor visibility over a wide area?",
    options: [
      "Cold front",
      "Warm front",
      "Occluded front",
      "Stationary front"
    ],
    correctAnswer: 1,
    explanation: "Warm fronts move slowly and have gentle slopes, producing widespread layered clouds and steady, prolonged precipitation over large areas with poor visibility."
  },
  {
    id: 64,
    text: "What type of weather front typically brings brief, heavy precipitation and strong, gusty winds?",
    options: [
      "Cold front",
      "Warm front",
      "Occluded front",
      "Stationary front"
    ],
    correctAnswer: 0,
    explanation: "Cold fronts move quickly and have steep slopes, producing cumulonimbus clouds, brief but heavy precipitation, strong gusty winds, and potentially severe weather."
  },
  {
    id: 65,
    text: "What is a TAF (Terminal Aerodrome Forecast)?",
    options: [
      "A current weather observation",
      "A forecast of weather conditions expected to occur at an airport over a 24-30 hour period",
      "A winds aloft forecast",
      "A thunderstorm warning"
    ],
    correctAnswer: 1,
    explanation: "A TAF is a weather forecast for a specific airport, covering a 24-30 hour period, issued every 6 hours. It includes wind, visibility, weather, and cloud forecasts."
  },
  // ===== LOADING AND PERFORMANCE =====
  {
    id: 66,
    text: "What is the center of gravity (CG) of an aircraft?",
    options: [
      "The geometric center of the aircraft",
      "The point where the aircraft's mass is balanced in all axes",
      "The center of the wingspan",
      "The point where the rotors intersect"
    ],
    correctAnswer: 1,
    explanation: "The center of gravity is the point where the total weight of the aircraft is considered to be concentrated, and where all three axes (pitch, roll, yaw) would be perfectly balanced."
  },
  {
    id: 67,
    text: "What happens if a drone's center of gravity is too far forward?",
    options: [
      "The aircraft will be unstable in yaw",
      "The aircraft may be nose-heavy, reducing maneuverability and increasing power consumption",
      "The aircraft will automatically correct itself",
      "The aircraft will fly faster"
    ],
    correctAnswer: 1,
    explanation: "A forward CG makes the aircraft nose-heavy. The flight controller must work harder to maintain level flight (using more power), reducing maneuverability, endurance, and potentially causing instability."
  },
  {
    id: 68,
    text: "What happens if a drone's center of gravity is too far aft (rearward)?",
    options: [
      "The aircraft will be more stable",
      "The aircraft may be tail-heavy, reducing stability and making the aircraft more susceptible to pitch-up stalls",
      "The aircraft will fly slower",
      "No effect on flight characteristics"
    ],
    correctAnswer: 1,
    explanation: "An aft CG makes the aircraft tail-heavy, reducing pitch stability and making the aircraft more responsive but also more susceptible to abrupt pitch-up events that could lead to loss of control."
  },
  {
    id: 69,
    text: "What effect does adding a heavy payload (e.g., a large camera) to a drone have on its performance?",
    options: [
      "Increases flight time",
      "Decreases flight time, reduces maneuverability, and increases stall speed",
      "No noticeable effect",
      "Improves stability"
    ],
    correctAnswer: 1,
    explanation: "Adding weight reduces flight time (more power needed), reduces maneuverability, increases the aircraft's stall speed (minimum flight speed), and increases the risk of exceeding weight limits."
  },
  {
    id: 70,
    text: "What is 'payload' in the context of drone operations?",
    options: [
      "The weight of the drone itself",
      "The additional equipment carried by the drone, such as cameras or sensors",
      "The battery weight",
      "The remote controller"
    ],
    correctAnswer: 1,
    explanation: "Payload refers to any equipment carried by the drone beyond what is necessary for flight, such as cameras, LIDAR sensors, thermal imagers, or delivery packages."
  },
  {
    id: 71,
    text: "How does battery voltage affect drone performance?",
    options: [
      "Lower voltage increases power output",
      "As voltage drops during flight, the flight controller compensates by drawing more current, potentially leading to sudden power loss",
      "Battery voltage has no effect on performance",
      "Higher voltage reduces flight time"
    ],
    correctAnswer: 1,
    explanation: "As battery voltage drops, the flight controller demands more current to maintain thrust, which can lead to sudden voltage sag. At critical voltage, the battery cannot deliver enough power, causing the aircraft to land suddenly or drop."
  },
  {
    id: 72,
    text: "What is the 'C rating' on a LiPo battery?",
    options: [
      "The battery's capacity in amp-hours",
      "The battery's maximum safe discharge rate relative to its capacity",
      "The battery's temperature rating",
      "The battery's voltage"
    ],
    correctAnswer: 1,
    explanation: "The C rating indicates the maximum safe continuous discharge rate. For example, a 5000 mAh battery with a 20C rating can safely deliver 100 amps (5000 mAh × 20 = 100,000 mA = 100A)."
  },
  {
    id: 73,
    text: "What should a remote pilot do if they notice their drone is 'bobbing' or 'oscillating' during flight?",
    options: [
      "Ignore it — it's normal behavior",
      "Increase speed to compensate",
      "Check for payload imbalance, loose components, or excessive wind — land if it worsens",
      "Reduce altitude immediately"
    ],
    correctAnswer: 2,
    explanation: "Oscillations (bobbing/rocking) can indicate imbalanced payload, loose propeller, vibration issues, or the aircraft approaching its flight envelope limits. The pilot should investigate the cause and land if the oscillation becomes severe."
  },
  {
    id: 74,
    text: "What is the purpose of a preflight inspection?",
    options: [
      "To ensure the aircraft is airworthy and safe for flight",
      "To register the aircraft",
      "To adjust camera settings",
      "To calibrate the remote controller"
    ],
    correctAnswer: 0,
    explanation: "§107.49 requires a preflight inspection to determine the aircraft is in a condition for safe flight. This includes checking propellers, motors, batteries, sensors, frame, and control systems."
  },
  {
    id: 75,
    text: "What should a preflight inspection include for a multi-rotor drone?",
    options: [
      "A visual check of propellers, motors, frame, battery, and firmware status",
      "Just turning on the controller",
      "Only checking the GPS signal",
      "Only checking the camera"
    ],
    correctAnswer: 0,
    explanation: "A thorough preflight inspection includes visual check of propellers (for cracks/nicks), motors (free rotation), frame (cracks), secure battery connection, sensor calibration status, firmware updates, and control surface response."
  },
  // ===== OPERATIONS =====
  {
    id: 76,
    text: "What does 'VLOS' stand for in Part 107 operations?",
    options: [
      "Very Low Obstacle Service",
      "Visual Line of Sight",
      "Vertical Lift Operation System",
      "Variable Lift Output Sensor"
    ],
    correctAnswer: 1,
    explanation: "VLOS stands for Visual Line of Sight. §107.31 requires the remote PIC and visual observer to be able to see the aircraft with unaided vision (except corrective lenses) at all times during operation."
  },
  {
    id: 77,
    text: "What is the role of a Visual Observer (VO) in drone operations?",
    options: [
      "To control the aircraft",
      "To assist the remote PIC by maintaining visual contact with the aircraft and scanning for hazards",
      "To hold the aircraft during launch",
      "To manage the camera settings"
    ],
    correctAnswer: 1,
    explanation: "A visual observer assists the remote PIC by maintaining visual line of sight with the aircraft, scanning the airspace for hazards, and communicating positional information to the PIC."
  },
  {
    id: 78,
    text: "Can a person other than the remote PIC manipulate the controls of the drone?",
    options: [
      "No, only the remote PIC may touch the controls",
      "Yes, as long as the remote PIC can take over control immediately and both parties meet the requirements",
      "Yes, but only if they are also a certified remote pilot",
      "No, the controls must remain untouched during flight"
    ],
    correctAnswer: 1,
    explanation: "§107.33 allows a person other than the remote PIC to manipulate the controls, provided the remote PIC can take over immediate control through a handoff process and both are aware of their responsibilities."
  },
  {
    id: 79,
    text: "If the remote pilot loses visual line of sight of the drone, what must they do?",
    options: [
      "Continue flying at a higher altitude to regain sight",
      "Immediately command the aircraft to land or return to a safe location",
      "Use FPV goggles to continue flying",
      "Switch to automated mode"
    ],
    correctAnswer: 1,
    explanation: "If VLOS is lost, the remote PIC must immediately take action to regain VLOS or land the aircraft. Using FPV goggles or binoculars to continue flight does not satisfy §107.31."
  },
  {
    id: 80,
    text: "What is the maximum horizontal distance a drone can fly from the remote pilot under Part 107?",
    options: [
      "500 feet",
      "1,000 feet",
      "1 mile",
      "There is no specific distance limit — it's limited by VLOS capability"
    ],
    correctAnswer: 3,
    explanation: "Part 107 does not specify a maximum horizontal distance. The limit is whatever distance allows the remote PIC to maintain unaided visual line of sight with the aircraft."
  },
  {
    id: 81,
    text: "Can a remote pilot operate a drone from a moving vehicle or watercraft?",
    options: [
      "Yes, always",
      "Yes, but only over sparsely populated areas and from a moving vehicle to which the aircraft is tethered",
      "No, never",
      "Yes, with no restrictions"
    ],
    correctAnswer: 1,
    explanation: "§107.25 allows operations from a moving vehicle or watercraft only over sparsely populated areas. The aircraft must not be operated from a moving vehicle in densely populated areas without a waiver."
  },
  {
    id: 82,
    text: "What is 'hovering' in the context of drone operations and what are its risks?",
    options: [
      "The safest and most stable flight mode",
      "A flight mode where the aircraft maintains position — risks include GPS drift, battery drain, and loss of position lock",
      "The fastest flight mode",
      "A mode only for professional pilots"
    ],
    correctAnswer: 1,
    explanation: "Hovering requires constant fine motor adjustments from the flight controller. Risks include battery drain (more power than forward flight due to lack of translational lift), GPS drift causing unintended movement, and position lock loss in poor GPS conditions."
  },
  {
    id: 83,
    text: "What is 'GPS drift' and how does it affect drone operation?",
    options: [
      "A GPS signal error that moves the aircraft in unintended directions",
      "GPS drift only affects flight path recording",
      "GPS drift improves navigation accuracy",
      "GPS drift is caused by antenna damage"
    ],
    correctAnswer: 0,
    explanation: "GPS drift refers to the tendency of a drone to slowly move from its intended position when hovering, caused by GPS position accuracy limitations (typically ±1-3 meters). More pronounced under tree canopy or near buildings."
  },
  {
    id: 84,
    text: "What is the purpose of the 'Return to Home' (RTH) function?",
    options: [
      "To automatically land the aircraft at its launch point when signal is lost or battery is low",
      "To fly to the nearest airport",
      "To increase flight speed",
      "To calibrate the compass"
    ],
    correctAnswer: 0,
    explanation: "RTH is a safety feature that returns the aircraft to its recorded home point when signal is lost (failsafe), battery reaches a critical level, or the pilot activates it manually."
  },
  {
    id: 85,
    text: "What is the most important thing a remote pilot should check before activating RTH?",
    options: [
      "That the drone is above 400 feet",
      "That the home point was properly set and there are no obstacles on the return path",
      "That the camera is recording",
      "That the wind is below 10 knots"
    ],
    correctAnswer: 1,
    explanation: "The pilot must verify the home point was recorded (adequate GPS satellites), the RTH altitude is set high enough to clear obstacles on the return path, and there are no hazards along the return route."
  },
  {
    id: 86,
    text: "What should a remote pilot do if their drone encounters unexpected strong winds during flight?",
    options: [
      "Continue flying at full speed",
      "Attempt to fly into the wind and descend to a lower altitude, or land as soon as safely possible",
      "Increase altitude to avoid the wind",
      "Switch to sport mode"
    ],
    correctAnswer: 1,
    explanation: "When encountering unexpected strong winds, the pilot should descend to a lower altitude (winds typically decrease near the ground), and land as soon as safely possible to avoid exceeding the aircraft's wind limits or depleting the battery fighting the wind."
  },
  {
    id: 87,
    text: "What is the recommended action if a remote pilot realizes they are approaching a manned aircraft?",
    options: [
      "Climb above the aircraft",
      "Descend immediately and land if necessary, yielding the right of way",
      "Continue on course — the manned aircraft has radar to avoid the drone",
      "Increase speed to pass quickly"
    ],
    correctAnswer: 1,
    explanation: "The remote pilot must yield the right of way to all manned aircraft. Descending and landing is the safest course of action to avoid potential collision."
  },
  {
    id: 88,
    text: "What is the purpose of a 'sterile cockpit' rule during critical phases of flight?",
    options: [
      "To keep the cockpit clean",
      "To prohibit non-essential conversation and distractions during takeoff, landing, and critical maneuvers",
      "To require sterile gloves for maintenance",
      "To ensure the cockpit is quiet"
    ],
    correctAnswer: 1,
    explanation: "The sterile cockpit rule (applicable to all pilots) prohibits non-essential activities and conversations during critical phases of flight (taxi, takeoff, landing, and any critical maneuvers up to 10,000 feet for manned aircraft)."
  },
  {
    id: 89,
    text: "How should a remote pilot communicate with ATC for operations in controlled airspace?",
    options: [
      "Via LAANC for authorization — two-way radio communication is not required for sUAS",
      "Two-way radio communication is required at all times",
      "Via text message only",
      "ATC communication is prohibited for drones"
    ],
    correctAnswer: 0,
    explanation: "For Part 107 operations in controlled airspace, authorization is obtained via LAANC (automated system). Two-way radio communication with ATC is not required for sUAS operations unless specifically requested."
  },
  {
    id: 90,
    text: "When operating at an airport with a control tower, what must the remote pilot do?",
    options: [
      "Call the tower on the phone or radio before operating",
      "File a flight plan",
      "Operate without contacting the tower if using LAANC",
      "Hire a visual observer"
    ],
    correctAnswer: 0,
    explanation: "Operating within 5 miles of an airport with a control tower in Class D/E airspace requires prior authorization via LAANC. However, the remote pilot should also notify the tower if operating in the vicinity."
  },
  // ===== CREW RESOURCE MANAGEMENT (CRM) =====
  {
    id: 91,
    text: "What is Crew Resource Management (CRM) for single-pilot drone operations?",
    options: [
      "Managing a crew of multiple pilots",
      "Using all available resources (people, equipment, information) to ensure safe and effective flight operations",
      "A maintenance procedure",
      "A method for managing battery resources"
    ],
    correctAnswer: 1,
    explanation: "CRM involves effectively using all available resources to manage workload and improve safety. For single-pilot drone ops, this includes checklists, automation, visual observers, and weather data."
  },
  {
    id: 92,
    text: "What is 'situational awareness' in aviation?",
    options: [
      "Knowing the aircraft's position on a map",
      "The ability to perceive, understand, and project the state of the aircraft, environment, and threats in a timely manner",
      "Being aware of the fuel level",
      "Knowing the weather forecast"
    ],
    correctAnswer: 1,
    explanation: "Situational awareness is the accurate perception of all factors affecting the aircraft and its operation, including position, weather, traffic, battery level, and airspace — and projecting what they will be in the near future."
  },
  {
    id: 93,
    text: "What is a common cause of 'loss of situational awareness' for drone pilots?",
    options: [
      "Focusing too much on the drone camera feed instead of scanning the actual airspace",
      "Having too many GPS satellites",
      "Having a backup pilot",
      "Using automated return-to-home"
    ],
    correctAnswer: 0,
    explanation: "Focusing exclusively on the camera/FPV feed (narrowing attention to the 'data link tunnel') causes the pilot to lose awareness of the surrounding airspace, obstacles, weather changes, and VLOS."
  },
  {
    id: 94,
    text: "What is the 'hazard chain' or 'error chain' concept in aeronautical decision-making?",
    options: [
      "A series of links in the aircraft's electrical system",
      "A chain of events that, if uninterrupted, leads to an accident",
      "A maintenance checklist",
      "A weather forecasting method"
    ],
    correctAnswer: 1,
    explanation: "The error chain describes how seemingly minor errors or poor decisions can link together to create accident-causing situations. Breaking any link in the chain can prevent an accident."
  },
  {
    id: 95,
    text: "What is the 'DECIDE' model in aeronautical decision-making?",
    options: [
      "Detect, Estimate, Choose, Identify, Do, Evaluate",
      "Decide, Execute, Check, Inform, Determine, Evaluate",
      "Detect, Estimate threats, Consider options, Identify best choice, Do it, Evaluate outcome",
      "A model for battery management"
    ],
    correctAnswer: 2,
    explanation: "The DECIDE model is: Detect (a change requires action), Estimate (the significance of the change), Choose (a desired outcome), Identify (actions to achieve the outcome), Do (the actions), Evaluate (the outcome)."
  },
  {
    id: 96,
    text: "What is 'hazardous attitude' in pilot decision-making?",
    options: [
      "A necessary trait for all pilots",
      "Attitudes that lead to poor risk assessment and increased accident probability",
      "An attitude required for passing the test",
      "A maintenance attitude"
    ],
    correctAnswer: 1,
    explanation: "Hazardous attitudes include: anti-authority ('don't tell me'), impulsivity ('do it quickly'), invulnerability ('it won't happen to me'), macho ('I can do it'), and resignation ('what's the use')."
  },
  {
    id: 97,
    text: "A remote pilot is feeling pressured to complete a flight to satisfy a client despite deteriorating weather. This is an example of:",
    options: [
      "Good customer service",
      "Get-there-itis (press-on-itis) — a hazardous decision-making bias",
      "Proper risk management",
      "Standard operating procedure"
    ],
    correctAnswer: 1,
    explanation: "'Get-there-itis' is the tendency to continue with a planned operation despite changing conditions that make it unsafe. It's a common cause of aviation accidents and must be consciously resisted."
  },
  {
    id: 98,
    text: "What is the 'PAVE' checklist used for in preflight planning?",
    options: [
      "Pilot, Aircraft, Environment, External pressures — a structured risk assessment framework",
      "Preflight, Attitude, Velocity, Elevation",
      "Position, Altitude, Velocity, Engine",
      "A post-flight maintenance checklist"
    ],
    correctAnswer: 0,
    explanation: "PAVE stands for Pilot (health, fatigue, currency), Aircraft (airworthiness, payload), Environment (weather, airspace, terrain), and External Pressures (client expectations, deadlines). It helps identify risks before flight."
  },
  {
    id: 99,
    text: "What is the '5P' risk assessment model?",
    options: [
      "The number of propellers on the aircraft",
      "Pilot, Passengers, Plane, Programming, Plan — a decision-making framework",
      "Five steps of maintenance",
      "A five-point weather check"
    ],
    correctAnswer: 1,
    explanation: "The 5P model assesses: the Pilot (health/fatigue), Passengers (if applicable), Plane (aircraft condition), Programming (flight plan/automation settings), and external Plan."
  },
  {
    id: 100,
    text: "What is the primary cause of most aviation accidents?",
    options: [
      "Mechanical failure",
      "Weather conditions",
      "Human error (typically 80-85% of all aviation accidents)",
      "Air traffic control errors"
    ],
    correctAnswer: 2,
    explanation: "Human error is cited as a primary or contributing factor in approximately 80-85% of all aviation accidents, including drone operations."
  },
  // ===== RADIO COMMUNICATIONS =====
  {
    id: 101,
    text: "What does the phrase 'Roger' mean in aviation radio communication?",
    options: [
      "Yes, I agree",
      "Received your transmission",
      "Waiting for instructions",
      "Emergency"
    ],
    correctAnswer: 1,
    explanation: "'Roger' means 'I have received your transmission.' It does NOT mean 'I will comply' or 'I agree' — just that the message was received."
  },
  {
    id: 102,
    text: "What does the phrase 'Wilco' mean?",
    options: [
      "I will comply with your instructions",
      "I have received your transmission",
      "I am landing",
      "I am lost"
    ],
    correctAnswer: 0,
    explanation: "'Wilco' is short for 'will comply.' It means the pilot has received and will follow the instruction."
  },
  {
    id: 103,
    text: "What does the phrase 'Over' mean in radio communication?",
    options: [
      "End of transmission, expecting a reply",
      "I have more to say",
      "Transmission complete, no reply needed",
      "Emergency"
    ],
    correctAnswer: 0,
    explanation: "'Over' indicates the end of a transmission and that a reply is expected. 'Out' indicates the end of the transmission and no reply is expected."
  },
  {
    id: 104,
    text: "What does the term 'Squawk' refer to in aviation?",
    options: [
      "The sound of turbulence",
      "A specific transponder code assigned by ATC",
      "A radio frequency",
      "An emergency landing"
    ],
    correctAnswer: 1,
    explanation: "'Squawk' refers to the four-digit code set on the aircraft's transponder, assigned by ATC. 'Squawk 7700' means emergency, 'Squawk 7600' means radio failure."
  },
  {
    id: 105,
    text: "What is the universal emergency frequency in aviation?",
    options: [
      "121.5 MHz",
      "118.0 MHz",
      "122.8 MHz",
      "126.7 MHz"
    ],
    correctAnswer: 0,
    explanation: "121.5 MHz is the international VHF aeronautical emergency frequency (Guard frequency). It is monitored by ATC, flight service stations, and most commercial aircraft."
  },
  {
    id: 106,
    text: "What does 'Mayday' mean in aviation communication?",
    options: [
      "An urgent safety message that does not require immediate action",
      "A distress signal indicating imminent danger requiring immediate assistance",
      "A request for weather information",
      "A position report"
    ],
    correctAnswer: 1,
    explanation: "'Mayday' (from French 'm'aider' meaning 'help me') is an international distress signal indicating a life-threatening emergency requiring immediate assistance. It should be repeated three times: 'Mayday, Mayday, Mayday.'"
  },
  {
    id: 107,
    text: "What does 'Pan-Pan' mean in aviation radio communication?",
    options: [
      "A distress signal",
      "An urgency message — there is a problem but no immediate danger to life",
      "A position report",
      "A request for frequency change"
    ],
    correctAnswer: 1,
    explanation: "'Pan-Pan' (from French 'panne' meaning breakdown) indicates an urgency situation. There is a problem that could escalate but the situation does not require immediate assistance to save lives."
  },
  {
    id: 108,
    text: "When using a radio, what should the remote pilot say when establishing contact with an ATC facility?",
    options: [
      "Say nothing and wait for instructions",
      "State the facility name, your aircraft type/call sign, position, altitude, and intention",
      "Only state your name",
      "State only your altitude"
    ],
    correctAnswer: 1,
    explanation: "Proper radio etiquette: state who you're calling (facility), who you are (your call sign), your position, your altitude, and what you want (intention). Example: 'Johnson Control Tower, Drone 12345, 2 miles south at 200 feet, request operations.'"
  },
  {
    id: 109,
    text: "What is the purpose of the 'Say Again' phrase?",
    options: [
      "To end a transmission",
      "To request the speaker repeat their last transmission",
      "To confirm receipt",
      "To request a frequency change"
    ],
    correctAnswer: 1,
    explanation: "'Say Again' is a standard phrase used to request repetition of the last transmission when it was not fully understood."
  },
  {
    id: 110,
    text: "What does the term 'Standby' mean in radio communication?",
    options: [
      "End transmission and wait",
      "You're clear to proceed",
      "I acknowledge and will respond shortly — do not transmit further until called",
      "Transmit now"
    ],
    correctAnswer: 2,
    explanation: "'Standby' means the controller acknowledges your call but cannot respond immediately. The pilot should wait without transmitting until the controller provides further instructions."
  },
  // ===== AIRPORTS =====
  {
    id: 111,
    text: "What is the purpose of airport runway markings?",
    options: [
      "Decorative purposes only",
      "To provide visual cues for aircraft operations, including takeoff, landing, and taxiing",
      "To indicate parking spots",
      "To measure runway length"
    ],
    correctAnswer: 1,
    explanation: "Runway markings provide standardized visual information about runway orientation, length, landing zone, taxiway intersections, and safety areas."
  },
  {
    id: 112,
    text: "What does a segmented circle at an airport indicate?",
    options: [
      "A helipad",
      "Traffic pattern indicators — the direction and pattern for aircraft to circle the airport",
      "Wind direction indicator",
      "A parking area"
    ],
    correctAnswer: 1,
    explanation: "A segmented circle with traffic pattern indicators shows the direction of turns in the traffic pattern (left or right) for each runway, helping aircraft follow the correct pattern."
  },
  {
    id: 113,
    text: "What is a wind sock and what does it indicate to a pilot?",
    options: [
      "A decorative flag",
      "An indicator of wind direction and approximate wind speed",
      "A temperature gauge",
      "A pressure indicator"
    ],
    correctAnswer: 1,
    explanation: "A wind sock shows wind direction (pointing into the wind) and approximate speed based on how fully it extends. A fully extended wind sock indicates about 15 knots of wind."
  },
  {
    id: 114,
    text: "What does 'Right Traffic' mean at an airport?",
    options: [
      "Aircraft should turn right when in the traffic pattern",
      "Aircraft should turn left when in the traffic pattern",
      "Aircraft should land on the right side of the runway",
      "Aircraft should park on the right side"
    ],
    correctAnswer: 0,
    explanation: "'Right Traffic' means all turns in the traffic pattern at that airport or runway should be made to the right. Most patterns use left traffic unless terrain or noise abatement requires right turns."
  },
  {
    id: 115,
    text: "What is a 'runway hold short line'?",
    options: [
      "The line marking the start of the runway",
      "A double solid yellow line and double dashed yellow line indicating where aircraft must stop before entering a runway",
      "The centerline of a runway",
      "A taxiway boundary"
    ],
    correctAnswer: 1,
    explanation: "The runway hold short line consists of two solid and two dashed yellow lines across the taxiway. Aircraft must stop at this line and obtain ATC clearance before entering the runway."
  },
  // ===== PHYSIOLOGICAL FACTORS =====
  {
    id: 116,
    text: "What is 'hypoxia' and can it affect drone pilots?",
    options: [
      "A condition of excess oxygen — only affects manned aircraft",
      "A deficiency of oxygen reaching body tissues — can affect drone pilots flying at high altitudes or from high terrain",
      "A condition caused by cold temperatures",
      "A condition that only affects scuba divers"
    ],
    correctAnswer: 1,
    explanation: "Hypoxia is oxygen deficiency. While drone pilots don't fly at high altitudes, operating from high terrain (e.g., mountain tops above 10,000 feet MSL) can expose the pilot to significant hypoxia effects."
  },
  {
    id: 117,
    text: "What is 'fatigue' and how does it affect drone operations?",
    options: [
      "A stimulant that improves performance",
      "A condition of physical and/or mental exhaustion that impairs judgment, reaction time, and situational awareness",
      "A condition that improves pilot performance",
      "A temporary condition with no safety impact"
    ],
    correctAnswer: 1,
    explanation: "Fatigue significantly impairs cognitive function, reaction time, decision-making ability, and situational awareness. §107.27 prohibits operating with any condition that could interfere with safe operation."
  },
  {
    id: 118,
    text: "What is 'sensory illusion' and can it affect drone pilots?",
    options: [
      "Hallucinations caused by medication",
      "Misinterpretation of visual or motion cues that can lead to spatial disorientation — can affect drone pilots using FPV or looking at the drone against complex backgrounds",
      "A pre-flight requirement",
      "An auditory phenomenon only"
    ],
    correctAnswer: 1,
    explanation: "Sensory illusions can occur when the pilot misinterprets visual cues, such as confusing the drone's orientation against a blue sky or complex background. FPV flight can induce spatial disorientation similar to manned aircraft."
  },
  {
    id: 119,
    text: "What is 'hyperventilation' and how might it affect a drone pilot?",
    options: [
      "A condition of deep and rapid breathing causing dizziness and confusion — can occur in stressful situations",
      "A condition that improves performance",
      "A maintenance procedure",
      "A type of battery failure"
    ],
    correctAnswer: 0,
    explanation: "Hyperventilation (excessive breathing rate and depth) can occur during stressful situations and causes dizziness, confusion, tingling sensations, and muscle spasms — impairing the pilot's ability to operate safely."
  },
  {
    id: 120,
    text: "What is the effect of alcohol on pilot performance?",
    options: [
      "Improves coordination",
      "Impairs judgment, coordination, reaction time, and situational awareness — effects can persist even after alcohol is no longer detectable",
      "No effect on performance",
      "Only affects helicopter pilots"
    ],
    correctAnswer: 1,
    explanation: "Alcohol degrades all cognitive and motor functions needed for safe operation. Even small amounts impair judgment (the pilot may not realize they're impaired). Part 107 prohibits operation within 8 hours of consumption."
  },
  // ===== AERONAUTICAL DECISION MAKING (ADM) =====
  {
    id: 121,
    text: "What is Aeronautical Decision Making (ADM)?",
    options: [
      "A systematic approach to risk assessment and decision-making in aviation",
      "A set of flight controls",
      "A weather forecasting method",
      "A maintenance procedure"
    ],
    correctAnswer: 0,
    explanation: "ADM is a structured approach to identify hazards, assess risks, and make sound decisions throughout a flight. It uses models like PAVE, DECIDE, and 5P to improve safety."
  },
  {
    id: 122,
    text: "What is the difference between a hazard and a risk?",
    options: [
      "They are the same thing",
      "A hazard is a potential source of danger; risk is the probability and severity of harm from that hazard",
      "A risk is a potential source of danger; hazard is the probability",
      "Hazards only apply to weather"
    ],
    correctAnswer: 1,
    explanation: "A hazard is any condition, event, or object that could cause harm (e.g., a thunderstorm). Risk is the likelihood and potential severity of harm resulting from exposure to that hazard."
  },
  {
    id: 123,
    text: "What is 'risk mitigation' in drone operations?",
    options: [
      "Eliminating all risks entirely",
      "Actions taken to reduce the probability and/or severity of a hazard's consequences",
      "Ignoring hazards",
      "A post-accident procedure"
    ],
    correctAnswer: 1,
    explanation: "Risk mitigation involves identifying hazards and taking actions to reduce either the likelihood of an accident or the severity of its consequences. Examples: postponing flight due to wind, adding visual observers."
  },
  {
    id: 124,
    text: "What is the '3P' model for operational risk management?",
    options: [
      "Perceive, Process, Perform",
      "Plan, Prepare, Perform",
      "Predict, Prevent, Protect",
      "Position, Power, Propeller"
    ],
    correctAnswer: 0,
    explanation: "The 3P model: Perceive (identify hazards), Process (evaluate risk level), Perform (take action to mitigate or accept risk). It's a simple framework for real-time decision-making."
  },
  {
    id: 125,
    text: "What should a remote pilot do if they encounter an unexpected hazard during flight?",
    options: [
      "Ignore it and continue",
      "Assess the situation, consider options, select the safest course of action (even if it means aborting the flight), and execute",
      "Panic and make hasty decisions",
      "Ask the client for advice"
    ],
    correctAnswer: 1,
    explanation: "When encountering unexpected hazards, the pilot should use ADM: assess the situation, identify options (continue, divert, land), choose the safest option, execute, and evaluate the outcome."
  },
  // ===== MAINTENANCE AND PREFLIGHT =====
  {
    id: 126,
    text: "How often should propellers be inspected for damage?",
    options: [
      "Never unless crash damage is visible",
      "Before every flight as part of the preflight inspection",
      "Once a year",
      "Only when replacing them"
    ],
    correctAnswer: 1,
    explanation: "Propellers should be inspected before every flight. Even small nicks, cracks, or bends can cause imbalance, vibration, reduced efficiency, and catastrophic failure during flight."
  },
  {
    id: 127,
    text: "What is the proper way to store LiPo batteries?",
    options: [
      "Fully charged at room temperature",
      "Completely discharged in a cool place",
      "At approximately 30-50% charge in a fireproof container at room temperature",
      "In the freezer"
    ],
    correctAnswer: 2,
    explanation: "LiPo batteries should be stored at about 30-50% charge (storage voltage ~3.6 volts per cell) in a cool, dry place, preferably in a fireproof Lipo bag or container. Full charge storage accelerates degradation."
  },
  {
    id: 128,
    text: "What is the recommended procedure if a LiPo battery becomes puffy or swollen?",
    options: [
      "Continue using it — swelling is normal",
      "Discontinue use immediately and dispose of it properly — puffed batteries are fire hazards",
      "Puncture it to release gas",
      "Charge it fully to fix the swelling"
    ],
    correctAnswer: 1,
    explanation: "Swollen (puffed) LiPo batteries indicate internal damage and gas generation. They are a serious fire risk and should be disposed of at a battery recycling facility."
  },
  {
    id: 129,
    text: "What should a remote pilot do if they notice a loose or damaged motor mount during preflight?",
    options: [
      "Fly carefully and avoid sharp maneuvers",
      "Do not fly until the motor mount is properly secured or replaced",
      "Tighten it in flight",
      "Ignore it — most drones can fly with 3 motors"
    ],
    correctAnswer: 1,
    explanation: "A loose motor mount can cause vibration, control instability, and potential motor separation in flight. The aircraft must be grounded until the issue is resolved."
  },
  {
    id: 130,
    text: "What is a 'compass calibration' and when should it be performed?",
    options: [
      "A one-time factory setup",
      "A procedure to ensure the drone's compass correctly detects magnetic north — should be performed when flying in a new area, after firmware updates, or when compass errors appear",
      "Only needed for aircraft over 10 pounds",
      "A GPS calibration procedure"
    ],
    correctAnswer: 1,
    explanation: "Compass calibration aligns the aircraft's compass with the local magnetic field. It should be performed in a new geographic area, after firmware updates, or when the app indicates a compass error."
  },
  {
    id: 131,
    text: "What is the purpose of an 'IMU calibration'?",
    options: [
      "To calibrate the compass",
      "To calibrate the Inertial Measurement Unit (accelerometers and gyroscopes) for accurate attitude sensing",
      "To calibrate the camera",
      "To calibrate the GPS"
    ],
    correctAnswer: 1,
    explanation: "IMU calibration adjusts the accelerometer and gyroscope sensors that determine the aircraft's orientation. It ensures level hover and stable flight characteristics."
  },
  {
    id: 132,
    text: "How should a remote pilot store their drone during transport?",
    options: [
      "Loose in the trunk",
      "In a protective case with foam padding, propellers removed or secured, battery stored separately",
      "Hanging from the ceiling",
      "In a plastic bag"
    ],
    correctAnswer: 1,
    explanation: "Proper transport requires a protective case with foam padding to prevent physical damage. Propellers should be removed or secured, batteries stored separately in fireproof bags, and the case kept out of extreme temperatures."
  },
  {
    id: 133,
    text: "What is a 'firmware update' for a drone?",
    options: [
      "A cosmetic change to the drone's color",
      "Software updates that fix bugs, add features, and address safety issues",
      "A physical hardware replacement",
      "A declination adjustment"
    ],
    correctAnswer: 1,
    explanation: "Firmware updates are important for safety — they can fix GPS issues, improve flight stability, add safety features (like geofencing updates), and address known bugs. However, FAA recommends checking for safety-critical updates before flight."
  },
  {
    id: 134,
    text: "What is the 'preflight checklist' and why is it important?",
    options: [
      "A list of weather conditions",
      "A standardized list of checks performed before each flight to ensure airworthiness and safety",
      "A list of permissions required",
      "A post-flight inspection form"
    ],
    correctAnswer: 1,
    explanation: "A preflight checklist ensures the aircraft, remote control, battery, propellers, sensors, and all systems are checked in a standardized way every flight. It prevents missed items and reduces human error."
  },
  {
    id: 135,
    text: "What should be verified during a preflight check of the remote controller?",
    options: [
      "Only the battery level",
      "Stick response, switch functionality, screen display, battery level, and connection to the aircraft",
      "Only the antenna position",
      "Only the gimbal dial"
    ],
    correctAnswer: 1,
    explanation: "The remote controller preflight should check: battery level, stick operation (full range of motion), switch and button functionality, screen readings (satellites, signal strength), and telemetry link to the aircraft."
  },
  // ===== NIGHT OPERATIONS =====
  {
    id: 136,
    text: "Under Part 107, when can a small unmanned aircraft be operated at night?",
    options: [
      "Never — night operations are prohibited",
      "Only between civil twilight hours (30 min before sunrise to 30 min after sunset) with anti-collision lighting",
      "At any time, day or night, with no restrictions",
      "Only with a special night waiver"
    ],
    correctAnswer: 1,
    explanation: "Under §107.29, night operations are permitted during the period of civil twilight (30 minutes before official sunrise to 30 minutes after official sunset) provided the aircraft has anti-collision lighting visible for at least 3 miles."
  },
  {
    id: 137,
    text: "What anti-collision lighting requirement applies for night operations under Part 107?",
    options: [
      "No lighting is required",
      "Anti-collision lighting visible for at least 3 statute miles",
      "Aircraft must be fully illuminated like a manned aircraft",
      "Only strobe lights on the controller"
    ],
    correctAnswer: 1,
    explanation: "§107.29 requires anti-collision lighting that is visible for at least 3 statute miles. The lighting must have a flash rate sufficient to avoid collisions (typically a flashing strobe or navigation lights)."
  },
  {
    id: 138,
    text: "What additional considerations should a remote pilot take for night operations?",
    options: [
      "No additional considerations are needed",
      "Reduced depth perception, difficulty detecting obstacles (wires, trees), disorientation, and cold battery performance",
      "Night operations are easier than daytime",
      "Only the camera needs special settings"
    ],
    correctAnswer: 1,
    explanation: "Night operations present: reduced depth perception, difficulty spotting wires and obstacles, spatial disorientation risk, and significantly reduced battery performance in cold temperatures."
  },
  {
    id: 139,
    text: "How does cold temperature affect LiPo battery performance at night?",
    options: [
      "Improves battery capacity",
      "Reduces battery capacity and voltage output — can cause sudden power loss",
      "No effect on battery performance",
      "Increases battery discharge rate"
    ],
    correctAnswer: 1,
    explanation: "Cold temperatures significantly reduce LiPo battery chemical reaction rates, reducing effective capacity by 20-50%. Batteries should be pre-warmed to room temperature before flight and monitored closely for voltage drop."
  },
  {
    id: 140,
    text: "What is 'civil twilight'?",
    options: [
      "The period when the sun is exactly at the horizon",
      "The period beginning 30 minutes before official sunrise and ending 30 minutes after official sunset",
      "The period between sunset and dusk",
      "The period when the moon is full"
    ],
    correctAnswer: 1,
    explanation: "Civil twilight is the period when the sun is between 0° and 6° below the horizon — approximately 30 minutes before sunrise and 30 minutes after sunset by the clock."
  },
  // ===== GENERAL AVIATION KNOWLEDGE =====
  {
    id: 141,
    text: "What does the term 'VFR-on-top' mean in aviation?",
    options: [
      "Flying on top of clouds under VFR conditions",
      "Flying below clouds only",
      "A maintenance position",
      "A GPS coordinate"
    ],
    correctAnswer: 0,
    explanation: "VFR-on-top allows a pilot to operate in VFR conditions above a cloud layer when the appropriate airspace clearance exists. However, for sUAS operations, you must remain clear of clouds."
  },
  {
    id: 142,
    text: "What is 'ground effect' and how might it affect a multi-rotor drone during landing?",
    options: [
      "A lift increase from air cushioning between rotors and ground — can cause the drone to float or become unstable near the ground",
      "A decrease in GPS accuracy near the ground",
      "An increase in battery life near the ground",
      "Improved camera stabilization"
    ],
    correctAnswer: 0,
    explanation: "Ground effect occurs within approximately one rotor diameter of the ground. The air cushion creates additional lift, causing the drone to 'float' or become unstable during the final descent. Pilots must manage descent rate carefully."
  },
  {
    id: 143,
    text: "What is 'translational lift' and how does it relate to drone operations?",
    options: [
      "Lift generated by horizontal movement — a drone in forward flight is more efficient than hovering",
      "Lift generated by vertical ascent only",
      "A type of ground effect",
      "A maintenance procedure"
    ],
    correctAnswer: 0,
    explanation: "Translational lift occurs when a rotorcraft (including multi-rotors) transitions from hover to forward flight — the aircraft moves into clean air rather than its own downwash, increasing efficiency and reducing power demand."
  },
  {
    id: 144,
    text: "What is a 'gyroscopic precession' effect on a multi-rotor drone?",
    options: [
      "A tendency of the spinning rotors to resist changes in their plane of rotation — affects yaw response and maneuverability",
      "A GPS navigation error",
      "A battery management algorithm",
      "A camera gimbal stabilization feature"
    ],
    correctAnswer: 0,
    explanation: "Gyroscopic precession means that when a force is applied to a spinning rotor, the reaction occurs 90° later in the direction of rotation. The flight controller compensates for this, but extreme maneuvers can overcome these corrections."
  },
  {
    id: 145,
    text: "What is the 'weight shift' effect when a drone banks (tilts)?",
    options: [
      "The aircraft becomes lighter in a bank",
      "As the drone tilts to move, the lift vector splits into vertical and horizontal components — vertical lift decreases, requiring more power to maintain altitude",
      "The battery shifts position",
      "The drone automatically compensates for weight"
    ],
    correctAnswer: 1,
    explanation: "When a drone banks, part of the thrust is directed horizontally for movement, reducing the vertical lift component. This requires increased power to maintain altitude, which is why aggressive turns can cause altitude loss."
  },
  {
    id: 146,
    text: "What is the significance of 'magnetic declination' for drone navigation?",
    options: [
      "It only affects high-altitude flights",
      "The difference between true north and magnetic north — drone compasses use magnetic north, while maps use true north",
      "It affects GPS signals",
      "It only affects helicopters"
    ],
    correctAnswer: 1,
    explanation: "Magnetic declination is the angular difference between true north and magnetic north. Drone compasses measure magnetic north, but maps and survey data use true north. This matters for precise positioning."
  },
  {
    id: 147,
    text: "What is the 'Kp-index' and why is it relevant to drone operations?",
    options: [
      "A measure of wind speed",
      "A measure of geomagnetic activity — high Kp values can disrupt GPS accuracy",
      "A battery capacity rating",
      "A propeller pitch measurement"
    ],
    correctAnswer: 1,
    explanation: "The Kp-index (planetary K-index) measures geomagnetic storm activity. High Kp values (≥5) can degrade GPS accuracy and cause compass errors, affecting drone position hold and navigation."
  },
  {
    id: 148,
    text: "What is the 'NDB' (Non-Directional Beacon) and how does it work?",
    options: [
      "A satellite-based navigation system",
      "A ground-based radio transmitter that broadcasts an omnidirectional signal — aircraft use ADF receivers to navigate to or from the beacon",
      "A type of GPS",
      "A weather radar"
    ],
    correctAnswer: 1,
    explanation: "NDBs transmit radio signals in all directions. Aircraft with Automatic Direction Finder (ADF) equipment can navigate to or from NDBs. While sUAS don't typically use NDBs, understanding them is relevant when sharing airspace."
  },
  {
    id: 149,
    text: "What does 'VOR' stand for and what is its function?",
    options: [
      "Visual Observation Radar",
      "VHF Omnidirectional Range — a ground-based radio navigation system that provides bearing information to aircraft",
      "Vertical Orientation Radar",
      "Virtual Obstacle Recognition"
    ],
    correctAnswer: 1,
    explanation: "VOR is a VHF radio navigation system that transmits azimuth information. Aircraft can navigate along VOR radials to or from the station."
  },
  {
    id: 150,
    text: "What does 'GPS' stand for and how many satellites are needed for a 3D position fix?",
    options: [
      "Global Positioning System — at least 3 satellites for 2D, 4 for 3D (including altitude)",
      "Ground Positioning System — 2 satellites",
      "General Positioning System — 5 satellites",
      "Geographic Positioning System — 1 satellite"
    ],
    correctAnswer: 0,
    explanation: "GPS is a satellite-based positioning system. A minimum of 4 satellites is needed for a 3D position fix (latitude, longitude, altitude). More satellites improve accuracy."
  },
  {
    id: 151,
    text: "What is the maximum weight limit for a small unmanned aircraft in Part 107?",
    options: [
      "25 pounds",
      "55 pounds",
      "100 pounds",
      "150 pounds"
    ],
    correctAnswer: 1,
    explanation: "FAR 107.3 defines a small unmanned aircraft as weighing less than 55 pounds (25 kilograms) including everything onboard or attached."
  },
  {
    id: 152,
    text: "What is the 'cloud clearance' requirement for sUAS operations under Part 107?",
    options: [
      "500 feet below clouds, 1,000 feet above, 2,000 feet horizontally",
      "At least 500 feet below clouds",
      "No specific cloud clearance — just maintain the minimum of 3 SM visibility",
      "100 feet below clouds, 500 feet above, 500 feet horizontally"
    ],
    correctAnswer: 0,
    explanation: "§107.51 requires cloud clearance of at least 500 feet below, 1,000 feet above, and 2,000 feet horizontally from any cloud."
  },
  {
    id: 153,
    text: "What is the maximum altitude for a small UAS when flying within 400 feet of a structure, relative to the ground?",
    options: [
      "400 feet AGL",
      "400 feet above the structure's uppermost limit",
      "1,200 feet AGL",
      "No altitude limit near structures"
    ],
    correctAnswer: 1,
    explanation: "§107.51(b)(2) allows the aircraft to fly up to 400 feet above the structure's uppermost limit when the aircraft is within 400 feet of a structure."
  },
  {
    id: 154,
    text: "What is 'ADS-B Out' and does it apply to sUAS?",
    options: [
      "A surveillance technology that broadcasts aircraft position — currently not required for sUAS under 55 lbs, but available on some drones",
      "A type of propeller",
      "A GPS upgrade",
      "A weather sensor"
    ],
    correctAnswer: 0,
    explanation: "ADS-B Out broadcasts aircraft position, velocity, and identification. It's not currently required for sUAS but some drones include ADS-B receivers (In) to detect nearby aircraft."
  },
  {
    id: 155,
    text: "What is the purpose of the 'Geofencing' feature on many drones?",
    options: [
      "To prevent drones from flying into restricted airspace (e.g., airports, prisons)",
      "To mark property boundaries for surveys",
      "To improve GPS accuracy",
      "To prevent theft"
    ],
    correctAnswer: 0,
    explanation: "Geofencing creates virtual boundaries that prevent drones from flying into restricted airspace (like airport zones, TFRs). It's a safety feature built into drone firmware."
  },
  {
    id: 156,
    text: "What is the 'voir dire' process mentioned in Part 107 (referring to the sport and recreational exception)?",
    options: [
      "A preflight weather briefing",
      "A type of drone registration",
      "A legal term — not relevant to Part 107 operations",
      "An inspection procedure"
    ],
    correctAnswer: 2,
    explanation: "'Voir dire' is a legal term meaning 'to speak the truth' in jury selection. It appears in some Part 107 exam questions about the distinction between recreational and commercial operations."
  },
  {
    id: 157,
    text: "What is the difference between 'precision' and 'accuracy' when referring to GPS?",
    options: [
      "They are the same thing",
      "Precision is the consistency of measurements; accuracy is how close the measurement is to the true value",
      "Precision applies to time, accuracy applies to position",
      "Accuracy is only for military GPS"
    ],
    correctAnswer: 1,
    explanation: "Precision (or repeatability) refers to how consistently a GPS receiver returns the same position; accuracy refers to how close that position is to the actual true location."
  },
  {
    id: 158,
    text: "What is the 'PDOP' (Position Dilution of Precision) and what does a low value mean?",
    options: [
      "A measure of satellite geometry — low values (<3) indicate good GPS accuracy",
      "A measure of battery drain",
      "A measure of wind speed",
      "A measure of radio interference"
    ],
    correctAnswer: 0,
    explanation: "PDOP measures the quality of satellite geometry. Lower PDOP values (ideally <2, good <4) mean satellites are well-spread, giving better accuracy. High PDOP (narrow satellite cluster) degrades accuracy."
  },
  {
    id: 159,
    text: "What should a remote pilot do before flying in a new location?",
    options: [
      "Check the location on maps and scout for obstacles, airspace restrictions, hazards, and landing zones",
      "No preparation needed — just launch",
      "Only check the weather",
      "Only check the battery level"
    ],
    correctAnswer: 0,
    explanation: "A site survey should include: checking for airspace restrictions (LAANC), identifying obstacles (power lines, trees, buildings), verifying emergency landing zones, checking for wildlife/people, and assessing wind patterns."
  },
  {
    id: 160,
    text: "What is the purpose of an 'emergency landing plan'?",
    options: [
      "To provide a backup plan if the drone encounters a problem during flight",
      "To train for emergencies only during test flights",
      "A written document required by the FAA for all flights",
      "An optional safety measure"
    ],
    correctAnswer: 0,
    explanation: "An emergency landing plan identifies suitable landing zones in the flight area should the drone experience loss of power, signal loss, GPS failure, or other emergencies. It should be part of every preflight briefing."
  },
  // ===== SECTIONALS AND CHARTS =====
  {
    id: 161,
    text: "What information is found on a sectional aeronautical chart?",
    options: [
      "Roads and political boundaries",
      "Airports, airspace classes, navigation aids, terrain elevation, and obstructions",
      "Weather forecasts",
      "Satellite imagery"
    ],
    correctAnswer: 1,
    explanation: "Sectional charts provide aeronautical information including airports, airspace classifications, VOR/NDB navaids, obstacle heights, terrain contours, special use airspace, and radio frequencies."
  },
  {
    id: 162,
    text: "On a sectional chart, what does a symbol of a small solid square indicate?",
    options: [
      "A military airport",
      "An airport without a control tower (non-towered)",
      "A heliport",
      "A seaport"
    ],
    correctAnswer: 1,
    explanation: "Small solid squares indicate airports without control towers (non-towered fields). Squares with a magenta line indicate non-towered airports with runway lighting."
  },
  {
    id: 163,
    text: "On a sectional chart, what does an airport symbol with blue indicate?",
    options: [
      "A military airport",
      "A towered airport with control tower",
      "A closed airport",
      "A private airfield"
    ],
    correctAnswer: 1,
    explanation: "Blue airport symbols on sectionals indicate airports with a control tower (towered fields). Magenta symbols indicate non-towered fields."
  },
  {
    id: 164,
    text: "What does a shaded red area with 'R-XXXX' on a sectional chart indicate?",
    options: [
      "A Restricted Area — flight is subject to restriction",
      "A runway",
      "A residential area",
      "A radio beacon"
    ],
    correctAnswer: 0,
    explanation: "Restricted areas (R-XXXX) are airspace where flight is restricted due to hazardous activities (weapons testing, artillery, etc.). Operations require authorization from the controlling agency."
  },
  {
    id: 165,
    text: "What does a shaded blue area with 'W-XXXX' on a sectional chart indicate?",
    options: [
      "Wilderness area",
      "Warning Area — airspace of potential hazard to non-participating aircraft",
      "Water hazard",
      "Weather zone"
    ],
    correctAnswer: 1,
    explanation: "Warning Areas (W-XXXX) are over domestic or international waters where hazardous activities occur. While drones can operate there, pilots should verify if activity is active."
  },
  {
    id: 166,
    text: "What does 'Class E Airspace' depicted as a magenta dashed circle around an airport indicate?",
    options: [
      "Class E airspace starts at the surface extending to the overlying controlled airspace",
      "Class E airspace starts at 1,200 feet AGL",
      "Class D airspace",
      "A military zone"
    ],
    correctAnswer: 0,
    explanation: "A magenta dashed circle around an airport indicates Class E airspace that begins at the surface (sfc) — a surface-level extension. Operations in this airspace require ATC authorization."
  },
  {
    id: 167,
    text: "What symbol represents an obstacle (such as a tower) on a sectional chart?",
    options: [
      "A green triangle",
      "A small dot with an associated number (height in feet MSL)",
      "A blue square",
      "A black circle"
    ],
    correctAnswer: 1,
    explanation: "Obstacles are shown as small dots or group-obstacle symbols with numbers indicating the height in feet MSL (Mean Sea Level). Tall obstacles may have an obstruction light symbol."
  },
  {
    id: 168,
    text: "On a VFR sectional chart, what do contour lines with varying shades of green and brown represent?",
    options: [
      "Different vegetation types",
      "Terrain elevation contours — helps pilots identify terrain hazards",
      "Different types of land use",
      "Political boundaries"
    ],
    correctAnswer: 1,
    explanation: "Contour lines and color shading on VFR charts represent terrain elevation. Green indicates lower elevations; tan/brown indicates higher elevations. This helps pilots identify terrain hazards."
  },
  {
    id: 169,
    text: "What is the primary difference between a sectional chart and a TAC (Terminal Area Chart)?",
    options: [
      "Sectionals cover the entire country; TACs cover high-density areas at a larger scale (more detail)",
      "TACs are for IFR flight only",
      "Sectionals are digital only",
      "TACs show only airports"
    ],
    correctAnswer: 0,
    explanation: "Sectionals cover broad areas at 1:500,000 scale. TACs cover major metropolitan areas at 1:250,000 scale, providing more detail for busy airspace."
  },
  {
    id: 170,
    text: "How are Maximum Elevation Figures (MEF) depicted on sectional charts?",
    options: [
      "As contour lines",
      "As a number in each quadrangle showing the highest elevation within that quadrant including obstacles",
      "As a color gradient",
      "As a separate table"
    ],
    correctAnswer: 1,
    explanation: "MEF values are shown in each quadrangle (15 minutes of latitude × 15 minutes of longitude) as a number representing the highest elevation in hundreds of feet MSL, rounded up, including man-made obstacles."
  },
  // ===== METEOROLOGY ADVANCED =====
  {
    id: 171,
    text: "What is a 'cold air funnel' and how might it affect drone operations?",
    options: [
      "A cold front passing through",
      "A weak, brief tornado-like vortex that can form under cumulonimbus clouds — extremely dangerous for drones",
      "A type of fog",
      "A stable air pattern"
    ],
    correctAnswer: 1,
    explanation: "Cold air funnels are weak, but still hazardous, funnel clouds that can form under certain cumulonimbus conditions. They can generate sudden extreme turbulence and wind."
  },
  {
    id: 172,
    text: "What is 'snow blindness' and how does it affect drone operations in winter conditions?",
    options: [
      "A condition where bright snow reflection temporarily impairs the pilot's vision",
      "A condition that only affects drones, not pilots",
      "A GPS signal issue in snow",
      "A battery performance issue in cold weather"
    ],
    correctAnswer: 0,
    explanation: "Snow blindness (photokeratitis) results from UV reflection off snow, causing temporary vision impairment. Pilots should wear UV-protective sunglasses when flying over snow."
  },
  {
    id: 173,
    text: "What is an 'inversion layer' and how does it affect visibility?",
    options: [
      "A layer where temperature increases with altitude instead of decreasing — traps pollutants and fog near the surface, reducing visibility",
      "A layer of strong winds",
      "A layer where visibility improves with altitude",
      "A layer of low pressure"
    ],
    correctAnswer: 0,
    explanation: "Temperature inversions create stable conditions where cooler air is trapped below warmer air, preventing vertical mixing. This traps haze, smoke, and fog near the ground, reducing visibility."
  },
  {
    id: 174,
    text: "What is 'advection fog'?",
    options: [
      "Fog that forms when moisture evaporates from the ground",
      "Fog that forms when warm, moist air moves over a cold surface",
      "Fog that forms on clear nights with calm winds",
      "Fog that forms only over water"
    ],
    correctAnswer: 1,
    explanation: "Advection fog forms when warm, moist air moves horizontally across a colder surface (land or water), causing the air to cool below its dew point. It can be thick and persistent."
  },
  {
    id: 175,
    text: "What is 'radiation fog'?",
    options: [
      "Fog caused by radioactive particles",
      "Fog that forms on clear, calm nights when the ground radiates heat and cools the air above it to the dew point",
      "Fog caused by solar radiation",
      "Fog that only forms during the day"
    ],
    correctAnswer: 1,
    explanation: "Radiation fog (ground fog) forms on clear nights with light winds when the ground surface cools rapidly, causing the adjacent air to cool below its dew point. It typically burns off after sunrise."
  },
  {
    id: 176,
    text: "What is 'steam fog' (also known as sea smoke)?",
    options: [
      "Fog produced by volcanic activity",
      "Fog that forms when cold air moves over warmer water, creating visible steam-like wisps",
      "Fog from industrial steam",
      "A type of smoke, not fog"
    ],
    correctAnswer: 1,
    explanation: "Steam fog (sea smoke, evaporation fog) forms when very cold air moves over warmer water, causing visible wisps of fog. Common over lakes and coastal waters in winter."
  },
  {
    id: 177,
    text: "What is the 'dew point' and how does it relate to fog formation?",
    options: [
      "The temperature at which the air becomes saturated and water vapor condenses — when temperature and dew point converge, fog or clouds form",
      "The freezing point of water",
      "The boiling point of water at altitude",
      "The humidity percentage"
    ],
    correctAnswer: 0,
    explanation: "Dew point is the temperature to which air must be cooled to become saturated. When the actual temperature and dew point converge (spread ≤ 5°F), fog or low clouds are likely."
  },
  {
    id: 178,
    text: "What does 'LLWS' mean in aviation weather?",
    options: [
      "Low-Level Wind Shear — sudden changes in wind speed/direction below 2,000 feet AGL",
      "Low-Light Weather System",
      "Low-Lift Wind Speed",
      "Landing Light Wind Speed"
    ],
    correctAnswer: 0,
    explanation: "Low-Level Wind Shear (LLWS) is wind shear occurring below 2,000 feet AGL. It's particularly hazardous during takeoff and landing and is often associated with thunderstorms, fronts, and inversions."
  },
  {
    id: 179,
    text: "What type of cloud is 'cumulonimbus' and why is it significant for drone operations?",
    options: [
      "A fair-weather cloud with no hazards",
      "A thunderstorm cloud capable of producing severe turbulence, hail, lightning, and strong outflow winds",
      "A high-altitude ice cloud",
      "A stratus cloud associated with steady precipitation"
    ],
    correctAnswer: 1,
    explanation: "Cumulonimbus clouds indicate thunderstorms with severe turbulence, lightning, hail, microbursts, and strong gust fronts. Drone operations should cease well before a thunderstorm arrives."
  },
  {
    id: 180,
    text: "What is the 'dry adiabatic lapse rate'?",
    options: [
      "The rate at which a rising parcel of dry air cools — approximately 3°C per 1,000 feet",
      "The rate at which the ground cools at night",
      "The rate of temperature increase with altitude",
      "The rate of humidity decrease with altitude"
    ],
    correctAnswer: 0,
    explanation: "The dry adiabatic lapse rate is the rate at which unsaturated air cools as it rises (about 3°C/1,000 ft). This is key for understanding cloud formation and atmospheric stability."
  },
  // ===== DRONE TECHNOLOGY =====
  {
    id: 181,
    text: "What is 'RTK' (Real-Time Kinematic) positioning in drone technology?",
    options: [
      "A type of propeller",
      "A GPS enhancement that provides centimeter-level accuracy using a base station correction signal",
      "A camera stabilization system",
      "A battery management system"
    ],
    correctAnswer: 1,
    explanation: "RTK GPS uses a fixed base station to provide real-time correction signals to the drone, achieving centimeter-level positioning accuracy rather than the typical meter-level of standard GPS."
  },
  {
    id: 182,
    text: "What is a 'gimbal' on a drone?",
    options: [
      "The propellers",
      "A motorized stabilization system that keeps the camera level regardless of aircraft orientation",
      "The landing gear",
      "The flight controller"
    ],
    correctAnswer: 1,
    explanation: "A gimbal is a camera stabilization platform, typically 3-axis (pitch, roll, yaw), that uses motors and sensors to keep the camera stable and level regardless of the aircraft's movements."
  },
  {
    id: 183,
    text: "What is 'optical flow' sensor used for on drones?",
    options: [
      "A camera-based positioning system that tracks ground features for precision hovering without GPS",
      "A propeller optimization system",
      "A battery voltage monitor",
      "A communication protocol"
    ],
    correctAnswer: 0,
    explanation: "Optical flow sensors use a downward-facing camera to track ground movement, providing position hold capability when GPS is unavailable (e.g., indoors, under tree canopy)."
  },
  {
    id: 184,
    text: "What is 'VLOS' minimum requirement for the remote PIC?",
    options: [
      "Unaided vision (except corrective lenses)",
      "Binocular vision",
      "Night vision goggles",
      "FPV monitor"
    ],
    correctAnswer: 0,
    explanation: "§107.31 requires the remote PIC and VO to maintain visual line of sight with the aircraft using unaided vision, except for corrective lenses. Binoculars, FPV monitors, or night vision devices do not satisfy VLOS."
  },
  {
    id: 185,
    text: "What is the typical frequency range used for consumer drone remote control?",
    options: [
      "900 MHz",
      "2.4 GHz and 5.8 GHz",
      "6 GHz",
      "400 MHz"
    ],
    correctAnswer: 1,
    explanation: "Consumer drones typically use 2.4 GHz for control and 5.8 GHz for video transmission (or vice versa). These are license-free ISM bands but can experience interference from Wi-Fi and other devices."
  },
  {
    id: 186,
    text: "What is 'Failsafe RTH' (Return to Home)?",
    options: [
      "An automated landing at any location",
      "An automated return to the launch point triggered by signal loss, low battery, or critical errors",
      "A manual return procedure",
      "A flight planning feature"
    ],
    correctAnswer: 1,
    explanation: "Failsafe RTH is triggered automatically when the drone loses signal with the controller (connection lost for a set time), when battery reaches critical level, or when the flight controller detects an unrecoverable error."
  },
  {
    id: 187,
    text: "What is the purpose of 'propeller guards' on a drone?",
    options: [
      "To make the drone faster",
      "To protect propellers from obstacles and people from propellers — required for operations over people under Category 2",
      "To reduce noise",
      "To improve GPS signal"
    ],
    correctAnswer: 1,
    explanation: "Propeller guards provide protection against propeller strikes and can protect the propellers from minor collisions. They may be required for certain over-people operations."
  },
  {
    id: 188,
    text: "What is a 'mission planner' or 'ground control station' (GCS) software?",
    options: [
      "Software to design drone paint schemes",
      "Software used to plan, execute, and monitor automated drone flights with waypoints and geofences",
      "A battery monitoring app",
      "A video editing tool"
    ],
    correctAnswer: 1,
    explanation: "Ground control station software (e.g., DJI Pilot, Mission Planner) allows the pilot to plan waypoint missions, set geofences, monitor telemetry, adjust camera settings, and execute automated flight paths."
  },
  {
    id: 189,
    text: "What is the purpose of 'terrain awareness' sensors on a drone?",
    options: [
      "To detect and avoid obstacles in the flight path, especially during automated flight mode",
      "To measure soil moisture",
      "To measure crop height",
      "To map terrain for surveys"
    ],
    correctAnswer: 0,
    explanation: "Terrain awareness sensors (ultrasonic, infrared, or vision-based) detect obstacles in the drone's flight path and can automatically slow down, stop, or maneuver around them. They are secondary to pilot VLOS."
  },
  {
    id: 190,
    text: "What is 'interference' in the context of drone control signals and what causes it?",
    options: [
      "A condition where radio signals are disrupted by other transmitters, power lines, or physical obstacles",
      "A mechanical vibration in the propellers",
      "A GPS satellite malfunction",
      "A battery imbalance"
    ],
    correctAnswer: 0,
    explanation: "Radio frequency interference (RFI) can disrupt drone control links. Common sources: high-power radio transmitters, power lines, Wi-Fi networks in dense urban areas, satellite dishes, and other drones on the same frequency."
  },
  {
    id: 191,
    text: "What is the 'recommended minimum number of GPS satellites' for safe drone operation?",
    options: [
      "3",
      "6-8 (usually 10+)",
      "12",
      "20"
    ],
    correctAnswer: 1,
    explanation: "While 4 satellites provide a 3D fix, reliable drone operation typically requires 6-10+ satellites for stable position hold and RTH accuracy. Most drone apps display satellite count."
  },
  {
    id: 192,
    text: "What is 'HDOP' and what does a value under 1.0 indicate?",
    options: [
      "Horizontal Dilution of Precision — under 1.0 indicates excellent GPS accuracy",
      "Altitude measurement — under 1.0 means low altitude",
      "Battery health — under 1.0 means failing",
      "Signal strength — under 1.0 means weak signal"
    ],
    correctAnswer: 0,
    explanation: "HDOP measures horizontal GPS accuracy. Values under 1.0 indicate excellent satellite geometry. Values 1-2 are good, 2-5 moderate, and over 5 indicates poor accuracy."
  },
  {
    id: 193,
    text: "What does the 'P-mode' on many consumer drones typically represent?",
    options: [
      "Performance mode — maximum speed and agility",
      "Positioning mode — GPS and vision positioning enabled for stable hover",
      "Payload mode — for carrying external loads",
      "Power saving mode"
    ],
    correctAnswer: 1,
    explanation: "P-mode (Positioning) uses GPS, GLONASS, and vision sensors for precise positioning, stable hover, and automated features. It's the standard safe operation mode for most flights."
  },
  {
    id: 194,
    text: "What is 'S-mode' typically on a consumer drone?",
    options: [
      "Stabilization mode",
      "Sport mode — higher speed and agility with reduced obstacle avoidance",
      "Stealth mode",
      "Sensor mode"
    ],
    correctAnswer: 1,
    explanation: "Sport mode reduces GPS and obstacle avoidance assistance in favor of faster, more agile flight. It uses less position holding, making the drone more responsive but requiring more pilot skill."
  },
  {
    id: 195,
    text: "What is the effect of 'propeller icing' in cold and humid conditions?",
    options: [
      "Improves thrust",
      "Ice accumulation on propellers degrades lift, increases power consumption, and can cause unbalanced vibration and loss of control",
      "No effect on drone operations",
      "Increases battery life"
    ],
    correctAnswer: 1,
    explanation: "Propeller icing occurs in near-freezing conditions with high humidity or precipitation fog. Ice disrupts the airfoil shape, reduces lift, increases weight, causes vibration, and can lead to sudden loss of control."
  },
  // ===== ADVANCED REGULATIONS =====
  {
    id: 196,
    text: "What is a 'Certificate of Waiver or Authorization' (COA) used for?",
    options: [
      "A replacement for a lost remote pilot certificate",
      "An FAA-issued document allowing deviations from Part 107 rules for specific operations",
      "An aircraft registration document",
      "A weather waiver"
    ],
    correctAnswer: 1,
    explanation: "A COA (now part of the waiver process through DroneZone) allows operators to deviate from specific Part 107 rules for defined operations (e.g., flying at night without anti-collision lighting, BVLOS operations)."
  },
  {
    id: 197,
    text: "What is a 'Section 333 Exemption' (historically)?",
    options: [
      "A tax exemption",
      "Before Part 107, Section 333 granted exemptions to operate drones commercially — now replaced by Part 107",
      "A liability waiver",
      "An insurance requirement"
    ],
    correctAnswer: 1,
    explanation: "Section 333 of the FAA Modernization and Reform Act of 2012 allowed early commercial drone operations through case-by-case exemptions. Part 107 replaced this framework in 2016."
  },
  {
    id: 198,
    text: "What is the FAA's 'DroneZone'?",
    options: [
      "A designated flying area for drones",
      "An online portal for registering drones and applying for airspace authorizations and waivers",
      "A drone tracking system",
      "A drone racing league"
    ],
    correctAnswer: 1,
    explanation: "The FAA DroneZone (faadronezone.faa.gov) is the official online portal for drone registration, airspace authorization applications, and waiver requests."
  },
  {
    id: 199,
    text: "What is the penalty for operating a drone without proper registration?",
    options: [
      "A warning letter",
      "Up to $27,500 in civil penalties for individual violations",
      "No penalty",
      "Only a small fine of $100"
    ],
    correctAnswer: 1,
    explanation: "Operating an unregistered drone can result in significant FAA civil penalties — up to $27,500 per violation. For criminal violations, fines can exceed $250,000."
  },
  {
    id: 200,
    text: "What is 'Part 44809' of the FAA regulations?",
    options: [
      "The commercial drone rule",
      "The exception for recreational flyers — includes requirements like flying within VLOS, under 400 ft, away from airports, and passing TRUST",
      "The air taxi rule",
      "The drone registration rule"
    ],
    correctAnswer: 1,
    explanation: "Part 44809 allows recreational (model aircraft) operations under certain conditions: fly only for recreation, within VLOS, under 400 feet, away from aircraft, and pass the TRUST test."
  },
  {
    id: 201,
    text: "What is the 'TRUST' test?",
    options: [
      "A pilot medical exam",
      "The Recreational UAS Safety Test — a free online test required for recreational flyers",
      "A drone performance test",
      "A registration requirement"
    ],
    correctAnswer: 1,
    explanation: "TRUST (The Recreational UAS Safety Test) is a free online aeronautical knowledge and safety test that all recreational flyers must pass to operate under Part 44809."
  },
  {
    id: 202,
    text: "Can a remote pilot operate under Part 107 rules while flying recreationally?",
    options: [
      "No — recreational and commercial operations are governed by different regulations",
      "Yes — Part 107 is the only UAS regulation",
      "Yes, but only if the aircraft weighs under 250 grams",
      "No, joining both activities is prohibited"
    ],
    correctAnswer: 0,
    explanation: "Part 107 governs commercial operations and Part 44809 governs recreational operations. An operator must comply with the applicable rule for each flight. Using Part 107 for a purely recreational flight is acceptable."
  },
  {
    id: 203,
    text: "What is 'Night Vision Goggle' (NVG) use relevance for drone pilots?",
    options: [
      "Required for night operations",
      "NVGs are not permitted for use as a substitute for VLOS — they are for manned aircraft night operations",
      "Helpful for spotting drones at night",
      "A standard equipment for all drone pilots"
    ],
    correctAnswer: 1,
    explanation: "NVGs are not used in drone operations. The VLOS requirement specifies unaided vision (except corrective lenses). Night operations rely on anti-collision lighting visible for 3 miles."
  },
  {
    id: 204,
    text: "What is 'controlled airspace'?",
    options: [
      "Airspace where ATC provides separation services — requires authorization for sUAS operations",
      "Airspace with no regulation",
      "Airspace designated for military use only",
      "Airspace below 400 feet"
    ],
    correctAnswer: 0,
    explanation: "Controlled airspace (Classes A, B, C, D, and E) is where ATC provides air traffic control services. sUAS operations generally require FAA authorization via LAANC or DroneZone."
  },
  {
    id: 205,
    text: "What is 'uncontrolled airspace'?",
    options: [
      "Class G airspace — where ATC does not provide services and sUAS authorization is not required",
      "Airspace where drones can fly anywhere",
      "Airspace below 100 feet",
      "Airspace with no aircraft"
    ],
    correctAnswer: 0,
    explanation: "Class G (uncontrolled) airspace extends from the surface to the floor of the overlying controlled airspace and does not require ATC authorization for sUAS operations."
  },
  {
    id: 206,
    text: "What does a 'Temporary Flight Restriction (TFR)' publication include?",
    options: [
      "The location, dimensions, times of restriction, and reason for the TFR",
      "The name of the person requesting the TFR",
      "The type of aircraft involved",
      "A weather forecast"
    ],
    correctAnswer: 0,
    explanation: "TFR NOTAMs specify the geographic area (coordinates/radius), altitude limits, effective times, and the reason (VIP movement, disaster relief, sporting events, space operations, etc.)."
  },
  {
    id: 207,
    text: "What is the typical TFR radius for a stadium event (MLB, NFL)?",
    options: [
      "5 statute miles, surface to 3,000 feet AGL, beginning 1 hour before to 1 hour after event",
      "1 statute mile",
      "10 statute miles",
      "No TFR exists for stadiums"
    ],
    correctAnswer: 0,
    explanation: "A standard stadium TFR prohibits all aircraft (including drones) within 3 NM of the stadium from 1 hour before to 1 hour after a Major League Baseball, NFL, NCAA Division I football, or NASCAR event."
  },
  {
    id: 208,
    text: "What is the maximum distance for flying from a moving vehicle under Part 107?",
    options: [
      "No operation from a moving vehicle is allowed",
      "Operations from a moving vehicle are only allowed over sparsely populated areas — there is no specific distance limit",
      "100 feet",
      "1 mile"
    ],
    correctAnswer: 1,
    explanation: "§107.25 allows operations from a moving vehicle or watercraft only over sparsely populated areas. No distance limit is specified beyond the general VLOS requirement."
  },
  {
    id: 209,
    text: "What is a 'Preflight Risk Assessment'?",
    options: [
      "An optional mental exercise",
      "A systematic review of all hazards (weather, airspace, obstacles, equipment, human factors) before each flight",
      "A post-accident review",
      "A maintenance checklist"
    ],
    correctAnswer: 1,
    explanation: "A preflight risk assessment evaluates weather, airspace restrictions, equipment condition, pilot readiness, site hazards, and contingency plans. It should be documented and reviewed before every flight."
  },
  {
    id: 210,
    text: "What is the recommended format for a 'Flight Plan' for commercial drone operations?",
    options: [
      "A standard FAA flight plan filed with ATC",
      "An operational plan including flight path, time, altitude, team roles, emergency procedures, and communication plan — not typically filed with ATC for sUAS",
      "A simple verbal agreement",
      "No plan is needed"
    ],
    correctAnswer: 1,
    explanation: "While commercial drone operations don't usually file formal FAA flight plans, a comprehensive operational plan should include: objectives, flight area, team member roles, communication plan, emergency contingencies, and data management."
  },
  // ===== ADDITIONAL OPERATIONS SAFETY =====
  {
    id: 211,
    text: "What is the recommended approach to flying near wildlife?",
    options: [
      "Approach as close as possible for better photos",
      "Maintain a safe distance to avoid disturbing animals — FAA recommends at least 100 feet; some parks require more",
      "No restrictions apply to wildlife",
      "Use loud noises to scare animals away"
    ],
    correctAnswer: 1,
    explanation: "Disturbing wildlife is both ecologically harmful and often illegal (Marine Mammal Protection Act, Endangered Species Act, etc.). Drone noise and presence can cause stress, abandonment of nests, and stampedes."
  },
  {
    id: 212,
    text: "What is the '3-Second Rule' when flying a drone?",
    options: [
      "The drone must ascend for 3 seconds before moving",
      "Anticipate 3 seconds ahead — always think about where the drone will be in 3 seconds to avoid surprises",
      "Land within 3 seconds of losing signal",
      "Turn every 3 seconds for 360° awareness"
    ],
    correctAnswer: 1,
    explanation: "The 3-second rule is a common technique for maintaining situational awareness: constantly look ahead and anticipate where the drone will be in 3 seconds, what obstacles might be there, and what the controls will need to do."
  },
  {
    id: 213,
    text: "What is the 'Two-Miss Rule' in drone operations?",
    options: [
      "If you miss two flight checks, you must stop flying",
      "If you make two mistakes in a flight, land and reassess the situation",
      "Stay at least 2 miles away from airports",
      "Only take two flights per day"
    ],
    correctAnswer: 1,
    explanation: "The 'Two-Miss Rule' is an ADM concept: if you make two mistakes (e.g., forgetting to set RTH altitude, flying without checking NOTAMs, misreading battery levels), land and take a break to reset your focus."
  },
  {
    id: 214,
    text: "What should a remote pilot do if they encounter a medical emergency while flying?",
    options: [
      "Continue flying and ignore it",
      "Land the aircraft immediately in the safest available location and then attend to the emergency",
      "Try to reach the remote controller first",
      "Switch to automated flight mode"
    ],
    correctAnswer: 1,
    explanation: "Safety of people on the ground takes priority. The drone should be landed safely as quickly as possible, even if it means landing outside the planned zone, then the emergency can be addressed."
  },
  {
    id: 215,
    text: "What is the proper procedure for 'emergency descent' of a multi-rotor drone?",
    options: [
      "Cut power completely and let it fall — not recommended",
      "Reduce throttle gradually while maintaining control — use a controlled descent with heading awareness",
      "Ascend to avoid obstacles first",
      "Activate sport mode and fly down"
    ],
    correctAnswer: 1,
    explanation: "An emergency descent should be controlled — reduce throttle while maintaining attitude and heading control. Cutting power completely (dropping the drone) is only appropriate in extreme cases to prevent injury/property damage."
  },
  {
    id: 216,
    text: "What is a 'Flyaway' situation?",
    options: [
      "A scenic flight",
      "An uncontrolled drone that continues flying away from the controller due to GPS/compass failure or control loss",
      "A preprogrammed flight path",
      "A competitive drone racing event"
    ],
    correctAnswer: 1,
    explanation: "A flyaway occurs when the drone loses its orientation, GPS lock, or control link, and continues flying uncontrollably away from the operator. If possible, engaging RTH may recover the drone."
  },
  {
    id: 217,
    text: "What is the first thing to do if you lose video feed but maintain control link?",
    options: [
      "Continue the mission — video is optional",
      "Activate RTH or fly the drone back visually — video loss may indicate damaged camera, but control may still work",
      "Land immediately",
      "Restart the drone in flight"
    ],
    correctAnswer: 1,
    explanation: "If the video feed is lost but control is intact, the pilot should either fly the aircraft back using visual line of sight or activate RTH. Video loss alone is not critical if VLOS is maintained."
  },
  {
    id: 218,
    text: "What is the recommended procedure if you lose GPS while flying?",
    options: [
      "Continue flying — GPS is optional",
      "The aircraft may drift in wind — switch to ATTI mode and fly manually, or land as soon as safely possible",
      "GPS loss has no effect on flight",
      "Reboot the drone in flight"
    ],
    correctAnswer: 1,
    explanation: "GPS loss means the drone loses position hold and may drift with the wind. Many drones automatically switch to Attitude (ATTI) mode. The pilot must manually maintain position and altitude, and should land as soon as possible."
  },
  {
    id: 219,
    text: "What is the recommended altitude for 'Return to Home' to be set above obstacles?",
    options: [
      "At least 50 feet above the tallest obstacle in the flight path",
      "At least 100 feet above the tallest obstacle",
      "400 feet AGL regardless of obstacles",
      "No higher than the current altitude"
    ],
    correctAnswer: 0,
    explanation: "RTH altitude should be set high enough to clear all obstacles on the return path plus a safety margin — typically at least 50 feet above the tallest obstacle (tree, building, tower) between the drone and the home point."
  },
  {
    id: 220,
    text: "What should be done with the drone's data logs after a flight?",
    options: [
      "Delete them to save space",
      "Review them periodically — logs can reveal developing issues (vibration, power anomalies, GPS issues) before they cause failures",
      "Upload to social media",
      "No action is required"
    ],
    correctAnswer: 1,
    explanation: "Flight logs contain telemetry data (motor output, vibration, battery performance, GPS quality). Reviewing them can reveal trends that indicate developing maintenance issues — an important part of aviation safety culture."
  },
  // ===== MAPPING AND SURVEYING =====
  {
    id: 221,
    text: "What is 'ground sample distance' (GSD) in drone mapping?",
    options: [
      "The distance between the drone and the ground",
      "The distance between the center of two adjacent pixels on the ground as measured from the drone's camera — determines map resolution",
      "The distance between flight lines",
      "The time between photos"
    ],
    correctAnswer: 1,
    explanation: "GSD is the distance between pixel centers on the ground. Lower GSD values (e.g., 1 cm/pixel) mean higher resolution. GSD depends on altitude, camera sensor size, and lens focal length."
  },
  {
    id: 222,
    text: "What is 'orthomosaic' mapping?",
    options: [
      "A 3D model of terrain",
      "A geometrically corrected composite image made from multiple aerial photos — each pixel is orthorectified to be at the correct geographic location",
      "A single high-resolution photo",
      "A topographic map"
    ],
    correctAnswer: 1,
    explanation: "An orthomosaic is created by stitching many overlapping images together and correcting for perspective, lens distortion, and terrain relief. The result is a precisely aligned map accurate for measurements."
  },
  {
    id: 223,
    text: "What is 'photogrammetry' in the context of drone operations?",
    options: [
      "A technique for measuring objects from photographs by analyzing overlapping images to create 3D models",
      "A photography technique for better colors",
      "A video editing method",
      "A sensor calibration technique"
    ],
    correctAnswer: 0,
    explanation: "Photogrammetry uses overlapping images taken from different angles to extract 3D measurements and models. Drone photogrammetry can create accurate orthomosaics, elevation models (DSM/DTM), and 3D point clouds."
  },
  {
    id: 224,
    text: "What is the recommended minimum overlap between images for photogrammetry?",
    options: [
      "50% front lap, 30% side lap",
      "75% front overlap, 60% side overlap",
      "20% front overlap, 10% side overlap",
      "100% front and side overlap"
    ],
    correctAnswer: 1,
    explanation: "For high-quality photogrammetry, typical recommendations are 75-85% front overlap and 60-70% side overlap. More overlap provides better feature matching but increases flight time and data volume."
  },
  {
    id: 225,
    text: "What is a 'digital elevation model' (DEM) derived from drone data?",
    options: [
      "A 2D map image",
      "A 3D representation of the Earth's surface, showing elevation values for each pixel",
      "A photographic composite",
      "A vegetation index"
    ],
    correctAnswer: 1,
    explanation: "A DEM is a raster grid where each pixel contains an elevation value. DSMs include surface features (trees, buildings), while DTMs show bare earth. These are key outputs of drone surveying."
  },
  // ===== ADDITIONAL WEATHER TOPICS =====
  {
    id: 226,
    text: "What is 'katabatic wind'?",
    options: [
      "Wind that flows downhill due to gravity (gravity wind)",
      "Wind that flows uphill during the day",
      "A type of cold front",
      "Wind created by thunderstorms"
    ],
    correctAnswer: 0,
    explanation: "Katabatic winds (gravity winds) are cold, dense air that flows downhill due to gravity. They can be strong and gusty, especially in mountainous terrain at night."
  },
  {
    id: 227,
    text: "What is 'anabatic wind'?",
    options: [
      "Wind that flows uphill due to solar heating of slopes",
      "Wind that flows downhill at night",
      "A constant wind direction",
      "A type of sea breeze"
    ],
    correctAnswer: 0,
    explanation: "Anabatic winds (upslope winds) form when the sun heats mountain slopes, warming the adjacent air, which rises along the slope. They typically develop on sunny afternoons in mountainous terrain."
  },
  {
    id: 228,
    text: "What is 'mountain wave turbulence'?",
    options: [
      "Wind that flows smoothly over mountains",
      "Turbulence downwind of mountains caused by standing waves in the airflow — can extend tens of miles downwind",
      "Wind that only affects high-altitude aircraft",
      "A thermal updraft from mountains"
    ],
    correctAnswer: 1,
    explanation: "Mountain waves (standing waves) form when strong winds flow perpendicular to a mountain range, creating waves downwind. These can produce severe turbulence (rotor clouds) even in clear air."
  },
  {
    id: 229,
    text: "What is a 'dust devil' and why is it relevant to drone operations?",
    options: [
      "A weak tornado — can be hazardous to drones, especially in dry, hot conditions with unstable air",
      "A type of dust storm",
      "A sandstorm",
      "A weather radar phenomenon"
    ],
    correctAnswer: 0,
    explanation: "Dust devils are small, rotating columns of rising air. They can suddenly appear and generate strong localized winds and turbulence capable of destabilizing a drone, especially light ones."
  },
  {
    id: 230,
    text: "What is the 'wind gradient' effect near buildings?",
    options: [
      "The wind speed is the same at all altitudes near buildings",
      "Buildings create complex wind patterns with eddies, accelerated flow around corners, and calmer areas in the lee — can create sudden drone instability",
      "Buildings block wind completely",
      "Wind always flows uniformly around buildings"
    ],
    correctAnswer: 1,
    explanation: "Buildings disrupt airflow, creating turbulence, wind acceleration around corners (Venturi effect), and calm zones in the lee. Drones flying near buildings can experience sudden wind changes and loss of control."
  },
  // ===== HUMAN FACTORS DEEP DIVE =====
  {
    id: 231,
    text: "What is 'confirmation bias' and how can it affect a drone pilot?",
    options: [
      "A tendency to seek information that confirms pre-existing beliefs — can cause a pilot to ignore warning signs that contradict their plan to fly",
      "A form of spatial disorientation",
      "A type of memory loss",
      "A communication technique"
    ],
    correctAnswer: 0,
    explanation: "Confirmation bias leads pilots to focus on information that supports their desire to fly (e.g., 'the wind is only 15 knots — that's within limits') while ignoring contrary information (gusts to 25 knots)."
  },
  {
    id: 232,
    text: "What is 'automation bias' in drone operations?",
    options: [
      "The tendency to trust automated systems (RTH, obstacle avoidance) too much, reducing pilot vigilance",
      "A preference for manual control",
      "A software programming error",
      "Bias toward a specific flight mode"
    ],
    correctAnswer: 0,
    explanation: "Automation bias means the pilot over-relies on automated systems, assuming they always work correctly. This can lead to reduced monitoring of the aircraft and delayed intervention when automation fails."
  },
  {
    id: 233,
    text: "What is 'plan continuation bias'?",
    options: [
      "The tendency to continue with an original flight plan even when conditions make it unsafe",
      "A planning technique",
      "A type of insurance",
      "A preflight requirement"
    ],
    correctAnswer: 0,
    explanation: "Plan continuation bias (press-on-itis) is the tendency to stick with a plan despite evidence that the situation has changed. It's a major cause of accidents when weather or other conditions deteriorate."
  },
  {
    id: 234,
    text: "What is 'channelized attention'?",
    options: [
      "Focusing on one task or instrument to the exclusion of all others, missing critical cues",
      "Switching between tasks efficiently",
      "A radio frequency management technique",
      "A multi-tasking improvement strategy"
    ],
    correctAnswer: 0,
    explanation: "Channelized attention (tunnel vision) occurs when a pilot becomes fixated on one task (e.g., following the camera feed or troubleshooting an error message) and neglects other critical tasks like scanning for traffic."
  },
  {
    id: 235,
    text: "What is the 'primacy effect' in decision-making?",
    options: [
      "The tendency to remember and give more weight to information received first",
      "Forgetting early information over time",
      "Prioritizing primary flight controls",
      "First impressions of a new aircraft"
    ],
    correctAnswer: 0,
    explanation: "The primacy effect means early information (e.g., an initial weather report saying conditions are good) disproportionately influences decisions, even when later reports indicate deterioration."
  },
  // ===== EMERGENCY PROCEDURES =====
  {
    id: 236,
    text: "What should a remote pilot do if they lose visual and radio contact with their drone simultaneously?",
    options: [
      "Wait 30 seconds for reconnection, then begin search procedures",
      "Immediately call emergency services",
      "Continue the mission — the drone will return automatically",
      "Abandon the drone and file an insurance claim"
    ],
    correctAnswer: 0,
    explanation: "If both VLOS and control link are lost, the drone should automatically initiate failsafe RTH after a timeout. The pilot should wait (typically 30-60 seconds) for reconnection, then follow manufacturer's lost aircraft procedures."
  },
  {
    id: 237,
    text: "What is the '5-4-3-2-1' emergency landing procedure for drones?",
    options: [
      "A countdown before landing",
      "A systematic scan: 5 check GPS, 4 check altitude, 3 check obstacles, 2 throttle down, 1 land",
      "A pilot recall technique",
      "A waypoint navigation sequence"
    ],
    correctAnswer: 1,
    explanation: "This is a memory aid for emergency landing: (5) check GPS/home point, (4) check altitude and descent path, (3) scan for obstacles, (2) reduce throttle gradually, (1) confirm landing area is clear."
  },
  {
    id: 238,
    text: "What is the proper response if a drone begins to behave erratically (oscillations, drifting, unexplained movements)?",
    options: [
      "Land immediately if the behavior doesn't resolve quickly",
      "Switch to sport mode to stabilize it",
      "Ignore it — drones self-correct",
      "Ascend to higher altitude"
    ],
    correctAnswer: 0,
    explanation: "Erratic flight behavior can indicate compass failure, IMU error, motor/propeller damage, or GPS interference. The safest course is to land as soon as safely possible and diagnose the issue."
  },
  {
    id: 239,
    text: "What should a pilot do if they realize they've flown into an area they don't have authorization for (e.g., controlled airspace without LAANC approval)?",
    options: [
      "Continue flying — what's done is done",
      "Immediately return to or land in an authorized area, report the incident, and document it for your safety records",
      "Ignore the airspace boundary",
      "Speed up to exit the area faster"
    ],
    correctAnswer: 1,
    explanation: "Safety first: return to authorized airspace immediately. Then document the incident to understand what went wrong (e.g., did the geofence fail? Did you misread the sectional?). Self-reporting shows good safety culture."
  },
  {
    id: 240,
    text: "If a drone battery reaches critical level during a mission, what should the pilot do?",
    options: [
      "Continue the mission — the drone will automatically land at the right time",
      "Return to the launch point or find a safe landing zone immediately — do not push the battery to depletion",
      "Descend to conserve battery",
      "Increase speed to reach the landing point faster"
    ],
    correctAnswer: 1,
    explanation: "When battery reaches critical level, the pilot should immediately initiate return or find the nearest safe landing zone. Pushing a battery to depletion can cause total power loss mid-flight. Note: flying faster doesn't necessarily save battery."
  },
  // ===== UAS MAINTENANCE =====
  {
    id: 241,
    text: "How often should drone motors be checked for smooth operation?",
    options: [
      "Only when they make unusual noises",
      "Before each flight — spin each motor by hand and check for grinding, binding, or excessive play",
      "Once a year",
      "Never — motors are sealed units"
    ],
    correctAnswer: 1,
    explanation: "Motors should be checked before each flight. Spin each motor by hand to feel for rough bearings, binding (due to debris), or lateral play. Any of these indicate the motor should be replaced before the next flight."
  },
  {
    id: 242,
    text: "What is the proper way to clean a drone camera lens?",
    options: [
      "Use a microfiber cloth and lens cleaning solution, or a lens pen designed for camera optics",
      "Use a paper towel",
      "Use compressed air",
      "Use water and soap"
    ],
    correctAnswer: 0,
    explanation: "Camera lenses should be cleaned with proper equipment: microfiber cloth or lens pen designed for optics. Using paper towels or rough fabrics can scratch the lens coating. Compressed air can force dust into the lens assembly."
  },
  {
    id: 243,
    text: "What is the recommended replacement schedule for drone propellers?",
    options: [
      "Every 10 flight hours",
      "Replace when visibly damaged (nicks, cracks, chips), bent, or after any significant impact — not on a fixed schedule",
      "Every 100 flights",
      "Never — propellers last the lifetime of the drone"
    ],
    correctAnswer: 1,
    explanation: "Propellers should be replaced when they show any damage: nicks, cracks, chips, bends, or after any hard landing or impact. Even minor damage can cause vibration, noise, and efficiency loss."
  },
  {
    id: 244,
    text: "What should be done if a drone has been exposed to saltwater?",
    options: [
      "Let it dry in the sun — it will be fine",
      "Rinse with fresh water immediately, dry thoroughly, and inspect all components for corrosion",
      "Keep flying — saltwater doesn't harm drones",
      "Throw it away"
    ],
    correctAnswer: 1,
    explanation: "Saltwater is extremely corrosive to electronics. The drone should be powered off immediately, rinsed with fresh (distilled) water if possible, dried thoroughly, and inspected by a professional."
  },
  {
    id: 245,
    text: "How should firmware updates be managed?",
    options: [
      "Update immediately when available",
      "Read release notes — update for safety-critical fixes, evaluate non-critical updates thoroughly, test in a safe area",
      "Never update firmware",
      "Update based on social media recommendations"
    ],
    correctAnswer: 1,
    explanation: "Not all firmware updates are beneficial. Safety-critical updates (GPS fixes, flight controller patches) should be applied promptly. However, updates can also introduce new bugs. Read release notes and test in a controlled environment."
  },
  // ===== ECONOMICS AND INSURANCE =====
  {
    id: 246,
    text: "What type of insurance is recommended for commercial drone operations?",
    options: [
      "No insurance is needed",
      "General liability insurance covering hull damage and third-party liability",
      "Only vehicle insurance",
      "Only property insurance"
    ],
    correctAnswer: 1,
    explanation: "Commercial drone operators typically carry liability insurance (covering damage to third parties) and hull insurance (covering damage to the aircraft itself). Many clients require proof of $1M+ liability coverage."
  },
  {
    id: 247,
    text: "What is 'hull insurance' for a drone?",
    options: [
      "Insurance covering the physical drone against damage, loss, or theft",
      "Insurance for the aircraft frame only",
      "A warranty extension",
      "Liability coverage for the operator"
    ],
    correctAnswer: 0,
    explanation: "Hull insurance covers physical damage to the aircraft itself — crash damage, water damage, flyaway loss, and theft. It's like comprehensive auto insurance for the drone."
  },
  {
    id: 248,
    text: "What is 'liability insurance' for drone operations?",
    options: [
      "Insurance covering damage the drone causes to third parties or their property",
      "Insurance for the drone itself",
      "Medical insurance",
      "Workers' compensation"
    ],
    correctAnswer: 0,
    explanation: "Liability insurance covers bodily injury and property damage that the drone causes to third parties (people on the ground, other property). It's typically required by clients and recommended for all commercial operations."
  },
  {
    id: 249,
    text: "What is a 'waiver' in the context of FAA Part 107?",
    options: [
      "A request to be exempt from paying registration fees",
      "An FAA-issued document that allows an operator to deviate from specific Part 107 regulations for a defined operation",
      "A release of liability",
      "A temporary pilot certificate"
    ],
    correctAnswer: 1,
    explanation: "A Part 107 waiver authorizes specific deviations from standard rules. Operators apply through the FAA DroneZone, describing the operation, safety mitigations, and how they will maintain safety while deviating from the regulation."
  },
  {
    id: 250,
    text: "What is 'air traffic control' (ATC) and its relevance to drone operations?",
    options: [
      "ATC only serves manned aircraft and has no relevance to drones",
      "ATC provides separation services in controlled airspace — drone operators must get authorization via LAANC for operations in controlled airspace",
      "ATC is only for military aircraft",
      "ATC controls all drones directly"
    ],
    correctAnswer: 1,
    explanation: "ATC manages air traffic in controlled airspace. Drone operators must obtain authorization (typically via LAANC) to operate in controlled airspace, but do not generally communicate directly with ATC."
  },
  {
    id: 251,
    text: "What is the 'Class E Surface Area' depicted on sectionals?",
    options: [
      "Class E airspace that begins at the surface, shown as a dashed magenta circle",
      "Class G airspace",
      "Class D airspace",
      "A restricted area"
    ],
    correctAnswer: 0,
    explanation: "A dashed magenta circle indicates Class E airspace beginning at the surface. Operations here require ATC authorization via LAANC, just like Class B, C, or D airspace."
  },
  {
    id: 252,
    text: "What is 'ground control station' (GCS) software used for?",
    options: [
      "Only for military drones",
      "A computer or tablet application that provides flight planning, telemetry monitoring, camera control, and mission execution",
      "An aircraft registration tool",
      "A weather forecasting service"
    ],
    correctAnswer: 1,
    explanation: "GCS software (like DJI Pilot, Pix4Dcapture, or Mission Planner) allows pilots to plan automated missions, set waypoints, view real-time telemetry, and adjust camera settings during flight."
  },
  {
    id: 253,
    text: "What is the difference between 'true airspeed' and 'ground speed'?",
    options: [
      "They are the same thing",
      "True airspeed is speed relative to the surrounding air; ground speed is speed over the Earth's surface (true airspeed corrected for wind)",
      "Ground speed is always faster",
      "True airspeed is measured by the pitot tube; ground speed by GPS"
    ],
    correctAnswer: 1,
    explanation: "True airspeed is the aircraft's speed through the air. Ground speed equals true airspeed plus or minus the wind component — headwind subtracts, tailwind adds."
  },
  {
    id: 254,
    text: "What is 'headwind' and how does it affect drone flight?",
    options: [
      "Wind from the side — has no effect on ground speed",
      "Wind blowing toward the aircraft from the front — reduces ground speed and battery range",
      "Wind from behind the aircraft",
      "Wind that only affects manned aircraft"
    ],
    correctAnswer: 1,
    explanation: "A headwind flows toward the aircraft from the front. It reduces ground speed, requires more energy to make progress, and reduces effective range."
  },
  {
    id: 255,
    text: "What is 'crosswind' and its effect on drone operations?",
    options: [
      "Wind from directly ahead",
      "Wind from the side — causes drift and requires compensation to maintain course",
      "Wind from behind",
      "Wind that only affects landing"
    ],
    correctAnswer: 1,
    explanation: "Crosswind comes from the side, causing the drone to drift sideways. The pilot or flight controller must compensate by pointing the nose into the wind (crabbing) to maintain the desired ground track."
  },
  {
    id: 256,
    text: "What is 'BVLOS' and why is it significant?",
    options: [
      "Beyond Visual Line of Sight — requires an FAA waiver and presents significant safety and technological challenges",
      "Base VOR Landing Operation System",
      "A type of visual observer",
      "A camera stabilization technology"
    ],
    correctAnswer: 0,
    explanation: "BVLOS operations extend drone flight beyond where the pilot can see the aircraft. This is currently restricted under Part 107 and requires specific waivers with robust detect-and-avoid capabilities."
  },
  {
    id: 257,
    text: "What is 'detect and avoid' (DAA) technology?",
    options: [
      "A camera filter for avoiding bright light",
      "Systems that detect airborne hazards and automatically maneuver to avoid collisions — critical for BVLOS",
      "A GPS optimization",
      "A propeller guard"
    ],
    correctAnswer: 1,
    explanation: "DAA systems use sensors (radar, ADS-B, optical, acoustic) to detect conflicting traffic and provide alerts to the pilot or automatically maneuver. DAA is essential for safe BVLOS operations."
  },
  {
    id: 258,
    text: "What is 'Remote ID'?",
    options: [
      "A license plate for drones that broadcasts identification and position",
      "A pilot identification number",
      "A radio frequency",
      "A type of drone registration"
    ],
    correctAnswer: 0,
    explanation: "Remote ID is like a digital license plate. It broadcasts the drone's ID, position, altitude, velocity, and control station location. Most drones manufactured after September 2023 must have Remote ID capability."
  },
  {
    id: 259,
    text: "What does Remote ID broadcast?",
    options: [
      "Only the operator's name",
      "Drone ID, position, altitude, velocity, control station location, and emergency status",
      "Only the serial number",
      "Only the battery level"
    ],
    correctAnswer: 1,
    explanation: "Remote ID broadcasts: drone ID (serial or session ID), position and altitude, velocity, control station position and altitude, a timestamp, and emergency status."
  },
  {
    id: 260,
    text: "Can a pre-September 2023 drone comply with Remote ID rules?",
    options: [
      "No — it must be replaced",
      "Yes — install a Remote ID broadcast module or fly only at FAA-Recognized Identification Areas (FRIAs)",
      "Yes, but only with a waiver",
      "No — Remote ID only applies to new drones"
    ],
    correctAnswer: 1,
    explanation: "Operators can: (1) use a Standard Remote ID drone, (2) install a broadcast module on an older drone, or (3) fly only at FAA-Recognized Identification Areas (FRIAs) operated by community-based organizations."
  },
  {
    id: 261,
    text: "What is the FAA's 'B4UFLY' app?",
    options: [
      "A drone racing game",
      "A free app showing airspace status, TFRs, and whether it's legal to fly at your location",
      "A flight planner",
      "A registration portal"
    ],
    correctAnswer: 1,
    explanation: "B4UFLY is the FAA's official mobile app that lets drone operators check airspace status — showing controlled airspace, special use airspace, TFRs, and national park boundaries at their current location."
  },
  {
    id: 262,
    text: "What is 'special use airspace'?",
    options: [
      "Airspace reserved for special events",
      "Designated airspace for specific purposes: Restricted Areas, Warning Areas, MOAs, Alert Areas, and Controlled Firing Areas",
      "Military airspace only",
      "Airspace closed to all aircraft"
    ],
    correctAnswer: 1,
    explanation: "Special use airspace includes Restricted Areas (weapons testing), Warning Areas (hazardous over water), MOAs (military training), Alert Areas (high volume training), and Controlled Firing Areas."
  },
  {
    id: 263,
    text: "What is a 'Controlled Firing Area' (CFA)?",
    options: [
      "An area where all aircraft are prohibited",
      "An area where firing may occur but can be suspended if aircraft approach — not depicted on sectional charts",
      "A restricted airspace zone",
      "A military base"
    ],
    correctAnswer: 1,
    explanation: "CFAs are areas where hazardous activities (firing) can be stopped if ATC detects aircraft approaching. Unlike Restricted Areas, CFAs are NOT depicted on sectional charts."
  },
  {
    id: 264,
    text: "What is the 'National Airspace System' (NAS)?",
    options: [
      "A system of national parks",
      "All US airspace, navigation facilities, equipment, services, airports, and regulations supporting aviation",
      "A weather tracking system",
      "A drone database"
    ],
    correctAnswer: 1,
    explanation: "The NAS encompasses all components for aviation in the US: controlled/uncontrolled airspace, navigation aids, ATC facilities, airports, technology, procedures, regulations, and personnel."
  },
  {
    id: 265,
    text: "How does cold weather affect drone batteries?",
    options: [
      "Improves battery capacity",
      "Reduces capacity and voltage output — expect 30-50% less endurance",
      "No effect",
      "Increases discharge rate"
    ],
    correctAnswer: 1,
    explanation: "Cold slows the chemical reaction in LiPo batteries, reducing effective capacity by 30-50%. Pre-warm batteries, monitor voltage closely, and reduce flight time in cold conditions."
  },
  {
    id: 266,
    text: "How does hot weather affect drone operations?",
    options: [
      "Hot weather improves performance",
      "Reduced lift (high density altitude), battery overheating risk, and potential electronics failure — reduce flight times",
      "No effect",
      "Batteries last longer"
    ],
    correctAnswer: 1,
    explanation: "High temperatures increase density altitude (reducing lift), risk battery overheating, and can push electronics beyond safe operating ranges. Monitor temperatures and reduce flight time."
  },
  {
    id: 267,
    text: "What is 'sensor fusion' in drone flight controllers?",
    options: [
      "Combining GPS, IMU, barometer, compass, and vision data for better position and attitude accuracy",
      "A camera sensor type",
      "Battery management",
      "Propeller design"
    ],
    correctAnswer: 0,
    explanation: "Sensor fusion combines inputs from multiple sensors (GPS, accelerometers, gyroscopes, magnetometers, barometers, vision) to produce more accurate position, attitude, and velocity estimates than any single sensor."
  },
  {
    id: 268,
    text: "Why is vibration isolation important on a drone?",
    options: [
      "To eliminate noise",
      "To prevent motor/propeller vibration from degrading camera footage and confusing flight controller sensors",
      "To reduce weight",
      "To improve battery life"
    ],
    correctAnswer: 1,
    explanation: "Vibrations can cause jello effect in video, confuse IMU and gyro readings, and lead to flight instability. Rubber mounts, gel dampers, and anti-vibration boards isolate the camera and flight controller."
  },
  {
    id: 269,
    text: "What does 'GPS jamming' do to a drone?",
    options: [
      "Only affects cell phones",
      "Blocks GPS reception — drone loses position hold, may switch to ATTI mode, and RTH may be disabled",
      "Has no effect",
      "Improves accuracy"
    ],
    correctAnswer: 1,
    explanation: "GPS interference or jamming deprives the drone of position data. The drone may drift (ATTI mode), lose autonomous features, and RTH may fail to navigate back to the home point."
  },
  {
    id: 270,
    text: "What is a 'waypoint mission'?",
    options: [
      "A manual flight path",
      "A pre-programmed flight through defined GPS coordinates that the drone follows automatically",
      "A single photo",
      "A landing point"
    ],
    correctAnswer: 1,
    explanation: "Waypoint missions use programmed GPS coordinates the drone flies to in sequence. Each waypoint can have its own altitude, speed, heading, and camera action settings."
  },
  {
    id: 271,
    text: "What is 'geotagging' in drone photography?",
    options: [
      "Tagging photos with GPS coordinates for mapping",
      "Tagging with the pilot's name",
      "A social media feature",
      "A photo filter"
    ],
    correctAnswer: 0,
    explanation: "Geotagging embeds GPS coordinates (lat, lon, altitude) into each photo's EXIF data, essential for photogrammetry processing and organizing aerial imagery collections."
  },
  {
    id: 272,
    text: "What is the difference between DTM and DSM?",
    options: [
      "They are the same",
      "DTM = bare earth elevation; DSM = top surface including trees and buildings",
      "DTM is 2D; DSM is 3D",
      "DTM is for land; DSM is for water"
    ],
    correctAnswer: 1,
    explanation: "Digital Terrain Model (DTM) shows bare earth with vegetation removed. Digital Surface Model (DSM) includes everything — trees, buildings, bridges. The difference (nDSM) represents feature heights."
  },
  {
    id: 273,
    text: "What is NDVI?",
    options: [
      "Normalized Difference Vegetation Index — measures plant health using near-infrared and red light",
      "A camera filter",
      "A GPS format",
      "A flight parameter"
    ],
    correctAnswer: 0,
    explanation: "NDVI compares reflected near-infrared (strong in healthy plants) and red light (absorbed by healthy plants). Values range from -1 to +1; higher values indicate healthier vegetation."
  },
  {
    id: 274,
    text: "What equipment is needed for NDVI imagery?",
    options: [
      "Any standard RGB camera",
      "A multispectral camera or modified camera capturing near-infrared and red-edge bands",
      "A thermal camera",
      "A 360° camera"
    ],
    correctAnswer: 1,
    explanation: "NDVI requires red and near-infrared spectral bands unavailable on standard RGB cameras. Multispectral cameras (Micasense, DJI P4 Multispectral) or modified cameras with NIR filters capture these bands."
  },
  {
    id: 275,
    text: "What does a thermal camera detect?",
    options: [
      "Visible light",
      "Infrared radiation (heat) emitted by objects — creates temperature maps",
      "Only visible in darkness",
      "Radio waves"
    ],
    correctAnswer: 1,
    explanation: "Thermal cameras detect long-wave infrared radiation (8-14 μm) emitted by all objects, producing thermograms that show temperature differences. Used for inspection, search and rescue, and surveillance."
  },
  {
    id: 276,
    text: "What is the difference between radiometric and non-radiometric thermal cameras?",
    options: [
      "Radiometric = calibrated temperature measurements; non-radiometric = relative temperature differences only",
      "Radiometric uses more power",
      "Non-radiometric is higher resolution",
      "No difference"
    ],
    correctAnswer: 0,
    explanation: "Radiometric thermal cameras output per-pixel calibrated temperature data for analysis. Non-radiometric cameras display a thermal image without storing calibrated temperature values."
  },
  {
    id: 277,
    text: "What is drone-based LIDAR?",
    options: [
      "Light Detection and Ranging — laser pulses measure distances to create 3D point clouds",
      "A night vision camera",
      "GPS enhancement",
      "A communication protocol"
    ],
    correctAnswer: 0,
    explanation: "LIDAR fires rapid laser pulses and measures return time to calculate distances. Drone LIDAR creates dense 3D point clouds with centimeter accuracy, penetrating vegetation to measure bare earth."
  },
  {
    id: 278,
    text: "What is a 'point cloud'?",
    options: [
      "Data points in 3D space representing surfaces — each has X, Y, Z coordinates",
      "A cluster of GPS satellites",
      "A weather pattern",
      "A group of waypoints"
    ],
    correctAnswer: 0,
    explanation: "A point cloud is a 3D dataset generated by photogrammetry or LIDAR. Each point has spatial coordinates and often additional attributes like color or intensity. Used to create 3D models and measurements."
  },
  {
    id: 279,
    text: "What is 'bundle adjustment' in photogrammetry?",
    options: [
      "A camera calibration step",
      "An optimization refining 3D structure, camera positions, and camera parameters to minimize reprojection error",
      "Battery management",
      "A flight mode"
    ],
    correctAnswer: 1,
    explanation: "Bundle adjustment simultaneously optimizes all camera positions, 3D points, and calibration parameters to minimize the difference between projected and observed image points across all photos."
  },
  {
    id: 280,
    text: "What is 'Structure from Motion' (SfM)?",
    options: [
      "Reconstructing 3D structure from overlapping 2D images by matching features across photos",
      "A flight control mode",
      "Camera shake reduction",
      "GPS positioning"
    ],
    correctAnswer: 0,
    explanation: "SfM automatically identifies matching features across overlapping images and uses their relative motion to compute camera positions and build 3D geometry."
  },
  {
    id: 281,
    text: "What is a Ground Control Point (GCP)?",
    options: [
      "A point inside the drone where GPS is",
      "A marked point on the ground with surveyed coordinates — used to georeference drone maps for absolute accuracy",
      "A flight plan parameter",
      "A camera target"
    ],
    correctAnswer: 1,
    explanation: "GCPs are physical targets on the ground with precisely surveyed coordinates. They appear in the drone imagery and are used to georeference final maps to centimeter-level absolute accuracy."
  },
  {
    id: 282,
    text: "What is accuracy vs precision in mapping?",
    options: [
      "Accuracy = closeness to true value; Precision = consistency of repeated measurements",
      "They are the same",
      "Precision is more important",
      "Accuracy only matters for LIDAR"
    ],
    correctAnswer: 0,
    explanation: "Accuracy: how close to the true value. Precision: how repeatable/consistent. High precision with low accuracy gives repeatable but wrong values."
  },
  {
    id: 283,
    text: "What is RTK GPS?",
    options: [
      "Real-Time Kinematic — uses a base station to achieve centimeter-level accuracy",
      "A battery type",
      "A propeller",
      "A camera mode"
    ],
    correctAnswer: 0,
    explanation: "RTK uses a fixed base station to calculate GPS error corrections and transmit them to the drone in real time, achieving 1-3 cm accuracy vs. 1-3 m for standard GPS."
  },
  {
    id: 284,
    text: "What is PPK vs RTK?",
    options: [
      "PPK records raw GPS and applies corrections after flight; RTK does it in real-time with a radio link",
      "PPK is more accurate",
      "PPK doesn't need a base station",
      "They are identical"
    ],
    correctAnswer: 0,
    explanation: "PPK records raw GPS observations during flight and applies corrections during processing. Unlike RTK, PPK doesn't need a real-time radio link, working better where radio interference is an issue."
  },
  {
    id: 285,
    text: "What is camera triggering in mapping missions?",
    options: [
      "Manually pressing shutter",
      "Automated capture at distance or time intervals during programmed flight — ensures consistent overlap",
      "A test procedure",
      "A remote launch"
    ],
    correctAnswer: 1,
    explanation: "For photogrammetry, the camera triggers automatically at distance intervals (every X feet) or time intervals to ensure consistent forward and side overlap for reliable 3D reconstruction."
  },
  {
    id: 286,
    text: "What is a 'tie point' in photogrammetry?",
    options: [
      "A point where flight lines cross",
      "A feature visible in multiple overlapping images used to establish geometric relationships",
      "A physical ground marker",
      "A GPS waypoint"
    ],
    correctAnswer: 1,
    explanation: "Tie points are automatically detected image features that appear in at least two photos. Matching these points across images is how photogrammetry derives camera positions and 3D geometry."
  },
  {
    id: 287,
    text: "What is the PNT concept?",
    options: [
      "A racing format",
      "Position, Navigation, and Timing — the critical capabilities GPS/GNSS provides to drones",
      "A flight controller model",
      "A propeller type"
    ],
    correctAnswer: 1,
    explanation: "PNT is the essential triad GPS provides: Position (where am I), Navigation (how do I get there), and Timing (synchronization). Loss of PNT disrupts all autonomous flight capabilities."
  },
  {
    id: 288,
    text: "What is GNSS?",
    options: [
      "GPS only",
      "Global Navigation Satellite System — includes GPS, GLONASS, Galileo, BeiDou for better satellite coverage",
      "Ground stations only",
      "A type of drone"
    ],
    correctAnswer: 1,
    explanation: "GNSS covers all satellite navigation systems. Drones using multiple GNSS (GPS + GLONASS + Galileo) get faster acquisition, better satellite geometry, and improved accuracy."
  },
  {
    id: 289,
    text: "How should a drone's compass be calibrated?",
    options: [
      "No calibration needed",
      "Rotate the drone through specific axis rotations as shown in the app, away from metal and magnetic interference",
      "Point the drone north",
      "Shake the drone"
    ],
    correctAnswer: 1,
    explanation: "Compass calibration requires specific rotation patterns (horizontal and vertical) to measure local magnetic fields. Perform away from metal structures, power lines, and reinforced concrete."
  },
  {
    id: 290,
    text: "What are warning signs of a failing drone battery?",
    options: [
      "Battery works until it stops",
      "Swelling, shorter flight times, rapid voltage drop, cell imbalance, overheating, or physical damage",
      "Batteries don't fail",
      "Only the charger can detect issues"
    ],
    correctAnswer: 1,
    explanation: "Warning signs: physical swelling, reduced flight time, rapid voltage drop under load, inability to charge fully, cell voltage imbalance, and excessive heat during charge/discharge."
  },
  {
    id: 291,
    text: "What should be done with a damaged drone battery?",
    options: [
      "Keep using it",
      "Discontinue use, discharge to storage voltage in a fireproof area, recycle at hazardous waste facility",
      "Charge it fully to test",
      "Puncture to release gas"
    ],
    correctAnswer: 1,
    explanation: "Grounded batteries should be discharged to safe storage voltage, stored in fireproof Lipo bags away from combustibles, and recycled through hazardous waste facilities."
  },
  {
    id: 292,
    text: "What is a STAR and its relevance to drones?",
    options: [
      "Standard Terminal Arrival Route — high-traffic arrival paths for manned aircraft that drones should be aware of",
      "Drones can use STARs",
      "A drone flight pattern",
      "A weather category"
    ],
    correctAnswer: 0,
    explanation: "STARs are published arrival procedures for manned aircraft. While not directly regulating drones, pilots should be aware these are high-traffic areas with descending aircraft."
  },
  {
    id: 293,
    text: "What is 'crew resource management' for a solo drone pilot?",
    options: [
      "Managing a crew of helpers",
      "Using checklists, weather briefings, VOs, automated systems, and personal knowledge to manage workload safely",
      "Managing only the aircraft",
      "Maintenance only"
    ],
    correctAnswer: 1,
    explanation: "Even a single pilot manages resources: checklists ensure no step is missed, VOs scan for traffic, weather apps provide conditions, and automation assists. Using all resources effectively reduces risk."
  },
  {
    id: 294,
    text: "What is the purpose of a 'pre-flight checklist'?",
    options: [
      "For show only",
      "A standardized list ensuring all safety checks are completed before every flight",
      "A list of ATC frequencies",
      "A post-flight log"
    ],
    correctAnswer: 1,
    explanation: "A pre-flight checklist ensures aircraft, controller, battery, propellers, sensors, and environment are checked consistently every flight. It prevents missed items and reduces human error."
  },
  {
    id: 295,
    text: "What should be included in a pre-flight checklist?",
    options: [
      "Only battery check",
      "Propellers, motors, battery, controller, GPS, sensors, weather, airspace, NOTAMs, emergency plan, and landing zone assessment",
      "Only weather check",
      "Only the camera"
    ],
    correctAnswer: 1,
    explanation: "A thorough pre-flight includes: propeller inspection, motor spin check, battery voltage and connection, controller link, GPS satellite count, sensor calibration status, weather, airspace authorization, NOTAMs, and site survey."
  },
  {
    id: 296,
    text: "Why is it important to check NOTAMs before flying?",
    options: [
      "NOTAMs only affect manned aircraft",
      "NOTAMs contain crucial information about TFRs, airspace changes, hazards, and closures that directly affect drone operations",
      "NOTAMs are optional",
      "NOTAMs are weather forecasts"
    ],
    correctAnswer: 1,
    explanation: "NOTAMs provide time-critical information about TFRs (wildfires, VIP movements, stadium events), navigation aid outages, airspace changes, and hazards. Failing to check NOTAMs can result in illegal operations."
  },
  {
    id: 297,
    text: "What is the purpose of the FAA 'Safety Team' (FAASTeam)?",
    options: [
      "To enforce regulations",
      "To provide aviation safety education, training, and outreach through webinars, seminars, and online courses for all pilots",
      "To register aircraft",
      "To issue certificates"
    ],
    correctAnswer: 1,
    explanation: "The FAA Safety Team (FAASTeam) promotes aviation safety through education — offering free webinars, online courses (including Part 107 recurrent training), and seminars on a wide range of safety topics."
  },
  {
    id: 298,
    text: "Where can a remote pilot access free recurrent training?",
    options: [
      "Only through paid courses",
      "The FAA FAASTeam website offers free online recurrent training courses approved for Part 107 currency",
      "Only through the written test",
      "Recurrent training is only available through flight schools"
    ],
    correctAnswer: 1,
    explanation: "The FAASTeam provides free online recurrent training courses (ALC-451, ALC-677, etc.) that satisfy the 24-month recurrent requirement under §107.65. Search 'FAASTeam Part 107 recurrent' to find current courses."
  },
  {
    id: 299,
    text: "What is the best resource for staying current on Part 107 regulations?",
    options: [
      "Social media forums",
      "The FAA's official website (faa.gov/uas), the DroneZone portal, B4UFLY app, and FAASTeam courses",
      "Word of mouth",
      "Only the initial knowledge test"
    ],
    correctAnswer: 1,
    explanation: "The FAA publishes all official guidance, rule changes, waivers, and safety alerts on its UAS website. The DroneZone handles registrations and authorizations. B4UFLY shows real-time airspace. FAASTeam offers recurrent training."
  },
  {
    id: 300,
    text: "What is the single most important principle in drone operations?",
    options: [
      "Always fly as high as possible",
      "Safety first — no mission is worth compromising safety. Know when to say no.",
      "Always fly faster than the wind",
      "Never refuse a client request"
    ],
    correctAnswer: 1,
    explanation: "The most important principle in all aviation is safety. No operation, deadline, or client request is worth risking lives, property, or your certificate. Good decision-making — including the discipline to say 'no' — defines a professional pilot."
  }
];