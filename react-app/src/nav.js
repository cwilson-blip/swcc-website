export const APPLY_URL =
  "https://swcc.populiweb.com/router/admissions/onlineapplications/index?source=65912";
export const ATHLETICS_URL = "https://www.swccramathletics.com/landing/index";
export const LECTURESHIP_URL = "https://www.swcclectureship.com/";
export const PURCHASE_SEATS_URL =
  "https://www.tickettailor.com/events/southwesternchristiancollege/1233313";

export const NAV = [
  {
    label: "About",
    href: "/about",
    children: [
      ["Our School", "/about"],
      ["Meet Our President", "/president"],
      ["Meet Our Board", "/board"],
      ["Meet Our Faculty & Staff", "/faculty-staff"],
      ["Guiding Philosophy", "/guiding-philosophy"],
      ["Our History", "/history"],
      ["Videos", "/videos"],
      ["Alumni", "/alumni"],
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      ["Admissions Overview", "/admissions"],
      ["How To Enroll", "/how-to-enroll"],
      ["Campus Housing", "/campus-housing"],
      ["Tuition & Fees", "/tuition-fees"],
      ["Preview Day 2026", "/preview-day"],
      ["Admissions (International)", "/admissions-international"],
      ["Next Steps for Admitted RAMs", "/admitted-next-steps"],
      ["Transcript Request", "/transcript-request"],
    ],
  },
  {
    label: "Financial Aid",
    href: "/financial-aid",
    children: [
      ["Financial Aid Office", "/financial-aid"],
      ["Scholarships", "/scholarships"],
      ["Grants", "/grants"],
      ["Loans", "/loans"],
      ["Work Study", "/work-study"],
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      ["Academics Overview", "/academics"],
      ["Degree Plans", "/degree-plans"],
      ["Online Classes", "/online-classes"],
      ["Academic Catalogs", "/academic-catalogs"],
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      ["Campus Life & Programs", "/programs"],
      ["Athletics", ATHLETICS_URL],
      ["A Cappella Chorus", "/chorus"],
      ["Career Opportunities", "/career"],
    ],
  },
  {
    label: "Initiatives",
    href: "/initiatives",
    children: [
      ["Institutional Effectiveness", "/institutional-effectiveness"],
      ["CARES Act", "/cares-act"],
      ["Title IX", "/title-ix"],
    ],
  },
  {
    label: "Events",
    href: "/events",
    children: [
      ["2026 Graduation", "/graduation"],
      ["2025 Lectureship", LECTURESHIP_URL],
      ["Purchase Seats", PURCHASE_SEATS_URL],
    ],
  },
  {
    label: "Consumer Info",
    href: "/consumer-information",
    children: [
      ["Overview", "/consumer-information"],
      ["Resources", "/resources"],
      ["Default Prevention", "/default-prevention"],
      ["Campus Directory", "/directory"],
      ["Policy Statements", "/policy-statements"],
      ["Student Grievance Policy", "/grievance-policy"],
      ["Our Services", "/services"],
      ["Doris Johnson Library", "/library"],
      ["Center for Student Success", "/student-success"],
      ["Campus Renovations", "/campus-renovations"],
      ["Campus Safety", "/campus-safety"],
      ["Transcript Request", "/transcript-request"],
    ],
  },
];

export const UTILITY = [
  ["Student Achievement", "/student-achievement"],
  ["Donate", "/donate"],
  ["Transcript Request", "/transcript-request"],
  ["Contact", "/contact"],
];

function isExternal(href) {
  return href.startsWith("http");
}

export { isExternal };
