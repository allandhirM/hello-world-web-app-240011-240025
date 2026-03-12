import React from "react";
import "./SkillsModal.css";

const SKILLS = [
  {
    key: "codeGeneration",
    title: "Code Generation",
    description: "Generate and modify code",
    recommended: true,
    enabled: true,
  },
  {
    key: "debuggingAssistant",
    title: "Debugging Assistant",
    description: "Assist with debugging and answer",
    recommended: true,
    enabled: true,
  },
  {
    key: "refactoring",
    title: "Refactoring",
    description: "Suggest code improvements and refactors",
    recommended: false,
    enabled: false,
  },
  {
    key: "testGeneration",
    title: "Test Generation",
    description: "Create and run integration tests",
    recommended: false,
    enabled: false,
  },
  {
    key: "documentation",
    title: "Documentation",
    description: "Generate comments and markdown docs",
    recommended: false,
    enabled: true,
  },
];

// PUBLIC_INTERFACE
export default function SkillsModal({ open, onClose, onSave }) {
  /** Modal dialog that matches the “Skills for this chat” screenshot. */
  const [state, setState] = React.useState(() => {
    const initial = {};
    for (const s of SKILLS) initial[s.key] = s.enabled;
    return initial;
  });

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="skillsModalOverlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className="skillsModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="skillsModalTitle"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <header className="skillsModalHeader">
          <div className="skillsModalHeaderText">
            <h2 id="skillsModalTitle" className="skillsModalTitle">
              Skills for this chat
            </h2>
            <p className="skillsModalSubtitle">Changes apply only to this chat.</p>
          </div>

          <button
            type="button"
            className="skillsModalClose"
            aria-label="Close"
            onClick={() => onClose?.()}
          >
            ×
          </button>
        </header>

        <section className="skillsModalBody">
          <div className="skillsModalBodyInner">
            <div className="skillsModalSectionLabel">Enabled Skills</div>

            <div className="skillsModalList" role="list" aria-label="Enabled skills">
              {SKILLS.map((skill, idx) => (
                <div
                  key={skill.key}
                  className={`skillsModalRow ${idx === 0 ? "isFirst" : ""}`}
                  role="listitem"
                >
                  <div className="skillsModalRowLeft">
                    <div className="skillsModalRowTitleLine">
                      <div className="skillsModalRowTitle">{skill.title}</div>
                      {skill.recommended ? (
                        <span className="skillsModalBadge">Recommended</span>
                      ) : null}
                    </div>
                    <div className="skillsModalRowDesc">{skill.description}</div>
                  </div>

                  <label className="skillsModalToggle" aria-label={`${skill.title} toggle`}>
                    <input
                      type="checkbox"
                      checked={!!state[skill.key]}
                      onChange={(e) =>
                        setState((prev) => ({ ...prev, [skill.key]: e.target.checked }))
                      }
                    />
                    <span className="skillsModalToggleTrack" aria-hidden="true">
                      <span className="skillsModalToggleKnob" aria-hidden="true" />
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="skillsModalFooter">
          <button type="button" className="skillsModalManage">
            <span>Manage full settings</span>
            <span className="skillsModalManageArrow" aria-hidden="true">
              →
            </span>
          </button>

          <div className="skillsModalActions">
            <button type="button" className="skillsModalBtn skillsModalBtnSecondary" onClick={() => onClose?.()}>
              Cancel
            </button>
            <button
              type="button"
              className="skillsModalBtn skillsModalBtnPrimary"
              onClick={() => onSave?.(state)}
            >
              Save
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
