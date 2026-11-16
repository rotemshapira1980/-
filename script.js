const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
const mobileViewport = window.matchMedia("(max-width: 700px)");
let lastFocusedElement = document.activeElement;

document.addEventListener("focusin", (event) => {
  lastFocusedElement = event.target;
});

function setMenuOpen(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.querySelector(".menu-label").textContent = open ? "סגירה" : "תפריט";
}

menuToggle.hidden = false;

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || !mobileViewport.matches) return;

  setMenuOpen(false);
  const destination = document.querySelector(link.hash);
  destination.setAttribute("tabindex", "-1");
  destination.focus({ preventScroll: true });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileViewport.matches && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

mobileViewport.addEventListener("change", () => {
  const navigationHadFocus = navigation.contains(lastFocusedElement);
  setMenuOpen(false);
  if (mobileViewport.matches && navigationHadFocus) menuToggle.focus();
});

const exercises = [
  { id: "hundred-mat", name: "מאה", original: "The Hundred", equipment: "mat", duration: 4, category: "חימום וחיבור לנשימה" },
  { id: "roll-up", name: "גלגול מעלה", original: "Roll Up", equipment: "mat", duration: 3, category: "כפיפה וגלגול" },
  { id: "roll-over", name: "גלגול לאחור", original: "Roll Over", equipment: "mat", duration: 3, category: "כפיפה וגלגול" },
  { id: "one-leg-circle", name: "מעגל רגל אחת", original: "One Leg Circle", equipment: "mat", duration: 3, category: "עבודת רגליים" },
  { id: "rolling-like-a-ball", name: "מתגלגלת כמו כדור", original: "Rolling Like a Ball", equipment: "mat", duration: 2, category: "כפיפה וגלגול" },
  { id: "single-leg-stretch", name: "מתיחת רגל אחת", original: "Single Leg Stretch", equipment: "mat", duration: 3, category: "סדרת הבטן" },
  { id: "double-leg-stretch", name: "מתיחת שתי רגליים", original: "Double Leg Stretch", equipment: "mat", duration: 3, category: "סדרת הבטן" },
  { id: "spine-stretch-forward", name: "מתיחת עמוד השדרה לפנים", original: "Spine Stretch Forward", equipment: "mat", duration: 3, category: "תנועת עמוד השדרה" },
  { id: "open-leg-rocker", name: "נדנוד ברגליים פתוחות", original: "Open Leg Rocker", equipment: "mat", duration: 3, category: "כפיפה וגלגול" },
  { id: "corkscrew-mat", name: "חולץ פקקים", original: "Corkscrew", equipment: "mat", duration: 3, category: "עבודת רגליים" },
  { id: "saw", name: "המסור", original: "Saw", equipment: "mat", duration: 3, category: "תנועת עמוד השדרה" },
  { id: "swan-dive", name: "צלילת ברבור", original: "Swan Dive", equipment: "mat", duration: 3, category: "פשיטה ותמיכת גב" },
  { id: "single-leg-kick", name: "בעיטת רגל אחת", original: "Single Leg Kick", equipment: "mat", duration: 3, category: "פשיטה ותמיכת גב" },
  { id: "double-leg-kick", name: "בעיטת שתי רגליים", original: "Double Leg Kick", equipment: "mat", duration: 3, category: "פשיטה ותמיכת גב" },
  { id: "neck-pull", name: "משיכת עורף", original: "Neck Pull", equipment: "mat", duration: 3, category: "סדרת הבטן" },
  { id: "scissors-bicycle", name: "מספריים ואופניים", original: "Scissors / Bicycle", equipment: "mat", duration: 3, category: "סדרת הבטן" },
  { id: "shoulder-bridge", name: "גשר כתפיים", original: "Shoulder Bridge", equipment: "mat", duration: 3, category: "עבודת רגליים" },
  { id: "spine-twist", name: "סיבוב עמוד השדרה", original: "Spine Twist", equipment: "mat", duration: 2, category: "תנועת עמוד השדרה" },
  { id: "jack-knife", name: "סכין", original: "Jack Knife", equipment: "mat", duration: 3, category: "עבודת רגליים" },
  { id: "side-kick-series", name: "סדרת בעיטות צד", original: "Side Kick Series", equipment: "mat", duration: 4, category: "עבודת צד" },
  { id: "teaser", name: "טיזר", original: "Teaser", equipment: "mat", duration: 3, category: "סדרת הבטן" },
  { id: "swimming", name: "שחייה", original: "Swimming", equipment: "mat", duration: 3, category: "פשיטה ותמיכת גב" },
  { id: "seal", name: "כלב ים", original: "Seal", equipment: "mat", duration: 2, category: "כפיפה וגלגול" },
  { id: "push-up", name: "שכיבת סמיכה", original: "Push Up", equipment: "mat", duration: 3, category: "סיום" },
  { id: "footwork", name: "עבודת רגליים", original: "Footwork", equipment: "reformer", duration: 6, category: "חימום ועבודת רגליים" },
  { id: "hundred-reformer", name: "מאה", original: "The Hundred", equipment: "reformer", duration: 4, category: "חימום וחיבור לנשימה" },
  { id: "overhead-reformer", name: "אוברהד", original: "Overhead", equipment: "reformer", duration: 3, category: "עבודת רגליים" },
  { id: "coordination", name: "קואורדינציה", original: "Coordination", equipment: "reformer", duration: 3, category: "סדרת הבטן" },
  { id: "rowing-series", name: "סדרת חתירה", original: "Rowing Series", equipment: "reformer", duration: 5, category: "עבודת ידיים ותנועה" },
  { id: "short-box-series", name: "סדרת קופסה קצרה", original: "Short Box Series", equipment: "reformer", duration: 6, category: "תנועת עמוד השדרה" },
  { id: "long-box-pulling-straps", name: "משיכת רצועות", original: "Pulling Straps", equipment: "reformer", duration: 3, category: "עבודת ידיים ותמיכת גב" },
  { id: "long-box-t", name: "טי", original: "T-Pull", equipment: "reformer", duration: 3, category: "עבודת ידיים ותמיכת גב" },
  { id: "long-box-backstroke", name: "שחייה על קופסה", original: "Backstroke", equipment: "reformer", duration: 3, category: "סדרת הבטן" },
  { id: "elephant", name: "פיל", original: "Elephant", equipment: "reformer", duration: 3, category: "עבודת רגליים" },
  { id: "knee-stretches", name: "מתיחות ברכיים", original: "Knee Stretches", equipment: "reformer", duration: 4, category: "עבודת רגליים" },
  { id: "running-pelvic-lift", name: "ריצה והרמת אגן", original: "Running / Pelvic Lift", equipment: "reformer", duration: 4, category: "עבודת רגליים" },
  { id: "long-stretch-series", name: "סדרת מתיחות ארוכות", original: "Long Stretch Series", equipment: "reformer", duration: 5, category: "תמיכת גוף וזרימה" },
  { id: "stomach-massage", name: "עיסוי בטן", original: "Stomach Massage", equipment: "reformer", duration: 5, category: "עבודת רגליים" },
  { id: "tendon-stretch", name: "מתיחת גידים", original: "Tendon Stretch", equipment: "reformer", duration: 3, category: "עבודת רגליים" },
  { id: "short-spine-massage", name: "עיסוי עמוד שדרה קצר", original: "Short Spine Massage", equipment: "reformer", duration: 3, category: "תנועת עמוד השדרה" },
  { id: "long-spine-massage", name: "עיסוי עמוד שדרה ארוך", original: "Long Spine Massage", equipment: "reformer", duration: 3, category: "תנועת עמוד השדרה" },
  { id: "semi-circle", name: "חצי מעגל", original: "Semi-Circle", equipment: "reformer", duration: 3, category: "תנועת עמוד השדרה" },
  { id: "chest-expansion", name: "הרחבת בית החזה", original: "Chest Expansion", equipment: "reformer", duration: 3, category: "עבודת ידיים ויציבה" },
  { id: "thigh-stretch", name: "מתיחת ירך", original: "Thigh Stretch", equipment: "reformer", duration: 3, category: "עבודת רגליים" },
  { id: "arm-circles", name: "מעגלי ידיים", original: "Arm Circles", equipment: "reformer", duration: 3, category: "עבודת ידיים ויציבה" },
  { id: "snake-twist", name: "נחש וסיבוב", original: "Snake / Twist", equipment: "reformer", duration: 4, category: "תמיכת גוף וזרימה" },
  { id: "control-balance", name: "שליטה ואיזון", original: "Control Balance", equipment: "reformer", duration: 3, category: "תמיכת גוף וזרימה" }
];

