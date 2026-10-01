import {
  sendInquiry,
  validateInquiry,
  fieldNames,
  type FieldName,
  type Inquiry,
} from "./contact-contract.ts";
import "./project-explorer.ts";

const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
const mobileNav = document.querySelector<HTMLElement>("#mobile-navigation");
let focusBeforeMenu: HTMLElement | null = null;
function closeMenu(restoreFocus = false) {
  if (!menuButton || !mobileNav) return;
  mobileNav.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("menu-open");
  if (restoreFocus) (focusBeforeMenu || menuButton).focus();
}
function openMenu() {
  if (!menuButton || !mobileNav) return;
  focusBeforeMenu = document.activeElement as HTMLElement;
  mobileNav.hidden = false;
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Close menu");
  document.body.classList.add("menu-open");
  mobileNav.querySelector("a")?.focus();
}
menuButton?.addEventListener("click", () =>
  mobileNav?.hidden ? openMenu() : closeMenu(true),
);
mobileNav?.addEventListener("click", (event) => {
  if ((event.target as Element).closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (mobileNav?.hidden) return;
  if (event.key === "Escape") {
    closeMenu(true);
    return;
  }
  if (event.key !== "Tab") return;
  const focusables = [
    menuButton!,
    ...mobileNav!.querySelectorAll<HTMLAnchorElement>("a"),
  ];
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

const form = document.querySelector<HTMLFormElement>("#contact-form");
const status = document.querySelector<HTMLElement>("#form-status");
let noticeTimer: ReturnType<typeof setTimeout>;
function showStatus(message: string, state: string) {
  if (!status) return;
  clearTimeout(noticeTimer);
  status.textContent = message;
  status.dataset.state = state;
  noticeTimer = setTimeout(() => {
    status.textContent = "";
    status.dataset.state = "";
  }, 5000);
}
function showErrors(errors: Partial<Record<FieldName, string>>) {
  for (const name of fieldNames) {
    const input = form?.elements.namedItem(name) as HTMLElement | null;
    const error = document.getElementById(`${name}-error`);
    if (!input || !error) continue;
    error.textContent = errors[name] || "";
    if (errors[name]) input.setAttribute("aria-invalid", "true");
    else input.removeAttribute("aria-invalid");
  }
}
form?.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement | HTMLSelectElement;
  if (!fieldNames.includes(target.name as FieldName)) return;
  target.removeAttribute("aria-invalid");
  const error = document.getElementById(`${target.name}-error`);
  if (error) error.textContent = "";
});
form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form) return;
  const values = Object.fromEntries(
    fieldNames.map((name) => [
      name,
      String(
        (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement)
          .value,
      ).trim(),
    ]),
  ) as Inquiry;
  const errors = validateInquiry(values);
  showErrors(errors);
  if (Object.keys(errors).length) {
    showStatus("Please correct the highlighted fields.", "error");
    (form.elements.namedItem(Object.keys(errors)[0]) as HTMLElement).focus();
    return;
  }
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  if (!button) return;
  button.disabled = true;
  if (button.firstChild) button.firstChild.textContent = "Sending inquiry ";
  showStatus("Sending your inquiry…", "loading");
  try {
    const ok = await sendInquiry(values);
    if (ok) {
      form.reset();
      showErrors({});
      showStatus(
        "Your inquiry was sent. Thank you for contacting EMIKA.",
        "success",
      );
    } else
      showStatus(
        "We could not send your inquiry. Please try again or contact us by phone or email.",
        "error",
      );
  } catch {
    showStatus(
      "We could not send your inquiry. Please try again or contact us by phone or email.",
      "error",
    );
  } finally {
    button.disabled = false;
    if (button.firstChild) button.firstChild.textContent = "Send inquiry ";
  }
});

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const steps = document.querySelectorAll("[data-process-step]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle("is-active", entry.isIntersecting),
      );
    },
    { rootMargin: "-25% 0px -35% 0px" },
  );
  steps.forEach((step) => observer.observe(step));
}

// Reserved for future pairs photographed from an aligned camera position.
document
  .querySelectorAll<HTMLInputElement>("[data-aligned-slider]")
  .forEach((slider) => {
    slider.addEventListener("input", () => {
      slider
        .closest<HTMLElement>(".aligned-slider")
        ?.style.setProperty("--comparison-position", `${slider.value}%`);
      slider.setAttribute("aria-valuetext", `${slider.value}% after visible`);
    });
  });
