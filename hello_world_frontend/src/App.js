import React, { useEffect, useRef, useState } from "react";
import "./App.css";

/**
 * Minimal implementation of Figma node 36:108 "CGA Settings Menu - Skills".
 * This screen is a frame-accurate layout that includes:
 * - Left menu panel (420px wide)
 * - Thin icon rail (60px wide)
 * - Bottom input/utility card
 * - Dimmed overlay + centered modal dialog
 */

// PUBLIC_INTERFACE
function App() {
  /** Main app entry UI: renders Figma node 36:108 "CGA Settings Menu - Skills". */

  const [isModalOpen, setIsModalOpen] = useState(true);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    // Basic accessibility: move focus into the dialog when it opens.
    // (A full focus trap isn't added to keep dependencies minimal.)
    if (closeButtonRef.current) closeButtonRef.current.focus();

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  return (
    <div className="cga108-page" aria-label="CGA Settings Menu - Skills">
      {/* Background app shell */}
      <div className="cga108-shell" aria-hidden={isModalOpen ? "true" : "false"}>
        <aside className="cga108-rail" aria-label="Icon rail">
          <img
            className="cga108-railTopIcon"
            src="/assets/cga-rail-top-icon.svg"
            alt=""
            aria-hidden="true"
          />

          <div className="cga108-railDivider" aria-hidden="true" />

          <img
            className="cga108-railIcons"
            src="/assets/cga-rail-icons.svg"
            alt=""
            aria-hidden="true"
          />

          <button type="button" className="cga108-railAvatar" aria-label="User profile">
            <span className="cga108-railAvatarLetter">S</span>
          </button>
        </aside>

        <section className="cga108-leftPanel" aria-label="Left menu">
          <header className="cga108-leftHeader">
            <button type="button" className="cga108-leftHeaderButton" aria-label="Menu">
              <img
                src="/assets/cga-left-header-button.svg"
                alt=""
                aria-hidden="true"
                className="cga108-leftHeaderButtonIcon"
              />
            </button>

            <h1 className="cga108-leftTitle">To do app</h1>
          </header>

          <div className="cga108-leftSpacer" aria-hidden="true" />

          <div className="cga108-bottomIconWrap" aria-hidden="true">
            <img
              className="cga108-bottomIcon"
              src="/assets/cga-left-bottom-icon.svg"
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="cga108-inputDock" aria-label="Quick input">
            <div className="cga108-inputCard">
              <div className="cga108-inputRow">
                <span className="cga108-inputPlaceholder">How can I help you today?</span>
              </div>

              <div className="cga108-actionsRow">
                <div className="cga108-actionsLeft" aria-hidden="true">
                  <button type="button" className="cga108-pillButton" aria-label="Quick action 1">
                    <span className="cga108-pillIcon" />
                  </button>
                  <button type="button" className="cga108-chip" aria-label="Quick action chip 1">
                    <span className="cga108-chipLabel" />
                    <span className="cga108-chipIcon" />
                  </button>
                  <button type="button" className="cga108-chip" aria-label="Quick action chip 2">
                    <span className="cga108-chipLabel" />
                    <span className="cga108-chipIcon" />
                  </button>
                </div>

                <div className="cga108-actionsRight" aria-hidden="true">
                  <button type="button" className="cga108-iconButton" aria-label="More options">
                    <img
                      src="/assets/cga-input-kebab.svg"
                      alt=""
                      aria-hidden="true"
                      className="cga108-iconButtonImg"
                    />
                  </button>

                  <button type="button" className="cga108-iconButton" aria-label="Send">
                    <img
                      src="/assets/cga-input-right-button.svg"
                      alt=""
                      aria-hidden="true"
                      className="cga108-iconButtonImg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="cga108-main" aria-label="Main area" />
      </div>

      {/* Modal overlay layer */}
      {isModalOpen ? (
        <div
          className="cga108-overlay"
          role="presentation"
          onMouseDown={(e) => {
            // Close only when clicking the dimmed backdrop, not inside the modal.
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div
            className="cga108-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cga108-modal-title"
            onMouseDown={(e) => {
              // Prevent backdrop close when mouse down originates inside modal.
              e.stopPropagation();
            }}
          >
            <div className="cga108-modalHeader">
              <div className="cga108-modalHeaderText">
                <div className="cga108-modalTitleRow">
                  <h2 id="cga108-modal-title" className="cga108-modalTitle">
                    Skills for this chat
                  </h2>
                </div>
                <p className="cga108-modalSubtitle">Changes apply only to this chat.</p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                className="cga108-modalClose"
                aria-label="Close"
                onClick={() => setIsModalOpen(false)}
              >
                <img
                  src="/assets/cga-modal-close.svg"
                  alt=""
                  aria-hidden="true"
                  className="cga108-modalCloseImg"
                />
              </button>
            </div>

            <div className="cga108-modalBody">
              <div className="cga108-bodyInner">
                <div className="cga108-bodyHeading">
                  <span className="cga108-bodyHeadingText">Enabled Skills</span>
                </div>

                <div className="cga108-skillList" aria-label="Enabled skills list">
                  <div className="cga108-skillRow" />
                  <div className="cga108-skillRow cga108-skillRow--outlined" />
                  <div className="cga108-skillRow cga108-skillRow--outlined" />
                  <div className="cga108-skillRow cga108-skillRow--outlined" />
                  <div className="cga108-skillRow cga108-skillRow--outlined" />
                </div>
              </div>
            </div>

            <div className="cga108-modalFooter">
              <button type="button" className="cga108-manageBtn">
                <span className="cga108-manageBtnText">Manage full settings</span>
                <img
                  className="cga108-manageBtnIcon"
                  src="/assets/cga-manage-settings-arrow.svg"
                  alt=""
                  aria-hidden="true"
                />
              </button>

              <div className="cga108-footerActions">
                <button
                  type="button"
                  className="cga108-btn cga108-btn--secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="button" className="cga108-btn cga108-btn--primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
