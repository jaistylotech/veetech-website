import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function ContentProtection() {
  const location = useLocation();
  const isProtectedLegalRoute =
    location.pathname === "/privacy-policy" ||
    location.pathname === "/terms";

  useEffect(() => {
    // Prevent image context menu (Right Click -> Save Image As...)
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.tagName === "IMG" ||
        target?.closest("img") ||
        isProtectedLegalRoute ||
        target?.closest(".no-copy")
      ) {
        e.preventDefault();
      }
    };

    // Prevent image drag and drop
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.tagName === "IMG" || target?.closest("img")) {
        e.preventDefault();
      }
    };

    // Prevent text copying on legal/privacy pages
    const handleCopy = (e: ClipboardEvent) => {
      if (isProtectedLegalRoute) {
        e.preventDefault();
      }
    };

    // Prevent DevTools shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U) and save shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (Inspect Element)
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")
      ) {
        e.preventDefault();
      }
      // Ctrl+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
      }
      // Prevent Ctrl+S / Cmd+S saving on legal pages
      if (
        isProtectedLegalRoute &&
        (e.ctrlKey || e.metaKey) &&
        (e.key === "s" || e.key === "S")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProtectedLegalRoute]);

  return null;
}
