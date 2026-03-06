export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle px-6 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <p className="text-xs text-text-muted">
          &copy; {year} Logan Allen
        </p>
        <p className="text-xs text-text-muted">
          Houston, TX
        </p>
      </div>
    </footer>
  )
}