const exerciseGuides = {
  "hundred-mat": {
    instructions: "שוכבים על הגב, מאריכים את הידיים ומבצעים פעימות קטנות לצד הגוף תוך נשימה קצבית ושמירה על מרכז יציב.",
    focus: ["שרירי הבטן העמוקים", "כופפי הירך", "שליטה בנשימה"],
    motion: { torso: -5, arms: -24, nearLeg: 12, farLeg: 8, carriage: 0, duration: 2.6 }
  },
  "roll-up": {
    instructions: "מתחילים בשכיבה, מושיטים ידיים ומגלגלים את עמוד השדרה מעלה לישיבה ולכפיפה לפנים, ואז חוזרים לאט לשכיבה.",
    focus: ["שרירי הבטן", "מכופפי עמוד השדרה", "מייצבי האגן"],
    motion: { torso: -22, arms: 18, nearLeg: 8, farLeg: 3, carriage: 0, duration: 3.2 }
  },
  "roll-over": {
    instructions: "בשכיבה על הגב מעלים רגליים ומגלגלים את האגן מעל הראש בטווח נוח, ואז מניחים את הגב בהדרגה.",
    focus: ["שרירי הבטן", "מייצבי עמוד השדרה", "מכופפי הירך"],
    motion: { torso: -25, arms: -8, nearLeg: 32, farLeg: 25, carriage: 0, duration: 3.5 }
  },
  "one-leg-circle": {
    instructions: "שוכבים על הגב, רגל אחת נשארת מוארכת והשנייה מציירת מעגלים מבוקרים; שומרים שהאגן לא יתנדנד.",
    focus: ["מייצבי האגן", "כופפי הירך", "שרירי הבטן העמוקים"],
    motion: { torso: 2, arms: -4, nearLeg: 24, farLeg: -6, carriage: 0, duration: 2.8 }
  },
  "rolling-like-a-ball": {
    instructions: "מתאזנים בישיבה מעוגלת, מתגלגלים לאחור עד אזור השכמות וחוזרים לנקודת האיזון בלי להישען על הצוואר.",
    focus: ["שרירי הבטן", "מייצבי האגן", "שרירי הגב"],
    motion: { torso: -17, arms: -18, nearLeg: 20, farLeg: 16, carriage: 0, duration: 2.4 }
  },
  "single-leg-stretch": {
    instructions: "בשכיבה, מקרבים ברך אחת לכיוון הגוף ומאריכים את הרגל השנייה; מחליפים צדדים תוך שמירה על מרכז יציב.",
    focus: ["שרירי הבטן", "כופפי הירך", "מייצבי האגן"],
    motion: { torso: -8, arms: 9, nearLeg: 26, farLeg: -20, carriage: 0, duration: 2.7 }
  },
  "double-leg-stretch": {
    instructions: "מקרבים את שתי הברכיים, שולחים ידיים ורגליים הרחק מהמרכז ואז אוספים אותן בחזרה בתנועה נשלטת.",
    focus: ["שרירי הבטן העמוקים", "כופפי הירך", "מייצבי הכתפיים"],
    motion: { torso: -10, arms: 28, nearLeg: -22, farLeg: -18, carriage: 0, duration: 2.8 }
  },
  "spine-stretch-forward": {
    instructions: "יושבים זקוף עם רגליים נוחות לפנים, מאריכים את עמוד השדרה ומתגלגלים בכפיפה לפנים, ואז מתיישרים.",
    focus: ["שרירי הבטן", "זוקפי הגב", "שרירי הירך האחורית"],
    motion: { torso: -20, arms: 24, nearLeg: 3, farLeg: 2, carriage: 0, duration: 3.1 }
  },
  "open-leg-rocker": {
    instructions: "מתאזנים מאחורי עצמות הישיבה כשהרגליים פתוחות, מתגלגלים לאחור וחוזרים לאיזון תוך שמירה על אחיזה יציבה.",
    focus: ["שרירי הבטן", "כופפי הירך", "מייצבי עמוד השדרה"],
    motion: { torso: -18, arms: 15, nearLeg: 24, farLeg: -20, carriage: 0, duration: 2.9 }
  },
  "corkscrew-mat": {
    instructions: "בשכיבה, מחזיקים את הרגליים יחד ומציירים מעגל מבוקר באוויר; האגן נשאר יציב וטווח התנועה נוח.",
    focus: ["שרירי הבטן האלכסוניים", "שרירי הבטן העמוקים", "כופפי הירך"],
    motion: { torso: -4, arms: -5, nearLeg: 30, farLeg: 24, carriage: 0, duration: 3.1 }
  },
  "saw": {
    instructions: "יושבים עם רגליים פתוחות, מסובבים את בית החזה לכיוון רגל אחת ומושיטים את היד הנגדית לפנים; חוזרים ומחליפים צד.",
    focus: ["שרירי הבטן האלכסוניים", "זוקפי הגב", "שרירי הירך האחורית"],
    motion: { torso: -16, arms: 24, nearLeg: 2, farLeg: -2, carriage: 0, duration: 2.8 }
  },
  "swan-dive": {
    instructions: "שוכבים על הבטן ומאריכים את בית החזה קדימה ומעלה בעזרת שרירי הגב; מבצעים את הנדנוד רק בהדרכה מתאימה.",
    focus: ["זוקפי הגב", "שרירי העכוז", "מייצבי השכמות"],
    motion: { torso: 20, arms: -18, nearLeg: 8, farLeg: 6, carriage: 0, duration: 3.2 }
  },
  "single-leg-kick": {
    instructions: "בשכיבה על הבטן ובתמיכה על האמות, מכופפים ברך אחת לכיוון העכוז ומאריכים אותה בחזרה; מחליפים רגל.",
    focus: ["שרירי הירך האחורית", "שרירי העכוז", "זוקפי הגב"],
    motion: { torso: 8, arms: -12, nearLeg: 26, farLeg: -8, carriage: 0, duration: 2.7 }
  },
  "double-leg-kick": {
    instructions: "שוכבים על הבטן, מכופפים את שתי הברכיים ואז מאריכים אותן תוך פתיחת בית החזה; חוזרים בשליטה.",
    focus: ["זוקפי הגב", "שרירי העכוז", "שרירי הירך האחורית"],
    motion: { torso: 16, arms: 22, nearLeg: 24, farLeg: 18, carriage: 0, duration: 3 }
  },
  "neck-pull": {
    instructions: "מתחילים בשכיבה עם ידיים מאחורי הראש, מתגלגלים לישיבה ולכפיפה לפנים, וחוזרים לאט בלי למשוך בצוואר.",
    focus: ["שרירי הבטן", "מכופפי עמוד השדרה", "מייצבי האגן"],
    motion: { torso: -22, arms: 14, nearLeg: 5, farLeg: 3, carriage: 0, duration: 3.4 }
  },
  "scissors-bicycle": {
    instructions: "בתנוחה מתקדמת על הגב, מאריכים רגל אחת ומחליפים ביניהן בתנועת מספריים או דיווש, תוך שליטה באגן.",
    focus: ["שרירי הבטן", "כופפי הירך", "שרירי העכוז"],
    motion: { torso: -6, arms: -6, nearLeg: 30, farLeg: -28, carriage: 0, duration: 2.6 }
  },
  "shoulder-bridge": {
    instructions: "שוכבים עם ברכיים כפופות, מרימים את האגן ליצירת קו נוח מהכתפיים לברכיים ומגלגלים את הגב מטה.",
    focus: ["שרירי העכוז", "שרירי הירך האחורית", "שרירי הבטן"],
    motion: { torso: 16, arms: -3, nearLeg: 8, farLeg: 6, carriage: 0, duration: 3.1 }
  },
  "spine-twist": {
    instructions: "יושבים זקוף עם רגליים מוארכות ונוחות, מסובבים את בית החזה מצד לצד כשהאגן נשאר יציב.",
    focus: ["שרירי הבטן האלכסוניים", "זוקפי הגב", "מייצבי האגן"],
    motion: { torso: 18, arms: 20, nearLeg: 2, farLeg: -2, carriage: 0, duration: 2.9 }
  },
  "jack-knife": {
    instructions: "מתרגיל מתקדם: מגלגלים את האגן מעלה מעל הכתפיים ומאריכים את הרגליים לתקרה, ואז יורדים בהדרגה.",
    focus: ["שרירי הבטן", "מייצבי עמוד השדרה", "שרירי הכתפיים"],
    motion: { torso: -26, arms: -8, nearLeg: 35, farLeg: 30, carriage: 0, duration: 3.5 }
  },
  "side-kick-series": {
    instructions: "שוכבים על הצד עם גוף מוארך, מרימים ומניעים את הרגל העליונה לפנים ולאחור בטווח נשלט.",
    focus: ["שריר העכוז האמצעי", "שרירי העכוז", "שרירי הבטן האלכסוניים"],
    motion: { torso: 7, arms: -5, nearLeg: 28, farLeg: -16, carriage: 0, duration: 2.7 }
  },
  "teaser": {
    instructions: "מתרגיל מתקדם: מתגלגלים לישיבה מאוזנת בצורת V, מאריכים את הידיים והרגליים ומורידים אותן בשליטה.",
    focus: ["שרירי הבטן", "כופפי הירך", "מייצבי עמוד השדרה"],
    motion: { torso: -24, arms: 22, nearLeg: 26, farLeg: 24, carriage: 0, duration: 3.2 }
  },
  "swimming": {
    instructions: "שוכבים על הבטן, מאריכים יד ורגל נגדית ומחליפים ביניהן בתנועות קטנות תוך שמירה על צוואר ארוך.",
    focus: ["זוקפי הגב", "שרירי העכוז", "מייצבי השכמות"],
    motion: { torso: 12, arms: 19, nearLeg: 21, farLeg: -18, carriage: 0, duration: 2.5 }
  },
  "seal": {
    instructions: "יושבים בעיגול, מחזיקים את הרגליים, מתגלגלים לאחור וחוזרים לישיבה מאוזנת עם מחיאות כף עדינות.",
    focus: ["שרירי הבטן", "כופפי הירך", "מייצבי האגן"],
    motion: { torso: -19, arms: -17, nearLeg: 18, farLeg: 14, carriage: 0, duration: 2.3 }
  },
  "push-up": {
    instructions: "מתגלגלים לפנים, הולכים עם הידיים לתנוחת פלאנק, מבצעים כפיפה ויישור של המרפקים וחוזרים בעזרת הידיים.",
    focus: ["שרירי החזה", "התלת-ראשי", "שרירי הבטן", "מייצבי הכתפיים"],
    motion: { torso: -9, arms: -26, nearLeg: 9, farLeg: 6, carriage: 0, duration: 3 }
  },
  "footwork": {
    instructions: "שוכבים על הרפורמר, מניחים את כפות הרגליים על המוט ודוחפים את המשטח החוצה ומחזירים בכיפוף ברכיים.",
    focus: ["שרירי הירך הקדמית", "שרירי העכוז", "שרירי השוק"],
    motion: { torso: 1, arms: 0, nearLeg: -15, farLeg: -12, carriage: 16, duration: 2.8 }
  },
  "hundred-reformer": {
    instructions: "בשכיבה עם רצועות בידיים, לוחצים את הידיים מטה בפעימות קטנות ונושמים בקצב; תנוחת הרגליים מותאמת ליכולת.",
    focus: ["שרירי הבטן העמוקים", "מייצבי הכתפיים", "כופפי הירך"],
    motion: { torso: -5, arms: -25, nearLeg: 10, farLeg: 7, carriage: 4, duration: 2.6 }
  },
  "overhead-reformer": {
    instructions: "מתרגיל מתקדם על הרפורמר: בתמיכת הכתפיים, מעלים את הרגליים מעל הראש ומחזירים אותן בתנועה מפרקית ומבוקרת.",
    focus: ["שרירי הבטן", "מייצבי עמוד השדרה", "שרירי הכתפיים"],
    motion: { torso: -25, arms: -8, nearLeg: 32, farLeg: 28, carriage: 6, duration: 3.6 }
  },
  "coordination": {
    instructions: "בשכיבה עם הרצועות, מכופפים ברכיים וידיים, מאריכים אותן יחד ואז אוספים בחזרה בתיאום עם הנשימה.",
    focus: ["שרירי הבטן", "התלת-ראשי", "כופפי הירך"],
    motion: { torso: -7, arms: -20, nearLeg: -18, farLeg: -15, carriage: 5, duration: 2.9 }
  },
  "rowing-series": {
    instructions: "יושבים מול הרצועות או בגבן, מאריכים את הגב ומניעים את הידיים ברצפי חתירה מותאמים.",
    focus: ["שרירי הגב העליון", "שרירי הכתפיים", "שרירי הבטן"],
    motion: { torso: 13, arms: -24, nearLeg: 2, farLeg: 1, carriage: 8, duration: 3.1 }
  },
  "short-box-series": {
    instructions: "יושבים על הקופסה עם רגליים מקובעות ברצועה ומתרגלים כפיפה, יישור, הטיה וסיבוב של עמוד השדרה.",
    focus: ["שרירי הבטן", "שרירי הבטן האלכסוניים", "זוקפי הגב"],
    motion: { torso: -18, arms: 17, nearLeg: 3, farLeg: 2, carriage: 0, duration: 3.3 }
  },
  "long-box-pulling-straps": {
    instructions: "שוכבים על הבטן על הקופסה, מחזיקים ברצועות ומושכים את הידיים לאורך הגוף תוך הארכת הגב.",
    focus: ["שרירי הגב הרחיביים", "שרירי הגב העליון", "זוקפי הגב"],
    motion: { torso: 16, arms: -28, nearLeg: 4, farLeg: 3, carriage: 12, duration: 3 }
  },
  "long-box-t": {
    instructions: "שוכבים על הבטן על הקופסה, פותחים את הידיים לצדדים ומושכים אותן לאחור בעדינות כנגד הרצועות.",
    focus: ["שרירי הכתף האחוריים", "שרירי הגב העליון", "מייצבי השכמות"],
    motion: { torso: 12, arms: 30, nearLeg: 4, farLeg: 2, carriage: 10, duration: 3 }
  },
  "long-box-backstroke": {
    instructions: "שוכבים על הגב על הקופסה, מחזיקים ברצועות ומניעים את הידיים והרגליים בתיאום במעגלים קטנים.",
    focus: ["שרירי הבטן", "מייצבי הכתפיים", "כופפי הירך"],
    motion: { torso: -8, arms: 24, nearLeg: -18, farLeg: -15, carriage: 7, duration: 2.8 }
  },
  "elephant": {
    instructions: "עומדים על המשטח עם ידיים על המוט, מרימים את האגן ומזיזים את המשטח קדימה ואחורה בלי לאבד את צורת הגב.",
    focus: ["שרירי הבטן", "שרירי הירך האחורית", "שרירי השוק"],
    motion: { torso: -14, arms: -9, nearLeg: 13, farLeg: 10, carriage: 14, duration: 3 }
  },
  "knee-stretches": {
    instructions: "כורעים על המשטח ומניחים ידיים על המוט, מניעים את המשטח קדימה ואחורה בכיפוף ויישור הברכיים.",
    focus: ["שרירי הירך הקדמית", "כופפי הירך", "שרירי הבטן"],
    motion: { torso: -6, arms: -11, nearLeg: -18, farLeg: -15, carriage: 15, duration: 2.5 }
  },
  "running-pelvic-lift": {
    instructions: "בשכיבה על הרפורמר דוחפים את המשטח, ואז מכופפים ומאריכים כל קרסול לסירוגין; בהרמת אגן שומרים על גשר יציב.",
    focus: ["שרירי השוק", "שרירי הירך האחורית", "שרירי העכוז"],
    motion: { torso: 11, arms: 0, nearLeg: 16, farLeg: -10, carriage: 12, duration: 2.7 }
  },
  "long-stretch-series": {
    instructions: "מתרגיל מתקדם: מחזיקים את המוט בתנוחת פלאנק ומניעים את המשטח בטווח קטן תוך שמירה על גוף מאורגן.",
    focus: ["שרירי הבטן", "מייצבי הכתפיים", "שרירי העכוז"],
    motion: { torso: -5, arms: -14, nearLeg: 6, farLeg: 4, carriage: 15, duration: 3 }
  },
  "stomach-massage": {
    instructions: "יושבים בקדמת המשטח, מניחים רגליים על המוט ומניעים את המשטח באמצעות כפיפה ויישור של הברכיים.",
    focus: ["שרירי הירך הקדמית", "שרירי הבטן", "שרירי העכוז"],
    motion: { torso: -14, arms: 18, nearLeg: -17, farLeg: -14, carriage: 13, duration: 3 }
  },
  "tendon-stretch": {
    instructions: "עומדים על המשטח עם ידיים על המוט, מאריכים את הרגליים ומזיזים את המשטח בעזרת עבודת הקרסוליים והגוף.",
    focus: ["שרירי השוק", "שרירי הבטן", "מייצבי הכתפיים"],
    motion: { torso: -7, arms: -12, nearLeg: 14, farLeg: 11, carriage: 11, duration: 3.1 }
  },
  "short-spine-massage": {
    instructions: "בשכיבה עם רצועות בכפות הרגליים, מגלגלים את האגן מעלה ומכופפים ברכיים, ואז מניחים את הגב בהדרגה.",
    focus: ["שרירי הבטן", "שרירי הירך האחורית", "מייצבי עמוד השדרה"],
    motion: { torso: -20, arms: -3, nearLeg: 28, farLeg: 24, carriage: 6, duration: 3.4 }
  },
  "long-spine-massage": {
    instructions: "בשכיבה עם רצועות בכפות הרגליים, מאריכים את הרגליים ומעלים את האגן בזהירות; מבצעים רק עם מדריכה.",
    focus: ["שרירי הבטן", "שרירי העכוז", "שרירי הירך האחורית"],
    motion: { torso: -23, arms: -4, nearLeg: 34, farLeg: 30, carriage: 7, duration: 3.6 }
  },
  "semi-circle": {
    instructions: "שוכבים עם הרגליים על המוט ומניחים את כפות הרגליים על המשטח, מרימים ומגלגלים את האגן בתיאום עם תנועת המשטח.",
    focus: ["שרירי העכוז", "שרירי הירך האחורית", "זוקפי הגב"],
    motion: { torso: 17, arms: -4, nearLeg: 10, farLeg: 8, carriage: 14, duration: 3.2 }
  },
  "chest-expansion": {
    instructions: "כורעים או עומדים מול הרצועות, מושכים את הידיים לאחור לאורך הגוף ומחזירים אותן באיטיות.",
    focus: ["שרירי הגב העליון", "שרירי הכתף האחוריים", "שרירי הבטן"],
    motion: { torso: 3, arms: -26, nearLeg: 5, farLeg: 3, carriage: 8, duration: 2.8 }
  },
  "thigh-stretch": {
    instructions: "כורעים על המשטח ומאריכים את הגוף לאחור מקו הברכיים, ואז חוזרים לכריעה תוך שמירה על האגן.",
    focus: ["שרירי הירך הקדמית", "שרירי העכוז", "שרירי הבטן"],
    motion: { torso: 22, arms: 18, nearLeg: -7, farLeg: -4, carriage: 3, duration: 3 }
  },
  "arm-circles": {
    instructions: "יושבים או כורעים מול הרצועות, מציירים מעגלים קטנים עם הידיים ושומרים על כתפיים רפויות וגב ארוך.",
    focus: ["שרירי הכתפיים", "מייצבי השכמות", "שרירי הבטן"],
    motion: { torso: 2, arms: 32, nearLeg: 3, farLeg: 1, carriage: 6, duration: 3.2 }
  },
  "snake-twist": {
    instructions: "מתרגיל מתקדם: בתמיכת הידיים על המוט, מסובבים ומניעים את הגוף והמשטח יחד בטווח מדויק ובהשגחה.",
    focus: ["שרירי הבטן האלכסוניים", "מייצבי הכתפיים", "שרירי הזרוע"],
    motion: { torso: 18, arms: -16, nearLeg: -14, farLeg: 17, carriage: 17, duration: 3.4 }
  },
  "control-balance": {
    instructions: "מתרגיל מתקדם: נשענים על הכתפיים ומניעים את הרגליים לסירוגין תוך שמירה על יציבות והכוונה צמודה.",
    focus: ["שרירי הבטן", "זוקפי הגב", "שרירי הירך האחורית"],
    motion: { torso: -21, arms: -5, nearLeg: 30, farLeg: -24, carriage: 6, duration: 3.6 }
  }
};

