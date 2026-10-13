import { watch, onBeforeUnmount, nextTick } from 'vue';
// Native dialog makes the background inert, traps focus and supports Escape.
export function useDialog(element, isOpen, close) {
 let trigger;
 let previousOverflow;
 let locked = false;
 function restore() {
  if (!locked) return;
  document.body.style.overflow = previousOverflow;
  locked = false;
  if (trigger?.isConnected) trigger.focus({ preventScroll: true });
 }
 watch(isOpen, async open => {
  if (open) {
   trigger = document.activeElement;
   await nextTick();
   if (!isOpen() || !element.value) return;
   previousOverflow = document.body.style.overflow;
   locked = true;
   document.body.style.overflow = 'hidden';
   element.value.showModal();
  } else {
   element.value?.close();
   restore();
  }
 });
 onBeforeUnmount(restore);
 function keydown(event) {
  if (event.key !== 'Tab') return;
  const targets = [...element.value.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')].filter(node => node.getClientRects().length);
  if (!targets.length) return;
  event.preventDefault();
  const index = targets.indexOf(document.activeElement);
  const next = index < 0 ? (event.shiftKey ? targets.length - 1 : 0) : (index + (event.shiftKey ? -1 : 1) + targets.length) % targets.length;
  targets[next].focus();
 }
 return { keydown, cancel(event) { event.preventDefault(); close(); }, backdrop(event) { if (event.target === element.value) close(); } };
}
