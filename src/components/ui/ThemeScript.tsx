export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){var t=localStorage.getItem('da-theme')||'light';document.documentElement.setAttribute('data-theme',t);})();`,
      }}
    />
  )
}