const accessories = [
  { id: "small-ball", name: "כדור קטן" },
  { id: "large-ball", name: "כדור גדול" },
  { id: "magic-circle", name: "טבעת פילאטיס" },
  { id: "balance-disc", name: "פיתה לשיווי משקל" },
  { id: "foam-roller", name: "גליל" },
  { id: "hand-weights", name: "משקולות יד" },
  { id: "resistance-band", name: "גומיית התנגדות" },
  { id: "stretch-strap", name: "רצועת מתיחה" }
];

const exerciseSelect = document.querySelector("#exercise-select");
const addExerciseButton = document.querySelector("#add-exercise");
const exerciseEmpty = document.querySelector("#exercise-empty");
const exerciseSearch = document.querySelector("#exercise-search");
const lessonList = document.querySelector("#lesson-list");
const lessonEmpty = document.querySelector("#lesson-empty");
const lessonTotal = document.querySelector("#lesson-total");
const lessonProgress = document.querySelector("#lesson-progress");
const lessonFeedback = document.querySelector("#lesson-feedback");
const clearLessonButton = document.querySelector("#clear-lesson");
const accessorySelect = document.querySelector("#accessory-select");
const addAccessoryButton = document.querySelector("#add-accessory");
const accessoryList = document.querySelector("#accessory-list");
const filterButtons = document.querySelectorAll(".filter-button");
const lessonExercises = [];
const lessonAccessories = [];
let selectedEquipment = "all";
let nextLessonItemId = 1;

