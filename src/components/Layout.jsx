function Layout({ title, children }) {
  return (
    <main className="desktop">
      <section className="window">
        <div className="window__content">
          <h2 className="section-title">{title}</h2>
          {children}
        </div>
      </section>
    </main>
  );
}

export default Layout;