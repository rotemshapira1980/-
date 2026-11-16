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