function getLessonDuration() {
  return lessonExercises.reduce((total, item) => total + item.duration, 0);
}

function renderCatalog() {
  const search = exerciseSearch.value.trim().toLocaleLowerCase();
  const filteredExercises = exercises.filter((exercise) => {
    const matchesEquipment = selectedEquipment === "all" || exercise.equipment === selectedEquipment;
    const matchesSearch = `${exercise.name} ${exercise.original} ${exercise.category}`.toLocaleLowerCase().includes(search);
    return matchesEquipment && matchesSearch;
  });
  const fragment = document.createDocumentFragment();

  ["mat", "reformer"].forEach((equipment) => {
    const equipmentExercises = filteredExercises.filter((exercise) => exercise.equipment === equipment);
    if (equipmentExercises.length === 0) return;

    const group = document.createElement("optgroup");
    group.label = equipment === "mat" ? "מזרן" : "רפורמר";
    equipmentExercises.forEach((exercise) => {
      const option = document.createElement("option");
      option.value = exercise.id;
      option.textContent = `${exercise.name} · ${exercise.original} · כ־${exercise.duration} דקות`;
      group.append(option);
    });
    fragment.append(group);
  });

  exerciseSelect.replaceChildren(exerciseSelect.options[0], fragment);
  exerciseSelect.selectedIndex = 0;
  exerciseEmpty.hidden = filteredExercises.length > 0;
  updateAddButtons();
}

