"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "./Button";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  confirmLabel?: string;
  onConfirm?: () => void;
  isDestructive?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  confirmLabel,
  onConfirm,
  isDestructive = false,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby={description ? "modal-description" : undefined}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="w-full sm:max-w-md bg-surface border-t sm:border border-surface-border rounded-t-2xl sm:rounded-2xl shadow-raised p-6 pb-safe animate-in slide-in-from-bottom duration-250 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 id="modal-title" className="text-lg font-semibold text-foreground">
              {title}
            </h2>
            {description && (
              <p id="modal-description" className="text-sm text-muted mt-1">
                {description}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="text-muted hover:text-foreground p-1 rounded-md transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mb-6 text-sm text-foreground/90">{children}</div>

        <div className="flex gap-3 justify-end">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          {onConfirm && (
            <Button
              variant={isDestructive ? "secondary" : "primary"}
              className={isDestructive ? "!text-red-600 !border-red-200 hover:!bg-red-50" : ""}
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              {confirmLabel || "Confirm"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
