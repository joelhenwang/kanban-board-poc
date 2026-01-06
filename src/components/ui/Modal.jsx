import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Box from "./Box";

const SCREEN_ID = "kanban-app-modal-root";

function ensureModalRoot() {
  let modalRoot = document.getElementById(SCREEN_ID);

  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.id = SCREEN_ID;
    document.body.appendChild(modalRoot);
  }

  return modalRoot;
}

function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape" && isOpen) {
        onClose?.();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const modalContent = (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.75))",
        backdropFilter: "blur(2px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <Box
        borderRadius="16px"
        padding="24px"
        bg="#151515"
        borderColor="rgba(255,255,255,0.08)"
        boxShadow="0 20px 50px rgba(0,0,0,0.6)"
        style={{
          minWidth: "min(560px, 90vw)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <h2 style={{ margin: 0, color: "#fff", fontWeight: 500 }}>{title}</h2>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "1.2rem",
              cursor: "pointer",
              padding: "4px",
            }}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div>{children}</div>
      </Box>
    </div>
  );

  return ReactDOM.createPortal(modalContent, ensureModalRoot());
}

export default Modal;
