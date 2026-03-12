import React from "react";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  /** Main app entry UI: renders the Settings Home sidebar as specified in Figma node 37:2118. */
  return (
    <div className="kavia-page" aria-label="Settings Home">
      <aside className="kavia-sidebar" aria-label="Sidebar navigation">
        <div className="kavia-sidebarHeader">
          <div className="kavia-brand">
            <div className="kavia-brandTextWrap">
              <span className="kavia-brandText">KAVIA AI</span>
            </div>
          </div>

          <img
            className="kavia-brandMark"
            src="/assets/kavia-sidebar-brandmark.svg"
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="kavia-sidebarBody">
          <div className="kavia-navTop">
            <button type="button" className="kavia-btnNewChat">
              <span className="kavia-btnNewChatIconWrap" aria-hidden="true">
                <span className="kavia-btnNewChatIcon" />
              </span>
              <span className="kavia-btnNewChatText">New Chat</span>
            </button>

            <button type="button" className="kavia-btnNav">
              <img
                className="kavia-btnNavIcon"
                src="/assets/icon-chats.svg"
                alt=""
                aria-hidden="true"
              />
              <span className="kavia-btnNavText">Chats</span>
            </button>

            <button type="button" className="kavia-btnNav kavia-btnNav--projects">
              <img
                className="kavia-btnNavIcon"
                src="/assets/icon-projects.svg"
                alt=""
                aria-hidden="true"
              />
              <span className="kavia-btnNavText">Projects</span>
            </button>
          </div>

          <section className="kavia-section" aria-label="Recent Projects">
            <button type="button" className="kavia-sectionHeader">
              <span className="kavia-sectionTitle">Recent Projects</span>
              <span className="kavia-sectionHeaderIcon" aria-hidden="true" />
            </button>

            <div className="kavia-sectionList" aria-hidden="true">
              <div className="kavia-sectionListInner" />
            </div>
          </section>

          <section className="kavia-section" aria-label="Recent Chats">
            <button type="button" className="kavia-sectionHeader">
              <span className="kavia-sectionTitle">Recent Chats</span>
              <span className="kavia-sectionHeaderIcon" aria-hidden="true" />
            </button>

            <div className="kavia-sectionList" aria-hidden="true">
              <div className="kavia-sectionListInner" />
            </div>
          </section>

          <button type="button" className="kavia-userRow" aria-label="User profile">
            <span className="kavia-avatar" aria-hidden="true">
              <span className="kavia-avatarLetter">S</span>
            </span>

            <span className="kavia-userText">
              <span className="kavia-userName">User</span>
              <span className="kavia-userEmail">user@kavia.ai</span>
            </span>
          </button>

          <img
            className="kavia-swoosh"
            src="/assets/kavia-swoosh.svg"
            alt=""
            aria-hidden="true"
          />
        </div>
      </aside>

      <main className="kavia-content" aria-label="Main content">
        {/* Figma node provided focuses on the left sidebar; main area intentionally blank. */}
      </main>
    </div>
  );
}

export default App;