function renderLesson() {
  const fragment = document.createDocumentFragment();

  lessonExercises.forEach((item, index) => {
    const row = document.createElement("li");
    row.className = "lesson-item";
    const details = document.createElement("div");
    details.className = "lesson-item-details";
    const title = document.createElement("span");
    title.className = "lesson-item-title";
    title.textContent = item.name;
    const equipment = document.createElement("span");
    equipment.className = "lesson-item-equipment";
    equipment.textContent = item.equipment === "mat" ? "מזרן" : "רפורמר";
    details.append(title, equipment);

    const controls = document.createElement("div");
    controls.className = "lesson-item-controls";
    const durationLabel = document.createElement("label");
    durationLabel.className = "visually-hidden";
    durationLabel.htmlFor = `lesson-duration-${item.instanceId}`;
    durationLabel.textContent = `משך בדקות עבור ${item.name}`;
    const durationInput = document.createElement("input");
    durationInput.id = durationLabel.htmlFor;
    durationInput.type = "number";
    durationInput.min = "1";
    durationInput.max = "50";
    durationInput.step = "1";
    durationInput.value = String(item.duration);
    durationInput.dataset.lessonIndex = String(index);
    durationInput.setAttribute("inputmode", "numeric");
    const minutes = document.createElement("span");
    minutes.textContent = "דק׳";
    const removeButton = document.createElement("button");
    removeButton.className = "remove-exercise";
    removeButton.type = "button";
    removeButton.dataset.lessonIndex = String(index);
    removeButton.setAttribute("aria-label", `הסרת ${item.name} מהשיעור`);
    removeButton.textContent = "×";
    controls.append(durationLabel, durationInput, minutes, removeButton);
    row.append(details, controls);
    fragment.append(row);
  });

  lessonList.replaceChildren(fragment);
  const total = getLessonDuration();
  lessonTotal.textContent = String(total);
  lessonProgress.value = total;
  lessonEmpty.hidden = lessonExercises.length > 0;
  clearLessonButton.disabled = lessonExercises.length === 0;
  lessonFeedback.textContent = total === 50
    ? "הגעת ל־50 דקות. השיעור מוכן לתכנון."
    : total > 0
      ? `נשארו ${50 - total} דקות להשלמת השיעור.`
      : "הוסיפי תרגילים כדי להתחיל לבנות את השיעור.";
  lessonFeedback.classList.toggle("is-complete", total === 50);
  updateAddButtons();
}

function updateAddButtons() {
  const isFull = getLessonDuration() >= 50;
  addExerciseButton.disabled = isFull || !exerciseSelect.value;
}

function renderAccessories() {
  const fragment = document.createDocumentFragment();
  lessonAccessories.forEach((accessory) => {
    const item = document.createElement("li");
    item.className = "accessory-chip";
    const name = document.createElement("span");
    name.textContent = accessory.name;
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.dataset.accessoryId = accessory.id;
    removeButton.setAttribute("aria-label", `הסרת ${accessory.name} מהשיעור`);
    removeButton.textContent = "×";
    item.append(name, removeButton);
    fragment.append(item);
  });
  accessoryList.replaceChildren(fragment);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedEquipment = button.dataset.equipment;
    filterButtons.forEach((filterButton) => {
      filterButton.setAttribute("aria-pressed", String(filterButton === button));
    });
    renderCatalog();
  });
});

exerciseSearch.addEventListener("input", renderCatalog);

exerciseSelect.addEventListener("change", updateAddButtons);

addExerciseButton.addEventListener("click", () => {
  const exercise = exercises.find((item) => item.id === exerciseSelect.value);
  const remaining = 50 - getLessonDuration();
  if (!exercise || remaining <= 0) return;

  const duration = Math.min(exercise.duration, remaining);
  lessonExercises.push({ ...exercise, duration, instanceId: nextLessonItemId++ });
  exerciseSelect.selectedIndex = 0;
  renderLesson();
  if (duration < exercise.duration) {
    lessonFeedback.textContent = `נוספו ${duration} דקות ל${exercise.name}; משך התרגיל הותאם לזמן שנותר.`;
  }
});

lessonList.addEventListener("click", (event) => {
  const button = event.target.closest(".remove-exercise");
  if (!button) return;
  lessonExercises.splice(Number(button.dataset.lessonIndex), 1);
  renderLesson();
});

accessories.forEach((accessory) => {
  const option = document.createElement("option");
  option.value = accessory.id;
  option.textContent = accessory.name;
  accessorySelect.append(option);
});

accessorySelect.addEventListener("change", () => {
  addAccessoryButton.disabled = !accessorySelect.value;
});

addAccessoryButton.addEventListener("click", () => {
  const accessory = accessories.find((item) => item.id === accessorySelect.value);
  if (!accessory) return;

  if (lessonAccessories.some((item) => item.id === accessory.id)) {
    lessonFeedback.textContent = `${accessory.name} כבר נמצא ברשימת האביזרים לשיעור.`;
    return;
  }

  lessonAccessories.push(accessory);
  accessorySelect.selectedIndex = 0;
  addAccessoryButton.disabled = true;
  renderAccessories();
  lessonFeedback.textContent = `נוסף לשיעור: ${accessory.name}. האביזרים אינם משנים את משך השיעור.`;
});

accessoryList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-accessory-id]");
  if (!button) return;
  const accessoryIndex = lessonAccessories.findIndex((item) => item.id === button.dataset.accessoryId);
  if (accessoryIndex === -1) return;

  const [removedAccessory] = lessonAccessories.splice(accessoryIndex, 1);
  renderAccessories();
  lessonFeedback.textContent = `הוסר מהשיעור: ${removedAccessory.name}.`;
});

lessonList.addEventListener("change", (event) => {
  const input = event.target.closest("input[data-lesson-index]");
  if (!input) return;

  const index = Number(input.dataset.lessonIndex);
  const duration = Number(input.value);
  const currentDuration = lessonExercises[index].duration;
  const totalWithoutItem = getLessonDuration() - currentDuration;
  if (!Number.isInteger(duration) || duration < 1 || duration + totalWithoutItem > 50) {
    input.value = String(currentDuration);
    lessonFeedback.textContent = `הזיני מספר שלם בין 1 ל־${50 - totalWithoutItem} דקות כדי לא לעבור את 50 הדקות.`;
    return;
  }

  lessonExercises[index].duration = duration;
  renderLesson();
});

clearLessonButton.addEventListener("click", () => {
  lessonExercises.length = 0;
  lessonAccessories.length = 0;
  accessorySelect.selectedIndex = 0;
  addAccessoryButton.disabled = true;
  renderLesson();
  renderAccessories();
});

renderAccessories();
renderCatalog();
renderLesson();
